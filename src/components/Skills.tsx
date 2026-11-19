import React from 'react';
import { Cpu, Network, CheckSquare } from 'lucide-react';
import { PORTFOLIO_DATA, SkillGroup } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const GROUP_ICONS: Record<string, React.ElementType> = {
  'autoid-hardware': Cpu,
  'systems-integration': Network,
  'consulting-delivery': CheckSquare
};

export const Skills: React.FC = () => {
  const { skillGroups } = PORTFOLIO_DATA;

  return (
    <section id="skills" data-section-theme="light" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A] mb-3 shadow-xs">
            [ 05 // CAPABILITIES CONSOLE ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
            Interactive Capabilities Console
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Direct hands-on engineering across Auto-ID hardware, enterprise middleware, systems integration, and field deployment.
          </p>
        </div>

        {/* 3 Capabilities Console Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {skillGroups.map((group: SkillGroup, idx: number) => {
            const Icon = GROUP_ICONS[group.id] || Cpu;
            const cardNumber = `0${idx + 1}`;

            return (
              <div
                key={group.id}
                className="group relative rounded-2xl bg-white border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-400 hover:shadow-[0_12px_32px_-12px_rgba(15,23,42,0.12)] transition-all duration-300"
              >
                <div>
                  {/* Card Header: Icon + Number Capsule */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] border border-[#E2E8F0] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-[#F4F4F0] border border-[#E2E8F0] text-slate-700 tracking-wider">
                      [ CARD {cardNumber} ]
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-[#1A1A1A] leading-snug">
                    {group.category}
                  </h3>

                  {/* Top Tier: Core Focus (High-Level Engineering Control) */}
                  <div className="mt-4 mb-6 pb-5 border-b border-[#E2E8F0]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5">
                      Core Focus:
                    </span>
                    <p className="text-sm text-[#1A1A1A] font-semibold leading-relaxed">
                      {group.coreFocus}
                    </p>
                  </div>

                  {/* Bottom Tier: Pill-Tags / Chips Grid (Zero Bullets) */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      Technologies &amp; Protocols ({group.skills.length})
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#F8F9FA] hover:bg-[#0F172A] text-slate-700 hover:text-white border border-[#E2E8F0] hover:border-[#0F172A] font-mono text-[11px] tracking-wide font-medium transition-all duration-150 cursor-default shadow-2xs hover:scale-102 select-none"
                        >
                          [ {skill} ]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Mastery Status */}
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  <span>Execution Tier</span>
                  <span className="text-[#1A1A1A] font-bold">100% Field Proven</span>
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
