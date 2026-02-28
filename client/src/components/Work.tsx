import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import p1 from "@/assets/images/project1.png";
import p2 from "@/assets/images/project2.png";
import p3 from "@/assets/images/project3.png";

const projects = [
  {
    id: 1,
    title: "Aura Architecture",
    category: "Branding & Spatial",
    image: p1,
    colSpan: "col-span-1 md:col-span-7",
  },
  {
    id: 2,
    title: "Void Syntax",
    category: "Digital Art & Web",
    image: p2,
    colSpan: "col-span-1 md:col-span-5",
  },
  {
    id: 3,
    title: "Noir Collection",
    category: "Art Direction & E-commerce",
    image: p3,
    colSpan: "col-span-1 md:col-span-12",
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-medium text-white/50 mb-6 block">
              Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-display tracking-tight text-white">
              Featured <span className="italic font-light text-white/50">Projects</span>
            </h2>
          </div>
          
          <a href="#" className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors">
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group cursor-pointer ${project.colSpan}`}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center text-white">
                <div>
                  <h3 className="text-2xl font-display mb-1">{project.title}</h3>
                  <p className="text-white/50 font-light">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
