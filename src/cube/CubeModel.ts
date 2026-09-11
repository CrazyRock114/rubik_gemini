// 3D Rubik's Cube Mathematical Model and State Engine

export type FaceName = 'U' | 'D' | 'L' | 'R' | 'F' | 'B';
export type MoveName =
  | 'U' | "U'" | 'U2'
  | 'D' | "D'" | 'D2'
  | 'R' | "R'" | 'R2'
  | 'L' | "L'" | 'L2'
  | 'F' | "F'" | 'F2'
  | 'B' | "B'" | 'B2'
  | 'M' | "M'" | 'M2'
  | 'E' | "E'" | 'E2'
  | 'S' | "S'" | 'S2'
  | 'x' | "x'" | 'x2'
  | 'y' | "y'" | 'y2'
  | 'z' | "z'" | 'z2';

export type Vector3D = [number, number, number];

export interface PieceState {
  id: string; // e.g. "U-R-F"
  solvedPos: Vector3D;
  currentPos: Vector3D;
  // 3x3 orthonormal orientation matrix as row vectors [right, up, forward]
  right: Vector3D;
  up: Vector3D;
  forward: Vector3D;
}

export const FACE_COLORS: Record<FaceName, string> = {
  U: '#FFFFFF', // White
  D: '#FFD500', // Yellow
  F: '#009B48', // Green
  B: '#0046AD', // Blue
  R: '#B71234', // Red
  L: '#FF5800', // Orange
};

export const CORE_COLOR = '#18181b';

// Vector utilities
function dot(a: Vector3D, b: Vector3D): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function round(v: number): number {
  const r = Math.round(v);
  return Math.abs(v - r) < 1e-4 ? r : v;
}

function rotateX(v: Vector3D, angleRad: number): Vector3D {
  const c = Math.cos(angleRad);
  const s = Math.sin(angleRad);
  return [v[0], round(v[1] * c - v[2] * s), round(v[1] * s + v[2] * c)];
}

function rotateY(v: Vector3D, angleRad: number): Vector3D {
  const c = Math.cos(angleRad);
  const s = Math.sin(angleRad);
  return [round(v[0] * c + v[2] * s), v[1], round(-v[0] * s + v[2] * c)];
}

function rotateZ(v: Vector3D, angleRad: number): Vector3D {
  const c = Math.cos(angleRad);
  const s = Math.sin(angleRad);
  return [round(v[0] * c - v[1] * s), round(v[0] * s + v[1] * c), v[2]];
}

export class CubeModel {
  pieces: PieceState[] = [];

  constructor() {
    this.reset();
  }

