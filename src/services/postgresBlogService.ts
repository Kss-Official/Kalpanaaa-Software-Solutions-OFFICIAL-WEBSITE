import { BlogPost, CreateBlogSubmission, User } from '../types/blog';

const STORAGE_KEY_BLOGS = 'kalpana_postgres_blogs_v4';
const STORAGE_KEY_AUTH = 'kalpana_postgres_auth_user_v1';


/**
 * Read the cache of the last successful server response.
 *
 * This used to seed and re-merge the hardcoded INITIAL_BLOGS array on every
 * call, so a browser with a broken API still rendered a full blog page. That
 * made a dead backend look healthy and hid the fact that real posts were never
 * reaching the database. The cache now holds ONLY data the server actually
 * returned; seed content lives in the database (see INITIAL_SEED_BLOGS in
 * server.js), not in the client bundle.
 */
function loadStoredBlogs(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BLOGS);
    if (!raw) return [];
    const stored = JSON.parse(raw);
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveStoredBlogs(blogs: BlogPost[]) {
  try {
    localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(blogs));
  } catch (e) {
    console.error('Failed to persist blogs', e);
  }
}

const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
const API_BASE_URL = isLocal ? 'http://localhost:5000/api' : '/api';

/**
 * Extract a useful message from a failed API response.
 *
 * The API returns `{ error, detail, context }`; a misrouted request can return
 * the SPA's index.html instead, which we surface explicitly rather than letting
 * `res.json()` throw an opaque "Unexpected token <" parse error.
 */
async function describeFailure(res: Response, action: string): Promise<Error> {
  let detail = `HTTP ${res.status}`;
  try {
    const text = await res.text();
    if (text.trim().startsWith('<')) {
      detail =
        `the API route returned HTML instead of JSON (HTTP ${res.status}). ` +
        `The /api/* rewrite is not reaching server.js.`;
    } else {
      const body = JSON.parse(text);
      detail = body.error || body.detail || detail;
    }
  } catch {
    /* keep the status-code fallback */
  }
  return new Error(`${action} failed: ${detail}`);
}

/**
 * Write operations MUST NOT fall back to localStorage.
 *
 * The previous implementation caught every failure and wrote to localStorage
 * instead, then returned as if it had succeeded. The author saw a success
 * message, the post appeared on their own machine only, and nothing ever
 * reached Neon — with no error anywhere. Writes now propagate the real failure
 * so the UI can tell the user the post was not saved.
 */
async function writeRequest<T>(action: string, url: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url, init);
  } catch (networkErr) {
    throw new Error(
      `${action} failed: could not reach the server. ` +
      `Check your connection and try again. (${(networkErr as Error).message})`
    );
  }
  if (!res.ok) throw await describeFailure(res, action);
  return res.json() as Promise<T>;
}

export const postgresBlogService = {
  async authenticateUser(email: string, password_hash?: string): Promise<User | null> {
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) return null;

    // Authentication is server-side ONLY.
    //
    // This previously fell back to a client-side whitelist (including a
    // hardcoded 'admin123' admin password) whenever the API was unreachable.
    // That is why login appeared to work while the database was down: the
    // session was minted entirely in the browser. It also meant anyone reading
    // the JS bundle could authenticate as an admin. Both are fixed by requiring
    // a real server response.
    const endpoint = password_hash ? `${API_BASE_URL}/auth/admin-login` : `${API_BASE_URL}/auth/verify-email`;

    let res: Response;
    try {
      res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password: password_hash }),
      });
    } catch (networkErr) {
      throw new Error(
        `Could not reach the authentication server. Please try again. (${(networkErr as Error).message})`
      );
    }

    if (res.status === 401 || res.status === 403) return null; // genuine credential rejection
    if (!res.ok) throw await describeFailure(res, 'Signing in');

    const data = await res.json();
    localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(data.user));
    return data.user;
  },

  getCurrentUser(): User | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_AUTH);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },

  logout() { localStorage.removeItem(STORAGE_KEY_AUTH); },

  async submitBlog(data: CreateBlogSubmission): Promise<BlogPost> {
    // Throws on any failure — never silently saves to this browser only.
    return writeRequest<BlogPost>('Submitting your post', `${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  async getPublishedBlogs(): Promise<BlogPost[]> {
    const res = await fetch(`${API_BASE_URL}/blogs?status=PUBLISHED`);
    if (!res.ok) throw await describeFailure(res, 'Loading posts');
    const blogs: BlogPost[] = await res.json();
    saveStoredBlogs(blogs); // cache last-known-good server data for instant repaint
    return blogs;
  },

  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const raw = slug.trim();
    const res = await fetch(`${API_BASE_URL}/blogs/${encodeURIComponent(raw)}`);
    if (res.status === 404) return null;
    if (!res.ok) throw await describeFailure(res, 'Loading the post');
    return res.json();
  },

  async getBlogsByStatus(status?: string): Promise<BlogPost[]> {
    const url = status && status !== 'ALL' ? `${API_BASE_URL}/blogs?status=${status}` : `${API_BASE_URL}/blogs`;
    const res = await fetch(url);
    if (!res.ok) throw await describeFailure(res, 'Loading posts');
    const blogs: BlogPost[] = await res.json();
    saveStoredBlogs(blogs);
    return blogs;
  },

  /** Last-known-good server data, for instant repaint only. Never seed content. */
  getCachedBlogs(): BlogPost[] {
    return loadStoredBlogs();
  },

  /** One-request check of whether Vercel can actually reach Neon. */
  async checkHealth(): Promise<{ ok: boolean; [k: string]: unknown }> {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      return await res.json();
    } catch (e) {
      return { ok: false, error: (e as Error).message };
    }
  },

  async approveBlog(id: string): Promise<BlogPost | null> {
    const result = await writeRequest<{ blog: BlogPost }>(
      'Approving the post',
      `${API_BASE_URL}/blogs/${id}/approve`,
      { method: 'PUT' }
    );
    return result.blog;
  },

  async rejectBlog(id: string, reason?: string): Promise<BlogPost | null> {
    const result = await writeRequest<{ blog: BlogPost }>(
      'Rejecting the post',
      `${API_BASE_URL}/blogs/${id}/reject`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason }),
      }
    );
    return result.blog;
  },

  async deleteBlog(id: string): Promise<boolean> {
    await writeRequest<{ message: string }>(
      'Deleting the post',
      `${API_BASE_URL}/blogs/${id}`,
      { method: 'DELETE' }
    );
    return true;
  },
};
