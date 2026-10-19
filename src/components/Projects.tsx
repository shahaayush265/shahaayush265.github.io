import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Play,
  Atom,
  Cpu,
  Terminal,
  Layers,
  Sparkles,
  Star,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS, CATEGORIES, ProjectCategory, Project } from '../data/projects';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const getIcon = (iconName: Project['iconName']) => {
    switch (iconName) {
      case 'Play': return <Play className="w-5 h-5 text-indigo-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-purple-400" />;
      default: return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Software & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Systems, custom physics domain languages, numerical optimizers, and automated developer tooling.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="w-full lg:w-auto flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-md self-start lg:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isVlc = project.id === 'vlcreborn';
            const isMechtex = project.id === 'mechtex';

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-dark-900/70 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-xl hover:shadow-2xl hover:shadow-indigo-950/40 hover:-translate-y-1 ${
                  isVlc || isMechtex ? 'md:col-span-1' : ''
                }`}
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-indigo-500/20 transition-all" />

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                        {getIcon(project.iconName)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.stars !== undefined && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-300" />
                          {project.stars}
                        </span>
                      )}
                      {project.featured && (
                        <span className="text-[10px] font-mono font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-sm font-semibold text-slate-200 mb-2">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-5 space-y-1.5 bg-black/20 p-3.5 rounded-2xl border border-white/5">
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Metrics Badges if present */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                          <div className="text-xs font-semibold text-white">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions and Tech Stack */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/[0.07]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-200 hover:text-white px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:text-cyan-200 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/25 transition-all ml-auto hover:scale-[1.02]"
                      >
                        <span>{project.liveUrlLabel || 'Live Demo'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
