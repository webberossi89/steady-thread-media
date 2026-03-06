import { Link } from "wouter";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-secondary border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
            Insights on B2B growth and GTM execution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-border p-8 rounded-2xl flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">{post.tag}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-6 flex-grow leading-tight">
                {post.title}
              </h3>
              <Link href="/insights" className="text-primary hover:text-[#E5C1FF] font-medium flex items-center gap-2 transition-colors w-fit">
                Read Article <span className="text-lg leading-none">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/insights" className="inline-block px-6 py-3 rounded-full border border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors duration-300 font-medium">
            Read More Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
