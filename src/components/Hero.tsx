import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';

export const Hero: React.FC = () => {
  const { person } = PORTFOLIO_DATA;

  // Staggered clip-path & Y-axis reveal easing as specified: cubic-bezier(0.16, 1, 0.3, 1)
  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeCurve }
    }
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: easeCurve }
    }
  };

  return (
    <section className="pt-32 pb-24 sm:pt-44 sm:pb-36 border-b border-slate-200 bg-white">
      <motion.div
        className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 2-Column Split Layout (60% Text / 40% Visual Asset) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (60% ~ 7 cols in 12-col grid) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag / Capsule */}
            <motion.div variants={lineVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-[11px] uppercase tracking-wider text-[#0F172A] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" aria-hidden="true" />
                [ STRATEGY &amp; OPERATIONS ]
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={lineVariants} className="overflow-hidden">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
                I build the physical tracking workflows that keep enterprise software{' '}
                <span className="text-[#0F172A] underline decoration-slate-300 underline-offset-8">accurate</span>.
              </h1>
            </motion.div>

            {/* Sub-text */}
            <motion.p
              variants={lineVariants}
              className="mt-6 text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-xl"
            >
              10+ years in technology strategy and solutions architecture. Currently engineering bulletproof RFID, Barcode, and WIP systems that synchronize factory floor operations with digital ERP ledgers.
            </motion.p>

            {/* Direct Action Buttons - Solid Heavy Flat Shapes */}
            <motion.div
              variants={lineVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Work with me</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 font-medium text-sm transition-colors shadow-xs"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#475569]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column Visual Asset (40% ~ 5 cols in 12-col grid) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              variants={photoVariants}
              className="relative max-w-[340px] sm:max-w-[380px] w-full"
            >
              {/* Flat, crisp white card: bg-white border border-slate-100 rounded-2xl shadow-sm p-4 sm:p-5 */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm p-3 sm:p-4 transition-all duration-300">
                {/* Minimalist Top Edge Strip */}
                <div className="px-4 py-2.5 rounded-t-xl border-b border-slate-100 bg-slate-50 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#475569]">
                  <span className="flex items-center gap-1.5 text-[#0F172A] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                  <div className="flex items-center">
                    <img
                      src="/logos/zma.png"
                      alt="ZMA"
                      className="h-4 w-auto object-contain bg-white rounded px-1.5 py-0.5 border border-slate-200"
                    />
                  </div>
                </div>

                {/* High-contrast, Professional Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={person.avatar || '/zain-portrait.jpg'}
                    alt={person.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-102"
                    loading="eager"
                  />
                  {/* Soft subtle bottom gradient to blend into card surface */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent opacity-80" />
                </div>

                {/* Clean Editorial Caption */}
                <div className="p-4 rounded-b-xl border-t border-slate-100 bg-white">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-heading font-semibold text-base text-[#0F172A]">
                        {person.name}
                      </div>
                      <div className="text-xs text-[#475569] font-medium mt-0.5">
                        Solutions Architect &amp; Consultant
                      </div>
                    </div>
                    <img
                      src="/logos/zma.png"
                      alt="ZMA"
                      className="h-6 w-auto object-contain bg-white rounded p-0.5 border border-slate-200 shrink-0 shadow-xs"
                    />
                  </div>
                  <div className="text-xs text-[#475569] mt-2 pt-2 border-t border-slate-100 flex items-center justify-between font-mono text-[10px]">
                    <span>Zaintegrated Solutions</span>
                    <span className="text-[#0F172A] font-medium">Lahore, PK</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
