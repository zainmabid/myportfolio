import React from 'react';
import { Cpu, Shield, Server, FileCheck } from 'lucide-react';
import { PORTFOLIO_DATA, PillarItem } from '@/data/content';

export const Projects: React.FC = () => {
  const { pillars } = PORTFOLIO_DATA;

  // Icon mapping for each pillar
  const getPillarIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Cpu className="w-5 h-5 text-[#1A1A1A]" />;
      case '02':
        return <Shield className="w-5 h-5 text-[#1A1A1A]" />;
      case '03':
        return <Server className="w-5 h-5 text-[#1A1A1A]" />;
      case '04':
        return <FileCheck className="w-5 h-5 text-[#1A1A1A]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#1A1A1A]" />;
    }
  };

  const getPillarFooterTag = (number: string) => {
    switch (number) {
      case '01':
        return 'REAL-TIME AUTOMATION';
      case '02':
        return 'HIGH-SECURITY & GOVTECH';
      case '03':
        return 'SCALABLE ERP SUITES';
      case '04':
        return 'PPRA & UNGM VETTING';
      default:
        return 'STRATEGIC ARCHITECTURE';
    }
  };

  return (
    <section id="work" data-section-theme="light" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]">
      <div id="expertise" className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A] mb-3 shadow-xs">
            [ CORE PILLARS // STRATEGIC ARCHITECTURE ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A] leading-tight">
            Core Pillars of Expertise
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            Bridging operational factory floor hardware, mission-critical GovTech deployments, enterprise ERP suites, and competitive public procurement.
          </p>
        </div>

        {/* 4 Distinct Boxes / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {pillars.map((pillar: PillarItem) => (
            <article
              key={pillar.id}
              className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl border border-[#E2E8F0] bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm"
            >
              <div>
                {/* Top Labels Row: Monospace capsule tag & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-[#F4F4F0] border border-[#E2E8F0] text-[#1A1A1A] tracking-wider">
                      [ PILLAR {pillar.number} ]
                    </span>
                    <span className="font-mono text-[10px] uppercase font-medium px-2.5 py-1 rounded-md bg-[#F4F4F0] border border-[#E2E8F0] text-slate-600 tracking-wider">
                      [ {pillar.tag} ]
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover:border-slate-400 group-hover:scale-105 transition-all duration-200">
                    {getPillarIcon(pillar.number)}
                  </div>
                </div>

                {/* Pillar Title */}
                <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-[-0.02em] leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <div className="space-y-4">
                  {pillar.points.map((point, idx) => (
                    <div key={idx} className="text-sm leading-relaxed">
                      <span className="font-subheading font-bold text-[#1A1A1A] block mb-1">
                        • {point.title}:
                      </span>
                      <p className="text-[#475569] font-normal leading-relaxed pl-3 border-l-2 border-slate-200">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-[10px] uppercase tracking-wider text-[#94A3B8]">
                  DOMAIN FOCUS
                </span>
                <span className="text-[#1A1A1A] font-semibold text-[11px] tracking-wide">
                  [ {getPillarFooterTag(pillar.number)} ]
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
