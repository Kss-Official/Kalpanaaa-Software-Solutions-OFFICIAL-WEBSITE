import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Search, Clock, Tag, Eye,
  ArrowRight, SlidersHorizontal, PenTool, PlusCircle, Sparkles
} from "lucide-react";
import { SEO } from "../components/SEO";
import { BlogHeroGraphic } from "../components/blog/BlogHeroGraphic";
import { BlogSubmissionModal } from "../components/blog/BlogSubmissionModal";
import { postgresBlogService } from "../services/postgresBlogService";
import type { BlogPost } from "../types/blog";

/* ─── Constants ─────────────────────────────────────────────────────────── */
const CATEGORIES = ["ALL", "AI", "App Development", "Web Development", "Cloud"] as const;
type Category = (typeof CATEGORIES)[number];

const CAT_COLORS: Record<string, { pill: string; badge: string }> = {
  "AI":               { pill: "bg-purple-100 text-purple-700 border-purple-200", badge: "bg-purple-500" },
  "App Development":  { pill: "bg-green-100  text-green-700  border-green-200",  badge: "bg-green-500" },
  "Web Development":  { pill: "bg-blue-100   text-blue-700   border-blue-200",   badge: "bg-blue-500" },
  "Cloud":            { pill: "bg-cyan-100   text-cyan-700   border-cyan-200",    badge: "bg-cyan-500" },
};
function catPill(cat: string) { return CAT_COLORS[cat]?.pill ?? "bg-gray-100 text-gray-600 border-gray-200"; }
function catBadge(cat: string) { return CAT_COLORS[cat]?.badge ?? "bg-gray-400"; }

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  try {
    const dt = new Date(dateStr);
    if (isNaN(dt.getTime())) return "";
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

function formatReadTime(rt?: string) {
  if (!rt) return "";
  const num = parseInt(rt, 10);
  if (!isNaN(num)) return `${num} min read`;
  return rt;
}

function formatReadTimeShort(rt?: string) {
  if (!rt) return "";
  const num = parseInt(rt, 10);
  if (!isNaN(num)) return `${num}m`;
  return rt.replace(/min\s*read/i, 'm').replace(/min/i, 'm').trim();
}

/* ─── Featured Card ─────────────────────────────────────────────────────── */
const FeaturedCard = memo(function FeaturedCard({ blog }: { blog: BlogPost }) {
  const slug = blog.slug ?? blog.id;
  return (
    // No entrance animation — renders instantly, no blink on data refresh
    <div className="mb-10 rounded-3xl bg-white border border-line shadow-md overflow-hidden">
      <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[550px_1fr]">
        {/* Cover image */}
        <div className="relative min-h-[220px] md:min-h-[260px] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          {blog.coverImage ? (
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover absolute inset-0"
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen size={64} className="text-white/20" />
            </div>
          )}
          {/* FEATURED badge */}
          <span className="absolute top-4 left-4 bg-brand text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow">
            Featured
          </span>
          {/* Category chip */}
          <span className={`absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${catPill(blog.category)} bg-white/90`}>
            {blog.category}
          </span>
        </div>

        {/* Details */}
        <div className="p-8 flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${catPill(blog.category)}`}>
              {blog.category}
            </span>
            {blog.readTime && (
              <span className="text-xs text-muted flex items-center gap-1 font-mono">
                <Clock size={11} /> {formatReadTime(blog.readTime)}
              </span>
            )}
          </div>

          <h2 className="text-2xl font-extrabold leading-snug text-ink">
            {blog.title}
          </h2>

          {blog.summary && (
            <p className="text-sm text-muted leading-relaxed line-clamp-3">{blog.summary}</p>
          )}

          {/* Author + date */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm shrink-0">
              {blog.authorName?.charAt(0) ?? "A"}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{blog.authorName}</p>
              <p className="text-xs text-muted">{formatDate(blog.publishedAt ?? blog.createdAt)}</p>
            </div>
          </div>

          <Link
            to={`/blog/${slug}`}
            className="self-start button-primary px-6 py-3 text-sm font-bold uppercase tracking-widest mt-2"
          >
            Read Article <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
});

/* ─── Article Card ──────────────────────────────────────────────────────── */
const ArticleCard = memo(function ArticleCard({ blog, index }: { blog: BlogPost; index: number }) {
  const slug = blog.slug ?? blog.id;
  return (
    // Use animate (not whileInView) so cards animate ONCE on first mount only.
    // whileInView re-triggers on every state update causing the blink.
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.3), duration: 0.35, ease: "easeOut" }}
      className="group site-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Cover */}
      <Link to={`/blog/${slug}`} className="block relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen size={40} className="text-brand/30" />
          </div>
        )}
      </Link>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-2.5">
        {/* Category */}
        <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${catPill(blog.category)}`}>
          {blog.category}
        </span>

        {/* Title */}
        <Link to={`/blog/${slug}`}>
          <h3 className="text-sm font-bold leading-snug text-ink line-clamp-2 group-hover:text-brand transition-colors">
            {blog.title}
          </h3>
        </Link>

        {blog.summary && (
          <p className="text-xs text-muted leading-relaxed line-clamp-2">{blog.summary}</p>
        )}

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-1">
            {blog.tags.slice(0, 2).map((t) => (
              <span key={t} className="pill px-2 py-0.5 text-[9px] flex items-center gap-1">
                <Tag size={8} className="text-brand" /> {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-line mt-auto">
          <div className="flex items-center gap-2 text-[11px] text-muted">
            <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-[10px]">
              {blog.authorName?.charAt(0) ?? "A"}
            </div>
            <span className="font-medium text-ink truncate max-w-[80px]">{blog.authorName}</span>
            {blog.readTime && (
              <span className="flex items-center gap-0.5 shrink-0 font-mono">
                <Clock size={10} /> {formatReadTimeShort(blog.readTime)}
              </span>
            )}
          </div>
          <Link
            to={`/blog/${slug}`}
            className="text-[10px] font-bold uppercase tracking-widest text-brand hover:underline flex items-center gap-0.5"
          >
            Read <ArrowRight size={10} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
});

/* ─── Main Blog Page ────────────────────────────────────────────────────── */
export function Blog() {
  // Pre-seed from localStorage immediately (synchronous) so there's no loading flash
  // for returning users — articles appear instantly on refresh.
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>(() => {
    try {
      const raw = localStorage.getItem('kalpana_postgres_blogs_v4');
      if (raw) {
        const stored: BlogPost[] = JSON.parse(raw);
        return stored.filter((b) => b.status === 'PUBLISHED');
      }
    } catch { /* ignore */ }
    return [];
  });
  // Only show skeleton if we have NO cached data at all
  const [loading, setLoading] = useState(() => {
    try {
      return !localStorage.getItem('kalpana_postgres_blogs_v4');
    } catch { return true; }
  });
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [searchQuery, setSearchQuery]       = useState("");
  const [isModalOpen, setIsModalOpen]       = useState(false);

  const loadBlogs = useCallback(async () => {
    try {
      const blogs = await postgresBlogService.getPublishedBlogs();
      // Only update state if the data actually changed (prevents blink on identical API refresh)
      setAllBlogs((prev) => {
        const prevIds = prev.map((b) => b.id).join(',');
        const newIds  = blogs.map((b) => b.id).join(',');
        return prevIds === newIds ? prev : blogs;
      });
    } catch (err) {
      console.error("Failed to load blogs:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadBlogs(); }, [loadBlogs]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allBlogs.filter((b) => {
      const matchCat = activeCategory === "ALL" || b.category === activeCategory;
      const matchQ   = !q || b.title.toLowerCase().includes(q) || b.summary?.toLowerCase().includes(q) || b.tags?.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [allBlogs, activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = { ALL: allBlogs.length };
    for (const b of allBlogs) {
      map[b.category] = (map[b.category] || 0) + 1;
    }
    return map;
  }, [allBlogs]);

  const countFor = useCallback((cat: Category) => categoryCounts[cat] || 0, [categoryCounts]);

  // Featured = most recent published
  const featured = filtered[0] ?? null;
  const rest     = filtered.slice(1);

  const jsonLd = {
    "@context": "https://schema.org", "@type": "Blog",
    name: "Kalpanaaa Software Solutions — Engineering Notes",
    description: "Practical notes on AI engineering, dependable software delivery, and cloud infrastructure.",
    publisher: { "@type": "Organization", name: "Kalpanaaa Software Solutions Pvt. Ltd." },
  };

  return (
    <div className="site-page min-h-screen">
      <SEO
        title="Engineering Blog — Kalpanaaa Software Solutions (kalpanaaasoftwaresolutions.in)"
        description="Engineering notes from Kalpanaaa Software Solutions on RAG systems, multi-agent automation, QA, cloud infrastructure, and software delivery."
        canonical="https://kalpanaaasoftwaresolutions.in/blog"
        jsonLd={jsonLd}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(81,155,255,.18),transparent_29%),radial-gradient(circle_at_13%_72%,rgba(23,105,213,.08),transparent_25%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-[minmax(0,1fr)_minmax(430px,.9fr)] gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="pill px-3.5 py-1.5 mb-6">
              <BookOpen size={13} /><span>Engineering notes</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-ink max-w-2xl"
            >
              Ideas that survive <span className="gradient-text">production.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }}
              className="mt-5 text-lg text-muted max-w-xl leading-relaxed"
            >
              Practical thinking on dependable delivery, AI engineering, security, and cloud architecture — for teams who need systems to work in the real world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <a
                href="#articles"
                className="min-w-[195px] h-12 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Eye size={16} /> Browse Articles
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="min-w-[195px] h-12 px-6 rounded-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 hover:border-blue-400 font-extrabold text-xs uppercase tracking-wider shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <PlusCircle size={16} className="text-blue-600" /> Create Blog
              </button>
            </motion.div>
          </div>
          {/* Hero graphic */}
          <div>
            <BlogHeroGraphic />
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ─────────────────────────────────────────────── */}
      <section
        id="articles"
        className="sticky top-0 z-20 bg-white/95 backdrop-blur-lg border-b border-line/60 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-3 flex flex-wrap items-center gap-3 justify-between">
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <SlidersHorizontal size={14} className="text-muted mr-1 shrink-0" />
            {CATEGORIES.map((cat) => {
              const count = countFor(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? "bg-brand text-white border-brand shadow-md shadow-brand/20"
                      : "bg-white text-muted border-line hover:border-brand hover:text-brand"
                  }`}
                >
                  {cat}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none ${
                    activeCategory === cat ? "bg-white/25 text-white" : "bg-brand/10 text-brand"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right side: count + search */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-xs text-muted font-mono hidden sm:flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse inline-block" />
              {countFor(activeCategory)} article{countFor(activeCategory) !== 1 ? "s" : ""}
            </span>
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              <input
                type="search"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-4 py-2 text-xs rounded-full border border-line bg-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 w-44 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

          {/* Loading skeleton */}
          {loading && (
            <div className="space-y-8">
              {/* Featured skeleton */}
              <div className="rounded-3xl bg-white border border-line overflow-hidden animate-pulse">
                <div className="grid md:grid-cols-2">
                  <div className="h-60 bg-gray-100" />
                  <div className="p-8 space-y-4">
                    <div className="h-3 w-20 bg-gray-100 rounded-full" />
                    <div className="h-7 w-3/4 bg-gray-100 rounded" />
                    <div className="h-4 w-full bg-gray-100 rounded" />
                    <div className="h-4 w-2/3 bg-gray-100 rounded" />
                    <div className="h-10 w-36 bg-gray-100 rounded-full mt-4" />
                  </div>
                </div>
              </div>
              {/* Grid skeleton */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="site-card rounded-2xl overflow-hidden animate-pulse">
                    <div className="h-48 bg-blue-50" />
                    <div className="p-5 space-y-3">
                      <div className="h-3 w-16 bg-gray-100 rounded-full" />
                      <div className="h-4 w-full bg-gray-100 rounded" />
                      <div className="h-3 w-3/4 bg-gray-100 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {!loading && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {filtered.length === 0 ? (
                  /* Empty state */
                  <div className="text-center py-28">
                    <BookOpen size={52} className="mx-auto text-brand/25 mb-5" />
                    <h3 className="text-xl font-bold text-ink">No articles found</h3>
                    <p className="mt-2 text-muted text-sm">
                      {searchQuery ? `No results for "${searchQuery}"` : "No articles in this category yet."}
                    </p>
                    <button
                      onClick={() => { setActiveCategory("ALL"); setSearchQuery(""); }}
                      className="mt-6 button-secondary px-5 py-2.5 text-xs font-bold uppercase tracking-widest"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <>
                    {/* ── Featured Article ── */}
                    {featured && <FeaturedCard blog={featured} />}

                    {/* ── Grid ── */}
                    {rest.length > 0 && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((blog, i) => (
                          <ArticleCard key={blog.id} blog={blog} index={i} />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Empty DB banner */}
          {!loading && allBlogs.length === 0 && (
            <div className="text-center pt-16 pb-8">
              <p className="text-xs text-muted font-mono">
                The blog is live and search-ready. Submit the first article to get started.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Post a Blog / Submit Article CTA Section at Bottom ── */}
      <section className="pb-20 pt-8 border-t border-line/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="site-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles size={120} className="text-brand" />
            </div>
            
            <div className="inline-flex items-center gap-2 pill px-4 py-1.5 text-xs mb-4">
              <PenTool size={13} className="text-brand" />
              <span>Contribute to Engineering Notes</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
              Have insights or technical knowledge to share?
            </h2>

            <p className="mt-3 text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Share your engineering practices, technical deep-dives, or industry experiences with our team and community.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="button-primary px-8 py-4 text-sm font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-brand/20 hover:scale-105 transition-transform"
              >
                <PlusCircle size={18} /> Post a Blog Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Submission Modal ──────────────────────────────────────────────── */}
      <BlogSubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmittedSuccess={() => { loadBlogs(); }}
      />
    </div>
  );
}
