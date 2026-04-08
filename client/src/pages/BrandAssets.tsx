import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

type Asset = {
  name: string;
  file: string;
  bgClass: string;
  imgClass: string;
  description: string;
  format: string;
};

const coreAssets: Asset[] = [
  {
    name: "Horizontal lockup · Light",
    file: "/brand/steady-thread-lockup-horizontal-light.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-24 w-full object-contain",
    description: "Primary horizontal logo for dark backgrounds.",
    format: "SVG + PNG"
  },
  {
    name: "Horizontal lockup · Dark",
    file: "/brand/steady-thread-lockup-horizontal-dark.svg",
    bgClass: "bg-white",
    imgClass: "max-h-24 w-full object-contain",
    description: "Primary horizontal logo for light backgrounds.",
    format: "SVG + PNG"
  },
  {
    name: "Stacked lockup · Light",
    file: "/brand/steady-thread-stacked-light.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-64 w-full object-contain",
    description: "Centered composition for covers, decks, and social cards on dark surfaces.",
    format: "SVG + PNG"
  },
  {
    name: "Stacked lockup · Dark",
    file: "/brand/steady-thread-stacked-dark.svg",
    bgClass: "bg-white",
    imgClass: "max-h-64 w-full object-contain",
    description: "Centered composition for proposals and docs on light surfaces.",
    format: "SVG + PNG"
  },
  {
    name: "Wordmark · Light",
    file: "/brand/steady-thread-wordmark-light.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-20 w-full object-contain",
    description: "Text-only option for minimal branded applications on dark backgrounds.",
    format: "SVG + PNG"
  },
  {
    name: "Wordmark · Dark",
    file: "/brand/steady-thread-wordmark-dark.svg",
    bgClass: "bg-white",
    imgClass: "max-h-20 w-full object-contain",
    description: "Text-only option for clean layouts on white backgrounds.",
    format: "SVG + PNG"
  }
];

const markAssets: Asset[] = [
  {
    name: "Mark only · Lavender",
    file: "/brand/steady-thread-mark-lavender.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-28 w-full object-contain",
    description: "Transparent standalone mark for overlays, layering, favicon builds, and avatars.",
    format: "SVG + PNG"
  },
  {
    name: "Mark only · White",
    file: "/brand/steady-thread-mark-white.svg",
    bgClass: "bg-[#2B2730]",
    imgClass: "max-h-28 w-full object-contain",
    description: "Monochrome white mark for dark photos, videos, and banner placements.",
    format: "SVG + PNG"
  },
  {
    name: "Mark only · Charcoal",
    file: "/brand/steady-thread-mark-charcoal.svg",
    bgClass: "bg-[#F6F1FA]",
    imgClass: "max-h-28 w-full object-contain",
    description: "Monochrome dark mark for white backgrounds and print-style layouts.",
    format: "SVG + PNG"
  },
  {
    name: "Primary mark alias",
    file: "/brand/steady-thread-mark.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-28 w-full object-contain",
    description: "Main mark file mirrored for easy handoff and reuse.",
    format: "SVG + PNG"
  }
];

const utilityAssets: Asset[] = [
  {
    name: "Avatar · Dark",
    file: "/brand/steady-thread-avatar-dark.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-48 w-full object-contain",
    description: "Square social/profile avatar for dark surfaces.",
    format: "SVG + PNG"
  },
  {
    name: "Avatar · Light",
    file: "/brand/steady-thread-avatar-light.svg",
    bgClass: "bg-white",
    imgClass: "max-h-48 w-full object-contain",
    description: "Square social/profile avatar for light surfaces.",
    format: "SVG + PNG"
  },
  {
    name: "Banner · Dark",
    file: "/brand/steady-thread-banner-dark.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-40 w-full object-contain",
    description: "Wide banner asset for decks, headers, and social cover images.",
    format: "SVG + PNG"
  },
  {
    name: "Banner · Light",
    file: "/brand/steady-thread-banner-light.svg",
    bgClass: "bg-white",
    imgClass: "max-h-40 w-full object-contain",
    description: "Light-background banner for docs, reports, and clean presentation slides.",
    format: "SVG + PNG"
  }
];

const conceptAssets: Asset[] = [
  {
    name: "Compact lockup",
    file: "/brand/variants/steady-thread-variant-compact-dark.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-24 w-full object-contain",
    description: "A tighter version for nav bars and compact horizontal placements.",
    format: "SVG + PNG"
  },
  {
    name: "Editorial signature",
    file: "/brand/variants/steady-thread-variant-editorial-dark.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-44 w-full object-contain",
    description: "A more premium, centered expression for polished brand moments.",
    format: "SVG + PNG"
  },
  {
    name: "Badge system",
    file: "/brand/variants/steady-thread-variant-badge-dark.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-32 w-full object-contain",
    description: "Contained lockup for social, merch-style, or badge-like use cases.",
    format: "SVG + PNG"
  },
  {
    name: "Minimal dark-on-light",
    file: "/brand/variants/steady-thread-variant-minimal-light.svg",
    bgClass: "bg-white",
    imgClass: "max-h-24 w-full object-contain",
    description: "A restrained minimal version for white-background editorial layouts.",
    format: "SVG + PNG"
  }
];

const colorTokens = [
  { name: "Charcoal", value: "#1A1A1A", swatch: "bg-[#1A1A1A] border-white/10" },
  { name: "Lavender", value: "#F0D6FF", swatch: "bg-[#F0D6FF] border-[#E6C5FB]" },
  { name: "Soft Light", value: "#F6F1FA", swatch: "bg-[#F6F1FA] border-[#E8E0EF]" },
  { name: "Slate", value: "#5F5566", swatch: "bg-[#5F5566] border-[#6A6071]" }
];

