import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICE_MENU, INDUSTRIES } from "../data/site";

const navLinks = [
  {
    label: "Industries",
    to: "/industries",
    children: INDUSTRIES.map((industry) => ({
      label: industry.title,
      to: `/industries/${industry.slug}`,
    })),
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<"services" | "industries" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setDesktopMenu(null);
  }, [location.pathname]);

  const closeMenus = () => {
    setOpen(false);
    setDesktopMenu(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-line shadow-[0_10px_28px_-26px_rgba(20,35,60,.5)]"
          : "bg-white/80 backdrop-blur border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 lg:h-13 flex items-center justify-between gap-4">
        {/* =====================================================
            BRAND LOGO
            ===================================================== */}

        <Link
          to="/"
          aria-label="Kalpanaaa Software Solutions — Home"
          className="flex-shrink-0 flex items-center"
        >
          <img
            src="/logo.webp"
            alt="Kalpanaaa Software Solutions Logo"
            className="h-20 sm:h-24 lg:h-28 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] object-contain transition-all duration-300"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <nav
          aria-label="Primary"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          className="hidden lg:flex items-center gap-1 flex-1 justify-center"
        >
          {/* =================================================
              SERVICES
              ================================================= */}

          <Link
            to="/"
            onClick={closeMenus}
            className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenus}
            className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md"
          >
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDesktopMenu("services")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <Link
              itemProp="url"
              to="/services"
              onClick={closeMenus}
              className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md"
            >
              <span itemProp="name">Services</span>

              <ChevronDown
                size={12}
                className={`transition-transform ${desktopMenu === "services" ? "rotate-180" : ""}`}
              />
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className={`
                absolute
                top-full
                left-1/2
                -translate-x-1/2
                pt-2
                w-[778px]
                max-w-[calc(100vw-32px)]
                transition-all
                duration-200
                ${desktopMenu === "services" ? "opacity-100 visible" : "opacity-0 invisible"}
              `}
              role="menu"
            >
              <div className="bg-white border border-line rounded-xl shadow-xl overflow-hidden">
                {/* =================================================
                    FIVE SERVICE CATEGORIES
                    ================================================= */}

                <div className="grid grid-cols-5 gap-0 p-6">
                  {SERVICE_MENU.map((category) => (
                    <div
                      key={category.title}
                      className="px-4 first:pl-2 last:pr-2"
                    >
                      {/* Category Heading */}
                      <div className="h-[45px] flex flex-col">
                        <h3 className="text-[11px] font-bold uppercase tracking-wider text-ink leading-5">
                          {category.title === "Full Stack Development & Design" ? (
                            <>
                              <span className="block">Full Stack</span>
                              <span className="block">Development</span>
                            </>
                          ) : category.title === "Cloud DevOps & Infrastructure" ? (
                            <>
                              <span className="block">Cloud DevOps &</span>
                              <span className="block">Infrastructure</span>
                            </>
                          ) : (
                            <span className="block">{category.title}</span>
                          )}
                        </h3>

                        <div className="mt-auto h-px bg-line" />
                      </div>

                      {/* Category Items */}
                      <div className="mt-3 space-y-1">
                        {category.items.map((item) => (
                          <Link
                            key={`${category.title}-${item.title}`}
                            to={`/services/${item.slug}`}
                            onClick={closeMenus}
                            className="
                              block
                              px-2
                              py-1.5
                              text-[13px]
                              leading-5
                              text-muted
                              hover:text-brand
                              hover:bg-surface
                              rounded-md
                              transition-colors
                            "
                            role="menuitem"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Services */}
                <div className="border-t border-line px-6 py-3">
                  <Link
                    to="/services"
                    onClick={closeMenus}
                    className="block text-xs font-mono uppercase tracking-widest text-brand hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              INDUSTRIES
              ================================================= */}

          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setDesktopMenu("industries")}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <Link
                itemProp="url"
                to={item.to}
                onClick={closeMenus}
                className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md"
              >
                <span itemProp="name">{item.label}</span>

                <ChevronDown
                  size={12}
                  className={`transition-transform ${desktopMenu === "industries" ? "rotate-180" : ""}`}
                />
              </Link>

              {/* Industries Dropdown */}
              <div
                className={`
                  absolute
                  top-full
                  left-1/2
                  -translate-x-1/2
                  pt-2
                  w-72
                  transition-all
                  duration-200
                  ${desktopMenu === "industries" ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
                role="menu"
              >
                <div className="bg-white border border-line rounded-xl shadow-xl p-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={closeMenus}
                      className="block px-3 py-2 text-sm text-muted hover:text-brand hover:bg-surface rounded-md transition-colors"
                      role="menuitem"
                    >
                      {child.label}
                    </Link>
                  ))}

                  <div className="border-t border-line mt-1 pt-1">
                    <Link
                      to={item.to}
                      onClick={closeMenus}
                      className="block px-3 py-2 text-xs font-mono uppercase tracking-widest text-brand hover:underline"
                    >
                      View all {item.label.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* =================================================
              BLOG
              ================================================= */}

          <Link
            to="/blog"
            onClick={closeMenus}
            className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md"
          >
            Blog
          </Link>
        </nav>

        {/* =====================================================
            CONTACT BUTTON
            ===================================================== */}

        <div className="hidden lg:block">
          <Link
            to="/contact"
            onClick={closeMenus}
            className="button-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest"
          >
            Contact us
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden p-2 text-ink rounded-md hover:bg-surface"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* =========================================================
          MOBILE DRAWER
          ========================================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-line bg-white overflow-hidden"
          >
            <div className="px-6 py-6 space-y-6 max-h-[calc(100vh-64px)] overflow-y-auto">
              <Link
                to="/"
                className="block py-2 text-sm font-semibold uppercase tracking-widest text-ink"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block py-2 text-sm font-semibold uppercase tracking-widest text-ink"
              >
                About
              </Link>

              {/* =================================================
                  MOBILE SERVICES
                  ================================================= */}

              <div>
                <Link
                  to="/services"
                  className="eyebrow mb-4 block"
                >
                  Services
                </Link>

                <div className="space-y-5 ml-2">
                  {SERVICE_MENU.map((category) => (
                    <div key={category.title}>
                      {/* Category */}
                      <p className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                        {category.title}
                      </p>

                      {/* Items */}
                      <div className="space-y-1 ml-2">
                        {category.items.map((item) => (
                          <Link
                            key={`${category.title}-${item.title}`}
                            to={`/services/${item.slug}`}
                            className="block py-1.5 text-sm text-muted hover:text-brand"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All */}
                <Link
                  to="/services"
                  className="block mt-4 text-xs font-mono uppercase tracking-widest text-brand"
                >
                  View all services →
                </Link>
              </div>

              {/* =================================================
                  MOBILE INDUSTRIES
                  ================================================= */}

              {navLinks.map((item) => (
                <div key={item.label}>
                  <p className="eyebrow mb-2">{item.label}</p>

                  <div className="space-y-1 ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block py-1.5 text-sm text-muted hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* =================================================
                  MOBILE BLOG
                  ================================================= */}

              <Link
                to="/blog"
                className="block py-2 text-sm font-semibold uppercase tracking-widest text-ink"
              >
                Blog
              </Link>

              {/* =================================================
                  MOBILE CONTACT
                  ================================================= */}

              <Link
                to="/contact"
                className="button-primary w-full px-5 py-3 text-xs font-bold uppercase tracking-widest mt-2"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
