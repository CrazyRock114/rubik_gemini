export type SupportedLanguage =
  | 'en'
  | 'de'
  | 'fr'
  | 'it'
  | 'ja'
  | 'ko'
  | 'zh-CN'
  | 'zh-TW';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string; // e.g. English, Deutsch, 日本語
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
];

export interface StepGuidanceTranslation {
  stepTitle: string;
  handAction: string;
  pieceEffect: string;
}

export interface CaseTranslation {
  caseName: string;
  badge: string;
  initialDescription: string;
  targetDescription: string;
  detailedSteps: StepGuidanceTranslation[];
  proTips: string[];
}

export interface StageTranslation {
  title: string;
  subtitle: string;
  overview: string;
  keyTakeaway: string;
  cases: Record<string, CaseTranslation>;
}

export interface QuizQuestionTranslation {
  question: string;
  options: string[];
  explanation: string;
}

export interface TranslationSchema {
  nav: {
    brandSubtitle: string;
    tutorial: string;
    graph: string;
    sandbox: string;
    quiz: string;
    shortcuts: string;
    shortcutsTitle: string;
    primeDoubleHint: string;
    timerHint: string;
  };
  cube3d: {
    dragHint: string;
    turn: string;
    clockwise: string;
    counterClockwise: string;
    halfTurn: string;
    faces: {
      U: string;
      D: string;
      R: string;
      L: string;
      F: string;
      B: string;
      M: string;
      E: string;
      S: string;
    };
  };
  tutorial: {
    stageProgress: string;
    focusModeOn: string;
    focusModeOff: string;
    focusTooltip: string;
    keyIntuition: string;
    caseSelectorTitle: string;
    caseSelectorPrompt: string;
    howToIdentify: string;
    operationGuideTitle: string;
    moveProgress: string;
    howToPerform: string;
    pieceEffectLabel: string;
    algorithmComplete: string;
    algorithmCompleteDesc: string;
    restartCase: string;
    resetCase: string;
    animateTurn: string;
    rotating: string;
    autoPlay: string;
    pause: string;
    initialState: string;
    guided3D: string;
    targetGoal: string;
    showingInitial: string;
    showingTarget: string;
    aimingFor: string;
    dragToInspect: string;
    targetGoalLabel: string;
    reset3DView: string;
    animationSpeedHint: string;
    prevStage: string;
    nextStage: string;
    speedcuberTips: string;
  };
  stages: Record<string, StageTranslation>;
  graph: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      explorer: string;
      cayley: string;
      diameter: string;
      search: string;
      commutators: string;
    };
    explorer: {
      selectSubgroup: string;
      runBfs: string;
      resetBfs: string;
      shortestPath: string;
      identity: string;
      exploredStates: string;
      realtimeSync: string;
      depth: string;
      nodeId: string;
      movesSeq: string;
      diameter: string;
      syncHint: string;
      legendSolved: string;
      legendVisited: string;
      legendPath: string;
      legendSelected: string;
      subgroups: {
        checkerboard: {
          name: string;
          desc: string;
        };
        r2u2: {
          name: string;
          desc: string;
        };
        commutator: {
          name: string;
          desc: string;
        };
      };
    };
    cayleySection: {
      title: string;
      intro: string;
      regularTitle: string;
      regularDesc: string;
      vertexTransitiveTitle: string;
      vertexTransitiveDesc: string;
      bipartiteTitle: string;
      bipartiteDesc: string;
      groupOrderTitle: string;
      groupOrderIntro: string;
      twelveOrbitsIntro: string;
      cornerParity: string;
      cornerParityDesc: string;
      edgeParity: string;
      edgeParityDesc: string;
      permParity: string;
      permParityDesc: string;
    };
    diameterSection: {
      badge: string;
      title: string;
      intro: string;
      htmTitle: string;
      htmDesc: string;
      qtmTitle: string;
      qtmDesc: string;
      superflipTitle: string;
      superflipDesc: string;
      distTitle: string;
      distNote: string;
    };
    searchSection: {
      title: string;
      bfsFailTitle: string;
      bfsFailDesc: string;
      paradigmsIntro: string;
      bibfsTitle: string;
      bibfsDesc: string;
      pdbTitle: string;
      pdbDesc: string;
      kociembaTitle: string;
      kociembaIntro: string;
      phase1Title: string;
      phase1Desc: string;
      phase2Title: string;
      phase2Desc: string;
    };
    commutatorSection: {
      title: string;
      intro: string;
      commutatorTitle: string;
      commutatorDesc1: string;
      commutatorDesc2: string;
      conjugateTitle: string;
      conjugateIntro: string;
      setupMove: string;
      operatorMove: string;
      teardownMove: string;
      conjugateSummary: string;
      infoBox: string;
    };
  };
  sandbox: {
    wcaScramble: string;
    copyScramble: string;
    newScramble: string;
    scrambleCube: string;
    resetSolved: string;
    title: string;
    undo: string;
    turnControls: string;
    testerTitle: string;
    testerPlaceholder: string;
    execute: string;
    invert: string;
    history: string;
    timerTitle: string;
    releaseToStart: string;
    holdSteady: string;
    solvingTapToStop: string;
    holdSpaceToStart: string;
    bestTime: string;
    ao5: string;
    recentSolves: string;
    invertTooltip: string;
    clearHistory: string;
    turns: string;
    referenceTitle: string;
    solverMode: string;
    cfopMode: string;
    optimalMode: string;
    cfopMethodDesc: string;
    optimalMethodDesc: string;
    stageCompleted: string;
    currentStage: string;
    stageHeader: string;
    stageMovesCount: string;
    stageNames: {
      whiteCross: string;
      firstLayer: string;
      secondLayer: string;
      yellowCross: string;
      orientYellowCorners: string;
      permuteYellowCorners: string;
      permuteYellowEdges: string;
    };
    showReference: string;
    hideReference: string;
    alreadySolved: string;
    solutionBadge: string;
    copySolution: string;
    copied: string;
    stepNext: string;
    stepPrev: string;
    autoSolve: string;
    pause: string;
    solveInstant: string;
    phaseDiagnostic: string;
    phaseCurrent: string;
    phaseNextAlgo: string;
    piecesRestored: string;
    solutionProgress: string;
    directInverseNote: string;
    edgesAligned: string;
    cornersDocked: string;
    edgesPlaced: string;
    edgesOriented: string;
    cornersOriented: string;
    importPhysicalCube: string;
    importSuccess: string;
    phaseNames: {
      whiteCross: string;
      firstLayer: string;
      secondLayer: string;
      yellowCross: string;
      orientYellowCorners: string;
      permuteYellowCorners: string;
      permuteYellowEdges: string;
      solved: string;
    };
    phaseTips: {
      whiteCross: string;
      firstLayer: string;
      secondLayer: string;
      yellowCross: string;
      orientYellowCorners: string;
      permuteYellowCorners: string;
      permuteYellowEdges: string;
      solved: string;
    };
  };
  quiz: {
    badge: string;
    title: string;
    subtitle: string;
    questionOf: string;
    correct: string;
    explanationLabel: string;
    answeredOf: string;
    submit: string;
    score: string;
    retake: string;
    feedbackMaster: string;
    feedbackGood: string;
    feedbackPractice: string;
    categories: {
      solving: string;
      graphTheory: string;
      groupTheory: string;
    };
    questions: Record<number, QuizQuestionTranslation>;
  };
  cubeInput: {
    modalTitle: string;
    modalSubtitle: string;
    tabCamera: string;
    tabManual: string;
    cameraGuideTitle: string;
    cameraFacingHint: string;
    cameraInstructions: string;
    scanPromptPrefix: string;
    alignNotice: string;
    captureFace: string;
    retakeFace: string;
    faceCapturedLocked: string;
    reidentifyFace: string;
    clickToFineTune: string;
    capturedFaceHint: string;
    scanningProgress: string;
    waitingAllFaces: string;
    nextFace: string;
    allFacesScanned: string;
    startCamera: string;
    stopCamera: string;
    cameraPermissionDenied: string;
    cameraNotAvailable: string;
    flipCamera: string;
    jumpToManual: string;
    facesToScan: {
      U: string;
      L: string;
      F: string;
      R: string;
      B: string;
      D: string;
    };
    faceOrientations: {
      U: string;
      L: string;
      F: string;
      R: string;
      B: string;
      D: string;
    };
    manualInstructions: string;
    colorPalette: string;
    selectedColor: string;
    remaining: string;
    resetSolved: string;
    clearAll: string;
    sampleScramble: string;
    netLayoutHint: string;
    statusValid: string;
    statusInvalid: string;
    incompleteStickers: string;
    invalidColorCount: string;
    invalidCenters: string;
    impossibleEdge: string;
    duplicateEdge: string;
    impossibleCorner: string;
    duplicateCorner: string;
    applyToSandbox: string;
    cancel: string;
    colorNames: {
      white: string;
      yellow: string;
      green: string;
      blue: string;
      red: string;
      orange: string;
    };
  };
  footer: {
    brandTitle: string;
    brandDesc: string;
    cayleyLabel: string;
    godNumberLabel: string;
    groupOrderLabel: string;
  };
}
