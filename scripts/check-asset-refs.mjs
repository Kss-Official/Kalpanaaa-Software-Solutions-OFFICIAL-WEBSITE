/**
 * Scans src/ and index.html for public asset references and checks each one exists on disk.
 * Catches typos, stale extensions and the `/./` style path mistakes.
 *
 * Usage: node scripts/check-asset-refs.mjs
 */
import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(".");
const PUBLIC = path.join(ROOT, "public");
const EXT = /\.(webp|svg|png|jpe?g|gif|ico|avif)$/i;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(tsx?|jsx?|css|html)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = [...(await walk(path.join(ROOT, "src"))), path.join(ROOT, "index.html")];

// Quoted string literals that look like a rooted public asset path.
const REF = /["'`](\/[^"'`\s>{}()]*?\.(?:webp|svg|png|jpe?g|gif|ico|avif))["'`]/gi;

const missing = [];
const odd = [];
const seen = new Set();

for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const m of text.matchAll(REF)) {
    const ref = m[1];
    if (ref.startsWith("//") || /^https?:/i.test(ref)) continue;
    if (/\/\.\//.test(ref) || /\/\//.test(ref.slice(1))) {
      odd.push(`${path.relative(ROOT, file)}: ${ref}`);
    }
    const key = `${file}::${ref}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const onDisk = path.join(PUBLIC, decodeURIComponent(ref));
    try {
      await access(onDisk);
    } catch {
      missing.push(`${path.relative(ROOT, file)}: ${ref}`);
    }
  }
}

// Relative refs like "./foo.svg" resolve against the current URL, which breaks on nested
// routes. Flag them so they are not silently left behind.
const RELATIVE = /["'`](\.\/[^"'`\s>{}()]*?\.(?:webp|svg|png|jpe?g|gif|ico|avif))["'`]/gi;
const relative = [];
for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const m of text.matchAll(RELATIVE)) relative.push(`${path.relative(ROOT, file)}: ${m[1]}`);
}

console.log(`\nChecked ${seen.size} rooted asset references across ${files.length} files.\n`);
const report = (title, list) =>
  console.log(list.length ? `${title}\n  ${list.join("\n  ")}\n` : `${title}: none\n`);
report("MISSING FROM public/", missing);
report("MALFORMED PATHS", odd);
report("ROUTE-RELATIVE PATHS (fragile on nested routes)", relative);

if (missing.length || odd.length || relative.length) process.exitCode = 1;
else console.log("All asset references resolve.\n");
