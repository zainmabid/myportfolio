import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // navbarTheme is 'dark' when section background is light,
  // and 'light' when section background is dark.
  const [navbarTheme, setNavbarTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    let ticking = false;

    const updateNavbarTheme = () => {
      setScrolled(window.scrollY > 20);

      // Check which section is directly behind the navbar (check at y = 50px from top)
      const checkY = 50;
      const sections = document.querySelectorAll<HTMLElement>('[data-section-theme]');

      let currentSectionTheme: 'light' | 'dark' = 'light'; // Default for Hero section at top

      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= checkY && rect.bottom > checkY) {
          currentSectionTheme = (sections[i].dataset.sectionTheme as 'light' | 'dark') || 'light';
          break;
        }
      }

      // Dynamic inversion rule:
      // If section background is light => navbar is dark
      // If section background is dark  => navbar is light
      const nextNavbarTheme = currentSectionTheme === 'light' ? 'dark' : 'light';
      setNavbarTheme(nextNavbarTheme);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbarTheme);
        ticking = true;
      }
    };

    // Run on initial render
    updateNavbarTheme();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const isDark = navbarTheme === 'dark';

  const navLinks = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Industries', href: '#industries' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Badges', href: '#badges' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isDark
          ? scrolled
            ? 'bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800 shadow-lg'
            : 'bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md'
          : scrolled
            ? 'bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
            : 'bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#E2E8F0]/80 shadow-xs'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: ZMA Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Back to top"
          >
            <div
              className={`h-8 sm:h-9 px-2 py-0.5 rounded-lg bg-white shadow-xs flex items-center justify-center shrink-0 transition-all ${
                isDark
                  ? 'border border-slate-700 group-hover:border-slate-500'
                  : 'border border-[#E2E8F0] group-hover:border-slate-400'
              }`}
            >
              <img
                src="/logos/zma.png"
                alt="ZMA"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span
                className={`font-heading font-extrabold text-sm sm:text-base tracking-[-0.02em] transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-slate-200'
                    : 'text-[#1A1A1A] group-hover:text-slate-700'
                }`}
              >
                {PORTFOLIO_DATA.person.name}
              </span>
              <span
                className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-wider transition-colors ${
                  isDark ? 'text-slate-400' : 'text-[#475569]'
                }`}
              >
                RFID &amp; Auto-ID Architecture
              </span>
            </div>
          </a>

          {/* Right: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase font-mono tracking-wider transition-colors font-medium py-1 ${
                    isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-[#475569] hover:text-[#1A1A1A]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700'
                  : 'border-[#E2E8F0] bg-white text-[#1A1A1A] hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`md:hidden border-b px-6 py-4 space-y-3 shadow-lg text-left transition-colors ${
            isDark
              ? 'border-slate-800 bg-[#0B1120]'
              : 'border-[#E2E8F0] bg-[#FBFBFA]'
          }`}
        >
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-xs uppercase tracking-wider py-1.5 transition-colors ${
                  isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-[#475569] hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
