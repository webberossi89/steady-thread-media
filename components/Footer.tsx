import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col items-start gap-3 mb-8 hover:opacity-80 transition-opacity">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="12" stroke="hsl(278 100% 92%)" strokeWidth="1.4" fill="none"/>
                <circle cx="24" cy="24" r="4" fill="hsl(278 100% 92%)"/>
                <line x1="36" y1="24" x2="48" y2="24" stroke="hsl(278 100% 92%)" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="text-2xl font-sans font-bold text-white block">
                  Steady Thread
                </span>
                <span className="text-[10px] font-light tracking-[0.22em] text-primary/70 uppercase">
                  Media
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 text-sm leading-relaxed">
              Strategic GTM systems for consistent B2B growth. We help companies clarify positioning and strengthen demand generation. Based in Charlotte, NC.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "Services", href: "/services" },
                { label: "Approach", href: "/approach" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link text-muted-foreground text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Connect</h4>
            <ul className="space-y-4">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "Insights", href: "/insights" },
                { label: "RSS Feed", href: "/feed.xml" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link text-muted-foreground text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Steady Thread Media. All rights reserved.</p>
          <p>Charlotte, NC &middot; Serving teams across North America</p>
        </div>
      </div>
    </footer>
  );
}
