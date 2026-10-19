import React, { useState } from 'react';
import { Trophy, RotateCcw, Sparkles, Check, HelpCircle, Gamepad2, Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';

// Vector SVG chess pieces
const PieceSvg: React.FC<{ type: string; isWhite: boolean }> = ({ type, isWhite }) => {
  const fillColor = isWhite ? '#f8fafc' : '#090d16';
  const strokeColor = isWhite ? '#334155' : '#94a3b8';
  const glow = isWhite
    ? 'drop-shadow(0 2px 3px rgba(255,255,255,0.25))'
    : 'drop-shadow(0 2px 3px rgba(0,0,0,0.6))';

  switch (type.toLowerCase()) {
    case 'k':
      return (
        <svg viewBox="0 0 45 45" className="w-5/6 h-5/6 select-none pointer-events-none transition-transform" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.5 11.63V6M20 8h5" stroke={strokeColor} strokeWidth="1.5" />
            <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" />
            <path d="M11.5 37c5.5 3.5 16.5 3.5 22 0l-1-4.5c-4 2.5-16 2.5-20 0l-1 4.5z" />
            <path d="M12.5 30c5.5-3 14.5-3 20 0m-21 3.5c4-2 18-2 22 0m-19 3.5c3.5-1 14.5-1 18 0" />
            <path d="M32 18c2.5 1 4.5 4 2 8-2 3-5 5-11.5 5.5-6.5-.5-9.5-2.5-11.5-5.5-2.5-4-.5-7 2-8 3-1.5 6-1 9-1s6-.5 9 1z" />
          </g>
        </svg>
      );
    case 'q':
      return (
        <svg viewBox="0 0 45 45" className="w-5/6 h-5/6 select-none pointer-events-none transition-transform" style={{ filter: glow }}>
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
    case 'r':
      return (
        <svg viewBox="0 0 45 45" className="w-5/6 h-5/6 select-none pointer-events-none transition-transform" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5H12.5zm2.5-4.5h15v-13h-15v13zm-3-15l1.5-2.5h18l1.5 2.5H12zm0-4.5h4v3h4v-3h5v3h4v-3h4v4.5H12V8z" />
          </g>
        </svg>
      );
    case 'b':
      return (
        <svg viewBox="0 0 45 45" className="w-5/6 h-5/6 select-none pointer-events-none transition-transform" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zM15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2zM25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
            <path d="M17.5 26h10M15 10l15 15" stroke={strokeColor} strokeWidth="1.5" />
          </g>
        </svg>
      );
    case 'n':
      return (
        <svg viewBox="0 0 45 45" className="w-5/6 h-5/6 select-none pointer-events-none transition-transform" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" />
            <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-4.04 3-6 2.1-2.6 4.38-4.78 4-8-1-3.5-4.5-4-5-8.5 4.5 1.5 7.5 2 11 9.5z" />
            <circle cx="9.5" cy="25.5" r="1.5" fill={strokeColor} />
            <circle cx="15" cy="15.5" r="1.5" fill={strokeColor} />
          </g>
        </svg>
      );
    case 'p':
    default:
      return (
        <svg viewBox="0 0 45 45" className="w-5/6 h-5/6 select-none pointer-events-none transition-transform" style={{ filter: glow }}>
          <g fill={fillColor} stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-2.78-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" />
          </g>
        </svg>
      );
  }
};

type ChessPiece = { type: string; isWhite: boolean };
type BoardState = Record<string, ChessPiece | undefined>;

// Initial full 8x8 tactical position for Philidor's Smothered Mate
const INITIAL_POSITION: BoardState = {
  // Black pieces (castled king with rook & pawns)
  h8: { type: 'k', isWhite: false },
  f8: { type: 'r', isWhite: false },
  a7: { type: 'p', isWhite: false },
  b7: { type: 'p', isWhite: false },
  f7: { type: 'p', isWhite: false },
  g7: { type: 'p', isWhite: false },
  h7: { type: 'p', isWhite: false },
  c6: { type: 'n', isWhite: false },
  d6: { type: 'p', isWhite: false },

  // White attacking army
  c4: { type: 'q', isWhite: true },
  g5: { type: 'n', isWhite: true },
  d4: { type: 'p', isWhite: true },
  e4: { type: 'p', isWhite: true },
  f2: { type: 'p', isWhite: true },
  g2: { type: 'p', isWhite: true },
  h2: { type: 'p', isWhite: true },
  a1: { type: 'r', isWhite: true },
  f1: { type: 'r', isWhite: true },
  g1: { type: 'k', isWhite: true },
};

// Solution steps for the puzzle mode
interface TacticalStep {
  expectedFrom: string;
  expectedTo: string;
  whiteNotation: string;
  blackReplyFrom?: string;
  blackReplyTo?: string;
  blackNotation?: string;
  prompt: string;
  successMessage: string;
}

const PUZZLE_STEPS: TacticalStep[] = [
  {
    expectedFrom: 'g5',
    expectedTo: 'f7',
    whiteNotation: '1. Nf7+',
    blackReplyFrom: 'h8',
    blackReplyTo: 'g8',
    blackNotation: '1... Kg8',
    prompt: 'Step 1: Find the forcing check that forks King and Rook.',
    successMessage: '1. Nf7+! King is forced to g8.'
  },
  {
    expectedFrom: 'f7',
    expectedTo: 'h6',
    whiteNotation: '2. Nh6++',
    blackReplyFrom: 'g8',
    blackReplyTo: 'h8',
    blackNotation: '2... Kh8',
    prompt: 'Step 2: Deliver a devastating DOUBLE CHECK from both Knight and Queen!',
    successMessage: '2. Nh6++! Double check forces King back to h8.'
  },
  {
    expectedFrom: 'c4',
    expectedTo: 'g8',
    whiteNotation: '3. Qg8+!!',
    blackReplyFrom: 'f8',
    blackReplyTo: 'g8',
    blackNotation: '3... Rxg8',
    prompt: 'Step 3: The immortal Queen Sacrifice! Decoy the rook onto g8.',
    successMessage: '3. Qg8+!! Brilliant Queen sacrifice! Rook must take.'
  },
  {
    expectedFrom: 'h6',
    expectedTo: 'f7',
    whiteNotation: '4. Nf7#',
    prompt: 'Step 4: Deliver the final Smothered Checkmate with the Knight!',
    successMessage: '4. Nf7# CHECKMATE! The Black King is smothered by its own army!'
  }
];

export const ChessInteractive: React.FC = () => {
  const [board, setBoard] = useState<BoardState>({ ...INITIAL_POSITION });
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [puzzleIndex, setPuzzleIndex] = useState<number>(0);
  const [mode, setMode] = useState<'puzzle' | 'sandbox'>('puzzle');
  const [feedback, setFeedback] = useState<string>(
    'White to play and win! Click your piece to move.'
  );
  const [feedbackType, setFeedbackType] = useState<'info' | 'success' | 'error'>('info');
  const [lastMoveSquares, setLastMoveSquares] = useState<string[]>(['g5', 'c4']);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showMoves, setShowMoves] = useState<boolean>(false);

  // All 8 files and 8 ranks for full board rendering
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const resetGame = () => {
    setBoard({ ...INITIAL_POSITION });
    setSelectedSquare(null);
    setPuzzleIndex(0);
    setIsCompleted(false);
    setShowMoves(false);
    setLastMoveSquares(['g5', 'c4']);
    setFeedback(
      mode === 'puzzle'
        ? 'Puzzle reset: White to play! Step 1: Find the knight check.'
        : 'Sandbox mode: Click any piece and click a square to move.'
    );
    setFeedbackType('info');
  };

  const handleSquareClick = (square: string) => {
    const clickedPiece = board[square];

    // Case 1: Selecting a piece to move
    if (!selectedSquare) {
      if (!clickedPiece) return;
      if (mode === 'puzzle' && !clickedPiece.isWhite) {
        setFeedback("It's White to move! Select a white piece.");
        setFeedbackType('error');
        return;
      }
      setSelectedSquare(square);
      return;
    }

    // Case 2: Clicking the same square deselects
    if (selectedSquare === square) {
      setSelectedSquare(null);
      return;
    }

    // Case 3: Clicking another piece of the same color switches selection
    if (clickedPiece && clickedPiece.isWhite === board[selectedSquare]?.isWhite) {
      setSelectedSquare(square);
      return;
    }

    // Case 4: Moving from selectedSquare to square
    const movingPiece = board[selectedSquare];
    if (!movingPiece) {
      setSelectedSquare(null);
      return;
    }

    // Execute move logic based on mode
    if (mode === 'sandbox') {
      // Free play sandbox: allow moving any piece anywhere
      const newBoard = { ...board };
      delete newBoard[selectedSquare];
      newBoard[square] = movingPiece;
      setBoard(newBoard);
      setLastMoveSquares([selectedSquare, square]);
      setSelectedSquare(null);
      setFeedback(`Moved ${movingPiece.type.toUpperCase()} from ${selectedSquare} to ${square}.`);
      setFeedbackType('info');
      return;
    }

    // Puzzle Mode logic
    const currentGoal = PUZZLE_STEPS[puzzleIndex];
    if (selectedSquare === currentGoal.expectedFrom && square === currentGoal.expectedTo) {
      // Correct Move!
      const newBoard = { ...board };
      delete newBoard[selectedSquare];
      newBoard[square] = movingPiece;
      setBoard(newBoard);
      setLastMoveSquares([selectedSquare, square]);
      setSelectedSquare(null);
      setFeedback(currentGoal.successMessage);
      setFeedbackType('success');

      // If there is an automated black reply
      if (currentGoal.blackReplyFrom && currentGoal.blackReplyTo) {
        setTimeout(() => {
          setBoard((prev) => {
            const replyBoard = { ...prev };
            const replyPiece = replyBoard[currentGoal.blackReplyFrom!];
            if (replyPiece) {
              delete replyBoard[currentGoal.blackReplyFrom!];
              replyBoard[currentGoal.blackReplyTo!] = replyPiece;
            }
            return replyBoard;
          });
          setLastMoveSquares([currentGoal.blackReplyFrom!, currentGoal.blackReplyTo!]);
          const nextIndex = puzzleIndex + 1;
          setPuzzleIndex(nextIndex);
          if (nextIndex < PUZZLE_STEPS.length) {
            setFeedback(PUZZLE_STEPS[nextIndex].prompt);
            setFeedbackType('info');
          }
        }, 500);
      } else {
        // Final move reached!
        setIsCompleted(true);
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#06b6d4', '#6366f1']
        });
      }
    } else {
      // Incorrect move for the puzzle
      setSelectedSquare(null);
      setFeedback('Not the winning move! Look for a forcing, high-tempo check.');
      setFeedbackType('error');
    }
  };

  const handleHint = () => {
    if (mode !== 'puzzle' || isCompleted) return;
    const currentGoal = PUZZLE_STEPS[puzzleIndex];
    setSelectedSquare(currentGoal.expectedFrom);
    setFeedback(`Hint: Move the piece on ${currentGoal.expectedFrom.toUpperCase()} to ${currentGoal.expectedTo.toUpperCase()}!`);
    setFeedbackType('info');
  };

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-6 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">Full 8×8 Chessboard</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Interactive
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              {mode === 'puzzle' ? 'Smothered Mate Combination Challenge' : 'Free Play Analysis Sandbox'}
            </p>
          </div>
        </div>

        {/* Mode Toggle Switch */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => {
              setMode('puzzle');
              resetGame();
            }}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
              mode === 'puzzle'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Puzzle</span>
          </button>
          <button
            onClick={() => {
              setMode('sandbox');
              resetGame();
            }}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
              mode === 'sandbox'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Free Play</span>
          </button>
        </div>
      </div>

      {/* Main Chess Arena */}
      <div className="my-5 flex flex-col lg:flex-row items-center justify-center gap-6">
        
        {/* Full 8x8 Chess Board Container */}
        <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-square rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-dark-950 p-1 flex-shrink-0">
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-xl overflow-hidden">
            {ranks.map((rank, rIdx) =>
              files.map((file, fIdx) => {
                const square = `${file}${rank}`;
                const fileNum = file.charCodeAt(0) - 'a'.charCodeAt(0);
                const rankNum = parseInt(rank, 10);
                const isLight = (fileNum + rankNum) % 2 === 1;

                const piece = board[square];
                const isSelected = selectedSquare === square;
                const isLastMove = lastMoveSquares.includes(square);

                return (
                  <button
                    key={square}
                    onClick={() => handleSquareClick(square)}
                    className={`relative flex items-center justify-center transition-all duration-150 outline-none ${
                      isSelected
                        ? 'bg-amber-400/50 ring-2 ring-inset ring-amber-300 z-10'
                        : isLastMove
                        ? isLight
                          ? 'bg-amber-400/25'
                          : 'bg-amber-600/35'
                        : isLight
                        ? 'bg-[#2b3548] hover:bg-[#344057]'
                        : 'bg-[#121927] hover:bg-[#192336]'
                    }`}
                  >
                    {piece && (
                      <PieceSvg type={piece.type} isWhite={piece.isWhite} />
                    )}

                    {/* Small move dot for empty target squares when selected */}
                    {selectedSquare && !piece && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20 pointer-events-none" />
                    )}

                    {/* Rank coordinate label on leftmost file */}
                    {fIdx === 0 && (
                      <span className="absolute left-1 top-0.5 text-[8px] font-mono opacity-40 text-slate-200 select-none pointer-events-none">
                        {rank}
                      </span>
                    )}

                    {/* File coordinate label on bottom rank */}
                    {rIdx === 7 && (
                      <span className="absolute right-1 bottom-0.5 text-[8px] font-mono opacity-40 text-slate-200 select-none pointer-events-none">
                        {file}
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Interactive Tactical Guidance Card */}
        <div className="flex flex-col justify-between flex-1 w-full max-w-md bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-5">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {mode === 'puzzle' ? `Move ${puzzleIndex + 1} of 4` : 'Free Sandbox Mode'}
              </span>
              {isCompleted ? (
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Check className="w-3 h-3" /> Solved
                </span>
              ) : (
                <span className="text-[11px] font-mono text-cyan-400">
                  White To Move
                </span>
              )}
            </div>

            {/* Dynamic Status / Feedback Message */}
            <div
              className={`p-3 rounded-xl border mb-3 transition-colors text-xs leading-relaxed ${
                feedbackType === 'success'
                  ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                  : feedbackType === 'error'
                  ? 'bg-red-950/30 border-red-500/30 text-red-300'
                  : 'bg-white/[0.03] border-white/10 text-slate-200'
              }`}
            >
              <div className="font-semibold mb-0.5">
                {feedbackType === 'success'
                  ? 'Excellent Move!'
                  : feedbackType === 'error'
                  ? 'Incorrect Move'
                  : 'Tactical Objective:'}
              </div>
              <p>{feedback}</p>
            </div>

            {/* Move Sequence Hidden by default - Revealed only on user request */}
            {mode === 'puzzle' && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => setShowMoves(!showMoves)}
                  className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs font-mono text-slate-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {showMoves ? (
                      <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                    )}
                    <span>{showMoves ? 'Hide Move Sequence' : 'Reveal Move Sequence'}</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                    {showMoves ? 'Shown' : 'Click to reveal'}
                  </span>
                </button>

                {showMoves && (
                  <div className="space-y-1.5 mt-2.5 text-xs font-mono">
                    {PUZZLE_STEPS.map((step, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between px-3 py-1.5 rounded-lg border transition-colors ${
                          idx < puzzleIndex || isCompleted
                            ? 'bg-emerald-950/20 border-emerald-800/30 text-emerald-300'
                            : idx === puzzleIndex
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                            : 'bg-white/[0.01] border-white/5 text-slate-400 opacity-60'
                        }`}
                      >
                        <span>{step.whiteNotation} {step.blackNotation || ''}</span>
                        <span className="text-[10px]">
                          {idx < puzzleIndex || isCompleted ? '✓ played' : idx === puzzleIndex ? 'current' : `step ${idx + 1}`}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {mode === 'sandbox' && (
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 space-y-1.5 mb-4">
                <div className="text-[11px] font-mono text-cyan-300 font-semibold">Sandbox Controls:</div>
                <p>• Click any piece to select it.</p>
                <p>• Click any target square to move or capture.</p>
                <p>• Test your own variations and attacks freely!</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
            <button
              onClick={resetGame}
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Board</span>
            </button>

            {mode === 'puzzle' && !isCompleted && (
              <button
                onClick={handleHint}
                className="flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-amber-200 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Show Hint</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
