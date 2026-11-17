import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#F4F4F0]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#090D16] mb-3 shadow-xs">
            [ 07 // ACADEMIC FOUNDATIONS ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#090D16]">
            Education
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Formal foundations in computer science theory, systems architecture, and project management standards.
          </p>
        </div>

        {/* 2 Clean Degree Cards: Flat, crisp white cards: bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-md p-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E2E8F0]">
                  <GraduationCap className="w-4 h-4 text-[#090D16]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#475569]">
                    Degree Program
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#090D16] leading-snug">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-sm text-[#475569] font-medium">
                  {item.institution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center font-mono text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#090D16]" />
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
