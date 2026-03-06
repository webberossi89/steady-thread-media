import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Insights() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Insights on B2B growth and GTM execution
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            Thoughts, frameworks, and deep dives into building better go-to-market systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Why your GTM positioning isn't translating to pipeline",
                date: "Oct 12, 2025",
                tag: "Positioning"
              },
              {
                title: "Fixing the handoff: When marketing and sales disconnect",
                date: "Sep 28, 2025",
                tag: "Revenue Optimization"
              },
              {
                title: "The problem with tactical marketing over strategic systems",
                date: "Sep 15, 2025",
                tag: "GTM Strategy"
              }
            ].map((post, i) => (
              <div key={i} className="bg-secondary rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
                <span className="inline-block px-4 py-1.5 rounded-full border border-secondary-foreground/20 text-xs font-medium text-secondary-foreground mb-6">{post.tag}</span>
                <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-4 leading-tight">{post.title}</h3>
                <p className="text-secondary-foreground/60 text-sm mb-6">{post.date}</p>
                <Link href="#" className="text-primary-foreground font-medium flex items-center gap-2">
                  Read Article <span className="text-lg">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
