# Kalpanaaaa Light Visual-System Rebuild Implementation Plan

> **For Hermes:** Implement this plan in task order, preserving verified business data and validating desktop plus mobile after each visual family.

**Goal:** Replace the inconsistent light-mode overrides and repeated cube with a unified light technical design system, distinct content-aware visuals for each major route family, and carefully placed ReactBits interactions.

**Architecture:** Introduce a semantic token layer and a reusable `VisualScene` system. The scene shell will select a unique accessible SVG/HTML scene from a typed `variant` prop, while ReactBits components remain focused utilities: ClickSpark for interaction, LogoLoop for the technology marquee, Counter for existing approved metrics, and the OGL Galaxy only for AI/RAG detail pages with reduced-motion and no-WebGL fallbacks.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide, CSS/SVG, ReactBits-derived ClickSpark/LogoLoop/Counter, optional `ogl` for Galaxy.

---

## Design Decision Record

### Aesthetic direction
**Editorial technical blueprint**: warm white canvas, ink-navy typography, saturated cobalt as the sole strong accent, pale-blue surfaces, fine blueprint-grid rules, and translucent technical diagrams. The memorable device is **page-specific system diagrams**, not generic 3D decoration.

### Semantic colour tokens
Define these as CSS custom properties in `src/index.css`, then consume them through Tailwind semantic colours and component classes:

- `--canvas: oklch(0.985 0.006 255)` — near-white page background
- `--surface: oklch(0.965 0.014 250)` — pale blue card surface
- `--surface-strong: oklch(0.93 0.028 250)` — section/diagram surface
- `--ink: oklch(0.22 0.055 255)` — navy text
- `--muted: oklch(0.48 0.04 255)` — readable secondary text
- `--brand: oklch(0.57 0.20 255)` — company cobalt
- `--brand-deep: oklch(0.43 0.16 255)` — hover/focus cobalt
- `--line: oklch(0.86 0.025 255)` — borders and diagram strokes
- `--glow: oklch(0.72 0.14 250 / 0.28)` — restrained blue glow

No post-hoc `.text-white` or `.bg-ink` overrides will remain. Buttons explicitly use `text-white`; paper surfaces explicitly use `text-ink`.

### Site-wide scene rules
1. Every major page has exactly one relevant hero scene; it never competes with the title on mobile.
2. SVGs use the same stroke, corner radius, grid, cobalt, and soft-shadow vocabulary.
3. Actual labels use HTML/SVG text, not raster text, for accessibility and responsive scaling.
4. All motion honours `prefers-reduced-motion`; SVGs have static fallback states.
5. `aria-hidden` is used only where nearby visible copy conveys the same concept. Otherwise diagrams include a concise accessible label.

### Visual assignment map

| Route family | New visual | Meaning | Variant / implementation |
|---|---|---|---|
| Home | **Service Constellation** | Kalpanaaaa as the engineering hub; six real service labels orbit in three depth layers | `VisualScene variant="service-constellation"` — home-only, 3D CSS depth plus SVG orbit strokes |
| `/services` | **Capability Mesh** | Discover → Engineer → Operate layers connect the six service domains | `VisualScene variant="capability-mesh"` — isometric node mesh, not the home orbit |
| Service details | **Workload Blueprint** | A visual specific to the selected service | `VisualScene variant={service.slug}`: browser frame, device stack, cloud topology, QA test matrix, RAG retrieval route, agent handoff map |
| `/industries` | **Sector Signal Grid** | Four industry clusters linked through secure shared engineering rails | `VisualScene variant="sector-signal-grid"` |
| Industry details | **Industry Flow Diagram** | Government civic flow, Healthcare care/data flow, Finance ledger flow, Education learning path | `VisualScene variant={`industry-${industry.slug}`}` |
| `/work` | **Delivery Outcome Rail** | Requirements → engineering → release → measured outcome; links to case cards | `VisualScene variant="delivery-outcome-rail"` |
| Case-study details | **Outcome Diagram** | Case-specific pipeline, asset/data/order flow, and supplied approved metrics | `VisualScene variant={`case-${project.slug}`}` |
| `/blog` | **Research Index** | Connected note cards and curated publication rhythm | `VisualScene variant="research-index"` |
| About/contact/legal | No large decorative scene | Use a consistent small blueprint-marker/header rule only | Preserve clarity and content-first use |

---

## Task 1: Capture the existing routes and establish visual acceptance criteria

**Objective:** Ensure the redesign has concrete visual checks rather than a new collection of inconsistent diagrams.

**Files:**
- Create: `docs/visual-system.md`
- Reference: `src/App.tsx`, `src/pages/*.tsx`, `src/data/site.ts`

**Steps:**
1. Document all route families and the table above.
2. List desktop (`1440×950`) and mobile (`390×844`) acceptance checks:
   - no horizontal overflow;
   - 4.5:1 text contrast;
   - hero title and diagram do not overlap;
   - page variant differs visibly from the other route families;
   - reduced-motion renders a static, readable diagram.
