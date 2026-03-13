import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  alternates: {
    canonical: "https://steadythreadmedia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
