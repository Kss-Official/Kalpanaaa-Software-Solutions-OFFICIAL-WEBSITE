/**
 * Verification pass for scripts/optimize-assets.mjs.
 *
 * 1. Every rasterized asset is compared against its original at the same render width.
 *    Both are composited over white and diffed channel-by-channel, so the number reported
 *    is the real perceptual delta introduced by the WebP encode.
 * 2. For the genuine vector SVGs, an aggressive SVGO preset (the one that actually shrinks
 *    path data) is trialled and diffed against the original render. It is only worth
 *    adopting if the delta is effectively zero.
 *
 * Usage: node scripts/verify-assets.mjs
 */
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { optimize } from "svgo";

const PUBLIC = path.resolve("public");

/**
 * Render anything to a flat RGB buffer at an exact width x height, composited over white.
 * Both dimensions must be given: `fit: "fill"` with only a width keeps the source height,
 * which silently misaligns rows and makes any diff meaningless.
 */
async function render(input, width, height) {
  const isSvg = Buffer.isBuffer(input) ? true : /\.svg$/i.test(String(input));
  let pipeline;
  if (isSvg) {
    const meta = await sharp(input).metadata();
    const density = Math.max(72, Math.ceil((72 * width) / meta.width));
    pipeline = sharp(input, { density });
  } else {
    pipeline = sharp(input);
  }
  return pipeline
    .resize({ width, height, fit: "fill" })
    .flatten({ background: "#ffffff" })
    .raw()
    .toBuffer({ resolveWithObject: true });
}

/** Mean + max absolute per-channel difference, in 0-255 units. */
function diff(a, b) {
  if (a.length !== b.length) return null;
  let sum = 0;
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    const d = Math.abs(a[i] - b[i]);
    sum += d;
    if (d > max) max = d;
  }
  return { mean: sum / a.length, max };
}

async function compare(originalPath, newPath, label) {
  try {
    // The converted file defines the comparison box; the original is stretched to match,
    // so aspect ratio drift would show up as a large delta rather than silent misalignment.
    const meta = await sharp(newPath).metadata();
    const { width, height } = meta;
    const A = await render(originalPath, width, height);
    const B = await render(newPath, width, height);
    const d = diff(A.data, B.data);
    if (!d) return console.log(`  ${label.padEnd(46)} SIZE MISMATCH`);
    const verdict = d.mean < 2 ? "OK" : d.mean < 5 ? "CHECK" : "FAIL";
    console.log(
      `  ${label.padEnd(46)} ${width}x${height}`.padEnd(62) +
        ` mean ${d.mean.toFixed(3).padStart(7)}  max ${String(d.max).padStart(3)}  ${verdict}`,
    );
    return d;
  } catch (e) {
    console.log(`  ${label.padEnd(46)} ERROR ${e.message}`);
  }
}

// ---------------------------------------------------------------------------
// 1. WebP conversions vs their originals
// ---------------------------------------------------------------------------
const CONVERTED = [
  ["Hero.svg", 1080],
  ["service-website.svg", 800],
  ["service-mobile-app.svg", 800],
  ["service-custom-software.svg", 800],
  ["service-ai-chatbot.svg", 800],
  ["service-ui-ux.svg", 800],
  ["service-cloud-devops.svg", 800],
  ["service-cybersecurity.svg", 800],
  ["service-maintenance.svg", 800],
  ["project-images/FinanceProjectImage.svg", 900],
  ["project-images/GovernmentProjectImage.svg", 900],
  ["project-images/EducationProjectImage.svg", 900],
  ["project-images/HealthcareProjectImage.svg", 900],
  ["Deve-1.svg", 1100],
  ["Deve-2.svg", 680],
  ["development-step-1.jpeg", 1100],
  ["tech-stack/stack-01.svg", 240],
  ["tech-stack/stack-02.svg", 240],
  ["tech-stack/stack-03.svg", 240],
  ["tech-stack/stack-04.svg", 240],
  ["tech-stack/stack-05.svg", 240],
  ["tech-stack/stack-06.svg", 240],
  ["tech-stack/stack-07.svg", 240],
  ["tech-stack/stack-08.svg", 240],
  ["FooterImg.svg", 800],
  ["Gaurav-2.png", 800],
  ["Akshit-2.png", 800],
  ["Priya_Portraits.png", 200],
  ["Anmol_Portraits.png", 200],
  ["AllFullStackServicePages.svg", 1300],
  ["AllCloud&DevopsPages.svg", 1300],
  ["AllGenerativeAIPages.svg", 1300],
  ["AllCyberSecurityPages.svg", 1300],
  ["AllOtherPages.svg", 1300],
  ["All_Industries.svg", 1120],
  ["Rectangle.svg", 1120],
];

