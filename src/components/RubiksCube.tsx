import React, { useState } from 'react';
import { Box, RefreshCw } from 'lucide-react';

export const RubiksCube: React.FC = () => {
  const [rotX, setRotX] = useState<number>(-22);
  const [rotY, setRotY] = useState<number>(35);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotY(35 + (x / rect.width) * 60);
    setRotX(-22 - (y / rect.height) * 60);
  };

  const handleReset = () => {
    setRotX(-22);
    setRotY(35);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex flex-col justify-between h-full p-4 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-md overflow-hidden group select-none"
    >
      <div className="flex items-center justify-between pb-2 border-b border-white/10 z-10">
        <div className="flex items-center gap-2">
          <Box className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-medium text-slate-200">Algorithmic Cubing</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          CFOP • Spatial Logic
        </span>
      </div>

      {/* 3D Cube Perspective Container */}
      <div className="my-4 flex items-center justify-center h-40" style={{ perspective: '800px' }}>
        <div
          className="relative transition-transform duration-150 ease-out"
          style={{
            width: '90px',
            height: '90px',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 gap-1 p-1 bg-black rounded-lg border border-white/10"
            style={{ transform: 'translateZ(45px)' }}
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-red-500 rounded-sm shadow-inner opacity-90 transition-colors" />
            ))}
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 gap-1 p-1 bg-black rounded-lg border border-white/10"
            style={{ transform: 'rotateY(180deg) translateZ(45px)' }}
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-orange-500 rounded-sm shadow-inner opacity-90" />
            ))}
          </div>

          {/* Right Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 gap-1 p-1 bg-black rounded-lg border border-white/10"
            style={{ transform: 'rotateY(90deg) translateZ(45px)' }}
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-blue-500 rounded-sm shadow-inner opacity-90" />
            ))}
          </div>

          {/* Left Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 gap-1 p-1 bg-black rounded-lg border border-white/10"
            style={{ transform: 'rotateY(-90deg) translateZ(45px)' }}
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-emerald-500 rounded-sm shadow-inner opacity-90" />
            ))}
          </div>

          {/* Top Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 gap-1 p-1 bg-black rounded-lg border border-white/10"
            style={{ transform: 'rotateX(90deg) translateZ(45px)' }}
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-yellow-400 rounded-sm shadow-inner opacity-90" />
            ))}
          </div>

          {/* Bottom Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 gap-1 p-1 bg-black rounded-lg border border-white/10"
            style={{ transform: 'rotateX(-90deg) translateZ(45px)' }}
          >
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white rounded-sm shadow-inner opacity-90" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs z-10">
        <p className="text-[11px] text-slate-400 font-mono">Move cursor to orbit 3D view</p>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 px-2.5 py-1 rounded bg-white/5 border border-white/10 transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Orient
        </button>
      </div>
    </div>
  );
};
