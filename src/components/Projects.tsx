import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, Project, ProjectTag } from '@/data/content';
import { ProjectModal } from './ProjectModal';
import { BarcodeDivider } from './Barcode';

const FILTER_TAGS: ProjectTag[] = [
  'All',
  'RFID',
  'Barcode',
  'Asset tracking',
  'WIP automation',
  'Warehouse',
  'ERP'
];

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedTag, setSelectedTag] = useState<ProjectTag>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedTag === 'All') return true;
    return project.tags.includes(selectedTag);
  });

  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            02 // CASE STUDIES & IMPLEMENTATIONS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Selected Work
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            Enterprise Auto-ID architectures, shop-floor traceability rollouts, and hardware engineering engagements.
          </p>
        </div>

        {/* Filter Chip Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[var(--line)]">
          <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[var(--secondary)]" /> Filter:
          </span>
          {FILTER_TAGS.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-[3px] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--accent-fg)] font-bold shadow-xs'
                    : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)] border border-[var(--line)] hover:border-[var(--muted)]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveProject(project)}
                className="asset-card p-6 sm:p-7 flex flex-col justify-between cursor-pointer group select-none text-left"
              >
                <div>
                  {/* Top Shipping / Asset Label Header */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[var(--line)]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--accent)] text-[var(--accent-fg)]">
                        {project.industry}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                        Client: <strong className="text-[var(--ink)] font-semibold">{project.client}</strong>
                      </span>
                    </div>

                    <div className="p-1 rounded-[3px] text-[var(--muted)] group-hover:text-[var(--secondary)] group-hover:bg-[var(--surface-alt)] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)] group-hover:text-[var(--secondary)] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="mt-2.5 text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* 3 Bullet Outcomes */}
                  <div className="mt-5 pt-4 border-t border-[var(--line)]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] block mb-2">
                      Key Outcomes:
                    </span>
                    <ul className="space-y-2">
                      {project.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[var(--ink)] leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--secondary)] shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Tag Row */}
                <div className="mt-6 pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-[2px] bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--muted)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-[11px] text-[var(--secondary)] font-semibold group-hover:underline flex items-center gap-0.5">
                    View Details
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Barcode Divider */}
        <BarcodeDivider label="SECTION // 02-03" />
      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
