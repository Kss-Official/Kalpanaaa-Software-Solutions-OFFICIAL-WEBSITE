import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Link2,
  Users,
  Building2,
} from "lucide-react";
import { NAP } from "../data/site";

export function Footer() {
  return (
    <footer className="site-surface border-t border-line mt-12">
      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0">
          {/* =====================================================
              COLUMN 1 — LOGO + DESCRIPTION
          ===================================================== */}

          <div className="flex flex-col space-y-4 lg:pr-6 xl:pr-8">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center -mt-3 sm:-mt-4 lg:-mt-9">
              <img
                src="/MainLogo.webp"
                alt="Kalpanaaa Software Solutions Logo"
                width={640}
                height={427}
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 lg:h-28 w-auto max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] object-contain transition-all duration-300"
              />
            </Link>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Bespoke engineering partner providing full-lifecycle IT
              automation, RAG systems, multi-agent automation, and software
              solutions for government, healthcare, finance, and education.
            </p>
          </div>

          {/* =======================================================
              COLUMN 2 — QUICK LINKS
          ======================================================= */}

          <div className="flex flex-col pt-8 sm:pt-0 sm:pl-6 md:pl-8 lg:pl-8 xl:pl-10">
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.08)] text-brand">
                <Link2 size={18} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-ink">
                  Quick Links
                </h3>
                <div className="h-[2px] w-6 bg-brand mt-1 rounded-full" />
              </div>
            </div>

            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand transition-colors duration-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-brand transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-brand transition-colors duration-200"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-brand transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/industries"
                  className="hover:text-brand transition-colors duration-200"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* =======================================================
              COLUMN 3 — CONNECT WITH US
          ======================================================= */}

          <div className="flex flex-col pt-8 sm:pt-8 lg:pt-0 sm:pl-0 lg:pl-8 xl:pl-0">
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.08)] text-brand">
                <Users size={18} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-ink">
                  Connect With Us
                </h3>
                <div className="h-[2px] w-6 bg-brand mt-1 rounded-full" />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${NAP.email}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-brand transition-colors duration-200"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.06)] text-brand">
                  <Mail size={15} />
                </span>

                <span className="break-all">{NAP.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:+91${NAP.whatsapp}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-brand transition-colors duration-200"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.06)] text-brand">
                  <Phone size={15} />
                </span>

                <span>+91 {NAP.whatsapp}</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                Follow Us
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/kalpanaaa-software-solution-pvt-ltd/posts/?feedView=all"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white hover:-translate-y-0.5"
                >
                  <Linkedin size={16} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kalpnaaasoftwaresolutions/"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white hover:-translate-y-0.5"
                >
                  <Instagram size={16} />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white hover:-translate-y-0.5"
                >
                  <Facebook size={16} />
                </a>

                {/* X / Twitter */}
                <a
                  href="#"
                  aria-label="X / Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white hover:-translate-y-0.5"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* =======================================================
              COLUMN 4 — OPERATIONS BASE
          ======================================================= */}

          <div className="flex flex-col pt-8 sm:pt-8 lg:pt-0 sm:pl-6 md:pl-8 lg:pl-8 xl:pl-10">
            {/* Column Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.08)] text-brand">
                <Building2 size={18} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-ink">
                  Operations Base
                </h3>
                <div className="h-[2px] w-6 bg-brand mt-1 rounded-full" />
              </div>
            </div>

            {/* Location Image */}
            <div className="w-full h-[145px] overflow-hidden rounded-xl border border-line bg-white shadow-sm">
              <img
                src="/FooterImg.webp"
                alt="Kalpanaaa Software Solutions location"
                width={800}
                height={612}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Location Address */}
            <div className="mt-5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.06)] text-brand">
                  <MapPin size={15} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-ink">{NAP.name}</p>

                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {NAP.addressLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}

      <div className="border-t border-line bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted">
          {/* Copyright */}
          <div>
            © {NAP.founded} {NAP.name}. All rights reserved.
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/blog" className="hover:text-brand transition-colors">
              Insights
            </Link>

            <Link to="/privacy" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-brand transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
