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
    canonical: "https://steadythreadmedia.com",
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
      </head>
      <body style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
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
