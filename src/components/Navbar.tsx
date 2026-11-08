import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { PORTFOLIO_DATA } from '@/data/content';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
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
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: ZMA Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Back to top"
          >
            <div className="h-8 sm:h-9 px-1.5 py-0.5 rounded-[4px] bg-white border border-[var(--line)] shadow-xs flex items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-all">
              <img
                src="/logos/zma.png"
                alt="ZMA"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                {PORTFOLIO_DATA.person.name}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--muted)]">
                RFID &amp; Auto-ID Architecture
              </span>
            </div>
          </a>

          {/* Right: Desktop Navigation Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase font-mono tracking-wider text-[var(--muted)] hover:text-[var(--ink)] transition-colors font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="w-[1px] h-4 bg-[var(--line)]" aria-hidden="true" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[4px] border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--muted)] transition-colors cursor-pointer"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-[var(--ink)]" />
              ) : (
                <Sun className="w-4 h-4 text-[var(--accent)]" />
              )}
            </button>
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-[4px] border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[var(--accent)]" />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-[4px] border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
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
        <div className="md:hidden border-b border-[var(--line)] bg-[var(--surface)] px-6 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] hover:text-[var(--ink)] py-1.5 transition-colors"
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
