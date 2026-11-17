import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle2, ChevronRight, Briefcase, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceItem } from '@/data/content';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;
  const [selectedId, setSelectedId] = useState<string>(experience[0]?.id || '');

  const selectedItem: ExperienceItem =
    experience.find((item) => item.id === selectedId) || experience[0];
  const selectedIdx = experience.findIndex((item) => item.id === selectedId);

  return (
    <section id="experience" className="py-28 sm:py-36 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Tag Capsule */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 font-mono text-[11px] uppercase tracking-wider text-[#0F172A] shadow-xs">
            [ EVOLUTION MATRIX // AUTHORITY MAPPING ]
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight max-w-3xl">
          A Decade of Software Strategy. Grounded on the Factory Floor.
        </h2>

        {/* Horizontal Line Trace Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-[1px] bg-slate-300 my-12"
        />

        {/* The Evolution Matrix: Two Asymmetric Flat Crisp White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* COLUMN A - THE FOUNDATION (2014 - 2024) */}
          <div className="p-8 rounded-2xl border border-slate-100 bg-white flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
                <span className="font-mono text-xs uppercase font-medium tracking-wider text-[#475569]">
                  [ THE FOUNDATION ]
                </span>
                <span className="font-mono text-xs text-[#475569]">2014 — 2024</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-3">
                Enterprise Tech &amp; Software Strategy
              </h3>

              <p className="text-base text-[#475569] leading-relaxed font-normal">
                Eight years operating at the intersection of enterprise tech. Architecting software solutions, driving corporate pre-sales, and aligning C-suite business goals with technical architecture.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 font-mono text-[11px] text-[#475569]">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>CRM • ERP • Enterprise Pre-sales • Scaled Systems</span>
            </div>
          </div>

          {/* COLUMN B - THE FOCUS (2024 - PRESENT) */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm hover:border-slate-400 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
                <span className="font-mono text-xs uppercase font-semibold tracking-wider text-[#0F172A]">
                  [ THE FOCUS ]
                </span>
                <span className="font-mono text-xs font-semibold text-[#0F172A]">2024 — PRESENT</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-3">
                Raw Operational Execution &amp; Industry 4.0
              </h3>

              <p className="text-base text-[#0F172A] leading-relaxed font-normal">
                Transitioning execution directly to raw operations. Solving the physical-to-digital disconnect by deploying active WIP automation, custom barcode tracking, and deep RFID integration.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 font-mono text-[11px] text-[#0F172A] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span>RFID Infrastructure • WIP Automation • Zero-Loss Traceability</span>
            </div>
          </div>
        </div>

        {/* Master-Detail Interactive Chronology Inspector */}
        <div className="pt-4">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <h3 className="font-heading text-xl font-bold text-[#0F172A]">
              Chronological Track Record
            </h3>
            <span className="font-mono text-xs text-[#475569]">
              Hover or tap a role to inspect operational deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Rail / Role Navigation */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="relative pl-4 sm:pl-5 border-l-2 border-slate-200 space-y-3">
                {experience.map((item) => {
                  const isActive = item.id === selectedItem.id;

                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setSelectedId(item.id)}
                      onClick={() => setSelectedId(item.id)}
                      className={`relative w-full text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer block ${
                        isActive
                          ? 'bg-white border-slate-900 shadow-sm'
                          : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {/* Node Dot on Left Vertical Line */}
                      <div
                        className={`absolute -left-[23px] sm:-left-[27px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-150 ${
                          isActive
                            ? 'bg-[#0F172A] border-white ring-4 ring-slate-200 scale-125'
                            : 'bg-slate-300 border-white'
                        }`}
                        aria-hidden="true"
                      />

                      {/* Header Row: Dates */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-[11px] text-[#475569] flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#0F172A]" />
                          {item.dates}
                        </span>
                        {item.isCurrent && (
                          <span className="font-mono text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-[#0F172A] text-white">
                            Active
                          </span>
                        )}
                      </div>

                      {/* Role Title */}
                      <div
                        className={`font-heading text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                          isActive ? 'text-[#0F172A]' : 'text-slate-700'
                        }`}
                      >
                        {item.role}
                      </div>

                      {/* Company Name */}
                      <div className="text-xs text-[#475569] mt-0.5 flex items-center justify-between">
                        <span className="truncate">{item.company}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isActive
                              ? 'text-[#0F172A] translate-x-1'
                              : 'opacity-0 text-[#475569]'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Role Detail Window */}
            <div className="lg:col-span-7 sticky top-24">
              <div className="relative rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden min-h-[400px]">
                {/* Minimal Header Bar */}
                <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#475569]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
                    <span>ROLE // EXP-0{selectedIdx + 1}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#0F172A] font-medium">
                    <MapPin className="w-3 h-3 text-[#0F172A]" />
                    <span>{selectedItem.city}</span>
                  </div>
                </div>

                {/* Animated Content Panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="p-6 sm:p-8"
                  >
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 font-mono text-[10px] uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                        <Briefcase className="w-3 h-3" />
                        {selectedItem.dates}
                      </div>

                      <h3 className="font-heading text-2xl font-bold tracking-tight text-[#0F172A] leading-snug">
                        {selectedItem.role}
                      </h3>

                      <div className="text-sm font-medium text-slate-700 mt-1">
                        {selectedItem.company}
                      </div>
                    </div>

                    {/* Operational Summary Callout */}
                    <div className="mt-5 p-4 rounded-xl bg-slate-50 border-l-4 border-[#0F172A] text-sm text-[#475569] leading-relaxed">
                      {selectedItem.summary}
                    </div>

                    {/* Key Deliverables */}
                    {selectedItem.details && selectedItem.details.length > 0 && (
                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#475569] mb-3 font-semibold">
                          KEY DELIVERABLES
                        </div>

                        <ul className="space-y-2.5">
                          {selectedItem.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A] leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
