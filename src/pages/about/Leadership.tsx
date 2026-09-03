import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Code,
  Layers,
  Settings,
  Users,
  Target,
  Lightbulb,
  LayoutGrid,
  TrendingUp,
  Zap,
  Accessibility,
  ShieldCheck,
  Database,
  Puzzle,
  Gauge,
  Heart,
  Trophy,
  CheckCircle,
  Activity,
} from "lucide-react";
import { SEO } from "../../components/SEO";

// Initial Leaders Data
const INITIAL_LEADERS = [
  {
    id: "gaurav",
    name: "Gaurav Kumar Tripathi",
    role: "FOUNDER, MD & CTO",
    image: "/Gaurav-2.webp",
    fallbackImage: "/Gaurav-2.webp",
    bio: "Systems engineer turned founder. Architecting bespoke digital transformation for regulated industries. Owns technical delivery across all engagements.",
  },
  {
    id: "akshit",
    name: "Akshit Ujjain",
    role: "CO-FOUNDER & CEO",
    image: "/Akshit-2.webp",
    fallbackImage: "/Akshit-2.webp",
    bio: "Operator-led growth. Builds the commercial engine, owns client relationships, and runs the delivery playbook for every engagement.",
  },
];

// Section 3 Department Showcase Data (Exact match with provided design screenshots)
const TEAM_DEPARTMENTS = [
  {
    id: "design",
    tabName: "Design Team",
    leftSubtext:
      "We're a team of passionate designers who turn ideas into meaningful digital experiences through creativity, strategy and precision.",
    title: "Design Team",
    description:
      "We craft intuitive, impactful and visually engaging experiences that connect brands with people. From user research and wireframing to UI design and prototyping, we focus on creating solutions that are not only beautiful but also functional and user-centered.",
    image: "/about/dept_design_3d.png",
    tabIcon: PenTool,
    features: [
      {
        title: "User-Centered Approach",
        description:
          "We design with empathy, ensuring every solution is built around real user needs.",
        icon: Target,
      },
      {
        title: "Creative Excellence",
        description:
          "We blend creativity with strategy to craft visually engaging and effective designs.",
        icon: Lightbulb,
      },
      {
        title: "End-to-End Design",
        description:
          "From research and wireframing to UI and prototyping, we handle it all.",
        icon: LayoutGrid,
      },
      {
        title: "Impact-Driven Solutions",
        description:
          "We focus on delivering designs that create real business impact.",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "frontend",
    tabName: "Frontend Team",
    leftSubtext:
      "We're a team of passionate developers who build fast, responsive and accessible web experiences that users love to interact with.",
    title: "Frontend Team",
    description:
      "We build clean, responsive and high-performing interfaces that bring ideas to life on the web. Our focus is on delivering seamless user experiences with modern technologies and best practices.",
    image: "/about/dept_frontend_3d.png",
    tabIcon: Code,
    features: [
      {
        title: "Responsive Design",
        description:
          "We create layouts that adapt perfectly to every screen size and device.",
        icon: LayoutGrid,
      },
      {
        title: "Pixel-Perfect Development",
        description:
          "Our interfaces are crafted with precision and attention to detail.",
        icon: Layers,
      },
      {
        title: "Performance Focused",
        description:
          "We optimize every element for speed, performance and better user experience.",
        icon: Zap,
      },
      {
        title: "Accessible by Design",
        description:
          "We build inclusive interfaces that are usable by everyone.",
        icon: Accessibility,
      },
    ],
  },
  {
    id: "backend",
    tabName: "Backend Team",
    leftSubtext:
      "We're a team of passionate developers who build powerful, secure and scalable backend systems that drive seamless digital experiences.",
    title: "Backend Team",
    description:
      "We build robust, secure and scalable backend systems that power applications and ensure everything runs smoothly behind the scenes. Our focus is on performance, reliability and seamless integration.",
    image: "/about/dept_backend_3d.png",
    tabIcon: Layers,
    features: [
      {
        title: "Secure & Reliable",
        description:
          "We build secure systems with industry best practices to protect your data and users.",
        icon: ShieldCheck,
      },
      {
        title: "Scalable Architecture",
        description:
          "Our solutions are designed to scale effortlessly as your business grows.",
        icon: Database,
      },
      {
        title: "Seamless Integration",
        description:
          "We integrate third-party services and APIs to extend functionality and add value.",
        icon: Puzzle,
      },
      {
        title: "High Performance",
        description:
          "We optimize databases, servers and APIs for speed, efficiency and peak performance.",
        icon: Gauge,
      },
    ],
  },
  {
    id: "software",
    tabName: "Software Team",
    leftSubtext:
      "We're a team of passionate problem solvers who turn ideas into reliable, innovative and impactful software solutions that drive real value.",
    title: "Software Team",
    description:
      "We design, develop and deliver custom software solutions that solve complex problems and streamline business operations. Our focus is on quality, innovation and building software that's future-ready.",
    image: "/about/dept_software_3d.png",
    tabIcon: Settings,
    features: [
      {
        title: "Custom Solutions",
        description:
          "We build tailored software solutions that address unique business challenges.",
        icon: Code,
      },
      {
        title: "Innovative Technology",
        description:
          "We leverage the latest technologies to build smart, efficient and future-ready products.",
        icon: Lightbulb,
      },
      {
        title: "Quality & Reliability",
        description:
          "Quality is at the core of everything we build, ensuring reliable and bug-free software.",
        icon: ShieldCheck,
      },
      {
        title: "Scalable & Maintainable",
        description:
          "Our software is built to scale with your business and is easy to maintain and evolve.",
        icon: TrendingUp,
      },
    ],
  },
  {
    id: "testing",

    tabName: "Testing Team",

    leftSubtext:
      "We're a team of quality-focused professionals who ensure every product is reliable, secure and delivers a seamless experience for our users.",

    title: "Testing Team",

    description:
      "We ensure quality at every stage of development by identifying issues early, improving reliability and delivering products that meet the highest standards of performance and user experience.",

    image: "/about/dept_testing_3d.png",

    tabIcon: ShieldCheck,

    features: [
      {
        title: "Quality First",

        description:
          "We make quality a priority by thoroughly validating every feature and ensuring our products meet the expected standards.",

        icon: ShieldCheck,
      },

      {
        title: "Test & Validate",

        description:
          "We perform comprehensive functional and integration testing to identify issues and ensure everything works as expected.",

        icon: CheckCircle,
      },

      {
        title: "Performance & Reliability",

        description:
          "We evaluate performance, stability and reliability to ensure our applications deliver a smooth experience under real-world conditions.",

        icon: Activity,
      },

      {
        title: "Continuous Improvement",

        description:
          "We continuously learn from defects, feedback and testing results to improve our processes and deliver better-quality products.",

        icon: TrendingUp,
      },
    ],
  },
  {
    id: "hr",
    tabName: "HR Team",
    leftSubtext:
      "We're a team of passionate professionals who support, empower and inspire our people to build a positive culture and achieve their best every day.",
    title: "HR Team",
    description:
      "We build a people-first culture where everyone feels valued, supported and empowered to grow. Our focus is on talent development, well-being and creating an environment where teams can thrive.",
    image: "/about/dept_hr_3d.png",
    tabIcon: Users,
    features: [
      {
        title: "People First",
        description:
          "We put people at the heart of everything we do and foster a culture of trust, respect and inclusion.",
        icon: Users,
      },
      {
        title: "Talent Development",
        description:
          "We empower our people with continuous learning and growth opportunities to reach their full potential.",
        icon: TrendingUp,
      },
      {
        title: "Well-being & Support",
        description:
          "We care for the well-being of our team and provide the support they need to succeed personally and professionally.",
        icon: Heart,
      },
      {
        title: "Stronger Together",
        description:
          "We believe in collaboration, celebrate success and build strong relationships that drive us forward.",
        icon: Trophy,
      },
    ],
  },
];

// Values Data for Section 4
const VALUES = [
  {
    title: "We win as a team",
    description:
      "We believe in the power of a diverse team, in which all of us work together and each one of us takes ownership of their individual contributions. When we pair proactivity and creativity with trust and freedom, we will accomplish amazing things together.",
  },
  {
    title: "We are hungry but humble",
    description:
      "We set ourselves ambitious goals to provide real value to our customers. We work hard to achieve our aims, while continuously challenging our status quo and striving to constantly improve our service as well as ourselves.",
  },
  {
    title: "We love technology",
    description:
      "We believe in the power of technology to solve almost any problem. To provide our customers with the best possible user experience, we build our own technology and leverage machine learning.",
  },
  {
    title: "We focus on the customer",
    description:
      "As passionate travelers ourselves, we want to make a real difference for our customers. We put our customer first in every decision and seek to be genuinely helpful. We listen to customers, partners and colleagues to serve them in a transparent and friendly manner.",
  },
];

export function Leadership() {
  const [leaders, setLeaders] = useState(INITIAL_LEADERS);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const handleLeaderClick = (clickedId: string) => {
    setLeaders((prevLeaders) => {
      const clickedIndex = prevLeaders.findIndex((l) => l.id === clickedId);
      if (clickedIndex === 0) return prevLeaders;
      const clickedLeader = prevLeaders[clickedIndex];
      const remaining = prevLeaders.filter((l) => l.id !== clickedId);
      return [clickedLeader, ...remaining];
    });
  };

  const handleNextTeam = () => {
    setActiveTeamIndex((prev) => (prev + 1) % TEAM_DEPARTMENTS.length);
  };

  const handlePrevTeam = () => {
    setActiveTeamIndex(
      (prev) => (prev - 1 + TEAM_DEPARTMENTS.length) % TEAM_DEPARTMENTS.length
    );
  };

  const scrollToLeaders = () => {
    const el = document.getElementById("our-leaders-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentTeam = TEAM_DEPARTMENTS[activeTeamIndex];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Leadership — Great technology starts with great people"
        description="Meet the founders and leadership team guiding Kalpanaaa Software Solutions. Building intelligent digital experiences with passion and purpose."
        canonical="https://kalpanaaasoftwaresolutions.in/about/leadership"
      />

      {/* =========================================================================
          SECTION 1: HERO ("THE PEOPLE BEHIND THE VISION")
          ========================================================================= */}
      <section className="relative bg-gradient-to-tr from-blue-50/30 via-white to-cyan-50/40 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-line/60 overflow-hidden">
        {/* Soft Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="h-[2px] w-8 bg-brand"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">
                THE PEOPLE BEHIND THE VISION
              </span>
              <span className="h-[2px] w-8 bg-brand"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink font-display leading-[1.15]">
              Great technology <br />
              starts with great people<span className="text-cyan-400 font-extrabold">.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Behind every solution we create is a team that combines strategy,
              creativity and technology to turn ambitious ideas into meaningful
              digital experiences.
            </p>
          </motion.div>

          {/* Scroll Down Indicator with Live Animated Motion */}
          <div className="pt-8 flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand font-mono">
              SCROLL
            </span>
            <div className="relative flex items-center justify-center">
              {/* Soft Ambient Ripple Pulse Ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-brand/20"
                animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              />
              {/* Live Bouncing Button */}
              <motion.button
                type="button"
                onClick={scrollToLeaders}
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                aria-label="Scroll to Leaders section"
                className="w-10 h-10 rounded-full border border-brand/40 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors shadow-sm group relative z-10 bg-white/80 backdrop-blur-xs"
              >
                <motion.div
                  animate={{ y: [0, 2.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown size={16} />
                </motion.div>
              </motion.button>
            </div>
            {/* Live Pulsing Line */}
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.85, 1.15, 0.85] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-8 w-[1.5px] bg-brand/40 rounded-full origin-top"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: LEADERS ("Our Leaders") - INTERACTIVE STEPPED LAYOUT
          ========================================================================= */}
      <section
        id="our-leaders-section"
        className="relative bg-white pt-0 pb-28 md:pb-36 border-b border-line/60 scroll-mt-12 overflow-hidden"
      >
        {/* Top Orange Background Banner */}
        <div className="bg-[#ff5a17] text-white pt-16 pb-32 md:pt-20 md:pb-44 px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight">
            Our Leaders
          </h2>
          <p className="text-sm sm:text-base text-orange-100 max-w-2xl mx-auto leading-relaxed font-sans">
            A team of cool-headed professionals and warm-hearted innovators changing
            the world with innovative products and outstanding services that people
            simply love to use.
          </p>
        </div>

        {/* Interactive Overlapping Leaders Grid */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 -mt-24 sm:-mt-28 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start justify-center">
            {leaders.map((leader, index) => {
              const isTop = index === 0;

              const verticalOffsetClass = isTop ? "md:mt-0" : "md:mt-32 lg:mt-36";

              return (
                <motion.div
                  layout
                  key={leader.id}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  onClick={() => handleLeaderClick(leader.id)}
                  className={`flex flex-col items-center text-center space-y-4 cursor-pointer group ${verticalOffsetClass}`}
                >
                  {/* Circular Portrait Image */}
                  <motion.div
                    layout
                    className={`w-44 h-44 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100 shrink-0 transition-all duration-300 ${isTop
                      ? "ring-4 ring-orange-500/60 shadow-orange-500/20 scale-105"
                      : "group-hover:ring-4 group-hover:ring-orange-400/40 group-hover:scale-102"
                      }`}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.src = leader.fallbackImage;
                      }}
                    />
                  </motion.div>

                  {/* Name & Role */}
                  <motion.div layout className="pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-ink font-display group-hover:text-[#ff5a17] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mt-1">
                      {leader.role}
                    </p>
                  </motion.div>

                  {/* Bio (Shown below Top / Active Leader) */}
                  {isTop && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="pt-4 text-left max-w-xs space-y-2 bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-5 shadow-sm mt-2"
                    >
                      <h4 className="text-sm font-bold text-slate-700 font-display">
                        Our Leaders
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {leader.bio}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Orange Action Button */}
          <div className="text-center pt-20 md:pt-28">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#ff5a17] hover:bg-[#e04c10] text-white px-9 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TEAM DEPARTMENTS SHOWCASE ("OUR TEAM")
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-line/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-3xl">
            {/* Left Blue Panel - Extends from top border to bottom border */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 bg-[#f0f6fe] rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden h-full border border-blue-100/60"
            >
              {/* Top Text Content */}
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1c55e8] font-mono">
                    MEET OUR TEAM
                  </span>
                  <span className="block w-8 h-[2px] bg-[#1c55e8]" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display leading-[1.15]">
                  Great people <br />
                  behind every <br />
                  <span className="text-[#1c55e8]">great solution.</span>
                </h2>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTeam.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed pt-2 max-w-sm"
                  >
                    {currentTeam.leftSubtext}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Bottom Pinned Graphic Design (Pinned flush to the very bottom end of the left box) */}
              <div className="absolute bottom-0 left-0 right-0 w-full h-72 sm:h-80 pointer-events-none overflow-hidden rounded-b-3xl z-0">
                <svg
                  className="absolute bottom-0 left-0 w-full h-full"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Bottom Right Soft Blue Fill Curve */}
                  <path
                    d="M 0 300 Q 240 260 400 150 L 400 300 Z"
                    fill="#e0ecfd"
                  />

                  {/* Inner Dotted Arc Line */}
                  <circle
                    cx="-30"
                    cy="300"
                    r="220"
                    stroke="#a3c4f7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Outer Dotted Arc Line */}
                  <circle
                    cx="-30"
                    cy="300"
                    r="300"
                    stroke="#a3c4f7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Solid Blue Accent Dot on Outer Arc */}
                  <circle cx="160" cy="68" r="8.5" fill="#1c55e8" />
                </svg>
              </div>
            </motion.div>

            {/* Right Main Content Box */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTeam.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* 1. Main 3D Banner Image (Full, Untrimmed) */}
                  <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#f2f6ff] via-[#f7faff] to-[#edf4ff] border border-blue-100/60 shadow-xs">
                    <img
                      src={currentTeam.image}
                      alt={currentTeam.title}
                      className="w-full h-auto object-contain block rounded-3xl"
                    />
                  </div>

                  {/* 2. Department Title & Arrow Navigation Controls */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                        {currentTeam.title}
                      </h3>
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={handlePrevTeam}
                          aria-label="Previous team"
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextTeam}
                          aria-label="Next team"
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1c55e8] text-white hover:bg-blue-700 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {currentTeam.description}
                    </p>
                  </div>

                  {/* 3. Team Selector Tabs Bar */}
                  <div className="border border-slate-200/80 bg-white rounded-2xl p-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar shadow-xs">
                    {TEAM_DEPARTMENTS.map((team, idx) => {
                      const TabIcon = team.tabIcon;
                      const isActive = idx === activeTeamIndex;
                      return (
                        <button
                          key={team.id}
                          type="button"
                          onClick={() => setActiveTeamIndex(idx)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${isActive
                            ? "bg-[#edf4ff] text-[#1c55e8] shadow-xs border border-blue-100/80"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                        >
                          <TabIcon
                            size={17}
                            className={isActive ? "text-[#1c55e8]" : "text-slate-500"}
                          />
                          <span>{team.tabName}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* 4. Bottom 4 Feature Cards Box */}
                  <div className="border border-slate-200/80 bg-white rounded-3xl p-6 sm:p-7 shadow-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                      {currentTeam.features.map((feat, fIdx) => {
                        const FeatIcon = feat.icon;
                        return (
                          <div
                            key={feat.title}
                            className={`flex flex-col space-y-2.5 ${fIdx > 0 ? "pt-4 sm:pt-0 sm:pl-4 lg:pl-5" : ""
                              }`}
                          >
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#edf4ff] text-[#1c55e8] flex items-center justify-center shadow-xs shrink-0">
                              <FeatIcon size={19} />
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 font-display leading-snug">
                              {feat.title}
                            </h4>
                            <p className="text-xs text-slate-500 font-sans leading-relaxed">
                              {feat.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: VALUES ("Our values")
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c55e8] font-display">
              Our values
            </h2>
            <p className="text-base text-muted leading-relaxed">
              These values are at the centre of our company culture and influence our
              daily activities and strategic decisions.
            </p>
          </div>

          {/* 2x2 Grid of Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {VALUES.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-[#f5f8fc] hover:bg-[#edf3fb] border border-slate-200/60 rounded-3xl p-8 space-y-4 transition-all duration-300 shadow-sm"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#0099e6] font-display">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
