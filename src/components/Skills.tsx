import React, { useState, useMemo } from 'react';
import {
  Cpu,
  Network,
  CheckSquare,
  Search,
  Radio,
  Layers,
  Sparkles,
  ShieldCheck,
  Server
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillGroup } from '@/data/content';
import { BarcodeDivider } from './Barcode';

const GROUP_CONFIG: Record<
  string,
  {
    icon: React.ElementType;
    badgeColor: string;
    dotColor: string;
    tier: string;
    techDomain: string;
  }
> = {
  'autoid-hardware': {
    icon: Radio,
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    dotColor: 'bg-emerald-400',
    tier: 'PHYSICAL EDGE & RF PHYSICS',
    techDomain: 'Zebra • Impinj • Alien • Chainway'
  },
  'systems-integration': {
    icon: Network,
    badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    dotColor: 'bg-sky-400',
    tier: 'MIDDLEWARE & ERP BRIDGE',
    techDomain: 'REST APIs • Webhooks • SQL • Linux'
  },
  'consulting-delivery': {
    icon: Layers,
    badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    dotColor: 'bg-indigo-400',
    tier: 'STRATEGIC GOVERNANCE & SOPS',
    techDomain: 'Turnkey Rollouts • Zero-Loss Traceability'
  }
};

export const Skills: React.FC = () => {
  const { skillGroups } = PORTFOLIO_DATA;
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Total skills count
  const totalSkillsCount = useMemo(
    () => skillGroups.reduce((acc, g) => acc + g.skills.length, 0),
    [skillGroups]
  );

  // Filter groups and highlight matching skills
  const filteredGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return skillGroups
      .filter((group) => {
        if (selectedPillar === 'all') return true;
        return group.id === selectedPillar;
      })
      .map((group) => {
        if (!q) {
          return { ...group, matchedSkills: group.skills, isDirectMatch: true };
        }

        const matched = group.skills.filter((s) => s.toLowerCase().includes(q));
        const groupMatches =
          group.category.toLowerCase().includes(q) ||
          group.coreFocus.toLowerCase().includes(q) ||
          matched.length > 0;

        return {
          ...group,
          matchedSkills: matched.length > 0 ? matched : group.skills,
          isDirectMatch: groupMatches
        };
      })
      .filter((g) => g.isDirectMatch);
  }, [skillGroups, selectedPillar, searchQuery]);

  return (
    <section
      id="skills"
      data-section-theme="light"
      className="py-28 sm:py-36 border-b border-[#E2E8F0] bg-[#FBFBFA]"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading & Overview */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider text-[#1A1A1A] mb-3 shadow-xs">
              [ 04 // TECHNICAL CAPABILITIES ({totalSkillsCount}) ]
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
              Industrial Capabilities &amp; Engineering Stack
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              Direct hands-on engineering across Auto-ID hardware, enterprise middleware, systems integration, and field deployment.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skills &amp; protocols..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:border-slate-500 shadow-2xs font-medium"
            />
          </div>
        </div>

        {/* Pillar Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-5 border-b border-[#E2E8F0]">
          <button
            onClick={() => setSelectedPillar('all')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              selectedPillar === 'all'
                ? 'bg-[#0F172A] text-white border-[#0F172A] font-bold shadow-xs'
                : 'bg-white text-slate-600 border-[#E2E8F0] hover:border-slate-300 hover:text-[#1A1A1A]'
            }`}
          >
            <span>All Capabilities</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedPillar === 'all'
                  ? 'bg-white/20 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 font-semibold'
              }`}
            >
              {totalSkillsCount}
            </span>
          </button>

          {skillGroups.map((group) => {
            const isSelected = selectedPillar === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedPillar(group.id)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F172A] text-white border-[#0F172A] font-bold shadow-xs'
                    : 'bg-white text-slate-600 border-[#E2E8F0] hover:border-slate-300 hover:text-[#1A1A1A]'
                }`}
              >
                <span>{group.category.split('&')[0].trim()}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-slate-100 text-slate-600 font-semibold'
                  }`}
                >
                  {group.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3 Capabilities Console Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredGroups.map((group: SkillGroup, idx: number) => {
            const config = GROUP_CONFIG[group.id] || GROUP_CONFIG['autoid-hardware'];
            const Icon = config.icon;
            const cardNumber = `0${idx + 1}`;

            return (
              <div
                key={group.id}
                className="group relative rounded-3xl bg-[#0F172A] border border-slate-800 p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:border-slate-700 hover:shadow-2xl transition-all duration-300 text-left overflow-hidden"
              >
                {/* Subtle Top Ambient Gradient */}
                <div
                  className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-slate-700/20 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Card Header: Glowing Icon & Pillar Capsule */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#131B2E] border border-slate-700/80 flex items-center justify-center text-white shadow-inner group-hover:border-slate-600 group-hover:scale-105 transition-all duration-200">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <span
                      className={`font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full border tracking-wider ${config.badgeColor}`}
                    >
                      PILLAR {cardNumber}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    {group.category}
                  </h3>

                  {/* Tier Subtitle */}
                  <div className="font-mono text-[10px] uppercase font-semibold text-slate-400 tracking-wider mt-1 mb-4">
                    {config.tier}
                  </div>

                  {/* Core Focus Narrative Box */}
                  <div className="p-4 rounded-xl bg-[#131B2E] border border-slate-800/90 text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {group.coreFocus}
                  </div>

                  {/* Skills Matrix: Clean Modern Badges (Zero Brackets) */}
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center justify-between">
                      <span>TECHNOLOGIES &amp; PROTOCOLS</span>
                      <span className="text-slate-400">({group.skills.length})</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => {
                        const isQueryMatch =
                          searchQuery &&
                          skill.toLowerCase().includes(searchQuery.toLowerCase().trim());

                        return (
                          <span
                            key={sIdx}
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-sans text-xs font-medium transition-all duration-150 cursor-default shadow-xs select-none ${
                              isQueryMatch
                                ? 'bg-white text-slate-950 font-bold ring-2 ring-emerald-400'
                                : 'bg-[#131B2E] hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${config.dotColor} shrink-0`}
                            />
                            <span>{skill}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Domain Mastery & Field Proven Status */}
                <div className="mt-8 pt-4 border-t border-slate-800 relative z-10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="uppercase tracking-wider">Ecosystem:</span>
                    <span className="text-slate-200 font-medium">{config.techDomain}</span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider pt-2 border-t border-slate-800/60">
                    <span className="text-slate-400">Execution Status</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Production Deployed</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search returned 0 items */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-12 bg-white border border-[#E2E8F0] rounded-2xl shadow-xs">
            <Sparkles className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
            <p className="font-heading font-bold text-sm text-[#1A1A1A]">
              No matching capabilities found
            </p>
            <p className="font-mono text-xs text-[#64748B] mt-1">
              Try resetting your search query or capability filter.
            </p>
          </div>
        )}

        <BarcodeDivider label="SECTION // 04-05" />
      </div>
    </section>
  );
};
