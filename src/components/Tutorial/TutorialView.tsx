import { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  Check,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Compass,
  Target,
  Hand,
  Layers,
} from 'lucide-react';
import { CubeModel } from '../../cube/CubeModel';
import { Cube3D, type Cube3DRef } from '../Cube3D/Cube3D';
import { TUTORIAL_STAGES, type StageCase } from './TutorialData';
import { useTranslation } from '../../i18n/LanguageContext';

export const TutorialView = () => {
  const { t } = useTranslation();
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [caseIndex, setCaseIndex] = useState<number>(0);
  const [focusMode, setFocusMode] = useState<boolean>(true);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'initial' | 'target' | 'interactive'>('interactive');
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(false);
  const [isAnimatingMove, setIsAnimatingMove] = useState<boolean>(false);

  const cubeRef = useRef<Cube3DRef | null>(null);

  const stage = TUTORIAL_STAGES[stageIndex];
  const activeCase: StageCase = stage.cases[caseIndex] || stage.cases[0];

  const localizedStage = t.stages[stage.stageId];
  const localizedCase = localizedStage?.cases?.[activeCase.caseId];

  const stageTitle = localizedStage?.title || stage.title;
  const stageSubtitle = localizedStage?.subtitle || stage.subtitle;
  const stageOverview = localizedStage?.overview || stage.overview;
  const stageKeyTakeaway = localizedStage?.keyTakeaway || stage.keyTakeaway;

  const caseName = localizedCase?.caseName || activeCase.caseName;
  const caseInitialDescription = localizedCase?.initialDescription || activeCase.initialDescription;
  const caseTargetDescription = localizedCase?.targetDescription || activeCase.targetDescription;
  const caseProTips = localizedCase?.proTips || activeCase.proTips;

  // Helper to construct CubeModel from setup moves
  const getInitialModel = useCallback((): CubeModel => {
    const model = new CubeModel();
    if (activeCase.initialSetupMoves && activeCase.initialSetupMoves.length > 0) {
      model.applyAlgorithm(activeCase.initialSetupMoves);
    }
    return model;
  }, [activeCase]);

  const getTargetModel = useCallback((): CubeModel => {
    const model = new CubeModel();
    if (activeCase.targetSetupMoves && activeCase.targetSetupMoves.length > 0) {
      model.applyAlgorithm(activeCase.targetSetupMoves);
    }
    return model;
  }, [activeCase]);

  // Reset cube state when stage or case changes
  useEffect(() => {
    setCurrentStepIndex(0);
    setIsPlayingAuto(false);
    setViewMode('interactive');
    const initialModel = getInitialModel();
    cubeRef.current?.resetToModel(initialModel);
  }, [stageIndex, caseIndex, getInitialModel]);

  // Handle Initial vs Target vs Interactive Mode toggles
  const handleToggleViewMode = (mode: 'initial' | 'target' | 'interactive') => {
    setViewMode(mode);
    setIsPlayingAuto(false);
    if (mode === 'target') {
      cubeRef.current?.resetToModel(getTargetModel());
    } else if (mode === 'initial') {
      cubeRef.current?.resetToModel(getInitialModel());
    } else {
      // Re-apply moves up to currentStepIndex
      const model = getInitialModel();
      for (let i = 0; i < currentStepIndex; i++) {
        model.applyMove(activeCase.algorithmMoves[i]);
      }
      cubeRef.current?.resetToModel(model);
    }
  };

  // Reset to initial case state
  const handleResetCase = () => {
    setIsPlayingAuto(false);
    setCurrentStepIndex(0);
    setViewMode('interactive');
    cubeRef.current?.resetToModel(getInitialModel());
  };

  // Execute a single step with visible 3D rotation animation
  const handleAnimateCurrentStep = async () => {
    if (isAnimatingMove || !cubeRef.current) return;
    if (currentStepIndex >= activeCase.algorithmMoves.length) return;

    setIsAnimatingMove(true);
    setViewMode('interactive');
    const move = activeCase.algorithmMoves[currentStepIndex];

    await cubeRef.current.animateMove(move, 650);

    const nextIndex = currentStepIndex + 1;
    setCurrentStepIndex(nextIndex);
    setIsAnimatingMove(false);

    // Check if algorithm completed
    if (nextIndex === activeCase.algorithmMoves.length) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  // Step backward in the algorithm
  const handleStepBack = () => {
    if (currentStepIndex <= 0 || isAnimatingMove) return;
    setIsPlayingAuto(false);
    const target = currentStepIndex - 1;
    const model = getInitialModel();
    for (let i = 0; i < target; i++) {
      model.applyMove(activeCase.algorithmMoves[i]);
    }
    cubeRef.current?.resetToModel(model);
    setCurrentStepIndex(target);
    setViewMode('interactive');
  };

  // Auto-play all moves one by one
  useEffect(() => {
    let timeoutId: number;

    const runAutoPlay = async () => {
      if (!isPlayingAuto || isAnimatingMove) return;

      if (currentStepIndex < activeCase.algorithmMoves.length) {
        setIsAnimatingMove(true);
        const move = activeCase.algorithmMoves[currentStepIndex];
        await cubeRef.current?.animateMove(move, 600);
        setCurrentStepIndex((prev) => prev + 1);
        setIsAnimatingMove(false);
      } else {
        setIsPlayingAuto(false);
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    };

    if (isPlayingAuto && !isAnimatingMove) {
      timeoutId = window.setTimeout(runAutoPlay, 350);
    }

    return () => clearTimeout(timeoutId);
  }, [isPlayingAuto, isAnimatingMove, currentStepIndex, activeCase]);

  const handleToggleAutoPlay = () => {
    if (currentStepIndex >= activeCase.algorithmMoves.length) {
      handleResetCase();
      setIsPlayingAuto(true);
    } else {
      setIsPlayingAuto((prev) => !prev);
    }
  };

  // Current move step instruction
  const currentStepInfo =
    activeCase.detailedSteps[currentStepIndex] ||
    activeCase.detailedSteps[activeCase.detailedSteps.length - 1];

  const localizedStep = localizedCase?.detailedSteps?.[currentStepIndex];
  const currentStepTitle = localizedStep?.stepTitle || currentStepInfo?.stepTitle;
  const currentHandAction = localizedStep?.handAction || currentStepInfo?.handAction;
  const currentPieceEffect = localizedStep?.pieceEffect || currentStepInfo?.pieceEffect;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
      {/* Stage Navigation Bar */}
      <div className="glass-panel rounded-2xl p-3 flex items-center justify-between gap-2 overflow-x-auto">
        {TUTORIAL_STAGES.map((s, idx) => {
          const isCurrent = idx === stageIndex;
          const isDone = idx < stageIndex;
          const sTitle = t.stages[s.stageId]?.title || s.title;
          const shortTitle = sTitle.includes(':') ? sTitle.split(':')[1].trim() : sTitle;
          return (
            <button
              key={s.stageId}
              type="button"
              onClick={() => {
                setStageIndex(idx);
                setCaseIndex(0);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isCurrent
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40 shadow-md scale-102'
                  : isDone
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isCurrent
                    ? 'bg-sky-500 text-white'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {isDone ? <Check className="w-3 h-3" /> : idx}
              </span>
              <span className="hidden sm:inline">{shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Lesson, Case Selector & Step-by-Step Physical Guidance */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Stage Header Card */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                {t.tutorial.stageProgress} {stage.stageNumber} / {TUTORIAL_STAGES.length - 1}
              </span>

              {/* Focus Mode Toggle */}
              <button
                type="button"
                onClick={() => setFocusMode((prev) => !prev)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg border transition ${
                  focusMode
                    ? 'bg-sky-500/20 border-sky-500/30 text-sky-300'
                    : 'bg-slate-800/60 border-white/10 text-slate-400 hover:text-slate-200'
                }`}
                title={t.tutorial.focusTooltip}
              >
                {focusMode ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                {focusMode ? t.tutorial.focusModeOn : t.tutorial.focusModeOff}
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {stageTitle}
            </h1>
            <p className="text-sm font-medium text-sky-200/90">{stageSubtitle}</p>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">{stageOverview}</p>

            {/* Key Intuition */}
            <div className="mt-1 p-3 bg-gradient-to-r from-sky-950/50 to-indigo-950/40 rounded-xl border border-sky-500/20 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] uppercase tracking-wider font-bold text-sky-300">
                  {t.tutorial.keyIntuition}
                </span>
                <span className="text-xs text-slate-200 leading-relaxed">
                  {stageKeyTakeaway}
                </span>
              </div>
            </div>
          </div>

          {/* Case / Possibility Selector */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" />
                {t.tutorial.caseSelectorTitle} ({stage.cases.length})
              </span>
              <span className="text-[11px] text-slate-400">
                {t.tutorial.caseSelectorPrompt}
              </span>
            </div>

            {/* Case Tabs */}
            <div className="flex flex-wrap gap-2">
              {stage.cases.map((c, idx) => {
                const isSelected = idx === caseIndex;
                const localizedCName = localizedStage?.cases?.[c.caseId]?.caseName || c.caseName;
                return (
                  <button
                    key={c.caseId}
                    type="button"
                    onClick={() => {
                      setCaseIndex(idx);
                      setCurrentStepIndex(0);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-md'
                        : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span>{localizedCName}</span>
                  </button>
                );
              })}
            </div>

            {/* Case Initial Description */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-white/5 text-xs text-slate-300 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">{t.tutorial.howToIdentify}</strong>
                <span className="text-slate-300 leading-relaxed">{caseInitialDescription}</span>
              </div>
            </div>
          </div>

          {/* STEP-BY-STEP OPERATION & ROTATION GUIDANCE */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {t.tutorial.operationGuideTitle}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                {t.tutorial.moveProgress} {Math.min(currentStepIndex + 1, activeCase.algorithmMoves.length)} / {activeCase.algorithmMoves.length}
              </span>
            </div>

            {/* Move Badges Sequence Strip */}
            <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-950/70 rounded-xl border border-white/5">
              {activeCase.algorithmMoves.map((m, idx) => {
                const isCurrent = idx === currentStepIndex;
                const isDone = idx < currentStepIndex;
                return (
                  <button
                    key={`${m}-${idx}`}
                    type="button"
                    onClick={() => {
                      // Seek to this step
                      setIsPlayingAuto(false);
                      const model = getInitialModel();
                      for (let i = 0; i < idx; i++) {
                        model.applyMove(activeCase.algorithmMoves[i]);
                      }
                      cubeRef.current?.resetToModel(model);
                      setCurrentStepIndex(idx);
                      setViewMode('interactive');
                    }}
                    className={`px-3 py-1.5 text-sm font-mono font-extrabold rounded-lg transition-all ${
                      isCurrent
                        ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 scale-110 shadow-lg'
                        : isDone
                        ? 'bg-slate-800 text-slate-400 line-through decoration-slate-500'
                        : 'bg-slate-900 text-sky-300 hover:bg-slate-800 border border-white/5'
                    }`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>

            {/* Current Move Instruction Cards */}
            {currentStepIndex < activeCase.algorithmMoves.length ? (
              <div className="flex flex-col gap-3 animate-fade-in">
                {/* Move Title & Move Badge */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/30">
                    {activeCase.algorithmMoves[currentStepIndex]}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">
                      {currentStepTitle || `Execute ${activeCase.algorithmMoves[currentStepIndex]}`}
                    </span>
                    <span className="text-xs text-slate-400">
                      {t.tutorial.animationSpeedHint}
                    </span>
                  </div>
                </div>

                {/* Hand Action Guidance */}
                <div className="p-3.5 bg-gradient-to-r from-slate-900 to-slate-900/60 rounded-xl border border-white/5 flex items-start gap-3">
                  <Hand className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] uppercase font-bold text-amber-300">
                      {t.tutorial.howToPerform}
                    </span>
                    <span className="text-xs text-slate-200 leading-relaxed font-medium">
                      {currentHandAction}
                    </span>
                  </div>
                </div>

                {/* Piece Effect Explanation */}
                <div className="p-3.5 bg-gradient-to-r from-cyan-950/40 to-slate-900/60 rounded-xl border border-cyan-500/20 flex items-start gap-3">
                  <Compass className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] uppercase font-bold text-cyan-300">
                      {t.tutorial.pieceEffectLabel}
                    </span>
                    <span className="text-xs text-slate-200 leading-relaxed">
                      {currentPieceEffect}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Completion Card */
              <div className="p-4 bg-emerald-950/50 border border-emerald-500/40 rounded-xl flex items-center justify-between gap-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">
                      {t.tutorial.algorithmComplete}
                    </span>
                    <span className="text-xs text-emerald-300">
                      {t.tutorial.algorithmCompleteDesc}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleResetCase}
                  className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition"
                >
                  {t.tutorial.restartCase}
                </button>
              </div>
            )}

            {/* Playback Controls & Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetCase}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> {t.tutorial.resetCase}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleStepBack}
                  disabled={currentStepIndex <= 0 || isAnimatingMove}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition"
                  title="Step Back"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Primary Visible Rotation Button */}
                <button
                  type="button"
                  onClick={handleAnimateCurrentStep}
                  disabled={currentStepIndex >= activeCase.algorithmMoves.length || isAnimatingMove}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition disabled:opacity-40 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  {isAnimatingMove ? t.tutorial.rotating : t.tutorial.animateTurn}
                </button>

                {/* Auto Play Sequence */}
                <button
                  type="button"
                  onClick={handleToggleAutoPlay}
                  disabled={isAnimatingMove}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-xl transition disabled:opacity-40"
                  title="Auto play full sequence"
                >
                  {isPlayingAuto ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlayingAuto ? t.tutorial.pause : t.tutorial.autoPlay}
                </button>

                <button
                  type="button"
                  onClick={handleAnimateCurrentStep}
                  disabled={currentStepIndex >= activeCase.algorithmMoves.length || isAnimatingMove}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl transition"
                  title="Step Forward"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Pro Tips Card */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <Lightbulb className="w-4 h-4" />
              <span>{t.tutorial.speedcuberTips} - {caseName}</span>
            </div>
            <ul className="flex flex-col gap-2">
              {caseProTips.map((tip, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: 3D Visualizer with Initial vs Target State Comparison */}
        <div className="lg:col-span-5 flex flex-col gap-4 sticky top-6">
          <div className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col items-center gap-4 relative overflow-hidden">
            {/* Initial vs Target State Switcher Bar */}
            <div className="w-full flex items-center justify-between p-1 bg-slate-950/80 rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => handleToggleViewMode('initial')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'initial'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                {t.tutorial.initialState}
              </button>

              <button
                type="button"
                onClick={() => handleToggleViewMode('interactive')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'interactive'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                {t.tutorial.guided3D}
              </button>

              <button
                type="button"
                onClick={() => handleToggleViewMode('target')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'target'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                {t.tutorial.targetGoal}
              </button>
            </div>

            {/* View Mode Description Banner */}
            <div className="w-full text-xs px-2 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 text-slate-300 flex items-center justify-between">
              <span className="font-semibold text-slate-200">
                {viewMode === 'initial'
                  ? t.tutorial.showingInitial
                  : viewMode === 'target'
                  ? t.tutorial.showingTarget
                  : `${t.tutorial.guided3D}: ${currentStepIndex} / ${activeCase.algorithmMoves.length}`}
              </span>
              <span className="text-[10px] text-slate-400">
                {viewMode === 'target' ? t.tutorial.aimingFor : t.tutorial.dragToInspect}
              </span>
            </div>

            {/* Target Description if in Target Mode */}
            {viewMode === 'target' && (
              <div className="w-full p-2.5 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-[11px] text-emerald-300 leading-relaxed">
                <strong>{t.tutorial.targetGoalLabel}:</strong> {caseTargetDescription}
              </div>
            )}

            {/* 3D WebGL Cube Component */}
            <div className="w-full h-84 sm:h-96 rounded-xl bg-slate-950/60 border border-white/5 overflow-hidden relative">
              <Cube3D
                ref={cubeRef}
                focusMode={focusMode}
                highlightCoords={stage.focusCoords}
                interactive={true}
                showControls={true}
                animationSpeedMs={550}
                className="w-full h-full"
              />
            </div>

            {/* Bottom Action / Hint */}
            <div className="w-full flex items-center justify-between text-xs text-slate-400 px-1">
              <button
                type="button"
                onClick={handleResetCase}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition text-[11px]"
              >
                <RotateCcw className="w-3 h-3" />
                {t.tutorial.reset3DView}
              </button>

              <span className="text-[11px] text-slate-400">
                {t.tutorial.animationSpeedHint}
              </span>
            </div>
          </div>

          {/* Stage Progression Buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                if (stageIndex > 0) {
                  setStageIndex((prev) => prev - 1);
                  setCaseIndex(0);
                }
              }}
              disabled={stageIndex === 0}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 glass-panel-interactive rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> {t.tutorial.prevStage}
            </button>

            <button
              type="button"
              onClick={() => {
                if (stageIndex < TUTORIAL_STAGES.length - 1) {
                  setStageIndex((prev) => prev + 1);
                  setCaseIndex(0);
                }
              }}
              disabled={stageIndex === TUTORIAL_STAGES.length - 1}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-lg shadow-sky-500/20 transition active:scale-98 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {t.tutorial.nextStage} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
