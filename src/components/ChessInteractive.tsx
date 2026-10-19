import React, { useState } from 'react';
import { Trophy, ChevronRight, ChevronLeft, RotateCcw, Sparkles, Play, Pause } from 'lucide-react';

// Crisp, standardized vector SVG chess pieces for 100% consistent cross-platform rendering
const PieceSvg: React.FC<{ type: string; isWhite: boolean }> = ({ type, isWhite }) => {
  const fillColor = isWhite ? '#f8fafc' : '#0f172a';
  const strokeColor = isWhite ? '#1e293b' : '#94a3b8';
  const glow = isWhite ? 'drop-shadow(0 2px 4px rgba(255,255,255,0.2))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))';

  switch (type.toLowerCase()) {
    case 'k': // King
      return (
        <svg viewBox="0 0 45 45" className="w-4/5 h-4/5 select-none transition-transform duration-300" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.5 11.63V6M20 8h5" stroke={strokeColor} strokeWidth="1.5" />
            <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" />
            <path d="M11.5 37c5.5 3.5 16.5 3.5 22 0l-1-4.5c-4 2.5-16 2.5-20 0l-1 4.5z" />
            <path d="M12.5 30c5.5-3 14.5-3 20 0m-21 3.5c4-2 18-2 22 0m-19 3.5c3.5-1 14.5-1 18 0" />
            <path d="M32 18c2.5 1 4.5 4 2 8-2 3-5 5-11.5 5.5-6.5-.5-9.5-2.5-11.5-5.5-2.5-4-.5-7 2-8 3-1.5 6-1 9-1s6-.5 9 1z" />
          </g>
        </svg>
      );
    case 'q': // Queen
      return (
        <svg viewBox="0 0 45 45" className="w-4/5 h-4/5 select-none transition-transform duration-300" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11-7-14-7 14-7-11 2 12z" />
            <path d="M9 26c0 2 1.5 2 2.5 4 2.5 4 1 5.5 1 7h20c0-1.5-1.5-3 1-7 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" />
            <path d="M11.5 30c3.5-1 18.5-1 22 0m-21 3.5c3.5-1 16.5-1 20 0m-19 3.5c3-1 14-1 18 0" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="14" cy="9" r="2" />
            <circle cx="22.5" cy="8" r="2" />
            <circle cx="31" cy="9" r="2" />
            <circle cx="39" cy="12" r="2" />
          </g>
        </svg>
      );
    case 'r': // Rook
      return (
        <svg viewBox="0 0 45 45" className="w-4/5 h-4/5 select-none transition-transform duration-300" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5H12.5zm2.5-4.5h15v-13h-15v13zm-3-15l1.5-2.5h18l1.5 2.5H12zm0-4.5h4v3h4v-3h5v3h4v-3h4v4.5H12V8z" />
          </g>
        </svg>
      );
    case 'b': // Bishop
      return (
        <svg viewBox="0 0 45 45" className="w-4/5 h-4/5 select-none transition-transform duration-300" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zM15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2zM25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
            <path d="M17.5 26h10M15 10l15 15" stroke={strokeColor} strokeWidth="1.5" />
          </g>
        </svg>
      );
    case 'n': // Knight
      return (
        <svg viewBox="0 0 45 45" className="w-4/5 h-4/5 select-none transition-transform duration-300" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" />
            <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-4.04 3-6 2.1-2.6 4.38-4.78 4-8-1-3.5-4.5-4-5-8.5 4.5 1.5 7.5 2 11 9.5z" />
            <circle cx="9.5" cy="25.5" r="1.5" fill={strokeColor} />
            <circle cx="15" cy="15.5" r="1.5" fill={strokeColor} />
          </g>
        </svg>
      );
    case 'p': // Pawn
    default:
      return (
        <svg viewBox="0 0 45 45" className="w-4/5 h-4/5 select-none transition-transform duration-300" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-2.78-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" />
          </g>
        </svg>
      );
  }
};

