import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, ArrowUp, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { person } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-28 sm:py-36 bg-[var(--surface)] text-left border-t border-[var(--line)]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bold, Simple, Highly Professional Closure Block */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[10px] bg-[var(--bg)] border border-[var(--line)] shadow-lg relative overflow-hidden">
          <div className="max-w-2xl">
            {/* Tag / Capsule */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] shadow-xs">
                [ DIRECT ENGAGEMENT ]
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
              Let's bypass the corporate techno-babble.
            </h2>

            {/* Sub-text */}
            <p className="mt-5 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
              If your factory floor tracking isn’t updating your ERP, or you need an un-biased vendor evaluation for your hardware—let's discuss your roadmap.
            </p>

            {/* CTA Buttons with Spring Micro-interaction */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Button: Connect on LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[4px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-medium text-sm transition-all shadow-sm"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </motion.a>

              {/* Button: Schedule an Operational Review */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href={`mailto:${person.email}?subject=${encodeURIComponent('Operational Review / RFID Evaluation')}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[4px] bg-[var(--surface)] hover:bg-[var(--surface-alt)] text-[var(--ink)] border border-[var(--line)] hover:border-[var(--line-hover)] font-medium text-sm transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span>Schedule an Operational Review</span>
              </motion.a>

              {/* WhatsApp direct pill */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href="https://wa.me/923205270594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[4px] bg-[var(--surface)] hover:bg-[var(--surface-alt)] text-[var(--ink)] border border-[var(--line)] hover:border-[var(--line-hover)] font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                <span>WhatsApp Direct</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Minimal Editorial Footer Strip */}
        <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-3">
            <img
              src="/logos/zma.png"
              alt="ZMA"
              className="h-6 w-auto object-contain bg-white rounded p-0.5 border border-[var(--line)]"
            />
            <div>
              <span className="font-heading font-semibold text-[var(--ink)]">Zain Mashhood Abid</span>
              <span className="mx-2">•</span>
              <span>Founder &amp; MD, Zaintegrated Solutions</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Zain Mashhood Abid. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
