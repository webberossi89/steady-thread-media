"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-background/95 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 relative flex items-center gap-3 hover:opacity-80 transition-opacity">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="9" stroke="hsl(278 100% 92%)" strokeWidth="1.4" fill="none"/>
            <circle cx="18" cy="18" r="3" fill="hsl(278 100% 92%)"/>
            <line x1="27" y1="18" x2="36" y2="18" stroke="hsl(278 100% 92%)" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-sans font-bold tracking-tight text-white leading-tight">
              Steady Thread
            </span>
            <span className="text-[9px] font-light tracking-[0.22em] text-primary/70 uppercase">
              Media
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-[#E5C1FF] transition-colors duration-200 text-sm font-medium"
          >
            Book a GTM Assessment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative p-2 text-white mobile-nav"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col justify-center px-8 mobile-nav"
          >
            <nav className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-3xl font-sans font-medium ${
                      pathname === link.href ? "text-primary" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * links.length, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium"
                >
                  Book a GTM Assessment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
