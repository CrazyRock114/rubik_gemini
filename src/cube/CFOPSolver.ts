// 7-Stage CFOP / Layer-by-Layer Step-by-Step Solver
// Produces move sequences that systematically restore the cube layer by layer,
// triggering tutorial diagnostics: 0/7 -> 1/7 -> 2/7 -> 3/7 -> 4/7 -> 5/7 -> 6/7 -> 7/7

import { CubeModel, type MoveName, type Vector3D } from './CubeModel';

export interface CFOPSolverStage {
  stageNumber: number;
  phaseKey: string;
  name: string;
  moves: MoveName[];
}

export interface CFOPSolveResult {
  stages: CFOPSolverStage[];
  allMoves: MoveName[];
}

const ALLOWED_MOVES: MoveName[] = [
  'U', "U'", 'U2',
  'D', "D'", 'D2',
  'R', "R'", 'R2',
  'L', "L'", 'L2',
  'F', "F'", 'F2',
  'B', "B'", 'B2',
];

// Helper: check if piece is a center piece (centers have only 1 non-zero coordinate in solvedPos)
function isCenter(p: { solvedPos: Vector3D }): boolean {
  return Math.abs(p.solvedPos[0]) + Math.abs(p.solvedPos[1]) + Math.abs(p.solvedPos[2]) === 1;
}

function isCubeFullySolved(cube: CubeModel): boolean {
  return cube.pieces.every(
    (p) =>
      p.currentPos[0] === p.solvedPos[0] &&
      p.currentPos[1] === p.solvedPos[1] &&
      p.currentPos[2] === p.solvedPos[2] &&
      (isCenter(p) || (p.up[1] === 1 && p.forward[2] === 1))
  );
}

// ---------------------------------------------------------------------------
// STAGE 1: White Cross (y = +1)
// ---------------------------------------------------------------------------
const CROSS_COORDS: Vector3D[] = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 1, -1],
  [-1, 1, 0],
];

function getCrossFingerprint(cube: CubeModel): string {
  return CROSS_COORDS.map((coord) => {
    const p = cube.pieces.find(
      (piece) =>
        piece.solvedPos[0] === coord[0] &&
        piece.solvedPos[1] === coord[1] &&
        piece.solvedPos[2] === coord[2]
    )!;
    return `${p.currentPos.join(',')}:${p.up.join(',')}:${p.forward.join(',')}`;
  }).join('|');
}

const SOLVED_CROSS_FP = getCrossFingerprint(new CubeModel());

function solveWhiteCross(cube: CubeModel): MoveName[] {
  if (cube.isWhiteCrossSolved()) return [];

  const forwardVisited = new Map<string, MoveName[]>();
  const forwardQueue: { cube: CubeModel; moves: MoveName[] }[] = [{ cube: cube.clone(), moves: [] }];
  forwardVisited.set(getCrossFingerprint(cube), []);

  const backwardVisited = new Map<string, MoveName[]>();
  const backwardQueue: { cube: CubeModel; moves: MoveName[] }[] = [{ cube: new CubeModel(), moves: [] }];
  backwardVisited.set(SOLVED_CROSS_FP, []);

  while (forwardQueue.length > 0 || backwardQueue.length > 0) {
    if (forwardQueue.length > 0) {
      const fNode = forwardQueue.shift()!;
      if (fNode.moves.length <= 4) {
        for (const m of ALLOWED_MOVES) {
          const last = fNode.moves[fNode.moves.length - 1];
          if (last && last[0] === m[0]) continue;

          const nextCube = fNode.cube.clone();
          nextCube.applyMove(m);
          const nextMoves: MoveName[] = [...fNode.moves, m];
          const fp = getCrossFingerprint(nextCube);

          if (backwardVisited.has(fp)) {
            const bMoves = backwardVisited.get(fp)!;
            const solution = CubeModel.simplifyMoves([...nextMoves, ...CubeModel.invertAlgorithm(bMoves)]);
            cube.applyAlgorithm(solution);
            return solution;
          }

          if (!forwardVisited.has(fp)) {
            forwardVisited.set(fp, nextMoves);
            if (nextMoves.length < 4) {
              forwardQueue.push({ cube: nextCube, moves: nextMoves });
            }
          }
        }
      }
    }

    if (backwardQueue.length > 0) {
      const bNode = backwardQueue.shift()!;
      if (bNode.moves.length <= 4) {
        for (const m of ALLOWED_MOVES) {
          const last = bNode.moves[bNode.moves.length - 1];
          if (last && last[0] === m[0]) continue;

          const nextCube = bNode.cube.clone();
          nextCube.applyMove(m);
          const nextMoves: MoveName[] = [...bNode.moves, m];
          const fp = getCrossFingerprint(nextCube);

          if (forwardVisited.has(fp)) {
            const fMoves = forwardVisited.get(fp)!;
            const solution = CubeModel.simplifyMoves([...fMoves, ...CubeModel.invertAlgorithm(nextMoves)]);
            cube.applyAlgorithm(solution);
            return solution;
          }

          if (!backwardVisited.has(fp)) {
            backwardVisited.set(fp, nextMoves);
            if (nextMoves.length < 4) {
              backwardQueue.push({ cube: nextCube, moves: nextMoves });
            }
          }
        }
      }
    }
  }

  return [];
}

