import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import * as THREE from 'three';
import { RotateCw, RotateCcw } from 'lucide-react';
import {
  CubeModel,
  type MoveName,
  type Vector3D,
  FACE_COLORS,
  CORE_COLOR,
} from '../../cube/CubeModel';
import { useTranslation } from '../../i18n/LanguageContext';

export interface Cube3DRef {
  animateMove: (move: MoveName, speedMs?: number) => Promise<void>;
  resetToModel: (model: CubeModel) => void;
  isAnimating: () => boolean;
}

export interface Cube3DProps {
  cubeModel?: CubeModel;
  onMoveComplete?: (move: MoveName, model: CubeModel) => void;
  highlightCoords?: Vector3D[]; // coordinates of pieces to highlight in focus mode
  focusMode?: boolean;
  interactive?: boolean;
  animationSpeedMs?: number; // duration of a 90 deg turn
  className?: string;
  showControls?: boolean;
}

interface PieceMeshEntry {
  id: string;
  mesh: THREE.Group;
  initialPos: Vector3D;
  currentPos: Vector3D;
  stickers: { dir: Vector3D; mesh: THREE.Mesh; baseColor: string }[];
}

interface ActiveTurnInfo {
  move: MoveName;
  faceName: string;
  isClockwise: boolean;
  angleText: string;
}

