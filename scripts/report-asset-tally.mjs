/**
 * Reports the before/after byte cost of every image asset the app actually references.
 *
 * "Before" is the size in git HEAD (for files optimized in place) or the size of the original
 * file the WebP replaced (for converted assets — most originals were Figma-exported .svg
 * wrappers around a single base64 raster). Assets whose HEAD size equals their current size
 * are counted as untouched, so the totals never overstate the saving.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const SRC_EXT = /\.(tsx?|jsx?|html|css)$/;
const REF_RE = /["'`(](\/[A-Za-z0-9_\-./&%]+\.(?:png|jpe?g|webp|svg|avif|gif))["'`)]/g;

const sources = ["index.html"];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (SRC_EXT.test(entry.name)) sources.push(p);
  }
})("src");

const refs = new Set();
for (const file of sources) {
  const text = fs.readFileSync(file, "utf8");
  for (const m of text.matchAll(REF_RE)) refs.add(m[1]);
}

const tracked = new Set(execSync("git ls-files public", { encoding: "utf8" }).trim().split("\n"));
function headSize(p) {
  const key = p.split(path.sep).join("/");
  if (!tracked.has(key)) return null;
  try {
    const oid = execSync(`git rev-parse HEAD:"${key}"`, { encoding: "utf8" }).trim();
    return parseInt(execSync(`git cat-file -s ${oid}`, { encoding: "utf8" }).trim(), 10);
  } catch {
    return null;
  }
}

const kb = (n) => `${Math.round(n / 1024)} KB`;
const mb = (n) => `${(n / 1048576).toFixed(2)} MB`;

let after = 0;
let before = 0;
const converted = [];
const inPlace = [];
let untouched = 0;

for (const ref of [...refs].sort()) {
  const p = path.join("public", decodeURIComponent(ref));
  if (!fs.existsSync(p)) {
    console.log(`MISSING  ${ref}`);
    continue;
  }
  const now = fs.statSync(p).size;
  after += now;

  const head = headSize(p);
  if (head === null) {
    // Untracked file: a new WebP. Find the tracked original it replaced.
    let origSize = null;
    let origPath = null;
    for (const ext of [".svg", ".png", ".jpg", ".jpeg"]) {
      const alt = p.replace(/\.webp$/, ext);
      const size = headSize(alt);
      if (size !== null) {
        origSize = size;
        origPath = alt;
        break;
      }
    }
    if (origSize === null) {
      before += now;
      untouched++;
      console.log(`NO-ORIGINAL  ${p}`);
    } else {
      before += origSize;
      converted.push([origPath, origSize, p, now]);
    }
  } else if (head !== now) {
    before += head;
    inPlace.push([p, head, now]);
  } else {
    before += head;
    untouched++;
  }
}

const rel = (p) => p.split(path.sep).join("/").replace(/^public\//, "");

console.log(`\n=== CONVERTED (${converted.length}) ===`);
for (const [o, os, n, ns] of converted) {
  console.log(`  ${rel(o)} ${kb(os)} -> ${rel(n)} ${kb(ns)}  (-${Math.round((1 - ns / os) * 100)}%)`);
}
console.log(`\n=== RE-ENCODED IN PLACE (${inPlace.length}) ===`);
for (const [p, os, ns] of inPlace) {
  console.log(`  ${rel(p)} ${kb(os)} -> ${kb(ns)}  (-${Math.round((1 - ns / os) * 100)}%)`);
}
console.log(`\n=== ALREADY OPTIMAL, LEFT ALONE: ${untouched} ===`);
console.log(`\nReferenced image assets: ${refs.size}`);
console.log(`BEFORE ${mb(before)}   AFTER ${mb(after)}   SAVED ${mb(before - after)} (-${((1 - after / before) * 100).toFixed(1)}%)`);