// ---------------------------------------------------------------------------
// STAGE 2: First Layer Corners (White Corners)
// ---------------------------------------------------------------------------
interface CornerSlotDef {
  target: Vector3D;
  bottom: Vector3D;
  trigger: MoveName[];
}

const CORNER_SLOTS: CornerSlotDef[] = [
  { target: [1, 1, 1], bottom: [1, -1, 1], trigger: ["R'", "D'", 'R', 'D'] },
  { target: [-1, 1, 1], bottom: [-1, -1, 1], trigger: ["F'", "D'", 'F', 'D'] },
  { target: [1, 1, -1], bottom: [1, -1, -1], trigger: ["B'", "D'", 'B', 'D'] },
  { target: [-1, 1, -1], bottom: [-1, -1, -1], trigger: ["L'", "D'", 'L', 'D'] },
];

function isCornerSolved(cube: CubeModel, coord: Vector3D): boolean {
  const p = cube.pieces.find(
    (piece) =>
      piece.solvedPos[0] === coord[0] &&
      piece.solvedPos[1] === coord[1] &&
      piece.solvedPos[2] === coord[2]
  );
  return (
    !!p &&
    p.currentPos[0] === coord[0] &&
    p.currentPos[1] === coord[1] &&
    p.currentPos[2] === coord[2] &&
    p.up[1] === 1 &&
    p.forward[2] === 1
  );
}

function solveFirstLayerCorners(cube: CubeModel): MoveName[] {
  const moves: MoveName[] = [];

  for (const slot of CORNER_SLOTS) {
    if (isCornerSolved(cube, slot.target)) continue;

    let p = cube.pieces.find(
      (piece) =>
        piece.solvedPos[0] === slot.target[0] &&
        piece.solvedPos[1] === slot.target[1] &&
        piece.solvedPos[2] === slot.target[2]
    )!;

    // If corner is stuck in top layer, kick it down
    if (p.currentPos[1] === 1) {
      const currentSlot = CORNER_SLOTS.find(
        (s) => s.target[0] === p.currentPos[0] && s.target[2] === p.currentPos[2]
      );
      if (currentSlot) {
        cube.applyAlgorithm(currentSlot.trigger);
        moves.push(...currentSlot.trigger);
      }
    }

    // Now corner is in bottom layer. Rotate D to align with slot.bottom
    const dMoves: MoveName[] = ['D', 'D2', "D'"];
    p = cube.pieces.find(
      (piece) =>
        piece.solvedPos[0] === slot.target[0] &&
        piece.solvedPos[1] === slot.target[1] &&
        piece.solvedPos[2] === slot.target[2]
    )!;

    if (!(p.currentPos[0] === slot.bottom[0] && p.currentPos[2] === slot.bottom[2])) {
      for (const dm of dMoves) {
        const testCube = cube.clone();
        testCube.applyMove(dm);
        const tp = testCube.pieces.find(
          (piece) =>
            piece.solvedPos[0] === slot.target[0] &&
            piece.solvedPos[1] === slot.target[1] &&
            piece.solvedPos[2] === slot.target[2]
        )!;
        if (tp.currentPos[0] === slot.bottom[0] && tp.currentPos[2] === slot.bottom[2]) {
          cube.applyMove(dm);
          moves.push(dm);
          break;
        }
      }
    }

    // Repeat trigger until corner is locked and properly oriented
    let reps = 0;
    while (!isCornerSolved(cube, slot.target) && reps < 6) {
      cube.applyAlgorithm(slot.trigger);
      moves.push(...slot.trigger);
      reps++;
    }
  }

  return CubeModel.simplifyMoves(moves);
}

// ---------------------------------------------------------------------------
// STAGE 3: Second Layer Edges (Middle Layer)
// ---------------------------------------------------------------------------
interface MiddleSlotDef {
  name: string;
  targetPos: Vector3D;
  rightInsert: MoveName[];
  leftInsert: MoveName[];
}

