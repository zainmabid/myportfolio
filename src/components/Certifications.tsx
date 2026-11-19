import React, { useState, useMemo } from 'react';
import { Award, ExternalLink, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { PORTFOLIO_DATA, CertificationGroup } from '@/data/content';
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
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return certifications.filter((item) => {
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
  }, [certifications, selectedGroup, searchQuery]);

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 16);
  const hasMoreThanLimit = filteredItems.length > 16;

  return (
    <section id="credentials" className="py-28 sm:py-36 border-b border-slate-800 bg-[#0F172A] text-white">
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

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          {/* Group Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_GROUPS.map((group) => {
              const isActive = selectedGroup === group;
              const count = group === 'All' ? certifications.length : certifications.filter((c) => c.group === group).length;
              return (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-[#1A1A1A] font-bold shadow-sm'
                      : 'bg-[#131B2E] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>{group}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${isActive ? 'bg-slate-200 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#131B2E] border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-slate-600 shadow-xs"
            />
          </div>
        </div>

        {/* Certifications Grid: Dark crisp cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#131B2E] border border-slate-800 hover:border-slate-600 hover:shadow-lg transition-all duration-200 shadow-md flex flex-col justify-between group text-left overflow-hidden"
            >
              <div>
                {/* Header label & Logo */}
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

                {/* Badge Image if available */}
                {item.image && (
                  <div className="h-28 sm:h-32 flex items-center justify-center p-3 bg-[#0B1120] rounded-xl border border-slate-800 mb-3.5 group-hover:border-slate-700 transition-colors overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Issuer Subtitle */}
                {item.issuerLogo && (
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    {item.issuer}
                  </div>
                )}

                {/* Credential Title */}
                <h3 className="font-subheading text-sm sm:text-base font-bold tracking-[-0.015em] text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom Row */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[10px] uppercase text-[#94A3B8] truncate max-w-[130px]">
                  {item.group}
                </span>

                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white hover:underline font-semibold"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-400">Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returned 0 items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#131B2E] border border-slate-800 rounded-2xl shadow-sm">
            <Award className="w-8 h-8 text-slate-500 mx-auto mb-2 opacity-50" />
            <p className="font-heading font-bold text-sm text-white">No matching credentials found</p>
            <p className="font-mono text-xs text-[#94A3B8] mt-1">Try resetting the search query or group filter.</p>
          </div>
        )}

        {/* Scalable "Show all" toggle after limit */}
        {hasMoreThanLimit && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#1A1A1A] text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-md"
            >
              <span>{showAll ? 'Show Fewer Credentials' : `Show All Credentials (${filteredItems.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4 text-[#1A1A1A]" /> : <ChevronDown className="w-4 h-4 text-[#1A1A1A]" />}
            </button>
          </div>
        )}

        <BarcodeDivider label="SECTION // 06-07" />
      </div>
    </section>
  );
};
