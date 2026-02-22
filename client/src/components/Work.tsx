import { motion } from "framer-motion";
import { Search, MousePointer2, Layout, ArrowRight } from "lucide-react";

const services = [
  {
    title: "PPC Advertising",
    description: "Get in front of customers exactly when they’re searching for your services. High-intent enquiries fast.",
    icon: <MousePointer2 size={32} />,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Local SEO",
    description: "We help your business rank at the top of Google for local searches, so homeowners find you first.",
    icon: <Search size={32} />,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "High Converting Websites",
    description: "Fast, conversion-focused websites designed specifically to turn visitors into real enquiries.",
    icon: <Layout size={32} />,
    color: "bg-accent/20 text-black",
  }
];

export default function Work() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-[1.1]">
            Simple, Proven Marketing for Home Service Businesses
          </h2>
          <p className="text-lg text-black/60 font-medium leading-relaxed">
            We focus on three core services that work together to bring in consistent, high-quality enquiries. Straightforward strategies, results you can measure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-3xl bg-muted/20 border border-black/5 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-extrabold mb-4">{service.title}</h3>
              <p className="text-black/60 mb-8 leading-relaxed">{service.description}</p>
              <a href="#" className="mt-auto font-bold text-sm uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Industry Focus */}
        <div id="industries" className="mt-32 pt-32 border-t border-black/5">
           <div className="text-center mb-16">
            <h3 className="text-3xl font-display font-extrabold mb-4">Industries We Dominate</h3>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-black/40">
              <span>Roofing</span> • <span>HVAC</span> • <span>Siding</span> • <span>Law Firms</span> • <span>Moving</span> • <span>Restoration</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group overflow-hidden rounded-3xl bg-black aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-10 z-20">
                <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Roofing Case Study</div>
                <h4 className="text-3xl font-display font-extrabold text-white mb-4">47% Reduction in CPL</h4>
                <div className="flex gap-4 text-white/60 text-sm font-medium">
                  <span>Anaheim, CA</span> • <span>$16K/Mo Budget</span>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl bg-black aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-10 z-20">
                <div className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">Restoration Case Study</div>
                <h4 className="text-3xl font-display font-extrabold text-white mb-4">73% Reduction in CPL</h4>
                <div className="flex gap-4 text-white/60 text-sm font-medium">
                  <span>Seattle, WA</span> • <span>$12K/Mo Budget</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
