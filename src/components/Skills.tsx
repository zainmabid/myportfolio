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
    <section id="skills" className="py-20 sm:py-28 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            05 // TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Skills and Hardware
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            Direct hands-on engineering across Auto-ID hardware, enterprise middleware, systems integration, and field deployment.
          </p>
        </div>

        {/* 3 Grouped Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.id] || Cpu;

            return (
              <div
                key={group.id}
                className="bg-[var(--bg)] border border-[var(--line)] border-t-4 border-t-[var(--accent)] rounded-[6px] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[var(--line)]">
                    <Icon className="w-5 h-5 text-[var(--secondary)]" />
                    <h3 className="font-heading text-lg font-bold tracking-tight text-[var(--ink)]">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {group.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--ink)] font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--line)] font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
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
