import React from 'react';
import { ArrowRight, Github, Terminal, MapPin, Award, BookOpen } from 'lucide-react';
import { PERSONAL_DATA } from '../data/personal';
import { PhysicsVisualizer } from './PhysicsVisualizer';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Hero Card (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-dark-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-slate-200">
                  JEE 2027 Aspirant &bull; Bakliwal Tutorials Pune
                </span>
              </div>

              {/* Title / Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200 bg-clip-text text-transparent">Aayush Shah</span>.
                <br />
                <span className="text-slate-300 font-bold text-2xl sm:text-3xl md:text-4xl">
                  Building software at the intersection of physics, math & code.
                </span>
              </h1>

              {/* Bio summary */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                {PERSONAL_DATA.bio}
              </p>
            </div>

            {/* CTAs and quick highlights */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-mono text-xs sm:text-sm transition-all hover:scale-[1.02]"
              >
                <Github className="w-4 h-4" />
                <span>github.com/{PERSONAL_DATA.githubUsername}</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 ml-auto font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pune, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visualizer & Bento Stat Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Physics Visualizer Card */}
            <div className="flex-1 min-h-[220px]">
              <PhysicsVisualizer />
            </div>

            {/* Quick Stats Bento Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-dark-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">CBSE 10th</span>
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-extrabold text-white">98.8%</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Shantiniketan School</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">Target Year</span>
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-extrabold text-white">JEE 2027</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Bakliwal Tutorials</p>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Bar */}
            <div className="p-4 rounded-2xl bg-dark-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  Everyday Toolkit
                </span>
                <span className="text-[10px] text-cyan-400 font-mono">Self-Taught Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React.js', 'Angular', 'Python', 'C++', 'SQL', 'Supabase', 'Tauri v2', 'TypeScript'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] text-[11px] font-mono text-slate-200 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
