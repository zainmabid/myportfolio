import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 sm:py-24 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            07 // ACADEMIC BACKGROUND
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Education
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            Formal foundations in computer science theory, systems architecture, and project management standards.
          </p>
        </div>

        {/* 2 Compact Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[var(--line)]">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[var(--secondary)]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                      Degree Program
                    </span>
                  </div>

                  {item.status ? (
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--muted)]">
                      {item.status}
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--accent)] text-[var(--accent-fg)]">
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold tracking-tight text-[var(--ink)]">
                  {item.degree}
                </h3>
                <p className="mt-1 font-heading font-medium text-sm text-[var(--secondary)]">
                  {item.institution}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--line)] flex items-center justify-between font-mono text-xs text-[var(--muted)]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.dates}
                </span>
              </div>
            </div>
          ))}
        </div>

        <BarcodeDivider label="SECTION // 07-08" />
      </div>
    </section>
  );
};
