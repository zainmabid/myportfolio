import React, { useState, useMemo } from 'react';
import { Award, ExternalLink, Search, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
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
    <section id="credentials" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            06 // CREDENTIALS & LICENSES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Certifications, Badges and Training
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            Accredited qualifications across project frameworks, business analysis, cloud architecture, and industrial cybersecurity.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--line)]">
          {/* Group Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_GROUPS.map((group) => {
              const isActive = selectedGroup === group;
              return (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-3 py-1.5 rounded-[3px] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--accent-fg)] font-bold shadow-xs'
                      : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)] border border-[var(--line)] hover:border-[var(--muted)]'
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[var(--muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-[3px] bg-[var(--surface)] border border-[var(--line)] text-xs text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="asset-card p-4 sm:p-5 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Header label & Logo */}
                <div className="flex items-center justify-between gap-2.5 mb-3.5 pb-2.5 border-b border-[var(--line)]">
                  {item.issuerLogo ? (
                    <div className="h-10 sm:h-11 px-2.5 py-1 rounded-[4px] bg-white border border-slate-200/90 flex items-center shadow-xs shrink-0 max-w-[185px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.issuerLogo}
                        alt={`${item.issuer} logo`}
                        className="max-h-8 sm:max-h-9 w-auto max-w-full object-contain transition-transform group-hover:scale-105 duration-200"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <span className="font-mono text-xs uppercase font-bold tracking-wider text-[var(--secondary)]">
                      {item.issuer}
                    </span>
                  )}

                  <div className="flex flex-col items-end text-right font-mono text-[11px] text-[var(--muted)] shrink-0">
                    {item.year && (
                      <span className="text-[10px] font-semibold text-[var(--muted)] px-2 py-0.5 rounded bg-[var(--surface-alt)] border border-[var(--line)]">
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Badge Image if available */}
                {item.image && (
                  <div className="h-28 sm:h-32 flex items-center justify-center p-3 bg-[var(--surface-alt)] rounded-[4px] border border-[var(--line)] mb-3.5 group-hover:border-[var(--accent)] transition-colors overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Issuer Subtitle */}
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--secondary)] font-semibold mb-1">
                  {item.issuer}
                </div>

                {/* Credential Title */}
                <h3 className="font-heading text-sm sm:text-base font-bold tracking-tight text-[var(--ink)] group-hover:text-[var(--secondary)] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom Row */}
              <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[10px] uppercase text-[var(--muted)] truncate max-w-[130px]">
                  {item.group}
                </span>

                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--secondary)] hover:underline font-semibold"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[var(--muted)]">Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returned 0 items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[var(--surface)] border border-[var(--line)] rounded-[6px]">
            <Award className="w-8 h-8 text-[var(--muted)] mx-auto mb-2 opacity-50" />
            <p className="font-heading font-bold text-sm text-[var(--ink)]">No matching credentials found</p>
            <p className="font-mono text-xs text-[var(--muted)] mt-1">Try resetting the search query or group filter.</p>
          </div>
        )}

        {/* Scalable "Show all" toggle after 8 items */}
        {hasMoreThanEight && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[var(--surface)] hover:bg-[var(--surface-alt)] border border-[var(--line)] hover:border-[var(--muted)] text-xs font-mono uppercase tracking-wider text-[var(--ink)] font-semibold transition-colors cursor-pointer"
            >
              <span>{showAll ? 'Show Fewer Credentials' : `Show All Credentials (${filteredItems.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4 text-[var(--secondary)]" /> : <ChevronDown className="w-4 h-4 text-[var(--secondary)]" />}
            </button>
          </div>
        )}

        <BarcodeDivider label="SECTION // 06-07" />
      </div>
    </section>
  );
};
