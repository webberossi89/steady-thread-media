import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import bgVideo from "@/assets/videos/hero-bg.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end pb-24 pt-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tighter text-white uppercase">
              We Craft <br />
              <span className="text-white/40 italic font-light lowercase text-stroke">Digital</span> Futures.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-8 sm:items-center justify-between"
          >
            <p className="text-lg md:text-xl text-white/60 max-w-md font-light leading-relaxed">
              A global creative studio transforming visionary ideas into immersive digital experiences and enduring brands.
            </p>
            
            <a 
              href="#work"
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300 w-fit"
            >
              Explore Work
              <span className="bg-black text-white p-2 rounded-full group-hover:rotate-[-45deg] transition-transform duration-300">
                <ArrowDownRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
