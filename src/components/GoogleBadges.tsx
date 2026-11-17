import React from 'react';
import { ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { BarcodeDivider } from './Barcode';

export const GoogleBadges: React.FC = () => {
  const { googleBadges, googleProfileUrl } = PORTFOLIO_DATA;

  return (
    <section id="badges" className="py-20 sm:py-28 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading & Verification CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>07 // VERIFIED SKILL BADGES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
              Google Cloud & Gemini Badges
            </h2>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
              Official credentials earned through Google Skills and Google Cloud microlearning, verifying hands-on enterprise GenAI deployment across contract engineering, high-stakes redaction, and compliance tracking.
            </p>
          </div>

          {/* External Profile Verification Link */}
          <div className="shrink-0">
            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[4px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] text-xs font-mono font-medium transition-all shadow-xs group"
            >
              <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
              <span>Public Profile on Google Skills</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
            </a>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleBadges.map((badge) => (
            <div
              key={badge.id}
              className="group relative flex flex-col justify-between bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--accent)] rounded-[6px] p-6 transition-all duration-200 hover:shadow-md"
            >
              <div>
                {/* Header with Category & Date */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[var(--line)]">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] px-2 py-0.5 rounded-[2px] bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                    {badge.category}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--muted)]">
                    {badge.date}
                  </span>
                </div>

                {/* Badge Visual Representation */}
                <div className="flex items-center justify-center py-4 px-2 mb-4 bg-[var(--surface)] rounded-[4px] border border-[var(--line)]/60 group-hover:border-[var(--accent)]/30 transition-colors">
                  <div className="relative w-28 h-28 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="w-full h-full object-contain filter drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Badge Title & Issuer */}
                <div className="mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] block mb-1">
                    {badge.issuer}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {badge.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-[var(--muted)] leading-relaxed mt-2 line-clamp-4">
                  {badge.description}
                </p>
              </div>

              {/* Footer Verification Action */}
              <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--accent)]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google Verified</span>
                </span>
                <a
                  href={badge.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}

          {/* Callout Card: Enterprise GenAI Capability */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-[var(--bg)] via-[var(--surface)] to-[var(--bg)] border border-[var(--accent)]/30 rounded-[6px] p-6 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[var(--line)]">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[var(--accent)] px-2 py-0.5 rounded-[2px] bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                  Enterprise AI Deployment
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--ink)] mb-2">
                Applied Google Gemini Architecture
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Combining 10+ years of industrial systems architecture with Google Gemini enterprise tooling — orchestrating end-to-end automation across ERPs, compliance repositories, and high-throughput workflows.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--line)]">
              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[4px] bg-[var(--accent)] text-[var(--accent-fg)] font-mono text-xs font-bold hover:brightness-110 transition-all shadow-xs"
              >
                <span>View All Badges on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16">
          <BarcodeDivider />
        </div>
      </div>
    </section>
  );
};
