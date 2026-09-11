// Cube State Parser, Facelet Mapping, Color Classifier & Validator
import { CubeModel, type FaceName, type Vector3D, type PieceState } from './CubeModel';

export type FaceletColor = FaceName; // 'U' | 'D' | 'F' | 'B' | 'L' | 'R'

export const COLOR_HEX_MAP: Record<FaceletColor, string> = {
  U: '#FFFFFF', // White
  D: '#FFD500', // Yellow
  F: '#009B48', // Green
  B: '#0046AD', // Blue
  R: '#B71234', // Red
  L: '#FF5800', // Orange
};

export const COLOR_NAMES: Record<FaceletColor, string> = {
  U: 'White',
  D: 'Yellow',
  F: 'Green',
  B: 'Blue',
  R: 'Red',
  L: 'Orange',
};

// 54 facelet map: key is `${face}_${row}_${col}` (e.g. 'U_0_0')
export type FaceletMap = Record<string, FaceletColor>;

export interface ValidationResult {
  isValid: boolean;
  missingCount: number;
  colorCounts: Record<FaceletColor, number>;
  errorMessageKey?: string;
  errorDetail?: string;
}

export function getFaceNormal(face: FaceName): Vector3D {
  switch (face) {
    case 'U': return [0, 1, 0];
    case 'D': return [0, -1, 0];
    case 'F': return [0, 0, 1];
    case 'B': return [0, 0, -1];
    case 'R': return [1, 0, 0];
    case 'L': return [-1, 0, 0];
  }
}

/**
 * Maps face name and 2D row/col in [0..2] to 3D world piece coordinate [x, y, z]
 */
export function getFaceletCoords(face: FaceName, r: number, c: number): Vector3D {
  const dx = c - 1; // -1, 0, 1
  const dy = 1 - r; // 1, 0, -1
  switch (face) {
    case 'U': return [dx, 1, r - 1];
    case 'D': return [dx, -1, 1 - r];
    case 'F': return [dx, dy, 1];
    case 'B': return [1 - c, dy, -1];
    case 'L': return [-1, dy, c - 1];
    case 'R': return [1, dy, 1 - c];
  }
}

/**
 * Creates default solved facelets map
 */
export function createDefaultFacelets(): FaceletMap {
  const faces: FaceName[] = ['U', 'D', 'F', 'B', 'L', 'R'];
  const map: FaceletMap = {};
  for (const f of faces) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        map[`${f}_${r}_${c}`] = f;
      }
    }
  }
  return map;
}

/**
 * Creates empty facelets map (only centers fixed)
 */
export function createEmptyFacelets(): FaceletMap {
  const map: FaceletMap = {};
  const faces: FaceName[] = ['U', 'D', 'F', 'B', 'L', 'R'];
  for (const f of faces) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (r === 1 && c === 1) {
          map[`${f}_${r}_${c}`] = f; // center fixed
        }
      }
    }
  }
  return map;
}

/**
 * Extract facelets from an existing CubeModel
 */
export function extractFaceletsFromModel(model: CubeModel): FaceletMap {
  const facelets: FaceletMap = {};
  const faces: FaceName[] = ['U', 'D', 'F', 'B', 'L', 'R'];

  for (const face of faces) {
    const normal = getFaceNormal(face);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const pos = getFaceletCoords(face, r, c);
        const piece = model.pieces.find(
          (p) =>
            p.currentPos[0] === pos[0] &&
            p.currentPos[1] === pos[1] &&
            p.currentPos[2] === pos[2]
        );
        if (!piece) continue;

        const nx = Math.round(normal[0] * piece.right[0] + normal[1] * piece.right[1] + normal[2] * piece.right[2]);
        const ny = Math.round(normal[0] * piece.up[0] + normal[1] * piece.up[1] + normal[2] * piece.up[2]);
        const nz = Math.round(normal[0] * piece.forward[0] + normal[1] * piece.forward[1] + normal[2] * piece.forward[2]);

        let color: FaceletColor = 'U';
        if (ny === 1) color = 'U';
        else if (ny === -1) color = 'D';
        else if (nz === 1) color = 'F';
        else if (nz === -1) color = 'B';
        else if (nx === 1) color = 'R';
        else if (nx === -1) color = 'L';

        facelets[`${face}_${r}_${c}`] = color;
      }
    }
  }
  return facelets;
}

/**
 * RGB to HSV conversion
 */
export function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
    switch (max) {
      case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
      case gNorm: h = (bNorm - rNorm) / d + 2; break;
      case bNorm: h = (rNorm - gNorm) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s, v];
}

/**
 * Classify sampled RGB into one of the 6 Rubik's cube colors
 */
