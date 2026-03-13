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

const accent = "#e8d5ff";
const muted = "rgba(255,255,255,0.55)";
const border = "rgba(255,255,255,0.07)";

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
      <section style={{ padding: "140px 24px 64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            <Link
              href="/insights"
              style={{ fontSize: "13px", color: muted, textDecoration: "none" }}
              className="link-muted"
            >
              Insights
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>→</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: accent,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                backgroundColor: "rgba(232,213,255,0.1)",
                padding: "3px 8px",
                borderRadius: "100px",
              }}
            >
              {meta.category}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            {meta.title}
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            {meta.description}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              paddingBottom: "40px",
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "rgba(232,213,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="4" stroke="#e8d5ff" strokeWidth="1.2" fill="none"/>
                <circle cx="7" cy="7" r="1.5" fill="#e8d5ff"/>
                <line x1="11" y1="7" x2="13" y2="7" stroke="#e8d5ff" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff" }}>Steady Thread Media</p>
              <p style={{ fontSize: "12px", color: muted }}>
                <time dateTime={meta.dateISO}>{meta.date}</time> · {meta.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article style={{ padding: "0 24px 100px" }}>
        <div
          style={{ maxWidth: "760px", margin: "0 auto" }}
          className="article-body"
        >
          {children}
        </div>
      </article>

      {/* CTA */}
      <section
        style={{
          padding: "80px 24px",
          borderTop: `1px solid ${border}`,
          backgroundColor: "#1e1e1e",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Want this built for your team?
          </h2>
          <p style={{ fontSize: "15px", color: muted, lineHeight: 1.7, marginBottom: "32px" }}>
            We build the systems described in these articles — signal-based outbound, enrichment pipelines, and ABM infrastructure — for B2B revenue teams.
          </p>
          <Link
            href="/contact"
            className="btn-white"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1a1a1a",
              backgroundColor: "#ffffff",
              padding: "12px 28px",
              borderRadius: "100px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Book a Free GTM Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
