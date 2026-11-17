import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-28 sm:py-36 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[var(--bg)] border border-[var(--line)] font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-3 shadow-xs">
            [ 07 // ACADEMIC FOUNDATIONS ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)]">
            Education
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            Formal foundations in computer science theory, systems architecture, and project management standards.
          </p>
        </div>

        {/* 2 Clean Degree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-[8px] bg-[var(--bg)] border border-[var(--line)] flex flex-col justify-between shadow-xs hover:border-[var(--line-hover)] transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--line)]">
                  <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                    Degree Program
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)] leading-snug">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--accent)] font-medium">
                  {item.institution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center font-mono text-xs text-[var(--muted)]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <BarcodeDivider label="SECTION // 07-08" />
        </div>
      </div>
    </section>
  );
};