const MIDDLE_SLOTS: MiddleSlotDef[] = [
  {
    name: 'FR',
    targetPos: [1, 0, 1],
    rightInsert: ["D'", "R'", 'D', 'R', 'D', 'F', "D'", "F'"],
    leftInsert: ['D', 'F', "D'", "F'", "D'", "R'", 'D', 'R'],
  },
  {
    name: 'FL',
    targetPos: [-1, 0, 1],
    leftInsert: ['D', 'L', "D'", "L'", "D'", "F'", 'D', 'F'],
    rightInsert: ["D'", "F'", 'D', 'F', 'D', 'L', "D'", "L'"],
  },
  {
    name: 'BR',
    targetPos: [1, 0, -1],
    rightInsert: ["D'", "B'", 'D', 'B', 'D', 'R', "D'", "R'"],
    leftInsert: ['D', 'R', "D'", "R'", "D'", "B'", 'D', 'B'],
  },
  {
    name: 'BL',
    targetPos: [-1, 0, -1],
    leftInsert: ['D', 'B', "D'", "B'", "D'", "L'", 'D', 'L'],
    rightInsert: ["D'", "L'", 'D', 'L', 'D', 'B', "D'", "B'"],
  },
];

function isMiddleEdgeSolved(cube: CubeModel, targetPos: Vector3D): boolean {
  const p = cube.pieces.find(
    (piece) =>
      piece.solvedPos[0] === targetPos[0] &&
      piece.solvedPos[1] === targetPos[1] &&
      piece.solvedPos[2] === targetPos[2]
  );
  return (
    !!p &&
    p.currentPos[0] === targetPos[0] &&
    p.currentPos[1] === targetPos[1] &&
    p.currentPos[2] === targetPos[2] &&
    p.up[1] === 1 &&
    p.forward[2] === 1
  );
}

