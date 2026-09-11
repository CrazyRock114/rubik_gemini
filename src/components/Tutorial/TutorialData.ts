import type { MoveName, Vector3D } from '../../cube/CubeModel';

export interface DetailedStepInstruction {
  move: MoveName;
  stepTitle: string;
  handAction: string; // Plain physical hand and finger instructions
  pieceEffect: string; // Exact mechanical effect on pieces
  visualCue: string; // What to look for visually
}

export interface StageCase {
  caseId: string;
  caseName: string;
  badge: string;
  initialDescription: string;
  initialSetupMoves: MoveName[]; // Moves from solved to generate this starting case
  targetDescription: string;
  targetSetupMoves: MoveName[]; // Moves to generate target goal state
  algorithmName: string;
  algorithmMoves: MoveName[];
  detailedSteps: DetailedStepInstruction[];
  proTips: string[];
}

export interface TutorialStage {
  stageId: string;
  stageNumber: number;
  title: string;
  subtitle: string;
  overview: string;
  keyTakeaway: string;
  focusCoords: Vector3D[];
  cases: StageCase[];
}

export const TUTORIAL_STAGES: TutorialStage[] = [
  // STAGE 0: ANATOMY & BASIC MOVES
  {
    stageId: 'anatomy-notation',
    stageNumber: 0,
    title: 'Stage 0: Anatomy & Notation',
    subtitle: 'Understanding piece types, degrees of freedom, and face rotation mechanics',
    overview:
      'The Rubik\'s Cube has 3 distinct species of pieces: 6 Centers (fixed in place), 12 Edges (2 colors), and 8 Corners (3 colors). Before attempting to solve, you must learn how each face rotates clockwise and counter-clockwise.',
    keyTakeaway:
      'A corner piece can NEVER become an edge piece, and an edge can NEVER become a corner. You do not solve stickers; you move entire 3D pieces into their rightful slots.',
    focusCoords: [
      [1, 1, 1],
      [1, 0, 0],
      [0, 1, 0],
    ],
    cases: [
      {
        caseId: 'basic-turns',
        caseName: 'Basic Face Rotations (R, U, F)',
        badge: 'Fundamental',
        initialDescription:
          'Starting from a solved cube. Watch how each face turn affects only the 9 pieces on that face while leaving the other 17 pieces completely untouched.',
        initialSetupMoves: [],
        targetDescription:
          'After performing R U R\' U\', you will see the right-front corner and edge displaced and ready to be understood.',
        targetSetupMoves: ['R', 'U', "R'", "U'"],
        algorithmName: 'Basic 4-Move Demonstration',
        algorithmMoves: ['R', 'U', "R'", "U'"],
        detailedSteps: [
          {
            move: 'R',
            stepTitle: 'Step 1: Turn Right Face Clockwise (R)',
            handAction:
              'Grip the right layer with your right thumb on the front and fingers on the back. Rotate the entire right layer 90° away from you (clockwise).',
            pieceEffect:
              'Lifts the bottom-front-right corner up into the top layer and exposes the middle-right slice.',
            visualCue: 'Watch the white base corner lift up to the top front-right.',
          },
          {
            move: 'U',
            stepTitle: 'Step 2: Turn Top Face Clockwise (U)',
            handAction:
              'Use your right index finger to push the top-back-right corner towards the left, turning the top face 90° clockwise.',
            pieceEffect:
              'Spins the top layer, moving the newly lifted corner away from the right layer.',
            visualCue: 'The lifted corner moves from the front-right to the front-left.',
          },
          {
            move: "R'",
            stepTitle: 'Step 3: Turn Right Face Counter-Clockwise (R\')',
            handAction:
              'Grip the right layer again and pull it 90° towards you (counter-clockwise).',
            pieceEffect:
              'Restores the right column back down to the bottom layer.',
            visualCue: 'The right face column is restored back down to the base.',
          },
          {
            move: "U'",
            stepTitle: 'Step 4: Turn Top Face Counter-Clockwise (U\')',
            handAction:
              'Use your left index finger to push the top-back-left corner towards the right, turning the top face 90° counter-clockwise.',
            pieceEffect:
              'Resets the top layer alignment, completing the 4-move cycle.',
            visualCue: 'The top layer snaps back into its reference orientation.',
          },
        ],
        proTips: [
          'Clockwise is defined as looking directly square at that face.',
          'A prime mark (\') denotes a counter-clockwise 90° turn.',
          'A number 2 (e.g., U2) denotes a 180° half-turn in either direction.',
        ],
      },
    ],
  },

  // STAGE 1: THE WHITE CROSS
  {
    stageId: 'white-cross',
    stageNumber: 1,
    title: 'Stage 1: The White Cross',
    subtitle: 'Anchor the foundation: align white edges with both White and matching side centers',
    overview:
      'The objective is to place all 4 White edge pieces on the White face. Crucially, each white edge\'s secondary color MUST match its adjacent center (Green with Green, Red with Red, Blue with Blue, Orange with Orange).',
    keyTakeaway:
      'A White cross with mismatched side colors is NOT solved! Each edge piece is an anchor connecting two faces simultaneously.',
    focusCoords: [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, -1],
      [0, -1, 1],
    ],
    cases: [
      {
        caseId: 'case-daisy-plunge',
        caseName: 'Possibility 1: Daisy Aligned & 180° Plunge',
        badge: 'Most Common',
        initialDescription:
          'The white-green edge is gathered around the yellow center (The Daisy). Its green sticker is already matched with the Green center.',
        initialSetupMoves: ['F2'],
        targetDescription:
          'The white-green edge is locked on the white face, perfectly connecting White to Green.',
        targetSetupMoves: [],
        algorithmName: '180° Plunge (F2)',
        algorithmMoves: ['F2'],
        detailedSteps: [
          {
            move: 'F2',
            stepTitle: 'Step 1: Turn Front Face 180° (F2)',
            handAction:
              'Grip the front face and rotate it 180° (two quarter turns) clockwise.',
            pieceEffect:
              'Transports the white-green edge from the top yellow layer straight down into the white base.',
            visualCue:
              'Watch the white sticker land directly adjacent to the white center while green stays connected to green.',
          },
        ],
        proTips: [
          'The Daisy Method: Always gather the 4 white edges around the Yellow center first—it requires zero algorithm memorization!',
          'Once the side color matches its center, a simple 180° plunge (F2, R2, etc.) sends it home perfectly.',
        ],
      },
      {
        caseId: 'case-flipped-edge',
        caseName: 'Possibility 2: Flipped Edge on Front Face',
        badge: 'Orientation Fix',
        initialDescription:
          'The white-green edge is in the correct slot between White and Green centers, but it is flipped backwards: the green sticker is on the white face!',
        initialSetupMoves: ['F', "U'", 'R', 'U'],
        targetDescription:
          'The edge is flipped cleanly so white faces down and green matches the green center.',
        targetSetupMoves: [],
        algorithmName: 'Flipped Edge Fix: F\' U\' R U',
        algorithmMoves: ["F'", "U'", 'R', 'U'],
        detailedSteps: [
          {
            move: "F'",
            stepTitle: 'Step 1: Turn Front Counter-Clockwise (F\')',
            handAction: 'Rotate the front face 90° counter-clockwise.',
            pieceEffect: 'Pops the flipped edge into the right middle layer.',
            visualCue: 'The white sticker moves to the right face.',
          },
          {
            move: "U'",
            stepTitle: 'Step 2: Turn Top Counter-Clockwise (U\')',
            handAction: 'Push the top layer with your left index finger 90°.',
            pieceEffect: 'Clears space in the top layer to receive the edge.',
            visualCue: 'The top layer rotates to make room.',
          },
          {
            move: 'R',
            stepTitle: 'Step 3: Turn Right Face Clockwise (R)',
            handAction: 'Rotate the right face 90° away from you.',
            pieceEffect: 'Lifts the edge up into the top layer correctly oriented.',
            visualCue: 'The white sticker is now on the top face.',
          },
          {
            move: 'U',
            stepTitle: 'Step 4: Turn Top Face Clockwise (U)',
            handAction: 'Push the top layer back 90° to align with green.',
            pieceEffect: 'Aligns the edge over the green center ready for plunge.',
            visualCue: 'The white cross is fully restored and intact.',
          },
        ],
        proTips: [
          'If an edge has white on the side instead of the top, moving it to the middle layer allows a simple insertion.',
        ],
      },
    ],
  },

  // STAGE 2: FIRST LAYER CORNERS
  {
    stageId: 'first-layer-corners',
    stageNumber: 2,
    title: 'Stage 2: First Layer Corners',
    subtitle: 'Mastering the fundamental "Sexy Move" [R, U] = R U R\' U\' to complete the white base',
    overview:
      'With the white cross established, we insert the 4 white corners. Each corner has 3 colors (e.g. White-Green-Red). We place it directly above its target slot and repeat the 4-move trigger (R U R\' U\') until it docks with white pointing down.',
    keyTakeaway:
      'The Sexy Move [R, U] = R U R\' U\' is a commutator that isolates changes to a localized slot while preserving the rest of the puzzle intact.',
    focusCoords: [
      [1, 1, 1],
      [1, -1, 1],
      [0, -1, 0],
      [0, 0, 1],
      [1, 0, 0],
    ],
    cases: [
      {
        caseId: 'case-white-facing-right',
        caseName: 'Possibility 1: White Sticker Facing Right',
        badge: '1 Trigger (Fastest)',
        initialDescription:
          'The White-Green-Red corner is in the top layer directly above the Green-Red slot. The White sticker is facing towards the RIGHT.',
        initialSetupMoves: ['U', 'R', "U'", "R'"],
        targetDescription:
          'The corner is inserted into the bottom layer with white facing down, matching both Green and Red centers.',
        targetSetupMoves: [],
        algorithmName: 'Single Sexy Move: R U R\' U\'',
        algorithmMoves: ['R', 'U', "R'", "U'"],
        detailedSteps: [
          {
            move: 'R',
            stepTitle: 'Step 1: Lift Target Slot (R)',
            handAction: 'Rotate the right face 90° away from you.',
            pieceEffect: 'Lifts the bottom-right slot up to meet the top layer.',
            visualCue: 'The empty slot rises up to the top-front.',
          },
          {
            move: 'U',
            stepTitle: 'Step 2: Connect the Corner (U)',
            handAction: 'Push the top layer 90° clockwise with your right index finger.',
            pieceEffect: 'Connects the corner piece directly into the raised slot.',
            visualCue: 'White connects with white along the right edge.',
          },
          {
            move: "R'",
            stepTitle: 'Step 3: Lower Slot to Base (R\')',
            handAction: 'Pull the right face 90° towards you.',
            pieceEffect: 'Returns the slot and corner down into the solved white base.',
            visualCue: 'White sticker docks flush on the bottom face.',
          },
          {
            move: "U'",
            stepTitle: 'Step 4: Reset Top Alignment (U\')',
            handAction: 'Push the top layer 90° counter-clockwise with left index finger.',
            pieceEffect: 'Restores the top layer orientation.',
            visualCue: 'All centers and layers align cleanly.',
          },
        ],
        proTips: [
          'When white faces right, exactly ONE Sexy Move (R U R\' U\') solves the corner!',
        ],
      },
      {
        caseId: 'case-white-facing-up',
        caseName: 'Possibility 2: White Sticker Facing UP',
        badge: '3 Triggers',
        initialDescription:
          'The White-Green-Red corner is in the top layer directly above its slot, but the White sticker is pointing straight UP to the ceiling.',
        initialSetupMoves: [
          'R', 'U', "R'", "U'",
          'R', 'U', "R'", "U'",
          'R', 'U', "R'", "U'",
        ],
        targetDescription:
          'The corner is rotated by 120° and locked into the base with white facing down.',
        targetSetupMoves: [],
        algorithmName: 'Triple Sexy Move: (R U R\' U\') × 3',
        algorithmMoves: [
          'R', 'U', "R'", "U'",
          'R', 'U', "R'", "U'",
          'R', 'U', "R'", "U'",
        ],
        detailedSteps: [
          {
            move: 'R',
            stepTitle: 'Trigger 1 (Moves 1-4): Reorient from Top',
            handAction: 'Perform R U R\' U\' once.',
            pieceEffect: 'Inserts the corner into the slot but with white facing front.',
            visualCue: 'White sticker moves from ceiling to front face.',
          },
          {
            move: 'U',
            stepTitle: 'Trigger 2 (Moves 5-8): Pop and Twist',
            handAction: 'Perform R U R\' U\' a second time.',
            pieceEffect: 'Pops the corner back to the top with white facing right.',
            visualCue: 'White sticker is now on the right side.',
          },
          {
            move: "R'",
            stepTitle: 'Trigger 3 (Moves 9-12): Final Insertion',
            handAction: 'Perform R U R\' U\' a third time.',
            pieceEffect: 'Docks the corner cleanly into the white base.',
            visualCue: 'White sticker is now flush on the bottom.',
          },
          {
            move: "U'",
            stepTitle: 'Complete',
            handAction: 'Finish the sequence.',
            pieceEffect: 'Corner solved.',
            visualCue: 'First layer is solid.',
          },
        ],
        proTips: [
          'When white faces UP, repeat (R U R\' U\') exactly 3 times!',
          'Never rotate the whole cube; keep the white base on the bottom at all times.',
        ],
      },
      {
        caseId: 'case-corner-trapped',
        caseName: 'Possibility 3: Corner Trapped in Bottom Slot',
        badge: 'Extraction',
        initialDescription:
          'The corner is already in the bottom layer, but it is twisted backwards or in the wrong slot.',
        initialSetupMoves: ['R', 'U', "R'", "U'"],
        targetDescription:
          'The corner is extracted into the top layer, ready to be positioned correctly.',
        targetSetupMoves: [],
        algorithmName: 'Extract Corner: R U R\' U\'',
        algorithmMoves: ['R', 'U', "R'", "U'"],
        detailedSteps: [
          {
            move: 'R',
            stepTitle: 'Step 1: Lift Trapped Corner (R)',
            handAction: 'Rotate right face 90° away from you.',
            pieceEffect: 'Lifts the trapped corner up to the top layer.',
            visualCue: 'The corner rises up to the top-front-right.',
          },
          {
            move: 'U',
            stepTitle: 'Step 2: Move Away (U)',
            handAction: 'Push top layer 90° clockwise.',
            pieceEffect: 'Kicks the corner out of the right column.',
            visualCue: 'Corner moves away from the slot.',
          },
          {
            move: "R'",
            stepTitle: 'Step 3: Restore Base (R\')',
            handAction: 'Pull right face 90° towards you.',
            pieceEffect: 'Restores the white cross base intact.',
            visualCue: 'White cross is preserved.',
          },
          {
            move: "U'",
            stepTitle: 'Step 4: Align (U\')',
            handAction: 'Reset top layer.',
            pieceEffect: 'Ready to re-insert properly.',
            visualCue: 'Corner is now free in the top layer.',
          },
        ],
        proTips: [
          'Whenever a corner is in the wrong place on the bottom, a single Sexy Move (R U R\' U\') pops it right out!',
        ],
      },
    ],
  },

  // STAGE 3: SECOND LAYER EDGES
  {
    stageId: 'second-layer-edges',
    stageNumber: 3,
    title: 'Stage 3: Second Layer (Middle Edges)',
    subtitle: 'Pairing corners and edges together to finish the bottom two layers (F2L)',
    overview:
      'Find an edge on the top layer that has NO yellow sticker. Match its front color with the matching center. Look at its top color to decide whether it needs to insert into the RIGHT slot or the LEFT slot.',
    keyTakeaway:
      'This algorithm works by moving the edge away, lifting the corner out to form a connected "pair", and then cleanly inserting both pieces together.',
    focusCoords: [
      [0, 1, 1],
      [1, 0, 1],
      [-1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 0, 0],
    ],
    cases: [
      {
        caseId: 'case-insert-right',
        caseName: 'Possibility 1: Edge Inserts to the RIGHT',
        badge: 'Right Insertion',
        initialDescription:
          'The Green-Red edge is on the top layer with Green matching the front Green center. The top sticker is Red, meaning it must insert into the RIGHT slot.',
        initialSetupMoves: ["F'", "U'", 'F', 'U', 'R', 'U', "R'", "U'"],
        targetDescription:
          'The Green-Red edge is locked into the middle-right slot between the Green and Red centers.',
        targetSetupMoves: [],
        algorithmName: 'Right Insertion: U R U\' R\' U\' F\' U F',
        algorithmMoves: ['U', 'R', "U'", "R'", "U'", "F'", 'U', 'F'],
        detailedSteps: [
          {
            move: 'U',
            stepTitle: 'Step 1: Move Edge AWAY (U)',
            handAction: 'Turn the top layer 90° clockwise.',
            pieceEffect: 'Moves the edge piece away from its destination slot.',
            visualCue: 'Edge moves away to the left side.',
          },
          {
            move: 'R',
            stepTitle: 'Step 2: Lift Corner (R)',
            handAction: 'Turn the right face 90° away from you.',
            pieceEffect: 'Lifts the matching corner out of the bottom layer.',
            visualCue: 'White corner rises up.',
          },
          {
            move: "U'",
            stepTitle: 'Step 3: Pair Corner with Edge (U\')',
            handAction: 'Turn top layer 90° counter-clockwise.',
            pieceEffect: 'Brings the corner and edge together to form a matched pair.',
            visualCue: 'The corner and edge are now joined side-by-side.',
          },
          {
            move: "R'",
            stepTitle: 'Step 4: Reseat Slot (R\')',
            handAction: 'Turn right face 90° towards you.',
            pieceEffect: 'Restores the white base.',
            visualCue: 'The pair is now in the top layer together.',
          },
          {
            move: "U'",
            stepTitle: 'Step 5: Position Pair for Insertion (U\')',
            handAction: 'Turn top layer 90° counter-clockwise.',
            pieceEffect: 'Positions the pair over the front face.',
            visualCue: 'Pair lines up in front of the slot.',
          },
          {
            move: "F'",
            stepTitle: 'Step 6: Open Front Slot (F\')',
            handAction: 'Turn front face 90° counter-clockwise.',
            pieceEffect: 'Opens up the front face slot.',
            visualCue: 'White base tilts up to receive the pair.',
          },
          {
            move: 'U',
            stepTitle: 'Step 7: Dock Pair (U)',
            handAction: 'Turn top layer 90° clockwise.',
            pieceEffect: 'Slots the combined corner-edge pair into the middle layer.',
            visualCue: 'White stickers line up in a complete block.',
          },
          {
            move: 'F',
            stepTitle: 'Step 8: Close Front Slot (F)',
            handAction: 'Turn front face 90° clockwise.',
            pieceEffect: 'Locks the middle edge and bottom layer completely.',
            visualCue: 'Second layer edge is 100% solved!',
          },
        ],
        proTips: [
          'Mnemonic: Move away → Sexy Move → Move to front → Reverse Front insert.',
        ],
      },
      {
        caseId: 'case-insert-left',
        caseName: 'Possibility 2: Edge Inserts to the LEFT',
        badge: 'Left Insertion (Mirror)',
        initialDescription:
          'The Green-Orange edge is on the top layer with Green matching the front center. The top sticker is Orange, meaning it must insert to the LEFT.',
        initialSetupMoves: ['F', 'U', "F'", "U'", "L'", "U'", 'L', 'U'],
        targetDescription:
          'The edge is locked into the middle-left slot between Green and Orange centers.',
        targetSetupMoves: [],
        algorithmName: 'Left Insertion: U\' L\' U L U F U\' F\'',
        algorithmMoves: ["U'", "L'", 'U', 'L', 'U', 'F', "U'", "F'"],
        detailedSteps: [
          {
            move: "U'",
            stepTitle: 'Step 1: Move Edge AWAY (U\')',
            handAction: 'Turn the top layer 90° counter-clockwise.',
            pieceEffect: 'Moves edge away from left slot.',
            visualCue: 'Edge moves to the right.',
          },
          {
            move: "L'",
            stepTitle: 'Step 2: Lift Left Slot (L\')',
            handAction: 'Turn left face 90° away from you.',
            pieceEffect: 'Lifts the left corner out.',
            visualCue: 'Left white corner rises up.',
          },
          {
            move: 'U',
            stepTitle: 'Step 3: Pair Up (U)',
            handAction: 'Turn top face 90° clockwise.',
            pieceEffect: 'Pairs the corner and edge together.',
            visualCue: 'Corner and edge join side-by-side.',
          },
          {
            move: 'L',
            stepTitle: 'Step 4: Restore Base (L)',
            handAction: 'Turn left face 90° towards you.',
            pieceEffect: 'Restores the white base.',
            visualCue: 'Pair sits ready on top.',
          },
          {
            move: 'U',
            stepTitle: 'Step 5: Position for Front (U)',
            handAction: 'Turn top face 90° clockwise.',
            pieceEffect: 'Positions pair in front.',
            visualCue: 'Pair is above front slot.',
          },
          {
            move: 'F',
            stepTitle: 'Step 6: Open Front (F)',
            handAction: 'Turn front face 90° clockwise.',
            pieceEffect: 'Exposes the receiving slot.',
            visualCue: 'Slot is open.',
          },
          {
            move: "U'",
            stepTitle: 'Step 7: Insert Pair (U\')',
            handAction: 'Turn top face 90° counter-clockwise.',
            pieceEffect: 'Inserts pair into the slot.',
            visualCue: 'White line reconnects.',
          },
          {
            move: "F'",
            stepTitle: 'Step 8: Close Front (F\')',
            handAction: 'Turn front face 90° counter-clockwise.',
            pieceEffect: 'Locks middle layer.',
            visualCue: 'Second layer edge is solved!',
          },
        ],
        proTips: [
          'Left insertion is the exact mirror of Right insertion: substitute R with L\' and U with U\'.',
        ],
      },
    ],
  },

  // STAGE 4: THE YELLOW CROSS
  {
    stageId: 'yellow-cross',
    stageNumber: 4,
    title: 'Stage 4: The Yellow Cross',
    subtitle: 'Orienting the top edges with F (R U R\' U\') F\'',
    overview:
      'Look at the top (Yellow) face. Ignoring corners, the yellow edges form one of 3 patterns: a Center Dot, an \'L\'-shape, or a Horizontal Line. A single universal algorithm transitions through them: Dot → L-shape → Line → Yellow Cross.',
    keyTakeaway:
      'The leading F move temporality rotates the front face down, converting an edge orientation flip into a simple Sexy Move trigger, and F\' restores the first two layers intact.',
    focusCoords: [
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, -1],
      [-1, 1, 0],
    ],
    cases: [
      {
        caseId: 'case-l-shape',
        caseName: 'Possibility 1: The \'L\'-Shape (90° Angle)',
        badge: 'Most Common',
        initialDescription:
          'Two adjacent yellow edges are facing up, forming an \'L\' shape. Hold the cube so the two edges point to 12 o\'clock (Back) and 9 o\'clock (Left).',
        initialSetupMoves: ['F', 'R', 'U', "R'", "U'", "F'"],
        targetDescription:
          'All 4 yellow edges face up, forming a complete Yellow Cross.',
        targetSetupMoves: [],
        algorithmName: 'Yellow Cross: F (R U R\' U\') F\'',
        algorithmMoves: ['F', 'R', 'U', "R'", "U'", "F'"],
        detailedSteps: [
          {
            move: 'F',
            stepTitle: 'Step 1: Tilt Front Face Clockwise (F)',
            handAction: 'Rotate the front face 90° clockwise.',
            pieceEffect:
              'Tilts the solved bottom-left pair out of danger and exposes the middle layer.',
            visualCue: 'Two white stickers appear on the left side of the front face.',
          },
          {
            move: 'R',
            stepTitle: 'Step 2: Lift Right (R)',
            handAction: 'Turn the right face 90° away from you.',
            pieceEffect: 'Enters the Sexy Move trigger.',
            visualCue: 'Right column rises.',
          },
          {
            move: 'U',
            stepTitle: 'Step 3: Spin Top (U)',
            handAction: 'Push top layer 90° clockwise.',
            pieceEffect: 'Reorients the top yellow edge.',
            visualCue: 'Top layer turns.',
          },
          {
            move: "R'",
            stepTitle: 'Step 4: Lower Right (R\')',
            handAction: 'Pull right face 90° towards you.',
            pieceEffect: 'Restores right column.',
            visualCue: 'Right column returns.',
          },
          {
            move: "U'",
            stepTitle: 'Step 5: Reset Top (U\')',
            handAction: 'Push top layer 90° counter-clockwise.',
            pieceEffect: 'Completes the Sexy Move trigger.',
            visualCue: 'Yellow edges form a line.',
          },
          {
            move: "F'",
            stepTitle: 'Step 6: Restore Front Face (F\')',
            handAction: 'Rotate the front face 90° counter-clockwise.',
            pieceEffect:
              'Restores the bottom two layers and locks the Yellow Cross in place!',
            visualCue: 'White base is fully intact, and yellow cross appears on top!',
          },
        ],
        proTips: [
          'Remember the sequence acronym: FUR - U\'R\'F\' ("Fur-Urff").',
          'Always verify the L-shape points to 12 and 9 o\'clock before executing.',
        ],
      },
      {
        caseId: 'case-horizontal-line',
        caseName: 'Possibility 2: The Horizontal Line',
        badge: '1-Step Cross',
        initialDescription:
          'Two opposite yellow edges form a straight line across the top face. Hold the line HORIZONTALLY (from 9 o\'clock to 3 o\'clock).',
        initialSetupMoves: ['F', 'R', 'U', "R'", "U'", "F'"],
        targetDescription:
          'The line expands into a full Yellow Cross.',
        targetSetupMoves: [],
        algorithmName: 'Line to Cross: F (R U R\' U\') F\'',
        algorithmMoves: ['F', 'R', 'U', "R'", "U'", "F'"],
        detailedSteps: [
          {
            move: 'F',
            stepTitle: 'Step 1: Front Clockwise (F)',
            handAction: 'Turn front face 90° clockwise.',
            pieceEffect: 'Opens working zone.',
            visualCue: 'Front face turns.',
          },
          {
            move: 'R',
            stepTitle: 'Step 2: Right Up (R)',
            handAction: 'Turn right face 90° up.',
            pieceEffect: 'Sexy move start.',
            visualCue: 'Right column rises.',
          },
          {
            move: 'U',
            stepTitle: 'Step 3: Top Clockwise (U)',
            handAction: 'Push top 90° clockwise.',
            pieceEffect: 'Rotates top.',
            visualCue: 'Yellow edges turn.',
          },
          {
            move: "R'",
            stepTitle: 'Step 4: Right Down (R\')',
            handAction: 'Pull right face 90° down.',
            pieceEffect: 'Restores column.',
            visualCue: 'Column descends.',
          },
          {
            move: "U'",
            stepTitle: 'Step 5: Top Counter-Clockwise (U\')',
            handAction: 'Push top 90° counter-clockwise.',
            pieceEffect: 'Completes trigger.',
            visualCue: 'All 4 yellow edges match.',
          },
          {
            move: "F'",
            stepTitle: 'Step 6: Front Counter-Clockwise (F\')',
            handAction: 'Turn front face 90° counter-clockwise.',
            pieceEffect: 'Restores bottom two layers.',
            visualCue: 'Complete Yellow Cross formed!',
          },
        ],
        proTips: [
          'If the line is held vertically, the algorithm will not solve the cross! Keep it strictly horizontal.',
        ],
      },
      {
        caseId: 'case-center-dot',
        caseName: 'Possibility 3: The Center Dot Only',
        badge: 'Double Application',
        initialDescription:
          'None of the 4 yellow edges have yellow facing up—only the yellow center dot is visible.',
        initialSetupMoves: [
          'F', 'R', 'U', "R'", "U'", "F'",
          'U2',
          'F', 'R', 'U', "R'", "U'", "F'",
        ],
        targetDescription:
          'Transitions from Dot to L-shape, then to Cross.',
        targetSetupMoves: [],
        algorithmName: 'Dot Transition: F (R U R\' U\') F\'',
        algorithmMoves: ['F', 'R', 'U', "R'", "U'", "F'"],
        detailedSteps: [
          {
            move: 'F',
            stepTitle: 'Step 1-6: Perform F (R U R\' U\') F\'',
            handAction: 'Execute the algorithm from any orientation.',
            pieceEffect: 'Transforms the Dot into the \'L\'-Shape.',
            visualCue: 'An L-shape will immediately appear on the yellow face.',
          },
        ],
        proTips: [
          'Once the L-shape appears, hold it at 12 and 9 o\'clock and repeat the algorithm.',
        ],
      },
    ],
  },

  // STAGE 5: ORIENT YELLOW FACE (THE SUNE)
  {
    stageId: 'yellow-face-sune',
    stageNumber: 5,
    title: 'Stage 5: Orient Yellow Face (The Sune)',
    subtitle: 'Twisting all yellow corners upwards using the famous Sune algorithm',
    overview:
      'With the yellow cross completed, we must orient the remaining yellow corners so the entire top face becomes yellow. The legendary "Sune" algorithm twists 3 corners simultaneously while keeping the cross and first two layers intact.',
    keyTakeaway:
      'Due to orientation parity (conservation of corner twists modulo 3), you can never have just ONE corner twisted by itself on a legal cube.',
    focusCoords: [
      [0, 1, 0],
      [1, 1, 1],
      [-1, 1, 1],
      [1, 1, -1],
      [-1, 1, -1],
    ],
    cases: [
      {
        caseId: 'case-the-fish',
        caseName: 'Possibility 1: The "Fish" (1 Yellow Corner)',
        badge: 'Direct Sune',
        initialDescription:
          'Exactly ONE corner is yellow, resembling a fish swimming. Hold the cube so the fish\'s nose points towards the BOTTOM-LEFT (front-left). The front-right corner has yellow facing front.',
        initialSetupMoves: ['R', 'U2', "R'", "U'", 'R', "U'", "R'"],
        targetDescription:
          'The entire top face becomes a solid, uniform yellow plane.',
        targetSetupMoves: [],
        algorithmName: 'The Sune: R U R\' U R U2 R\'',
        algorithmMoves: ['R', 'U', "R'", 'U', 'R', 'U2', "R'"],
        detailedSteps: [
          {
            move: 'R',
            stepTitle: 'Step 1: Lift Right Pair (R)',
            handAction: 'Turn the right face 90° away from you.',
            pieceEffect: 'Lifts the front-right corner-edge pair up.',
            visualCue: 'White pair rises into the top layer.',
          },
          {
            move: 'U',
            stepTitle: 'Step 2: Advance Top 90° (U)',
            handAction: 'Push top layer 90° clockwise with right index finger.',
            pieceEffect: 'Moves the pair forward.',
            visualCue: 'Pair travels to the back-right.',
          },
          {
            move: "R'",
            stepTitle: 'Step 3: Lower Right Slot (R\')',
            handAction: 'Pull right face 90° towards you.',
            pieceEffect: 'Temporarily reseats the right column.',
            visualCue: 'Right column goes down.',
          },
          {
            move: 'U',
            stepTitle: 'Step 4: Advance Top 90° Again (U)',
            handAction: 'Push top layer 90° clockwise again.',
            pieceEffect: 'Pushes the pair around the top perimeter.',
            visualCue: 'Pair travels to the back-left.',
          },
          {
            move: 'R',
            stepTitle: 'Step 5: Lift Right Slot Back Up (R)',
            handAction: 'Turn right face 90° away from you.',
            pieceEffect: 'Prepares the slot to receive the pair.',
            visualCue: 'Right column rises to meet the pair.',
          },
          {
            move: 'U2',
            stepTitle: 'Step 6: Spin Top 180° All The Way Home (U2)',
            handAction: 'Double-flick top layer 180° clockwise.',
            pieceEffect: 'Snaps the pair all the way across directly into the slot.',
            visualCue: 'White pair docks flush into the slot.',
          },
          {
            move: "R'",
            stepTitle: 'Step 7: Lower Slot Cleanly (R\')',
            handAction: 'Pull right face 90° towards you.',
            pieceEffect: 'Locks the pair back into the white base.',
            visualCue: 'Entire top face turns solid yellow!',
          },
        ],
        proTips: [
          'Fish pattern rule: Always point the fish head to the bottom-left.',
          'If the front-right corner does not show yellow, do Sune once, reposition the fish to bottom-left, and do Sune again.',
        ],
      },
      {
        caseId: 'case-no-corners-yellow',
        caseName: 'Possibility 2: Cross with 0 Yellow Corners',
        badge: 'Blinker / Headlights',
        initialDescription:
          'Only the yellow cross is visible; none of the 4 corners show yellow on top. Yellow stickers point outwards.',
        initialSetupMoves: [
          'R', 'U', "R'", 'U', 'R', 'U2', "R'",
          'U',
          'R', 'U', "R'", 'U', 'R', 'U2', "R'",
        ],
        targetDescription:
          'Produces the Fish pattern, from which a single Sune solves the face.',
        targetSetupMoves: ['R', 'U2', "R'", "U'", 'R', "U'", "R'"],
        algorithmName: 'Sune Primer: R U R\' U R U2 R\'',
        algorithmMoves: ['R', 'U', "R'", 'U', 'R', 'U2', "R'"],
        detailedSteps: [
          {
            move: 'R',
            stepTitle: 'Perform Sune Once',
            handAction: 'Execute R U R\' U R U2 R\'.',
            pieceEffect: 'Twists 3 corners, creating the Fish pattern.',
            visualCue: 'Watch for the Fish to appear.',
          },
        ],
        proTips: [
          'Hold the cube so yellow headlights on corners point to the left before executing.',
        ],
      },
    ],
  },

  // STAGE 6: POSITION YELLOW CORNERS
  {
    stageId: 'permute-corners',
    stageNumber: 6,
    title: 'Stage 6: Position Yellow Corners',
    subtitle: 'Detecting "Headlights" and swapping corners into their rightful slots',
    overview:
      'The entire yellow face is now yellow, but the corners might be in the wrong slots. Look around the sides of the top layer for "Headlights"—two corners on the same face that share the same color. Place headlights in the BACK (or left) and execute the corner permutation algorithm.',
    keyTakeaway:
      'Permutation parity requires corner swaps and edge swaps to share the same sign (even permutations in the alternating group A_n).',
    focusCoords: [
      [1, 1, 1],
      [-1, 1, 1],
      [1, 1, -1],
      [-1, 1, -1],
    ],
    cases: [
      {
        caseId: 'case-headlights',
        caseName: 'Possibility 1: Headlights Found on One Face',
        badge: 'Standard Corner Swap',
        initialDescription:
          'Two corners on the same face share the same color (Headlights). Hold the headlights at the BACK (away from you).',
        initialSetupMoves: ["L'", 'U', 'R', "U'", 'L', "U'", 'R', "U'"],
        targetDescription:
          'All 4 corners match their respective side centers on all 4 faces.',
        targetSetupMoves: [],
        algorithmName: 'Corner Permutation: U R U\' L\' U R\' U\' L',
        algorithmMoves: ['U', 'R', "U'", "L'", 'U', "R'", "U'", 'L'],
        detailedSteps: [
          {
            move: 'U',
            stepTitle: 'Step 1: Top Clockwise (U)',
            handAction: 'Push top layer 90° clockwise.',
            pieceEffect: 'Setup move.',
            visualCue: 'Top rotates.',
          },
          {
            move: 'R',
            stepTitle: 'Step 2: Right Up (R)',
            handAction: 'Turn right face 90° away from you.',
            pieceEffect: 'Lifts right corner.',
            visualCue: 'Right corner rises.',
          },
          {
            move: "U'",
            stepTitle: 'Step 3: Top Counter-Clockwise (U\')',
            handAction: 'Push top layer 90° counter-clockwise.',
            pieceEffect: 'Clears top layer.',
            visualCue: 'Top rotates back.',
          },
          {
            move: "L'",
            stepTitle: 'Step 4: Left Up (L\')',
            handAction: 'Turn left face 90° away from you.',
            pieceEffect: 'Lifts left corner.',
            visualCue: 'Left corner rises.',
          },
          {
            move: 'U',
            stepTitle: 'Step 5: Top Clockwise (U)',
            handAction: 'Push top layer 90° clockwise.',
            pieceEffect: 'Aligns right corner.',
            visualCue: 'Right corner re-pairs.',
          },
          {
            move: "R'",
            stepTitle: 'Step 6: Right Down (R\')',
            handAction: 'Pull right face 90° towards you.',
            pieceEffect: 'Reseats right column.',
            visualCue: 'Right column descends.',
          },
          {
            move: "U'",
            stepTitle: 'Step 7: Top Counter-Clockwise (U\')',
            handAction: 'Push top layer 90° counter-clockwise.',
            pieceEffect: 'Aligns left corner.',
            visualCue: 'Left corner re-pairs.',
          },
          {
            move: 'L',
            stepTitle: 'Step 8: Left Down (L)',
            handAction: 'Pull left face 90° towards you.',
            pieceEffect: 'Reseats left column and solves all 4 corners!',
            visualCue: 'All 4 corners now have matching headlights!',
          },
        ],
        proTips: [
          'If no face has headlights, execute this algorithm once from any angle; headlights will immediately appear on one face!',
        ],
      },
    ],
  },

  // STAGE 7: PERMUTE YELLOW EDGES (SOLVED!)
  {
    stageId: 'permute-edges',
    stageNumber: 7,
    title: 'Stage 7: Permute Yellow Edges (Solved!)',
    subtitle: 'The 3-edge cycle: Finishing the Rubik\'s Cube with the U-Permutation',
    overview:
      'All corners are solved! Look at the 4 top edges. Exactly one edge is fully solved (or none). Place the solved edge at the BACK. The remaining 3 edges need to cycle either clockwise or counter-clockwise to finish the cube!',
    keyTakeaway:
      'A 3-cycle of edges is an even permutation (two 2-transpositions), which perfectly preserves cube parity laws. When this completes, the cube enters the identity state!',
    focusCoords: [
      [0, 1, 1],
      [1, 1, 0],
      [-1, 1, 0],
      [0, 1, -1],
    ],
    cases: [
      {
        caseId: 'case-clockwise-u-perm',
        caseName: 'Possibility 1: 3 Edges Cycle Clockwise',
        badge: 'Ua Permutation',
        initialDescription:
          'One edge is completely solved (hold it at the BACK). The remaining 3 edges (Front, Left, Right) need to cycle clockwise to solve the cube.',
        initialSetupMoves: ['R2', 'U', 'R', 'U', "R'", "U'", "R'", "U'", "R'", 'U', "R'"],
        targetDescription:
          '🎉 THE RUBIK\'S CUBE IS 100% SOLVED! All faces are uniform.',
        targetSetupMoves: [],
        algorithmName: 'Clockwise U-Perm: R U\' R U R U R U\' R\' U\' R2',
        algorithmMoves: ['R', "U'", 'R', 'U', 'R', 'U', 'R', "U'", "R'", "U'", 'R2'],
        detailedSteps: [
          {
            move: 'R',
            stepTitle: 'Step 1: R',
            handAction: 'Turn right face 90° away from you.',
            pieceEffect: 'Lifts right pair.',
            visualCue: 'Right column rises.',
          },
          {
            move: "U'",
            stepTitle: 'Step 2: U\'',
            handAction: 'Push top 90° counter-clockwise.',
            pieceEffect: 'Rotates pair.',
            visualCue: 'Top rotates.',
          },
          {
            move: 'R',
            stepTitle: 'Step 3: R',
            handAction: 'Turn right face 90° up.',
            pieceEffect: 'Advances cycle.',
            visualCue: 'Right column rises.',
          },
          {
            move: 'U',
            stepTitle: 'Step 4: U',
            handAction: 'Push top 90° clockwise.',
            pieceEffect: 'Advances cycle.',
            visualCue: 'Top rotates.',
          },
          {
            move: 'R',
            stepTitle: 'Step 5: R',
            handAction: 'Turn right face 90° up.',
            pieceEffect: 'Advances cycle.',
            visualCue: 'Right column rises.',
          },
          {
            move: 'U',
            stepTitle: 'Step 6: U',
            handAction: 'Push top 90° clockwise.',
            pieceEffect: 'Advances cycle.',
            visualCue: 'Top rotates.',
          },
          {
            move: 'R',
            stepTitle: 'Step 7: R',
            handAction: 'Turn right face 90° up.',
            pieceEffect: 'Advances cycle.',
            visualCue: 'Right column rises.',
          },
          {
            move: "U'",
            stepTitle: 'Step 8: U\'',
            handAction: 'Push top 90° counter-clockwise.',
            pieceEffect: 'Begins alignment.',
            visualCue: 'Top rotates.',
          },
          {
            move: "R'",
            stepTitle: 'Step 9: R\'',
            handAction: 'Turn right face 90° down.',
            pieceEffect: 'Locks left side.',
            visualCue: 'Column descends.',
          },
          {
            move: "U'",
            stepTitle: 'Step 10: U\'',
            handAction: 'Push top 90° counter-clockwise.',
            pieceEffect: 'Aligns all edges.',
            visualCue: 'Edges line up.',
          },
          {
            move: 'R2',
            stepTitle: 'Step 11: R2 (Finish!)',
            handAction: 'Turn right face 180° all the way around.',
            pieceEffect: 'Locks all layers into the pristine solved state!',
            visualCue: 'THE CUBE IS COMPLETELY SOLVED! 🏆',
          },
        ],
        proTips: [
          'If no edge is solved at the start, perform this algorithm once from any angle; one edge will immediately become solved!',
        ],
      },
    ],
  },
];
