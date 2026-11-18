import React from 'react';
import { 
  Package, 
  GraduationCap, 
  Paintbrush, 
  Factory, 
  Warehouse, 
  Landmark, 
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
  Building2
};

export const Industries: React.FC = () => {
  const { industries } = PORTFOLIO_DATA;

  return (
    <section id="industries" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A] mb-3 shadow-xs">
            03 // SECTORS &amp; VERTICALS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
            Industries
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Operational traceability, asset visibility, and Auto-ID implementations tailored to specific vertical constraints.
          </p>
        </div>

        {/* Clean Grid of Industry Tiles: Flat, crisp white cards: bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-md p-8 */}
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

                  <h3 className="font-subheading text-lg font-bold tracking-[-0.015em] text-[#1A1A1A]">
                    {ind.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">
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

        <BarcodeDivider label="SECTION // 03-04" />
      </div>
    </section>
  );
};
