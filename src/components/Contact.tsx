import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, ArrowUp, Phone, ShieldCheck } from 'lucide-react';
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
    <footer id="contact" className="py-28 sm:py-36 bg-[#FBFBFA] text-left border-t border-[#E2E8F0] text-[#1A1A1A]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bold, Simple, Highly Professional Closure Block - Dark Executive Card */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden text-left">
          <div className="relative z-10">
            {/* Tag / Capsule */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 font-mono text-[11px] uppercase tracking-wider text-slate-200 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                [ DIRECT ENGAGEMENT ]
              </span>
            </div>

            {/* Title */}
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-tight">
                Let's bypass the corporate techno-babble.
              </h2>

              {/* Sub-text */}
              <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal">
                If your factory floor tracking isn’t updating your ERP, or you need an un-biased vendor evaluation for your hardware—let's discuss your roadmap.
              </p>
            </div>

            {/* CTA Buttons in a single row */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Button: Connect on LinkedIn - High Contrast White Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-semibold text-sm transition-all shadow-md shrink-0"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0F172A]" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#0F172A]" />
              </motion.a>

              {/* Button: Schedule an Operational Review */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href={`mailto:${person.email}?subject=${encodeURIComponent('Operational Review / RFID Evaluation')}`}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#1E293B] hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm transition-colors shadow-xs shrink-0"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Schedule an Operational Review</span>
              </motion.a>

              {/* WhatsApp direct button - In the same line */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href="https://wa.me/923205270594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#1E293B] hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm transition-colors shadow-xs shrink-0"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Confidentiality Footer Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-3.5 text-left">
          <div className="p-2 rounded-xl bg-[#F4F4F0] border border-[#E2E8F0] text-[#1A1A1A] shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4 text-slate-700" />
          </div>
          <div className="text-xs leading-relaxed text-[#475569]">
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A] block sm:inline sm:mr-2">
              Engagement Compliance Note:
            </span>
            <span>
              To uphold strict non-disclosure agreements (NDAs) and national security compliance, specific project architectures, entity titles, and internal tech frameworks for strategic defense and certain state institutions are completely anonymized.
            </span>
          </div>
        </div>

        {/* Minimal Editorial Footer Strip */}
        <div className="mt-16 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#475569]">
          <div className="flex items-center gap-3">
            <img
              src="/logos/zma.png"
              alt="ZMA"
              className="h-6 w-auto object-contain bg-white rounded p-0.5 border border-[#E2E8F0] shadow-xs"
            />
            <div>
              <span className="font-heading font-semibold text-[#1A1A1A]">Zain Mashhood Abid</span>
              <span className="mx-2">•</span>
              <span>Founder &amp; MD, Zaintegrated Solutions</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Zain Mashhood Abid. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#475569] hover:text-[#1A1A1A] transition-colors cursor-pointer"
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
