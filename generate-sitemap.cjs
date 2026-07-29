const fs = require('fs');
const path = require('path');
const tsCode = fs.readFileSync(path.join('./src/data/site.ts'), 'utf8');

const slugRegex = /slug:\s*["']([^"']+)["']/g;

const slugs = [];
let match;
while ((match = slugRegex.exec(tsCode)) !== null) {
  slugs.push(match[1]);
}

const servicesSlugs = slugs.slice(0, 6);
const industrySlugs = slugs.slice(6, 10);
const caseStudySlugs = slugs.slice(10);

const baseUrl = 'https://kalpanaaasoftwaresolutions.com';
const staticRoutes = [
  '',
  '/about',
  '/services',
  '/industries',
  '/work',
  '/contact',
  '/privacy',
  '/terms',
  '/blog'
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
const date = new Date().toISOString().split('T')[0];

const appendUrl = (loc, priority) => {
  xml += `  <url>\n    <loc>${baseUrl}${loc}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
};

staticRoutes.forEach(r => appendUrl(r, r === '' ? '1.0' : '0.8'));
servicesSlugs.forEach(s => appendUrl(`/services/${s}`, '0.7'));
industrySlugs.forEach(s => appendUrl(`/industries/${s}`, '0.7'));
caseStudySlugs.forEach(s => appendUrl(`/work/${s}`, '0.7'));

xml += '</urlset>';

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Generated sitemap.xml');
