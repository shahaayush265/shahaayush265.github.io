import React from 'react';
import { Trophy, Award, Shield, GraduationCap, Code, Sparkles } from 'lucide-react';
import { PERSONAL_DATA, Achievement } from '../data/personal';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: Achievement['iconName']) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      default:
        return <Trophy className="w-5 h-5 text-amber-400" />;
    }
  };

  const getAccentBorder = (id: string) => {
    switch (id) {
      case 'cbse-10th':
        return 'border-amber-500/30 hover:border-amber-400/60 shadow-amber-950/20';
      case 'karate-green-belt':
        return 'border-emerald-500/20 hover:border-emerald-400/50 shadow-emerald-950/20';
      case 'jee-prep-selection':
        return 'border-cyan-500/20 hover:border-cyan-400/50 shadow-cyan-950/20';
      default:
        return 'border-indigo-500/20 hover:border-indigo-400/50 shadow-indigo-950/20';
    }
  };

  const getMetricColor = (id: string) => {
    switch (id) {
      case 'cbse-10th':
        return 'text-amber-300 bg-amber-500/10 border-amber-500/30';
      case 'karate-green-belt':
        return 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30';
      case 'jee-prep-selection':
        return 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30';
      default:
        return 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Major Achievements
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Key milestones across competitive academics, athletic martial discipline, and software engineering.
          </p>
        </div>

        {/* Balanced 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERSONAL_DATA.achievements.map((item) => {
            const isCbse = item.id === 'cbse-10th';

            return (
              <div
                key={item.id}
                className={`group relative p-6 sm:p-7 rounded-3xl bg-dark-900/75 border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${getAccentBorder(
                  item.id
                )}`}
              >
                {/* Subtle top ambient glow */}
                {isCbse && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div>
                  {/* Top Row: Category + Metric Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400 font-medium">
                      {item.category}
                    </span>
                    <span
                      className={`font-mono font-bold text-sm sm:text-base px-3 py-1 rounded-xl border ${getMetricColor(
                        item.id
                      )}`}
                    >
                      {item.metric}
                    </span>
                  </div>

                  {/* Header: Icon + Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      {getIcon(item.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-1">
                        <Sparkles className="w-3 h-3 text-amber-400/80" />
                        <span>{item.organization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill if present */}
                {item.highlightBadge && (
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      Distinction
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-200 bg-white/5 px-2.5 py-0.5 rounded-lg border border-white/10">
                      {item.highlightBadge}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
