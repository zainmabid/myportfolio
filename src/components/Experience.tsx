import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceItem } from '@/data/content';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;
  const [selectedId, setSelectedId] = useState<string>(experience[0]?.id || '');

  const selectedItem: ExperienceItem =
    experience.find((item) => item.id === selectedId) || experience[0];
  const selectedIdx = experience.findIndex((item) => item.id === selectedId);

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-[var(--line)] bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            04 // TRACK RECORD & CHRONOLOGY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            A decade of operational execution, enterprise presales, RFID systems integration, and ERP rollouts.
          </p>
        </div>

        {/* Master-Detail Layout: Left Rail + Right Interactive Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Vertical Rail / Navigation Points */}
          <div className="lg:col-span-5 space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] pb-2 mb-2 border-b border-[var(--line)] flex items-center justify-between">
              <span>Career Trajectory</span>
              <span className="text-[10px] text-[var(--accent)] font-semibold">Hover to Inspect</span>
            </div>

            <div className="relative pl-4 sm:pl-6 border-l-2 border-[var(--line)] space-y-3">
              {experience.map((item, idx) => {
                const isActive = item.id === selectedItem.id;

                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setSelectedId(item.id)}
                    onClick={() => setSelectedId(item.id)}
                    className={`relative w-full text-left p-3.5 sm:p-4 rounded-[6px] border transition-all duration-200 group cursor-pointer block ${
                      isActive
                        ? 'bg-[var(--surface)] border-[var(--accent)] shadow-sm -translate-r-0.5'
                        : 'bg-[var(--surface)]/70 hover:bg-[var(--surface)] border-[var(--line)] hover:border-[var(--muted)]'
                    }`}
                  >
                    {/* Node Dot on Left Vertical Line */}
                    <div
                      className={`absolute -left-[23px] sm:-left-[31px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                        isActive
                          ? 'bg-[var(--accent)] border-[var(--surface)] ring-4 ring-[var(--accent)]/25 scale-125'
                          : 'bg-[var(--surface-alt)] border-[var(--line)] group-hover:border-[var(--accent)]'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Header Row: Dates & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[11px] text-[var(--muted)] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[var(--accent)]" />
                        {item.dates}
                      </span>
                      {item.isCurrent && (
                        <span className="font-mono text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-[2px] bg-[var(--accent)] text-[var(--accent-fg)]">
                          Present
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <div className={`font-heading text-sm sm:text-base font-bold tracking-tight transition-colors ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--ink)] group-hover:text-[var(--ink)]'
                    }`}>
                      {item.role}
                    </div>

                    {/* Company Name */}
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] mt-0.5 flex items-center justify-between">
                      <span className="truncate">{item.company}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                        isActive ? 'text-[var(--accent)] translate-x-1' : 'opacity-0 group-hover:opacity-100 text-[var(--muted)]'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Experience Detail Window */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative rounded-[6px] border border-[var(--line)] bg-[var(--surface)] shadow-md overflow-hidden min-h-[420px]">
              {/* Technical Viewfinder Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-[var(--accent)]" />
                <div className="absolute top-0 right-0 h-full w-[2px] bg-[var(--accent)]" />
              </div>

              {/* Dossier Header Bar */}
              <div className="px-5 py-3 border-b border-[var(--line)] bg-[var(--surface-alt)] flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span>DOSSIER // EXP-0{selectedIdx + 1}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--ink)] font-semibold">
                  <MapPin className="w-3 h-3 text-[var(--accent)]" />
                  <span>{selectedItem.city}</span>
                </div>
              </div>

              {/* Animated Content Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="p-6 sm:p-8"
                >
                  {/* Role Title & Company Header */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-[var(--surface-alt)] border border-[var(--line)] font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold mb-2">
                      <Briefcase className="w-3 h-3" />
                      {selectedItem.dates}
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--ink)] leading-snug">
                      {selectedItem.role}
                    </h3>

                    <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--accent)] font-semibold mt-1">
                      {selectedItem.company}
                    </div>
                  </div>

                  {/* Operational Summary Callout */}
                  <div className="mt-5 p-4 rounded-[4px] bg-[var(--surface-alt)]/60 border-l-3 border-[var(--accent)] text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {selectedItem.summary}
                  </div>

                  {/* Key Deliverables & Responsibilities */}
                  {selectedItem.details && selectedItem.details.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-[var(--line)]">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">
                        KEY DELIVERABLES &amp; IMPACT
                      </div>

                      <ul className="space-y-2.5">
                        {selectedItem.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[var(--ink)] leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Window Bottom Metadata Bar */}
                  <div className="mt-8 pt-4 border-t border-[var(--line)] flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      Traceable Operational Record
                    </span>
                    <span className="text-[var(--accent)] font-semibold">
                      {selectedIdx + 1} / {experience.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
