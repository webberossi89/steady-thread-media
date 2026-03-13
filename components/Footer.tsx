import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "#151515",
        padding: "48px 24px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1L9 17M1 9L17 9M3.22 3.22L14.78 14.78M14.78 3.22L3.22 14.78"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ fontWeight: 600, fontSize: "14px" }}>Steady Thread Media</span>
          </Link>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", maxWidth: "220px" }}>
            GTM systems for B2B revenue teams. Based in Charlotte, NC.
          </p>
        </div>

        {/* Services */}
        <div>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "14px" }}>
            Services
          </p>
          {[
            "Signal-Based Targeting",
            "AI-Powered Outbound",
            "Account-Based Marketing",
            "CRM & Revenue Ops",
          ].map((s) => (
            <Link
              key={s}
              href="/services"
              className="footer-link"
              style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "10px" }}
            >
              {s}
            </Link>
          ))}
        </div>

        {/* Company */}
        <div>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "14px" }}>
            Company
          </p>
          {[
            { label: "Approach", href: "/approach" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Insights", href: "/insights" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="footer-link"
              style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "10px" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "14px" }}>
            Get Started
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.6", marginBottom: "16px" }}>
            Ready to build a pipeline system that actually works?
          </p>
          <Link
            href="/contact"
            className="btn-white"
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: 500,
              color: "#1a1a1a",
              backgroundColor: "#ffffff",
              padding: "9px 18px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Book a GTM Assessment
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto 0",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Steady Thread Media. All rights reserved.
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
          Charlotte, NC · Serving teams across North America
        </p>
      </div>
    </footer>
  );
}
