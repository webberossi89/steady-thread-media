import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Steady Thread Media — GTM Engineering Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="1" y1="18" x2="35" y2="18" stroke="#e8d5ff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="18" r="9" stroke="#e8d5ff" strokeWidth="2" fill="#1a1a1a" />
            <circle cx="18" cy="18" r="3.5" fill="#e8d5ff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Steady Thread
            </span>
            <span style={{ color: "rgba(232,213,255,0.6)", fontSize: "10px", letterSpacing: "0.2em" }}>
              MEDIA
            </span>
          </div>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "860px",
            }}
          >
            GTM Engineering for{" "}
            <span style={{ color: "#e8d5ff" }}>B2B Revenue Teams</span>
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: "700px",
            }}
          >
            Signal-based outbound and account-based marketing systems that generate consistent pipeline.
          </div>
        </div>

        {/* Bottom: domain */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(232,213,255,0.5)", fontSize: "16px", letterSpacing: "0.02em" }}>
            steadythreadmedia.com
          </span>
          <div
            style={{
              backgroundColor: "#ffffff",
              color: "#1a1a1a",
              fontSize: "14px",
              fontWeight: 600,
              padding: "10px 22px",
              borderRadius: "100px",
            }}
          >
            Book a GTM Assessment
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
