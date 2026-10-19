import React from 'react';
import { Code2, Layout, Server, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_DATA } from '../data/personal';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      default: return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            A versatile multi-paradigm toolset spanning systems engineering, web frontends, and database backends.
          </p>
        </div>

        {/* Bento Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PERSONAL_DATA.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-950/30"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        {skill.iconColor && (
                          <span className={`text-[10px] font-mono ${skill.iconColor}`}>
                            ●
                          </span>
                        )}
                      </div>
                      {skill.level && (
                        <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {skill.level}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} competencies</span>
                <span className="text-indigo-400">active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
