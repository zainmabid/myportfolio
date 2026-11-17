import React from 'react';
import { Cpu, Network, CheckSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const GROUP_ICONS: Record<string, React.ElementType> = {
  'autoid-hardware': Cpu,
  'systems-integration': Network,
  'consulting-delivery': CheckSquare
};

export const Skills: React.FC = () => {
  const { skillGroups } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-28 sm:py-36 border-b border-slate-200 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-[11px] uppercase tracking-wider text-[#0F172A] mb-3 shadow-xs">
            05 // TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
            Skills and Hardware
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Direct hands-on engineering across Auto-ID hardware, enterprise middleware, systems integration, and field deployment.
          </p>
        </div>

        {/* 3 Grouped Columns: Flat, crisp white cards: bg-white border border-slate-100 rounded-2xl shadow-sm p-8 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.id] || Cpu;

            return (
              <div
                key={group.id}
                className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0F172A]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-[#0F172A]">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {group.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-[#0F172A] font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {group.skills.length} Validated Capabilities
                </div>
              </div>
            );
          })}
        </div>

        <BarcodeDivider label="SECTION // 05-06" />
      </div>
    </section>
  );
};