function solveSecondLayerEdges(cube: CubeModel): MoveName[] {
  const moves: MoveName[] = [];

  for (const slot of MIDDLE_SLOTS) {
    if (isMiddleEdgeSolved(cube, slot.targetPos)) continue;

    const p = cube.pieces.find(
      (piece) =>
        piece.solvedPos[0] === slot.targetPos[0] &&
        piece.solvedPos[1] === slot.targetPos[1] &&
        piece.solvedPos[2] === slot.targetPos[2]
    )!;

    // If edge is in a middle slot, kick it out to D
    if (p.currentPos[1] === 0) {
      const occSlot = MIDDLE_SLOTS.find(
        (s) => s.targetPos[0] === p.currentPos[0] && s.targetPos[2] === p.currentPos[2]
      );
      if (occSlot) {
        cube.applyAlgorithm(occSlot.rightInsert);
        moves.push(...occSlot.rightInsert);
      }
    }

    // Now edge is in bottom layer (y = -1). Test D setups + insert
    for (const dm of ['', 'D', 'D2', "D'"] as MoveName[]) {
      let found = false;
      for (const insert of [slot.rightInsert, slot.leftInsert]) {
        const testCube = cube.clone();
        if (dm) testCube.applyMove(dm);
        testCube.applyAlgorithm(insert);
        if (isMiddleEdgeSolved(testCube, slot.targetPos)) {
          if (dm) {
            cube.applyMove(dm);
            moves.push(dm);
          }
          cube.applyAlgorithm(insert);
          moves.push(...insert);
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }

  return CubeModel.simplifyMoves(moves);
}

// ---------------------------------------------------------------------------
// STAGE 4: Yellow Cross (Top Layer Edge Orientation on D)
// ---------------------------------------------------------------------------
const YELLOW_CROSS_ALGO: MoveName[] = ["F'", "D'", "R'", 'D', 'R', 'F'];

function solveYellowCross(cube: CubeModel): MoveName[] {
  if (cube.isYellowCrossSolved()) return [];

  const queue: { cube: CubeModel; moves: MoveName[] }[] = [{ cube: cube.clone(), moves: [] }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node.moves.length > 30) break;

    for (const dm of ['', 'D', 'D2', "D'"] as MoveName[]) {
      const nextCube = node.cube.clone();
      const stepMoves: MoveName[] = [];
      if (dm) {
        nextCube.applyMove(dm);
        stepMoves.push(dm);
      }
      nextCube.applyAlgorithm(YELLOW_CROSS_ALGO);
      stepMoves.push(...YELLOW_CROSS_ALGO);

      const totalMoves = CubeModel.simplifyMoves([...node.moves, ...stepMoves]);

      if (nextCube.isYellowCrossSolved()) {
        cube.applyAlgorithm(totalMoves);
        return totalMoves;
      }

      const key = nextCube.pieces
        .filter(
          (p) =>
            p.currentPos[1] === -1 &&
            (p.currentPos[0] === 0 || p.currentPos[2] === 0) &&
            !(p.currentPos[0] === 0 && p.currentPos[2] === 0)
        )
        .map((p) => nextCube.getFaceColorOfPiece(p, [0, -1, 0]))
        .join(',');

      if (!visited.has(key)) {
        visited.add(key);
        queue.push({ cube: nextCube, moves: totalMoves });
      }
    }
  }

  return [];
}

// ---------------------------------------------------------------------------
// STAGE 5: Orient Yellow Corners (Sune & Anti-Sune on D)
// ---------------------------------------------------------------------------
const SUNE: MoveName[] = ["R'", "D'", 'R', "D'", "R'", 'D2', 'R'];
const ANTI_SUNE: MoveName[] = ['L', 'D', "L'", 'D', 'L', 'D2', "L'"];

function solveYellowCornersOrientation(cube: CubeModel): MoveName[] {
  if (cube.isYellowCornersOriented()) return [];

  const queue: { cube: CubeModel; moves: MoveName[] }[] = [{ cube: cube.clone(), moves: [] }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node.moves.length > 35) break;

    for (const dm of ['', 'D', 'D2', "D'"] as MoveName[]) {
      for (const algo of [SUNE, ANTI_SUNE]) {
        const nextCube = node.cube.clone();
        const stepMoves: MoveName[] = [];
        if (dm) {
          nextCube.applyMove(dm);
          stepMoves.push(dm);
        }
        nextCube.applyAlgorithm(algo);
        stepMoves.push(...algo);

        const totalMoves = CubeModel.simplifyMoves([...node.moves, ...stepMoves]);

        if (nextCube.isYellowCornersOriented()) {
          cube.applyAlgorithm(totalMoves);
          return totalMoves;
        }

        const key = nextCube.pieces
          .filter((p) => p.currentPos[1] === -1 && Math.abs(p.currentPos[0]) === 1 && Math.abs(p.currentPos[2]) === 1)
          .map((p) => nextCube.getFaceColorOfPiece(p, [0, -1, 0]))
          .join(',');

        if (!visited.has(key)) {
          visited.add(key);
          queue.push({ cube: nextCube, moves: totalMoves });
        }
      }
    }
  }

  return [];
}

// ---------------------------------------------------------------------------
// STAGE 6: Permute Yellow Corners (T-Perm on D)
// ---------------------------------------------------------------------------
const T_PERM_D: MoveName[] = ["R'", "D'", 'R', 'D', 'R', "F'", 'R2', 'D', 'R', 'D', "R'", "D'", 'R', 'F'];

function solveYellowCornersPermutation(cube: CubeModel): MoveName[] {
  if (cube.isYellowCornersPermuted()) return [];

  const queue: { cube: CubeModel; moves: MoveName[] }[] = [{ cube: cube.clone(), moves: [] }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node.moves.length > 45) break;

    // Check pure D rotations first
    for (const dm of ['', 'D', 'D2', "D'"] as MoveName[]) {
      const testCube = node.cube.clone();
      if (dm) testCube.applyMove(dm);
      if (testCube.isYellowCornersPermuted()) {
        const res = CubeModel.simplifyMoves([...node.moves, ...(dm ? [dm] : [])]);
        cube.applyAlgorithm(res);
        return res;
      }
    }

    // Otherwise D + T-perm
    for (const dm of ['', 'D', 'D2', "D'"] as MoveName[]) {
      const nextCube = node.cube.clone();
      const stepMoves: MoveName[] = [];
      if (dm) {
        nextCube.applyMove(dm);
        stepMoves.push(dm);
      }
      nextCube.applyAlgorithm(T_PERM_D);
      stepMoves.push(...T_PERM_D);

      for (const finalD of ['', 'D', 'D2', "D'"] as MoveName[]) {
        const checkCube = nextCube.clone();
        if (finalD) checkCube.applyMove(finalD);
        if (checkCube.isYellowCornersPermuted()) {
          const res = CubeModel.simplifyMoves([...node.moves, ...stepMoves, ...(finalD ? [finalD] : [])]);
          cube.applyAlgorithm(res);
          return res;
        }
      }

      const key = nextCube.pieces
        .filter((p) => p.currentPos[1] === -1 && Math.abs(p.currentPos[0]) === 1 && Math.abs(p.currentPos[2]) === 1)
        .map((p) => `${p.solvedPos.join(',')}=>${p.currentPos.join(',')}`)
        .sort()
        .join('|');

      if (!visited.has(key)) {
        visited.add(key);
        queue.push({ cube: nextCube, moves: [...node.moves, ...stepMoves] });
      }
    }
  }

  return [];
}

