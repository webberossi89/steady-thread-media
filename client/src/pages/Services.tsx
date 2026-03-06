import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Services built around B2B growth execution
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            We help companies improve go-to-market strategy, demand generation, and conversion systems so growth becomes more predictable.
          </p>

          <div className="space-y-24">
            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-4">GTM Strategy</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl">For companies that need a sharper market position and a clearer path to growth.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> ICP definition</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> market positioning</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> messaging strategy</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> offer clarity</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> channel prioritization</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> GTM roadmap</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Demand Generation</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl">For teams that need stronger lead flow and better channel performance.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> funnel planning</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> campaign architecture</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> paid media strategy</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> nurture journey planning</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> landing page strategy</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> acquisition system design</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Revenue Optimization</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl">For teams that need better conversion from demand to pipeline.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> sales-marketing alignment</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> lead routing and handoff</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> qualification logic</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> conversion analysis</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> reporting clarity</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> process improvements</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
