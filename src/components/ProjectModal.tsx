import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[var(--surface)] border border-[var(--line)] border-t-4 border-t-[var(--accent)] rounded-[6px] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[var(--ink)] text-left"
      >
        {/* Header Label Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--line)]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] bg-[var(--accent)] text-[var(--accent-fg)] font-bold">
                {project.industry}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                Client: <strong className="text-[var(--ink)]">{project.client}</strong>
              </span>
            </div>
            <h2 id="modal-project-title" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)]">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-[4px] border border-[var(--line)] hover:bg-[var(--surface-alt)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Description */}
        <div className="py-5 border-b border-[var(--line)]">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-2">
            Scope & Overview
          </h3>
          <p className="text-[var(--ink)] text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Detailed Case Study (Challenge & Solution) */}
        {project.fullCaseStudy && (
          <div className="py-5 border-b border-[var(--line)] space-y-4">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-1.5">
                The Operational Challenge
              </h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {project.fullCaseStudy.challenge}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-1.5">
                Engineered Solution
              </h4>
              <p className="text-sm text-[var(--ink)] leading-relaxed">
                {project.fullCaseStudy.solution}
              </p>
            </div>
          </div>
        )}

        {/* Hardware & Components Deployed */}
        {project.fullCaseStudy?.hardwareDeployed && (
          <div className="py-5 border-b border-[var(--line)]">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[var(--secondary)]" />
              Hardware & Auto-ID Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.fullCaseStudy.hardwareDeployed.map((hw, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded-[3px] bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--ink)]"
                >
                  {hw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Measured Outcomes */}
        <div className="py-5">
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-3">
            Key Outcomes & Deliverables
          </h4>
          <ul className="space-y-2.5">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--ink)] leading-normal">
                <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-[2px] bg-[var(--surface-alt)] text-[var(--muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-[4px] bg-[var(--surface-alt)] hover:bg-[var(--line)] text-xs font-mono uppercase tracking-wider text-[var(--ink)] transition-colors cursor-pointer"
          >
            Close Dialog
          </button>
        </div>
      </div>
    </div>
  );
};
