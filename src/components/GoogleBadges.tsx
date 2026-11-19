import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  ExternalLink,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Award,
  Layers,
  Search,
  LayoutGrid,
  Columns
} from 'lucide-react';
import { PORTFOLIO_DATA, BadgeGroup, VerifiedBadge } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const FILTER_GROUPS: BadgeGroup[] = [
  'All',
  'Google Cloud & Gemini',
  'Internet Society (ISOC)',
  'Credly (PMI & IBM)',
  'Cloud, Security & Agile'
];

export const GoogleBadges: React.FC = () => {
  const { badges, googleProfileUrl, googleDevProfileUrl, credlyProfileUrl, isocProfileUrl } = PORTFOLIO_DATA;
  const [selectedGroup, setSelectedGroup] = useState<BadgeGroup>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'inspector'>('grid');
  const [showAll, setShowAll] = useState(false);

  // Filtered badges based on group and search query
  const filteredBadges = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return badges.filter((b) => {
      const matchesGroup = selectedGroup === 'All' || b.group === selectedGroup;
      const matchesSearch =
        q === '' ||
        b.title.toLowerCase().includes(q) ||
        b.issuer.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q);
      return matchesGroup && matchesSearch;
    });
  }, [badges, selectedGroup, searchQuery]);

  // Selected badge state for inspector view
  const [selectedId, setSelectedId] = useState<string>(filteredBadges[0]?.id || badges[0]?.id || '');

  // Active badge in inspector view
  const activeBadge: VerifiedBadge =
    filteredBadges.find((b) => b.id === selectedId) || filteredBadges[0] || badges[0];
  const activeIdx = filteredBadges.findIndex((b) => b.id === activeBadge?.id);

  // Helper for verification link text
  const getVerificationLabel = (url: string) => {
    if (url.includes('credly.com')) return 'Verify on Credly';
    if (url.includes('developers.google')) return 'Verify on Google Dev';
    if (url.includes('skills.google')) return 'Verify on Google Skills';
    if (url.includes('credential.net')) return 'Verify on Accredible';
    return 'Verify Credential';
  };

  const visibleGridItems = showAll ? filteredBadges : filteredBadges.slice(0, 12);
  const hasMoreThanLimit = filteredBadges.length > 12;

  return (
    <section id="badges" data-section-theme="light" className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading & Verification Profile CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A] mb-3 shadow-xs">
              [ 06 // VERIFIED SKILL BADGES ({badges.length}) ]
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
              Verified Badges &amp; Micro-Credentials
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              Official public credentials spanning Google Cloud enterprise AI, Internet Society digital governance, IBM cloud systems, and industry-standard agile frameworks.
            </p>
          </div>

          {/* Quick Profile Verification Links: 4 Grid Cards */}
          <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full lg:w-auto">
            <a
              href={credlyProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-slate-400 text-[#1A1A1A] text-xs font-mono font-medium transition-all shadow-xs group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold">Credly Profile</span>
                <span className="text-[10px] text-slate-500 font-normal">(PMI &amp; IBM)</span>
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
                <span className="font-bold">Google Developers</span>
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
                <span className="font-bold">Google Cloud Skills</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1A1A1A] transition-colors shrink-0" />
            </a>

            <a
              href={isocProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-slate-400 text-[#1A1A1A] text-xs font-mono font-medium transition-all shadow-xs group"
              title="Internet Society Accredible Wallet"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold">Internet Society</span>
                <span className="text-[10px] text-slate-500 font-normal">(Accredible)</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#1A1A1A] transition-colors shrink-0" />
            </a>
          </div>
        </div>

        {/* Filter & Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#E2E8F0]">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#475569] mr-1 flex items-center gap-1.5">
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
                  className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F172A] text-white border-[#0F172A] font-bold shadow-xs'
                      : 'bg-white text-slate-600 border-[#E2E8F0] hover:border-slate-300 hover:text-[#1A1A1A]'
                  }`}
                >
                  <span>{group}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 font-semibold'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search Input + View Mode Switcher */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search badges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] text-xs text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:border-slate-500 shadow-2xs"
              />
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#0F172A] text-white shadow-2xs'
                    : 'text-slate-500 hover:text-[#1A1A1A]'
                }`}
                title="Grid Gallery View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('inspector')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'inspector'
                    ? 'bg-[#0F172A] text-white shadow-2xs'
                    : 'text-slate-500 hover:text-[#1A1A1A]'
                }`}
                title="Inspector View"
              >
                <Columns className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* --- VIEW 1: MODERN GRID GALLERY (Recommended & Default) --- */}
        {viewMode === 'grid' ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {visibleGridItems.map((badge) => (
                <div
                  key={badge.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-slate-600 hover:shadow-xl transition-all duration-200 shadow-md flex flex-col justify-between group text-left"
                >
                  <div>
                    {/* Top Header Row: Category Pill + Date */}
                    <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-800">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-300 px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 truncate max-w-[135px]">
                        {badge.category}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 shrink-0 flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 text-slate-500" />
                        {badge.date}
                      </span>
                    </div>

                    {/* Center Badge Artwork Chamber */}
                    <div className="h-32 sm:h-36 flex items-center justify-center p-3 bg-[#0B1120] rounded-xl border border-slate-800/90 group-hover:border-slate-700 transition-colors mb-3.5 overflow-hidden shadow-inner">
                      <img
                        src={badge.image}
                        alt={badge.title}
                        className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                    </div>

                    {/* Issuer Subtitle */}
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      {badge.issuer}
                    </div>

                    {/* Badge Title */}
                    <h3 className="font-subheading text-sm sm:text-base font-bold text-white tracking-[-0.015em] leading-snug group-hover:text-slate-100 transition-colors">
                      {badge.title}
                    </h3>
                  </div>

                  {/* Card Bottom Row: Clean Single Action Verification Link */}
                  <div className="pt-3.5 mt-4 border-t border-slate-800 flex items-center justify-between">
                    <a
                      href={badge.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group/link"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                      <span>{getVerificationLabel(badge.badgeUrl)}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-emerald-300 shrink-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Show All / Show Less Toggle Button */}
            {hasMoreThanLimit && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider font-semibold border border-slate-700 hover:border-slate-600 transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>{showAll ? 'Show Less' : `Show All Badges (${filteredBadges.length})`}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${showAll ? '-rotate-90' : 'rotate-90'}`}
                  />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* --- VIEW 2: REFINED DARK EXECUTIVE INSPECTOR CONSOLE --- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Rail / Badges List */}
            <div className="lg:col-span-5 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#475569] pb-2 mb-2 border-b border-[#E2E8F0] flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold text-[#1A1A1A]">
                  <Award className="w-3.5 h-3.5 text-slate-700" />
                  <span>Credentials ({filteredBadges.length})</span>
                </span>
              </div>

              {/* Scrollable list with clean dark cards */}
              <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1 custom-scrollbar">
                {filteredBadges.map((badge) => {
                  const isActive = badge.id === activeBadge.id;

                  return (
                    <button
                      key={badge.id}
                      onMouseEnter={() => setSelectedId(badge.id)}
                      onClick={() => setSelectedId(badge.id)}
                      className={`relative w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 group cursor-pointer block ${
                        isActive
                          ? 'bg-[#0F172A] border-slate-600 shadow-md ring-2 ring-slate-800'
                          : 'bg-white hover:bg-slate-50 border-[#E2E8F0] hover:border-slate-300'
                      }`}
                    >
                      {/* Header Row: Category & Date */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md truncate max-w-[180px] ${
                            isActive
                              ? 'bg-slate-800 text-slate-200 border border-slate-700'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {badge.category}
                        </span>
                        <span
                          className={`font-mono text-[10px] shrink-0 flex items-center gap-1 ${
                            isActive ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          <Calendar className="w-2.5 h-2.5" />
                          {badge.date}
                        </span>
                      </div>

                      {/* Badge Title & Mini Artwork */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0B1120] border border-slate-800 p-1 shrink-0 flex items-center justify-center overflow-hidden">
                          <img
                            src={badge.image}
                            alt=""
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className={`font-subheading text-sm font-bold tracking-tight line-clamp-1 transition-colors ${
                              isActive ? 'text-white' : 'text-[#1A1A1A]'
                            }`}
                          >
                            {badge.title}
                          </div>
                          <div
                            className={`font-mono text-[10px] uppercase tracking-wider truncate mt-0.5 ${
                              isActive ? 'text-slate-400' : 'text-[#475569]'
                            }`}
                          >
                            {badge.issuer}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isActive
                              ? 'text-white translate-x-1'
                              : 'opacity-0 group-hover:opacity-100 text-slate-400'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Badge Detail Window (Sticky) - Dark Executive Console Card */}
            <div className="lg:col-span-7 sticky top-24">
              <div className="relative rounded-2xl border border-slate-800 bg-[#0F172A] shadow-xl overflow-hidden min-h-[480px] text-white">
                {/* Header Bar */}
                <div className="px-6 py-3.5 border-b border-slate-800 bg-[#0B1120] flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>CREDENTIAL // BADGE-0{activeIdx + 1}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
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
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-800">
                      {/* Badge Artwork Chamber */}
                      <div className="relative shrink-0 group">
                        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#0B1120] border border-slate-800 p-3 flex items-center justify-center shadow-inner">
                          <img
                            src={activeBadge.image}
                            alt={activeBadge.title}
                            className="w-full h-full object-contain filter drop-shadow-md transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="flex-1 text-center sm:text-left min-w-0">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 font-mono text-[10px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {activeBadge.date}
                        </div>

                        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-[-0.02em] text-white leading-snug">
                          {activeBadge.title}
                        </h3>

                        <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                          {activeBadge.issuer}
                        </div>

                        <div className="mt-2.5 inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                          {activeBadge.category}
                        </div>
                      </div>
                    </div>

                    {/* Validated Expertise Callout */}
                    <div className="mt-5 p-5 rounded-xl bg-[#0B1120] border border-slate-800 border-l-4 border-l-emerald-500 text-left">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>CURRICULUM &amp; VALIDATED EXPERTISE</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {activeBadge.description}
                      </p>
                    </div>

                    {/* Verification CTA Action Bar */}
                    <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-mono text-[11px] text-slate-400">
                          Cryptographically registered &amp; publicly audit-ready
                        </span>
                      </div>

                      <a
                        href={activeBadge.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-mono text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                      >
                        <span>{getVerificationLabel(activeBadge.badgeUrl)}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#0F172A]" />
                      </a>
                    </div>

                    {/* Window Bottom Metadata Bar */}
                    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        {activeBadge.group}
                      </span>
                      <span className="text-white font-semibold">
                        {activeIdx + 1} / {filteredBadges.length}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Section Divider */}
        <div className="mt-16">
          <BarcodeDivider />
        </div>
      </div>
    </section>
  );
};
