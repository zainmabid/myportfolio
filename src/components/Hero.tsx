import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ExternalLink, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { Barcode } from './Barcode';

const ROTATING_HOOKS = [
  {
    lead: 'I make',
    core: 'warehouses, factories and asset registers',
    tail: 'countable.'
  },
  {
    lead: 'I engineer',
    core: 'zero-loss physical asset traceability',
    tail: 'from floor to ERP.'
  },
  {
    lead: 'I synchronize',
    core: 'RFID, barcode automation and live inventory',
    tail: 'in real time.'
  }
];

export const Hero: React.FC = () => {
  const { person } = PORTFOLIO_DATA;
  const [hookIndex, setHookIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHookIndex((prev) => (prev + 1) % ROTATING_HOOKS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Single orchestrated hero entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[var(--line)]">
      <motion.div
        className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Operational Tag & Brand Monogram */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-white border border-[var(--line)] shadow-xs">
            <img src="/logos/zma.png" alt="ZMA" className="h-5 sm:h-5.5 w-auto object-contain" />
            <span className="font-mono text-[11px] font-extrabold tracking-wider text-[#141A21]">ZMA</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-[var(--surface)] border border-[var(--line)] font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
            Solutions Architecture // Auto-ID & ERP
          </span>

          <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
            <MapPin className="w-3 h-3 text-[var(--accent)]" />
            {person.location} ({person.relocationStatus})
          </span>
        </motion.div>

        {/* Two-Column Grid: Headline & Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Main Industrial Headline with Rotating Dynamic Hooks */}
            <div className="min-h-[145px] sm:min-h-[175px] lg:min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={hookIndex}
                  initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(3px)' }}
                  transition={{ duration: 0.38, ease: 'easeOut' }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--ink)] leading-[1.08] max-w-3xl"
                >
                  <span>{ROTATING_HOOKS[hookIndex].lead} </span>
                  <span className="text-[var(--accent)] underline decoration-[var(--line)] underline-offset-4 decoration-2">
                    {ROTATING_HOOKS[hookIndex].core}
                  </span>{' '}
                  <span>{ROTATING_HOOKS[hookIndex].tail}</span>
                </motion.h1>
              </AnimatePresence>

              {/* Telemetry Segment Selector */}
              <div className="flex items-center gap-2 mt-4 select-none">
                {ROTATING_HOOKS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHookIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === hookIndex
                        ? 'w-8 bg-[var(--accent)] shadow-xs'
                        : 'w-2.5 bg-[var(--line)] hover:bg-[var(--muted)]'
                    }`}
                    aria-label={`Switch to hook ${idx + 1}`}
                  />
                ))}
                <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--muted)] ml-2">
                  HOOK // 0{hookIndex + 1}
                </span>
              </div>
            </div>

            {/* Sub-line */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[var(--muted)] font-normal max-w-2xl leading-relaxed"
            >
              Founder &amp; Managing Director at <span className="text-[var(--ink)] font-medium">Zaintegrated Solutions</span>. Solutions architect and enterprise consultant for RFID, barcode, warehouse automation, and ERP across leading national and international companies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-heading font-bold text-sm uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Work with me</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-[var(--surface)] hover:bg-[var(--surface-alt)] text-[var(--ink)] border border-[var(--line)] font-heading font-semibold text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)]" />
              </a>
            </motion.div>

            {/* Signature Element: Industrial Barcode with Laser Sweep Line */}
            <motion.div variants={itemVariants} className="mt-10 sm:mt-12 pt-6 border-t border-[var(--line)] max-w-md">
              <Barcode
                value="ZAIN MASHHOOD ABID"
                subText="TRACEABILITY INDEX // VER 1.0"
                withScanLine={true}
              />
            </motion.div>
          </div>

          {/* Executive Portrait Column with Animated RFID Signal Field */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end mt-4 lg:mt-0 relative"
          >
            {/* Animated Concentric RFID / Radio Waves */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-visible" aria-hidden="true">
              <div className="w-[280px] h-[280px] rounded-full border border-[var(--accent)]/30 animate-rf-pulse" />
              <div className="w-[380px] h-[380px] rounded-full border border-[var(--accent)]/20 animate-rf-pulse [animation-delay:1.5s]" />
              <div className="w-[480px] h-[480px] rounded-full border border-[var(--accent)]/10 animate-rf-pulse [animation-delay:3s]" />
            </div>

            <div className="relative group max-w-[280px] sm:max-w-[310px] w-full">
              {/* Industrial Viewfinder Corner Markers */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)] pointer-events-none z-10" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--accent)] pointer-events-none z-10" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--accent)] pointer-events-none z-10" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)] pointer-events-none z-10" />

              {/* Card Container */}
              <div className="relative rounded-[4px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                {/* Header Bar */}
                <div className="px-3.5 py-2 border-b border-[var(--line)] bg-[var(--surface-alt)] flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    EXECUTIVE PROFILE
                  </span>
                  <div className="flex items-center gap-1.5">
                    <img src="/logos/zma.png" alt="ZMA" className="h-3.5 w-auto object-contain bg-white rounded-[2px] px-1 py-0.5 border border-[var(--line)]" />
                    <span className="text-[var(--ink)] font-bold">ZMA // 2026</span>
                  </div>
                </div>

                {/* Portrait Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <img
                    src={person.avatar || '/zain-portrait.jpg'}
                    alt={person.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle technical gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-70" />
                </div>

                {/* Footer Strip */}
                <div className="p-3.5 border-t border-[var(--line)] bg-[var(--surface)]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-heading font-bold text-sm text-[var(--ink)] tracking-tight">
                        {person.name}
                      </div>
                      <div className="font-mono text-[11px] text-[var(--accent)] font-semibold mt-0.5">
                        Founder &amp; Managing Director
                      </div>
                    </div>
                    <img src="/logos/zma.png" alt="ZMA" className="h-6 w-auto object-contain bg-white rounded p-0.5 border border-[var(--line)] shrink-0 shadow-xs" />
                  </div>
                  <div className="font-mono text-[10px] text-[var(--muted)] mt-1.5 pt-1.5 border-t border-[var(--line)] flex items-center justify-between">
                    <span>Zaintegrated Solutions</span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--accent)] font-semibold">LHE // PK</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
