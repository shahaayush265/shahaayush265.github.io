import React, { useState } from 'react';
import { Trophy, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';

interface ChessStep {
  title: string;
  subtitle: string;
  fenHighlight: string;
  boardState: Record<string, string>;
}

export const ChessInteractive: React.FC = () => {
  // Mini puzzle: Classic Queen & Knight Smothered Mate sequence
  const [step, setStep] = useState<number>(0);

  const steps: ChessStep[] = [
    {
      title: "Tactical Position",
      subtitle: "White to play: Find the forcing sequence",
      fenHighlight: "Nf7+ check incoming",
      boardState: {
        e8: '♚', // Black King
        g8: '♜', // Black Rook
        f7: '♘', // White Knight
        g5: '♕', // White Queen
        f2: '♙', g2: '♙', h2: '♙',
        f8: '♝'
      }
    },
    {
      title: "Move 1: Nf7+ (Fork)",
      subtitle: "King forced into corner",
      fenHighlight: "1. Nf7+ Kg8 2. Nh6++ (Double Check!)",
      boardState: {
        h8: '♚',
        g8: '♜',
        h6: '♘',
        g5: '♕',
        f2: '♙', g2: '♙', h2: '♙'
      }
    },
    {
      title: "Move 2: Qg8+!! (Queen Sacrifice)",
      subtitle: "The legendary smothered decoy",
      fenHighlight: "2... Rxg8 (Forced reply)",
      boardState: {
        h8: '♚',
        g8: '♕',
        f8: '♜',
        h6: '♘',
        f2: '♙', g2: '♙', h2: '♙'
      }
    },
    {
      title: "Move 3: Nf7# Checkmate!",
      subtitle: "The Smothered Mate",
      fenHighlight: "Black king is trapped by its own rook!",
      boardState: {
        h8: '♚',
        g8: '♜',
        f7: '♘',
        f2: '♙', g2: '♙', h2: '♙'
      }
    }
  ];

  const current = steps[step];

  // 4x4 board slice focused on the king's fortress
  const files = ['e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5'];

  return (
    <div className="flex flex-col justify-between h-full p-4 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-medium text-slate-200">Chess Tactics Lab</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
          Step {step + 1}/{steps.length}
        </span>
      </div>

      <div className="my-3 flex flex-col sm:flex-row items-center gap-4">
        {/* Interactive Board Grid */}
        <div className="grid grid-cols-4 w-44 h-44 rounded-lg overflow-hidden border border-white/20 shadow-xl flex-shrink-0 bg-dark-950">
          {ranks.map((rank, rIdx) =>
            files.map((file, fIdx) => {
              const square = `${file}${rank}`;
              const isDark = (rIdx + fIdx) % 2 === 1;
              const piece = current.boardState[square];

              return (
                <div
                  key={square}
                  className={`relative flex items-center justify-center text-2xl font-bold select-none transition-colors duration-200 ${
                    isDark ? 'bg-indigo-950/40 text-cyan-200' : 'bg-slate-800/40 text-amber-100'
                  } ${square === 'f7' || square === 'g8' ? 'ring-1 ring-inset ring-amber-400/40' : ''}`}
                >
                  {piece && (
                    <span className="drop-shadow-md transform hover:scale-110 transition-transform">
                      {piece}
                    </span>
                  )}
                  {/* Coordinate markers on edges */}
                  {fIdx === 0 && (
                    <span className="absolute left-0.5 top-0.5 text-[8px] font-mono opacity-30 text-white">
                      {rank}
                    </span>
                  )}
                  {rIdx === 3 && (
                    <span className="absolute right-0.5 bottom-0.5 text-[8px] font-mono opacity-30 text-white">
                      {file}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Narrative / Strategy commentary */}
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            {current.title}
          </div>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {current.subtitle}
          </p>
          <div className="mt-2 text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 rounded px-2 py-1">
            {current.fenHighlight}
          </div>
        </div>
      </div>

      {/* Controller Buttons */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <button
          onClick={() => setStep(0)}
          className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-white/5 border border-white/10 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>

        <button
          onClick={() => setStep(prev => (prev + 1) % steps.length)}
          className="flex items-center gap-1 text-[11px] font-mono text-amber-300 hover:text-amber-200 px-3 py-1 rounded bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
        >
          {step === steps.length - 1 ? 'Start Over' : 'Next Move'}
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
