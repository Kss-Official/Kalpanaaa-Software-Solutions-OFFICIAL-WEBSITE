import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <SEO
        title="404 — Page Not Found | Kalpanaaa Software Solutions"
        description="The page you're looking for doesn't exist. Return to Kalpanaaa Software Solutions home page."
        canonical="https://kalpanaaasoftwaresolutions.com/404"
      />
      <div className="max-w-md w-full text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-brand">Error 404</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-extrabold text-white">Page not found.</h1>
        <p className="mt-4 text-slate-400">The page you are looking for has been moved, deleted, or never existed.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-sm uppercase tracking-widest rounded-full px-6 py-3"
          >
            Return home <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded-full px-6 py-3"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
