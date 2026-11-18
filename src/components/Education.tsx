import React from 'react';
import { GraduationCap, MapPin, Cpu, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, EducationItem } from '@/data/content';
import { BarcodeDivider } from './Barcode';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-28 sm:py-36 border-b border-slate-800 bg-[#0F172A] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 font-mono text-[11px] uppercase tracking-wider text-slate-200 mb-3 shadow-xs">
            [ 07 // ACADEMIC FOUNDATIONS ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white">
            Education
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] leading-relaxed">
            Bridging rigorous computer science principles with structured enterprise execution frameworks.
          </p>
        </div>

        {/* 2 Clean Degree Cards: Flat crisp dark cards with 2-tier value addition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {education.map((item: EducationItem) => {
            const isFoundation = item.badgeStyle === 'foundation';

            return (
              <div
                key={item.id}
                className="p-8 sm:p-9 rounded-2xl bg-[#131B2E] border border-slate-800 flex flex-col justify-between shadow-md hover:border-slate-600 hover:shadow-xl transition-all duration-200 group text-left"
              >
                <div>
                  {/* Top Tier: Sleek Micro-Badge + Execution Timeline Date Stamp */}
                  <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-800">
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-md tracking-wider shadow-xs ${
                        isFoundation
                          ? 'bg-slate-800/90 border border-slate-600 text-blue-200'
                          : 'bg-emerald-950/40 border border-emerald-800/70 text-emerald-300'
                      }`}
                    >
                      {isFoundation ? (
                        <Cpu className="w-3 h-3 text-blue-300" />
                      ) : (
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      )}
                      <span>[ {item.badgeTag} ]</span>
                    </span>

                    <span className="font-mono text-[11px] font-semibold text-slate-300 px-2.5 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/80 shadow-2xs">
                      {item.timeline}
                    </span>
                  </div>

                  {/* Degree Header & Institute */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-[-0.02em] text-white leading-snug">
                    {item.degree}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-300 font-medium">
                    {item.institution}
                  </p>

                  {/* Vertical Divider / Core Value Addition */}
                  <div className="mt-5 pt-4 border-t border-slate-800 space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      Core Value Addition:
                    </span>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                      {item.coreValue}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Location & Credential Tag */}
                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs text-[#94A3B8]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </span>
                  <span className="text-[10px] uppercase text-slate-500 font-semibold">
                    [ VERIFIED DEGREE ]
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <BarcodeDivider label="SECTION // 07-08" />
        </div>
      </div>
    </section>
  );
};
