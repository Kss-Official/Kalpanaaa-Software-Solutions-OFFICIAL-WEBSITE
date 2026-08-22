import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, PenSquare, BookOpen, Globe, Clock,
  UserCircle, LogOut, Lock, ShieldCheck, CheckCircle2,
  XCircle, Eye, EyeOff, Trash2, X, ImagePlus, HelpCircle,
  ArrowRight, AlertCircle, FileText, TrendingUp, BarChart3,
} from 'lucide-react';
import { postgresBlogService } from '../../services/postgresBlogService';
import { BlogPost, User } from '../../types/blog';

// ─── Types ────────────────────────────────────────────────────────────────────
type Section = 'dashboard' | 'all-blogs' | 'create-blog' | 'published' | 'review' | 'rejected' | 'profile';

// ─── Shared styles ────────────────────────────────────────────────────────────
const INPUT = 'w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all';
const LABEL = 'block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5';

const CATEGORIES = ['AI', 'App Development', 'Web Development', 'Cloud'];

const STATUS_BADGE: Record<string, string> = {
  PUBLISHED:        'bg-emerald-50 text-emerald-700 border border-emerald-200',
  PENDING_APPROVAL: 'bg-amber-50   text-amber-700   border border-amber-200',
  REJECTED:         'bg-red-50     text-red-700     border border-red-200',
  DRAFT:            'bg-gray-100   text-gray-600    border border-gray-200',
};
const STATUS_LABEL: Record<string, string> = {
  PUBLISHED: 'Published', PENDING_APPROVAL: 'Pending Review',
  REJECTED: 'Rejected', DRAFT: 'Draft',
};

// ─── Safe Date Formatter ──────────────────────────────────────────────────────
function formatDate(d?: string): string {
  if (!d) return 'Recently';
  try {
    const dt = new Date(d);
    if (isNaN(dt.getTime())) return 'Recently';
    return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return 'Recently';
  }
}

// ─── Error Boundary ───────────────────────────────────────────────────────────
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class DashboardErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Dashboard rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-white border border-red-200 rounded-2xl max-w-lg mx-auto my-12 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
            <AlertCircle size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Dashboard Render Notice</h3>
          <p className="text-xs text-gray-500 font-mono bg-gray-50 p-3 rounded-lg text-left overflow-x-auto">
            {this.state.error?.message || "An unexpected rendering error occurred."}
          </p>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            Reload Dashboard
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Sidebar Nav Item ─────────────────────────────────────────────────────────
function NavItem({ icon: Icon, label, active, badge, badgeColor, onClick }: {
  icon: React.ElementType; label: string; active: boolean;
  badge?: number; badgeColor?: string; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
        active
          ? 'bg-blue-50 text-blue-700 font-semibold'
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
      }`}
    >
      <Icon size={18} className={active ? 'text-blue-600' : 'text-gray-400'} />
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className={`ml-auto min-w-[20px] h-5 px-1.5 text-white text-[10px] font-bold rounded-full flex items-center justify-center ${badgeColor || 'bg-amber-500'}`}>
          {badge}
        </span>
      )}
    </button>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, icon: Icon, color, onClick }: {
  label: string; value: number; icon: React.ElementType; color: string; onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4 ${
        onClick ? 'cursor-pointer hover:border-blue-200 transition-all hover:shadow-md' : ''
      }`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-extrabold text-gray-800">{value}</p>
        <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
      </div>
    </div>
  );
}

