export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6 md:px-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-2">
            <a href="/" className="text-3xl font-display font-medium tracking-tighter mb-6 block">
              OCULAR<span className="text-white/40">.</span>
            </a>
            <p className="text-white/50 max-w-sm font-light">
              An independent creative studio working at the intersection of culture and technology.
            </p>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-widest text-xs text-white/40 mb-6">Socials</h4>
            <ul className="space-y-4 font-light text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-widest text-xs text-white/40 mb-6">Locations</h4>
            <ul className="space-y-4 font-light text-white/80">
              <li>
                <span className="block text-white mb-1">London</span>
                <span className="text-sm text-white/50">120 Old Street<br/>EC1V 9BD</span>
              </li>
              <li className="pt-2">
                <span className="block text-white mb-1">New York</span>
                <span className="text-sm text-white/50">450 Broadway<br/>NY 10013</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-sm text-white/40 font-light">
          <p>© {new Date().getFullYear()} Ocular Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
