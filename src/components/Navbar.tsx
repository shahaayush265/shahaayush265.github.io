import React, { useState, useEffect } from 'react';
import { Github, Mail, Menu, X } from 'lucide-react';
import { PERSONAL_DATA } from '../data/personal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900/85 backdrop-blur-md border border-white/10 shadow-2xl shadow-indigo-950/20'
            : 'bg-dark-900/50 backdrop-blur-sm border border-white/5'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#about"
          className="flex items-center gap-2.5 group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-transparent">
                AS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
              Aayush Shah
            </span>
            <span className="text-[10px] font-mono text-slate-400 leading-none">
              Full Stack &bull; JEE '27
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-2 py-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Social & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
            title="View GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold text-white px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/25 transition-all hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto p-4 rounded-2xl bg-dark-900/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-slate-200 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-white/10 flex items-center gap-3">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-indigo-600 text-xs font-medium text-white"
            >
              <Mail className="w-4 h-4" />
              Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
