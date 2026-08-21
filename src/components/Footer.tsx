import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { NAP } from "../data/site";

export function Footer() {
  return (
    <footer className="site-surface border-t border-line mt-12">
      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* =====================================================
              COLUMN 1 — LOGO + DESCRIPTION
          ===================================================== */}

          <div className="space-y-5 -mt-10">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo.webp"
                alt="Kalpanaaa Software Solutions Logo"
                className="h-20 sm:h-24 lg:h-28 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] object-contain transition-all duration-300"
              />
            </Link>

            {/* Description */}
            <p
              className="
                text-sm text-muted leading-relaxed max-w-sm relative -top-5
              "
            >
              Bespoke engineering partner providing full-lifecycle IT
              automation, RAG systems, multi-agent automation, and software
              solutions for government, healthcare, finance, and education.
            </p>
          </div>

          {/* =======================================================
              COLUMN 2 — QUICK LINKS
          ======================================================= */}

          <div className="flex flex-col lg:pl-14">
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-ink
                mb-5
              "
            >
              Quick Links
            </h3>

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
                  COLUMN 3 — CONTACT + SOCIAL MEDIA
              ======================================================= */}

          <div className="flex flex-col">
            <h3
              className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-widest
                    text-ink
                    mb-5
                  "
            >
              Connect With Us
            </h3>

            {/* =====================================================
                  EMAIL + PHONE
                ===================================================== */}

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${NAP.email}`}
                className="
                                        flex
                                        items-center
                                        gap-3
                                        text-sm
                                        text-muted
                                        hover:text-brand
                                        transition-colors
                                        duration-200
                                      "
              >
                <span
                  className="
                                          flex
                                          h-8
                                          w-8
                                          flex-shrink-0
                                          items-center
                                          justify-center
                                          rounded-full
                                          bg-[rgba(29,78,216,0.06)]
                                          text-brand
                                        "
                >
                  <Mail size={15} />
                </span>

                <span className="break-all">{NAP.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:+91${NAP.whatsapp}`}
                className="
                                        flex
                                        items-center
                                        gap-3
                                        text-sm
                                        text-muted
                                        hover:text-brand
                                        transition-colors
                                        duration-200
                                      "
              >
                <span
                  className="
                                          flex
                                          h-8
                                          w-8
                                          flex-shrink-0
                                          items-center
                                          justify-center
                                          rounded-full
                                          bg-[rgba(29,78,216,0.06)]
                                          text-brand
                                        "
                >
                  <Phone size={15} />
                </span>

                <span>+91 {NAP.whatsapp}</span>
              </a>
            </div>

            {/* =====================================================
                              SOCIAL MEDIA
                          ===================================================== */}

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                Follow Us
              </p>

              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/kalpanaaa-software-solution-pvt-ltd/posts/?feedView=all"
                  aria-label="LinkedIn"
                  className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-line
                                  bg-white
                                  text-muted
                                  transition-all
                                  duration-200
                                  hover:border-brand
                                  hover:bg-brand
                                  hover:text-white
                                  hover:-translate-y-0.5
                                "
                >
                  <Linkedin size={16} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kalpnaaasoftwaresolutions/"
                  aria-label="Instagram"
                  className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-line
                                  bg-white
                                  text-muted
                                  transition-all
                                  duration-200
                                  hover:border-brand
                                  hover:bg-brand
                                  hover:text-white
                                  hover:-translate-y-0.5
                                "
                >
                  <Instagram size={16} />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-line
                                  bg-white
                                  text-muted
                                  transition-all
                                  duration-200
                                  hover:border-brand
                                  hover:bg-brand
                                  hover:text-white
                                  hover:-translate-y-0.5
                                "
                >
                  <Facebook size={16} />
                </a>

                {/* X / Twitter */}
                <a
                  href="#"
                  aria-label="X / Twitter"
                  className="
                                  flex
                                  h-9
                                  w-9
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-line
                                  bg-white
                                  text-muted
                                  transition-all
                                  duration-200
                                  hover:border-brand
                                  hover:bg-brand
                                  hover:text-white
                                  hover:-translate-y-0.5
                                "
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* =======================================================
              COLUMN 4 — OPERATIONS BASE
          ======================================================= */}

          <div className="flex flex-col">
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-ink
                mb-5
              "
            >
              Operations base
            </h3>

            {/* Location Image */}
            <div
              className="
                w-full
                h-[145px]
                overflow-hidden
                rounded-xl
                border
                border-line
                bg-white
                shadow-sm
              "
            >
              <img
                src="/FooterImg.svg"
                alt="Kalpanaaa Software Solutions location"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-[1.03]
                "
              />
            </div>

            {/* Location */}
            <div className="mt-5">
              <div className="flex items-start gap-3">
                <span
                  className="
                    flex
                    h-8
                    w-8
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[rgba(29,78,216,0.06)]
                    text-brand
                  "
                >
                  <MapPin size={15} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-ink">{NAP.name}</p>

                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {NAP.addressLine}
                  </p>

                  {/* <p className="mt-1 text-xs leading-relaxed text-muted">
                    {NAP.city}, {NAP.region}, India — {NAP.pincode}
                  </p> */}
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
