import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PhilosophyCallout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'center center']
  });

  // Smooth scroll-bound color transition to high-contrast Pure White (#FFFFFF)
  const textColor = useTransform(scrollYProgress, [0, 1], ['#94A3B8', '#FFFFFF']);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.75, 0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <section
      ref={containerRef}
      data-section-theme="dark"
      className="py-28 sm:py-36 lg:py-40 border-y border-slate-800 bg-[#0F172A] relative overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Monospace Capsule Structural Marker */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 font-mono text-[11px] uppercase tracking-wider text-slate-200 shadow-xs">
            [ TECHNICAL PHILOSOPHY ]
          </span>
        </div>

        {/* Minimalist Editorial Headline in High-Contrast Pure White */}
        <motion.h2
          style={{ color: textColor, opacity, y }}
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.25] sm:leading-[1.2] max-w-3xl mx-auto"
        >
          “Hardware doesn't fix automated supply chains.{' '}
          <span className="text-white underline decoration-slate-600 underline-offset-8">Intelligently mapped human workflows do.</span>”
        </motion.h2>

        {/* Short Sub-caption */}
        <p className="mt-6 text-sm sm:text-base text-[#94A3B8] font-normal max-w-lg mx-auto">
          Technology succeeds only when physical floor operators, edge hardware, and enterprise ledgers operate in complete harmony.
        </p>
      </div>
    </section>
  );
};
