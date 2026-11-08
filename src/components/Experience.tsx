import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    zaintegrate: true,
    emergtech: true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
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

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--line)] space-y-10">
          {experience.map((item) => {
            const isExpanded = !!expandedIds[item.id];

            return (
              <div key={item.id} className="relative group text-left">
                {/* Amber Timeline Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform ${
                    item.isCurrent
                      ? 'bg-[var(--accent)] border-[var(--surface)] ring-4 ring-[var(--accent)]/20'
                      : 'bg-[var(--accent)] border-[var(--surface)] group-hover:scale-125'
                  }`}
                  aria-hidden="true"
                />

                {/* Timeline Content Card */}
                <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[6px] p-5 sm:p-7 shadow-xs">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[var(--line)]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--secondary)]" />
                        {item.dates}
                      </span>
                      {item.isCurrent && (
                        <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--accent)] text-[var(--accent-fg)]">
                          Present
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs text-[var(--muted)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.city}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]">
                    {item.role}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-[var(--secondary)] font-semibold mt-1">
                    {item.company}
                  </div>

                  {/* 1 to 2 Line Summary */}
                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expand/Collapse for Longer Detail */}
                  {item.details && item.details.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-[var(--line)]">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--secondary)] hover:text-[var(--secondary-hover)] font-semibold transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Key Responsibilities' : 'Show Key Responsibilities'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2 pt-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink)]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <BarcodeDivider label="SECTION // 04-05" />
      </div>
    </section>
  );
};