// ─── Blog Row ─────────────────────────────────────────────────────────────────
function BlogRow({ blog, onPreview, onApprove, onReject, onDelete }: {
  blog: BlogPost;
  onPreview: () => void;
  onApprove?: () => void;
  onReject?: () => void;
  onDelete: () => void;
}) {
  const date = formatDate(blog?.createdAt);
  const statusBadge = STATUS_BADGE[blog?.status] || 'bg-amber-50 text-amber-700 border border-amber-200';
  const statusLabel = STATUS_LABEL[blog?.status] || 'Pending Review';

  return (
    <div className="flex items-start sm:items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-200 transition-all group">
      <div className="flex items-start gap-3 min-w-0">
        {blog.coverImage && (
          <img src={blog.coverImage} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0 border border-gray-100" />
        )}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
              {blog.category || 'Engineering'}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusBadge}`}>
              {statusLabel}
            </span>
          </div>
          <p className="text-sm font-semibold text-gray-800 leading-snug truncate group-hover:text-blue-700 transition-colors">
            {blog.title || 'Untitled Article'}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5 font-mono">{blog.authorName || 'Anonymous'} · {date}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <button onClick={onPreview} title="Preview Article" className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer">
          <Eye size={14} className="text-blue-600" /> Preview
        </button>
        {onApprove && (
          <button onClick={onApprove} title="Approve & Publish" className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer">
            <CheckCircle2 size={13} /> Approve
          </button>
        )}
        {onReject && (
          <button onClick={onReject} title="Reject" className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer">
            <XCircle size={13} /> Reject
          </button>
        )}
        <button onClick={onDelete} title="Delete" className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}

// Helper to render markdown content formatted in preview modal
function renderPreviewContent(content?: string) {
  if (!content || typeof content !== 'string') {
    return <p className="text-sm text-gray-400 italic">No content provided.</p>;
  }

  try {
    const lines = content.replace(/\r\n/g, '\n').split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = (keyPrefix: string) => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={`p-${keyPrefix}-${elements.length}`} className="text-sm text-gray-700 leading-relaxed my-2.5 break-words">
              {text}
            </p>
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
        const title = headerMatch[2].trim();
        elements.push(
          <h3 key={`h3-${idx}`} className="text-base font-bold text-gray-900 mt-6 mb-2 pb-1.5 border-b border-gray-100 font-display">
            {title}
          </h3>
        );
      } else {
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph('final');
    return elements;
  } catch (err) {
    console.error("Failed to parse markdown in preview:", err);
    return <p className="text-sm text-gray-700 whitespace-pre-wrap">{content}</p>;
  }
}

// ─── Preview Modal ────────────────────────────────────────────────────────────
function PreviewModal({ blog, onClose, onApprove, onReject }: {
  blog: BlogPost; onClose: () => void;
  onApprove?: () => void; onReject?: () => void;
}) {
  if (!blog || typeof document === 'undefined') return null;

  return createPortal(
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] my-auto z-[999999]"
      >
        {/* Cover Header / Image */}
        {blog.coverImage ? (
          <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden shrink-0">
            <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors cursor-pointer"
              title="Close Preview"
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 bg-white/90 text-blue-700 backdrop-blur-md rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                {blog.category}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/80 shrink-0">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="text-xs text-gray-400 font-medium">Article Preview</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-200/80 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              title="Close Preview"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 break-words [overflow-wrap:anywhere]">
          {/* Article Header */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug break-words">
              {blog.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500 pt-1">
              <span className="font-semibold text-gray-700">{blog.authorName}</span>
              {blog.authorEmail && (
                <>
                  <span>·</span>
                  <span className="text-gray-400">{blog.authorEmail}</span>
                </>
              )}
            </div>
          </div>

          {/* Summary Box */}
          {blog.summary && (
            <div className="p-4 bg-blue-50/60 border-l-4 border-blue-500 rounded-r-xl text-sm text-gray-700 italic leading-relaxed break-words">
              {blog.summary}
            </div>
          )}

          {/* Article Main Content */}
          <div className="space-y-3 border-t border-gray-100 pt-5 break-words [overflow-wrap:anywhere]">
            {renderPreviewContent(blog.content)}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
              {blog.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-mono break-all">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {(onApprove || onReject) && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-end gap-3 shrink-0">
            {onReject && (
              <button
                onClick={onReject}
                className="px-5 py-2.5 bg-white hover:bg-red-50 text-red-600 border border-red-200 hover:border-red-300 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <XCircle size={16} /> Reject
              </button>
            )}
            {onApprove && (
              <button
                onClick={onApprove}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <CheckCircle2 size={16} /> Approve & Publish
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>,
    document.body
  );
}

// ─── Create Blog Section ──────────────────────────────────────────────────────
function CreateBlogSection({ onCreated }: { onCreated: () => void }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('AI');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [tagChips, setTagChips] = useState<string[]>(['AI', 'Cloud', 'Technology']);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [coverDataUrl, setCoverDataUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleTagKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagsInput.trim()) {
      e.preventDefault();
      setTagChips((p) => [...new Set([...p, tagsInput.trim()])]);
      setTagsInput('');
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const r = ev.target?.result as string;
      setCoverPreview(r); setCoverDataUrl(r);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveDraft = async () => {
    if (!title.trim()) { alert('Please enter a title.'); return; }
    setIsSubmitting(true);
    const user = postgresBlogService.getCurrentUser();
    if (!user) { alert('Please log in first.'); setIsSubmitting(false); return; }
    await postgresBlogService.submitBlog({
      title, category, summary, content, tags: tagChips,
      authorName: user.name, authorEmail: user.email, coverImage: coverDataUrl ?? undefined,
    });
    alert('Saved as draft (pending review).');
    setIsSubmitting(false);
    onCreated();
  };

  const handlePublishDirect = async () => {
    if (!title.trim() || !summary.trim() || !content.trim()) {
      alert('Fill in Title, Summary, and Content.'); return;
    }
    setIsSubmitting(true);
    const user = postgresBlogService.getCurrentUser();
    if (!user) { alert('Not authenticated.'); setIsSubmitting(false); return; }
    const blog = await postgresBlogService.submitBlog({
      title, category, summary, content, tags: tagChips,
      authorName: user.name, authorEmail: user.email, coverImage: coverDataUrl ?? undefined,
    });
    await postgresBlogService.approveBlog(blog.id);
    alert('Blog published successfully!');
    setIsSubmitting(false);
    onCreated();
    // Reset
    setTitle(''); setSummary(''); setContent(''); setTagChips(['AI']); setCoverPreview(null); setStep(1);
  };

  const STEPS = ['Blog Details', 'Content', 'Preview', 'Submit'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Create a Blog</h2>
        <p className="text-sm text-gray-500 mt-1">Share your knowledge and ideas with the world.</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-0">
        {STEPS.map((s, i) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setStep(i + 1)}
                className={`w-9 h-9 rounded-full text-sm font-bold border-2 transition-all flex items-center justify-center ${
                  step === i + 1
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : step > i + 1
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'bg-white border-gray-200 text-gray-400'
                }`}
              >
                {step > i + 1 ? <CheckCircle2 size={16} /> : i + 1}
              </button>
              <span className={`text-[10px] mt-1 font-semibold ${step === i + 1 ? 'text-blue-600' : 'text-gray-400'}`}>{s}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mb-4 mx-1 ${step > i + 1 ? 'bg-emerald-400' : 'bg-gray-200'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        {/* ── Step 1: Blog Details ── */}
        {step === 1 && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-5">
              <div>
                <label className={LABEL}>Blog Title *</label>
                <input type="text" placeholder="Enter an engaging title for your blog" value={title}
                  onChange={(e) => setTitle(e.target.value)} className={INPUT} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={LABEL}>Category *</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className={INPUT}>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={LABEL}>Tags</label>
                  <input type="text" placeholder="Add tags (press Enter)"
                    value={tagsInput} onChange={(e) => setTagsInput(e.target.value)}
                    onKeyDown={handleTagKey} className={INPUT} />
                </div>
              </div>
              {tagChips.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tagChips.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xs font-medium">
                      {tag}
                      <button onClick={() => setTagChips((p) => p.filter((t) => t !== tag))} className="hover:text-red-500 transition-colors ml-0.5">
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <div>
                <label className={LABEL}>Short Description (Excerpt) *</label>
                <textarea rows={4} placeholder="Write a short summary of your blog (150-200 characters)"
                  value={summary} onChange={(e) => setSummary(e.target.value.slice(0, 200))}
                  className={INPUT + ' resize-none'} />
                <p className="text-right text-[10px] text-gray-400 mt-1">{summary.length} / 200</p>
              </div>
              <div>
                <label className={LABEL}>Cover Image</label>
                {coverPreview ? (
                  <div className="relative rounded-xl overflow-hidden border border-gray-200">
                    <img src={coverPreview} alt="Cover" className="w-full h-36 object-cover" />
                    <button onClick={() => { setCoverPreview(null); setCoverDataUrl(null); if (fileRef.current) fileRef.current.value = ''; }}
                      className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg border border-gray-200 hover:bg-red-50 hover:text-red-500 text-gray-500 transition-colors">
                      <Trash2 size={13} />
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => fileRef.current?.click()}
                    className="w-full h-32 border-2 border-dashed border-gray-200 hover:border-blue-500 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-blue-500 bg-gray-50 transition-all">
                    <ImagePlus size={24} />
                    <span className="text-xs font-semibold">Click to upload or drag and drop</span>
                    <span className="text-[10px] text-gray-400">PNG, JPG or WEBP (Max. 5MB)</span>
                  </button>
                )}
                <input ref={fileRef} type="file" accept="image/*" onChange={handleImage} className="hidden" />
              </div>
            </div>

            {/* Right column — Content */}
            <div className="space-y-3">
              <label className={LABEL}>Blog Content *</label>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-100 bg-gray-50 flex-wrap">
                  {['B', 'I', 'U'].map((f) => (
                    <button key={f} type="button" className={`w-7 h-7 rounded text-xs font-bold hover:bg-gray-200 transition-colors ${f === 'B' ? 'font-black' : f === 'I' ? 'italic' : 'underline'}`}>{f}</button>
                  ))}
                  <div className="w-px h-5 bg-gray-200 mx-1" />
                  {['H1', 'H2', 'H3'].map((h) => (
                    <button key={h} type="button" className="px-2 h-7 rounded text-[11px] font-bold hover:bg-gray-200 transition-colors text-gray-600">{h}</button>
                  ))}
                  <div className="w-px h-5 bg-gray-200 mx-1" />
                  <span className="text-[10px] text-gray-400 font-mono">Use ## Heading for TOC sections</span>
                </div>
                <textarea
                  rows={16}
                  placeholder="Start writing your blog content here...&#10;&#10;## Introduction&#10;&#10;Your content...&#10;&#10;## Section 2&#10;&#10;More content..."
                  value={content} onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-gray-700 font-mono leading-relaxed focus:outline-none resize-none"
                />
                <div className="px-4 py-2 border-t border-gray-100 text-right text-[10px] text-gray-400">
                  {content.trim().split(/\s+/).filter(Boolean).length} words
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 2: Content (review) ── */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Review your content</h3>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 whitespace-pre-line leading-relaxed max-h-96 overflow-y-auto font-mono border border-gray-200">
              {content || 'No content written yet. Go back to Step 1.'}
            </div>
          </div>
        )}

        {/* ── Step 3: Preview ── */}
        {step === 3 && (
          <div className="space-y-4">
            {coverPreview && <img src={coverPreview} alt="Cover" className="w-full h-52 object-cover rounded-xl" />}
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{category}</span>
            <h3 className="text-2xl font-extrabold text-gray-800">{title || 'Untitled'}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{summary || 'No summary yet.'}</p>
            <div className="flex flex-wrap gap-2">
              {tagChips.map(t => <span key={t} className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-xs">#{t}</span>)}
            </div>
            <div className="border-t border-gray-100 pt-4 text-sm text-gray-700 whitespace-pre-line leading-relaxed max-h-80 overflow-y-auto">
              {content || 'No content.'}
            </div>
          </div>
        )}

        {/* ── Step 4: Submit ── */}
        {step === 4 && (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
              <Globe size={30} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Ready to Submit</h3>
              <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                As Admin, you can publish directly or save as draft for later.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleSaveDraft} disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm transition-all">
                <FileText size={16} /> Save as Draft
              </button>
              <button onClick={handlePublishDirect} disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm shadow-sm transition-all">
                <Globe size={16} /> Publish Now <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      {step < 4 && (
        <div className="flex items-center justify-between">
          <button onClick={handleSaveDraft} disabled={isSubmitting}
            className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 rounded-xl text-sm font-semibold transition-all">
            <FileText size={15} /> Save as Draft
          </button>
          <div className="flex gap-3">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 rounded-xl text-sm font-semibold transition-all">
                ← Back
              </button>
            )}
            <button onClick={() => setStep(Math.min(4, step + 1))}
              className="flex items-center gap-2 px-7 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all">
              Save & Continue <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Review notice */}
      <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-700">
        <ShieldCheck size={18} className="shrink-0 text-blue-500" />
        Your blog will be reviewed by the admin team. You will be notified once the decision is made.
      </div>
    </div>
  );
}

// ─── Main AdminDashboard ──────────────────────────────────────────────────────
function AdminDashboardContent() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [section, setSection] = useState<Section>('dashboard');
  const [seenSections, setSeenSections] = useState<Set<Section>>(new Set());
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [previewBlog, setPreviewBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigateToSection = (sec: Section) => {
    setSection(sec);
    setSeenSections((prev) => new Set(prev).add(sec));
  };

  const fetchAll = async () => {
    setIsLoading(true);
    const data = await postgresBlogService.getBlogsByStatus('ALL');
    setAllBlogs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (currentUser?.role === 'ADMIN') fetchAll();
  }, [currentUser]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const user = await postgresBlogService.authenticateUser(loginEmail, loginPassword);
    if (!user || user.role !== 'ADMIN') {
      setLoginError('Invalid admin credentials. Please try again.');
      return;
    }
    setCurrentUser(user);
  };

  const handleLogout = () => {
    postgresBlogService.logout();
    setLoginEmail('');
    setLoginPassword('');
    setShowPassword(false);
    setLoginError('');
    setCurrentUser(null);
  };

  const approve = async (id: string) => {
    await postgresBlogService.approveBlog(id);
    if (previewBlog?.id === id) setPreviewBlog(null);
    fetchAll();
  };
  const reject = async (id: string) => {
    const reason = prompt('Reason for rejection (optional):') ?? undefined;
    await postgresBlogService.rejectBlog(id, reason);
    if (previewBlog?.id === id) setPreviewBlog(null);
    fetchAll();
  };
  const del = async (id: string) => {
    if (!confirm('Delete this blog post?')) return;
    await postgresBlogService.deleteBlog(id);
    if (previewBlog?.id === id) setPreviewBlog(null);
    fetchAll();
  };

  const pending   = allBlogs.filter((b) => b.status === 'PENDING_APPROVAL');
  const published = allBlogs.filter((b) => b.status === 'PUBLISHED');
  const rejected  = allBlogs.filter((b) => b.status === 'REJECTED');

  // ── Login Screen ──
  if (!currentUser || currentUser.role !== 'ADMIN') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-xl space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto mb-2">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Admin Portal</h2>
            <p className="text-sm text-gray-500">Sign in to manage blog submissions</p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2">
              <AlertCircle size={14} /> {loginError}
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4" autoComplete="off">
            <div>
              <label className={LABEL}>Email</label>
              <input
                type="email"
                name="admin_login_email_no_fill"
                id="admin_login_email_no_fill"
                autoComplete="off"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Enter admin email"
                className={INPUT}
              />
            </div>
            <div>
              <label className={LABEL}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="admin_login_password_no_fill"
                  id="admin_login_password_no_fill"
                  autoComplete="new-password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${INPUT} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all">
              Sign In <Lock size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // ── Dashboard Layout ──
  const sectionBlogs = section === 'all-blogs' ? allBlogs
    : section === 'published' ? published
    : section === 'review'    ? pending
    : section === 'rejected'  ? rejected
    : [];

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ── Sidebar ── */}
      <aside className="w-60 shrink-0 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen overflow-y-auto">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm">K</div>
            <div>
              <p className="text-xs font-extrabold text-gray-800 leading-none">KALPANAAA</p>
              <p className="text-[9px] text-gray-400 leading-none mt-0.5">SOFTWARE SOLUTIONS</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          <NavItem icon={LayoutDashboard} label="Dashboard"       active={section === 'dashboard'}  onClick={() => navigateToSection('dashboard')} />
          <NavItem icon={BookOpen}        label="All Blogs"       active={section === 'all-blogs'}  onClick={() => navigateToSection('all-blogs')} badge={seenSections.has('all-blogs') ? 0 : allBlogs.length} badgeColor="bg-blue-600" />
          <NavItem icon={PenSquare}       label="Create Blog"     active={section === 'create-blog'} onClick={() => navigateToSection('create-blog')} />
          <NavItem icon={Globe}           label="Published Blogs" active={section === 'published'}   onClick={() => navigateToSection('published')} badge={seenSections.has('published') ? 0 : published.length} badgeColor="bg-emerald-500" />
          <NavItem icon={Clock}           label="Review Blogs"    active={section === 'review'}      onClick={() => navigateToSection('review')} badge={seenSections.has('review') ? 0 : pending.length} badgeColor="bg-amber-500" />
          <NavItem icon={XCircle}         label="Rejected Blogs"  active={section === 'rejected'}    onClick={() => navigateToSection('rejected')} badge={seenSections.has('rejected') ? 0 : rejected.length} badgeColor="bg-red-500" />
          <div className="my-3 h-px bg-gray-100" />
          <NavItem icon={UserCircle}      label="Profile"         active={section === 'profile'}     onClick={() => navigateToSection('profile')} />
          <NavItem icon={LogOut}          label="Logout"          active={false}                     onClick={handleLogout} />
        </nav>
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="p-8 space-y-6">

          {/* Dashboard Overview */}
          {section === 'dashboard' && (
            <AnimatePresence mode="wait">
              <motion.div key="dashboard" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                  <p className="text-sm text-gray-500 mt-1">Welcome back, {currentUser.name}. Here's your blog overview.</p>
                </div>

                {/* Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard label="Total Articles"   value={allBlogs.length}   icon={BookOpen}     color="bg-blue-50 text-blue-600"    onClick={() => navigateToSection('all-blogs')} />
                  <StatCard label="Published"        value={published.length}  icon={Globe}        color="bg-emerald-50 text-emerald-600" onClick={() => navigateToSection('published')} />
                  <StatCard label="Pending Review"   value={pending.length}    icon={Clock}        color="bg-amber-50 text-amber-600"  onClick={() => navigateToSection('review')} />
                  <StatCard label="Rejected"         value={rejected.length}   icon={XCircle}      color="bg-red-50 text-red-500"      onClick={() => navigateToSection('rejected')} />
                </div>

                {/* Recent submissions */}
                {pending.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                        <Clock size={16} className="text-amber-500" /> Pending Review
                      </h3>
                      <button onClick={() => navigateToSection('review')} className="text-xs text-blue-600 hover:underline font-medium flex items-center gap-1">
                        View All <ArrowRight size={12} />
                      </button>
                    </div>
                    <div className="space-y-2">
                      {pending.slice(0, 3).map((b) => (
                        <BlogRow key={b.id} blog={b}
                          onPreview={() => setPreviewBlog(b)}
                          onApprove={() => approve(b.id)}
                          onReject={() => reject(b.id)}
                          onDelete={() => del(b.id)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {published.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                        <Globe size={16} className="text-emerald-500" /> Recently Published
                      </h3>
                      <button onClick={() => navigateToSection('published')} className="text-xs text-blue-600 hover:underline font-medium flex items-center gap-1">
                        View All <ArrowRight size={12} />
                      </button>
                    </div>
                    <div className="space-y-2">
                      {published.slice(0, 3).map((b) => (
                        <BlogRow key={b.id} blog={b} onPreview={() => setPreviewBlog(b)} onDelete={() => del(b.id)} />
                      ))}
                    </div>
                  </div>
                )}

                {rejected.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                        <XCircle size={16} className="text-red-500" /> Recently Rejected
                      </h3>
                      <button onClick={() => navigateToSection('rejected')} className="text-xs text-blue-600 hover:underline font-medium flex items-center gap-1">
                        View All <ArrowRight size={12} />
                      </button>
                    </div>
                    <div className="space-y-2">
                      {rejected.slice(0, 3).map((b) => (
                        <BlogRow key={b.id} blog={b}
                          onPreview={() => setPreviewBlog(b)}
                          onApprove={() => approve(b.id)}
                          onDelete={() => del(b.id)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {allBlogs.length === 0 && !isLoading && (
                  <div className="py-16 text-center text-gray-400">
                    <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
                    <p className="text-sm">No blog posts yet. Create one or wait for employee submissions.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {/* All / Published / Review / Rejected Blogs */}
          {(section === 'all-blogs' || section === 'published' || section === 'review' || section === 'rejected') && (
            <motion.div key={section} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {section === 'all-blogs' ? 'All Blogs'
                    : section === 'published' ? 'Published Blogs'
                    : section === 'review' ? 'Review Blogs'
                    : 'Rejected Blogs'}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {sectionBlogs.length} article{sectionBlogs.length !== 1 ? 's' : ''}
                  {section === 'review' ? ' awaiting your review' : section === 'rejected' ? ' rejected by administrators' : ''}
                </p>
              </div>
              {sectionBlogs.length === 0 ? (
                <div className="py-16 text-center bg-white border border-gray-100 rounded-2xl text-gray-400">
                  <BookOpen size={36} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No articles here yet.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {sectionBlogs.map((b) => (
                    <BlogRow key={b.id} blog={b}
                      onPreview={() => setPreviewBlog(b)}
                      onApprove={b.status !== 'PUBLISHED' ? () => approve(b.id) : undefined}
                      onReject={b.status !== 'REJECTED' && b.status !== 'PUBLISHED' ? () => reject(b.id) : undefined}
                      onDelete={() => del(b.id)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Create Blog */}
          {section === 'create-blog' && (
            <motion.div key="create" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <CreateBlogSection onCreated={fetchAll} />
            </motion.div>
          )}

          {/* Profile */}
          {section === 'profile' && (
            <motion.div key="profile" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm max-w-lg space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-extrabold">
                    {(currentUser?.name || 'Admin').slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-800">{currentUser?.name || 'Admin'}</p>
                    <p className="text-sm text-gray-500">{currentUser?.email || ''}</p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {currentUser?.role || 'ADMIN'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <p className="text-xl font-extrabold text-gray-800">{allBlogs.length}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Total Posts</p>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-xl">
                    <p className="text-xl font-extrabold text-emerald-700">{published.length}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Published</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded-xl">
                    <p className="text-xl font-extrabold text-amber-700">{pending.length}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Pending</p>
                  </div>
                </div>
                <button onClick={handleLogout}
                  className="w-full py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer">
                  <LogOut size={15} /> Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Preview Modal */}
      {previewBlog && (
        <PreviewModal
          blog={previewBlog}
          onClose={() => setPreviewBlog(null)}
          onApprove={previewBlog.status !== 'PUBLISHED' ? () => approve(previewBlog.id) : undefined}
          onReject={previewBlog.status !== 'REJECTED' && previewBlog.status !== 'PUBLISHED' ? () => reject(previewBlog.id) : undefined}
        />
      )}
    </div>
  );
}

export function AdminDashboard() {
  return (
    <DashboardErrorBoundary>
      <AdminDashboardContent />
    </DashboardErrorBoundary>
  );
}
