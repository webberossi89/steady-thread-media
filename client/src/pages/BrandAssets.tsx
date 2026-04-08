import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

const logoFiles = [
  {
    name: "Horizontal lockup · Light",
    file: "/brand/steady-thread-lockup-light.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-24 w-full object-contain",
    type: "SVG"
  },
  {
    name: "Horizontal lockup · Dark",
    file: "/brand/steady-thread-lockup-dark.svg",
    bgClass: "bg-white",
    imgClass: "max-h-24 w-full object-contain",
    type: "SVG"
  },
  {
    name: "Stacked lockup · Light",
    file: "/brand/steady-thread-stacked-light.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-64 w-full object-contain",
    type: "SVG"
  },
  {
    name: "Stacked lockup · Dark",
    file: "/brand/steady-thread-stacked-dark.svg",
    bgClass: "bg-white",
    imgClass: "max-h-64 w-full object-contain",
    type: "SVG"
  },
  {
    name: "Wordmark · Light",
    file: "/brand/steady-thread-wordmark-light.svg",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-20 w-full object-contain",
    type: "SVG"
  },
  {
    name: "Wordmark · Dark",
    file: "/brand/steady-thread-wordmark-dark.svg",
    bgClass: "bg-white",
    imgClass: "max-h-20 w-full object-contain",
    type: "SVG"
  },
  {
    name: "Mark · PNG",
    file: "/brand/steady-thread-mark.png",
    bgClass: "bg-[#1A1A1A]",
    imgClass: "max-h-28 w-full object-contain",
    type: "PNG"
  },
  {
    name: "Mark · SVG",
    file: "/brand/steady-thread-mark.svg",
    bgClass: "bg-white",
    imgClass: "max-h-28 w-full object-contain",
    type: "SVG"
  }
];

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
                Brand assets, ready to preview and download.
              </h1>
              <p className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed" data-testid="text-brand-assets-description">
                Every logo variation is laid out here so you can review them in-browser, then grab the full pack or download individual files as needed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
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
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
                data-testid="link-back-home"
              >
                Back to site
                <ArrowDownRight size={18} />
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {logoFiles.map((logo, index) => (
                <motion.article
                  key={logo.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[2rem] border border-white/8 bg-secondary/70 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)]"
                  data-testid={`card-logo-${index}`}
                >
                  <div className={`${logo.bgClass} flex min-h-[18rem] items-center justify-center p-10 md:p-12`}>
                    <img
                      src={logo.file}
                      alt={logo.name}
                      className={logo.imgClass}
                      data-testid={`img-logo-${index}`}
                    />
                  </div>
                  <div className="flex flex-col gap-5 p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-2xl font-display font-bold text-white" data-testid={`text-logo-name-${index}`}>
                          {logo.name}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/40" data-testid={`text-logo-type-${index}`}>
                          {logo.type} asset
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={logo.file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-white transition-colors duration-300 hover:bg-white/5"
                        data-testid={`link-open-logo-${index}`}
                      >
                        Open file
                      </a>
                      <a
                        href={logo.file}
                        download
                        className="inline-flex items-center justify-center rounded-full bg-white text-background px-5 py-3 font-medium transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                        data-testid={`button-download-logo-${index}`}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
