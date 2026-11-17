import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PhilosophyCallout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'center center']
  });

  // Smooth scroll-bound color transition from muted silver (#8B949E) to crisp white (#F0F6FC)
  const textColor = useTransform(scrollYProgress, [0, 1], ['#8B949E', '#F0F6FC']);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.65, 0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <section
      ref={containerRef}
      className="py-28 sm:py-36 lg:py-40 border-b border-[var(--line)] bg-[var(--surface-alt)]/40 relative overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Monospace Capsule Structural Marker */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] shadow-xs">
            [ TECHNICAL PHILOSOPHY ]
          </span>
        </div>

        {/* Minimalist Editorial Headline */}
        <motion.h2
          style={{ color: textColor, opacity, y }}
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.25] sm:leading-[1.2] max-w-3xl mx-auto"
        >
          “Hardware doesn't fix automated supply chains.{' '}
          <span className="text-[var(--accent)]">Intelligently mapped human workflows do.</span>”
        </motion.h2>

        {/* Short Sub-caption */}
        <p className="mt-6 text-sm text-[var(--muted)] font-normal max-w-lg mx-auto">
          Technology succeeds only when physical floor operators, edge hardware, and enterprise ledgers operate in complete harmony.
        </p>
      </div>
    </section>
  );
};
