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
  const { badges, googleProfileUrl, credlyProfileUrl } = PORTFOLIO_DATA;
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
    <section id="badges" className="py-28 sm:py-36 border-b border-slate-200 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading & Verification Profile CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-[11px] uppercase tracking-wider text-[#0F172A] mb-3 shadow-xs">
              [ 06 // VERIFIED SKILL BADGES ]
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
              Verified Badges &amp; Micro-Credentials
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              Official credentials spanning Google Cloud enterprise AI, Internet Society digital governance, and industry-standard cybersecurity frameworks.
            </p>
          </div>

          {/* Quick Profile Verification Links */}
          <div className="shrink-0 flex flex-wrap items-center gap-2.5">
            <a
              href={credlyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-[#0F172A] text-xs font-mono font-medium transition-all shadow-xs group"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Credly Profile (PMI &amp; IBM)</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0F172A] transition-colors" />
            </a>

            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-[#0F172A] text-xs font-mono font-medium transition-all shadow-xs group"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Google Skills Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0F172A] transition-colors" />
            </a>
          </div>
        </div>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-200">
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
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-[#0F172A]'
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
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#475569] pb-2 mb-2 border-b border-slate-200 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#0F172A]" />
                <span>Credentials ({filteredBadges.length})</span>
              </span>
              <span className="text-[10px] text-slate-600 font-semibold">Hover to Inspect</span>
            </div>

            {/* Scrollable list with node timeline */}
            <div className="relative pl-4 sm:pl-6 border-l-2 border-slate-200 space-y-3 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredBadges.map((badge) => {
                const isActive = badge.id === activeBadge.id;

                return (
                  <button
                    key={badge.id}
                    onMouseEnter={() => setSelectedId(badge.id)}
                    onClick={() => setSelectedId(badge.id)}
                    className={`relative w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 group cursor-pointer block ${
                      isActive
                        ? 'bg-white border-[#0F172A] shadow-sm -translate-r-0.5'
                        : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
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
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-700 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 truncate max-w-[170px]">
                        {badge.category}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500 shrink-0 flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 text-slate-600" />
                        {badge.date}
                      </span>
                    </div>

                    {/* Badge Title & Mini Preview */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 p-0.5 shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={badge.image}
                          alt=""
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className={`font-heading text-xs sm:text-sm font-bold tracking-tight line-clamp-1 transition-colors ${
                            isActive ? 'text-[#0F172A]' : 'text-slate-700'
                          }`}
                        >
                          {badge.title}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500 truncate mt-0.5">
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
            <div className="relative rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden min-h-[480px]">
              {/* Header Bar */}
              <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#475569]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
                  <span>CREDENTIAL // BADGE-0{activeIdx + 1}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#0F172A] font-semibold">
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
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                    {/* Badge Artwork Container */}
                    <div className="relative shrink-0 group">
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-slate-50 border border-slate-200 p-3 flex items-center justify-center shadow-xs">
                        <img
                          src={activeBadge.image}
                          alt={activeBadge.title}
                          className="w-full h-full object-contain filter drop-shadow-sm transform group-hover:scale-103 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Header Info */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 font-mono text-[10px] uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                        <Calendar className="w-3 h-3" />
                        {activeBadge.date}
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F172A] leading-snug">
                        {activeBadge.title}
                      </h3>

                      <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">
                        {activeBadge.issuer}
                      </div>

                      <div className="mt-2.5 inline-block font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700">
                        {activeBadge.category}
                      </div>
                    </div>
                  </div>

                  {/* Operational Summary Callout */}
                  <div className="mt-5 p-4 rounded-xl bg-slate-50 border-l-4 border-[#0F172A] text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#475569] mb-1 font-bold">
                      CURRICULUM &amp; VALIDATED EXPERTISE
                    </div>
                    {activeBadge.description}
                  </div>

                  {/* Verification CTA Action Bar */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                      {activeBadge.group}
                    </span>
                    <span className="text-[#0F172A] font-semibold">
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
