export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <a href="/" className="flex flex-col leading-none mb-6">
              <span className="text-2xl font-display font-extrabold tracking-tighter">THOMAS TOWN</span>
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Digital Lead Gen</span>
            </a>
            <p className="text-black/40 max-w-sm font-medium">
              We focus on delivering high-quality enquires for home service business owners. More leads, more growth, more freedom.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-black/20 mb-6">Quick Links</h4>
            <ul className="space-y-4 font-bold text-sm text-black/60">
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Book a Call</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-black/20 mb-6">Accountability</h4>
            <div className="bg-muted p-4 rounded-xl">
              <p className="text-xs font-bold text-black/60 italic leading-relaxed">
                "Month-to-month agreements keep us accountable, and keep you in control. We deliver results that make you want to stay."
              </p>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-black/5 pt-8 text-xs font-bold uppercase tracking-widest text-black/20">
          <p>© {new Date().getFullYear()} Thomas Town Digital. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