// ---------------------------------------------------------------------------
// STAGE 7: Permute Yellow Edges (U-Perm on D)
// ---------------------------------------------------------------------------
const U_PERM_A: MoveName[] = ['R', "D'", 'R', 'D', 'R', 'D', 'R', "D'", "R'", "D'", 'R2'];
const U_PERM_B: MoveName[] = ['R2', 'D', 'R', 'D', "R'", "D'", "R'", "D'", "R'", 'D', "R'"];

function solveYellowEdgesPermutation(cube: CubeModel): MoveName[] {
  if (isCubeFullySolved(cube)) return [];

  const queue: { cube: CubeModel; moves: MoveName[] }[] = [{ cube: cube.clone(), moves: [] }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node.moves.length > 40) break;

    for (const dm of ['', 'D', 'D2', "D'"] as MoveName[]) {
      for (const algo of [U_PERM_A, U_PERM_B]) {
        const nextCube = node.cube.clone();
        const stepMoves: MoveName[] = [];
        if (dm) {
          nextCube.applyMove(dm);
          stepMoves.push(dm);
        }
        nextCube.applyAlgorithm(algo);
        stepMoves.push(...algo);
        const undoDm: MoveName | '' = dm === 'D' ? "D'" : dm === "D'" ? 'D' : dm;
        if (undoDm) {
          nextCube.applyMove(undoDm);
          stepMoves.push(undoDm);
        }

        const totalMoves = CubeModel.simplifyMoves([...node.moves, ...stepMoves]);

        if (isCubeFullySolved(nextCube)) {
          cube.applyAlgorithm(totalMoves);
          return totalMoves;
        }

        const key = nextCube.pieces
          .filter(
            (p) =>
              p.currentPos[1] === -1 &&
              (p.currentPos[0] === 0 || p.currentPos[2] === 0) &&
              !(p.currentPos[0] === 0 && p.currentPos[2] === 0)
          )
          .map((p) => `${p.solvedPos.join(',')}=>${p.currentPos.join(',')}`)
          .sort()
          .join('|');

        if (!visited.has(key)) {
          visited.add(key);
          queue.push({ cube: nextCube, moves: totalMoves });
        }
      }
    }
  }

  return [];
}

// ---------------------------------------------------------------------------
// MASTER CFOP SOLVER
// ---------------------------------------------------------------------------
export function solveCubeCFOP(initialCube: CubeModel): CFOPSolveResult {
  const workingCube = initialCube.clone();
  const stages: CFOPSolverStage[] = [];

  // Stage 1: White Cross
  const m1 = solveWhiteCross(workingCube);
  stages.push({
    stageNumber: 1,
    phaseKey: 'whiteCross',
    name: 'White Cross',
    moves: m1,
  });

  // Stage 2: First Layer Corners
  const m2 = solveFirstLayerCorners(workingCube);
  stages.push({
    stageNumber: 2,
    phaseKey: 'firstLayer',
    name: 'First Layer (Corners)',
    moves: m2,
  });

  // Stage 3: Second Layer Edges
  const m3 = solveSecondLayerEdges(workingCube);
  stages.push({
    stageNumber: 3,
    phaseKey: 'secondLayer',
    name: 'Second Layer (Middle Edges)',
    moves: m3,
  });

  // Stage 4: Yellow Cross
  const m4 = solveYellowCross(workingCube);
  stages.push({
    stageNumber: 4,
    phaseKey: 'yellowCross',
    name: 'Yellow Cross',
    moves: m4,
  });

  // Stage 5: Orient Yellow Corners
  const m5 = solveYellowCornersOrientation(workingCube);
  stages.push({
    stageNumber: 5,
    phaseKey: 'orientYellowCorners',
    name: 'Orient Yellow Corners',
    moves: m5,
  });

  // Stage 6: Permute Yellow Corners
  const m6 = solveYellowCornersPermutation(workingCube);
  stages.push({
    stageNumber: 6,
    phaseKey: 'permuteYellowCorners',
    name: 'Permute Yellow Corners',
    moves: m6,
  });

  // Stage 7: Permute Yellow Edges
  const m7 = solveYellowEdgesPermutation(workingCube);
  stages.push({
    stageNumber: 7,
    phaseKey: 'permuteYellowEdges',
    name: 'Permute Yellow Edges',
    moves: m7,
  });

  const allMoves: MoveName[] = [
    ...m1,
    ...m2,
    ...m3,
    ...m4,
    ...m5,
    ...m6,
    ...m7,
  ];

  return { stages, allMoves };
}
