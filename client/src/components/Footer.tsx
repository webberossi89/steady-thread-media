import { Link } from "wouter";
import verticalLogo from "@/assets/images/logo-vertical.png";

export default function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="block mb-6 h-32 hover:opacity-80 transition-opacity">
              <img src={verticalLogo} alt="Steady Thread Media" className="h-full w-auto object-contain object-left" />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              Strategic GTM systems for consistent B2B growth. We help companies clarify positioning and strengthen demand generation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/approach" className="text-muted-foreground hover:text-white transition-colors">Approach</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-white transition-colors">Insights</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Steady Thread Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
