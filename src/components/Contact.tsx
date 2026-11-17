import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Send, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/content';
import { Barcode } from './Barcode';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { person } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Operational Discussion with ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nNotes / Operations Inquiries:\n${formData.message}`
    );
    window.location.href = `mailto:${person.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 bg-[var(--surface)] text-left border-t border-[var(--line)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Direct Connection Human CTA Callout */}
        <div className="mb-16 p-8 sm:p-10 rounded-[8px] bg-[var(--bg)] border border-[var(--accent)]/40 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold block mb-3">
              DIRECT CONVERSATION // ZERO JARGON
            </span>

            {/* Exact Human Copy */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--ink)] leading-snug">
              “Let’s bypass the corporate jargon. If your warehouse data isn’t matching your ERP, or you're trying to figure out if RFID is actually worth your investment—let’s talk.”
            </h2>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[4px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-bold text-sm uppercase tracking-wider transition-all shadow-xs"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>Let's Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`mailto:${person.email}?subject=${encodeURIComponent("Let's Talk: Operations & RFID Sync")}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[4px] bg-[var(--surface)] hover:bg-[var(--surface-alt)] text-[var(--ink)] border border-[var(--line)] font-semibold text-sm uppercase tracking-wider transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span>Book a Sync via Email</span>
              </a>

              <a
                href="https://wa.me/923205270594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[var(--surface)] hover:bg-[var(--surface-alt)] text-[var(--ink)] border border-[var(--line)] font-semibold text-sm uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12 items-start mb-20">
          {/* Left: Direct Access Points */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] pb-2 border-b border-[var(--line)]">
              Direct Contact Details
            </h3>

            {/* Email */}
            <a
              href={`mailto:${person.email}`}
              className="group p-5 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--accent)] transition-colors block"
            >
              <div className="flex items-center justify-between text-[var(--muted)] text-xs font-mono uppercase mb-1">
                <span>Direct Corporate Email</span>
                <Mail className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div className="font-heading text-lg sm:text-xl font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors break-all">
                {person.email}
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${person.phone.replace(/\s+/g, '')}`}
              className="group p-5 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--accent)] transition-colors block"
            >
              <div className="flex items-center justify-between text-[var(--muted)] text-xs font-mono uppercase mb-1">
                <span>Phone / WhatsApp Line</span>
                <Phone className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div className="font-heading text-lg sm:text-xl font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                {person.phone}
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-[6px] bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--accent)] transition-colors block"
            >
              <div className="flex items-center justify-between text-[var(--muted)] text-xs font-mono uppercase mb-1">
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div className="font-heading text-lg sm:text-xl font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                linkedin.com/in/zainmabid
              </div>
            </a>
          </div>

          {/* Right: Quick Direct Note Form */}
          <div className="lg:col-span-3 bg-[var(--bg)] border border-[var(--line)] rounded-[6px] p-6 sm:p-8">
            <div className="pb-2 mb-4 border-b border-[var(--line)] flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                Leave a Quick Message
              </h3>
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold">Direct to Inbox</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-1">
                  Your Name &amp; Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Operations Manager, Retail Distribution"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-1">
                  Email Address
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
                  Operational Challenge or Question
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="e.g. We have inventory variance between shop floor and SAP, looking to pilot RFID on finished goods..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[4px] bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[4px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-fg)] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Send Direct Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                {submitted && (
                  <span className="text-xs text-[var(--accent)] font-medium">
                    Opening your default email client...
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer Meta & Copyright */}
        <div className="pt-10 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-3">
            <img src="/logos/zma.png" alt="ZMA" className="h-6 w-auto object-contain bg-white rounded p-0.5 border border-[var(--line)]" />
            <div>
              <span className="font-heading font-bold text-[var(--ink)]">Zain Mashhood Abid</span>
              <span className="mx-2">•</span>
              <span>Zaintegrated Solutions</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