console.log("\nWebP conversions vs originals (both rendered into the same pixel box, over white)");
console.log("mean = average per-channel delta out of 255; < 2 is imperceptible\n");
let worst = { mean: 0, label: "" };
const aspectDrift = [];
for (const [file] of CONVERTED) {
  const orig = path.join(PUBLIC, file);
  const next = path.join(PUBLIC, file.replace(/\.(svg|png|jpe?g)$/i, ".webp"));
  const d = await compare(orig, next, file);
  if (d && d.mean > worst.mean) worst = { mean: d.mean, label: file };

  const a = await sharp(orig).metadata();
  const b = await sharp(next).metadata();
  const drift = Math.abs(a.width / a.height - b.width / b.height);
  if (drift > 0.01) aspectDrift.push(`${file}: ${a.width}x${a.height} -> ${b.width}x${b.height}`);
}
console.log(`\n  worst case: ${worst.label} (mean ${worst.mean.toFixed(3)})`);
console.log(
  aspectDrift.length
    ? `  ASPECT RATIO DRIFT:\n    ${aspectDrift.join("\n    ")}`
    : "  aspect ratio preserved on every asset",
);

// ---------------------------------------------------------------------------
// 2. Aggressive SVGO trial on the genuine vectors
// ---------------------------------------------------------------------------
const VECTORS = ["At the office-pana 1.svg", "Deve-3.svg", "Symbol.svg"];
const AGGRESSIVE = {
  multipass: true,
  plugins: [
    "preset-default",
  ],
};

console.log("\nAggressive SVGO trial on genuine vectors (not yet written to disk)\n");
for (const file of VECTORS) {
  const src = path.join(PUBLIC, file);
  const original = await readFile(src, "utf8");
  const { data } = optimize(original, { path: src, ...AGGRESSIVE });
  const beforeKb = Buffer.byteLength(original) / 1024;
  const afterKb = Buffer.byteLength(data) / 1024;
  const meta = await sharp(src).metadata();
  const width = 1000;
  const height = Math.round((meta.height / meta.width) * width);
  const A = await render(src, width, height);
  const B = await render(Buffer.from(data), width, height);
  const d = diff(A.data, B.data);
  console.log(
    `  ${file.padEnd(30)} ${beforeKb.toFixed(0).padStart(5)} KB -> ${afterKb.toFixed(0).padStart(5)} KB` +
      `  (${(100 - (afterKb / beforeKb) * 100).toFixed(1)}% smaller)  ` +
      (d ? `mean ${d.mean.toFixed(4)} max ${d.max}` : "SIZE MISMATCH"),
  );
}

// ---------------------------------------------------------------------------
// 3. Confirm every generated file exists and is non-trivial
// ---------------------------------------------------------------------------
console.log("\nOutput sanity check\n");
let missing = 0;
for (const [file] of CONVERTED) {
  const next = path.join(PUBLIC, file.replace(/\.(svg|png|jpe?g)$/i, ".webp"));
  try {
    const s = await stat(next);
    if (s.size < 512) {
      console.log(`  !! suspiciously small: ${file} (${s.size} B)`);
      missing++;
    }
  } catch {
    console.log(`  !! MISSING: ${next}`);
    missing++;
  }
}
console.log(missing === 0 ? "  all outputs present and non-trivial" : `  ${missing} problem(s)`);
console.log();
