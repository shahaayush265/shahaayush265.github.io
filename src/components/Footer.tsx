import React from 'react';
import { Github, ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-950 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs">
              AS
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {PERSONAL_DATA.name}
              </p>
              <p className="text-xs text-slate-400">
                Self-taught Full Stack Developer &bull; JEE 2027 Aspirant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
            <span>Built with React, Vite & Tailwind</span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="hidden sm:inline">Hosted on GitHub Pages</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Aayush Shah. Open source under MIT License.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with precision & passion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
