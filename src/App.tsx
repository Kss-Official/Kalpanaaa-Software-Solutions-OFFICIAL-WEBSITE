import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ClickSpark } from "./components/effects/ClickSpark";

// ── Marketing site pages ──
const Home         = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const Services     = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const ServiceDetail  = lazy(() => import("./pages/ServiceDetail").then((m) => ({ default: m.ServiceDetail })));
const Industries   = lazy(() => import("./pages/Industries").then((m) => ({ default: m.Industries })));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail").then((m) => ({ default: m.IndustryDetail })));
const Work         = lazy(() => import("./pages/Work").then((m) => ({ default: m.Work })));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail").then((m) => ({ default: m.CaseStudyDetail })));
const About        = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Contact      = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Privacy      = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms        = lazy(() => import("./pages/Terms").then((m) => ({ default: m.Terms })));
const Blog         = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const NotFound     = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

// ── Employee Management Platform (lazy-loaded sub-app) ──
const PortalApp    = lazy(() => import("./portal/PortalApp"));
const VerificationView = lazy(() =>
  import("./portal/components/public/VerificationView").then((m) => ({ default: m.VerificationView }))
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [pathname]);
  return null;
}

function LoadingRoute() {
  return (
    <div className="min-h-[45vh] grid place-items-center text-xs font-mono uppercase tracking-widest text-brand">
      Loading…
    </div>
  );
}

function AnimatedMarketingRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Suspense fallback={<LoadingRoute />}>
          <Routes location={location}>
            <Route path="/"                 element={<Home />} />
            <Route path="/services"         element={<Services />} />
            <Route path="/services/:id"     element={<ServiceDetail />} />
            <Route path="/industries"       element={<Industries />} />
            <Route path="/industries/:id"   element={<IndustryDetail />} />
            <Route path="/work"             element={<Work />} />
            <Route path="/work/:id"         element={<CaseStudyDetail />} />
            <Route path="/blog"             element={<Blog />} />
            <Route path="/about"            element={<About />} />
            <Route path="/contact"          element={<Contact />} />
            <Route path="/privacy"          element={<Privacy />} />
            <Route path="/terms"            element={<Terms />} />
            <Route path="*"                 element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const location = useLocation();

  // Hide marketing chrome (Navbar / Footer) on portal and verify routes
  const isPortalRoute = location.pathname.startsWith("/portal") || location.pathname.startsWith("/verify");

  return (
    <div className="min-h-screen flex flex-col site-page">
      <ScrollToTop />

      {isPortalRoute ? (
        // ── Employee Management Platform (full-screen, no Navbar/Footer) ──
        <Suspense fallback={<LoadingRoute />}>
          <Routes>
            <Route path="/portal/*" element={<PortalApp />} />
            <Route path="/verify/:id" element={<VerificationView />} />
          </Routes>
        </Suspense>
      ) : (
        // ── Marketing website (Navbar + content + Footer) ──
        <div className="site-shell flex flex-col flex-1">
          <Navbar />
          <ClickSpark sparkColor="#1769d5" sparkSize={8} sparkRadius={20} sparkCount={7} duration={360} className="flex-1">
            <main className="min-h-full">
              <AnimatedMarketingRoutes />
            </main>
          </ClickSpark>
          <Footer />
        </div>
      )}
    </div>
  );
}
