import Link from "next/link";
import type { ReactNode } from "react";

interface ArticleLayoutProps {
  children: ReactNode;
  meta: {
    title: string;
    description: string;
    category: string;
    date: string;
    dateISO: string;
    readTime: string;
    slug: string;
  };
}

export default function ArticleLayout({ children, meta }: ArticleLayoutProps) {
  const canonicalUrl = `https://steadythreadmedia.com/insights/${meta.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url: canonicalUrl,
    datePublished: meta.dateISO,
    dateModified: meta.dateISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: {
      "@type": "ImageObject",
      url: "https://steadythreadmedia.com/opengraph-image.png",
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: "Jared Webber",
      url: "https://steadythreadmedia.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Steady Thread Media",
      url: "https://steadythreadmedia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://steadythreadmedia.com/favicon.svg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <section className="pt-[140px] pb-16 px-6">
        <div className="max-w-[760px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/insights"
              className="link-muted text-sm text-muted-foreground"
            >
              Insights
            </Link>
            <span className="text-white/20 text-sm">&rarr;</span>
            <span className="text-[11px] font-semibold text-primary tracking-wider uppercase bg-primary/10 px-2 py-0.5 rounded-full">
              {meta.category}
            </span>
          </div>

          <h1 className="text-[clamp(28px,4vw,52px)] font-sans font-bold leading-[1.1] tracking-tight mb-5">
            {meta.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {meta.description}
          </p>

          <div className="flex items-center gap-4 pb-10 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="4" stroke="hsl(278 100% 92%)" strokeWidth="1.2" fill="none"/>
                <circle cx="7" cy="7" r="1.5" fill="hsl(278 100% 92%)"/>
                <line x1="11" y1="7" x2="13" y2="7" stroke="hsl(278 100% 92%)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Steady Thread Media</p>
              <p className="text-xs text-muted-foreground">
                <time dateTime={meta.dateISO}>{meta.date}</time> &middot; {meta.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="px-6 pb-24">
        <div className="max-w-[760px] mx-auto article-body">
          {children}
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/5 bg-secondary">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[clamp(24px,3vw,36px)] font-sans font-bold tracking-tight mb-4">
            Want this built for your team?
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
            We build the systems described in these articles — signal-based outbound, enrichment pipelines, and ABM infrastructure — for B2B revenue teams.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground text-sm font-medium px-7 py-3 rounded-full hover:bg-[#E5C1FF] transition-colors"
          >
            Book a Free GTM Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
