import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  ExternalLink,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Award,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA, BadgeGroup, VerifiedBadge } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const FILTER_GROUPS: BadgeGroup[] = [
  'All',
  'Credly (PMI & IBM)',
  'Google Cloud & Gemini',
  'Internet Society (ISOC)'
];

export const GoogleBadges: React.FC = () => {
  const { badges, googleProfileUrl, googleDevProfileUrl, credlyProfileUrl, isocProfileUrl } = PORTFOLIO_DATA;
  const [selectedGroup, setSelectedGroup] = useState<BadgeGroup>('All');

  // Filtered badges based on group
  const filteredBadges = useMemo(() => {
    if (selectedGroup === 'All') return badges;
    return badges.filter((b) => b.group === selectedGroup);
  }, [badges, selectedGroup]);

  // Selected badge state
  const [selectedId, setSelectedId] = useState<string>(filteredBadges[0]?.id || badges[0]?.id || '');

  // Ensure selected badge belongs to filtered set or reset to first
  const activeBadge: VerifiedBadge =
    filteredBadges.find((b) => b.id === selectedId) || filteredBadges[0] || badges[0];
  const activeIdx = filteredBadges.findIndex((b) => b.id === activeBadge?.id);

  return (
    <section id="badges" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading & Verification Profile CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A] mb-3 shadow-xs">
              [ 06 // VERIFIED SKILL BADGES ]
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
              Verified Badges &amp; Micro-Credentials
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              Official credentials spanning Google Cloud enterprise AI, Internet Society digital governance, and industry-standard cybersecurity frameworks.
            </p>
          </div>

          {/* Quick Profile Verification Links: 2 Rows to preserve layout rhythm */}
          <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full sm:w-auto">
            <a
              href={credlyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-slate-400 text-[#1A1A1A] text-xs font-mono font-medium transition-all shadow-xs group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>PMI &amp; IBM</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1A1A1A] transition-colors shrink-0" />
            </a>

            <a
              href={googleDevProfileUrl || 'https://me.developers.google.com/u/zainmabid'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-slate-400 text-[#1A1A1A] text-xs font-mono font-medium transition-all shadow-xs group"
              title="Google Developer Profile"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Developers</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1A1A1A] transition-colors shrink-0" />
            </a>

            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-slate-400 text-[#1A1A1A] text-xs font-mono font-medium transition-all shadow-xs group"
              title="Google Cloud Skills Boost Profile"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Skills</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1A1A1A] transition-colors shrink-0" />
            </a>

            <a
              href={isocProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-slate-400 text-[#1A1A1A] text-xs font-mono font-medium transition-all shadow-xs group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Internet Society</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1A1A1A] transition-colors shrink-0" />
            </a>
          </div>
        </div>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#E2E8F0]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#475569] mr-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-600" />
            <span>Category:</span>
          </span>
          {FILTER_GROUPS.map((group) => {
            const count =
              group === 'All'
                ? badges.length
                : badges.filter((b) => b.group === group).length;
            const isSelected = selectedGroup === group;

            return (
              <button
                key={group}
                onClick={() => {
                  setSelectedGroup(group);
                  const firstOfGroup =
                    group === 'All' ? badges[0] : badges.find((b) => b.group === group);
                  if (firstOfGroup) setSelectedId(firstOfGroup.id);
                }}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F172A] text-white border-[#0F172A] font-semibold shadow-xs'
                    : 'bg-white text-slate-600 border-[#E2E8F0] hover:border-slate-300 hover:text-[#1A1A1A]'
                }`}
              >
                <span>{group}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Master-Detail Interactive Grid: Left Rail + Right Interactive Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Vertical Rail / Badges List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#475569] pb-2 mb-2 border-b border-[#E2E8F0] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <span>Credentials ({filteredBadges.length})</span>
              </span>
              <span className="text-[10px] text-slate-600 font-semibold">Hover to Inspect</span>
            </div>

            {/* Scrollable list with node timeline */}
            <div className="relative pl-4 sm:pl-6 border-l-2 border-slate-300 space-y-3 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredBadges.map((badge) => {
                const isActive = badge.id === activeBadge.id;

                return (
                  <button
                    key={badge.id}
                    onMouseEnter={() => setSelectedId(badge.id)}
                    onClick={() => setSelectedId(badge.id)}
                    className={`relative w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 group cursor-pointer block ${
                      isActive
                        ? 'bg-white border-2 border-[#0F172A] shadow-md ring-2 ring-slate-900/10 -translate-r-0.5'
                        : 'bg-[#FAFAFA] hover:bg-white border-[#E2E8F0] hover:border-slate-300'
                    }`}
                  >
                    {/* Node Dot on Left Vertical Line */}
                    <div
                      className={`absolute -left-[23px] sm:-left-[31px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                        isActive
                          ? 'bg-[#0F172A] border-white ring-4 ring-slate-200 scale-125'
                          : 'bg-slate-300 border-white'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Header Row: Issuer & Date */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-700 px-2 py-0.5 rounded-md bg-[#F4F4F0] border border-[#E2E8F0] truncate max-w-[170px]">
                        {badge.category}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500 shrink-0 flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 text-slate-600" />
                        {badge.date}
                      </span>
                    </div>

                    {/* Badge Title & Mini Preview */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#F4F4F0] border border-[#E2E8F0] p-0.5 shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={badge.image}
                          alt=""
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className={`font-subheading text-xs sm:text-sm font-bold tracking-tight line-clamp-1 transition-colors ${
                            isActive ? 'text-[#0F172A]' : 'text-slate-700'
                          }`}
                        >
                          {badge.title}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-[#475569] truncate mt-0.5">
                          {badge.issuer}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                          isActive
                            ? 'text-[#0F172A] translate-x-1'
                            : 'opacity-0 group-hover:opacity-100 text-slate-400'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Badge Detail Window (Sticky) - Flat Crisp White Card */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative rounded-2xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-md overflow-hidden min-h-[480px]">
              {/* Header Bar */}
              <div className="px-5 py-3.5 border-b border-[#E2E8F0] bg-[#F4F4F0] flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#475569]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
                  <span>CREDENTIAL // BADGE-0{activeIdx + 1}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#1A1A1A] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{activeBadge.verificationType || 'Verified Credential'}</span>
                </div>
              </div>

              {/* Animated Detail Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBadge.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="p-6 sm:p-8"
                >
                  {/* Badge Art Showcase & Metadata */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#E2E8F0]">
                    {/* Badge Artwork Container */}
                    <div className="relative shrink-0 group">
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#F4F4F0] border border-[#E2E8F0] p-3 flex items-center justify-center shadow-xs">
                        <img
                          src={activeBadge.image}
                          alt={activeBadge.title}
                          className="w-full h-full object-contain filter drop-shadow-sm transform group-hover:scale-103 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Header Info */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] font-mono text-[10px] uppercase tracking-wider text-[#475569] font-semibold mb-2">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {activeBadge.date}
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#0F172A] leading-snug">
                        {activeBadge.title}
                      </h3>

                      <div className="font-mono text-xs uppercase tracking-wider text-[#475569] font-semibold mt-1">
                        {activeBadge.issuer}
                      </div>

                      <div className="mt-2.5 inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] font-medium">
                        {activeBadge.category}
                      </div>
                    </div>
                  </div>

                  {/* Operational Summary Callout - Isolated Offset Box with Software Shadow */}
                  <div className="mt-5 p-5 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] border-l-4 border-l-[#0F172A] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-left">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#475569] mb-1.5 font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                      <span>CURRICULUM &amp; VALIDATED EXPERTISE</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-normal">
                      {activeBadge.description}
                    </p>
                  </div>

                  {/* Verification CTA Action Bar */}
                  <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-mono text-[11px] text-[#475569]">
                        Cryptographically registered and publicly audit-ready
                      </span>
                    </div>

                    <a
                      href={activeBadge.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F172A] text-white font-mono text-xs font-bold hover:bg-[#1E293B] transition-all shadow-sm shrink-0"
                    >
                      <span>
                        {activeBadge.badgeUrl.includes('credly.com')
                          ? 'Verify on Credly'
                          : activeBadge.badgeUrl.includes('skills.google')
                          ? 'Verify on Google Skills'
                          : activeBadge.badgeUrl.includes('credential.net')
                          ? 'Verify on Accredible'
                          : 'Verify Credential'}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Window Bottom Metadata Bar */}
                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                      {activeBadge.group}
                    </span>
                    <span className="text-[#1A1A1A] font-semibold">
                      {activeIdx + 1} / {filteredBadges.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-16">
          <BarcodeDivider />
        </div>
      </div>
    </section>
  );
};
