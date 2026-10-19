import React from 'react';
import { Trophy, Award, Shield, GraduationCap, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_DATA, Achievement } from '../data/personal';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: Achievement['iconName']) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-indigo-400" />;
      default:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
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
            Key milestones across competitive academics, athletics, and self-directed systems engineering.
          </p>
        </div>

        {/* Bento Grid Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PERSONAL_DATA.achievements.map((item) => {
            const isCbse = item.id === 'cbse-10th';

            return (
              <div
                key={item.id}
                className={`group relative p-7 rounded-3xl bg-dark-900/70 border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isCbse
                    ? 'md:col-span-7 border-amber-500/30 hover:border-amber-400/50 hover:shadow-amber-950/30 bg-gradient-to-br from-amber-500/[0.04] via-dark-900/80 to-dark-950'
                    : 'md:col-span-5 border-white/10 hover:border-indigo-500/30 hover:shadow-indigo-950/20'
                }`}
              >
                {/* Glow backdrop for CBSE top honor */}
                {isCbse && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div>
                  {/* Top Bar: Icon + Metric + Badge */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getIcon(item.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isCbse ? 'text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]' : 'text-white'
                      }`}>
                        {item.metric}
                      </span>
                      {item.highlightBadge && (
                        <span className="mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
                          {item.highlightBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Organization & Description */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.organization}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer validation / verification */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Credential / Honor
                  </span>
                  <span className="text-slate-400">Official Record</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
