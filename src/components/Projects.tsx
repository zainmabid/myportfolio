import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/content';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-28 sm:py-36 border-b border-slate-200 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-[11px] uppercase tracking-wider text-[#0F172A] mb-3 shadow-xs">
            [ CASE STUDIES // FIELD REALITY ]
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight">
            Selected Enterprise Deployments
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            Eliminating physical-to-digital inventory discrepancies across high-throughput industrial and consumer goods operations.
          </p>
        </div>

        {/* Bento Realism Grid: Flat, crisp white cards: bg-white border border-slate-100 rounded-2xl shadow-sm p-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative flex flex-col justify-between p-8 rounded-2xl border border-slate-100 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm"
            >
              <div>
                {/* Top Labels Row: Monospace capsule tags & Arrow */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase font-medium px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 tracking-wider"
                      >
                        [ {tag} ]
                      </span>
                    ))}
                  </div>

                  {/* Structural Diagonal Arrow */}
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 group-hover:border-slate-400 flex items-center justify-center text-slate-500 group-hover:text-[#0F172A] transition-all duration-200 shrink-0">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Industry Domain */}
                <div className="mb-6">
                  <span className="text-xs text-[#475569] font-mono uppercase tracking-wider block mb-1">
                    {project.industry}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* The 3 Punchy Fragments (Context / Fix / Reality) */}
                <div className="space-y-3.5 pt-5 border-t border-slate-100">
                  <div className="text-sm">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-0.5">
                      The Context:
                    </span>
                    <p className="text-[#475569] leading-relaxed font-normal">
                      {project.bento.context}
                    </p>
                  </div>

                  <div className="text-sm">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-800 font-semibold block mb-0.5">
                      The Fix:
                    </span>
                    <p className="text-[#0F172A] leading-relaxed font-normal">
                      {project.bento.fix}
                    </p>
                  </div>

                  <div className="text-sm">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mb-0.5">
                      The Reality:
                    </span>
                    <p className="text-[#475569] leading-relaxed font-normal">
                      {project.bento.reality}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer: Subtle Read Prompt */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>View Full Architecture Spec</span>
                <span className="text-[#0F172A] font-semibold group-hover:translate-x-1 transition-transform">
                  Inspect Case Study ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
