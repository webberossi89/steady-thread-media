import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://steadythreadmedia.com/sitemap.xml",
    // RSS feed available at https://steadythreadmedia.com/feed.xml
  };
}
