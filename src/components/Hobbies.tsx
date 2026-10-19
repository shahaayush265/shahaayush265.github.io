import React from 'react';
import { Heart, BookOpen, Shield, Atom } from 'lucide-react';
import { ChessInteractive } from './ChessInteractive';
import { RubiksCube } from './RubiksCube';

export const Hobbies: React.FC = () => {
  return (
    <section id="interests" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Beyond The Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hobbies & Passions
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Where curiosity thrives: tactical chess battles, spatial Rubik's algorithms, fiction worldbuilding, and martial arts discipline.
          </p>
        </div>

        {/* Bento Grid layout for Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Full 8x8 Interactive Chess Lab (col-span-12) */}
          <div className="col-span-12 flex flex-col">
            <ChessInteractive />
          </div>

          {/* Card 2: 3D Rubik's Cube & Spatial Algorithms (md:col-span-6 lg:col-span-3) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col">
            <RubiksCube />
          </div>

          {/* Card 3: Physics, Math & Deep Logic Problems (md:col-span-6 lg:col-span-3) */}
          <div className="md:col-span-6 lg:col-span-3 p-6 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Atom className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Theoretical Science
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Physics & Logic
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Exploring Newtonian mechanics, wave kinematics, differential equations, and computational optimization.
              </p>

              <div className="space-y-1.5 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">▸</span>
                  <span>Harmonic Kinematics</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">▸</span>
                  <span>Simulated Annealing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">▸</span>
                  <span>Mechanics DSLs</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-cyan-400">
              Inspiration for Pendula & MechTeX
            </div>
          </div>

          {/* Card 4: Fiction Reading & Bookshelf (md:col-span-6 lg:col-span-3) */}
          <div className="md:col-span-6 lg:col-span-3 p-6 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-indigo-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Imagination
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Fiction Reading
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Immersing in rich narratives, speculative worldbuilding, and timeless fiction that stretches the boundaries of imagination.
              </p>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Favorite Genres</div>
                <div className="text-xs font-semibold text-indigo-300">
                  Fantasy & Mythological Fiction
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-indigo-400">
              Creative counterbalance to STEM study
            </div>
          </div>

          {/* Card 5: Karate Green Belt & Martial Discipline (md:col-span-6 lg:col-span-3) */}
          <div className="md:col-span-6 lg:col-span-3 p-6 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Green Belt
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Karate Martial Arts
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Attained Green Belt rank. Practicing form, balance, and composed stillness under physical and mental pressure.
              </p>

              <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 text-[11px] text-emerald-300">
                Instilled relentless focus and grit that carries directly into intense JEE prep.
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
              Mindset & discipline remains
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
