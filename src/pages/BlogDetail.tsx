import { useEffect, useState, useRef, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { postgresBlogService } from '../services/postgresBlogService';
import { BlogPost } from '../types/blog';

// Flexible extract #, ## and ### headings for Table of Contents
function extractTOC(content: string): { id: string; title: string }[] {
  const headings: { id: string; title: string }[] = [];
  if (!content) return headings;

  const usedIds = new Map<string, number>();
  const lines = content.replace(/\r\n/g, '\n').split('\n');

  lines.forEach((line) => {
    const trimmed = line.trim();
    const match = trimmed.match(/^(#{1,3})\s*(.+)/);
    if (match && match[2].trim().length > 0 && match[2].trim().length < 90) {
      const title = match[2].trim();
      const rawSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const baseId = rawSlug || 'section';
      const count = (usedIds.get(baseId) || 0) + 1;
      usedIds.set(baseId, count);
      const id = count === 1 ? baseId : `${baseId}-${count}`;
      headings.push({ id, title });
    }
  });

  if (headings.length === 0 && content.trim().length > 0) {
    headings.push({ id: 'article-overview', title: '1. Article Overview' });
  }

  return headings;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Markdown-to-JSX renderer
function renderContent(content: string) {
  if (!content) return null;

  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const usedIds = new Map<string, number>();
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];

  const flushParagraph = (keyPrefix: string) => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        // Escape raw HTML entities to block Stored XSS payloads (e.g. <img onerror=...>)
        const safeText = escapeHtml(text);
        const rendered = safeText
          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink font-semibold">$1</strong>')
          .replace(/`(.+?)`/g, '<code class="bg-surface px-1.5 py-0.5 rounded text-brand font-mono text-[0.85em] border border-line break-all">$1</code>');

        elements.push(
          <p
            key={`p-${keyPrefix}-${elements.length}`}
            id={elements.length === 0 ? 'article-overview' : undefined}
            className="text-base md:text-lg text-ink/80 leading-relaxed my-5 break-words [word-break:break-word]"
            dangerouslySetInnerHTML={{ __html: rendered }}
          />
        );
      }
      currentParagraph = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph(`${idx}`);
      return;
    }

    const headerMatch = trimmed.match(/^(#{1,3})\s*(.*)/);
    if (headerMatch && headerMatch[2].trim().length > 0) {
      flushParagraph(`${idx}`);
      const hashes = headerMatch[1];
      const title = headerMatch[2].trim();

      const rawSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const baseId = rawSlug || 'section';
      const count = (usedIds.get(baseId) || 0) + 1;
      usedIds.set(baseId, count);
      const id = count === 1 ? baseId : `${baseId}-${count}`;

      if (hashes.length <= 2) {
        elements.push(
          <h2
            id={id}
            key={`h2-${idx}`}
            className="text-2xl md:text-3xl font-extrabold text-ink mt-12 mb-4 scroll-mt-28 font-display pb-3 border-b border-line break-words"
          >
            {title}
          </h2>
        );
      } else {
        elements.push(
          <h3
            id={id}
            key={`h3-${idx}`}
            className="text-xl font-bold text-ink mt-8 mb-3 font-display border-l-4 border-brand pl-3 break-words"
          >
            {title}
          </h3>
        );
      }
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushParagraph(`${idx}`);
      const itemText = trimmed.replace(/^[-*]\s+/, '');
      elements.push(
        <ul key={`ul-${idx}`} className="list-disc list-inside space-y-2.5 my-6 text-muted text-base leading-relaxed pl-2 bg-surface/60 p-4 rounded-xl border border-line break-words">
          <li className="text-ink/85 break-words">{itemText}</li>
        </ul>
      );
    } else {
      currentParagraph.push(trimmed);
    }
  });

  flushParagraph('final');
  return elements;
}

const CATEGORY_BADGE_CLS: Record<string, string> = {
  "AI":              "bg-violet-50 text-violet-700 border-violet-200",
  "App Development": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Web Development": "bg-blue-50 text-blue-700 border-blue-200",
  "Cloud":           "bg-orange-50 text-orange-700 border-orange-200",
};

const CATEGORY_HERO_BG: Record<string, string> = {
  "AI":              "from-violet-50 via-surface to-canvas",
  "App Development": "from-emerald-50 via-surface to-canvas",
  "Web Development": "from-blue-50 via-surface to-canvas",
  "Cloud":           "from-orange-50 via-surface to-canvas",
};

function formatReadTime(rt?: string) {
  if (!rt) return '';
  const num = parseInt(rt, 10);
  if (!isNaN(num)) return `${num} min read`;
  return rt;
}

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  // ── All hooks MUST be called before any conditional returns ──
  const toc = useMemo(() => (post ? extractTOC(post.content ?? '') : []), [post]);

  const formattedDate = useMemo(() => {
    if (!post) return '';
    const raw = post.publishedAt || post.createdAt;
    if (!raw) return '';
    try {
      return new Date(raw).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      });
    } catch {
      return '';
    }
  }, [post]);

  const badgeCls = post
    ? (CATEGORY_BADGE_CLS[post.category] ?? "bg-blue-50 text-blue-700 border-blue-200")
    : "bg-blue-50 text-blue-700 border-blue-200";
  const heroBg = post
    ? (CATEGORY_HERO_BG[post.category] ?? "from-blue-50 via-surface to-canvas")
    : "from-blue-50 via-surface to-canvas";

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setPost(null);
    postgresBlogService
      .getBlogBySlug(slug)
      .then((found) => {
        setPost(found ?? null);
      })
      .catch(() => {
        setPost(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);

  // Highlight active TOC section on scroll — depends on post
  useEffect(() => {
    if (!post) return;
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
        { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
      );
      document.querySelectorAll('h2[id], h3[id]').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 200);
    return () => clearTimeout(timer);
  }, [post]);

  // ── Conditional renders (after all hooks) ──
  if (isLoading) {
    return (
      <div className="site-page min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono text-brand uppercase tracking-widest">Loading Article…</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="site-page min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 rounded-full bg-surface border border-line flex items-center justify-center mx-auto text-muted">
            <BookOpen size={30} />
          </div>
          <h2 className="text-2xl font-bold text-ink">Article Not Found</h2>
          <p className="text-sm text-muted">
            This article may still be under review, doesn't exist, or the link may be incorrect.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="button-primary px-6 py-2.5 text-sm font-semibold rounded-xl inline-flex items-center gap-2"
          >
            <ArrowLeft size={15} /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="site-page min-h-screen">
      <SEO
        title={`${post.title} — Kalpanaaa Software Solutions`}
        description={post.summary ?? ''}
        canonical={`https://kalpanaaasoftwaresolutions.in/blog/${post.slug ?? post.id}`}
      />

      {/* ── Hero Header ── */}
      <section className={`relative bg-gradient-to-b ${heroBg} border-b border-line overflow-hidden pt-24 pb-12`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(23,105,213,0.05),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-brand hover:text-brand-deep mb-8 transition-colors"
          >
            <ArrowLeft size={13} /> Back to Blog
          </Link>

          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
            <div className="space-y-5 max-w-3xl">
              {/* Category badge + read time */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${badgeCls}`}>
                  {post.category}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1 text-xs text-muted font-mono">
                    <Clock size={12} /> {formatReadTime(post.readTime)}
                  </span>
                )}
                {/* Show PENDING banner for preview */}
                {post.status === 'PENDING_APPROVAL' && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border bg-amber-50 text-amber-700 border-amber-200">
                    Pending Review
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight font-display">
                {post.title}
              </h1>

              {/* Author + date row */}
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">
                    {(post.authorName ?? 'A').slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{post.authorName}</p>
                    <p className="text-[10px] text-muted font-mono">{post.authorEmail}</p>
                  </div>
                </div>
                {formattedDate && (
                  <>
                    <span className="h-4 w-px bg-line hidden sm:block" />
                    <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                      <Calendar size={12} /> {formattedDate}
                    </span>
                  </>
                )}
                {post.readTime && (
                  <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                    <Clock size={12} /> {post.readTime}
                  </span>
                )}
              </div>
            </div>

            {/* Share button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href).catch(() => {});
              }}
              className="button-secondary flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold"
            >
              <Share2 size={13} /> Share Link
            </button>
          </div>
        </div>
      </section>

      {/* ── Cover Image Banner ── */}
      {post.coverImage && (
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-line h-64 md:h-80 lg:h-96">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              decoding="async"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>
      )}

      {/* ── Article + Sticky TOC ── */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_272px] gap-10 items-start">

            {/* ── Article Body ── */}
            <div className="min-w-0 max-w-full overflow-hidden break-words">
              {/* Mobile TOC */}
              {toc.length > 0 && (
                <div className="lg:hidden mb-8 site-card rounded-2xl overflow-hidden bg-white">
                  <details className="group">
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none list-none">
                      <span className="flex items-center gap-2 text-sm font-bold text-ink">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-brand">
                          <rect x="1" y="2" width="13" height="1.5" rx=".75" fill="currentColor" opacity=".4"/>
                          <rect x="1" y="5.5" width="9" height="1.5" rx=".75" fill="currentColor"/>
                          <rect x="1" y="9" width="11" height="1.5" rx=".75" fill="currentColor" opacity=".6"/>
                          <rect x="1" y="12.5" width="7" height="1.5" rx=".75" fill="currentColor" opacity=".4"/>
                        </svg>
                        Table of Contents
                      </span>
                      <span className="text-muted text-xs group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <nav className="px-5 pb-4 space-y-0.5 border-t border-line pt-3">
                      {toc.map((item, idx) => {
                        const isActive = activeSection === item.id;
                        return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all ${
                              isActive
                                ? 'border-2 border-brand bg-white text-brand font-bold'
                                : 'border-2 border-transparent text-muted hover:text-ink hover:bg-surface'
                            }`}
                          >
                            <span className={`font-mono font-bold text-[10px] ${isActive ? 'text-brand' : 'text-brand/60'}`}>{String(idx + 1).padStart(2, '0')}</span>
                            {item.title}
                          </a>
                        );
                      })}
                    </nav>
                  </details>
                </div>
              )}

              {/* Summary lead */}
              {post.summary && (
                <p className="text-lg text-muted leading-relaxed mb-8 pb-8 border-b border-line font-light break-words">
                  {post.summary}
                </p>
              )}

              {/* Rendered markdown body */}
              <div className="break-words max-w-full overflow-hidden [word-break:break-word]">
                {post.content ? renderContent(post.content) : (
                  <p className="text-muted text-sm italic">No content available.</p>
                )}
              </div>

              {/* Tags */}
              {(post.tags?.length ?? 0) > 0 && (
                <div className="mt-14 pt-8 border-t border-line">
                  <p className="text-[11px] uppercase font-mono tracking-widest text-muted mb-3">Topic Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="pill px-3 py-1">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back navigation */}
              <div className="mt-12">
                <Link
                  to="/blog"
                  className="button-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold"
                >
                  <ArrowLeft size={13} /> Back to All Articles
                </Link>
              </div>
            </div>

            {/* ── Sticky Table of Contents (desktop) ── */}
            {toc.length > 0 && (
              <aside className="hidden lg:block sticky top-24 self-start">
                <div className="site-card rounded-2xl p-6 space-y-4 bg-white">
                  <div className="flex items-center gap-2 pb-3 border-b border-line">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-brand shrink-0">
                      <rect x="1" y="2" width="13" height="1.5" rx=".75" fill="currentColor" opacity=".4"/>
                      <rect x="1" y="5.5" width="9" height="1.5" rx=".75" fill="currentColor"/>
                      <rect x="1" y="9" width="11" height="1.5" rx=".75" fill="currentColor" opacity=".6"/>
                      <rect x="1" y="12.5" width="7" height="1.5" rx=".75" fill="currentColor" opacity=".4"/>
                    </svg>
                    <span className="text-xs font-bold text-ink uppercase tracking-wider">Table of Contents</span>
                  </div>
                  <nav className="space-y-0.5">
                    {toc.map((item, idx) => {
                      const isActive = activeSection === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className={`flex items-start gap-3 px-3.5 py-2.5 rounded-xl text-xs leading-snug transition-all ${
                            isActive
                              ? 'border-2 border-brand bg-white text-brand font-bold shadow-sm'
                              : 'border-2 border-transparent text-muted hover:text-ink hover:bg-surface'
                          }`}
                        >
                          <span className={`shrink-0 mt-0.5 font-mono font-bold text-[10px] ${isActive ? 'text-brand' : 'text-muted'}`}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="leading-snug">{item.title}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
