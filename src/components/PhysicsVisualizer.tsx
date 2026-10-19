import React, { useEffect, useRef, useState } from 'react';
import { RotateCcw, Activity } from 'lucide-react';

export const PhysicsVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [damping, setDamping] = useState<number>(0.993);
  const [frequency, setFrequency] = useState<number>(1.8);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    const points: { x: number; y: number; alpha: number }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Draw coordinate grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();

      // Physics equation: Damped Coupled Harmonic Oscillator / Lissajous trajectory
      time += 0.035;
      const decay = Math.pow(damping, (time % 200));
      const radiusX = (width * 0.38) * decay;
      const radiusY = (height * 0.38) * decay;

      const currentX = centerX + radiusX * Math.cos(frequency * time);
      const currentY = centerY + radiusY * Math.sin(time * 1.25 + Math.PI / 4);

      points.push({ x: currentX, y: currentY, alpha: 1.0 });

      if (points.length > 120) {
        points.shift();
      }

      // Draw trajectory path with gradient glow
      if (points.length > 1) {
        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1];
          const p2 = points[i];
          const progress = i / points.length;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${progress * 0.8})`;
          ctx.lineWidth = 1.5 + progress * 1.5;
          ctx.stroke();
        }
      }

      // Draw current oscillator bob
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#06b6d4';
      ctx.fillStyle = '#67e8f9';
      ctx.beginPath();
      ctx.arc(currentX, currentY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw tension / displacement vector
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [damping, frequency]);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-md overflow-hidden group">
      {/* Subtle top indicator */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-medium text-cyan-300 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            Damped SHM Kinematics Engine
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
          ω={frequency.toFixed(1)} rad/s
        </span>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-44 my-2">
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-crosshair"
          title="Interactive Harmonic Simulation"
        />
        <div className="absolute bottom-2 left-2 pointer-events-none">
          <p className="text-[10px] font-mono text-slate-400/80">
            x(t) = A·e<sup>-γt</sup>cos(ω₁t) | y(t) = B·e<sup>-γt</sup>sin(ω₂t+φ)
          </p>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/10 text-xs text-slate-300 z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setFrequency(prev => (prev >= 2.5 ? 1.2 : Number((prev + 0.3).toFixed(1))));
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono transition-colors text-slate-200"
          >
            <RotateCcw className="w-3 h-3 text-cyan-400" />
            Freq
          </button>
          <button
            onClick={() => {
              setDamping(prev => (prev === 0.993 ? 0.985 : 0.993));
            }}
            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono transition-colors text-slate-200"
          >
            Damping: {damping === 0.993 ? 'Low' : 'Med'}
          </button>
        </div>
        <span className="text-[11px] text-slate-400 font-mono">
          Inspired by <span className="text-cyan-300">Pendula</span>
        </span>
      </div>
    </div>
  );
};
