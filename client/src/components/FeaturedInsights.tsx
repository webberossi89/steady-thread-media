import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedInsights() {
  const posts = [
    {
      title: "Why your GTM positioning isn't translating to pipeline",
      tag: "Positioning"
    },
    {
      title: "Fixing the handoff: When marketing and sales disconnect",
      tag: "Revenue Optimization"
    },
    {
      title: "The problem with tactical marketing over strategic systems",
      tag: "GTM Strategy"
    }
  ];

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Top curved divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform -translate-y-px rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Insights on B2B growth and GTM execution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-background border border-border p-8 rounded-[2rem] flex flex-col h-full hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(240,214,255,0.1)]"
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 text-xs font-medium text-white/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">{post.tag}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex-grow leading-tight group-hover:text-primary/90 transition-colors duration-300">
                {post.title}
              </h3>
              <Link href="/insights" className="text-white/70 group-hover:text-primary font-medium flex items-center gap-3 transition-colors w-fit">
                Read Article 
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/insights" className="inline-block px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium">
            Read More Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
