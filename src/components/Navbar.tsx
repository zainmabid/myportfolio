import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Industries', href: '#industries' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Badges', href: '#badges' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs'
          : 'bg-[#FBFBFA]/85 backdrop-blur-xs border-b border-[#E2E8F0]/70'
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
            <div className="h-8 sm:h-9 px-2 py-0.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center shrink-0 group-hover:border-slate-400 transition-all">
              <img
                src="/logos/zma.png"
                alt="ZMA"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-[-0.02em] text-[#1A1A1A] group-hover:text-slate-700 transition-colors">
                {PORTFOLIO_DATA.person.name}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#475569]">
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
                  className="text-xs uppercase font-mono tracking-wider text-[#475569] hover:text-[#1A1A1A] transition-colors font-medium py-1"
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
              className="p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#1A1A1A]"
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
        <div className="md:hidden border-b border-[#E2E8F0] bg-[#FBFBFA] px-6 py-4 space-y-3 shadow-lg text-left">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs uppercase tracking-wider text-[#475569] hover:text-[#1A1A1A] py-1.5 transition-colors"
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
