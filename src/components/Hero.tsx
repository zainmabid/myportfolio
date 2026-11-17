import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ExternalLink, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { Barcode } from './Barcode';

export const Hero: React.FC = () => {
  const { person } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[var(--line)] bg-[var(--bg)]">
      <motion.div
        className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Tag / Badge Bar */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
          {/* Tag / Badge as instructed */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--ink)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            10+ YEARS IN TECH STRATEGY &amp; OPERATIONS
          </span>

          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
            {person.location} • {person.relocationStatus}
          </span>
        </motion.div>

        {/* Two-Column Layout: Strategic Headline & Executive Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Strategic Headline & Subheadline */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[var(--ink)] leading-[1.1] max-w-3xl"
            >
              I build the workflows that connect{' '}
              <span className="text-[var(--accent)] underline decoration-[var(--line)] underline-offset-4 decoration-2">
                physical operations
              </span>{' '}
              with{' '}
              <span className="text-[var(--accent)] underline decoration-[var(--line)] underline-offset-4 decoration-2">
                digital systems
              </span>
              .
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-[var(--muted)] font-normal max-w-2xl leading-relaxed"
            >
              For over a decade, I’ve operated at the intersection of enterprise software, technology leadership, and business scale. Today, I solve one of the most expensive leaks in supply chains: bridging the gap between fast-moving manufacturing floors and central ERP ledgers using custom RFID, barcode tracking, and Industry 4.0 automation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-semibold text-sm uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Work with me</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-[var(--surface)] hover:bg-[var(--surface-alt)] text-[var(--ink)] border border-[var(--line)] font-semibold text-sm uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)]" />
              </a>
            </motion.div>

            {/* Clean Verification Barcode & Operational Metadata */}
            <motion.div variants={itemVariants} className="mt-10 sm:mt-12 pt-6 border-t border-[var(--line)] max-w-md">
              <Barcode
                value="ZAIN MASHHOOD ABID"
                subText="OPERATIONS ARCHITECTURE // 2026"
                withScanLine={false}
              />
            </motion.div>
          </div>

          {/* Right Column: Clean Executive Photo (No AI neon radar rings) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-[300px] sm:max-w-[320px] w-full">
              {/* Refined Corporate Card Frame */}
              <div className="relative rounded-[6px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                {/* Clean Header Bar */}
                <div className="px-4 py-2.5 border-b border-[var(--line)] bg-[var(--surface-alt)] flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  <span className="flex items-center gap-1.5 font-semibold text-[var(--ink)]">
                    <CheckCircle2 className="w-3 h-3 text-[var(--accent)]" />
                    FOUNDER &amp; MD
                  </span>
                  <div className="flex items-center gap-1.5">
                    <img
                      src="/logos/zma.png"
                      alt="ZMA"
                      className="h-3.5 w-auto object-contain bg-white rounded-[2px] px-1 py-0.5 border border-[var(--line)]"
                    />
                    <span className="text-[var(--ink)] font-bold">ZMA</span>
                  </div>
                </div>

                {/* Professional Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <img
                    src={person.avatar || '/zain-portrait.jpg'}
                    alt={person.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    loading="eager"
                  />
                  {/* Gentle gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-60" />
                </div>

                {/* Profile Caption Strip */}
                <div className="p-4 border-t border-[var(--line)] bg-[var(--surface)]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-heading font-bold text-base text-[var(--ink)] tracking-tight">
                        {person.name}
                      </div>
                      <div className="text-xs text-[var(--accent)] font-medium mt-0.5">
                        Enterprise Solutions Architect
                      </div>
                    </div>
                    <img
                      src="/logos/zma.png"
                      alt="ZMA"
                      className="h-6 w-auto object-contain bg-white rounded p-0.5 border border-[var(--line)] shrink-0 shadow-xs"
                    />
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-2 pt-2 border-t border-[var(--line)] flex items-center justify-between font-mono text-[10px]">
                    <span>Zaintegrated Solutions</span>
                    <span className="text-[var(--accent)] font-semibold">Lahore, PK</span>
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
