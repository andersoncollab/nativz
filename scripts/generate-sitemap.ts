// Generate sitemap.xml from data files
// Run with: npx tsx scripts/generate-sitemap.ts

import { writeFileSync } from "fs";
import { resolve } from "path";

// Import data
import { getAllBlogPosts } from "../src/data/blogs";
import { getAllIndustries } from "../src/data/industries";
import { getAllCaseStudies } from "../src/data/case-studies";
import { getParentServices, getSubServicesForParent } from "../src/data/services";
import { serviceAreas } from "../src/data/areas";

const BASE_URL = "https://nativz.io";
const now = new Date().toISOString().split("T")[0];

function url(loc: string, lastmod: string, priority: number, changefreq: string): string {
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

const urls: string[] = [];

// Static pages
urls.push(url(`${BASE_URL}/`, now, 1.0, "weekly"));
urls.push(url(`${BASE_URL}/about/`, now, 0.8, "monthly"));
urls.push(url(`${BASE_URL}/contact/`, now, 0.8, "monthly"));
urls.push(url(`${BASE_URL}/services/`, now, 0.9, "weekly"));
urls.push(url(`${BASE_URL}/industries/`, now, 0.9, "weekly"));
urls.push(url(`${BASE_URL}/case-studies/`, now, 0.8, "weekly"));
urls.push(url(`${BASE_URL}/blog/`, now, 0.9, "daily"));
urls.push(url(`${BASE_URL}/areas/`, now, 0.7, "monthly"));
urls.push(url(`${BASE_URL}/sitemap-page/`, now, 0.3, "monthly"));
urls.push(url(`${BASE_URL}/privacy-policy/`, now, 0.3, "yearly"));
urls.push(url(`${BASE_URL}/terms-of-service/`, now, 0.3, "yearly"));

// Blog posts
const blogs = getAllBlogPosts();
for (const post of blogs) {
    const date = post.publishDate ? post.publishDate.split("T")[0] : now;
    urls.push(url(`${BASE_URL}/blog/${post.slug}/`, date, 0.7, "monthly"));
}

// Parent services
const parentServices = getParentServices();
for (const service of parentServices) {
    urls.push(url(`${BASE_URL}/services/${service.slug}/`, now, 0.8, "monthly"));
    // Child services
    const children = getSubServicesForParent(service.slug);
    for (const child of children) {
        urls.push(url(`${BASE_URL}/services/${service.slug}/${child.slug}/`, now, 0.7, "monthly"));
    }
}

// Industries
const industries = getAllIndustries();
for (const industry of industries) {
    urls.push(url(`${BASE_URL}/industries/${industry.slug}/`, now, 0.8, "monthly"));
}

// Case studies
const caseStudies = getAllCaseStudies();
for (const study of caseStudies) {
    urls.push(url(`${BASE_URL}/case-studies/${study.slug}/`, now, 0.7, "monthly"));
}

// Service areas
for (const area of serviceAreas) {
    urls.push(url(`${BASE_URL}/areas/${area.slug}/`, now, 0.6, "monthly"));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

const outputPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outputPath, xml, "utf-8");
console.log(`Generated sitemap.xml with ${urls.length} URLs at ${outputPath}`);