export function classifyColor(r: number, g: number, b: number): FaceletColor {
  const [h, s, v] = rgbToHsv(r, g, b);

  // 1. White detection: low saturation, moderate-to-high value
  if (s < 0.28 && v > 0.35) {
    return 'U'; // White
  }

  // 2. Chromatic colors based on Hue
  if (h >= 40 && h <= 72) {
    return 'D'; // Yellow
  }
  if (h > 72 && h <= 170) {
    return 'F'; // Green
  }
  if (h > 170 && h <= 260) {
    return 'B'; // Blue
  }
  if (h >= 12 && h < 40) {
    return 'L'; // Orange
  }
  if (h < 12 || h > 340) {
    return 'R'; // Red
  }

  // Fallback: Euclidean color distance to reference RGB
  const refColors: Record<FaceletColor, [number, number, number]> = {
    U: [255, 255, 255],
    D: [255, 213, 0],
    F: [0, 155, 72],
    B: [0, 70, 173],
    R: [183, 18, 52],
    L: [255, 88, 0],
  };

  let bestFace: FaceletColor = 'U';
  let minDistance = Infinity;

  for (const [face, [refR, refG, refB]] of Object.entries(refColors) as [FaceletColor, [number, number, number]][]) {
    const dist = Math.hypot(r - refR, g - refG, b - refB);
    if (dist < minDistance) {
      minDistance = dist;
      bestFace = face;
    }
  }

  return bestFace;
}

// Canonical physical edge pairs (unordered)
const VALID_EDGES = new Set(
  [
    'U,F', 'U,B', 'U,L', 'U,R',
    'D,F', 'D,B', 'D,L', 'D,R',
    'F,L', 'F,R', 'B,L', 'B,R',
  ].map((e) => e.split(',').sort().join(','))
);

// Canonical physical corner triplets (unordered)
const VALID_CORNERS = new Set(
  [
    'U,F,R', 'U,F,L', 'U,B,L', 'U,B,R',
    'D,F,R', 'D,F,L', 'D,B,L', 'D,B,R',
  ].map((c) => c.split(',').sort().join(','))
);

function sortStickers(colors: FaceletColor[]): string {
  return [...colors].sort().join(',');
}

/**
 * Validate full 54-facelet state
 */
export function validateFacelets(facelets: FaceletMap): ValidationResult {
  const faces: FaceName[] = ['U', 'D', 'F', 'B', 'L', 'R'];
  const colorCounts: Record<FaceletColor, number> = {
    U: 0, D: 0, F: 0, B: 0, R: 0, L: 0,
  };
  let missingCount = 0;

  for (const f of faces) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const color = facelets[`${f}_${r}_${c}`];
        if (!color) {
          missingCount++;
        } else {
          colorCounts[color] = (colorCounts[color] || 0) + 1;
        }
      }
    }
  }

  if (missingCount > 0) {
    return {
      isValid: false,
      missingCount,
      colorCounts,
      errorMessageKey: 'incompleteStickers',
      errorDetail: `${missingCount} stickers unassigned`,
    };
  }

  // Check color counts (each must be exactly 9)
  for (const f of faces) {
    if (colorCounts[f] !== 9) {
      return {
        isValid: false,
        missingCount: 0,
        colorCounts,
        errorMessageKey: 'invalidColorCount',
        errorDetail: `${COLOR_NAMES[f]}: ${colorCounts[f]} / 9`,
      };
    }
  }

  // Check centers
  for (const f of faces) {
    const centerColor = facelets[`${f}_1_1`];
    if (centerColor !== f) {
      return {
        isValid: false,
        missingCount: 0,
        colorCounts,
        errorMessageKey: 'invalidCenters',
        errorDetail: `Center of ${f} is ${centerColor}, expected ${f}`,
      };
    }
  }

  // Group facelets by 3D position
  const posStickers = new Map<string, { normal: Vector3D; color: FaceletColor }[]>();
  for (const face of faces) {
    const normal = getFaceNormal(face);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const pos = getFaceletCoords(face, r, c);
        const key = pos.join(',');
        if (!posStickers.has(key)) posStickers.set(key, []);
        posStickers.get(key)!.push({ normal, color: facelets[`${face}_${r}_${c}`] });
      }
    }
  }

  const seenEdges = new Set<string>();
  const seenCorners = new Set<string>();

  for (const [, stickers] of posStickers.entries()) {
    if (stickers.length === 2) {
      // Edge piece
      const key = sortStickers([stickers[0].color, stickers[1].color]);
      if (!VALID_EDGES.has(key)) {
        return {
          isValid: false,
          missingCount: 0,
          colorCounts,
          errorMessageKey: 'impossibleEdge',
          errorDetail: `${COLOR_NAMES[stickers[0].color]} - ${COLOR_NAMES[stickers[1].color]}`,
        };
      }
      if (seenEdges.has(key)) {
        return {
          isValid: false,
          missingCount: 0,
          colorCounts,
          errorMessageKey: 'duplicateEdge',
          errorDetail: `${COLOR_NAMES[stickers[0].color]} - ${COLOR_NAMES[stickers[1].color]}`,
        };
      }
      seenEdges.add(key);
    } else if (stickers.length === 3) {
      // Corner piece
      const key = sortStickers([stickers[0].color, stickers[1].color, stickers[2].color]);
      if (!VALID_CORNERS.has(key)) {
        return {
          isValid: false,
          missingCount: 0,
          colorCounts,
          errorMessageKey: 'impossibleCorner',
          errorDetail: `${COLOR_NAMES[stickers[0].color]} - ${COLOR_NAMES[stickers[1].color]} - ${COLOR_NAMES[stickers[2].color]}`,
        };
      }
      if (seenCorners.has(key)) {
        return {
          isValid: false,
          missingCount: 0,
          colorCounts,
          errorMessageKey: 'duplicateCorner',
          errorDetail: `${COLOR_NAMES[stickers[0].color]} - ${COLOR_NAMES[stickers[1].color]} - ${COLOR_NAMES[stickers[2].color]}`,
        };
      }
      seenCorners.add(key);
    }
  }

  return {
    isValid: true,
    missingCount: 0,
    colorCounts,
  };
}

