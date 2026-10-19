import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_DATA } from '../data/personal';

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Journey
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Balancing rigorous competitive STEM education with self-directed software engineering.
          </p>
        </div>

        {/* Timeline Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERSONAL_DATA.education.map((item, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6 text-amber-400" />}
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.duration}
                    </span>
                    {item.score && (
                      <span className="mt-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold font-mono text-amber-300">
                        Score: {item.score}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.institution}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.location}</span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="text-slate-300">{item.degree}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Skills / Focus Pills */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Disciplines & Focus
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skillsOrFocus.map((focus) => (
                    <span
                      key={focus}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Self-Taught Dev Philosophy Banner */}
        <div className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-dark-900/80 to-cyan-950/40 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">The Self-Taught Engineering Mindset</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Every framework, language, and system architecture learned through building real-world software, writing documentation, and reading open-source engines.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 whitespace-nowrap bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
            <span>Problem First &bull; Code Second</span>
          </div>
        </div>

      </div>
    </section>
  );
};
