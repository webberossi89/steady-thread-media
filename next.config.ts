import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      // Old /blog/ posts indexed by Google → closest /insights/ matches
      {
        source: "/blog/lead-handoff-process-sales-marketing",
        destination: "/insights/hubspot-outbound-attribution",
        permanent: true,
      },
      {
        source: "/blog/market-positioning-strategy-competitive-advantage",
        destination: "/insights/what-is-a-gtm-engineer",
        permanent: true,
      },
      {
        source: "/blog/marketing-automation-b2b-nurture-campaigns",
        destination: "/insights/buying-signals-b2b-pipeline",
        permanent: true,
      },
      {
        source: "/blog/revenue-operations-framework-alignment",
        destination: "/insights/referral-trap-warm-intros",
        permanent: true,
      },
      // Catch-all: any other /blog/ traffic → /insights/
      {
        source: "/blog/:slug*",
        destination: "/insights/:slug*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