export const Cube3D = forwardRef<Cube3DRef, Cube3DProps>(
  (
    {
      cubeModel,
      onMoveComplete,
      highlightCoords,
      focusMode = false,
      interactive = true,
      animationSpeedMs = 500,
      className = 'w-full h-80',
      showControls = false,
    },
    ref
  ) => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cubeGroupRef = useRef<THREE.Group | null>(null);
    const pieceMeshesRef = useRef<PieceMeshEntry[]>([]);
    const isAnimatingRef = useRef(false);
    const moveQueueRef = useRef<MoveName[]>([]);

    // Active turning visual indicator
    const [activeTurn, setActiveTurn] = useState<ActiveTurnInfo | null>(null);

    // Internal cube model state
    const [internalModel, setInternalModel] = useState<CubeModel>(
      () => cubeModel?.clone() || new CubeModel()
    );
    const activeModelRef = useRef<CubeModel>(cubeModel?.clone() || internalModel);

    // Keep activeModelRef synchronized when prop updates without animation
    useEffect(() => {
      if (cubeModel) {
        activeModelRef.current = cubeModel.clone();
        setInternalModel(cubeModel.clone());
        syncMeshesWithModel();
      }
    }, [cubeModel]);

    // Track dragging for camera orbit
    const isDraggingRef = useRef(false);
    const prevMousePosRef = useRef({ x: 0, y: 0 });
    const cameraAngleRef = useRef({ theta: Math.PI / 4, phi: Math.PI / 6, radius: 7.2 });

    // Update camera position based on spherical angles
    const updateCameraPosition = useCallback(() => {
      if (!cameraRef.current) return;
      const { theta, phi, radius } = cameraAngleRef.current;
      const clampedPhi = Math.max(0.1, Math.min(Math.PI - 0.1, phi));
      cameraAngleRef.current.phi = clampedPhi;

      cameraRef.current.position.x = radius * Math.sin(clampedPhi) * Math.sin(theta);
      cameraRef.current.position.y = radius * Math.cos(clampedPhi);
      cameraRef.current.position.z = radius * Math.sin(clampedPhi) * Math.cos(theta);
      cameraRef.current.lookAt(0, 0, 0);
    }, []);

    // Sync piece visual positions and sticker colors with active model
    const syncMeshesWithModel = useCallback(() => {
      if (!cubeGroupRef.current || pieceMeshesRef.current.length === 0) return;

      const model = activeModelRef.current;
      for (const pState of model.pieces) {
        const entry = pieceMeshesRef.current.find((e) => e.id === pState.id);
        if (!entry) continue;

        // Update position
        entry.mesh.position.set(
          pState.currentPos[0],
          pState.currentPos[1],
          pState.currentPos[2]
        );
        entry.currentPos = [...pState.currentPos];

        // Update rotation matrix from piece orthonormal basis
        const rotMatrix = new THREE.Matrix4();
        rotMatrix.set(
          pState.right[0], pState.up[0], pState.forward[0], 0,
          pState.right[1], pState.up[1], pState.forward[1], 0,
          pState.right[2], pState.up[2], pState.forward[2], 0,
          0, 0, 0, 1
        );
        entry.mesh.setRotationFromMatrix(rotMatrix);

        // Focus Mode opacity / highlight
        const isHighlighted =
          !focusMode ||
          !highlightCoords ||
          highlightCoords.length === 0 ||
          highlightCoords.some(
            (c) =>
              c[0] === pState.currentPos[0] &&
              c[1] === pState.currentPos[1] &&
              c[2] === pState.currentPos[2]
          );

        entry.stickers.forEach((s) => {
          const mat = s.mesh.material as THREE.MeshStandardMaterial;
          if (isHighlighted) {
            mat.color.set(s.baseColor);
            mat.opacity = 1.0;
            mat.transparent = false;
          } else {
            mat.color.set('#334155');
            mat.opacity = 0.22;
            mat.transparent = true;
          }
        });
      }
    }, [focusMode, highlightCoords]);

    // Face readable names for UI rotation indicators
    const getFaceDescription = (baseMove: string): string => {
      const faces = t.cube3d.faces;
      if (baseMove in faces) {
        return faces[baseMove as keyof typeof faces];
      }
      return baseMove;
    };

    // Execute animated turn
    const executeAnimatedMove = useCallback(
      (move: MoveName, customSpeedMs?: number): Promise<void> => {
        return new Promise((resolve) => {
          if (!cubeGroupRef.current) {
            resolve();
            return;
          }
          isAnimatingRef.current = true;

          const baseMove = move[0];
          const isPrime = move.endsWith("'");
          const isDouble = move.endsWith('2');

          // Set active turn info for UI visual feedback
          setActiveTurn({
            move,
            faceName: getFaceDescription(baseMove),
            isClockwise: !isPrime,
            angleText: isDouble ? t.cube3d.halfTurn : isPrime ? t.cube3d.counterClockwise : t.cube3d.clockwise,
          });

          let axisVec = new THREE.Vector3(0, 1, 0);
          let layerCoord: number | null = null;
          let sign = -1;

          switch (baseMove) {
            case 'U':
              axisVec = new THREE.Vector3(0, 1, 0);
              layerCoord = 1;
              sign = -1;
              break;
            case 'D':
              axisVec = new THREE.Vector3(0, 1, 0);
              layerCoord = -1;
              sign = 1;
              break;
            case 'R':
              axisVec = new THREE.Vector3(1, 0, 0);
              layerCoord = 1;
              sign = -1;
              break;
            case 'L':
              axisVec = new THREE.Vector3(1, 0, 0);
              layerCoord = -1;
              sign = 1;
              break;
            case 'F':
              axisVec = new THREE.Vector3(0, 0, 1);
              layerCoord = 1;
              sign = -1;
              break;
            case 'B':
              axisVec = new THREE.Vector3(0, 0, 1);
              layerCoord = -1;
              sign = 1;
              break;
            case 'M':
              axisVec = new THREE.Vector3(1, 0, 0);
              layerCoord = 0;
              sign = 1;
              break;
            case 'E':
              axisVec = new THREE.Vector3(0, 1, 0);
              layerCoord = 0;
              sign = 1;
              break;
            case 'S':
              axisVec = new THREE.Vector3(0, 0, 1);
              layerCoord = 0;
              sign = -1;
              break;
            case 'x':
              axisVec = new THREE.Vector3(1, 0, 0);
              layerCoord = null;
              sign = -1;
              break;
            case 'y':
              axisVec = new THREE.Vector3(0, 1, 0);
              layerCoord = null;
              sign = -1;
              break;
            case 'z':
              axisVec = new THREE.Vector3(0, 0, 1);
              layerCoord = null;
              sign = -1;
              break;
          }

          if (isPrime) sign = -sign;
          const totalAngle = sign * (isDouble ? Math.PI : Math.PI / 2);

          // Create pivot group
          const pivot = new THREE.Group();
          cubeGroupRef.current.add(pivot);

          // Select active pieces in this layer
          const movingEntries = pieceMeshesRef.current.filter((e) => {
            if (layerCoord === null) return true;
            if (axisVec.x !== 0) return Math.abs(e.currentPos[0] - layerCoord) < 0.2;
            if (axisVec.y !== 0) return Math.abs(e.currentPos[1] - layerCoord) < 0.2;
            if (axisVec.z !== 0) return Math.abs(e.currentPos[2] - layerCoord) < 0.2;
            return false;
          });

          // Attach moving meshes to pivot
          movingEntries.forEach((e) => {
            pivot.attach(e.mesh);
          });

          const baseDuration = customSpeedMs ?? animationSpeedMs;
          const duration = isDouble ? baseDuration * 1.4 : baseDuration;
          const startTime = performance.now();

          const animateStep = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Smooth ease-in-out curve for natural physical feel
            const ease =
              progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const currentAngle = totalAngle * ease;
            pivot.setRotationFromAxisAngle(axisVec, currentAngle);

            if (progress < 1) {
              requestAnimationFrame(animateStep);
            } else {
              // Finalize rotation
              pivot.setRotationFromAxisAngle(axisVec, totalAngle);
              pivot.updateMatrixWorld(true);

              movingEntries.forEach((e) => {
                cubeGroupRef.current?.attach(e.mesh);
              });
              cubeGroupRef.current?.remove(pivot);

              // Update underlying model
              activeModelRef.current.applyMove(move);
              setInternalModel(activeModelRef.current.clone());
              syncMeshesWithModel();

              isAnimatingRef.current = false;
              setActiveTurn(null);

              onMoveComplete?.(move, activeModelRef.current);
              resolve();

              // Process next in queue if any
              if (moveQueueRef.current.length > 0) {
                const next = moveQueueRef.current.shift()!;
                executeAnimatedMove(next);
              }
            }
          };

          requestAnimationFrame(animateStep);
        });
      },
      [animationSpeedMs, onMoveComplete, syncMeshesWithModel]
    );

    // Imperative ref methods
    useImperativeHandle(
      ref,
      () => ({
        animateMove: (move: MoveName, speedMs?: number) => {
          return executeAnimatedMove(move, speedMs);
        },
        resetToModel: (model: CubeModel) => {
          activeModelRef.current = model.clone();
          setInternalModel(model.clone());
          syncMeshesWithModel();
        },
        isAnimating: () => isAnimatingRef.current,
      }),
      [executeAnimatedMove, syncMeshesWithModel]
    );

    // Queue a move to execute
    const makeMove = useCallback(
      (move: MoveName) => {
        if (isAnimatingRef.current) {
          moveQueueRef.current.push(move);
        } else {
          executeAnimatedMove(move);
        }
      },
      [executeAnimatedMove]
    );

    // Setup Three.js scene
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth || 320;
      const height = container.clientHeight || 320;

      // Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
      cameraRef.current = camera;
      updateCameraPosition();

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = false;
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.88);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.95);
      dirLight1.position.set(6, 10, 8);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.45);
      dirLight2.position.set(-8, -6, -8);
      scene.add(dirLight2);

      // Cube group
      const cubeGroup = new THREE.Group();
      scene.add(cubeGroup);
      cubeGroupRef.current = cubeGroup;

      // Build 26 cubelets
      const pieceSize = 0.94;
      const stickerOffset = pieceSize / 2 + 0.005;
      const stickerSize = 0.84;
      const stickerRadius = 0.08;

      const boxGeom = new THREE.BoxGeometry(pieceSize, pieceSize, pieceSize);
      const plasticMaterial = new THREE.MeshStandardMaterial({
        color: CORE_COLOR,
        roughness: 0.4,
        metalness: 0.1,
      });

      const entries: PieceMeshEntry[] = [];

      // Helper for rounded sticker plane
      const createStickerMesh = (color: string) => {
        const shape = new THREE.Shape();
        const x = -stickerSize / 2;
        const y = -stickerSize / 2;
        const w = stickerSize;
        const h = stickerSize;
        const r = stickerRadius;

        shape.moveTo(x + r, y);
        shape.lineTo(x + w - r, y);
        shape.quadraticCurveTo(x + w, y, x + w, y + r);
        shape.lineTo(x + w, y + h - r);
        shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        shape.lineTo(x + r, y + h);
        shape.quadraticCurveTo(x, y + h, x, y + h - r);
        shape.lineTo(x, y + r);
        shape.quadraticCurveTo(x, y, x + r, y);

        const stickerGeom = new THREE.ShapeGeometry(shape);
        const stickerMat = new THREE.MeshStandardMaterial({
          color,
          roughness: 0.2,
          metalness: 0.05,
          side: THREE.FrontSide,
        });
        return new THREE.Mesh(stickerGeom, stickerMat);
      };

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            if (x === 0 && y === 0 && z === 0) continue; // skip core

            const pieceGroup = new THREE.Group();
            pieceGroup.position.set(x, y, z);

            // Core black box
            const coreBox = new THREE.Mesh(boxGeom, plasticMaterial);
            pieceGroup.add(coreBox);

            const stickers: { dir: Vector3D; mesh: THREE.Mesh; baseColor: string }[] = [];

            // Add stickers to outer faces
            if (y === 1) {
              const s = createStickerMesh(FACE_COLORS.U);
              s.position.set(0, stickerOffset, 0);
              s.rotation.x = -Math.PI / 2;
              pieceGroup.add(s);
              stickers.push({ dir: [0, 1, 0], mesh: s, baseColor: FACE_COLORS.U });
            }
            if (y === -1) {
              const s = createStickerMesh(FACE_COLORS.D);
              s.position.set(0, -stickerOffset, 0);
              s.rotation.x = Math.PI / 2;
              pieceGroup.add(s);
              stickers.push({ dir: [0, -1, 0], mesh: s, baseColor: FACE_COLORS.D });
            }
            if (x === 1) {
              const s = createStickerMesh(FACE_COLORS.R);
              s.position.set(stickerOffset, 0, 0);
              s.rotation.y = Math.PI / 2;
              pieceGroup.add(s);
              stickers.push({ dir: [1, 0, 0], mesh: s, baseColor: FACE_COLORS.R });
            }
            if (x === -1) {
              const s = createStickerMesh(FACE_COLORS.L);
              s.position.set(-stickerOffset, 0, 0);
              s.rotation.y = -Math.PI / 2;
              pieceGroup.add(s);
              stickers.push({ dir: [-1, 0, 0], mesh: s, baseColor: FACE_COLORS.L });
            }
            if (z === 1) {
              const s = createStickerMesh(FACE_COLORS.F);
              s.position.set(0, 0, stickerOffset);
              pieceGroup.add(s);
              stickers.push({ dir: [0, 0, 1], mesh: s, baseColor: FACE_COLORS.F });
            }
            if (z === -1) {
              const s = createStickerMesh(FACE_COLORS.B);
              s.position.set(0, 0, -stickerOffset);
              s.rotation.y = Math.PI;
              pieceGroup.add(s);
              stickers.push({ dir: [0, 0, -1], mesh: s, baseColor: FACE_COLORS.B });
            }

            cubeGroup.add(pieceGroup);
            entries.push({
              id: `p_${x}_${y}_${z}`,
              mesh: pieceGroup,
              initialPos: [x, y, z],
              currentPos: [x, y, z],
              stickers,
            });
          }
        }
      }
      pieceMeshesRef.current = entries;
      syncMeshesWithModel();

      // Render loop
      let animId: number;
      const render = () => {
        animId = requestAnimationFrame(render);
        renderer.render(scene, camera);
      };
      render();

      // Resize observer
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);

      return () => {
        cancelAnimationFrame(animId);
        resizeObserver.disconnect();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    }, [syncMeshesWithModel, updateCameraPosition]);

    // Sync whenever focus props change
    useEffect(() => {
      syncMeshesWithModel();
    }, [focusMode, highlightCoords, syncMeshesWithModel]);

    // Mouse / Touch orbit handlers
    const handlePointerDown = (e: React.PointerEvent) => {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePosRef.current.x;
      const deltaY = e.clientY - prevMousePosRef.current.y;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };

      const speed = 0.008;
      cameraAngleRef.current.theta -= deltaX * speed;
      cameraAngleRef.current.phi -= deltaY * speed;
      updateCameraPosition();
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      isDraggingRef.current = false;
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    };

    // Keyboard shortcut support
    useEffect(() => {
      if (!interactive) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

        const key = e.key.toUpperCase();
        const isShift = e.shiftKey;
        const validKeys = ['U', 'D', 'R', 'L', 'F', 'B'];

        if (validKeys.includes(key)) {
          e.preventDefault();
          const move = (isShift ? `${key}'` : key) as MoveName;
          makeMove(move);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [interactive, makeMove]);

    return (
      <div className={`relative flex flex-col items-center select-none ${className}`}>
        {/* 3D Canvas Container */}
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        />

        {/* Orbit hint overlay */}
        <div className="absolute top-2 left-2 pointer-events-none text-xs text-slate-400/80 bg-slate-900/60 px-2 py-1 rounded backdrop-blur border border-white/5">
          {t.cube3d.dragHint}
        </div>

        {/* Active Rotation Indicator Banner */}
        {activeTurn && (
          <div className="absolute top-2 right-2 pointer-events-none flex items-center gap-2 bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-slate-950 px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg shadow-amber-500/30 border border-amber-300/40 animate-pulse">
            {activeTurn.isClockwise ? (
              <RotateCw className="w-4 h-4 animate-spin text-slate-950" />
            ) : (
              <RotateCcw className="w-4 h-4 animate-spin text-slate-950" />
            )}
            <div className="flex flex-col">
              <span className="font-mono text-sm leading-none">
                {t.cube3d.turn} {activeTurn.move}
              </span>
              <span className="text-[10px] font-semibold text-slate-900 opacity-90">
                {activeTurn.faceName} • {activeTurn.angleText}
              </span>
            </div>
          </div>
        )}

        {/* Quick turn buttons */}
        {showControls && interactive && (
          <div className="absolute bottom-2 flex flex-wrap gap-1 justify-center px-2 py-1 bg-slate-950/70 backdrop-blur rounded-lg border border-white/10 shadow-lg">
            {(['U', 'D', 'R', 'L', 'F', 'B'] as MoveName[]).map((f) => (
              <div key={f} className="flex gap-0.5">
                <button
                  type="button"
                  onClick={() => makeMove(f)}
                  className="px-2 py-1 text-xs font-mono font-bold bg-slate-800 hover:bg-sky-600 text-slate-200 hover:text-white rounded transition shadow"
                >
                  {f}
                </button>
                <button
                  type="button"
                  onClick={() => makeMove(`${f}'` as MoveName)}
                  className="px-2 py-1 text-xs font-mono font-bold bg-slate-800/80 hover:bg-rose-600 text-slate-300 hover:text-white rounded transition shadow"
                >
                  {f}'
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
Cube3D.displayName = 'Cube3D';
