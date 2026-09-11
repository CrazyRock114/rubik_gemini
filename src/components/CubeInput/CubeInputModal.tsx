import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Camera,
  Palette,
  Check,
  AlertCircle,
  X,
  Sparkles,
  RotateCcw,
  Trash2,
  ArrowRight,
  ArrowLeft,
  VideoOff,
  FlipHorizontal,
  Lock,
  RefreshCw,
} from 'lucide-react';
import {
  type FaceletColor,
  type FaceletMap,
  COLOR_HEX_MAP,
  createDefaultFacelets,
  createEmptyFacelets,
  validateFacelets,
  buildCubeModelFromFacelets,
  classifyColor,
  extractFaceletsFromModel,
} from '../../cube/CubeStateParser';
import { CubeModel, type FaceName } from '../../cube/CubeModel';
import { useTranslation } from '../../i18n/LanguageContext';

export interface CubeInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (model: CubeModel) => void;
}

const SCAN_ORDER: FaceName[] = ['U', 'L', 'F', 'R', 'B', 'D'];
const ALL_COLORS: FaceletColor[] = ['U', 'D', 'F', 'B', 'R', 'L'];

export const CubeInputModal: React.FC<CubeInputModalProps> = ({
  isOpen,
  onClose,
  onImport,
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'camera' | 'manual'>('camera');
  const [facelets, setFacelets] = useState<FaceletMap>(() => createDefaultFacelets());
  const [activeColor, setActiveColor] = useState<FaceletColor>('U');

  // Camera state
  const [currentScanIndex, setCurrentScanIndex] = useState<number>(0);
  const currentFace = SCAN_ORDER[currentScanIndex];
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [isCaptureFlash, setIsCaptureFlash] = useState<boolean>(false);
  const [manualOverrideFace, setManualOverrideFace] = useState<number | null>(null);

  const [previewFacelets, setPreviewFacelets] = useState<FaceletColor[]>(() =>
    Array(9).fill(currentFace)
  );
  const [capturedFaces, setCapturedFaces] = useState<Record<FaceName, boolean>>({
    U: false,
    L: false,
    F: false,
    R: false,
    B: false,
    D: false,
  });

  // Media stream & video references
  const streamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sampleTimerRef = useRef<number | null>(null);
  const isStartingRef = useRef<boolean>(false);

  // Stop camera helper
  const stopCamera = useCallback(() => {
    if (sampleTimerRef.current) {
      clearInterval(sampleTimerRef.current);
      sampleTimerRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  // Start camera helper with multi-level constraint fallbacks
  const startCamera = useCallback(
    async (targetFacingMode: 'environment' | 'user') => {
      if (isStartingRef.current) return;
      isStartingRef.current = true;
      stopCamera();
      setCameraError(null);

      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setCameraError(t.cubeInput.cameraNotAvailable);
          isStartingRef.current = false;
          return;
        }

        let stream: MediaStream | null = null;

        // Attempt 1: Target facingMode with standard resolution
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: targetFacingMode },
              width: { ideal: 1280 },
              height: { ideal: 720 },
            },
            audio: false,
          });
        } catch {
          // Attempt 2: Target facingMode only
          try {
            stream = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: targetFacingMode },
              audio: false,
            });
          } catch {
            // Attempt 3: General video fallback
            stream = await navigator.mediaDevices.getUserMedia({
              video: true,
              audio: false,
            });
          }
        }

        if (!stream) {
          setCameraError(t.cubeInput.cameraNotAvailable);
          isStartingRef.current = false;
          return;
        }

        streamRef.current = stream;
        setIsCameraActive(true);

        const video = videoRef.current;
        if (video) {
          video.defaultMuted = true;
          video.muted = true;
          video.setAttribute('playsinline', '');
          video.setAttribute('webkit-playsinline', '');
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play().catch((e) => console.warn('Delayed video play error:', e));
          };
          video.play().catch((e) => console.warn('Direct video play error:', e));
        }
      } catch (err: unknown) {
        console.error('Camera startup error:', err);
        const isDenied =
          err instanceof Error &&
          (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError');
        setCameraError(
          isDenied
            ? t.cubeInput.cameraPermissionDenied
            : t.cubeInput.cameraNotAvailable
        );
        setIsCameraActive(false);
      } finally {
        isStartingRef.current = false;
      }
    },
    [stopCamera, t.cubeInput.cameraNotAvailable, t.cubeInput.cameraPermissionDenied]
  );

  // Callback ref to connect video DOM node with active stream as soon as it mounts
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (node && streamRef.current) {
      node.defaultMuted = true;
      node.muted = true;
      node.setAttribute('playsinline', '');
      node.setAttribute('webkit-playsinline', '');
      node.srcObject = streamRef.current;
      node.onloadedmetadata = () => {
        node.play().catch((e) => console.warn('Video play error on loadedmetadata:', e));
      };
      node.play().catch((e) => console.warn('Video play error on mount:', e));
    }
  }, []);

  // Handle modal open/close & tab change
  useEffect(() => {
    if (isOpen && activeTab === 'camera') {
      startCamera(facingMode);
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isOpen, activeTab, facingMode, startCamera, stopCamera]);

  // Switch face helper: loads saved facelets if already captured
  const handleSelectFace = useCallback(
    (idx: number) => {
      setCurrentScanIndex(idx);
      setManualOverrideFace(null);
      const targetFace = SCAN_ORDER[idx];
      if (capturedFaces[targetFace]) {
        const saved: FaceletColor[] = [];
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            saved.push(facelets[`${targetFace}_${r}_${c}`] || targetFace);
          }
        }
        setPreviewFacelets(saved);
      } else {
        setPreviewFacelets(Array(9).fill(targetFace));
      }
    },
    [capturedFaces, facelets]
  );

  // Unlock current face so camera can re-scan it
  const handleUnlockAndRescan = useCallback(() => {
    setCapturedFaces((prev) => ({ ...prev, [currentFace]: false }));
    setManualOverrideFace(null);
  }, [currentFace]);

  // Live sampling interval (runs every 180ms while camera is active and current face is NOT captured)
  useEffect(() => {
    if (!isCameraActive || activeTab !== 'camera') return;
    // Do NOT run sampling if this face is already captured and locked!
    if (capturedFaces[currentFace]) return;

    // Create offscreen canvas for pixel sampling
    const offscreenCanvas = document.createElement('canvas');
    const ctx = offscreenCanvas.getContext('2d', { willReadFrequently: true });

    const sample = () => {
      if (capturedFaces[currentFace]) return;
      const video = videoRef.current;
      if (!video || !ctx || video.readyState < 2 || video.videoWidth === 0) return;

      const vw = video.videoWidth;
      const vh = video.videoHeight;
      offscreenCanvas.width = vw;
      offscreenCanvas.height = vh;

      ctx.drawImage(video, 0, 0, vw, vh);

      // Centered 3x3 square corresponding to 68% of the viewport
      const boxSize = Math.min(vw, vh) * 0.68;
      const startX = (vw - boxSize) / 2;
      const startY = (vh - boxSize) / 2;
      const cellSize = boxSize / 3;
      const patchSize = Math.max(14, Math.floor(cellSize * 0.35));

      const detectedColors: FaceletColor[] = [];

      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (r === 1 && c === 1) {
            // Anchor center sticker to current target face
            detectedColors.push(currentFace);
            continue;
          }

          const centerX = startX + (c + 0.5) * cellSize;
          const centerY = startY + (r + 0.5) * cellSize;
          const sampleX = Math.floor(centerX - patchSize / 2);
          const sampleY = Math.floor(centerY - patchSize / 2);

          try {
            const imgData = ctx.getImageData(sampleX, sampleY, patchSize, patchSize);
            const data = imgData.data;
            let sumR = 0,
              sumG = 0,
              sumB = 0;
            const count = data.length / 4;
            for (let i = 0; i < data.length; i += 4) {
              sumR += data[i];
              sumG += data[i + 1];
              sumB += data[i + 2];
            }
            const avgR = sumR / count;
            const avgG = sumG / count;
            const avgB = sumB / count;

            detectedColors.push(classifyColor(avgR, avgG, avgB));
          } catch {
            detectedColors.push(currentFace);
          }
        }
      }

      // If user has manually edited a sticker on this face, don't overwrite it automatically
      if (manualOverrideFace !== currentScanIndex) {
        setPreviewFacelets((prev) => {
          const isSame =
            prev.length === 9 &&
            prev.every((col, i) => col === detectedColors[i]);
          return isSame ? prev : detectedColors;
        });
      }
    };

    const intervalId = window.setInterval(sample, 180);
    sampleTimerRef.current = intervalId;

    return () => {
      clearInterval(intervalId);
      sampleTimerRef.current = null;
    };
  }, [isCameraActive, activeTab, currentFace, currentScanIndex, manualOverrideFace, capturedFaces]);

  // Flip camera toggle
  const handleToggleFacingMode = () => {
    const nextMode = facingMode === 'environment' ? 'user' : 'environment';
    setFacingMode(nextMode);
    startCamera(nextMode);
  };

  // Capture current face from preview
  const handleCaptureFace = () => {
    const updated = { ...facelets };
    let idx = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        updated[`${currentFace}_${r}_${c}`] = previewFacelets[idx];
        idx++;
      }
    }
    setFacelets(updated);
    const newCaptured = { ...capturedFaces, [currentFace]: true };
    setCapturedFaces(newCaptured);

    // Green flash animation
    setIsCaptureFlash(true);
    setTimeout(() => setIsCaptureFlash(false), 320);

    // Reset manual override and advance to next face
    setManualOverrideFace(null);
    if (currentScanIndex < SCAN_ORDER.length - 1) {
      const nextIdx = currentScanIndex + 1;
      setCurrentScanIndex(nextIdx);
      const nextFace = SCAN_ORDER[nextIdx];
      if (newCaptured[nextFace]) {
        const saved: FaceletColor[] = [];
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            saved.push(updated[`${nextFace}_${r}_${c}`] || nextFace);
          }
        }
        setPreviewFacelets(saved);
      } else {
        setPreviewFacelets(Array(9).fill(nextFace));
      }
    }
  };

  // Cycle preview cell color on camera screen (manual touch-up)
  const handleCyclePreviewCell = (index: number) => {
    if (index === 4) return; // center is fixed
    const r = Math.floor(index / 3);
    const c = index % 3;
    const colors: FaceletColor[] = ['U', 'D', 'F', 'B', 'R', 'L'];
    const current = previewFacelets[index];
    const nextIdx = (colors.indexOf(current) + 1) % colors.length;
    const nextColor = colors[nextIdx];
    const updated = [...previewFacelets];
    updated[index] = nextColor;
    setPreviewFacelets(updated);

    // If this face was already captured, immediately sync changes to facelets so validation updates
    if (capturedFaces[currentFace]) {
      setFacelets((prev) => ({
        ...prev,
        [`${currentFace}_${r}_${c}`]: nextColor,
      }));
    } else {
      setManualOverrideFace(currentScanIndex);
    }
  };

  // Reset override and re-sample
  const handleResumeAutoDetect = () => {
    setManualOverrideFace(null);
  };

  // Switch facelet color manually on click in manual net
  const handleCellClick = (face: FaceName, r: number, c: number) => {
    if (r === 1 && c === 1) return; // Center sticker is fixed
    setFacelets((prev) => ({
      ...prev,
      [`${face}_${r}_${c}`]: activeColor,
    }));
  };

  // Validation
  const validation = useMemo(() => validateFacelets(facelets), [facelets]);

  // Check if all 6 faces have been captured in camera mode
  const isAllCaptured = useMemo(
    () => SCAN_ORDER.every((f) => capturedFaces[f]),
    [capturedFaces]
  );

  const capturedCount = useMemo(
    () => SCAN_ORDER.filter((f) => capturedFaces[f]).length,
    [capturedFaces]
  );

  // Can only import when:
  // In camera mode: all 6 faces are captured AND facelets form a valid cube
  // In manual mode: facelets form a valid cube
  const canImport = activeTab === 'camera'
    ? isAllCaptured && validation.isValid
    : validation.isValid;

  // Format validation error message
  const validationErrorText = useMemo(() => {
    if (validation.isValid) return null;
    const key = validation.errorMessageKey as keyof typeof t.cubeInput;
    const baseMsg = (t.cubeInput[key] as string) || t.cubeInput.statusInvalid;
    if (validation.errorDetail) {
      return `${baseMsg} (${validation.errorDetail})`;
    }
    return baseMsg;
  }, [validation, t.cubeInput]);

  // Helper actions
  const handleFillSolved = () => {
    setFacelets(createDefaultFacelets());
  };

  const handleClearAll = () => {
    setFacelets(createEmptyFacelets());
  };

  const handleLoadSample = () => {
    const sample = new CubeModel();
    sample.applyAlgorithm("R U R' U' F2 D B2 L2 U2 B' D'");
    setFacelets(extractFaceletsFromModel(sample));
  };

  const handleImport = () => {
    if (!canImport) return;
    const model = buildCubeModelFromFacelets(facelets);
    stopCamera();
    onImport(model);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="glass-panel w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-slate-900/95">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-wide">
                {t.cubeInput.modalTitle}
              </h2>
              <p className="text-xs text-slate-400">
                {t.cubeInput.modalSubtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              stopCamera();
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition"
            title={t.cubeInput.cancel}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex border-b border-white/10 bg-slate-950/30 px-5 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('camera')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-t border-x ${
              activeTab === 'camera'
                ? 'bg-slate-900 text-sky-300 border-white/10 border-b-transparent shadow-sm'
                : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Camera className="w-4 h-4 text-sky-400" />
            <span>{t.cubeInput.tabCamera}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('manual')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-t border-x ${
              activeTab === 'manual'
                ? 'bg-slate-900 text-sky-300 border-white/10 border-b-transparent shadow-sm'
                : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Palette className="w-4 h-4 text-amber-400" />
            <span>{t.cubeInput.tabManual}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col gap-4">
          {/* TAB 1: CAMERA SCAN */}
          {activeTab === 'camera' && (
            <div className="flex flex-col gap-4">
              {/* Scan Sequence Navigation Bar */}
              <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1">
                {SCAN_ORDER.map((fName, idx) => {
                  const isCurrent = idx === currentScanIndex;
                  const isDone = capturedFaces[fName];
                  const faceColorHex = COLOR_HEX_MAP[fName];

                  return (
                    <button
                      key={fName}
                      type="button"
                      onClick={() => handleSelectFace(idx)}
                      className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-lg border text-center flex items-center justify-center gap-1.5 transition text-xs font-semibold ${
                        isCurrent
                          ? 'bg-sky-500/20 border-sky-500/60 text-sky-200 ring-1 ring-sky-500/40 shadow-sm'
                          : isDone
                          ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                          : 'bg-slate-900/50 border-white/5 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/40 shadow-inner"
                        style={{ backgroundColor: faceColorHex }}
                      />
                      <span>{fName}</span>
                      {isDone && <Check className="w-3 h-3 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Guide Orientation Banner or Locked Notice */}
              {capturedFaces[currentFace] ? (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-center justify-between gap-3 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full shrink-0 border border-black/50 shadow-sm"
                      style={{ backgroundColor: COLOR_HEX_MAP[currentFace] }}
                    />
                    <div className="flex flex-col gap-0.5 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{t.cubeInput.facesToScan[currentFace]} - {t.cubeInput.faceCapturedLocked}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        👉 {t.cubeInput.capturedFaceHint}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleUnlockAndRescan}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.cubeInput.reidentifyFace}</span>
                  </button>
                </div>
              ) : (
                <div className="p-3 bg-sky-950/40 border border-sky-500/20 rounded-xl flex items-start gap-3">
                  <div
                    className="w-4 h-4 rounded-full mt-0.5 shrink-0 border border-black/50 shadow-sm"
                    style={{ backgroundColor: COLOR_HEX_MAP[currentFace] }}
                  />
                  <div className="flex flex-col gap-0.5 text-xs">
                    <div className="flex items-center gap-2 font-bold text-sky-200">
                      <span>{t.cubeInput.scanPromptPrefix}:</span>
                      <span className="text-white">
                        {t.cubeInput.facesToScan[currentFace]}
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      👉 {t.cubeInput.faceOrientations[currentFace]}
                    </p>
                  </div>
                </div>
              )}

              {/* Viewfinder Grid & Video Feed */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Camera Viewfinder (md:col-span-8) */}
                <div className="md:col-span-8 relative aspect-square max-h-[380px] bg-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center shadow-inner mx-auto w-full">
                  {/* Capture Flash Overlay */}
                  {isCaptureFlash && (
                    <div className="absolute inset-0 z-30 bg-emerald-400/30 border-4 border-emerald-400 rounded-2xl animate-pulse pointer-events-none" />
                  )}

                  {cameraError ? (
                    <div className="p-6 text-center flex flex-col items-center gap-3">
                      <VideoOff className="w-10 h-10 text-rose-400" />
                      <p className="text-xs text-rose-300 max-w-sm leading-relaxed">
                        {cameraError}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => startCamera(facingMode)}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-white/10"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{t.cubeInput.retakeFace}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab('manual')}
                          className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5"
                        >
                          <Palette className="w-3.5 h-3.5" />
                          <span>{t.cubeInput.jumpToManual}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <video
                        ref={setVideoRef}
                        playsInline
                        muted
                        autoPlay
                        className="w-full h-full object-cover"
                      />

                      {/* 3x3 Overlay Target Grid */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div
                          className={`w-[68%] aspect-square border-2 rounded-2xl grid grid-cols-3 grid-rows-3 gap-1.5 p-1.5 shadow-2xl backdrop-contrast-125 transition-all ${
                            capturedFaces[currentFace]
                              ? 'border-emerald-400/80 bg-emerald-950/20 ring-2 ring-emerald-500/30'
                              : 'border-sky-400/80 bg-sky-500/5'
                          }`}
                        >
                          {Array.from({ length: 9 }).map((_, idx) => (
                            <div
                              key={idx}
                              className={`rounded-lg border border-dashed flex items-center justify-center relative transition-all ${
                                idx === 4
                                  ? capturedFaces[currentFace]
                                    ? 'border-emerald-300 bg-emerald-400/20'
                                    : 'border-sky-300 bg-sky-400/20'
                                  : 'border-white/50 bg-black/15'
                              }`}
                            >
                              <div
                                className="w-4 h-4 rounded-full border border-black/50 shadow-md transition-colors"
                                style={{
                                  backgroundColor: COLOR_HEX_MAP[previewFacelets[idx]],
                                }}
                              />
                              {idx === 4 && (
                                <span
                                  className={`absolute -top-1.5 -right-1.5 text-[9px] font-extrabold text-black px-1 rounded-full ${
                                    capturedFaces[currentFace]
                                      ? 'bg-emerald-400'
                                      : 'bg-sky-500'
                                  }`}
                                >
                                  {currentFace}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Locked status banner on viewfinder */}
                      {capturedFaces[currentFace] && (
                        <div className="absolute top-3 left-3 right-3 flex justify-center pointer-events-none">
                          <div className="px-3 py-1 rounded-full bg-emerald-950/85 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                            <Lock className="w-3.5 h-3.5" />
                            <span>{t.cubeInput.faceCapturedLocked}</span>
                          </div>
                        </div>
                      )}

                      {/* Camera floating toolbar on video */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                        <button
                          type="button"
                          onClick={handleToggleFacingMode}
                          className="p-2.5 bg-slate-950/70 hover:bg-slate-900 border border-white/20 text-slate-200 rounded-xl transition backdrop-blur-md"
                          title={t.cubeInput.flipCamera}
                        >
                          <FlipHorizontal className="w-4 h-4" />
                        </button>
                        {capturedFaces[currentFace] ? (
                          <button
                            type="button"
                            onClick={handleUnlockAndRescan}
                            className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/25 flex items-center gap-2 active:scale-95 transition"
                          >
                            <RotateCcw className="w-4 h-4" />
                            <span>{t.cubeInput.reidentifyFace}</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={handleCaptureFace}
                            className="px-5 py-2 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-sky-500/25 flex items-center gap-2 active:scale-95 transition"
                          >
                            <Camera className="w-4 h-4" />
                            <span>{t.cubeInput.captureFace}</span>
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Live Face Preview & Interactive Tweaker (md:col-span-4) */}
                <div className="md:col-span-4 p-4 bg-slate-950/60 rounded-2xl border border-white/5 flex flex-col gap-3 justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-200">
                          {t.cubeInput.facesToScan[currentFace]}
                        </span>
                        {capturedFaces[currentFace] && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <Lock className="w-2.5 h-2.5" />
                            <span>{t.cubeInput.faceCapturedLocked}</span>
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {currentScanIndex + 1} / 6
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {capturedFaces[currentFace]
                        ? `💡 ${t.cubeInput.clickToFineTune}`
                        : t.cubeInput.alignNotice}
                    </p>
                  </div>

                  {/* 3x3 Preview Grid (Clickable to cycle/correct color) */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-full max-w-[200px] aspect-square grid grid-cols-3 gap-1.5 p-2 bg-slate-900 rounded-xl border shadow-inner transition ${
                        capturedFaces[currentFace]
                          ? 'border-emerald-500/40 ring-1 ring-emerald-500/20'
                          : 'border-white/10'
                      }`}
                    >
                      {previewFacelets.map((color, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleCyclePreviewCell(idx)}
                          disabled={idx === 4}
                          className={`aspect-square rounded-lg border flex items-center justify-center transition active:scale-90 ${
                            idx === 4
                              ? 'border-white/20 cursor-not-allowed ring-2 ring-sky-400/40'
                              : 'border-white/10 hover:border-white/50 cursor-pointer shadow-sm'
                          }`}
                          style={{ backgroundColor: COLOR_HEX_MAP[color] }}
                          title={idx === 4 ? 'Fixed Center' : 'Click to cycle color'}
                        >
                          {idx === 4 ? (
                            <Lock className="w-3.5 h-3.5 text-slate-900" />
                          ) : (
                            <span className="text-[9px] font-bold font-mono text-slate-900 drop-shadow">
                              {color}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Action buttons under preview grid */}
                    {capturedFaces[currentFace] ? (
                      <button
                        type="button"
                        onClick={handleUnlockAndRescan}
                        className="w-full max-w-[200px] py-1.5 px-3 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{t.cubeInput.reidentifyFace}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleCaptureFace}
                        className="w-full max-w-[200px] py-1.5 px-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20 active:scale-95 transition"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>{t.cubeInput.captureFace}</span>
                      </button>
                    )}

                    {/* Manual override indicator */}
                    {!capturedFaces[currentFace] && manualOverrideFace === currentScanIndex && (
                      <button
                        type="button"
                        onClick={handleResumeAutoDetect}
                        className="flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 transition"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>已手动微调（点击恢复自动检测）</span>
                      </button>
                    )}
                  </div>

                  {/* Step Navigation Buttons */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => handleSelectFace(Math.max(0, currentScanIndex - 1))}
                      disabled={currentScanIndex === 0}
                      className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent text-xs font-medium flex items-center gap-1 transition"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectFace(Math.min(SCAN_ORDER.length - 1, currentScanIndex + 1))}
                      disabled={currentScanIndex === SCAN_ORDER.length - 1}
                      className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent text-xs font-medium flex items-center gap-1 transition"
                    >
                      <span>{t.cubeInput.nextFace}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MANUAL NET PAINTER */}
          {activeTab === 'manual' && (
            <div className="flex flex-col gap-4">
              {/* Toolbar & Palette */}
              <div className="p-3.5 bg-slate-950/60 rounded-2xl border border-white/5 flex flex-wrap items-center justify-between gap-3">
                {/* Palette */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1 mr-1">
                    <Palette className="w-3.5 h-3.5 text-amber-400" />
                    {t.cubeInput.colorPalette}:
                  </span>
                  {ALL_COLORS.map((c) => {
                    const count = validation.colorCounts[c] || 0;
                    const isSelected = activeColor === c;

                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setActiveColor(c)}
                        className={`px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 transition text-xs font-bold ${
                          isSelected
                            ? 'ring-2 ring-sky-400 border-white shadow-md scale-105 bg-slate-800'
                            : 'border-white/10 hover:border-white/30 bg-slate-900/60'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-inner"
                          style={{ backgroundColor: COLOR_HEX_MAP[c] }}
                        />
                        <span className="text-slate-200">{c}</span>
                        <span
                          className={`text-[10px] font-mono px-1 rounded ${
                            count === 9
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : count > 9
                              ? 'bg-rose-500/20 text-rose-300'
                              : 'bg-amber-500/20 text-amber-300'
                          }`}
                        >
                          {count}/9
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Action Helpers */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleFillSolved}
                    className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium transition"
                    title={t.cubeInput.resetSolved}
                  >
                    {t.cubeInput.resetSolved}
                  </button>
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="px-2 py-1.5 rounded-lg border border-white/10 bg-slate-900 hover:bg-slate-800 text-rose-400 hover:text-rose-300 text-xs font-medium transition"
                    title={t.cubeInput.clearAll}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleLoadSample}
                    className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-slate-900 hover:bg-slate-800 text-cyan-400 text-xs font-medium transition"
                    title={t.cubeInput.sampleScramble}
                  >
                    {t.cubeInput.sampleScramble}
                  </button>
                </div>
              </div>

              {/* Unfolded Net Grid Layout */}
              {/*
                     [ U ]
               [ L ][ F ][ R ][ B ]
                     [ D ]
              */}
              <div className="w-full flex justify-center py-2 overflow-x-auto">
                <div className="grid grid-cols-4 gap-2.5 max-w-lg min-w-[320px]">
                  {/* Row 1: empty, U face, empty, empty */}
                  <div className="invisible" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400">
                      {t.cubeInput.facesToScan.U}
                    </span>
                    <FaceGrid
                      face="U"
                      facelets={facelets}
                      onCellClick={handleCellClick}
                    />
                  </div>
                  <div className="invisible" />
                  <div className="invisible" />

                  {/* Row 2: L, F, R, B faces */}
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400">
                      {t.cubeInput.facesToScan.L}
                    </span>
                    <FaceGrid
                      face="L"
                      facelets={facelets}
                      onCellClick={handleCellClick}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400">
                      {t.cubeInput.facesToScan.F}
                    </span>
                    <FaceGrid
                      face="F"
                      facelets={facelets}
                      onCellClick={handleCellClick}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400">
                      {t.cubeInput.facesToScan.R}
                    </span>
                    <FaceGrid
                      face="R"
                      facelets={facelets}
                      onCellClick={handleCellClick}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400">
                      {t.cubeInput.facesToScan.B}
                    </span>
                    <FaceGrid
                      face="B"
                      facelets={facelets}
                      onCellClick={handleCellClick}
                    />
                  </div>

                  {/* Row 3: empty, D face, empty, empty */}
                  <div className="invisible" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400">
                      {t.cubeInput.facesToScan.D}
                    </span>
                    <FaceGrid
                      face="D"
                      facelets={facelets}
                      onCellClick={handleCellClick}
                    />
                  </div>
                  <div className="invisible" />
                  <div className="invisible" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer: Validation Status & Import Action */}
        <div className="px-5 py-3.5 border-t border-white/10 bg-slate-950/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Validation Status Banner */}
          <div className="flex items-center gap-2 text-xs">
            {activeTab === 'camera' && !isAllCaptured ? (
              <div className="flex items-center gap-2 text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-xl">
                <Camera className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-semibold">
                  {t.cubeInput.waitingAllFaces.replace('{0}', String(capturedCount))}
                </span>
              </div>
            ) : validation.isValid ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">{t.cubeInput.statusValid}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold">{validationErrorText}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={() => {
                stopCamera();
                onClose();
              }}
              className="px-4 py-2 rounded-xl border border-white/10 text-slate-300 hover:bg-slate-800 text-xs font-semibold transition"
            >
              {t.cubeInput.cancel}
            </button>
            <button
              type="button"
              disabled={!canImport}
              onClick={handleImport}
              className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition shadow-lg ${
                canImport
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-emerald-500/25 active:scale-95 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 border border-white/5 cursor-not-allowed opacity-60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.cubeInput.applyToSandbox}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component: 3x3 Face Grid for the unfolded net
interface FaceGridProps {
  face: FaceName;
  facelets: FaceletMap;
  onCellClick: (face: FaceName, r: number, c: number) => void;
}

const FaceGrid: React.FC<FaceGridProps> = ({ face, facelets, onCellClick }) => {
  return (
    <div className="w-24 aspect-square grid grid-cols-3 gap-1 p-1 bg-slate-900/90 rounded-xl border border-white/10 shadow-inner">
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => {
          const color = facelets[`${face}_${r}_${c}`];
          const isCenter = r === 1 && c === 1;

          return (
            <button
              key={`${r}_${c}`}
              type="button"
              onClick={() => onCellClick(face, r, c)}
              disabled={isCenter}
              className={`aspect-square rounded-md border flex items-center justify-center transition ${
                isCenter
                  ? 'border-white/20 cursor-not-allowed ring-1 ring-white/30'
                  : 'border-black/30 hover:border-white hover:scale-105 cursor-pointer shadow-sm'
              }`}
              style={{
                backgroundColor: color ? COLOR_HEX_MAP[color] : '#1e293b',
              }}
              title={
                isCenter
                  ? `Center ${face} (Fixed)`
                  : `${face}[${r},${c}]: ${color || 'Unpainted'}`
              }
            >
              {isCenter && (
                <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
              )}
            </button>
          );
        })
      )}
    </div>
  );
};
