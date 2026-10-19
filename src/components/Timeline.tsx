import React from 'react';
import { GraduationCap, Award, MapPin, Sparkles, Compass, Terminal } from 'lucide-react';

export const Timeline: React.FC = () => {
  const milestones = [
    {
      period: "2025 - Present",
      target: "JEE 2027",
      institution: "Bakliwal Tutorials",
      location: "Pune, Maharashtra",
      degree: "JEE Advanced 2027 Intensive Preparation",
      accent: "cyan",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      description: "Undergoing rigorous competitive training in advanced Newtonian mechanics, electrodynamics, wave physics, integral calculus, coordinate geometry, and physical & organic chemistry. Cultivating relentless analytical depth under extreme problem-solving constraints.",
      tags: ["Advanced Newtonian Physics", "Calculus & Optimization", "Olympiad Level Problem Solving"]
    },
    {
      period: "Graduated 2024",
      target: "98.8% Aggregate",
      institution: "Shantiniketan School",
      location: "Kolhapur, Maharashtra",
      degree: "Class 10 CBSE Board Examinations",
      accent: "amber",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      description: "Completed schooling with top academic honors, securing 98.8% in the CBSE Class 10 Board Examinations. Active student leader as Atal Tinkering Lab Ambassador, School Library Incharge, 2-time CBSE National Science Exhibition representative, and Aura Best Startup winner.",
      tags: ["98.8% CBSE Boards", "ATL Ambassador", "CBSE National Science Exhibition", "Aura Best Startup 1st Prize"]
    },
    {
      period: "Est. 2020",
      target: "Since Age 12",
      institution: "Self-Taught Systems Engineering",
      location: "First-Principles Learning",
      degree: "Coding Since Age 12 (Pre-AI Era)",
      accent: "indigo",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      description: "Began programming at age 12 in the pre-AI era, when software development demanded reading raw technical documentation, manual compiler diagnostics, and debugging cryptic stack traces without LLM shortcuts. Evolved from scripting to architecting cross-platform desktop applications (VLC Reborn in Rust/Tauri v2), domain-specific physics languages (MechTeX), algorithmic trading npm packages (SmarterAPI), and clearing ZCO in 11th.",
      tags: ["Coding Since 12", "Pre-AI Manual Craft", "Cleared ZCO (11th)", "Rust & Tauri v2", "DSL Compilers"]
    }
  ];

  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic Milestones & Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            The roadmap from self-taught programming at age 12 to Class 10 board honors, Olympiad qualification, and intensive JEE Advanced training.
          </p>
        </div>

        {/* Chronological Milestone Rail */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8 sm:space-y-10">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-dark-950 border-2 border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.4)] flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-300 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/30 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20">
                
                {/* Header Row: Period Badge + Target + Location */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {item.target}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Title & Degree */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-11 h-11 min-w-[44px] min-h-[44px] aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors tracking-tight">
                      {item.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-0.5">
                      {item.degree}
                    </p>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-4">
                  {item.description}
                </p>

                {/* Key Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs font-mono text-slate-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pre-AI Engineering Roots Callout */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-dark-900/90 to-cyan-950/40 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 min-w-[48px] min-h-[48px] aspect-square rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm sm:text-base font-bold text-white">The Pre-AI Engineering Mindset</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Est. 2020
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Programming since 12 meant reading hundreds of pages of raw documentation, diagnosing terminal stack traces, and understanding compilers from the inside out—a foundational habit that powers every system built today.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 whitespace-nowrap bg-white/5 px-4 py-2 rounded-xl border border-white/10 flex-shrink-0">
            <span>First-Principles Craft</span>
          </div>
        </div>

      </div>
    </section>
  );
};
