import type { MetadataRoute } from "next";

const BASE_URL = "https://www.hd77.net.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${BASE_URL}/images/hd22-game.png`,
        `${BASE_URL}/images/hd22game.png`,
        `${BASE_URL}/images/hd77.jpeg`,
      ],
    },
    // ── Anchor-based section URLs ──────────────────────────────────────
    // Google treats fragment URLs as the same page, but including
    // canonical section URLs helps competitors who split content across
    // pages.  These entries ensure maximum crawl coverage if the site
    // ever migrates sections to dedicated routes.
    {
      url: `${BASE_URL}/#overview`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#features`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#download`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/#tutorial`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#withdrawal`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/#analysis`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#faq`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#conclusion`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
