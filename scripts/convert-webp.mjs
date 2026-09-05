import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

// Folders and files to convert (PNGs that don't have .webp equivalents or are large)
const targets = [
  // Service section images — no WebP versions exist
  "Service-Section-Images/WebsiteDevelopment.png",
  "Service-Section-Images/MobileAppDev.png",
  "Service-Section-Images/customer-software-dev.png",
  "Service-Section-Images/UIUXDesign.png",
  "Service-Section-Images/AIChatBotAndAutomation.png",
  "Service-Section-Images/CloudAndDevops.png",
  "Service-Section-Images/Cybersecurity.png",
  "Service-Section-Images/SoftwareMaintananceAndSupport.png",
  "Service-Section-Images/MainServiceDesignComplete.png",
  // Development step JPEGs — step 2,3,4 have no WebP
  "development-step-2.jpeg",
  "development-step-3.jpeg",
  "development-step-4.jpeg",
  // About dept images — no WebP
  "about/dept_design_3d.png",
  "about/dept_frontend_3d.png",
  "about/dept_backend_3d.png",
  "about/dept_software_3d.png",
  "about/dept_testing_3d.png",
  "about/dept_hr_3d.png",
  "about/software-team-tech-portrait.png",
  "about/cyber-dev-portrait.png",
];

let converted = 0;
let saved = 0;

for (const rel of targets) {
  const input = join(publicDir, rel);
  const ext = extname(rel);
  const output = join(publicDir, rel.replace(ext, ".webp"));

  try {
    const before = (await stat(input)).size;
    await sharp(input)
      .webp({ quality: 82, effort: 4 })
      .toFile(output);
    const after = (await stat(output)).size;
    const pct = Math.round((1 - after / before) * 100);
    console.log(`✓ ${basename(rel)}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (-${pct}%)`);
    saved += before - after;
    converted++;
  } catch (e) {
    console.error(`✗ ${rel}: ${e.message}`);
  }
}

console.log(`\nConverted ${converted} files, saved ${Math.round(saved/1024)}KB total.`);
