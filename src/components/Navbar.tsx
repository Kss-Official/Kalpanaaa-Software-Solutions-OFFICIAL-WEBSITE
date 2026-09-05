import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Plus, Minus } from "lucide-react";
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

const ABOUT_MENU = [
  { label: "Discover us", to: "/our-company/discover-us" },
  { label: "Why Kalpanaaa", to: "/our-company/why-kalpanaaa" },
  { label: "Leadership", to: "/our-company/leadership" },
  { label: "What client says", to: "/our-company/what-client-says" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<"about" | "services" | "industries" | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname.startsWith("/our-company") || location.pathname.startsWith("/about");
  const isServicesActive = location.pathname.startsWith("/services");
  const isIndustriesActive = location.pathname.startsWith("/industries");
  const isBlogActive = location.pathname.startsWith("/blog");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setDesktopMenu(null);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenus = () => {
    setOpen(false);
    setDesktopMenu(null);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  const toggleMobileAbout = () => {
    setMobileAboutOpen((prev) => {
      const next = !prev;
      if (next) {
        setMobileServicesOpen(false);
        setMobileIndustriesOpen(false);
      }
      return next;
    });
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen((prev) => {
      const next = !prev;
      if (next) {
        setMobileAboutOpen(false);
        setMobileIndustriesOpen(false);
      }
      return next;
    });
  };

  const toggleMobileIndustries = () => {
    setMobileIndustriesOpen((prev) => {
      const next = !prev;
      if (next) {
        setMobileAboutOpen(false);
        setMobileServicesOpen(false);
      }
      return next;
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled
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
            src="/MainLogo.webp"
            alt="Kalpanaaa Software Solutions Logo"
            width={640}
            height={427}
            decoding="async"
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
              HOME
              ================================================= */}

          <Link
            to="/"
            onClick={closeMenus}
            className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors rounded-md"
          >
            Home
          </Link>

          {/* =================================================
              OUR COMPANY DROPDOWN
              ================================================= */}

          <div
            className="relative"
            onMouseEnter={() => setDesktopMenu("about")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <button
              type="button"
              onClick={() => setDesktopMenu((prev) => (prev === "about" ? null : "about"))}
              className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors rounded-md ${isAboutActive ? "text-brand" : "text-muted hover:text-brand"
                }`}
            >
              <span>Our Company</span>
              <ChevronDown
                size={12}
                className={`transition-transform ${desktopMenu === "about" ? "rotate-180" : ""}`}
              />
            </button>

            {/* About Dropdown Menu */}
            <div
              className={`
                absolute
                top-full
                left-1/2
                -translate-x-1/2
                pt-2
                w-56
                transition-all
                duration-200
                ${desktopMenu === "about" ? "opacity-100 visible" : "opacity-0 invisible"}
              `}
              role="menu"
            >
              <div className="bg-white border border-line rounded-xl shadow-xl p-2 space-y-1">
                {ABOUT_MENU.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenus}
                    className="block px-3 py-2 text-sm text-muted hover:text-brand hover:bg-surface rounded-md transition-colors"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              SERVICES DROPDOWN
              ================================================= */}

          <div
            className="relative"
            onMouseEnter={() => setDesktopMenu("services")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <button
              type="button"
              onClick={() => setDesktopMenu((prev) => (prev === "services" ? null : "services"))}
              className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors rounded-md ${isServicesActive ? "text-brand" : "text-muted hover:text-brand"
                }`}
            >
              <span>Services</span>
              <ChevronDown
                size={12}
                className={`transition-transform ${desktopMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>

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
                    className="block text-right text-xs font-mono uppercase tracking-widest text-brand hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              INDUSTRIES DROPDOWN
              ================================================= */}

          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setDesktopMenu("industries")}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <button
                type="button"
                onClick={() => setDesktopMenu((prev) => (prev === "industries" ? null : "industries"))}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors rounded-md ${isIndustriesActive ? "text-brand" : "text-muted hover:text-brand"
                  }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform ${desktopMenu === "industries" ? "rotate-180" : ""}`}
                />
              </button>

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

                  <div className="border-t border-line mt-1 pt-2">
                    <Link
                      to={item.to}
                      onClick={closeMenus}
                      className="block px-3 py-2 text-right text-xs font-mono uppercase tracking-widest text-brand hover:underline"
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
            Blogs
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
            Let's Connect{/* Contact us */}
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
            <div className="px-6 py-5 space-y-3 max-h-[calc(100vh-64px)] overflow-y-auto">
              {/* Home Link */}
              <div>
                <Link
                  to="/"
                  onClick={closeMenus}
                  className="block py-2 px-2.5 rounded-lg text-sm font-bold uppercase tracking-widest text-ink hover:bg-[#e5e7eb] hover:text-brand transition-all duration-200"
                >
                  Home
                </Link>
              </div>

              {/* About Accordion */}
              <div className="border-t border-[#e5e7eb] pt-3">
                <button
                  type="button"
                  aria-expanded={mobileAboutOpen}
                  aria-controls="mobile-about-menu"
                  aria-label="Toggle About sub-menu"
                  onClick={toggleMobileAbout}
                  className="w-full flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-[#e5e7eb] transition-all duration-200 text-left group"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-ink group-hover:text-brand transition-colors duration-200">
                    About
                  </span>
                  <span className="p-1.5 rounded-lg text-brand bg-brand/10 group-hover:bg-brand/20 transition-colors">
                    {mobileAboutOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      id="mobile-about-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden space-y-1 pt-3 pl-3 border-l-2 border-brand/20 ml-3"
                    >
                      {ABOUT_MENU.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={closeMenus}
                          className="block py-1.5 px-2 rounded-md text-xs font-semibold text-muted hover:bg-[#e5e7eb] hover:text-brand transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Accordion */}
              <div className="border-t border-[#e5e7eb] pt-3">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                  aria-label="Toggle Services sub-menu"
                  onClick={toggleMobileServices}
                  className="w-full flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-[#e5e7eb] transition-all duration-200 text-left group"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-ink group-hover:text-brand transition-colors duration-200">
                    Services
                  </span>
                  <span className="p-1.5 rounded-lg text-brand bg-brand/10 group-hover:bg-brand/20 transition-colors">
                    {mobileServicesOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      id="mobile-services-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden space-y-4 pt-3 pl-3 border-l-2 border-brand/20 ml-3"
                    >
                      {SERVICE_MENU.map((category) => (
                        <div key={category.title}>
                          <p className="text-xs font-extrabold uppercase tracking-wider text-brand mb-1.5">
                            {category.title}
                          </p>
                          <div className="space-y-1 ml-2">
                            {category.items.map((item) => (
                              <Link
                                key={`${category.title}-${item.title}`}
                                to={`/services/${item.slug}`}
                                onClick={closeMenus}
                                className="block py-1 px-2 rounded-md text-xs font-semibold text-muted hover:bg-[#e5e7eb] hover:text-brand transition-colors duration-200"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

                      <Link
                        to="/services"
                        onClick={closeMenus}
                        className="block pt-1 text-xs font-mono uppercase tracking-widest text-brand font-bold hover:underline"
                      >
                        View all services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Accordion */}
              <div className="border-t border-[#e5e7eb] pt-3">
                <button
                  type="button"
                  aria-expanded={mobileIndustriesOpen}
                  aria-controls="mobile-industries-menu"
                  aria-label="Toggle Industries sub-menu"
                  onClick={toggleMobileIndustries}
                  className="w-full flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-[#e5e7eb] transition-all duration-200 text-left group"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-ink group-hover:text-brand transition-colors duration-200">
                    Industries
                  </span>
                  <span className="p-1.5 rounded-lg text-brand bg-brand/10 group-hover:bg-brand/20 transition-colors">
                    {mobileIndustriesOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      id="mobile-industries-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden space-y-2 pt-3 pl-3 border-l-2 border-brand/20 ml-3"
                    >
                      {INDUSTRIES.map((industry) => (
                        <Link
                          key={industry.slug}
                          to={`/industries/${industry.slug}`}
                          onClick={closeMenus}
                          className="block py-1 px-2 rounded-md text-xs font-semibold text-muted hover:bg-[#e5e7eb] hover:text-brand transition-colors duration-200"
                        >
                          {industry.title}
                        </Link>
                      ))}

                      <Link
                        to="/industries"
                        onClick={closeMenus}
                        className="block pt-1 text-xs font-mono uppercase tracking-widest text-brand font-bold hover:underline"
                      >
                        View all industries →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog Link */}
              <div className="border-t border-[#e5e7eb] pt-3">
                <Link
                  to="/blog"
                  onClick={closeMenus}
                  className="block py-2 px-2.5 rounded-lg text-sm font-bold uppercase tracking-widest text-ink hover:bg-[#e5e7eb] hover:text-brand transition-all duration-200"
                >
                  Blog
                </Link>
              </div>

              {/* Contact Us CTA Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="button-primary w-full px-5 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