3. Record that any metric, security claim, client name, or technology claim remains subject to the existing approval gate; no values will be added for visual decoration.

**Verification:** Browser snapshots of Home, Services, one Service detail, Industries, one Industry detail, Work, one Case-study, and Blog at both target sizes.

---

## Task 2: Replace override-based light mode with semantic tokens

**Objective:** Remove colour mismatches by rebuilding global visual primitives from a light-first semantic token system.

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/SectionHeading.tsx`
- Modify: `src/components/ServiceCard.tsx`
- Modify: `src/components/IndustryCard.tsx`
- Modify: `src/components/CaseStudyCard.tsx`
- Modify: `src/components/TechBadge.tsx`

**Steps:**
1. Define the token layer listed above in `src/index.css`; set `color-scheme: light`.
2. Replace legacy global forced selectors (`.text-white`, `.bg-ink`, `bg-ink/60`, etc.) with intentional semantic classes: `site-surface`, `site-card`, `site-border`, `text-ink`, `text-muted`, `button-primary`, `button-secondary`.
3. Add Tailwind aliases for `canvas`, `surface`, `ink`, `muted`, `line`, `brand`, and `brand-deep` only where utilities improve readability.
4. Refactor the navigation, footer, cards, headings, pills, buttons, and focus states to use the semantic primitives.
5. Ensure the logo is displayed on an intentional white logo plate with a subtle border so it does not float inside a mismatched rectangle.

**Verification:**
```bash
./node_modules/.bin/tsc --noEmit
npm run build
```
Use Chrome screenshot comparison on Home and Services. Confirm no dark/grey translucent header remains and button text stays white only on blue buttons.

---

## Task 3: Add reusable ReactBits-derived interaction primitives

**Objective:** Integrate the user-provided components safely and in roles that support the site rather than distract from it.

**Files:**
- Create: `src/components/effects/ClickSpark.tsx`
- Create: `src/components/effects/LogoLoop.tsx`
- Create: `src/components/effects/Counter.tsx`
- Create: `src/components/effects/Galaxy.tsx`
- Modify: `src/App.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/ServiceDetail.tsx`
- Modify: `src/index.css`
- Modify: `package.json` and lockfile only if `ogl` is installed for Galaxy

**ClickSpark integration:**
1. Convert the supplied JavaScript source to strict TypeScript.
2. Render at device-pixel-ratio resolution to keep sparks sharp on retina displays.
3. Wrap the application’s `<main>` content—not the navigation—with `sparkColor="var(--brand)"`, `sparkSize={8}`, `sparkRadius={20}`, `sparkCount={7}`, and `duration={360}`.
4. Preserve child click behavior and set canvas `pointer-events:none`.

**LogoLoop integration:**
1. Convert the supplied source to TypeScript and use the existing `TECHNOLOGIES` data through `renderItem`; do not link to third-party vendor sites unless they are intended external links.
2. Place it below the Home technology introduction as **“Engineering capability stack”**, not a fabricated client-logo strip.
3. Use `fadeOut`, pale background fade colour, `hoverSpeed={0}`, and `scaleOnHover`.

**Counter integration:**
1. Use Framer Motion imports compatible with the existing dependency, not `motion/react`.
2. Create a `MetricCounter` adapter that parses only existing approved numeric statistic values and renders suffixes (`+`, `%`, `ms`, `/7`) outside the moving digits.
3. Place it in the existing Home stats rail and case-study metric cards.
4. For nonnumeric expressions, render the supplied value as static text rather than misleadingly animating it.

**Galaxy integration:**
1. Add `ogl` only if it is compatible with the lockfile and production bundle budget.
2. Use it solely in RAG Systems and Multi-Agent Automation detail heroes as an interactive, transparent, pale-cobalt star field behind the corresponding retrieval/agent scene.
3. Lazy-load it, disable WebGL on reduced-motion, and fall back to the static `rag-retrieval-route` / `agent-handoff-map` SVGs if WebGL is unsupported.
4. Never use Galaxy as a global body background.

**Verification:** Test click sparks on buttons/cards without blocking links; hover/pause LogoLoop; inspect counters; emulate reduced motion; confirm Galaxy fallback with JavaScript disabled or WebGL unavailable where possible.

---

## Task 4: Create the shared, page-specific visual scene system

**Objective:** Prevent another repeated-cube implementation while retaining one visual language.

**Files:**
- Create: `src/components/visuals/VisualScene.tsx`
- Create: `src/components/visuals/scene-data.ts`
- Create: `src/components/visuals/BlueprintGrid.tsx`
- Create: `src/components/visuals/scenes/ServiceConstellation.tsx`
- Create: `src/components/visuals/scenes/CapabilityMesh.tsx`
- Create: `src/components/visuals/scenes/ServiceBlueprint.tsx`
- Create: `src/components/visuals/scenes/SectorSignalGrid.tsx`
- Create: `src/components/visuals/scenes/IndustryFlow.tsx`
- Create: `src/components/visuals/scenes/DeliveryOutcomeRail.tsx`
- Create: `src/components/visuals/scenes/CaseOutcome.tsx`
- Create: `src/components/visuals/scenes/ResearchIndex.tsx`
- Delete after migration: `src/components/ArchitectureOrb.tsx`
- Replace after migration: `src/components/AnimatedBackground.tsx`

**Steps:**
1. Create `VisualScene` as the single shell responsible for responsive dimensions, low-motion handling, shared gradient/line tokens, and the accessible diagram wrapper.
2. Put per-route data (labels, node captions, case metrics) in `scene-data.ts`; never hard-code scattered labels inside pages.
3. Build each variant from the visual assignment map. Shared SVG primitives may include rounded nodes, grid lines, labels, arrows, pulse dots, and a subtle parallax transform, but the overall composition must change per variant.
4. Keep complex SVG in semantic groups and add `<title>` / `<desc>` where the graphic is not decorative.
5. Use actual supplied names—services, industries, and case-study titles—not placeholder nodes.
6. Remove `ArchitectureOrb` only after all call sites migrate and compile.

**Verification:** Snapshot the eight route families side-by-side. The scenes must be recognizably distinct at a glance while clearly belonging to the same brand.

---

## Task 5: Integrate scenes into listing and detail pages

**Objective:** Give each named page a meaningful visual without producing empty whitespace above the fold.

**Files:**
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/ServiceDetail.tsx`
- Modify: `src/pages/Industries.tsx`
- Modify: `src/pages/IndustryDetail.tsx`
- Modify: `src/pages/Work.tsx`
- Modify: `src/pages/CaseStudyDetail.tsx`
- Modify: `src/pages/Blog.tsx`

