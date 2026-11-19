import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';

interface CareerMilestone {
  id: string;
  num: string;
  phase: string;
  role: string;
  company: string;
  city: string;
  dates: string;
  year: string;
  isCurrent?: boolean;
  signalTag: string;
  signalValue: string;
  summary: string;
  details: string[];
}

export const Experience: React.FC = () => {
  // 8 Career Milestones mapped chronologically (01 Genesis -> 08 Today)
  const milestones: CareerMilestone[] = [
    {
      id: 'attock-refinery',
      num: '01',
      phase: '01 — GENESIS',
      role: 'Engineering Intern (Refinery Operations & Technical Services)',
      company: 'Attock Refinery Limited',
      city: 'Rawalpindi, Pakistan',
      dates: 'Aug 2009 — Oct 2009',
      year: '2009',
      signalTag: 'SIGNAL // INDUSTRIAL ROOTS',
      signalValue: 'Process Engineering & Safety Protocols',
      summary:
        'Formative industrial immersion within Pakistan’s premier crude oil refining complex. Gained firsthand operational exposure to heavy process engineering, distributed instrumentation, cross-functional safety protocols, and rigorous quality inspection on live plant floors.',
      details: [
        'Shadowed senior process engineers across crude distillation units, monitoring flow rates, temperature gradients, and pressure differentials',
        'Inspected electrical, mechanical, and safety instrumentation across active hydrocarbon processing units',
        'Documented preventative maintenance routines, emergency shutdown protocols, and industrial environmental safety SOPs'
      ]
    },
    {
      id: 'rational-engineering',
      num: '02',
      phase: '02 — FOUNDATION',
      role: 'Operations & IT Systems Lead',
      company: 'Rational Engineering Pvt. Ltd.',
      city: 'Islamabad / Rawalpindi, Pakistan',
      dates: 'May 2011 — Jan 2015',
      year: '2011–15',
      signalTag: 'SIGNAL // OPERATIONAL RESILIENCE',
      signalValue: 'Full-Spectrum Business Execution',
      summary:
        'Formative multi-disciplinary leadership within the family-owned industrial engineering enterprise. Spearheaded internal IT infrastructure, administrative workflows, corporate documentation, web presence, and digital marketing while mastering grassroots business execution.',
      details: [
        'Managed end-to-end administrative operations, corporate documentation, regulatory compliance, and client contracts across engineering projects',
        'Architected and maintained the internal IT network, workstation deployments, systems backup, and digital communications pipelines',
        'Designed and launched the company’s corporate website, digital brand presence, and social media marketing strategy from the ground up',
        'Served as the hands-on operational hub connecting technical site teams, procurement, and management — forging deep expertise in commercial acumen, vendor handling, and real-world business resilience'
      ]
    },
    {
      id: 'tritech',
      num: '03',
      phase: '03 — INFRASTRUCTURE',
      role: 'Admin Manager IT',
      company: 'Tri Tech (Pvt.) Ltd.',
      city: 'Lahore, Pakistan',
      dates: 'Nov 2015 — May 2017',
      year: '2015–17',
      signalTag: 'SIGNAL // SYSTEMS GOVERNANCE',
      signalValue: 'Infrastructure SOPs & Redundancy',
      summary:
        'Introduced SOPs and documentation, managed user access and storage, set up backup and restore procedures, and maintained structured IT service continuity.',
      details: [
        'Instituted baseline IT infrastructure security controls, user permission hierarchies, and backup redundancy',
        'Drafted company-wide IT compliance documentation, workstation provisioning guidelines, and hardware maintenance protocols'
      ]
    },
    {
      id: 'eccountax',
      num: '04',
      phase: '04 — GOVERNANCE',
      role: 'Project Coordinator and IT Consultant',
      company: 'Eccountax',
      city: 'Lahore, Pakistan',
      dates: 'Jun 2017 — Jun 2019',
      year: '2017–19',
      signalTag: 'SIGNAL // CLIENT DELIVERY',
      signalValue: 'Milestone Governance & Digital Roadmaps',
      summary:
        'Coordinated project timelines and stakeholders; advised clients on technical solutions, cloud migrations, and workflow optimizations.',
      details: [
        'Maintained structured project milestones, risk registers, and cross-departmental delivery schedules',
        'Facilitated client alignment workshops, converting operational requirements into structured IT tasks'
      ]
    },
    {
      id: 'nexus',
      num: '05',
      phase: '05 — EXPANSION',
      role: 'Technical Sales and Solutions Manager',
      company: 'Nexus Technologies',
      city: 'Islamabad, Pakistan',
      dates: 'Nov 2019 — Oct 2023',
      year: '2019–23',
      signalTag: 'SIGNAL // ENTERPRISE SCALE',
      signalValue: 'Multi-Year Software Strategy',
      summary:
        'Led business development and enterprise solution sales across industries; architected high-impact technical demonstrations for ERP and automation systems.',
      details: [
        'Managed multi-year client relationships, expanding accounts across industrial, commercial, and government sectors',
        'Led solution architecture presentations, bid tenders, and RFP technical compliance responses',
        'Bridged commercial targets with technical viability, ensuring zero margin slippage during implementation handoffs'
      ]
    },
    {
      id: 'erp-presales-consultancy',
      num: '06',
      phase: '06 — ARCHITECTURE',
      role: 'ERP Pre-Sales & Consultancy',
      company: 'Confidential',
      city: 'Lahore, Pakistan',
      dates: 'May 2024 — May 2025',
      year: '2024–25',
      signalTag: 'SIGNAL // ERP INTEGRATION',
      signalValue: 'Process Gap Analysis & API Integration',
      summary:
        'Delivered end-to-end ERP consultancy, pre-sales architecture, business requirement engineering, and system integration roadmaps for enterprise automation and ERP migration clients.',
      details: [
        'Spearheaded technical pre-sales, executive requirement scoping, and high-impact proof-of-concept demonstrations for ERP migration clients',
        'Conducted operational gap analysis across inventory, procurement, supply chain, and production accounting workflows',
        'Collaborated with engineering to architect API integration paths between legacy databases, edge devices, and cloud ERP systems',
        'Directed data migration schemas, custom reporting engines, SOP documentation, and hands-on end-user training'
      ]
    },
    {
      id: 'emergtech',
      num: '07',
      phase: '07 — EXECUTION',
      role: 'COO/CSO and Project Delivery Lead',
      company: 'EmergTech Solutions Pvt. Ltd.',
      city: 'Lahore, Pakistan',
      dates: 'Apr 2025 — Jan 2026',
      year: '2025–26',
      signalTag: 'SIGNAL // FIELD AUTOMATION',
      signalValue: 'WIP Tracking & Turnkey RFID Portals',
      summary:
        'Ran operational strategy and delivery for RFID, barcode and warehouse automation; led solution design, POCs and deployment coordination; supervised the RFID hardware integration teams on active factory floors.',
      details: [
        'Directed cross-functional engineering and installation teams on large-scale RFID portal and handheld rollouts',
        'Spearheaded technical presales, architectural proof-of-concepts, and client requirement validations',
        'Established standard operating procedures for UHF tag tuning, reader antenna placement, and site RF surveys'
      ]
    },
    {
      id: 'zaintegrated-solutions',
      num: '08',
      phase: '08 — TODAY',
      role: 'Founder & Managing Director',
      company: 'Zaintegrated Solutions',
      city: 'Lahore, Pakistan',
      dates: 'Current',
      year: 'Current',
      isCurrent: true,
      signalTag: 'SIGNAL // ACTIVE LEADERSHIP',
      signalValue: 'Zero-Loss Traceability & Industry 4.0',
      summary:
        'Directing enterprise operations consulting, Auto-ID engineering, and software products. Consultant and technical advisor to multiple national and international organizations on physical asset visibility, warehouse automation, and ERP integrations.',
      details: [
        'Directing strategic consulting for national and international enterprises scaling physical asset tracking, inventory counts, and supply chain visibility',
        'Architecting integrated solutions connecting RFID/barcode edge devices with modern cloud ERP and inventory systems',
        'Delivering vendor-neutral hardware evaluations, middleware architectures, RF site surveys, and turnkey execution roadmaps'
      ]
    }
  ];

  // Default to the current Founder & MD role (08)
  const [selectedId, setSelectedId] = useState<string>('zaintegrated-solutions');

  const activeMilestone =
    milestones.find((m) => m.id === selectedId) || milestones[milestones.length - 1];

  return (
    <section
      id="experience"
      data-section-theme="dark"
      className="py-28 sm:py-36 border-b border-slate-800 bg-[#0F172A] text-white"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Tag Capsule */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 font-mono text-[11px] uppercase tracking-wider text-slate-200 shadow-xs">
            [ EVOLUTION MATRIX // AUTHORITY MAPPING ]
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-white leading-tight max-w-3xl">
          A Decade of Software Strategy. Grounded on the Factory Floor.
        </h2>

        {/* Horizontal Line Trace Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-[1px] bg-slate-800 my-12"
        />

        {/* The Evolution Matrix: Two Asymmetric Flat Crisp Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* COLUMN A - THE FOUNDATION (2009 - 2024) */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-[#131B2E] flex flex-col justify-between shadow-md hover:border-slate-700 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-800">
                <span className="font-mono text-xs uppercase font-medium tracking-wider text-[#94A3B8]">
                  [ THE FOUNDATION ]
                </span>
                <span className="font-mono text-xs text-[#94A3B8]">2009 — 2024</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white tracking-[-0.02em] mb-3">
                Enterprise Tech &amp; Software Strategy
              </h3>

              <p className="text-base text-[#94A3B8] leading-relaxed font-normal">
                Over a decade operating across industrial operations, enterprise software, and systems integration. Grounded in grassroots engineering management, C-suite business alignment, and scaled architectures.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span>CRM • ERP • Enterprise Pre-sales • Scaled Systems</span>
            </div>
          </div>

          {/* COLUMN B - THE FOCUS (2024 - PRESENT) */}
          <div className="p-8 rounded-2xl border border-slate-700 bg-[#162035] flex flex-col justify-between shadow-md hover:border-slate-600 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-700">
                <span className="font-mono text-xs uppercase font-semibold tracking-wider text-white">
                  [ THE FOCUS ]
                </span>
                <span className="font-mono text-xs font-semibold text-white">2024 — PRESENT</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white tracking-[-0.02em] mb-3">
                Raw Operational Execution &amp; Industry 4.0
              </h3>

              <p className="text-base text-slate-100 leading-relaxed font-normal">
                Transitioning execution directly to raw operations. Solving the physical-to-digital disconnect by deploying active WIP automation, custom barcode tracking, and deep RFID integration.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-2 font-mono text-[11px] text-slate-200 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>RFID Infrastructure • WIP Automation • Zero-Loss Traceability</span>
            </div>
          </div>
        </div>

        {/* SECTION HEADER FOR INTERACTIVE TIMELINE */}
        <div className="mb-8 flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-slate-300" />
              <span>CAREER TRAJECTORY // 8 MILESTONES</span>
            </div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
              Chronological Track Record
            </h3>
          </div>
          <div className="font-mono text-xs text-[#94A3B8] hidden sm:block">
            2009 (Genesis) ➔ 2026+ (Active Leadership)
          </div>
        </div>

        {/* --- MAIN INTERACTIVE SHOWCASE: LEFT CARD + RIGHT WAVE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: FEATURED DETAIL CARD */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-800 bg-[#131B2E] shadow-2xl p-7 sm:p-9 flex flex-col justify-between min-h-[540px] overflow-hidden">
              {/* Subtle Ambient Radial Glow */}
              <div
                className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-slate-700/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="relative z-10 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Tag & Location Pill */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">
                        {activeMilestone.phase}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5 bg-[#0B1120] px-3 py-1 rounded-full border border-slate-800">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{activeMilestone.city}</span>
                      </span>
                    </div>

                    {/* Prominent Role Title Heading */}
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
                      {activeMilestone.role}
                    </h3>

                    {/* Company & Period Badge Row */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="text-sm sm:text-base font-semibold text-slate-200">
                        {activeMilestone.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {activeMilestone.dates}
                      </span>
                      {activeMilestone.isCurrent && (
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Active Leadership
                        </span>
                      )}
                    </div>

                    {/* Narrative Summary Callout */}
                    <div className="p-4 sm:p-5 rounded-xl bg-[#0B1120] border-l-4 border-slate-400 text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                      {activeMilestone.summary}
                    </div>

                    {/* Key Operational Deliverables Checklist */}
                    {activeMilestone.details && activeMilestone.details.length > 0 && (
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] mb-3 font-semibold">
                          KEY OPERATIONAL DELIVERABLES
                        </div>
                        <ul className="space-y-2.5">
                          {activeMilestone.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Bottom Signal Badge Container */}
                  <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0B1120] border border-slate-800 shadow-inner">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                          {activeMilestone.signalTag}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white tracking-tight mt-0.5">
                          {activeMilestone.signalValue}
                        </div>
                      </div>
                    </div>

                    <div className="font-mono text-xs text-slate-400">
                      MILESTONE // {activeMilestone.num} OF 08
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CAREER WAVE (IN PLACE OF TABS) */}
          <div className="lg:col-span-5 relative rounded-3xl border border-slate-800 bg-[#131B2E] p-5 sm:p-6 min-h-[540px] flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Background SVG Wave Curve running continuously behind nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 400 540"
            >
              <defs>
                <linearGradient id="verticalWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#64748B" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>
              </defs>
              {/* Smooth alternating sine-wave path snaking vertically */}
              <path
                d="M 32,34 C 32,67 64,67 64,101 C 64,135 32,135 32,168 C 32,202 64,202 64,235 C 64,269 32,269 32,302 C 32,336 64,336 64,369 C 64,403 32,403 32,436 C 32,470 64,470 64,503"
                fill="none"
                stroke="url(#verticalWaveGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* 8 Interactive Milestone Rows positioned along the wave */}
            <div className="relative z-10 flex flex-col justify-between h-full space-y-1">
              {milestones.map((m, idx) => {
                const isActive = m.id === activeMilestone.id;
                // Alternating horizontal wave displacement: even indices (0, 2, 4, 6) at x=32, odd indices (1, 3, 5, 7) at x=64
                const isAlternate = idx % 2 === 1;

                return (
                  <div
                    key={m.id}
                    onMouseEnter={() => setSelectedId(m.id)}
                    onClick={() => setSelectedId(m.id)}
                    className="relative flex items-center gap-3.5 py-1.5 cursor-pointer group transition-all duration-150"
                  >
                    {/* Node Circle along Wave Path */}
                    <div
                      className={`relative flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isAlternate ? 'ml-[46px]' : 'ml-[14px]'
                      }`}
                    >
                      {/* Active Outer Pulse Ring */}
                      {isActive && (
                        <div className="absolute -inset-1.5 rounded-full bg-white/20 animate-pulse pointer-events-none" />
                      )}

                      {/* Numbered Bubble */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 ${
                          isActive
                            ? 'bg-white text-slate-950 border-2 border-white shadow-lg scale-110'
                            : 'bg-[#0F172A] text-slate-400 border border-slate-700 group-hover:border-slate-500 group-hover:text-white'
                        }`}
                      >
                        {m.num}
                      </div>
                    </div>

                    {/* Designation Only next to Wave Node */}
                    <div className="min-w-0 flex-1 pl-2">
                      <div
                        className={`font-heading text-sm sm:text-[15px] font-semibold truncate transition-colors ${
                          isActive ? 'text-white font-bold' : 'text-slate-300 group-hover:text-white'
                        }`}
                      >
                        {m.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
