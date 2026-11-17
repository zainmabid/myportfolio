import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  ExternalLink,
  Calendar,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Award,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA, BadgeGroup, VerifiedBadge } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const FILTER_GROUPS: BadgeGroup[] = [
  'All',
  'Google Cloud & Gemini',
  'Internet Society (ISOC)',
  'Cloud, Security & Agile'
];

export const GoogleBadges: React.FC = () => {
  const { badges, googleProfileUrl } = PORTFOLIO_DATA;
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
    <section id="badges" className="py-20 sm:py-28 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading & Verification Profile CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>07 // VERIFIED SKILL BADGES &amp; CREDENTIALS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
              Verified Badges &amp; Micro-Credentials
            </h2>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
              Official verifiable credentials spanning Google Cloud &amp; Gemini enterprise AI, Internet Society global digital governance, and accredited cybersecurity &amp; agile frameworks.
            </p>
          </div>

          {/* Quick Profile Verification Link */}
          <div className="shrink-0 flex flex-wrap items-center gap-2.5">
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] text-xs font-mono font-medium transition-all shadow-xs group"
            >
              <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
              <span>Google Skills Profile</span>
              <ExternalLink className="w-3 h-3 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
            </a>
          </div>
        </div>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[var(--line)]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mr-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
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
                className={`font-mono text-xs px-3 py-1.5 rounded-[4px] border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-semibold shadow-xs'
                    : 'bg-[var(--bg)] text-[var(--muted)] border-[var(--line)] hover:border-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                <span>{group}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-black/20 text-[var(--accent-fg)]'
                      : 'bg-[var(--surface-alt)] text-[var(--muted)]'
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
            <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] pb-2 mb-2 border-b border-[var(--line)] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Credentials ({filteredBadges.length})</span>
              </span>
              <span className="text-[10px] text-[var(--accent)] font-semibold">Hover to Inspect</span>
            </div>

            {/* Scrollable list with node timeline */}
            <div className="relative pl-4 sm:pl-6 border-l-2 border-[var(--line)] space-y-3 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredBadges.map((badge, idx) => {
                const isActive = badge.id === activeBadge.id;

                return (
                  <button
                    key={badge.id}
                    onMouseEnter={() => setSelectedId(badge.id)}
                    onClick={() => setSelectedId(badge.id)}
                    className={`relative w-full text-left p-3 sm:p-3.5 rounded-[6px] border transition-all duration-200 group cursor-pointer block ${
                      isActive
                        ? 'bg-[var(--bg)] border-[var(--accent)] shadow-sm -translate-r-0.5'
                        : 'bg-[var(--bg)]/70 hover:bg-[var(--bg)] border-[var(--line)] hover:border-[var(--muted)]'
                    }`}
                  >
                    {/* Node Dot on Left Vertical Line */}
                    <div
                      className={`absolute -left-[23px] sm:-left-[31px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                        isActive
                          ? 'bg-[var(--accent)] border-[var(--surface)] ring-4 ring-[var(--accent)]/25 scale-125'
                          : 'bg-[var(--surface-alt)] border-[var(--line)] group-hover:border-[var(--accent)]'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Header Row: Issuer & Date */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] px-1.5 py-0.5 rounded-[2px] bg-[var(--accent)]/10 border border-[var(--accent)]/20 truncate max-w-[170px]">
                        {badge.category}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--muted)] shrink-0 flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 text-[var(--accent)]" />
                        {badge.date}
                      </span>
                    </div>

                    {/* Badge Title & Mini Preview */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] p-0.5 shrink-0 flex items-center justify-center overflow-hidden">
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
                            isActive ? 'text-[var(--accent)]' : 'text-[var(--ink)]'
                          }`}
                        >
                          {badge.title}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] truncate mt-0.5">
                          {badge.issuer}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                          isActive
                            ? 'text-[var(--accent)] translate-x-1'
                            : 'opacity-0 group-hover:opacity-100 text-[var(--muted)]'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Badge Detail Window (Sticky) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative rounded-[6px] border border-[var(--line)] bg-[var(--bg)] shadow-md overflow-hidden min-h-[480px]">
              {/* Technical Viewfinder Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-[var(--accent)]" />
                <div className="absolute top-0 right-0 h-full w-[2px] bg-[var(--accent)]" />
              </div>

              {/* Viewfinder Header Bar */}
              <div className="px-5 py-3 border-b border-[var(--line)] bg-[var(--surface-alt)] flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span>CREDENTIAL // BADGE-0{activeIdx + 1}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
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
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[var(--line)]">
                    {/* Badge Artwork Container */}
                    <div className="relative shrink-0 group">
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-[8px] bg-[var(--surface)] border border-[var(--line)] p-3 flex items-center justify-center shadow-xs">
                        <img
                          src={activeBadge.image}
                          alt={activeBadge.title}
                          className="w-full h-full object-contain filter drop-shadow-sm transform group-hover:scale-103 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Header Info */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] bg-[var(--surface-alt)] border border-[var(--line)] font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold mb-2">
                        <Calendar className="w-3 h-3" />
                        {activeBadge.date}
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--ink)] leading-snug">
                        {activeBadge.title}
                      </h3>

                      <div className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] font-semibold mt-1">
                        {activeBadge.issuer}
                      </div>

                      <div className="mt-2.5 inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--surface)] border border-[var(--line)] text-[var(--accent)]">
                        {activeBadge.category}
                      </div>
                    </div>
                  </div>

                  {/* Operational Summary Callout */}
                  <div className="mt-5 p-4 rounded-[4px] bg-[var(--surface)]/80 border-l-3 border-[var(--accent)] text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1 font-bold">
                      CURRICULUM &amp; VALIDATED EXPERTISE
                    </div>
                    {activeBadge.description}
                  </div>

                  {/* Verification CTA Action Bar */}
                  <div className="mt-6 pt-5 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span className="font-mono text-[11px] text-[var(--muted)]">
                        Cryptographically registered and publicly audit-ready
                      </span>
                    </div>

                    <a
                      href={activeBadge.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] bg-[var(--accent)] text-[var(--accent-fg)] font-mono text-xs font-bold hover:brightness-110 transition-all shadow-xs shrink-0"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Window Bottom Metadata Bar */}
                  <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {activeBadge.group}
                    </span>
                    <span className="text-[var(--accent)] font-semibold">
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
