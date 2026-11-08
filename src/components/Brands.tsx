import React from 'react';
import { PORTFOLIO_DATA } from '@/data/content';

export const Brands: React.FC = () => {
  const { brands } = PORTFOLIO_DATA;

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 sm:gap-12">
          {/* Section Indicator */}
          <div className="shrink-0 lg:w-56">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block">
              01 // TRUSTED BY
            </span>
            <p className="font-heading font-semibold text-sm text-[var(--ink)] mt-0.5">
              Client &amp; Enterprise Deployments
            </p>
            <p className="font-mono text-[11px] text-[var(--muted)] mt-2">
              National &amp; multinational corporate, governmental and institutional partners.
            </p>
          </div>

          {/* Brand client grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 items-start">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="group flex flex-col items-start border-l-2 border-[var(--line)] pl-3.5 hover:border-[var(--accent)] transition-colors py-0.5"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  {brand.logo && (
                    <div className="h-8 min-w-[36px] max-w-[100px] px-2 py-0.5 rounded-[4px] bg-white border border-slate-200/90 shadow-xs flex items-center justify-center shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-6 w-auto max-w-full object-contain transition-transform group-hover:scale-105 duration-200"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="font-heading text-sm sm:text-base font-bold tracking-tight text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {brand.name}
                  </span>
                </div>
                {brand.descriptor && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    {brand.descriptor}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
