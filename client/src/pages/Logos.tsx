import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import logo1 from "@/assets/images/logo-option-1.png";
import logo2 from "@/assets/images/logo-option-2.png";
import logo3 from "@/assets/images/logo-option-3.png";

export default function Logos() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 text-center">
            Logo Options
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-secondary p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center">
              <h2 className="text-2xl font-display font-medium text-white mb-6">Option 1</h2>
              <p className="text-muted-foreground mb-8 text-sm h-12">Minimalist monogram logo combining S and T with a thread line.</p>
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/5 mb-6">
                <img src={logo1} alt="Logo Option 1" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center">
              <h2 className="text-2xl font-display font-medium text-white mb-6">Option 2</h2>
              <p className="text-muted-foreground mb-8 text-sm h-12">Abstract connecting thread logo forming a continuous moving wave.</p>
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/5 mb-6">
                <img src={logo2} alt="Logo Option 2" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center">
              <h2 className="text-2xl font-display font-medium text-white mb-6">Option 3</h2>
              <p className="text-muted-foreground mb-8 text-sm h-12">Sophisticated continuous loop forming an abstract infinity thread symbol.</p>
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/5 mb-6">
                <img src={logo3} alt="Logo Option 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
