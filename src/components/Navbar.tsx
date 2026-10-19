import React, { useState, useEffect } from 'react';
import { Github, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/personal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'journey', label: 'Journey', href: '#journey' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'interests', label: 'Interests', href: '#interests' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy: determine currently active section
      const sectionElements = navLinks
        .map((link) => ({ id: link.id, element: document.getElementById(link.id) }))
        .filter((item): item is { id: string; element: HTMLElement } => item.element !== null);

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-3 sm:py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-indigo-950/20'
            : 'bg-dark-900/60 backdrop-blur-sm border border-white/5'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#about"
          className="flex items-center gap-2.5 group flex-shrink-0"
          onClick={() => setActiveSection('about')}
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
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

        {/* Desktop Navigation - active on lg (>=1024px) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-2 py-1 flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all whitespace-nowrap relative ${
                  isActive
                    ? 'text-cyan-300 bg-white/10 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Quick Social & CTA */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href={PERSONAL_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105"
            title="View GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden md:inline">GitHub</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold text-white px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/25 transition-all hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile menu toggle - visible below lg (<1024px) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95"
          aria-label="Toggle navigation drawer"
        >
          {mobileOpen ? <X className="w-5 h-5 text-cyan-300" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Animated Backdrop Overlay for Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Animated Navigation Drawer (Slide Down + Fade + Expand) */}
      <div
        className={`fixed top-20 left-3 right-3 sm:left-6 sm:right-6 max-w-lg mx-auto z-50 lg:hidden transition-all duration-300 ease-out transform ${
          mobileOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="p-4 sm:p-5 rounded-3xl bg-dark-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-indigo-950/50 flex flex-col gap-1.5 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-1 mb-1 border-b border-white/10 text-xs font-mono text-slate-400">
            <span>Navigation</span>
            <span className="text-[11px] text-cyan-400">Jump to section</span>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? 'bg-cyan-400 scale-125 shadow-sm shadow-cyan-400/50' : 'bg-slate-600'
                    }`}
                  />
                  <span>{link.label}</span>
                </div>
                {isActive && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    Active
                  </span>
                )}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-white/10 flex items-center gap-2">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="#contact"
              onClick={() => {
                setActiveSection('contact');
                setMobileOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

