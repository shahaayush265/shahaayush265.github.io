import React from 'react';
import { Trophy, Award, Shield, GraduationCap, Code, Sparkles, Atom, BookOpen } from 'lucide-react';
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
      case 'Atom':
        return <Atom className="w-5 h-5 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      default:
        return <Trophy className="w-5 h-5 text-amber-400" />;
    }
  };

  const getAccentBorder = (category: Achievement['category']) => {
    switch (category) {
      case 'Olympiad & CP':
        return 'border-indigo-500/25 hover:border-indigo-400/50 shadow-indigo-950/20';
      case 'Academics':
        return 'border-amber-500/25 hover:border-amber-400/50 shadow-amber-950/20';
      case 'STEM & Innovation':
        return 'border-sky-500/25 hover:border-sky-400/50 shadow-sky-950/20';
      case 'Leadership':
        return 'border-purple-500/25 hover:border-purple-400/50 shadow-purple-950/20';
      case 'Entrepreneurship':
        return 'border-yellow-500/25 hover:border-yellow-400/50 shadow-yellow-950/20';
      case 'Athletics':
        return 'border-emerald-500/25 hover:border-emerald-400/50 shadow-emerald-950/20';
      default:
        return 'border-white/10 hover:border-cyan-400/50 shadow-cyan-950/20';
    }
  };

  const getMetricBadgeStyle = (category: Achievement['category']) => {
    switch (category) {
      case 'Olympiad & CP':
        return 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
      case 'Academics':
        return 'text-amber-300 bg-amber-500/10 border-amber-500/30';
      case 'STEM & Innovation':
        return 'text-sky-300 bg-sky-500/10 border-sky-500/30';
      case 'Leadership':
        return 'text-purple-300 bg-purple-500/10 border-purple-500/30';
      case 'Entrepreneurship':
        return 'text-yellow-300 bg-yellow-500/10 border-yellow-500/30';
      case 'Athletics':
        return 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30';
      default:
        return 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30';
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Key Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Major Achievements
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Key milestones across Olympiad competitions, CBSE board excellence, national exhibitions, leadership roles, and athletics.
          </p>
        </div>

        {/* Balanced 2-Column Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PERSONAL_DATA.achievements.map((item) => {
            const isCbse = item.id === 'cbse-10th';

            return (
              <div
                key={item.id}
                className={`group relative p-5 sm:p-6 rounded-3xl bg-dark-900/75 border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${getAccentBorder(
                  item.category
                )}`}
              >
                {/* Subtle ambient glow for 10th CBSE & ZCO */}
                {isCbse && (
                  <div className="absolute top-0 right-0 w-52 h-52 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div>
                  {/* Top Row: Category + Compact Sleek Metric Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4 min-w-0">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400 font-semibold truncate">
                      {item.category}
                    </span>
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0 ${getMetricBadgeStyle(
                        item.category
                      )}`}
                    >
                      {item.metric}
                    </span>
                  </div>

                  {/* Header: Fixed Square Icon Box + Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    {/* Fixed aspect-square icon container that never collapses into a pill */}
                    <div className="w-11 h-11 min-w-[44px] min-h-[44px] aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      {getIcon(item.iconName)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-1 truncate">
                        {item.organization}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>

                {/* Subtle highlight tag if present */}
                {item.highlightBadge && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-end">
                    <span className="text-[11px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
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
