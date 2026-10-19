import React, { useState } from 'react';
import { Mail, Github, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/personal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#06b6d4', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="relative p-8 sm:p-12 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-950/30">
          {/* Subtle background gradient glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Get In Touch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Whether you want to discuss physics simulations, open-source engineering, developer tooling, or competitive math problem-solving—my inbox is always open.
            </p>

            {/* Email Pill & Actions */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8">
              <div className="flex items-center gap-2.5 px-4 py-2 text-sm sm:text-base font-mono text-cyan-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_DATA.email}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/25 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono">
              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>github.com/{PERSONAL_DATA.githubUsername}</span>
              </a>

              <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_DATA.location}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