function cross(a: Vector3D, b: Vector3D): Vector3D {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

/**
 * Reconstruct a fully functional CubeModel from validated 54 facelets
 */
export function buildCubeModelFromFacelets(facelets: FaceletMap): CubeModel {
  const faces: FaceName[] = ['U', 'D', 'F', 'B', 'L', 'R'];
  const posStickers = new Map<string, { normal: Vector3D; color: FaceletColor }[]>();

  for (const face of faces) {
    const normal = getFaceNormal(face);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const pos = getFaceletCoords(face, r, c);
        const key = pos.join(',');
        if (!posStickers.has(key)) posStickers.set(key, []);
        posStickers.get(key)!.push({ normal, color: facelets[`${face}_${r}_${c}`] });
      }
    }
  }

  const model = new CubeModel();
  const pieces: PieceState[] = [];

  for (const [key, stickers] of posStickers.entries()) {
    const currentPos = key.split(',').map(Number) as Vector3D;
    let sx = 0, sy = 0, sz = 0;
    for (const s of stickers) {
      const origNorm = getFaceNormal(s.color);
      sx += origNorm[0];
      sy += origNorm[1];
      sz += origNorm[2];
    }
    const solvedPos: Vector3D = [sx, sy, sz];
    const id = `p_${sx}_${sy}_${sz}`;

    let right: Vector3D = [1, 0, 0];
    let up: Vector3D = [0, 1, 0];
    let forward: Vector3D = [0, 0, 1];

    if (stickers.length === 1) {
      // Center piece
      right = [1, 0, 0];
      up = [0, 1, 0];
      forward = [0, 0, 1];
    } else if (stickers.length === 2) {
      // Edge piece
      const w1 = stickers[0].normal;
      const o1 = getFaceNormal(stickers[0].color);
      const w2 = stickers[1].normal;
      const o2 = getFaceNormal(stickers[1].color);
      const w3 = cross(w1, w2);
      const o3 = cross(o1, o2);

      right = [
        o1[0] * w1[0] + o2[0] * w2[0] + o3[0] * w3[0],
        o1[0] * w1[1] + o2[0] * w2[1] + o3[0] * w3[1],
        o1[0] * w1[2] + o2[0] * w2[2] + o3[0] * w3[2],
      ];
      up = [
        o1[1] * w1[0] + o2[1] * w2[0] + o3[1] * w3[0],
        o1[1] * w1[1] + o2[1] * w2[1] + o3[1] * w3[1],
        o1[1] * w1[2] + o2[1] * w2[2] + o3[1] * w3[2],
      ];
      forward = [
        o1[2] * w1[0] + o2[2] * w2[0] + o3[2] * w3[0],
        o1[2] * w1[1] + o2[2] * w2[1] + o3[2] * w3[1],
        o1[2] * w1[2] + o2[2] * w2[2] + o3[2] * w3[2],
      ];
    } else if (stickers.length === 3) {
      // Corner piece
      const w1 = stickers[0].normal;
      const o1 = getFaceNormal(stickers[0].color);
      const w2 = stickers[1].normal;
      const o2 = getFaceNormal(stickers[1].color);
      const wCross = cross(w1, w2);
      const oCross = cross(o1, o2);

      right = [
        o1[0] * w1[0] + o2[0] * w2[0] + oCross[0] * wCross[0],
        o1[0] * w1[1] + o2[0] * w2[1] + oCross[0] * wCross[1],
        o1[0] * w1[2] + o2[0] * w2[2] + oCross[0] * wCross[2],
      ];
      up = [
        o1[1] * w1[0] + o2[1] * w2[0] + oCross[1] * wCross[0],
        o1[1] * w1[1] + o2[1] * w2[1] + oCross[1] * wCross[1],
        o1[1] * w1[2] + o2[1] * w2[2] + oCross[1] * wCross[2],
      ];
      forward = [
        o1[2] * w1[0] + o2[2] * w2[0] + oCross[2] * wCross[0],
        o1[2] * w1[1] + o2[2] * w2[1] + oCross[2] * wCross[1],
        o1[2] * w1[2] + o2[2] * w2[2] + oCross[2] * wCross[2],
      ];
    }

    pieces.push({ id, solvedPos, currentPos, right, up, forward });
  }

  model.pieces = pieces;
  return model;
}
