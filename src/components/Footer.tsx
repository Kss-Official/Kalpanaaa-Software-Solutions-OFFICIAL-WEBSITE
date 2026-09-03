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

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 xl:gap-8">
          {/* =====================================================
              COLUMN 1 — LOGO + DESCRIPTION
          ===================================================== */}

          <div className="space-y-4 lg:col-span-4 xl:col-span-4">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center">
              <img
                src="/MainLogo.svg"
                alt="Kalpanaaa Software Solutions Logo"
                width={640}
                height={427}
                loading="lazy"
                decoding="async"
                className="h-16 sm:h-20 lg:h-24 w-auto max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] object-contain transition-all duration-300"
              />
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-sm">
              Bespoke engineering partner providing full-lifecycle IT
              automation, RAG systems, multi-agent automation, and software
              solutions for government, healthcare, finance, and education.
            </p>
          </div>

          {/* =======================================================
              COLUMN 2 — QUICK LINKS
          ======================================================= */}

          <div className="flex flex-col lg:col-span-2 xl:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100/80 text-brand">
                <Link2 className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink">
                  Quick Links
                </h3>
                <div className="mt-1 h-0.5 w-7 rounded-full bg-brand"></div>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
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
              COLUMN 3 — CONNECT WITH US + SOCIAL MEDIA
          ======================================================= */}

          <div className="flex flex-col lg:col-span-3 xl:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100/80 text-brand">
                <Users className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink">
                  Connect With Us
                </h3>
                <div className="mt-1 h-0.5 w-7 rounded-full bg-brand"></div>
              </div>
            </div>

            {/* EMAIL + PHONE */}
            <div className="space-y-3.5">
              {/* Email - Arranged in single line */}
              <a
                href={`mailto:${NAP.email}`}
                className="flex items-center gap-3 text-xs sm:text-[13px] xl:text-sm text-muted hover:text-brand transition-colors duration-200 group"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.06)] text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                  <Mail size={14} />
                </span>

                <span className="whitespace-nowrap font-medium text-ink/90 group-hover:text-brand transition-colors">
                  {NAP.email}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:+91${NAP.whatsapp}`}
                className="flex items-center gap-3 text-xs sm:text-[13px] xl:text-sm text-muted hover:text-brand transition-colors duration-200 group"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.06)] text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                  <Phone size={14} />
                </span>

                <span className="whitespace-nowrap font-medium text-ink/90 group-hover:text-brand transition-colors">
                  +91 {NAP.whatsapp}
                </span>
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5">
                Follow Us
              </p>

              <div className="flex items-center gap-2.5">
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

          <div className="flex flex-col lg:col-span-3 xl:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100/80 text-brand">
                <Building2 className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink">
                  Operations base
                </h3>
                <div className="mt-1 h-0.5 w-7 rounded-full bg-brand"></div>
              </div>
            </div>

            {/* Location Image */}
            <div className="w-full h-[145px] overflow-hidden rounded-xl border border-line bg-white shadow-xs">
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

            {/* Location */}
            <div className="mt-4">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(29,78,216,0.06)] text-brand">
                  <MapPin size={14} />
                </span>

                <div>
                  <p className="text-xs sm:text-sm font-semibold text-ink">{NAP.name}</p>

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
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-8
            lg:px-12
            py-5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-3
            text-xs
            text-muted
          "
        >
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
