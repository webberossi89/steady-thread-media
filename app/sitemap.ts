import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://steadythreadmedia.com";
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/approach`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/insights/what-is-a-gtm-engineer`,
      lastModified: new Date("2025-03-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/insights/buying-signals-b2b-pipeline`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/insights/clay-vs-manual-research`,
      lastModified: new Date("2025-02-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/insights/hubspot-outbound-attribution`,
      lastModified: new Date("2025-04-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/insights/why-abm-fails-b2b-saas`,
      lastModified: new Date("2025-05-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/insights/referral-trap-warm-intros`,
      lastModified: new Date("2025-06-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
