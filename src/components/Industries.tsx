import React from 'react';
import { 
  Package, 
  GraduationCap, 
  Paintbrush, 
  Factory, 
  Warehouse, 
  Landmark, 
  Building2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const ICON_MAP = {
  Package,
  GraduationCap,
  Paintbrush,
  Factory,
  Warehouse,
  Landmark,
  Building2
};

export const Industries: React.FC = () => {
  const { industries } = PORTFOLIO_DATA;

  return (
    <section id="industries" className="py-20 sm:py-28 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            03 // SECTORS & VERTICALS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Industries
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            Operational traceability, asset visibility, and Auto-ID implementations tailored to specific vertical constraints.
          </p>
        </div>

        {/* Clean Grid of Industry Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ICON_MAP[ind.iconName] || Package;
            return (
              <div
                key={ind.id}
                className="group p-6 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--secondary)] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--secondary)] mb-4 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-fg)] group-hover:border-[var(--accent)] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-lg font-bold tracking-tight text-[var(--ink)]">
                    {ind.title}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[var(--muted)]">
                  <span>Sector Scope</span>
                  <span className="text-[var(--secondary)] font-semibold">Active</span>
                </div>
              </div>
            );
          })}
        </div>

        <BarcodeDivider label="SECTION // 03-04" />
      </div>
    </section>
  );
};
