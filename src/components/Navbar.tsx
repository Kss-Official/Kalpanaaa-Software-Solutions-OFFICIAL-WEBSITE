import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, INDUSTRIES, CASE_STUDIES } from "../data/site";

const navLinks = [
  { label: "Services", to: "/services", children: SERVICES.map((service) => ({ label: service.title, to: `/services/${service.slug}` })) },
  { label: "Industries", to: "/industries", children: INDUSTRIES.map((industry) => ({ label: industry.title, to: `/industries/${industry.slug}` })) },
  { label: "Work", to: "/work", children: CASE_STUDIES.map((project) => ({ label: project.client, to: `/work/${project.slug}` })) }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-line shadow-[0_10px_28px_-26px_rgba(20,35,60,.5)]" : "bg-white/80 backdrop-blur border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-16 sm:h-20 lg:h-24 flex items-center justify-between gap-4">
        {/* Brand Logo - Responsive Sizing */}
        <Link to="/" aria-label="Kalpanaaa Software Solutions — Home" className="flex-shrink-0 flex items-center py-1">
          <img
            src="/logo.webp"
            alt="Kalpanaaa Software Solutions Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-28 w-auto max-w-[220px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[460px] object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((item) => (
            <div key={item.label} className="group relative">
              <Link to={item.to} className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md">
                {item.label}
                <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu">
                <div className="bg-white border border-line rounded-xl shadow-xl p-2">
                  {item.children.map((child) => (
                    <Link key={child.to} to={child.to} className="block px-3 py-2 text-sm text-muted hover:text-brand hover:bg-surface rounded-md transition-colors" role="menuitem">
                      {child.label}
                    </Link>
                  ))}
                  <div className="border-t border-line mt-1 pt-1">
                    <Link to={item.to} className="block px-3 py-2 text-xs font-mono uppercase tracking-widest text-brand hover:underline">
                      View all {item.label.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link to="/blog" className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md">
            Blog
          </Link>
          <Link to="/about" className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md">
            About
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact" className="button-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest">
            Contact us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button type="button" aria-label="Open navigation menu" onClick={() => setOpen((value) => !value)} className="lg:hidden p-2 text-ink rounded-md hover:bg-surface">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="lg:hidden border-t border-line bg-white overflow-hidden">
            <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-64px)] overflow-y-auto">
              {navLinks.map((item) => (
                <div key={item.label}>
                  <p className="eyebrow mb-2">{item.label}</p>
                  <div className="space-y-1 ml-2">
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to} className="block py-1.5 text-sm text-muted hover:text-brand">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link to="/blog" className="block py-2 text-sm font-semibold uppercase tracking-widest text-ink">Blog</Link>
              <Link to="/about" className="block py-2 text-sm font-semibold uppercase tracking-widest text-ink">About</Link>
              <Link to="/contact" className="button-primary w-full px-5 py-3 text-xs font-bold uppercase tracking-widest mt-2">Contact us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