  reset() {
    this.pieces = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue; // skip core
          const id = `p_${x}_${y}_${z}`;
          this.pieces.push({
            id,
            solvedPos: [x, y, z],
            currentPos: [x, y, z],
            right: [1, 0, 0],
            up: [0, 1, 0],
            forward: [0, 0, 1],
          });
        }
      }
    }
  }

  clone(): CubeModel {
    const copy = new CubeModel();
    copy.pieces = this.pieces.map((p) => ({
      id: p.id,
      solvedPos: [...p.solvedPos] as Vector3D,
      currentPos: [...p.currentPos] as Vector3D,
      right: [...p.right] as Vector3D,
      up: [...p.up] as Vector3D,
      forward: [...p.forward] as Vector3D,
    }));
    return copy;
  }

  applyMove(move: MoveName) {
    const count = move.endsWith('2') ? 2 : 1;
    const isPrime = move.endsWith("'");
    const baseMove = move[0] as FaceName | 'M' | 'E' | 'S' | 'x' | 'y' | 'z';

    for (let i = 0; i < count; i++) {
      this.applySingleMove(baseMove, isPrime);
    }
  }

  applyAlgorithm(algo: string | MoveName[]) {
    const moves = Array.isArray(algo) ? algo : CubeModel.parseAlgorithm(algo);
    for (const move of moves) {
      this.applyMove(move);
    }
  }

  private applySingleMove(base: string, isPrime: boolean) {
    let axis: 'x' | 'y' | 'z' = 'y';
    let layer: number | null = null; // null means all layers (cube rotation)
    let sign = -1; // standard clockwise convention

    switch (base) {
      case 'U':
        axis = 'y';
        layer = 1;
        sign = -1;
        break;
      case 'D':
        axis = 'y';
        layer = -1;
        sign = 1;
        break;
      case 'R':
        axis = 'x';
        layer = 1;
        sign = -1;
        break;
      case 'L':
        axis = 'x';
        layer = -1;
        sign = 1;
        break;
      case 'F':
        axis = 'z';
        layer = 1;
        sign = -1;
        break;
      case 'B':
        axis = 'z';
        layer = -1;
        sign = 1;
        break;
      case 'M':
        axis = 'x';
        layer = 0;
        sign = 1; // M follows L
        break;
      case 'E':
        axis = 'y';
        layer = 0;
        sign = 1; // E follows D
        break;
      case 'S':
        axis = 'z';
        layer = 0;
        sign = -1; // S follows F
        break;
      case 'x':
        axis = 'x';
        layer = null;
        sign = -1; // follows R
        break;
      case 'y':
        axis = 'y';
        layer = null;
        sign = -1; // follows U
        break;
      case 'z':
        axis = 'z';
        layer = null;
        sign = -1; // follows F
        break;
    }

    if (isPrime) sign = -sign;
    const angle = (sign * Math.PI) / 2;

    for (const p of this.pieces) {
      const match =
        layer === null ||
        (axis === 'x' && p.currentPos[0] === layer) ||
        (axis === 'y' && p.currentPos[1] === layer) ||
        (axis === 'z' && p.currentPos[2] === layer);

      if (match) {
        if (axis === 'x') {
          p.currentPos = rotateX(p.currentPos, angle);
          p.right = rotateX(p.right, angle);
          p.up = rotateX(p.up, angle);
          p.forward = rotateX(p.forward, angle);
        } else if (axis === 'y') {
          p.currentPos = rotateY(p.currentPos, angle);
          p.right = rotateY(p.right, angle);
          p.up = rotateY(p.up, angle);
          p.forward = rotateY(p.forward, angle);
        } else if (axis === 'z') {
          p.currentPos = rotateZ(p.currentPos, angle);
          p.right = rotateZ(p.right, angle);
          p.up = rotateZ(p.up, angle);
          p.forward = rotateZ(p.forward, angle);
        }
      }
    }
  }

  // Determine sticker color for a piece at standard face direction (+X, -X, +Y, -Y, +Z, -Z)
  getFaceColorOfPiece(piece: PieceState, worldDir: Vector3D): string | null {
    // Check if the piece is at this outer face
    if (dot(piece.currentPos, worldDir) < 0.9) return null;

    // Determine what solved direction aligns with this world direction
    // localDir = worldDir expressed in piece's orientation frame
    const localX = dot(worldDir, piece.right);
    const localY = dot(worldDir, piece.up);
    const localZ = dot(worldDir, piece.forward);

    // If piece originally had a sticker in this local direction, return that color
    if (piece.solvedPos[0] === 1 && localX > 0.9) return FACE_COLORS.R;
    if (piece.solvedPos[0] === -1 && localX < -0.9) return FACE_COLORS.L;
    if (piece.solvedPos[1] === 1 && localY > 0.9) return FACE_COLORS.U;
    if (piece.solvedPos[1] === -1 && localY < -0.9) return FACE_COLORS.D;
    if (piece.solvedPos[2] === 1 && localZ > 0.9) return FACE_COLORS.F;
    if (piece.solvedPos[2] === -1 && localZ < -0.9) return FACE_COLORS.B;

    return null;
  }

  // Check state stages
  isSolved(): boolean {
    const isCenter = (p: PieceState) =>
      Math.abs(p.solvedPos[0]) + Math.abs(p.solvedPos[1]) + Math.abs(p.solvedPos[2]) === 1;

    return this.pieces.every(
      (p) =>
        p.currentPos[0] === p.solvedPos[0] &&
        p.currentPos[1] === p.solvedPos[1] &&
        p.currentPos[2] === p.solvedPos[2] &&
        (isCenter(p) || (p.up[1] === 1 && p.forward[2] === 1))
    );
  }

  isWhiteCrossSolved(): boolean {
    // 4 white edges: (0, 1, 1), (1, 1, 0), (0, 1, -1), (-1, 1, 0)
    const crossCoords: Vector3D[] = [
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, -1],
      [-1, 1, 0],
    ];
    return crossCoords.every((coord) => {
      const p = this.pieces.find(
        (piece) =>
          piece.solvedPos[0] === coord[0] &&
          piece.solvedPos[1] === coord[1] &&
          piece.solvedPos[2] === coord[2]
      );
      return (
        p &&
        p.currentPos[0] === coord[0] &&
        p.currentPos[1] === coord[1] &&
        p.currentPos[2] === coord[2] &&
        p.up[1] === 1
      );
    });
  }

  isFirstLayerSolved(): boolean {
    if (!this.isWhiteCrossSolved()) return false;
    // 4 white corners: (1, 1, 1), (-1, 1, 1), (1, 1, -1), (-1, 1, -1)
    const cornerCoords: Vector3D[] = [
      [1, 1, 1],
      [-1, 1, 1],
      [1, 1, -1],
      [-1, 1, -1],
    ];
    return cornerCoords.every((coord) => {
      const p = this.pieces.find(
        (piece) =>
          piece.solvedPos[0] === coord[0] &&
          piece.solvedPos[1] === coord[1] &&
          piece.solvedPos[2] === coord[2]
      );
      return (
        p &&
        p.currentPos[0] === coord[0] &&
        p.currentPos[1] === coord[1] &&
        p.currentPos[2] === coord[2] &&
        p.up[1] === 1
      );
    });
  }

  isSecondLayerSolved(): boolean {
    if (!this.isFirstLayerSolved()) return false;
    // 4 middle edges: (1, 0, 1), (-1, 0, 1), (1, 0, -1), (-1, 0, -1)
    const midEdges: Vector3D[] = [
      [1, 0, 1],
      [-1, 0, 1],
      [1, 0, -1],
      [-1, 0, -1],
    ];
    return midEdges.every((coord) => {
      const p = this.pieces.find(
        (piece) =>
          piece.solvedPos[0] === coord[0] &&
          piece.solvedPos[1] === coord[1] &&
          piece.solvedPos[2] === coord[2]
      );
      return (
        p &&
        p.currentPos[0] === coord[0] &&
        p.currentPos[1] === coord[1] &&
        p.currentPos[2] === coord[2] &&
        p.up[1] === 1 &&
        p.forward[2] === 1
      );
    });
  }

  isYellowCrossSolved(): boolean {
    // Check if yellow face (y = -1) has yellow color pointing down on all 4 edges
    // In standard orientation, Down is y = -1
    const yellowEdges = this.pieces.filter(
      (p) => p.currentPos[1] === -1 && (p.currentPos[0] === 0 || p.currentPos[2] === 0) && !(p.currentPos[0] === 0 && p.currentPos[2] === 0)
    );
    return yellowEdges.every((p) => this.getFaceColorOfPiece(p, [0, -1, 0]) === FACE_COLORS.D);
  }

  isYellowCornersOriented(): boolean {
    const yellowCorners = this.pieces.filter(
      (p) => p.currentPos[1] === -1 && Math.abs(p.currentPos[0]) === 1 && Math.abs(p.currentPos[2]) === 1
    );
    return yellowCorners.every((p) => this.getFaceColorOfPiece(p, [0, -1, 0]) === FACE_COLORS.D);
  }

  isYellowCornersPermuted(): boolean {
    const cornerCoords: Vector3D[] = [
      [1, -1, 1],
      [-1, -1, 1],
      [1, -1, -1],
      [-1, -1, -1],
    ];
    return cornerCoords.every((coord) => {
      const p = this.pieces.find(
        (piece) =>
          piece.solvedPos[0] === coord[0] &&
          piece.solvedPos[1] === coord[1] &&
          piece.solvedPos[2] === coord[2]
      );
      return (
        p &&
        p.currentPos[0] === coord[0] &&
        p.currentPos[1] === coord[1] &&
        p.currentPos[2] === coord[2]
      );
    });
  }

  getCurrentPhase(): { phaseIndex: number; phaseKey: string } {
    if (this.isSolved()) {
      return { phaseIndex: 7, phaseKey: 'solved' };
    }
    if (
      this.isYellowCornersPermuted() &&
      this.isYellowCornersOriented() &&
      this.isYellowCrossSolved() &&
      this.isSecondLayerSolved()
    ) {
      return { phaseIndex: 6, phaseKey: 'permuteYellowEdges' };
    }
    if (
      this.isYellowCornersOriented() &&
      this.isYellowCrossSolved() &&
      this.isSecondLayerSolved()
    ) {
      return { phaseIndex: 5, phaseKey: 'permuteYellowCorners' };
    }
    if (this.isYellowCrossSolved() && this.isSecondLayerSolved()) {
      return { phaseIndex: 4, phaseKey: 'orientYellowCorners' };
    }
    if (this.isSecondLayerSolved()) {
      return { phaseIndex: 3, phaseKey: 'yellowCross' };
    }
    if (this.isFirstLayerSolved()) {
      return { phaseIndex: 2, phaseKey: 'secondLayer' };
    }
    if (this.isWhiteCrossSolved()) {
      return { phaseIndex: 1, phaseKey: 'firstLayer' };
    }
    return { phaseIndex: 0, phaseKey: 'whiteCross' };
  }

  getDetailedStats(): {
    solvedPieces: number;
    totalPieces: number;
    whiteCrossEdges: number;
    firstLayerCorners: number;
    secondLayerEdges: number;
    yellowCrossEdges: number;
    yellowCornersOriented: number;
  } {
    const crossCoords: Vector3D[] = [
      [0, 1, 1], [1, 1, 0], [0, 1, -1], [-1, 1, 0]
    ];
    const cornerCoords: Vector3D[] = [
      [1, 1, 1], [-1, 1, 1], [1, 1, -1], [-1, 1, -1]
    ];
    const midEdges: Vector3D[] = [
      [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1]
    ];

    let solvedPieces = 0;
    for (const p of this.pieces) {
      const isCenter = Math.abs(p.solvedPos[0]) + Math.abs(p.solvedPos[1]) + Math.abs(p.solvedPos[2]) === 1;
      if (
        p.currentPos[0] === p.solvedPos[0] &&
        p.currentPos[1] === p.solvedPos[1] &&
        p.currentPos[2] === p.solvedPos[2] &&
        (isCenter || (p.up[1] === 1 && p.forward[2] === 1))
      ) {
        solvedPieces++;
      }
    }

    let whiteCrossEdges = 0;
    for (const coord of crossCoords) {
      const p = this.pieces.find(
        (piece) =>
          piece.solvedPos[0] === coord[0] &&
          piece.solvedPos[1] === coord[1] &&
          piece.solvedPos[2] === coord[2]
      );
      if (
        p &&
        p.currentPos[0] === coord[0] &&
        p.currentPos[1] === coord[1] &&
        p.currentPos[2] === coord[2] &&
        p.up[1] === 1
      ) {
        whiteCrossEdges++;
      }
    }

    let firstLayerCorners = 0;
    for (const coord of cornerCoords) {
      const p = this.pieces.find(
        (piece) =>
          piece.solvedPos[0] === coord[0] &&
          piece.solvedPos[1] === coord[1] &&
          piece.solvedPos[2] === coord[2]
      );
      if (
        p &&
        p.currentPos[0] === coord[0] &&
        p.currentPos[1] === coord[1] &&
        p.currentPos[2] === coord[2] &&
        p.up[1] === 1 &&
        p.forward[2] === 1
      ) {
        firstLayerCorners++;
      }
    }

    let secondLayerEdges = 0;
    for (const coord of midEdges) {
      const p = this.pieces.find(
        (piece) =>
          piece.solvedPos[0] === coord[0] &&
          piece.solvedPos[1] === coord[1] &&
          piece.solvedPos[2] === coord[2]
      );
      if (
        p &&
        p.currentPos[0] === coord[0] &&
        p.currentPos[1] === coord[1] &&
        p.currentPos[2] === coord[2] &&
        p.up[1] === 1 &&
        p.forward[2] === 1
      ) {
        secondLayerEdges++;
      }
    }

    const yellowEdges = this.pieces.filter(
      (p) =>
        p.currentPos[1] === -1 &&
        (p.currentPos[0] === 0 || p.currentPos[2] === 0) &&
        !(p.currentPos[0] === 0 && p.currentPos[2] === 0)
    );
    const yellowCrossEdges = yellowEdges.filter(
      (p) => this.getFaceColorOfPiece(p, [0, -1, 0]) === FACE_COLORS.D
    ).length;

    const yellowCorners = this.pieces.filter(
      (p) =>
        p.currentPos[1] === -1 &&
        Math.abs(p.currentPos[0]) === 1 &&
        Math.abs(p.currentPos[2]) === 1
    );
    const yellowCornersOriented = yellowCorners.filter(
      (p) => this.getFaceColorOfPiece(p, [0, -1, 0]) === FACE_COLORS.D
    ).length;

    return {
      solvedPieces,
      totalPieces: this.pieces.length,
      whiteCrossEdges,
      firstLayerCorners,
      secondLayerEdges,
      yellowCrossEdges,
      yellowCornersOriented,
    };
  }

  // String fingerprint representing current permutation and orientation for graph mapping
  getFingerprint(): string {
    return this.pieces
      .map(
        (p) =>
          `${p.currentPos.join(',')}:${p.right.join(',')}:${p.up.join(',')}`
      )
      .join('|');
  }

  // WCA scramble generator
  static generateScramble(length = 20): string {
    const faces = ['U', 'D', 'R', 'L', 'F', 'B'];
    const modifiers = ['', "'", '2'];
    const scramble: string[] = [];
    let lastFace = '';
    let secondLastFace = '';

    const opposites: Record<string, string> = {
      U: 'D',
      D: 'U',
      R: 'L',
      L: 'R',
      F: 'B',
      B: 'F',
    };

    while (scramble.length < length) {
      const face = faces[Math.floor(Math.random() * faces.length)];
      if (face === lastFace) continue;
      if (face === opposites[lastFace] && face === secondLastFace) continue;

      const mod = modifiers[Math.floor(Math.random() * modifiers.length)];
      scramble.push(`${face}${mod}`);
      secondLastFace = lastFace;
      lastFace = face;
    }

    return scramble.join(' ');
  }

  // Parser
  static parseAlgorithm(algo: string): MoveName[] {
    // Remove parentheses and clean whitespace
    const cleaned = algo.replace(/[()[\]{}]/g, ' ').trim();
    if (!cleaned) return [];
    const tokens = cleaned.split(/\s+/);
    const validMoves = new Set([
      'U', "U'", 'U2',
      'D', "D'", 'D2',
      'R', "R'", 'R2',
      'L', "L'", 'L2',
      'F', "F'", 'F2',
      'B', "B'", 'B2',
      'M', "M'", 'M2',
      'E', "E'", 'E2',
      'S', "S'", 'S2',
      'x', "x'", 'x2',
      'y', "y'", 'y2',
      'z', "z'", 'z2',
    ]);
    return tokens.filter((t) => validMoves.has(t)) as MoveName[];
  }

  // Inverse algorithm generator
  static invertAlgorithm(algo: string | MoveName[]): MoveName[] {
    const moves = Array.isArray(algo) ? algo : CubeModel.parseAlgorithm(algo);
    const inverted: MoveName[] = [];
    for (let i = moves.length - 1; i >= 0; i--) {
      const m = moves[i];
      if (m.endsWith('2')) {
        inverted.push(m);
      } else if (m.endsWith("'")) {
        inverted.push(m[0] as MoveName);
      } else {
        inverted.push(`${m}'` as MoveName);
      }
    }
    return inverted;
  }

  // Reduce redundant and commuting moves
  static simplifyMoves(moves: MoveName[]): MoveName[] {
    const opposites: Record<string, string> = { U: 'D', D: 'U', R: 'L', L: 'R', F: 'B', B: 'F' };
    let current = [...moves];
    let changed = true;
    let iterations = 0;

    while (changed && iterations < 50) {
      changed = false;
      iterations++;
      const next: MoveName[] = [];

      for (let i = 0; i < current.length; i++) {
        if (i === current.length - 1) {
          next.push(current[i]);
          break;
        }
        const m1 = current[i];
        const m2 = current[i + 1];
        const f1 = m1[0];
        const f2 = m2[0];

        // 1. Same face cancellation
        if (f1 === f2) {
          const turns1 = m1.endsWith('2') ? 2 : m1.endsWith("'") ? 3 : 1;
          const turns2 = m2.endsWith('2') ? 2 : m2.endsWith("'") ? 3 : 1;
          const total = (turns1 + turns2) % 4;
          changed = true;
          if (total !== 0) {
            const combined = (total === 1 ? f1 : total === 2 ? `${f1}2` : `${f1}'`) as MoveName;
            next.push(combined);
          }
          i++; // skip m2
          continue;
        }

        // 2. Commuting cancellation over opposite faces: e.g. R L R' -> R R' L -> L
        if (i + 2 < current.length) {
          const m3 = current[i + 2];
          const f3 = m3[0];
          if (f1 === f3 && opposites[f1] === f2) {
            const turns1 = m1.endsWith('2') ? 2 : m1.endsWith("'") ? 3 : 1;
            const turns3 = m3.endsWith('2') ? 2 : m3.endsWith("'") ? 3 : 1;
            const total = (turns1 + turns3) % 4;
            changed = true;
            next.push(m2); // m2 remains
            if (total !== 0) {
              const combined = (total === 1 ? f1 : total === 2 ? `${f1}2` : `${f1}'`) as MoveName;
              next.push(combined);
            }
            i += 2; // skip m2 and m3
            continue;
          }
        }

        next.push(m1);
      }
      current = next;
    }
    return current;
  }
}
