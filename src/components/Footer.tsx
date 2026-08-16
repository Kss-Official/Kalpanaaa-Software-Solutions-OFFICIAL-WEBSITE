import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { SERVICES, NAP } from "../data/site";

export function Footer() {
  // Keep only the first 5 services in the footer
  const footerServices = SERVICES.slice(0, 5);

  return (
    <footer className="site-surface border-t border-line mt-12">

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-8
          lg:px-12
          py-12
          md:py-14
        "
      >

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_1.1fr_1.2fr]
            gap-10
            md:gap-12
            lg:gap-14
          "
        >

          {/* =====================================================
              COLUMN 1 — LOGO + DESCRIPTION
          ===================================================== */}

          <div className="space-y-5 -mt-10">

            {/* Logo */}
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo.webp"
                alt="Kalpanaaa Software Solutions Logo"
                className="h-20 sm:h-24 lg:h-28 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] object-contain transition-all duration-300" />
            </Link>


            {/* Description */}
            <p
              className="
                text-sm text-muted leading-relaxed max-w-sm relative -top-5
              "
            >
              Bespoke engineering partner providing full-lifecycle IT
              automation, RAG systems, multi-agent automation, and
              software solutions for government, healthcare, finance,
              and education.
            </p>

          </div>



          {/* =====================================================
              COLUMN 2 — QUICK LINKS
          ===================================================== */}

          <div>

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


            <ul
              className="
                space-y-3
                text-sm
                text-muted
              "
            >

              {/* <li>
                <Link
                  to="/"
                  className="hover:text-brand transition-colors"
                >
                  Home
                </Link>
              </li> */}

              <li>
                <Link
                  to="/about"
                  className="hover:text-brand transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-brand transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-brand transition-colors"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/industries"
                  className="hover:text-brand transition-colors"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand transition-colors"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>



          {/* =====================================================
              COLUMN 3 — ALL SERVICES
          ===================================================== */}

          <div>

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
              All Services
            </h3>


            <ul
              className="
                space-y-3
                text-sm
                text-muted
              "
            >

              {footerServices.map((service) => (

                <li key={service.slug}>

                  <Link
                    to={`/services/${service.slug}`}
                    className="
                      hover:text-brand
                      transition-colors
                    "
                  >
                    {service.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>



          {/* =====================================================
              COLUMN 4 — BRANCH + CONTACT
          ===================================================== */}

          <div>

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
              Branch & Contact
            </h3>


            {/* Branch / Address */}
            <div className="space-y-3">

              <div>

                <p
                  className="
                    text-sm
                    font-medium
                    text-ink
                  "
                >
                  {NAP.name}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-muted
                    leading-relaxed
                  "
                >
                  {NAP.addressLine}
                </p>

              </div>


              {/* Location */}
              <div
                className="
                  flex
                  items-start
                  gap-2.5
                  text-sm
                  text-muted
                "
              >

                <MapPin
                  size={15}
                  className="
                    text-brand
                    mt-0.5
                    flex-shrink-0
                  "
                />

                <span>
                  {NAP.city}, {NAP.region}, India — {NAP.pincode}
                </span>

              </div>


              {/* Email */}
              <a
                href={`mailto:${NAP.email}`}
                className="
                  flex
                  items-center
                  gap-2.5
                  text-sm
                  text-muted
                  hover:text-brand
                  transition-colors
                "
              >

                <Mail
                  size={15}
                  className="text-brand flex-shrink-0"
                />

                <span>
                  {NAP.email}
                </span>

              </a>


              {/* WhatsApp */}
              <a
                href={`https://wa.me/${NAP.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2.5
                  text-sm
                  text-muted
                  hover:text-brand
                  transition-colors
                "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-brand flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>

                <span>
                  +91 {NAP.whatsapp}
                </span>

              </a>

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
          <div className="text-center md:text-left">
            © {NAP.founded} {NAP.name}. All rights reserved.
          </div>


          {/* Bottom links */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
            "
          >

            <Link
              to="/blog"
              className="hover:text-brand transition-colors"
            >
              Insights
            </Link>

            <Link
              to="/privacy"
              className="hover:text-brand transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-brand transition-colors"
            >
              Terms of Service
            </Link>

            <a
              href={`mailto:${NAP.email}`}
              className="hover:text-brand transition-colors"
            >
              {NAP.email}
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}