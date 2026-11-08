import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Send, ArrowUp, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { Barcode } from './Barcode';

export const Contact: React.FC = () => {
  const { person } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Consulting Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Scope & Message:\n${formData.message}`
    );
    window.location.href = `mailto:${person.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 bg-[var(--surface)] text-left">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-1">
            08 // CONSULTING & INQUIRIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
            Contact
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
            Available for Auto-ID architecture appraisals, enterprise RFID/barcode rollouts, and operational automation advisory.
          </p>
        </div>

        {/* Contact Links & Mailto Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12 items-start mb-20">
          {/* Left: Large Simple Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] pb-2 border-b border-[var(--line)]">
              Direct Channels
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${person.email}`}
                className="group p-5 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--secondary)] transition-colors block"
              >
                <div className="flex items-center justify-between text-[var(--muted)] text-xs font-mono uppercase mb-1">
                  <span>Email Inquiries</span>
                  <Mail className="w-4 h-4 text-[var(--secondary)]" />
                </div>
                <div className="font-heading text-lg sm:text-xl font-bold text-[var(--ink)] group-hover:text-[var(--secondary)] transition-colors break-all">
                  {person.email}
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${person.phone.replace(/\s+/g, '')}`}
                className="group p-5 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--secondary)] transition-colors block"
              >
                <div className="flex items-center justify-between text-[var(--muted)] text-xs font-mono uppercase mb-1">
                  <span>Voice / WhatsApp</span>
                  <Phone className="w-4 h-4 text-[var(--secondary)]" />
                </div>
                <div className="font-heading text-lg sm:text-xl font-bold text-[var(--ink)] group-hover:text-[var(--secondary)] transition-colors">
                  {person.phone}
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--secondary)] transition-colors block"
              >
                <div className="flex items-center justify-between text-[var(--muted)] text-xs font-mono uppercase mb-1">
                  <span>Professional Network</span>
                  <ExternalLink className="w-4 h-4 text-[var(--secondary)]" />
                </div>
                <div className="font-heading text-lg sm:text-xl font-bold text-[var(--ink)] group-hover:text-[var(--secondary)] transition-colors">
                  linkedin.com/in/zainmabid
                </div>
              </a>
            </div>
          </div>

          {/* Right: Mailto-based Contact Form */}
          <div className="lg:col-span-3 bg-[var(--bg)] border border-[var(--line)] rounded-[6px] p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] pb-2 mb-4 border-b border-[var(--line)]">
              Send an Operational Brief
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-1">
                  Full Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Operations Director"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-1">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-1">
                  Facility, Asset Tracking or ERP Scope
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your warehouse size, current asset audit workflow, or automation timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-[4px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-heading font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Initiate Mail Client Brief</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {submitted && (
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--secondary)] mt-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Mail client dispatched with your project brief. Thank you.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Meta & Copyright */}
        <div className="pt-10 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--muted)] font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logos/zma.png" alt="ZMA" className="h-6 w-auto object-contain bg-white rounded px-1.5 py-0.5 border border-[var(--line)] shadow-xs" />
              <Barcode value="ZAINTEGRATED // 2026" showText={false} height={20} className="opacity-60" />
            </div>
            <span>© 2026 {person.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Precision & Traceability Systems</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-[4px] border border-[var(--line)] bg-[var(--bg)] hover:bg-[var(--surface)] text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
