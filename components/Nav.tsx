"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "rgba(26,26,26,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <svg width="148" height="32" viewBox="0 0 148 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="8" stroke="#e8d5ff" strokeWidth="1.4" fill="none"/>
            <circle cx="16" cy="16" r="2.5" fill="#e8d5ff"/>
            <line x1="24" y1="16" x2="32" y2="16" stroke="#e8d5ff" strokeWidth="1.4" strokeLinecap="round"/>
            <text x="40" y="13" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" letterSpacing="-0.2">Steady Thread</text>
            <text x="40" y="26" fill="rgba(232,213,255,0.7)" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="8.5" letterSpacing="0.22em">MEDIA</text>
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                fontSize: "14px",
                color: pathname === link.href ? "#ffffff" : "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontWeight: pathname === link.href ? 500 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#1a1a1a",
            backgroundColor: "#ffffff",
            padding: "9px 20px",
            borderRadius: "100px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          className="desktop-nav btn-white"
        >
          Book a GTM Assessment
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-nav"
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="mobile-nav"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#1a1a1a",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "15px",
                color: pathname === link.href ? "#ffffff" : "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontWeight: pathname === link.href ? 500 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-white"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1a1a1a",
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              borderRadius: "100px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Book a GTM Assessment
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
