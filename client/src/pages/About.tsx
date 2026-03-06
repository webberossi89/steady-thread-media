import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Built around strategic clarity and sustainable growth
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            Steady Thread Media helps B2B companies strengthen the systems behind growth, from positioning to pipeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The strongest growth strategies are rarely built from isolated tactics. They come from clear positioning, disciplined execution, and a GTM system that connects marketing to revenue.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                That is the focus of Steady Thread Media: helping teams build a stronger thread between strategy, demand, and results.
              </p>
            </div>
            
            <div className="bg-secondary p-10 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-8">Our Principles</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-secondary-foreground/90">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary-foreground flex items-center justify-center font-bold">1</div>
                  Clarity before scale
                </li>
                <li className="flex items-center gap-4 text-secondary-foreground/90">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary-foreground flex items-center justify-center font-bold">2</div>
                  Strategy before channel expansion
                </li>
                <li className="flex items-center gap-4 text-secondary-foreground/90">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary-foreground flex items-center justify-center font-bold">3</div>
                  Systems over one-off tactics
                </li>
                <li className="flex items-center gap-4 text-secondary-foreground/90">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary-foreground flex items-center justify-center font-bold">4</div>
                  Revenue alignment matters
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
