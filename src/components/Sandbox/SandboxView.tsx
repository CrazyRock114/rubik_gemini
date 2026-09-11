import { useState, useEffect, useRef, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Play,
  Pause,
  RotateCcw,
  Shuffle,
  Timer,
  Clock,
  Award,
  Copy,
  Check,
  Undo2,
  Trash2,
  FastForward,
  Eye,
  EyeOff,
  Sparkles,
  SkipForward,
  SkipBack,
  CheckCircle2,
  Compass,
  Info,
  Layers,
  Zap,
  ChevronDown,
  ChevronUp,
  Camera,
} from 'lucide-react';
import { CubeModel, type MoveName } from '../../cube/CubeModel';
import { Cube3D, type Cube3DRef } from '../Cube3D/Cube3D';
import { solveCubeCFOP, type CFOPSolveResult } from '../../cube/CFOPSolver';
import { CubeInputModal } from '../CubeInput/CubeInputModal';
import { useTranslation } from '../../i18n/LanguageContext';

export const SandboxView: React.FC = () => {
  const { t } = useTranslation();
  const cube3DRef = useRef<Cube3DRef>(null);
  const [cubeModel, setCubeModel] = useState<CubeModel>(() => new CubeModel());
  const [moveHistory, setMoveHistory] = useState<MoveName[]>([]);
  const [scramble, setScramble] = useState<string>('');
  const [customAlgo, setCustomAlgo] = useState<string>('R U R\' U\'');
  const [copied, setCopied] = useState<boolean>(false);

  // Reference Answer & Auto-Solver state
  const [showReference, setShowReference] = useState<boolean>(true);
  const [solverMode, setSolverMode] = useState<'cfop' | 'optimal'>('cfop');
  const [cfopResult, setCfopResult] = useState<CFOPSolveResult>({ stages: [], allMoves: [] });
  const [cfopStepIndex, setCfopStepIndex] = useState<number>(0);
  const cfopStepIndexRef = useRef<number>(0);
  const isExecutingSolutionRef = useRef<boolean>(false);
  const [expandedStage, setExpandedStage] = useState<number | null>(null);
  const [showInputModal, setShowInputModal] = useState<boolean>(false);

  const [solutionCopied, setSolutionCopied] = useState<boolean>(false);
  const [isAutoSolving, setIsAutoSolving] = useState<boolean>(false);
  const isAutoSolvingRef = useRef<boolean>(false);
  const isUndoingRef = useRef<boolean>(false);

  // Solution tracking
  const [totalSolutionMoves, setTotalSolutionMoves] = useState<number>(0);
  const [executedMovesCount, setExecutedMovesCount] = useState<number>(0);

  // Cumulative moves tracking from solved state
  const [cumulativeMoves, setCumulativeMoves] = useState<MoveName[]>([]);
  const cumulativeMovesRef = useRef<MoveName[]>([]);

  // Synchronize cumulative moves ref
  useEffect(() => {
    cumulativeMovesRef.current = cumulativeMoves;
  }, [cumulativeMoves]);

  // Derive optimal reference solution
  const referenceMoves: MoveName[] = useMemo(() => {
    if (cumulativeMoves.length > 0) {
      const rawInverse = CubeModel.invertAlgorithm(cumulativeMoves);
      return CubeModel.simplifyMoves(rawInverse);
    }
    // Fallback when cube is imported from physical camera/manual input without scramble history
    return cfopResult.allMoves;
  }, [cumulativeMoves, cfopResult.allMoves]);

  // Generate CFOP solution plan
  const generateCfopPlan = (model: CubeModel) => {
    if (model.isSolved()) {
      setCfopResult({ stages: [], allMoves: [] });
      setCfopStepIndex(0);
      cfopStepIndexRef.current = 0;
      return;
    }
    const plan = solveCubeCFOP(model);
    setCfopResult(plan);
    setCfopStepIndex(0);
    cfopStepIndexRef.current = 0;
  };

  // Pre-calculate stage ranges for CFOP visualization
  const stageRanges = useMemo(() => {
    let cursor = 0;
    return cfopResult.stages.map((st) => {
      const start = cursor;
      const end = cursor + st.moves.length;
      cursor = end;
      return {
        ...st,
        start,
        end,
        isCompleted: cfopStepIndex >= end,
        isActive: cfopStepIndex >= start && cfopStepIndex < end,
        movesDone: Math.min(st.moves.length, Math.max(0, cfopStepIndex - start)),
      };
    });
  }, [cfopResult, cfopStepIndex]);


  // Phase diagnostic & Detailed piece statistics
  const currentPhase = useMemo(() => {
    return cubeModel.getCurrentPhase();
  }, [cubeModel]);

  const detailedStats = useMemo(() => {
    return cubeModel.getDetailedStats();
  }, [cubeModel]);

  const recommendedPhaseAlgorithms: Record<string, string> = {
    whiteCross: 'Intuitive Daisy / Lateral Alignment',
    firstLayer: "R U R' U' (Sexy Move)",
    secondLayer: "U R U' R' U' F' U F",
    yellowCross: "F (R U R' U') F'",
    orientYellowCorners: "R U R' U R U2 R' (Sune)",
    permuteYellowCorners: "x' (R U' R D2) (R' U R D2) R2",
    permuteYellowEdges: "F2 U M' U2 M U F2 (U-Perm)",
    solved: '✓ Solved!',
  };

  // Timer State
  const [timerState, setTimerState] = useState<'idle' | 'holding' | 'ready' | 'running' | 'stopped'>('idle');
  const [timeMs, setTimeMs] = useState<number>(0);
  const [solveTimes, setSolveTimes] = useState<number[]>([]);
  const timerStartTimeRef = useRef<number>(0);
  const timerIntervalRef = useRef<number | null>(null);
  const holdTimeoutRef = useRef<number | null>(null);

  // Generate initial scramble
  useEffect(() => {
    generateNewScramble();
  }, []);

  const generateNewScramble = () => {
    const s = CubeModel.generateScramble(20);
    setScramble(s);
  };

  const stopAutoSolve = () => {
    isAutoSolvingRef.current = false;
    setIsAutoSolving(false);
  };

  const applyScrambleToCube = () => {
    stopAutoSolve();
    const newModel = new CubeModel();
    const moves = CubeModel.parseAlgorithm(scramble);
    newModel.applyAlgorithm(moves);
    setCubeModel(newModel);
    cube3DRef.current?.resetToModel(newModel);
    setMoveHistory([]);
    cumulativeMovesRef.current = [...moves];
    setCumulativeMoves([...moves]);
    generateCfopPlan(newModel);
    const ref = CubeModel.simplifyMoves(CubeModel.invertAlgorithm(moves));
    setTotalSolutionMoves(ref.length);
    setExecutedMovesCount(0);
  };

  const handleResetCube = () => {
    stopAutoSolve();
    const solvedModel = new CubeModel();
    setCubeModel(solvedModel);
    cube3DRef.current?.resetToModel(solvedModel);
    setMoveHistory([]);
    cumulativeMovesRef.current = [];
    setCumulativeMoves([]);
    setCfopResult({ stages: [], allMoves: [] });
    setCfopStepIndex(0);
    cfopStepIndexRef.current = 0;
    setTotalSolutionMoves(0);
    setExecutedMovesCount(0);
  };

  const handleImportPhysicalCube = (newModel: CubeModel) => {
    stopAutoSolve();
    setCubeModel(newModel);
    cube3DRef.current?.resetToModel(newModel);
    setMoveHistory([]);
    cumulativeMovesRef.current = [];
    setCumulativeMoves([]);
    setScramble('(Real Cube Imported)');
    if (timerState === 'running') {
      stopTimer();
    }
    setTimerState('ready');
    setTimeMs(0);

    setSolverMode('cfop');
    generateCfopPlan(newModel);

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
    });
  };

  const handleExecuteMove = (move: MoveName) => {
    stopAutoSolve();
    const next = cubeModel.clone();
    next.applyMove(move);
    setCubeModel(next);
    setMoveHistory((prev) => [...prev, move]);
    cumulativeMovesRef.current = [...cumulativeMovesRef.current, move];
    setCumulativeMoves(cumulativeMovesRef.current);
    generateCfopPlan(next);

    if (next.isSolved() && cumulativeMovesRef.current.length > 0) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
      if (timerState === 'running') {
        stopTimer();
      }
    }
  };

  const handleUndoMove = () => {
    stopAutoSolve();
    if (cumulativeMovesRef.current.length === 0) return;
    const lastMove = cumulativeMovesRef.current[cumulativeMovesRef.current.length - 1];
    const inverse = CubeModel.invertAlgorithm([lastMove])[0];
    const next = cubeModel.clone();
    next.applyMove(inverse);
    setCubeModel(next);
    cube3DRef.current?.resetToModel(next);
    setMoveHistory((prev) => prev.slice(0, -1));
    cumulativeMovesRef.current = cumulativeMovesRef.current.slice(0, -1);
    setCumulativeMoves(cumulativeMovesRef.current);
    generateCfopPlan(next);
  };

  const handleRunCustomAlgo = () => {
    stopAutoSolve();
    const moves = CubeModel.parseAlgorithm(customAlgo);
    if (moves.length === 0) return;
    const next = cubeModel.clone();
    next.applyAlgorithm(moves);
    setCubeModel(next);
    cube3DRef.current?.resetToModel(next);
    setMoveHistory((prev) => [...prev, ...moves]);
    cumulativeMovesRef.current = [...cumulativeMovesRef.current, ...moves];
    setCumulativeMoves(cumulativeMovesRef.current);
    generateCfopPlan(next);

    if (next.isSolved()) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
      if (timerState === 'running') {
        stopTimer();
      }
    }
  };

  const handleInvertCustomAlgo = () => {
    const moves = CubeModel.parseAlgorithm(customAlgo);
    const inverted = CubeModel.invertAlgorithm(moves);
    setCustomAlgo(inverted.join(' '));
  };

  const handleStepNext = async () => {
    if (isAutoSolvingRef.current || cube3DRef.current?.isAnimating()) return;

    if (solverMode === 'cfop') {
      if (cfopStepIndexRef.current >= cfopResult.allMoves.length) return;
      const nextMove = cfopResult.allMoves[cfopStepIndexRef.current];
      isExecutingSolutionRef.current = true;
      cfopStepIndexRef.current += 1;
      setCfopStepIndex(cfopStepIndexRef.current);
      try {
        await cube3DRef.current?.animateMove(nextMove, 220);
      } finally {
        isExecutingSolutionRef.current = false;
      }
    } else {
      const rawInv = CubeModel.invertAlgorithm(cumulativeMovesRef.current);
      const simplified = CubeModel.simplifyMoves(rawInv);
      if (simplified.length === 0) return;
      const nextMove = simplified[0];
      await cube3DRef.current?.animateMove(nextMove, 250);
    }
  };

  const handleStepPrev = async () => {
    if (isAutoSolvingRef.current || cube3DRef.current?.isAnimating()) return;

    if (solverMode === 'cfop') {
      if (cfopStepIndexRef.current <= 0) return;
      const prevMove = cfopResult.allMoves[cfopStepIndexRef.current - 1];
      const inverse = CubeModel.invertAlgorithm([prevMove])[0];
      isExecutingSolutionRef.current = true;
      isUndoingRef.current = true;
      cfopStepIndexRef.current -= 1;
      setCfopStepIndex(cfopStepIndexRef.current);
      try {
        await cube3DRef.current?.animateMove(inverse, 220);
      } finally {
        isExecutingSolutionRef.current = false;
      }
    } else {
      if (cumulativeMovesRef.current.length === 0) return;
      const lastMove = cumulativeMovesRef.current[cumulativeMovesRef.current.length - 1];
      const inverse = CubeModel.invertAlgorithm([lastMove])[0];
      isUndoingRef.current = true;
      await cube3DRef.current?.animateMove(inverse, 250);
    }
  };

  const handleToggleAutoSolve = async () => {
    if (isAutoSolvingRef.current) {
      stopAutoSolve();
      return;
    }

    if (solverMode === 'cfop') {
      if (cfopStepIndexRef.current >= cfopResult.allMoves.length) return;
      isAutoSolvingRef.current = true;
      setIsAutoSolving(true);

      while (isAutoSolvingRef.current && cfopStepIndexRef.current < cfopResult.allMoves.length) {
        const nextMove = cfopResult.allMoves[cfopStepIndexRef.current];
        isExecutingSolutionRef.current = true;
        cfopStepIndexRef.current += 1;
        setCfopStepIndex(cfopStepIndexRef.current);

        try {
          await cube3DRef.current?.animateMove(nextMove, 200);
        } catch {
          break;
        } finally {
          isExecutingSolutionRef.current = false;
        }

        if (cfopStepIndexRef.current >= cfopResult.allMoves.length || cubeModel.isSolved()) {
          stopAutoSolve();
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 },
          });
          if (timerState === 'running') {
            stopTimer();
          }
          break;
        }

        await new Promise((r) => setTimeout(r, 40));
      }
      stopAutoSolve();
    } else {
      const initialRaw = CubeModel.invertAlgorithm(cumulativeMovesRef.current);
      const initialMoves = CubeModel.simplifyMoves(initialRaw);
      if (initialMoves.length === 0) return;

      isAutoSolvingRef.current = true;
      setIsAutoSolving(true);

      while (isAutoSolvingRef.current) {
        const raw = CubeModel.invertAlgorithm(cumulativeMovesRef.current);
        const remaining = CubeModel.simplifyMoves(raw);
        if (remaining.length === 0) {
          stopAutoSolve();
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 },
          });
          if (timerState === 'running') {
            stopTimer();
          }
          break;
        }

        const nextMove = remaining[0];
        try {
          await cube3DRef.current?.animateMove(nextMove, 220);
        } catch {
          break;
        }

        await new Promise((r) => setTimeout(r, 60));
      }
      stopAutoSolve();
    }
  };

  const handleSolveInstantly = () => {
    stopAutoSolve();
    const solvedModel = new CubeModel();
    setCubeModel(solvedModel);
    cube3DRef.current?.resetToModel(solvedModel);
    setMoveHistory([]);
    cumulativeMovesRef.current = [];
    setCumulativeMoves([]);
    setCfopResult({ stages: [], allMoves: [] });
    setCfopStepIndex(0);
    cfopStepIndexRef.current = 0;
    setExecutedMovesCount(totalSolutionMoves);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
    if (timerState === 'running') {
      stopTimer();
    }
  };

  const handleCopySolution = () => {
    const textToCopy =
      solverMode === 'cfop'
        ? cfopResult.allMoves.join(' ')
        : referenceMoves.join(' ');
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    setSolutionCopied(true);
    setTimeout(() => setSolutionCopied(false), 1500);
  };

  // Timer controls
  const startTimer = () => {
    setTimerState('running');
    timerStartTimeRef.current = Date.now();
    timerIntervalRef.current = window.setInterval(() => {
      setTimeMs(Date.now() - timerStartTimeRef.current);
    }, 10);
  };

  const stopTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    setTimerState('stopped');
    const final = Date.now() - timerStartTimeRef.current;
    setTimeMs(final);
    setSolveTimes((prev) => [final, ...prev]);
  };

  // Keyboard spacebar listener for speedcube timer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        if (timerState === 'running') {
          stopTimer();
        } else if (timerState === 'idle' || timerState === 'stopped') {
          setTimerState('holding');
          holdTimeoutRef.current = window.setTimeout(() => {
            setTimerState('ready');
          }, 350);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
        if (timerState === 'ready') {
          startTimer();
        } else if (timerState === 'holding') {
          setTimerState('idle');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [timerState]);

  const formatTime = (ms: number): string => {
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    if (mins > 0) {
      return `${mins}:${secs.toString().padStart(2, '0')}.${centis.toString().padStart(2, '0')}`;
    }
    return `${secs}.${centis.toString().padStart(2, '0')}`;
  };

  // Stats calculation
  const bestTime = solveTimes.length > 0 ? Math.min(...solveTimes) : null;
  const avgOf5 =
    solveTimes.length >= 5
      ? Math.round(
          solveTimes
            .slice(0, 5)
            .sort((a, b) => a - b)
            .slice(1, 4)
            .reduce((a, b) => a + b, 0) / 3
        )
      : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
      {/* WCA Scramble Generator Card */}
      <div className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              {t.sandbox.wcaScramble}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(scramble);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="p-1 text-slate-400 hover:text-slate-200 transition"
                title={t.sandbox.copyScramble}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={generateNewScramble}
                className="p-1 text-slate-400 hover:text-slate-200 transition"
                title={t.sandbox.newScramble}
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="p-2.5 bg-slate-950/70 rounded-lg border border-white/5 font-mono text-sm sm:text-base font-bold text-amber-300 tracking-wide break-words">
            {scramble}
          </div>
        </div>

        {/* Apply Scramble, Reset & Import Actions */}
        <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
          <button
            type="button"
            onClick={applyScrambleToCube}
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition"
          >
            <Shuffle className="w-3.5 h-3.5" /> {t.sandbox.scrambleCube}
          </button>
          <button
            type="button"
            onClick={() => setShowInputModal(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-bold text-xs rounded-xl shadow-md shadow-sky-500/20 transition active:scale-95"
          >
            <Camera className="w-3.5 h-3.5" /> {t.sandbox.importPhysicalCube}
          </button>
          <button
            type="button"
            onClick={handleResetCube}
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> {t.sandbox.resetSolved}
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 3D Cube & Full Controls */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t.sandbox.title}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleUndoMove}
                  disabled={moveHistory.length === 0}
                  className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 px-3 py-1.5 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  <Undo2 className="w-3.5 h-3.5" /> {t.sandbox.undo}
                </button>
              </div>
            </div>

            {/* 3D Cube View */}
            <div className="w-full h-84 sm:h-[420px] rounded-xl bg-slate-950/60 border border-white/5 overflow-hidden">
              <Cube3D
                ref={cube3DRef}
                cubeModel={cubeModel}
                interactive={true}
                showControls={false}
                className="w-full h-full"
                onMoveComplete={(m, model) => {
                  setCubeModel(model.clone());
                  if (isUndoingRef.current) {
                    isUndoingRef.current = false;
                    cumulativeMovesRef.current = cumulativeMovesRef.current.slice(0, -1);
                    setCumulativeMoves(cumulativeMovesRef.current);
                    setMoveHistory((prev) => prev.slice(0, -1));
                    setExecutedMovesCount((prev) => Math.max(0, prev - 1));
                  } else {
                    cumulativeMovesRef.current = [...cumulativeMovesRef.current, m];
                    setCumulativeMoves(cumulativeMovesRef.current);
                    setMoveHistory((prev) => [...prev, m]);
                    setExecutedMovesCount((prev) => prev + 1);
                  }

                  if (!isExecutingSolutionRef.current) {
                    generateCfopPlan(model);
                  }

                  if (model.isSolved() && cumulativeMovesRef.current.length > 0) {
                    confetti({
                      particleCount: 100,
                      spread: 80,
                      origin: { y: 0.6 },
                    });
                    if (timerState === 'running') {
                      stopTimer();
                    }
                  }
                }}
              />
            </div>

            {/* Comprehensive Face Turn Controls */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {t.sandbox.turnControls}
              </span>
              <div className="grid grid-cols-6 sm:grid-cols-9 gap-1.5">
                {(['U', 'D', 'R', 'L', 'F', 'B', 'M', 'E', 'S'] as MoveName[]).map((f) => (
                  <div key={f} className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => handleExecuteMove(f)}
                      className="py-1.5 px-2 bg-slate-800 hover:bg-sky-600 text-slate-200 hover:text-white font-mono font-bold text-xs rounded transition shadow text-center"
                    >
                      {f}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleExecuteMove(`${f}'` as MoveName)}
                      className="py-1.5 px-2 bg-slate-900 hover:bg-rose-600 text-slate-400 hover:text-white font-mono font-bold text-xs rounded transition shadow text-center"
                    >
                      {f}'
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Algorithm Tester */}
            <div className="p-3.5 bg-slate-950/60 rounded-xl border border-white/5 flex flex-col gap-2.5">
              <span className="text-xs font-bold text-slate-300">
                {t.sandbox.testerTitle}
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customAlgo}
                  onChange={(e) => setCustomAlgo(e.target.value)}
                  placeholder={t.sandbox.testerPlaceholder}
                  className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="button"
                  onClick={handleRunCustomAlgo}
                  className="flex items-center gap-1 px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition shadow"
                >
                  <Play className="w-3.5 h-3.5" /> {t.sandbox.execute}
                </button>
                <button
                  type="button"
                  onClick={handleInvertCustomAlgo}
                  className="flex items-center gap-1 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-lg transition"
                  title={t.sandbox.invertTooltip}
                >
                  <FastForward className="w-3.5 h-3.5" /> {t.sandbox.invert}
                </button>
              </div>
            </div>

            {/* Move History Strip */}
            {moveHistory.length > 0 && (
              <div className="flex flex-col gap-1 text-xs">
                <span className="text-slate-400 text-[11px]">
                  {t.sandbox.history} ({moveHistory.length} {t.sandbox.turns}):
                </span>
                <div className="p-2 bg-slate-950/50 rounded-lg border border-white/5 font-mono text-slate-300 text-xs flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
                  {moveHistory.map((m, idx) => (
                    <span key={idx} className="bg-slate-800 px-1.5 py-0.5 rounded text-sky-300">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Reference Answer & Solver Card */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">
                  {t.sandbox.referenceTitle}
                </span>
                {((solverMode === 'cfop' ? cfopResult.allMoves.length : referenceMoves.length) > 0) && showReference && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {solverMode === 'cfop' ? cfopResult.allMoves.length : referenceMoves.length} {t.sandbox.turns}
                  </span>
                )}
              </div>

              {/* Spoiler Shield Toggle */}
              <button
                type="button"
                onClick={() => setShowReference((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                  showReference
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-white/10'
                    : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/30'
                }`}
              >
                {showReference ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>{t.sandbox.hideReference}</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.sandbox.showReference}</span>
                  </>
                )}
              </button>
            </div>

            {!showReference ? (
              <div className="p-4 bg-slate-950/40 rounded-xl border border-dashed border-white/10 flex items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-amber-400/80 flex-shrink-0" />
                  <span>{t.sandbox.hideReference}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowReference(true)}
                  className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded font-medium transition"
                >
                  {t.sandbox.showReference}
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {/* Solver Mode Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-1.5 bg-slate-950/80 rounded-xl border border-white/5">
                  <span className="text-xs font-semibold text-slate-400 px-2">
                    {t.sandbox.solverMode}:
                  </span>
                  <div className="flex items-center gap-1.5 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => {
                        setSolverMode('cfop');
                        if (cfopResult.allMoves.length === 0 && !cubeModel.isSolved()) {
                          generateCfopPlan(cubeModel);
                        }
                      }}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        solverMode === 'cfop'
                          ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow shadow-sky-500/25'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{t.sandbox.cfopMode}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSolverMode('optimal')}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        solverMode === 'optimal'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow shadow-amber-500/25'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>{t.sandbox.optimalMode}</span>
                    </button>
                  </div>
                </div>

                {/* Mode Explanation Callout */}
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 text-[11px] text-slate-300 flex items-start gap-2 leading-relaxed">
                  <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {solverMode === 'cfop' ? t.sandbox.cfopMethodDesc : t.sandbox.optimalMethodDesc}
                  </span>
                </div>

                {/* Solved or Pending State */}
                {cubeModel.isSolved() ? (
                  <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/20 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-emerald-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>{t.sandbox.alreadySolved}</span>
                    </div>
                    <button
                      type="button"
                      onClick={applyScrambleToCube}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-200 text-xs font-bold rounded-lg transition border border-emerald-500/30 flex-shrink-0"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      <span>{t.sandbox.scrambleCube}</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {/* CFOP Multi-Stage Accordion View */}
                    {solverMode === 'cfop' ? (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between px-1">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            {t.sandbox.solutionBadge} ({cfopResult.allMoves.length} {t.sandbox.turns})
                          </span>
                          <button
                            type="button"
                            onClick={handleCopySolution}
                            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition"
                          >
                            {solutionCopied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">{t.sandbox.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>{t.sandbox.copySolution}</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Stage Cards */}
                        <div className="flex flex-col gap-1.5">
                          {stageRanges.map((st) => {
                            const stageName = t.sandbox.stageNames[st.phaseKey as keyof typeof t.sandbox.stageNames] || st.name;
                            const isExpanded = expandedStage === st.stageNumber || (expandedStage === null && st.isActive);

                            return (
                              <div
                                key={st.stageNumber}
                                className={`rounded-xl border transition-all ${
                                  st.isActive
                                    ? 'bg-slate-900/90 border-sky-500/40 shadow-sm shadow-sky-500/10 ring-1 ring-sky-500/20'
                                    : st.isCompleted
                                    ? 'bg-emerald-950/20 border-emerald-500/20'
                                    : 'bg-slate-950/50 border-white/5 opacity-75'
                                }`}
                              >
                                <button
                                  type="button"
                                  onClick={() => setExpandedStage(expandedStage === st.stageNumber ? -1 : st.stageNumber)}
                                  className="w-full px-3.5 py-2.5 flex items-center justify-between text-left gap-2"
                                >
                                  <div className="flex items-center gap-2.5 flex-wrap">
                                    <span
                                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono ${
                                        st.isCompleted
                                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                          : st.isActive
                                          ? 'bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/30 font-extrabold'
                                          : 'bg-slate-800 text-slate-400'
                                      }`}
                                    >
                                      {st.isCompleted ? '✓' : st.stageNumber}
                                    </span>
                                    <span
                                      className={`text-xs font-bold ${
                                        st.isActive
                                          ? 'text-sky-200'
                                          : st.isCompleted
                                          ? 'text-emerald-300'
                                          : 'text-slate-300'
                                      }`}
                                    >
                                      {stageName}
                                    </span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold bg-slate-800/80 text-slate-400">
                                      {st.moves.length} {t.sandbox.turns}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    {st.isCompleted ? (
                                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                                        <Check className="w-3 h-3" />
                                        {t.sandbox.stageCompleted}
                                      </span>
                                    ) : st.isActive ? (
                                      <span className="text-[10px] font-bold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded-full border border-sky-500/30 animate-pulse">
                                        {st.movesDone} / {st.moves.length}
                                      </span>
                                    ) : null}
                                    {isExpanded ? (
                                      <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                                    ) : (
                                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                                    )}
                                  </div>
                                </button>

                                {isExpanded && (
                                  <div className="px-3.5 pb-3 pt-1 border-t border-white/5 flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                                    {st.moves.length === 0 ? (
                                      <span className="text-[11px] text-emerald-400 italic">
                                        ✓ {t.sandbox.stageCompleted} (0 {t.sandbox.turns})
                                      </span>
                                    ) : (
                                      st.moves.map((move, mIdx) => {
                                        const globalIdx = st.start + mIdx;
                                        const isPast = globalIdx < cfopStepIndex;
                                        const isCurrent = globalIdx === cfopStepIndex;

                                        return (
                                          <span
                                            key={mIdx}
                                            className={`px-2 py-0.5 rounded font-mono text-xs font-bold transition-all ${
                                              isCurrent
                                                ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300/60 shadow-md shadow-amber-500/20 scale-105'
                                                : isPast
                                                ? 'bg-emerald-950/40 text-emerald-400/70 border border-emerald-500/20 line-through'
                                                : 'bg-slate-800 text-sky-300 border border-white/5'
                                            }`}
                                          >
                                            {move}
                                          </span>
                                        );
                                      })
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      /* Optimal Solution Single Strip */
                      <div className="p-3 bg-slate-950/70 rounded-xl border border-white/5 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            {t.sandbox.solutionBadge} ({referenceMoves.length})
                          </span>
                          <button
                            type="button"
                            onClick={handleCopySolution}
                            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition"
                          >
                            {solutionCopied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">{t.sandbox.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>{t.sandbox.copySolution}</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Move Pills */}
                        <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1 py-1">
                          {referenceMoves.map((move, idx) => (
                            <span
                              key={idx}
                              className={`px-2 py-0.5 rounded font-mono text-xs font-bold transition-all ${
                                idx === 0
                                  ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300/60 shadow-md shadow-amber-500/20 scale-105'
                                  : 'bg-slate-800 text-sky-300 border border-white/5'
                              }`}
                            >
                              {move}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Real-time Solving & Restored Pieces Progress */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-[11px] font-semibold">{t.sandbox.solutionProgress}</span>
                          <span className="font-mono text-cyan-300 font-bold">
                            {solverMode === 'cfop'
                              ? `${cfopStepIndex} / ${cfopResult.allMoves.length} (${
                                  cfopResult.allMoves.length > 0
                                    ? Math.min(100, Math.round((cfopStepIndex / cfopResult.allMoves.length) * 100))
                                    : cubeModel.isSolved()
                                    ? 100
                                    : 0
                                }%)`
                              : totalSolutionMoves > 0
                              ? `Step ${executedMovesCount} / ${totalSolutionMoves} (${Math.min(100, Math.round((executedMovesCount / totalSolutionMoves) * 100))}%)`
                              : `${referenceMoves.length} ${t.sandbox.turns}`}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300 rounded-full"
                            style={{
                              width: `${
                                solverMode === 'cfop'
                                  ? cfopResult.allMoves.length > 0
                                    ? Math.min(100, Math.round((cfopStepIndex / cfopResult.allMoves.length) * 100))
                                    : cubeModel.isSolved()
                                    ? 100
                                    : 0
                                  : totalSolutionMoves > 0
                                  ? Math.min(100, Math.round((executedMovesCount / totalSolutionMoves) * 100))
                                  : cubeModel.isSolved()
                                  ? 100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-[11px] font-semibold">{t.sandbox.piecesRestored}</span>
                          <span className="font-mono text-amber-300 font-bold">
                            {detailedStats.solvedPieces} / {detailedStats.totalPieces} ({Math.round((detailedStats.solvedPieces / detailedStats.totalPieces) * 100)}%)
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300 rounded-full"
                            style={{
                              width: `${Math.round((detailedStats.solvedPieces / detailedStats.totalPieces) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Interactive Playback Toolbar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={handleStepPrev}
                        disabled={
                          isAutoSolving ||
                          (solverMode === 'cfop' ? cfopStepIndex <= 0 : cumulativeMoves.length === 0)
                        }
                        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 font-semibold text-xs rounded-xl transition border border-white/5"
                      >
                        <SkipBack className="w-3.5 h-3.5" />
                        <span>{t.sandbox.stepPrev}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleStepNext}
                        disabled={
                          isAutoSolving ||
                          cubeModel.isSolved() ||
                          (solverMode === 'cfop' ? cfopStepIndex >= cfopResult.allMoves.length : referenceMoves.length === 0)
                        }
                        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl transition shadow shadow-sky-500/20"
                      >
                        <SkipForward className="w-3.5 h-3.5" />
                        <span>{t.sandbox.stepNext}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleToggleAutoSolve}
                        disabled={
                          cubeModel.isSolved() ||
                          (solverMode === 'cfop' ? cfopStepIndex >= cfopResult.allMoves.length : referenceMoves.length === 0)
                        }
                        className={`flex items-center justify-center gap-1.5 px-3 py-2 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-xs rounded-xl transition shadow ${
                          isAutoSolving
                            ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                        }`}
                      >
                        {isAutoSolving ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>{t.sandbox.pause}</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5" />
                            <span>{t.sandbox.autoSolve}</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleSolveInstantly}
                        disabled={cubeModel.isSolved()}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl transition shadow shadow-purple-600/20"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>{t.sandbox.solveInstant}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* CFOP / Beginner Phase Diagnostics */}
                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-white/5 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between flex-wrap gap-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {t.sandbox.phaseDiagnostic}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 font-semibold">
                        {currentPhase.phaseIndex === 0 && `${detailedStats.whiteCrossEdges}/4 ${t.sandbox.edgesAligned}`}
                        {currentPhase.phaseIndex === 1 && `${detailedStats.firstLayerCorners}/4 ${t.sandbox.cornersDocked}`}
                        {currentPhase.phaseIndex === 2 && `${detailedStats.secondLayerEdges}/4 ${t.sandbox.edgesPlaced}`}
                        {currentPhase.phaseIndex === 3 && `${detailedStats.yellowCrossEdges}/4 ${t.sandbox.edgesOriented}`}
                        {currentPhase.phaseIndex === 4 && `${detailedStats.yellowCornersOriented}/4 ${t.sandbox.cornersOriented}`}
                        {currentPhase.phaseIndex === 5 && 'PLL'}
                        {currentPhase.phaseIndex === 6 && 'PLL'}
                        {currentPhase.phaseIndex === 7 && '✓ Solved'}
                      </span>
                      <span className="text-xs font-mono font-bold text-sky-400">
                        {currentPhase.phaseIndex} / 7
                      </span>
                    </div>
                  </div>

                  {/* Phase Progress Bar */}
                  <div className="grid grid-cols-7 gap-1">
                    {[0, 1, 2, 3, 4, 5, 6].map((idx) => {
                      const isCompleted = idx < currentPhase.phaseIndex;
                      const isCurrent = idx === currentPhase.phaseIndex;
                      return (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all ${
                            isCompleted
                              ? 'bg-emerald-400'
                              : isCurrent
                              ? 'bg-amber-400 ring-2 ring-amber-400/40 animate-pulse'
                              : 'bg-slate-800'
                          }`}
                          title={`Stage ${idx + 1}`}
                        />
                      );
                    })}
                  </div>

                  {/* Current Phase Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5 flex flex-col gap-1">
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                        {t.sandbox.phaseCurrent}
                      </span>
                      <span className="font-bold text-slate-100">
                        {t.sandbox.phaseNames[currentPhase.phaseKey as keyof typeof t.sandbox.phaseNames] || currentPhase.phaseKey}
                      </span>
                      <span className="text-slate-400 text-[11px] leading-relaxed">
                        {t.sandbox.phaseTips[currentPhase.phaseKey as keyof typeof t.sandbox.phaseTips] || ''}
                      </span>
                    </div>

                    <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5 flex flex-col gap-1">
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                        {t.sandbox.phaseNextAlgo}
                      </span>
                      <span className="font-mono text-cyan-300 font-bold break-words">
                        {recommendedPhaseAlgorithms[currentPhase.phaseKey] || '—'}
                      </span>
                    </div>
                  </div>

                  {/* Explanatory Callout Banner */}
                  <div className="p-3 bg-sky-950/30 rounded-xl border border-sky-500/20 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <Info className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span>{solverMode === 'cfop' ? t.sandbox.cfopMethodDesc : t.sandbox.directInverseNote}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Speedcubing Timer & Stats */}
        <div className="lg:col-span-4 flex flex-col gap-4 sticky top-6">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" /> {t.sandbox.timerTitle}
            </div>

            {/* Big Timer Display */}
            <div
              className={`w-full py-8 rounded-2xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                timerState === 'ready'
                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/20'
                  : timerState === 'holding'
                  ? 'bg-amber-950/60 border-amber-500 text-amber-400'
                  : timerState === 'running'
                  ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300'
                  : 'bg-slate-950/70 border-white/5 text-white'
              }`}
              onPointerDown={() => {
                if (timerState === 'running') {
                  stopTimer();
                } else if (timerState === 'idle' || timerState === 'stopped') {
                  setTimerState('holding');
                  holdTimeoutRef.current = window.setTimeout(() => {
                    setTimerState('ready');
                  }, 350);
                }
              }}
              onPointerUp={() => {
                if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
                if (timerState === 'ready') {
                  startTimer();
                } else if (timerState === 'holding') {
                  setTimerState('idle');
                }
              }}
            >
              <span className="text-4xl sm:text-5xl font-mono font-extrabold tracking-tight">
                {formatTime(timeMs)}
              </span>
              <span className="text-xs text-slate-400 pt-2">
                {timerState === 'ready'
                  ? t.sandbox.releaseToStart
                  : timerState === 'holding'
                  ? t.sandbox.holdSteady
                  : timerState === 'running'
                  ? t.sandbox.solvingTapToStop
                  : t.sandbox.holdSpaceToStart}
              </span>
            </div>

            {/* Timer Statistics */}
            <div className="w-full grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-slate-400 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> {t.sandbox.bestTime}
                </span>
                <span className="text-base font-mono font-bold text-amber-300">
                  {bestTime ? formatTime(bestTime) : '--'}
                </span>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-slate-400 flex items-center gap-1">
                  <Timer className="w-3.5 h-3.5 text-sky-400" /> {t.sandbox.ao5}
                </span>
                <span className="text-base font-mono font-bold text-sky-300">
                  {avgOf5 ? formatTime(avgOf5) : '--'}
                </span>
              </div>
            </div>

            {/* Solve History */}
            {solveTimes.length > 0 && (
              <div className="w-full flex flex-col gap-2 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{t.sandbox.recentSolves} ({solveTimes.length})</span>
                  <button
                    type="button"
                    onClick={() => setSolveTimes([])}
                    className="hover:text-rose-400 transition"
                    title={t.sandbox.clearHistory}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex flex-col gap-1 max-h-36 overflow-y-auto pr-1">
                  {solveTimes.map((solveTime, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg text-xs font-mono"
                    >
                      <span className="text-slate-500">#{solveTimes.length - idx}</span>
                      <span className="text-slate-200 font-bold">{formatTime(solveTime)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Real Cube Input & Scanner Modal */}
      <CubeInputModal
        isOpen={showInputModal}
        onClose={() => setShowInputModal(false)}
        onImport={handleImportPhysicalCube}
      />
    </div>
  );
};
