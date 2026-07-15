// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Writes public/sitemap.xml from the real route list + articles content source.
// To add new pages: add a static entry below.
// To add new articles: just add to src/content/articles.ts — sitemap updates automatically.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { articles } from "../src/content/articles";

const BASE_URL = "https://prohireresources.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/approach", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/services/executive-search", changefreq: "monthly", priority: "0.7" },
  { path: "/services/people-and-organization-advisory", changefreq: "monthly", priority: "0.7" },
  { path: "/services/growth-acceleration", changefreq: "monthly", priority: "0.7" },
  { path: "/services/career-advisory", changefreq: "monthly", priority: "0.7" },
  { path: "/services/the-first-move", changefreq: "monthly", priority: "0.7" },
  { path: "/industries", changefreq: "monthly", priority: "0.6" },
  { path: "/what-were-seeing", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
];

const articleEntries: SitemapEntry[] = articles.map((a) => ({
  path: `/what-were-seeing/${a.slug}`,
  lastmod: a.publishedAt,
  changefreq: "monthly",
  priority: "0.6",
}));

const entries = [...staticEntries, ...articleEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
