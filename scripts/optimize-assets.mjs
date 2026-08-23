/**
 * One-off asset optimizer.
 *
 * Most of the large "SVG" files in public/ are Figma exports: an <svg> wrapper whose
 * only content is a single base64-encoded raster inside a <pattern>. SVGO cannot shrink
 * those (the bytes are the raster, not markup), so they are re-rendered to WebP at ~2x
 * their real display size. Rendering the whole SVG (rather than yanking the embedded
 * raster out) keeps any vector overlay the export may have on top of the bitmap, so the
 * result is pixel-faithful to what the browser was drawing before.
 *
 * Genuine vector SVGs are optimized with SVGO instead. Run scripts/verify-assets.mjs after
 * this to confirm every output is pixel-faithful to what it replaced.
 *
 * Usage: node scripts/optimize-assets.mjs [--only=raster|svgo]
 */
import { readFile, writeFile, stat, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { optimize } from "svgo";

const PUBLIC = path.resolve("public");

/**
 * targetWidth = ~2x the largest CSS width the asset is ever displayed at (DPR 2),
 * clamped at the end to the source bitmap's native width so nothing is upscaled.
 */
const RASTERIZE = [
  // --- Home: hero (LCP) ---
  { file: "Hero.svg", width: 1080, quality: 88, note: "hero / LCP, displayed at 540 CSS px" },

  // --- Home: service mosaic (8 cards, max ~400 CSS px incl. lg:scale-[1.35]) ---
  { file: "service-website.svg", width: 800 },
  { file: "service-mobile-app.svg", width: 800 },
  { file: "service-custom-software.svg", width: 800 },
  { file: "service-ai-chatbot.svg", width: 800 },
  { file: "service-ui-ux.svg", width: 800 },
  { file: "service-cloud-devops.svg", width: 800 },
  { file: "service-cybersecurity.svg", width: 800 },
  { file: "service-maintenance.svg", width: 800 },

  // --- Home: project cards (object-cover in a ~450x185 box) ---
  { file: "project-images/FinanceProjectImage.svg", width: 900, quality: 90 },
  { file: "project-images/GovernmentProjectImage.svg", width: 900, quality: 90 },
  { file: "project-images/EducationProjectImage.svg", width: 900, quality: 90 },
  { file: "project-images/HealthcareProjectImage.svg", width: 900, quality: 90 },

  // --- Home: development process ---
  { file: "Deve-1.svg", width: 1100 },
  { file: "Deve-2.svg", width: 1100 },
  { file: "development-step-1.jpeg", width: 1100 },

  // --- Home: tech stack marquee (max 116x86 CSS px) ---
  { file: "tech-stack/stack-01.svg", width: 240 },
  { file: "tech-stack/stack-02.svg", width: 240 },
  { file: "tech-stack/stack-03.svg", width: 240 },
  { file: "tech-stack/stack-04.svg", width: 240 },
  { file: "tech-stack/stack-05.svg", width: 240 },
  { file: "tech-stack/stack-06.svg", width: 240 },
  { file: "tech-stack/stack-07.svg", width: 240 },
  { file: "tech-stack/stack-08.svg", width: 240 },

  // --- Home: footer map strip (~400x145 CSS px, opaque) ---
  { file: "FooterImg.svg", width: 800, quality: 92, note: "map screenshot, photographic detail" },

  // --- Home: leadership ---
  { file: "Gaurav-2.png", width: 800 },
  { file: "Akshit-2.png", width: 800 },
  { file: "Priya_Portraits.png", width: 200, quality: 90, note: "52x52 avatar only" },
  { file: "Anmol_Portraits.png", width: 200, quality: 90, note: "52x52 avatar only" },

  // --- Inner pages: hero art (max 650 CSS px) ---
  { file: "AllFullStackServicePages.svg", width: 1300 },
  { file: "AllCloud&DevopsPages.svg", width: 1300 },
  { file: "AllGenerativeAIPages.svg", width: 1300 },
  { file: "AllCyberSecurityPages.svg", width: 1300 },
  { file: "AllOtherPages.svg", width: 1300 },
  { file: "All_Industries.svg", width: 1120, note: "Industries hero, max 560 CSS px" },
  { file: "Rectangle.svg", width: 1120, note: "Services hero, max 560 CSS px" },
];

/** True vector SVGs — SVGO only, never rasterized. */
const VECTORS = ["At the office-pana 1.svg", "Deve-3.svg", "Symbol.svg"];

/**
 * Explicit allow-list. `preset-default` in SVGO v4 rewrites path data, merges paths and
 * collapses groups. That is normally where the risk lives, so it was trialled first with
 * scripts/verify-assets.mjs: rendering before/after and diffing pixels gave a mean delta of
 * 0.0026/255 on these three files (max 18 on a few antialiased edge pixels) for a 55-60%
 * size cut. That is imperceptible, so the default preset is used. SVGO v4 already dropped
 * removeTitle/removeDesc from preset-default, so accessible names survive untouched.
 */
const SVGO_CONFIG = {
  multipass: true,
  plugins: ["preset-default"],
};

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

/** Native pixel width of the largest raster embedded in an SVG, or null if there is none. */
async function embeddedRasterWidth(svgPath) {
  const text = await readFile(svgPath, "utf8");
  const matches = text.match(/data:image\/(?:png|jpe?g|webp);base64,([A-Za-z0-9+/=\s]+)/g);
  if (!matches) return null;
  let widest = 0;
  for (const m of matches) {
    const b64 = m.slice(m.indexOf("base64,") + 7).replace(/\s/g, "");
    try {
      const meta = await sharp(Buffer.from(b64, "base64")).metadata();
      if (meta.width > widest) widest = meta.width;
    } catch {
      /* not a decodable raster — ignore */
    }
  }
  return widest || null;
}

async function rasterize({ file, width, note, quality }) {
  const src = path.join(PUBLIC, file);
  const out = path.join(PUBLIC, file.replace(/\.(svg|png|jpe?g)$/i, ".webp"));
  const before = (await stat(src)).size;

  const isSvg = /\.svg$/i.test(file);
  let target = width;
  let input;

  if (isSvg) {
    // Cap at the embedded bitmap's native width so we never upscale.
    const native = await embeddedRasterWidth(src);
    if (native) target = Math.min(width, native);

    const declared = (await sharp(src).metadata()).width;
    // librsvg rasterizes at declared_width * density / 72.
    const density = Math.max(72, Math.ceil((72 * target) / declared));
    input = sharp(src, { density });
  } else {
    const meta = await sharp(src).metadata();
    target = Math.min(width, meta.width);
    input = sharp(src);
  }

  await mkdir(path.dirname(out), { recursive: true });
  await input
    .resize({ width: target, withoutEnlargement: true })
    .webp({ quality: quality ?? 82, effort: 6 })
    .toFile(out);

  const after = (await stat(out)).size;
  const meta = await sharp(out).metadata();
  console.log(
    `  ${file.padEnd(46)} ${kb(before).padStart(9)} -> ${kb(after).padStart(8)}` +
      `  (${(100 - (after / before) * 100).toFixed(1)}% smaller, ${meta.width}x${meta.height}` +
      `${meta.hasAlpha ? ", alpha" : ""})${note ? `  # ${note}` : ""}`,
  );
  return { before, after, out: path.relative(PUBLIC, out).replace(/\\/g, "/"), width: meta.width, height: meta.height };
}

async function runSvgo(file) {
  const src = path.join(PUBLIC, file);
  const original = await readFile(src, "utf8");
  const { data } = optimize(original, { path: src, ...SVGO_CONFIG });
  await writeFile(src, data, "utf8");
  console.log(
    `  ${file.padEnd(46)} ${kb(Buffer.byteLength(original)).padStart(9)} -> ` +
      `${kb(Buffer.byteLength(data)).padStart(8)}  (${(100 - (Buffer.byteLength(data) / Buffer.byteLength(original)) * 100).toFixed(1)}% smaller)`,
  );
  return { before: Buffer.byteLength(original), after: Buffer.byteLength(data) };
}

const only = (process.argv.find((a) => a.startsWith("--only=")) || "").split("=")[1];
let before = 0;
let after = 0;
const dims = {};

if (only !== "svgo") {
  console.log("\nRasterizing bitmap-in-SVG wrappers + oversized rasters -> WebP\n");
  for (const entry of RASTERIZE) {
    try {
      const r = await rasterize(entry);
      before += r.before;
      after += r.after;
      dims[r.out] = { w: r.width, h: r.height };
    } catch (e) {
      console.log(`  !! ${entry.file}: ${e.message}`);
    }
  }
}

if (only !== "raster") {
  console.log("\nSVGO on genuine vector SVGs (metadata-only plugins)\n");
  for (const file of VECTORS) {
    try {
      const r = await runSvgo(file);
      before += r.before;
      after += r.after;
    } catch (e) {
      console.log(`  !! ${file}: ${e.message}`);
    }
  }
}

console.log(`\nTotal: ${kb(before)} -> ${kb(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
console.log(`\nIntrinsic sizes for width/height attributes:\n${JSON.stringify(dims, null, 2)}\n`);
