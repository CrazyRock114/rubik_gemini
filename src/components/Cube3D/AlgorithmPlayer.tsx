import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Gauge } from 'lucide-react';
import type { MoveName } from '../../cube/CubeModel';

export interface AlgorithmPlayerProps {
  moves: MoveName[];
  annotations?: string[];
  onExecuteMove: (move: MoveName) => void;
  onReset: () => void;
  title?: string;
}

export const AlgorithmPlayer: React.FC<AlgorithmPlayerProps> = ({
  moves,
  annotations,
  onExecuteMove,
  onReset,
  title,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  const speedDelays = {
    slow: 750,
    normal: 420,
    fast: 220,
  };

  const timerRef = useRef<number | null>(null);

  // Stop playback when moves change or component unmounts
  useEffect(() => {
    setIsPlaying(false);
    setCurrentStep(-1);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, [moves]);

  // Step forward
  const stepForward = useCallback(() => {
    if (currentStep + 1 < moves.length) {
      const nextStep = currentStep + 1;
      const move = moves[nextStep];
      setCurrentStep(nextStep);
      onExecuteMove(move);
      return true;
    } else {
      setIsPlaying(false);
      return false;
    }
  }, [currentStep, moves, onExecuteMove]);

  // Handle auto-playing loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    timerRef.current = window.setTimeout(() => {
      const couldStep = stepForward();
      if (!couldStep) {
        setIsPlaying(false);
      }
    }, speedDelays[speed]);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentStep, speed, stepForward, speedDelays]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (currentStep >= moves.length - 1) {
      // If at the end, restart from beginning
      onReset();
      setCurrentStep(-1);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(-1);
    onReset();
  };

  return (
    <div className="w-full glass-panel rounded-xl p-4 border border-white/10 flex flex-col gap-3 shadow-xl">
      {/* Header / Title */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-300">
          {title || 'Algorithm Playback'}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Gauge className="w-3.5 h-3.5" />
          <button
            type="button"
            onClick={() => setSpeed('slow')}
            className={`px-2 py-0.5 rounded transition ${
              speed === 'slow'
                ? 'bg-sky-500/20 text-sky-400 font-semibold border border-sky-500/40'
                : 'hover:text-slate-200'
            }`}
          >
            0.5x
          </button>
          <button
            type="button"
            onClick={() => setSpeed('normal')}
            className={`px-2 py-0.5 rounded transition ${
              speed === 'normal'
                ? 'bg-sky-500/20 text-sky-400 font-semibold border border-sky-500/40'
                : 'hover:text-slate-200'
            }`}
          >
            1.0x
          </button>
          <button
            type="button"
            onClick={() => setSpeed('fast')}
            className={`px-2 py-0.5 rounded transition ${
              speed === 'fast'
                ? 'bg-sky-500/20 text-sky-400 font-semibold border border-sky-500/40'
                : 'hover:text-slate-200'
            }`}
          >
            1.8x
          </button>
        </div>
      </div>

      {/* Move Badges Sequence */}
      <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-slate-950/60 rounded-lg border border-white/5 min-h-[48px]">
        {moves.map((m, idx) => {
          const isDone = idx < currentStep;
          const isCurrent = idx === currentStep;
          return (
            <span
              key={`${m}-${idx}`}
              className={`px-2.5 py-1 text-sm font-mono font-bold rounded-md transition-all ${
                isCurrent
                  ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 scale-110 shadow-lg'
                  : isDone
                  ? 'bg-slate-800 text-slate-400 line-through decoration-slate-500'
                  : 'bg-slate-800/80 text-sky-300 hover:bg-slate-700'
              }`}
            >
              {m}
            </span>
          );
        })}
      </div>

      {/* Move Annotation */}
      {annotations && currentStep >= 0 && annotations[currentStep] && (
        <div className="text-xs text-sky-300 bg-sky-950/40 border border-sky-500/20 px-3 py-1.5 rounded-md flex items-center gap-2">
          <span className="font-semibold uppercase tracking-wider text-[10px] bg-sky-500/30 px-1.5 py-0.5 rounded">
            Step {currentStep + 1}/{moves.length}
          </span>
          <span>{annotations[currentStep]}</span>
        </div>
      )}

      {/* Controls Bar */}
      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 px-3 py-1.5 rounded-lg transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (currentStep > 0) {
                // To step back, reset and step to currentStep - 1
                const target = currentStep - 1;
                onReset();
                for (let i = 0; i <= target; i++) {
                  onExecuteMove(moves[i]);
                }
                setCurrentStep(target);
              } else if (currentStep === 0) {
                handleReset();
              }
            }}
            disabled={currentStep < 0}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition"
            title="Step Back"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-sky-500/25 transition active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" /> Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Play
              </>
            )}
          </button>

          <button
            type="button"
            onClick={stepForward}
            disabled={currentStep >= moves.length - 1}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition"
            title="Step Forward"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
