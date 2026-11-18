import React from 'react';
import { 
  Shield,
  Landmark,
  GraduationCap,
  Factory,
  Package, 
  Paintbrush, 
  Warehouse, 
  Building2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const ICON_MAP = {
  Package,
  GraduationCap,
  Paintbrush,
  Factory,
  Warehouse,
  Landmark,
  Building2,
  Shield
};

export const Industries: React.FC = () => {
  const { industries, impactVerticals } = PORTFOLIO_DATA;

  return (
    <section id="industries" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A] mb-3 shadow-xs">
            [ 03 // SECTORS &amp; VERTICALS ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
            Industries
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Operational traceability, asset visibility, and Auto-ID implementations tailored to specific vertical constraints.
          </p>
        </div>

        {/* Industry Impact Verticals (Trust Indicators) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-[#E2E8F0]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                [ PROVEN DELIVERY // TRUST INDICATORS ]
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
                Industry Impact Verticals
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] max-w-md font-normal">
              High-stakes operational domains with proven executive delivery and mission-critical systems integration.
            </p>
          </div>

          {/* 4 Distinct Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {impactVerticals.map((vertical) => {
              const Icon = ICON_MAP[vertical.iconName] || Shield;
              return (
                <div
                  key={vertical.id}
                  className="group relative p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-slate-400 hover:shadow-md transition-all duration-200 shadow-sm flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Icon & Capsule Row */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#F4F4F0] border border-[#E2E8F0] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[9px] uppercase font-semibold px-2 py-0.5 rounded bg-[#F4F4F0] border border-[#E2E8F0] text-slate-600 tracking-wider">
                        TRUST VERIFIED
                      </span>
                    </div>

                    <h4 className="font-subheading text-lg font-bold tracking-[-0.015em] text-[#1A1A1A] leading-snug">
                      {vertical.title}
                    </h4>

                    <p className="mt-2.5 text-sm text-[#475569] leading-relaxed font-normal">
                      {vertical.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span>Focus Area</span>
                    <span className="text-[#1A1A1A] font-semibold">
                      [ {vertical.tag.split('//')[0].trim()} ]
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sector Experience Grid */}
        <div className="pt-8 border-t border-[#E2E8F0]">
          <div className="mb-8">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
              [ COMPREHENSIVE SECTOR EXPERTISE ]
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-[-0.015em] text-[#1A1A1A]">
              Specialized Operational Coverage
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ICON_MAP[ind.iconName] || Package;
              return (
                <div
                  key={ind.id}
                  className="group p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-slate-400 hover:shadow-md transition-all duration-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#F4F4F0] border border-[#E2E8F0] flex items-center justify-center text-[#1A1A1A] mb-5 group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="font-subheading text-lg font-bold tracking-[-0.015em] text-[#1A1A1A]">
                      {ind.title}
                    </h4>

                    <p className="mt-2 text-sm text-[#475569] leading-relaxed font-normal">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    <span>Sector Scope</span>
                    <span className="text-[#1A1A1A] font-semibold">Active</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BarcodeDivider label="SECTION // 03-04" />
      </div>
    </section>
  );
};