function AssetCard({ asset, index, prefix }: { asset: Asset; index: number; prefix: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[2rem] border border-white/8 bg-secondary/70 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)]"
      data-testid={`card-${prefix}-${index}`}
    >
      <div className={`${asset.bgClass} flex min-h-[18rem] items-center justify-center p-10 md:p-12`}>
        <img
          src={asset.file}
          alt={asset.name}
          className={asset.imgClass}
          data-testid={`img-${prefix}-${index}`}
        />
      </div>
      <div className="flex flex-col gap-5 p-8">
        <div>
          <p className="text-2xl font-display font-bold text-white" data-testid={`text-${prefix}-name-${index}`}>
            {asset.name}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/40" data-testid={`text-${prefix}-format-${index}`}>
            {asset.format}
          </p>
          <p className="mt-3 text-white/60 leading-relaxed" data-testid={`text-${prefix}-description-${index}`}>
            {asset.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={asset.file}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-white transition-colors duration-300 hover:bg-white/5"
            data-testid={`link-open-${prefix}-${index}`}
          >
            Open file
          </a>
          <a
            href={asset.file}
            download
            className="inline-flex items-center justify-center rounded-full bg-white text-background px-5 py-3 font-medium transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            data-testid={`button-download-${prefix}-${index}`}
          >
            Download
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Section({
  title,
  description,
  assets,
  prefix
}: {
  title: string;
  description: string;
  assets: Asset[];
  prefix: string;
}) {
  return (
    <section className="mb-20">
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4" data-testid={`text-${prefix}-heading`}>
          {title}
        </h2>
        <p className="text-white/60 text-lg leading-relaxed" data-testid={`text-${prefix}-description`}>
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {assets.map((asset, index) => (
          <AssetCard key={asset.name} asset={asset} index={index} prefix={prefix} />
        ))}
      </div>
    </section>
  );
}

export default function BrandAssets() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <section className="relative">
          <div className="absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[140px]" />
          <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mb-14"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-primary/70 mb-5" data-testid="text-brand-assets-kicker">
                Steady Thread Media
              </p>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.02] mb-6" data-testid="text-brand-assets-heading">
                Full brand kit, rebuilt as proper logo assets.
              </h1>
              <p className="text-lg md:text-xl text-white/65 max-w-3xl leading-relaxed" data-testid="text-brand-assets-description">
                I cleaned up the system so the lockups are now true vector logo files using the standalone mark and proper typography — not screenshot fragments placed beside new text.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row gap-4 mb-16"
            >
              <a
                href="/brand/steady-thread-logo-kit.zip"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5C1FF]"
                data-testid="button-download-logo-kit"
              >
                <Download size={18} />
                Download full logo kit
              </a>
              <a
                href="/brand/steady-thread-fonts.css"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                data-testid="link-open-fonts-css"
              >
                Open font stylesheet
              </a>
              <a
                href="/brand/steady-thread-brand-specs.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                data-testid="link-open-brand-specs"
              >
                Open brand specs
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                data-testid="link-back-home"
              >
                Back to site
                <ArrowDownRight size={18} />
              </a>
            </motion.div>

            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
                <div className="rounded-[2rem] border border-white/8 bg-secondary/70 p-8 md:p-10 backdrop-blur-xl" data-testid="card-brand-typography">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary/70 mb-4" data-testid="text-typography-kicker">
                    Typography
                  </p>
                  <div className="space-y-6">
                    <div>
                      <p className="text-5xl md:text-6xl font-display font-bold text-white" data-testid="text-font-display-sample">
                        Steady Thread
                      </p>
                      <p className="mt-3 text-white/60 leading-relaxed" data-testid="text-font-display-info">
                        Playfair Display Bold — use for the wordmark, editorial headlines, and premium brand moments.
                      </p>
                    </div>
                    <div>
                      <p className="text-xl tracking-[0.4em] text-white/80 uppercase" data-testid="text-font-sans-sample">
                        Media
                      </p>
                      <p className="mt-3 text-white/60 leading-relaxed" data-testid="text-font-sans-info">
                        Inter Medium — use for the MEDIA line, UI copy, labels, and supporting typography.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/8 bg-secondary/70 p-8 md:p-10 backdrop-blur-xl" data-testid="card-brand-color-system">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary/70 mb-4" data-testid="text-color-kicker">
                    Core palette
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {colorTokens.map((token, index) => (
                      <div key={token.name} className="rounded-2xl border border-white/8 bg-background/40 p-4" data-testid={`card-color-${index}`}>
                        <div className={`h-20 rounded-xl border ${token.swatch}`} data-testid={`swatch-color-${index}`} />
                        <p className="mt-4 text-white font-medium" data-testid={`text-color-name-${index}`}>
                          {token.name}
                        </p>
                        <p className="text-white/50 text-sm" data-testid={`text-color-value-${index}`}>
                          {token.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Section
              title="Core lockups"
              description="These are the main production-ready logo files for web, decks, proposals, and client-facing materials."
              assets={coreAssets}
              prefix="core"
            />

            <Section
              title="Mark-only assets"
              description="These are the isolated standalone marks for layering, overlays, avatars, icons, and image compositions."
              assets={markAssets}
              prefix="mark"
            />

            <Section
              title="Utility assets"
              description="These are ready-made square and wide compositions for social, covers, and presentation headers."
              assets={utilityAssets}
              prefix="utility"
            />

            <Section
              title="Alternate logo directions"
              description="These are cleaned-up variations built from the same mark and type system in case you want to explore a tighter or more editorial direction later."
              assets={conceptAssets}
              prefix="concept"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