**Steps:**
1. Recompose heroes into a consistent two-column desktop / content-then-scene mobile layout.
2. Home: render `service-constellation`, retain service labels as semantic content, and add a focused static/mobile scene below CTAs instead of hiding it.
3. Services: render `capability-mesh` with the six actual service names; no orbit clone.
4. Service details: map `service.slug` to the relevant `ServiceBlueprint` variant. RAG and multi-agent may layer the lazy Galaxy behind their SVG; others remain lightweight SVG-only.
5. Industries: render `sector-signal-grid`; industry details render their particular `IndustryFlow` shape.
6. Work: render `delivery-outcome-rail`; case details render their specific `CaseOutcome` route with only approved metrics.
7. Blog: render `research-index` and retain a content-first layout.
8. Remove excess empty hero padding on details. Desktop hero must reserve visual space deliberately; mobile must stack scene immediately after summary/CTA.

**Verification:** Deep-link directly into each route and confirm no scene-specific runtime error occurs when changing route params.

---

## Task 6: Validate performance, accessibility, and visual consistency

**Objective:** Ensure visual polish does not regress usability or correctness.

**Files:**
- No new product source expected unless validation finds a defect.

**Steps:**
1. Run TypeScript and production build.
2. Check console errors on Home, Services, `/services/rag-systems`, Industries, `/industries/healthcare`, Work, `/work/railtrace`, and Blog.
3. Capture desktop and mobile screenshots for the same routes; check horizontal overflow, heading visibility, scene clipping, and diagram label legibility.
4. Run desktop Lighthouse on Home and Services; resolve real accessibility/SEO regressions.
5. Check keyboard focus styles and confirm ClickSpark does not interfere with keyboard or link activation.
6. Run a reduced-motion test to confirm all scene animations stop or render statically.

**Acceptance criteria:**
- All requested pages have their own visual, with no copied cube scene.
- Home service labels visibly connect to the home constellation.
- Light theme is token-driven and has no inconsistent grey/dark legacy surfaces.
- ClickSpark, LogoLoop, Counter, and appropriately scoped Galaxy are integrated.
- `tsc --noEmit` and `npm run build` exit 0.
- Browser console has no application errors.

---

## Risks and decisions requiring care

1. **Galaxy / OGL cost:** WebGL is appropriate only for the two AI service pages. It must be lazy-loaded and have an SVG fallback; otherwise it risks harming performance and looks disconnected from the business narrative.
2. **Verified claims:** Counters will reflect existing approved site data only. No new client logos, metrics, certifications, phone numbers, or street addresses will be invented.
3. **ReactBits source compatibility:** The supplied Counter source references `motion/react`, but this project uses `framer-motion`; adapt imports rather than adding a second animation package.
4. **Route SEO:** This remains a Vite SPA. Client-side metadata works in the browser; deploy-time static pre-rendering/SSR is still recommended for final route-specific crawl and social-preview HTML.
5. **Scope discipline:** The visual scene system covers the named routes plus detail pages. It will not add visual noise to legal pages.
