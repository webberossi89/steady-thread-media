import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://steadythreadmedia.com"),
  title: "Steady Thread Media — GTM Engineering Agency",
  description:
    "We build signal-based outbound and account-based marketing systems for B2B revenue teams that need consistent pipeline.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: {
    google: "tf-KeFMFunwcVfdD0EskyjylY_K9372MV2f57WYMU8U",
  },
  openGraph: {
    title: "Steady Thread Media",
    description: "Strategic GTM systems for consistent B2B growth.",
    siteName: "Steady Thread Media",
    url: "https://steadythreadmedia.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steady Thread Media — GTM Engineering Agency",
    description: "Signal-based outbound and ABM systems for B2B revenue teams that need consistent pipeline.",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Steady Thread Media",
              url: "https://steadythreadmedia.com",
              logo: "https://steadythreadmedia.com/favicon.svg",
              description: "GTM engineering agency building signal-based outbound and account-based marketing systems for B2B revenue teams.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Charlotte",
                addressRegion: "NC",
                addressCountry: "US",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        {/* LocalBusiness schema — injected by SEO system */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Steady Thread Media",
              "url": "https://steadythreadmedia.com",
              "description": "Steady Thread Media is a Charlotte, North Carolina-based GTM engineering agency that helps B2B companies build consistent pipeline through signal-based outbound, account-based marketing, and revenue operations. Services include signal-based account targeting, AI-powered outbound systems, ABM program execution, and HubSpot-connected CRM and revenue operations support.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Charlotte",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "North Carolina"
                  }
                },
                {
                  "@type": "Country",
                  "name": "United States"
                }
              ],
              "knowsAbout": [
                "Signal-based outbound",
                "Account-based marketing",
                "Revenue operations",
                "Go-to-market engineering",
                "AI-powered outbound systems",
                "HubSpot CRM",
                "B2B pipeline generation"
              ],
              "slogan": "Build a scalable, repeatable go-to-market engine",
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Charlotte",
                  "addressRegion": "NC",
                  "addressCountry": "US"
                }
              }
            })
          }}
        />
        {/* WebSite schema — injected by SEO system */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Steady Thread Media",
              "url": "https://steadythreadmedia.com",
              "description": "Steady Thread Media is a Charlotte, North Carolina-based GTM engineering agency that helps B2B companies build consistent pipeline through signal-based outbound, account-based marketing, and revenue operations.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://steadythreadmedia.com/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />


        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKCT64P3');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKCT64P3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