interface MoveStep {
  title: string;
  subtitle: string;
  notation: string;
  tacticalNote: string;
  highlightSquares: string[];
  board: Record<string, { type: string; isWhite: boolean }>;
}

export const ChessInteractive: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // 5-step Smothered Mate masterpiece sequence
  const steps: MoveStep[] = [
    {
      title: "Position: Philidor's Legacy",
      subtitle: "White to play: Find the forcing tactical combination",
      notation: "Starting setup",
      tacticalNote: "Black's King is castled with rook & pawns. White initiates a forcing series of checks.",
      highlightSquares: ['f7', 'g5'],
      board: {
        h8: { type: 'k', isWhite: false },
        f8: { type: 'r', isWhite: false },
        f7: { type: 'p', isWhite: false },
        g7: { type: 'p', isWhite: false },
        h7: { type: 'p', isWhite: false },
        e6: { type: 'b', isWhite: false },
        g5: { type: 'n', isWhite: true },
        c4: { type: 'q', isWhite: true },
        f2: { type: 'p', isWhite: true },
        g2: { type: 'p', isWhite: true },
        h2: { type: 'p', isWhite: true },
      }
    },
    {
      title: "Move 1: 1. Nf7+",
      subtitle: "Knight fork against King and Rook",
      notation: "1. Nf7+ Kg8",
      tacticalNote: "Forced response! Black's King must move to g8. (Taking with rook loses to queen).",
      highlightSquares: ['g5', 'f7', 'g8'],
      board: {
        g8: { type: 'k', isWhite: false },
        f8: { type: 'r', isWhite: false },
        g7: { type: 'p', isWhite: false },
        h7: { type: 'p', isWhite: false },
        e6: { type: 'b', isWhite: false },
        f7: { type: 'n', isWhite: true },
        c4: { type: 'q', isWhite: true },
        f2: { type: 'p', isWhite: true },
        g2: { type: 'p', isWhite: true },
        h2: { type: 'p', isWhite: true },
      }
    },
    {
      title: "Move 2: 2. Nh6++",
      subtitle: "Devastating Double Check from Knight & Queen!",
      notation: "2. Nh6++ Kh8",
      tacticalNote: "Because it is a DOUBLE check, Black cannot block or capture the knight—the king MUST move back to h8!",
      highlightSquares: ['f7', 'h6', 'c4', 'h8'],
      board: {
        h8: { type: 'k', isWhite: false },
        f8: { type: 'r', isWhite: false },
        g7: { type: 'p', isWhite: false },
        h7: { type: 'p', isWhite: false },
        e6: { type: 'b', isWhite: false },
        h6: { type: 'n', isWhite: true },
        c4: { type: 'q', isWhite: true },
        f2: { type: 'p', isWhite: true },
        g2: { type: 'p', isWhite: true },
        h2: { type: 'p', isWhite: true },
      }
    },
    {
      title: "Move 3: 3. Qg8+!!",
      subtitle: "The Legendary Queen Sacrifice Decoy",
      notation: "3. Qg8+! Rxg8",
      tacticalNote: "Sacrificing the Queen! Black's King cannot capture because the Knight on h6 defends g8. The Rook MUST capture!",
      highlightSquares: ['c4', 'g8', 'f8'],
      board: {
        h8: { type: 'k', isWhite: false },
        g8: { type: 'r', isWhite: false }, // Rook forced into trap!
        g7: { type: 'p', isWhite: false },
        h7: { type: 'p', isWhite: false },
        e6: { type: 'b', isWhite: false },
        h6: { type: 'n', isWhite: true },
        f2: { type: 'p', isWhite: true },
        g2: { type: 'p', isWhite: true },
        h2: { type: 'p', isWhite: true },
      }
    },
    {
      title: "Move 4: 4. Nf7#",
      subtitle: "Checkmate! The Smothered Mate",
      notation: "4. Nf7# (1-0)",
      tacticalNote: "The Black King is completely smothered and trapped by its own rook (g8) and pawns (g7, h7). Pure tactical beauty.",
      highlightSquares: ['h6', 'f7', 'h8'],
      board: {
        h8: { type: 'k', isWhite: false },
        g8: { type: 'r', isWhite: false },
        g7: { type: 'p', isWhite: false },
        h7: { type: 'p', isWhite: false },
        e6: { type: 'b', isWhite: false },
        f7: { type: 'n', isWhite: true },
        f2: { type: 'p', isWhite: true },
        g2: { type: 'p', isWhite: true },
        h2: { type: 'p', isWhite: true },
      }
    }
  ];

  const step = steps[currentStep];

  // Focused 5x5 board section centered around the King's fortress (d to h, 4 to 8)
  const files = ['d', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4'];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  React.useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setCurrentStep((prev) => {
          if (prev === steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <div className="flex flex-col justify-between h-full p-5 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-white block">Chess Tactics Lab</span>
            <span className="text-[10px] font-mono text-slate-400">Smothered Mate Puzzle</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
      </div>

      {/* Main Board + Analysis Grid */}
      <div className="my-4 flex flex-col sm:flex-row items-center gap-5">
        
        {/* 5x5 Vector Chessboard */}
        <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0 bg-dark-950">
          <div className="grid grid-cols-5 grid-rows-5 w-full h-full">
            {ranks.map((rank, rIdx) =>
              files.map((file, fIdx) => {
                const square = `${file}${rank}`;
                // Standard chess light/dark square logic
                const fileNum = file.charCodeAt(0) - 'a'.charCodeAt(0);
                const rankNum = parseInt(rank, 10);
                const isLight = (fileNum + rankNum) % 2 === 1;

                const piece = step.board[square];
                const isHighlighted = step.highlightSquares.includes(square);

                return (
                  <div
                    key={square}
                    className={`relative flex items-center justify-center transition-colors duration-200 ${
                      isHighlighted
                        ? isLight
                          ? 'bg-amber-400/40 ring-1 ring-inset ring-amber-300'
                          : 'bg-amber-600/50 ring-1 ring-inset ring-amber-300'
                        : isLight
                        ? 'bg-slate-700/35 hover:bg-slate-700/50'
                        : 'bg-indigo-950/70 hover:bg-indigo-950/85'
                    }`}
                  >
                    {piece && (
                      <PieceSvg type={piece.type} isWhite={piece.isWhite} />
                    )}

                    {/* Corner coordinates */}
                    {fIdx === 0 && (
                      <span className="absolute left-0.5 top-0.5 text-[8px] font-mono opacity-40 text-slate-200 select-none pointer-events-none">
                        {rank}
                      </span>
                    )}
                    {rIdx === 4 && (
                      <span className="absolute right-0.5 bottom-0.5 text-[8px] font-mono opacity-40 text-slate-200 select-none pointer-events-none">
                        {file}
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Narrative & Tactical Explanation */}
        <div className="flex flex-col justify-center flex-1 w-full sm:w-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{step.title}</span>
          </div>

          <div className="text-sm font-bold text-white mb-2">
            {step.subtitle}
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {step.tacticalNote}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs">
            <span className="text-slate-400 text-[10px]">Notation:</span>
            <span className="font-bold">{step.notation}</span>
          </div>
        </div>

      </div>

      {/* Control bar */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10">
        <button
          onClick={() => {
            setCurrentStep(0);
            setIsPlaying(false);
          }}
          className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          title="Reset to beginning"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{isPlaying ? 'Pause' : 'Auto'}</span>
          </button>

          <button
            onClick={handlePrev}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title="Previous move"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 text-xs font-mono font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-lg transition-colors"
            title="Next move"
          >
            <span>{currentStep === steps.length - 1 ? 'Start Over' : 'Next'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
