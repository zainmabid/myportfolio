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
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
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
  // Position 1 (gov-tax) selected by default so right panel is active
  const [selectedId, setSelectedId] = useState<string>('gov-tax');

  const selectedVertical = impactVerticals.find((v) => v.id === selectedId) || impactVerticals[0];

  const handleCardClick = (vertical: ImpactVertical) => {
    // If not expandable, still set selected to show confidentiality note on right panel
    setSelectedId(vertical.id);
  };

  return (
    <section id="industries" data-section-theme="light" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]">
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

        {/* Master-Detail Split Grid (Left: 4 Parent Cards, Right: Expanded Sub-Sectors Panel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols on desktop): 4 Parent Cards Stacked */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {impactVerticals.map((vertical: ImpactVertical) => {
              const ParentIcon = PARENT_ICON_MAP[vertical.iconName] || Shield;
              const isSelected = selectedId === vertical.id;
              const isClassified = vertical.id === 'strategic-defense' || !vertical.canExpand;
              const subCount = vertical.subSectors?.length || 0;

              return (
                <div key={vertical.id} className="flex flex-col">
                  {/* Left Card */}
                  <div
                    onClick={() => handleCardClick(vertical)}
                    className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-200 text-left select-none ${
                      isClassified ? 'cursor-pointer' : 'cursor-pointer'
                    } ${
                      isSelected
                        ? 'bg-white border-slate-900 shadow-md opacity-100 ring-1 ring-slate-900'
                        : 'bg-white/80 border-[#E2E8F0] opacity-60 hover:opacity-100 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Top Row: Icon + Custom Pill */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors shadow-xs ${
                          isSelected
                            ? 'bg-[#0F172A] text-white border-[#0F172A]'
                            : 'bg-[#F4F4F0] text-[#1A1A1A] border-[#E2E8F0]'
                        }`}
                      >
                        <ParentIcon className="w-5 h-5" />
                      </div>

                      {/* Pill Badge */}
                      {isClassified ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg bg-[#F4F4F0] border border-[#E2E8F0] text-slate-700 tracking-wider">
                          <Lock className="w-3 h-3 text-slate-500" />
                          <span>CLASSIFIED SCOPE</span>
                        </span>
                      ) : (
                        <span
                          className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg border tracking-wider transition-all ${
                            isSelected
                              ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                              : 'bg-[#F4F4F0] text-[#1A1A1A] border-[#E2E8F0] group-hover:border-slate-300'
                          }`}
                        >
                          <span>EXPLORE {subCount} SUB-SECTORS</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold tracking-[-0.015em] text-[#1A1A1A] leading-snug">
                      {vertical.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {vertical.description}
                    </p>

                    {/* Domain Tag */}
                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      <span>Domain Scope</span>
                      <span className="text-[#1A1A1A] font-semibold">
                        [ {vertical.tag.split('//')[0].trim()} ]
                      </span>
                    </div>
                  </div>

                  {/* Mobile-Only Inline Accordion (Slides down directly on small screens) */}
                  <div className="lg:hidden">
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          key={`mobile-panel-${vertical.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden mt-2 mb-4"
                        >
                          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs space-y-3">
                            {vertical.subSectors ? (
                              vertical.subSectors.map((sub: SubSectorItem, sIdx: number) => {
                                const MicroIcon = MICRO_ICON_MAP[sub.iconName] || Package;
                                const subLetter = String.fromCharCode(65 + sIdx);

                                return (
                                  <div
                                    key={sub.id}
                                    className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs text-left"
                                  >
                                    <div className="flex items-center justify-between gap-2 mb-1.5">
                                      <div className="flex items-center gap-1.5">
                                        <MicroIcon className="w-3.5 h-3.5 text-slate-700" />
                                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                                          Sub-Sector {subLetter}
                                        </span>
                                      </div>
                                      <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4F4F0] border border-[#E2E8F0] text-slate-700 font-semibold">
                                        {sub.statusTag}
                                      </span>
                                    </div>
                                    <h4 className="font-subheading text-xs font-bold text-[#1A1A1A]">
                                      {sub.title}
                                    </h4>
                                    <p className="mt-1 text-[11px] text-[#475569] leading-relaxed">
                                      {sub.description}
                                    </p>
                                  </div>
                                );
                              })
                            ) : (
                              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-left space-y-2">
                                <div className="flex items-center gap-2 text-slate-700">
                                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
                                    Confidentiality Protocol
                                  </span>
                                </div>
                                <p className="text-xs text-[#475569] leading-relaxed">
                                  To uphold strict non-disclosure agreements (NDAs), project architectures and internal tech frameworks for strategic defense are completely anonymized.
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols on desktop): Right-Expanded Content Display Panel */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVertical.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-white border border-[#E2E8F0] p-8 sm:p-9 shadow-sm text-left flex flex-col justify-between min-h-[480px]"
              >
                <div>
                  {/* Right Panel Header */}
                  <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-[#F4F4F0] border border-[#E2E8F0] text-[#1A1A1A] tracking-wider">
                        [ {selectedVertical.tag} ]
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      {selectedVertical.subSectors ? `${selectedVertical.subSectors.length} Deployed Sub-Sectors` : 'Classified Scope'}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl font-bold tracking-[-0.015em] text-[#1A1A1A]">
                      {selectedVertical.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      {selectedVertical.description}
                    </p>
                  </div>

                  {/* Sub-Sectors Display (Position 1, 2, 3) */}
                  {selectedVertical.subSectors && selectedVertical.subSectors.length > 0 ? (
                    <div className="space-y-4">
                      {selectedVertical.subSectors.map((sub: SubSectorItem, sIdx: number) => {
                        const MicroIcon = MICRO_ICON_MAP[sub.iconName] || Package;
                        const subLetter = String.fromCharCode(65 + sIdx);

                        return (
                          <div
                            key={sub.id}
                            className="p-5 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] hover:border-slate-300 transition-all shadow-2xs text-left"
                          >
                            {/* Top Micro-Row: Micro-Icon + Sub-Sector Identifier + Status Pill */}
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <MicroIcon className="w-4 h-4 text-slate-700" />
                                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                                  Sub-Sector {subLetter}
                                </span>
                              </div>

                              <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-[#E2E8F0] text-slate-700 font-semibold shadow-2xs">
                                {sub.statusTag}
                              </span>
                            </div>

                            {/* Sub-Sector Content */}
                            <h4 className="font-subheading text-base font-bold text-[#1A1A1A]">
                              {sub.title}
                            </h4>
                            <p className="mt-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                              {sub.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Position 4: Strategic & Defense Confidentiality Panel */
                    <div className="p-7 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] space-y-4 text-left">
                      <div className="flex items-center gap-2 text-slate-800">
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center shadow-xs">
                          <Lock className="w-4 h-4 text-slate-700" />
                        </div>
                        <div>
                          <span className="font-mono text-[11px] uppercase font-bold tracking-wider block text-[#1A1A1A]">
                            National Security Compliance
                          </span>
                          <span className="font-mono text-[10px] text-slate-500 uppercase">
                            Non-Disclosure Enforced
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                        <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                          "To uphold strict non-disclosure agreements (NDAs), project architectures and internal tech frameworks for strategic defense are completely anonymized."
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Zero-Trust Infrastructure &amp; Multi-Tier Air-Gapped Deployments</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Panel Footer */}
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="text-[10px] uppercase">Architecture Tier</span>
                  <span className="text-[#1A1A1A] font-semibold text-[11px]">
                    Validated Field Implementation
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16">
          <BarcodeDivider label="SECTION // 03-04" />
        </div>
      </div>
    </section>
  );
};
