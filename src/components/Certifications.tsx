import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Search,
  LayoutGrid,
  Columns,
  Calendar,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA, CertificationGroup, CertificationItem } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const FILTER_GROUPS: CertificationGroup[] = [
  'All',
  'Business and project',
  'Cloud, network and security',
  'Sales and marketing'
];

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [selectedGroup, setSelectedGroup] = useState<CertificationGroup>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'inspector'>('grid');
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const filtered = certifications.filter((item) => {
      // Group filter
      if (selectedGroup !== 'All' && item.group !== selectedGroup) {
        return false;
      }
      // Search query
      if (q) {
        return (
          item.title.toLowerCase().includes(q) ||
          item.issuer.toLowerCase().includes(q) ||
          item.group.toLowerCase().includes(q)
        );
      }
      return true;
    });

    // Sort by year: latest first, oldest last; preserve insertion order for same year
    return [...filtered].sort((a, b) => {
      const yearA = parseInt(a.year || '0', 10);
      const yearB = parseInt(b.year || '0', 10);
      if (yearB !== yearA) {
        return yearB - yearA; // Latest first
      }
      return 0; // Preserves exact data order so latest added cert is #1
    });
  }, [certifications, selectedGroup, searchQuery]);

  // Selected item state for inspector view
  const [selectedId, setSelectedId] = useState<string>(
    filteredItems[0]?.id || certifications[0]?.id || ''
  );

  // Active item in inspector view
  const activeCert: CertificationItem =
    filteredItems.find((c) => c.id === selectedId) || filteredItems[0] || certifications[0];
  const activeIdx = filteredItems.findIndex((c) => c.id === activeCert?.id);

  // Verification button label helper
  const getVerificationLabel = (url?: string) => {
    if (!url) return 'Verified Credential';
    if (url.includes('linkedin.com')) return 'Verify on LinkedIn';
    if (url.includes('coursera.org')) return 'Verify on Coursera';
    if (url.includes('scrumstudy.com')) return 'Verify on SCRUMstudy';
    if (url.includes('credly.com')) return 'Verify on Credly';
    if (url.includes('fortinet.com')) return 'Verify on Fortinet';
    return 'Verify Credential';
  };

  const visibleGridItems = showAll ? filteredItems : filteredItems.slice(0, 16);
  const hasMoreThanLimit = filteredItems.length > 16;

  return (
    <section
      id="credentials"
      data-section-theme="dark"
      className="py-28 sm:py-36 border-b border-slate-800 bg-[#0F172A] text-white"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 font-mono text-[11px] uppercase tracking-wider text-slate-200 mb-3 shadow-xs">
            [ 05 // PROFESSIONAL CREDENTIALS ({certifications.length}) ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white">
            Accredited Certifications &amp; Licenses
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] leading-relaxed">
            Formal qualifications across project delivery frameworks, business analysis, cloud systems, and cybersecurity standards.
          </p>
        </div>

        {/* Filter & Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-800">
          {/* Category Group Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] mr-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>Domain:</span>
            </span>
            {FILTER_GROUPS.map((group) => {
              const isActive = selectedGroup === group;
              const count =
                group === 'All'
                  ? certifications.length
                  : certifications.filter((c) => c.group === group).length;

              return (
                <button
                  key={group}
                  onClick={() => {
                    setSelectedGroup(group);
                    const firstOfGroup =
                      group === 'All'
                        ? certifications[0]
                        : certifications.find((c) => c.group === group);
                    if (firstOfGroup) setSelectedId(firstOfGroup.id);
                  }}
                  className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-950 border-white font-bold shadow-xs'
                      : 'bg-[#131B2E] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{group}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-slate-200 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 font-semibold'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search Input + Dual View Switcher */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search credentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#131B2E] border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-slate-600 shadow-2xs"
              />
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-lg bg-[#131B2E] border border-slate-800 shadow-2xs shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('inspector')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'inspector'
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="List / Inspector View"
              >
                <Columns className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* --- VIEW 1: MODERN GRID GALLERY --- */}
        {viewMode === 'grid' ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {visibleGridItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#131B2E] border border-slate-800 hover:border-slate-600 hover:shadow-xl transition-all duration-200 shadow-md flex flex-col justify-between group text-left overflow-hidden"
                >
                  <div>
                    {/* Header Logo Chamber & Year */}
                    <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-800 min-w-0">
                      {item.issuerLogo ? (
                        <div className="h-9 sm:h-10 px-2 py-1 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs min-w-0 max-w-[125px] sm:max-w-[140px]">
                          <img
                            src={item.issuerLogo}
                            alt={`${item.issuer} logo`}
                            className="max-h-6 sm:max-h-7 w-auto max-w-full object-contain transition-transform group-hover:scale-105 duration-200"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="h-9 sm:h-10 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center shadow-xs min-w-0 max-w-[135px] sm:max-w-[150px]">
                          <span className="font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-slate-200 truncate">
                            {item.issuer}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col items-end text-right font-mono text-[11px] text-[#94A3B8] shrink-0 ml-auto">
                        {item.year && (
                          <span className="text-[10px] font-semibold text-slate-300 px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 whitespace-nowrap">
                            {item.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Issuer Subtitle */}
                    {item.issuerLogo && (
                      <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        {item.issuer}
                      </div>
                    )}

                    {/* Credential Title */}
                    <h3 className="font-subheading text-sm sm:text-base font-bold tracking-tight text-white leading-snug group-hover:text-slate-100 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Bottom Row: Group Pill & Direct Verifiable Link */}
                  <div className="pt-3.5 mt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[10px] uppercase text-[#94A3B8] truncate max-w-[125px]">
                      {item.group}
                    </span>

                    {item.credentialUrl ? (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group/link"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-emerald-300 shrink-0" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] text-slate-400">
                        <ShieldCheck className="w-3 h-3 text-slate-400" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Show All / Show Less Toggle Button */}
            {hasMoreThanLimit && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2.5 rounded-xl bg-[#131B2E] hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider font-semibold border border-slate-700 hover:border-slate-600 transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>
                    {showAll ? 'Show Fewer Credentials' : `Show All Credentials (${filteredItems.length})`}
                  </span>
                  {showAll ? (
                    <ChevronUp className="w-4 h-4 text-white" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* --- VIEW 2: REFINED EXECUTIVE LIST / INSPECTOR CONSOLE --- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Rail: Scrollable Credentials List */}
            <div className="lg:col-span-5 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] pb-2 mb-2 border-b border-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  <span>Credentials ({filteredItems.length})</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  ACTIVE: {activeIdx + 1} OF {filteredItems.length}
                </span>
              </div>

              {/* Scrollable list */}
              <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1 custom-scrollbar">
                {filteredItems.map((item) => {
                  const isActive = item.id === activeCert.id;

                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setSelectedId(item.id)}
                      onClick={() => setSelectedId(item.id)}
                      className={`relative w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 group cursor-pointer block ${
                        isActive
                          ? 'bg-[#1E293B] border-slate-600 shadow-md ring-2 ring-slate-700'
                          : 'bg-[#131B2E] hover:bg-[#1A243B] border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {/* Header Row: Category & Year */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md truncate max-w-[180px] ${
                            isActive
                              ? 'bg-slate-800 text-slate-200 border border-slate-700'
                              : 'bg-slate-850 text-slate-400 border border-slate-800'
                          }`}
                        >
                          {item.group}
                        </span>
                        {item.year && (
                          <span className="font-mono text-[10px] shrink-0 text-slate-400 flex items-center gap-1">
                            <Calendar className="w-2.5 h-2.5" />
                            {item.year}
                          </span>
                        )}
                      </div>

                      {/* Credential Title & Mini Issuer Logo */}
                      <div className="flex items-center gap-3">
                        {item.issuerLogo ? (
                          <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 p-1 shrink-0 flex items-center justify-center overflow-hidden">
                            <img
                              src={item.issuerLogo}
                              alt={item.issuer}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-slate-200 shrink-0">
                            {item.issuer.slice(0, 2).toUpperCase()}
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <div
                            className={`font-subheading text-xs sm:text-sm font-semibold leading-tight truncate transition-colors ${
                              isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                            }`}
                          >
                            {item.title}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 truncate mt-0.5">
                            {item.issuer}
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

            {/* Right Column: Active Credential Inspector Console (Sticky) */}
            <div className="lg:col-span-7 sticky top-24">
              <div className="relative rounded-2xl border border-slate-800 bg-[#131B2E] shadow-xl overflow-hidden min-h-[480px] text-white">
                {/* Header Bar */}
                <div className="px-6 py-3.5 border-b border-slate-800 bg-[#0B1120] flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>CREDENTIAL // CERT-0{activeIdx + 1}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Accredited Qualification</span>
                  </div>
                </div>

                {/* Animated Detail Panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCert.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="p-6 sm:p-8"
                  >
                    {/* Header Art & Titles */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-800">
                      {/* Issuer Logo Chamber */}
                      <div className="relative shrink-0 group">
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 p-3 flex items-center justify-center shadow-md">
                          {activeCert.issuerLogo ? (
                            <img
                              src={activeCert.issuerLogo}
                              alt={activeCert.issuer}
                              className="w-full h-full object-contain filter drop-shadow-xs transform group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="font-heading font-bold text-2xl text-slate-900 text-center">
                              {activeCert.issuer}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="flex-1 text-center sm:text-left min-w-0">
                        {activeCert.year && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 font-mono text-[10px] uppercase tracking-wider text-slate-300 font-semibold mb-2">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            {activeCert.year}
                          </div>
                        )}

                        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                          {activeCert.title}
                        </h3>

                        <div className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1.5">
                          {activeCert.issuer}
                        </div>

                        <div className="mt-3 inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-medium">
                          {activeCert.group}
                        </div>
                      </div>
                    </div>

                    {/* Domain & Qualification Callout */}
                    <div className="mt-6 p-5 rounded-xl bg-[#0B1120] border border-slate-800 border-l-4 border-l-emerald-500 text-left">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>DOMAIN EXPERTISE &amp; ACCREDITATION</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        Certified competency in {activeCert.title.toLowerCase()}, issued under the official accreditation guidelines of {activeCert.issuer}. Validated for enterprise governance, systems integration, and industry-standard technical compliance.
                      </p>
                    </div>

                    {/* Verification CTA Action Bar */}
                    <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-mono text-[11px] text-slate-400">
                          Accredited credential record
                        </span>
                      </div>

                      {activeCert.credentialUrl ? (
                        <a
                          href={activeCert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-mono text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-[#0F172A]" />
                          <span>{getVerificationLabel(activeCert.credentialUrl)}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#0F172A]" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-mono text-xs font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Direct Institutional Record</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        {activeCert.group}
                      </span>
                      <span>RECORD ID // {activeCert.id}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Empty state if search returned 0 items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#131B2E] border border-slate-800 rounded-2xl shadow-sm">
            <Award className="w-8 h-8 text-slate-500 mx-auto mb-2 opacity-50" />
            <p className="font-heading font-bold text-sm text-white">No matching credentials found</p>
            <p className="font-mono text-xs text-[#94A3B8] mt-1">
              Try resetting the search query or domain filter.
            </p>
          </div>
        )}

        <BarcodeDivider label="SECTION // 06-07" />
      </div>
    </section>
  );
};
