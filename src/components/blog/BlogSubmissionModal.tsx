import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X, Send, Lock, CheckCircle2, AlertCircle, Sparkles, KeyRound, ImagePlus, Trash2, PenTool } from 'lucide-react';
import { postgresBlogService } from '../../services/postgresBlogService';
import { User } from '../../types/blog';

interface BlogSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmittedSuccess: () => void;
}

const CATEGORIES = ['AI', 'App Development', 'Web Development', 'Cloud'];

const INPUT_CLS =
  'w-full px-4 py-3 bg-surface border border-line rounded-xl text-ink placeholder-muted/60 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 text-sm transition-colors';

const LABEL_CLS = 'block text-xs font-bold uppercase tracking-wider text-muted mb-1.5';

export function BlogSubmissionModal({ isOpen, onClose, onSubmittedSuccess }: BlogSubmissionModalProps) {
  const [step, setStep] = useState<'EDITOR' | 'AUTH_GATE' | 'SUCCESS'>('EDITOR');

  // Form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('AI');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [authorName, setAuthorName] = useState('');

  // Cover image
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [coverDataUrl, setCoverDataUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth (Email only)
  const [email, setEmail] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setStep('EDITOR');
    setTitle('');
    setCategory('AI');
    setSummary('');
    setContent('');
    setTagsInput('');
    setAuthorName('');
    setCoverPreview(null);
    setCoverDataUrl(null);
    setAuthError('');
    setEmail('');
  };

  const handleClose = () => { resetForm(); onClose(); };

  /**
   * Downscale + re-encode the cover image before it is sent as a base64 data URL.
   *
   * Vercel rejects serverless request bodies larger than 4.5 MB at the platform
   * edge — before the request ever reaches server.js. Base64 inflates a file by
   * ~33%, so the old 5 MB limit produced ~6.7 MB payloads that failed in
   * production with an opaque 413 while working fine against the local Express
   * server (which allows 10 MB). Capping the longest edge at 1600px and encoding
   * to JPEG keeps a cover image well under 1 MB.
   */
  const compressImage = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Could not read that image file.'));
      reader.onload = (ev) => {
        const img = new Image();
        img.onerror = () => reject(new Error('That file is not a readable image.'));
        img.onload = () => {
          const MAX_EDGE = 1600;
          const scale = Math.min(1, MAX_EDGE / Math.max(img.width, img.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          const ctx = canvas.getContext('2d');
          if (!ctx) return reject(new Error('Image processing is unavailable in this browser.'));
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Step the quality down until the encoded string is comfortably small.
          let quality = 0.82;
          let out = canvas.toDataURL('image/jpeg', quality);
          while (out.length > 1_200_000 && quality > 0.4) {
            quality -= 0.12;
            out = canvas.toDataURL('image/jpeg', quality);
          }
          resolve(out);
        };
        img.src = ev.target?.result as string;
      };
      reader.readAsDataURL(file);
    });

  // Handle image file selection
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert('Image must be under 10 MB.');
      return;
    }
    try {
      const compressed = await compressImage(file);
      setCoverPreview(compressed);
      setCoverDataUrl(compressed);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim() || !content.trim()) {
      alert('Please fill out Title, Summary, and Article Content.');
      return;
    }
    // Always prompt for Employee Authentication (Login)
    setStep('AUTH_GATE');
  };

  const handleAuthAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsLoading(true);
    try {
      const user = await postgresBlogService.authenticateUser(email);
      if (!user) {
        setAuthError('Unauthorized Email: Please enter a valid employee email address.');
        setIsLoading(false);
        return;
      }
      await submitBlog(user);
    } catch (err) {
      // Surface the real reason (DB unreachable, API misrouted, network down)
      // instead of a generic message — the previous version hid the cause.
      setAuthError((err as Error).message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const submitBlog = async (user: User) => {
    setIsLoading(true);
    try {
      const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
      await postgresBlogService.submitBlog({
        title,
        category,
        summary,
        content,
        tags,
        authorName: authorName.trim() || user.name,
        authorEmail: user.email,
        coverImage: coverDataUrl ?? undefined,
      });
      // Only reached when the server confirmed the row was written.
      setStep('SUCCESS');
      onSubmittedSuccess();
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form only when modal first opens (not on every re-render while open)
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      resetForm();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      className="fixed inset-0 z-[999999] flex items-start justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-line overflow-hidden my-10"
      >
        {/* ── Modal Header ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line bg-surface/60">
          <div className="flex items-center gap-3.5">
            <div className="relative p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 via-brand-light to-blue-100 text-brand border border-brand/20 shadow-sm flex items-center justify-center">
              <PenTool size={22} className="text-brand" />
              <Sparkles size={11} className="absolute -top-1 -right-1 text-amber-500 fill-amber-400 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink">
                Post an Article
              </h3>
              <p className="text-xs text-muted">Fill in the details and submit for Admin review</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200 hover:border-red-200 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 z-50"
            title="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── Modal Body ── */}
        <div className="p-6 md:p-8 max-h-[78vh] overflow-y-auto">

            {/* ── STEP 1: EDITOR ── */}
            {step === 'EDITOR' && (
              <form onSubmit={handleFormNext} className="space-y-5">

                {/* Row 1: Category + Author */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_CLS}>Article Category *</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={INPUT_CLS}
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={LABEL_CLS}>Author Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className={INPUT_CLS}
                    />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className={LABEL_CLS}>Article Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. How We Reduced Kubernetes Costs by 40%"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={INPUT_CLS + ' font-medium'}
                  />
                </div>

                {/* Summary */}
                <div>
                  <label className={LABEL_CLS}>Short Summary *</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="2–3 sentences describing what this article covers and who it is for."
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className={INPUT_CLS}
                  />
                </div>

                {/* Article Body */}
                <div>
                  <label className={LABEL_CLS}>
                    Article Content *
                    <span className="ml-2 normal-case tracking-normal font-normal text-muted">
                      (use <code className="text-brand font-mono">## Heading</code> for sections — they appear in the Table of Contents)
                    </span>
                  </label>
                  <textarea
                    required
                    rows={10}
                    placeholder={`## Introduction\n\nWrite your opening paragraph here...\n\n## Section Two\n\nMore content...`}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className={INPUT_CLS + ' font-mono text-xs leading-relaxed'}
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className={LABEL_CLS}>Tags <span className="normal-case tracking-normal font-normal text-muted">(comma separated)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. React, AWS, Docker, AI"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className={INPUT_CLS}
                  />
                </div>

                {/* ── Cover Image Upload ── */}
                <div>
                  <label className={LABEL_CLS}>Cover Image <span className="normal-case tracking-normal font-normal text-muted">(optional, max 5 MB)</span></label>

                  {coverPreview ? (
                    <div className="relative rounded-xl overflow-hidden border border-line group">
                      <img src={coverPreview} alt="Cover preview" className="w-full h-44 object-cover" />
                      <button
                        type="button"
                        onClick={() => { setCoverPreview(null); setCoverDataUrl(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-lg border border-line text-red-500 shadow transition-all"
                      >
                        <Trash2 size={15} />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                        <p className="text-[11px] text-white/80 font-mono">Cover image selected ✓</p>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-36 border-2 border-dashed border-line hover:border-brand rounded-xl flex flex-col items-center justify-center gap-2 text-muted hover:text-brand bg-surface transition-all group"
                    >
                      <ImagePlus size={28} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs font-semibold">Click to upload cover image</span>
                      <span className="text-[10px] text-muted/70">JPG, PNG, WEBP — max 5 MB</span>
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-muted flex items-center gap-1.5">
                    <Sparkles size={13} className="text-brand" />
                    Submitted posts go to Admin review before publishing.
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="button-secondary px-6 py-2.5 text-xs font-semibold whitespace-nowrap min-h-[40px] flex items-center justify-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="button-secondary px-6 py-2.5 text-xs font-bold whitespace-nowrap min-h-[40px] flex items-center justify-center gap-2"
                    >
                      Next: Verify Email <Send size={14} />
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* ── STEP 2: AUTH GATE (EMAIL ONLY) ── */}
            {step === 'AUTH_GATE' && (
              <motion.form
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleAuthAndSubmit}
                className="space-y-5 max-w-md mx-auto py-4"
              >
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto mb-3">
                    <KeyRound size={26} />
                  </div>
                  <h4 className="text-xl font-bold text-ink">Employee Email Verification</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Enter your registered employee email address to verify your submission.
                  </p>
                </div>

                {authError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-600 text-xs">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{authError}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className={LABEL_CLS}>Employee Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your employee email"
                      className={INPUT_CLS}
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('EDITOR')}
                    className="button-secondary flex-1 py-3 rounded-xl font-semibold text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="button-secondary flex-1 py-3 font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isLoading ? 'Verifying…' : 'Submit Article'}
                    <Lock size={15} />
                  </button>
                </div>
              </motion.form>
            )}

            {/* ── STEP 3: SUCCESS ── */}
            {step === 'SUCCESS' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 max-w-sm mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={34} />
                </div>
                <h4 className="text-2xl font-extrabold text-ink">Submission Received!</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Your article has been sent to the{' '}
                  <strong className="text-ink">Admin Dashboard</strong> with status{' '}
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded text-xs font-mono">
                    PENDING REVIEW
                  </span>
                  .
                </p>
                <p className="text-xs text-muted">
                  Once approved by an Administrator, your post will automatically go live on the blog.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleClose}
                    className="button-secondary px-8 py-3 font-semibold text-sm"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
        </div>
      </div>
    </div>,
    document.body
  );
}
