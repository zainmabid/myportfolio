import React, { useMemo } from 'react';
import { PORTFOLIO_DATA, Brand } from '@/data/content';

export const Brands: React.FC = () => {
  const { brands } = PORTFOLIO_DATA;

  // Categorize into 3 rows:
  // Row 2 (Center): 1:1 ratio square/circular/shield logos
  // Row 1 & 3: Wide/rectangular logos
  const { row1, row2, row3 } = useMemo(() => {
    const centerSquareIds = new Set([
      'unilever',
      'shell',
      'fauji-foods',
      'beaconhouse',
      'shaukat-khanum',
      'dwatson',
      'qau',
      'iiui',
      'paf-iast',
      'paf-hospital',
      'davis-pharma',
      'colgate-palmolive',
      'daewoo-fastex',
      'daewoo-express',
      'kohinoor-mills'
    ]);

    const row1Ids = new Set([
      'diamond-paints',
      'ptcl',
      'stza',
      'nippon-paint',
      'orient',
      'bata',
      'abhi',
      'fao',
      'unodc',
      'sazgar',
      'outfitters',
      'cass',
      'sitara-textile',
      'parkview-city'
    ]);

    const r1: Brand[] = [];
    const r2: Brand[] = [];
    const r3: Brand[] = [];

    brands.forEach((brand) => {
      if (centerSquareIds.has(brand.id)) {
        r2.push(brand);
      } else if (row1Ids.has(brand.id)) {
        r1.push(brand);
      } else {
        r3.push(brand);
      }
    });

    return { row1: r1, row2: r2, row3: r3 };
  }, [brands]);

  return (
    <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--surface)] overflow-hidden">
      {/* Section Header: Styled consistently with all portfolio section headers */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-left">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            01 // TRUSTED BY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Client &amp; Enterprise Deployments
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            National &amp; multinational corporate, governmental and institutional partners.
          </p>
        </div>
      </div>

      {/* 3-Row Infinite Animated Marquee Ticker with Clean Edge Mask */}
      <div className="marquee-mask relative w-full overflow-hidden space-y-4 sm:space-y-5 py-2">
        {/* Line 1: Left-to-Right Animation (Wide Logos) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {[...row1, ...row1].map((brand, idx) => (
              <div
                key={`r1-${brand.id}-${idx}`}
                title={brand.name}
                className="h-16 sm:h-20 min-w-[145px] sm:min-w-[175px] max-w-[210px] px-5 py-2.5 rounded-[6px] bg-white border border-[var(--line)] shadow-xs flex items-center justify-center transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md hover:scale-105 shrink-0 cursor-default"
              >
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-8 sm:max-h-10 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Line 2 (Center): Right-to-Left Animation (1:1 Ratio Logos) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {[...row2, ...row2].map((brand, idx) => (
              <div
                key={`r2-${brand.id}-${idx}`}
                title={brand.name}
                className="h-16 sm:h-20 w-16 sm:w-20 rounded-[6px] bg-white border border-[var(--line)] shadow-xs flex items-center justify-center transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md hover:scale-105 shrink-0 p-2.5 cursor-default"
              >
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-11 sm:max-h-14 max-w-full object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Line 3: Left-to-Right Animation (Wide Logos) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {[...row3, ...row3].map((brand, idx) => (
              <div
                key={`r3-${brand.id}-${idx}`}
                title={brand.name}
                className="h-16 sm:h-20 min-w-[145px] sm:min-w-[175px] max-w-[210px] px-5 py-2.5 rounded-[6px] bg-white border border-[var(--line)] shadow-xs flex items-center justify-center transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md hover:scale-105 shrink-0 cursor-default"
              >
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-8 sm:max-h-10 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
