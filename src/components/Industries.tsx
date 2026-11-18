import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield,
  Landmark,
  GraduationCap,
  Factory,
  Building2,
  Database,
  QrCode,
  Package,
  Paintbrush,
  Warehouse,
  ChevronDown,
  Lock
} from 'lucide-react';
import { PORTFOLIO_DATA, ImpactVertical, SubSectorItem } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const PARENT_ICON_MAP = {
  Shield,
  Landmark,
  GraduationCap,
  Factory
};

const MICRO_ICON_MAP = {
  Building2,
  Database,
  GraduationCap,
  QrCode,
  Package,
  Paintbrush,
  Warehouse
};

export const Industries: React.FC = () => {
  const { impactVerticals } = PORTFOLIO_DATA;
  // State to track which parent cards are expanded
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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

        {/* 4 Main Parent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {impactVerticals.map((vertical: ImpactVertical) => {
            const ParentIcon = PARENT_ICON_MAP[vertical.iconName] || Shield;
            const isExpanded = !!expandedIds[vertical.id];
            const canExpand = vertical.canExpand && vertical.subSectors && vertical.subSectors.length > 0;

            return (
              <article
                key={vertical.id}
                className={`group relative rounded-2xl bg-white border transition-all duration-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm ${
                  isExpanded ? 'border-slate-400 shadow-md' : 'border-[#E2E8F0] hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Action / Status Pill */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F4F4F0] border border-[#E2E8F0] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-colors shadow-xs shrink-0">
                      <ParentIcon className="w-5 h-5" />
                    </div>

                    {/* Status / Expand Action */}
                    {vertical.statusTag === 'Classified Scope' ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold px-3 py-1.5 rounded-lg bg-[#F4F4F0] border border-[#E2E8F0] text-slate-700 tracking-wider">
                        <Lock className="w-3 h-3 text-slate-500" />
                        <span>Classified Scope</span>
                      </span>
                    ) : canExpand ? (
                      <button
                        type="button"
                        onClick={() => toggleExpand(vertical.id)}
                        className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer tracking-wider ${
                          isExpanded
                            ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                            : 'bg-[#F4F4F0] hover:bg-slate-200 text-[#1A1A1A] border-[#E2E8F0]'
                        }`}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle sub-sectors for ${vertical.title}`}
                      >
                        <span>{isExpanded ? 'Close Sub-Sectors' : `Explore ${vertical.subSectors?.length} Sub-Sectors`}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : null}
                  </div>

                  {/* Parent Title & Description */}
                  <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-[#1A1A1A] leading-snug">
                    {vertical.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#475569] leading-relaxed font-normal">
                    {vertical.description}
                  </p>
                </div>

                {/* Footer Domain Scope Tag */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500">
                  <span>Domain Scope</span>
                  <span className="text-[#1A1A1A] font-semibold">
                    [ {vertical.tag.split('//')[0].trim()} ]
                  </span>
                </div>

                {/* Smooth Expanding Drawer for Sub-Sectors */}
                <AnimatePresence>
                  {isExpanded && vertical.subSectors && (
                    <motion.div
                      key={`drawer-${vertical.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                        <div className="p-4 sm:p-5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
                          <div className="mb-3.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                            <span className="font-semibold text-slate-700">Sub-Sectors &amp; Deployments</span>
                            <span>{vertical.subSectors.length} Nodes</span>
                          </div>

                          {/* Dynamic Sub-Sectors Grid: 3-cols for 3 items, 2-cols for 2 items */}
                          <div
                            className={`grid gap-3 ${
                              vertical.subSectors.length >= 3
                                ? 'grid-cols-1 sm:grid-cols-3'
                                : 'grid-cols-1 sm:grid-cols-2'
                            }`}
                          >
                            {vertical.subSectors.map((sub: SubSectorItem, sIdx: number) => {
                              const MicroIcon = MICRO_ICON_MAP[sub.iconName] || Package;
                              const subLetter = String.fromCharCode(65 + sIdx); // A, B, C

                              return (
                                <div
                                  key={sub.id}
                                  className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-slate-300 transition-colors shadow-2xs flex flex-col justify-between text-left"
                                >
                                  <div>
                                    {/* Top Micro Row: Micro-Icon + Micro-Pill Tag */}
                                    <div className="flex items-center justify-between gap-1.5 mb-2">
                                      <div className="flex items-center gap-1.5">
                                        <MicroIcon className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                                          Sub-Sector {subLetter}
                                        </span>
                                      </div>

                                      <span className="font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#F4F4F0] border border-[#E2E8F0] text-slate-600 font-semibold shrink-0">
                                        {sub.statusTag}
                                      </span>
                                    </div>

                                    {/* Sub-Sector Title */}
                                    <h4 className="font-subheading text-xs sm:text-[13px] font-bold text-[#1A1A1A] leading-snug">
                                      {sub.title}
                                    </h4>

                                    {/* Sub-Sector Description */}
                                    <p className="mt-1.5 text-[11px] sm:text-xs text-[#475569] leading-relaxed font-normal">
                                      {sub.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        <BarcodeDivider label="SECTION // 03-04" />
      </div>
    </section>
  );
};
