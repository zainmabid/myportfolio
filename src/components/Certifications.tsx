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

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 8);
  const hasMoreThanEight = filteredItems.length > 8;

  return (
    <section id="credentials" className="py-28 sm:py-36 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 font-mono text-[11px] uppercase tracking-wider text-[#0F172A] mb-3 shadow-xs">
            [ 05 // PROFESSIONAL CREDENTIALS ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
            Accredited Certifications &amp; Licenses
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Formal qualifications across project delivery frameworks, business analysis, cloud systems, and cybersecurity standards.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          {/* Group Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_GROUPS.map((group) => {
              const isActive = selectedGroup === group;
              return (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white font-bold shadow-xs'
                      : 'bg-white text-slate-600 hover:text-[#0F172A] border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {group}
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
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-slate-400 shadow-xs"
            />
          </div>
        </div>

        {/* Certifications Grid: Flat crisp white cards: bg-white border border-slate-100 rounded-2xl shadow-sm p-6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm flex flex-col justify-between group text-left"
            >
              <div>
                {/* Header label & Logo */}
                <div className="flex items-center justify-between gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
                  {item.issuerLogo ? (
                    <div className="h-10 sm:h-11 px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 flex items-center shadow-xs shrink-0 max-w-[185px]">
                      <img
                        src={item.issuerLogo}
                        alt={`${item.issuer} logo`}
                        className="max-h-8 sm:max-h-9 w-auto max-w-full object-contain transition-transform group-hover:scale-105 duration-200"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <span className="font-mono text-xs uppercase font-bold tracking-wider text-slate-700">
                      {item.issuer}
                    </span>
                  )}

                  <div className="flex flex-col items-end text-right font-mono text-[11px] text-[#475569] shrink-0">
                    {item.year && (
                      <span className="text-[10px] font-semibold text-[#475569] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200">
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Badge Image if available */}
                {item.image && (
                  <div className="h-28 sm:h-32 flex items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-100 mb-3.5 group-hover:border-slate-300 transition-colors overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Issuer Subtitle */}
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                  {item.issuer}
                </div>

                {/* Credential Title */}
                <h3 className="font-heading text-sm sm:text-base font-bold tracking-tight text-[#0F172A] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom Row */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[10px] uppercase text-[#475569] truncate max-w-[130px]">
                  {item.group}
                </span>

                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0F172A] hover:underline font-semibold"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-500">Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returned 0 items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl">
            <Award className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
            <p className="font-heading font-bold text-sm text-[#0F172A]">No matching credentials found</p>
            <p className="font-mono text-xs text-[#475569] mt-1">Try resetting the search query or group filter.</p>
          </div>
        )}

        {/* Scalable "Show all" toggle after 8 items */}
        {hasMoreThanEight && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <span>{showAll ? 'Show Fewer Credentials' : `Show All Credentials (${filteredItems.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-white" />}
            </button>
          </div>
        )}

        <BarcodeDivider label="SECTION // 06-07" />
      </div>
    </section>
  );
};
