import type { TranslationSchema } from '../types';

export const en: TranslationSchema = {
  nav: {
    brandSubtitle: '3D Tutorial & Graph Theory',
    tutorial: '3D Tutorial',
    graph: 'Graph Theory',
    sandbox: '3D Sandbox',
    quiz: 'Mastery Quiz',
    shortcuts: 'Shortcuts',
    shortcutsTitle: 'Keyboard Shortcuts',
    primeDoubleHint: 'Hold Shift + Letter to perform a counter-clockwise (prime) move (e.g. R\').',
    timerHint: 'Hold Spacebar in Sandbox to start speedcube timer!',
  },
  cube3d: {
    dragHint: 'Drag to orbit 3D view',
    turn: 'Turn',
    clockwise: '90° Clockwise',
    counterClockwise: '90° Counter-Clockwise',
    halfTurn: '180° Half Turn',
    faces: {
      U: 'Up (White)',
      D: 'Down (Yellow)',
      R: 'Right (Red)',
      L: 'Left (Orange)',
      F: 'Front (Green)',
      B: 'Back (Blue)',
      M: 'Middle Slice (M)',
      E: 'Equator Slice (E)',
      S: 'Standing Slice (S)',
    },
  },
  tutorial: {
    stageProgress: 'Stage',
    focusModeOn: 'Focus Mode ON',
    focusModeOff: 'Focus Mode OFF',
    focusTooltip: 'Focus mode dims non-target pieces so you can see key pieces clearly',
    keyIntuition: 'Key Intuition',
    caseSelectorTitle: 'Select Case / Starting Possibility',
    caseSelectorPrompt: 'Which scenario matches your cube?',
    howToIdentify: 'How to identify this case:',
    operationGuideTitle: 'Step-by-Step Operation Guide',
    moveProgress: 'Move',
    howToPerform: 'How to perform this turn:',
    pieceEffectLabel: 'Mechanical Effect on Pieces:',
    algorithmComplete: 'Algorithm Complete!',
    algorithmCompleteDesc: 'Target state reached for this case. Verify against your physical cube!',
    restartCase: 'Restart Case',
    resetCase: 'Reset Case',
    animateTurn: 'Animate This Turn',
    rotating: 'Rotating...',
    autoPlay: 'Auto Play',
    pause: 'Pause',
    initialState: 'Initial State',
    guided3D: 'Guided 3D',
    targetGoal: 'Target Goal',
    showingInitial: 'Showing Initial Starting Pattern',
    showingTarget: 'Showing Desired Target State',
    aimingFor: 'What you are aiming for',
    dragToInspect: 'Drag to inspect',
    targetGoalLabel: 'Target Goal:',
    reset3DView: 'Reset 3D View',
    animationSpeedHint: 'Turns animate in 3D smoothly at 0.55s',
    prevStage: 'Previous Stage',
    nextStage: 'Next Stage',
    speedcuberTips: 'Speedcuber Tips for',
  },
  stages: {
    'anatomy-notation': {
      title: 'Stage 0: Anatomy & Notation',
      subtitle: 'Understanding piece types, degrees of freedom, and face rotation mechanics',
      overview:
        'The Rubik\'s Cube has 3 distinct species of pieces: 6 Centers (fixed in place), 12 Edges (2 colors), and 8 Corners (3 colors). Before attempting to solve, you must learn how each face rotates clockwise and counter-clockwise.',
      keyTakeaway:
        'A corner piece can NEVER become an edge piece, and an edge can NEVER become a corner. You do not solve stickers; you move entire 3D pieces into their rightful slots.',
      cases: {
        'basic-turns': {
          caseName: 'Basic Face Rotations (R, U, F)',
          badge: 'Fundamental',
          initialDescription:
            'Starting from a solved cube. Watch how each face turn affects only the 9 pieces on that face while leaving the other 17 pieces completely untouched.',
          targetDescription:
            'After performing R U R\' U\', you will see the right-front corner and edge displaced and ready to be understood.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Turn Right Face Clockwise (R)',
              handAction:
                'Grip the right layer with your right thumb on the front and fingers on the back. Rotate the entire right layer 90° away from you (clockwise).',
              pieceEffect:
                'Lifts the bottom-front-right corner up into the top layer and exposes the middle-right slice.',
            },
            {
              stepTitle: 'Step 2: Turn Top Face Clockwise (U)',
              handAction:
                'Use your right index finger to push the top-back-right corner towards the left, turning the top face 90° clockwise.',
              pieceEffect:
                'Spins the top layer, moving the newly lifted corner away from the right layer.',
            },
            {
              stepTitle: 'Step 3: Turn Right Face Counter-Clockwise (R\')',
              handAction:
                'Grip the right layer again and pull it 90° towards you (counter-clockwise).',
              pieceEffect:
                'Restores the right column back down to the bottom layer.',
            },
            {
              stepTitle: 'Step 4: Turn Top Face Counter-Clockwise (U\')',
              handAction:
                'Use your left index finger to push the top-back-left corner towards the right, turning the top face 90° counter-clockwise.',
              pieceEffect:
                'Resets the top layer alignment, completing the 4-move cycle.',
            },
          ],
          proTips: [
            'Clockwise is defined as looking directly square at that face.',
            'A prime mark (\') denotes a counter-clockwise 90° turn.',
            'A number 2 (e.g., U2) denotes a 180° half-turn in either direction.',
          ],
        },
      },
    },
    'white-cross': {
      title: 'Stage 1: The White Cross',
      subtitle: 'Anchor the foundation: align white edges with both White and matching side centers',
      overview:
        'The objective is to place all 4 White edge pieces on the White face. Crucially, each white edge\'s secondary color MUST match its adjacent center (Green with Green, Red with Red, Blue with Blue, Orange with Orange).',
      keyTakeaway:
        'A White cross with mismatched side colors is NOT solved! Each edge piece is an anchor connecting two faces simultaneously.',
      cases: {
        'case-daisy-plunge': {
          caseName: 'Possibility 1: Daisy Aligned & 180° Plunge',
          badge: 'Most Common',
          initialDescription:
            'The white-green edge is gathered around the yellow center (The Daisy). Its green sticker is already matched with the Green center.',
          targetDescription:
            'The white-green edge is locked on the white face, perfectly connecting White to Green.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Turn Front Face 180° (F2)',
              handAction: 'Grip the front face and rotate it 180° (two quarter turns) clockwise.',
              pieceEffect:
                'Transports the white-green edge from the top yellow layer straight down into the white base.',
            },
          ],
          proTips: [
            'The Daisy Method: Always gather the 4 white edges around the Yellow center first—it requires zero algorithm memorization!',
            'Once the side color matches its center, a simple 180° plunge (F2, R2, etc.) sends it home perfectly.',
          ],
        },
        'case-flipped-edge': {
          caseName: 'Possibility 2: Flipped Edge on Front Face',
          badge: 'Orientation Fix',
          initialDescription:
            'The white-green edge is in the correct slot between White and Green centers, but it is flipped backwards: the green sticker is on the white face!',
          targetDescription:
            'The edge is flipped cleanly so white faces down and green matches the green center.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Turn Front Counter-Clockwise (F\')',
              handAction: 'Rotate the front face 90° counter-clockwise.',
              pieceEffect: 'Pops the flipped edge into the right middle layer.',
            },
            {
              stepTitle: 'Step 2: Turn Top Counter-Clockwise (U\')',
              handAction: 'Push the top layer with your left index finger 90°.',
              pieceEffect: 'Clears space in the top layer to receive the edge.',
            },
            {
              stepTitle: 'Step 3: Turn Right Face Clockwise (R)',
              handAction: 'Rotate the right face 90° away from you.',
              pieceEffect: 'Lifts the edge up into the top layer correctly oriented.',
            },
            {
              stepTitle: 'Step 4: Turn Top Face Clockwise (U)',
              handAction: 'Push the top layer back 90° to align with green.',
              pieceEffect: 'Aligns the edge over the green center ready for plunge.',
            },
          ],
          proTips: [
            'If an edge has white on the side instead of the top, moving it to the middle layer allows a simple insertion.',
          ],
        },
      },
    },
    'first-layer-corners': {
      title: 'Stage 2: First Layer Corners',
      subtitle: 'Mastering the fundamental "Sexy Move" [R, U] = R U R\' U\' to complete the white base',
      overview:
        'With the white cross established, we insert the 4 white corners. Each corner has 3 colors (e.g. White-Green-Red). We place it directly above its target slot and repeat the 4-move trigger (R U R\' U\') until it docks with white pointing down.',
      keyTakeaway:
        'The Sexy Move [R, U] = R U R\' U\' is a commutator that isolates changes to a localized slot while preserving the rest of the puzzle intact.',
      cases: {
        'case-white-facing-right': {
          caseName: 'Possibility 1: White Sticker Facing Right',
          badge: '1 Trigger (Fastest)',
          initialDescription:
            'The White-Green-Red corner is in the top layer directly above the Green-Red slot. The White sticker is facing towards the RIGHT.',
          targetDescription:
            'The corner is inserted into the bottom layer with white facing down, matching both Green and Red centers.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Lift Target Slot (R)',
              handAction: 'Rotate the right face 90° away from you.',
              pieceEffect: 'Lifts the bottom-right slot up to meet the top layer.',
            },
            {
              stepTitle: 'Step 2: Connect the Corner (U)',
              handAction: 'Push the top layer 90° clockwise with your right index finger.',
              pieceEffect: 'Connects the corner piece directly into the raised slot.',
            },
            {
              stepTitle: 'Step 3: Lower Slot to Base (R\')',
              handAction: 'Pull the right face 90° towards you.',
              pieceEffect: 'Returns the slot and corner down into the solved white base.',
            },
            {
              stepTitle: 'Step 4: Reset Top Alignment (U\')',
              handAction: 'Push the top layer 90° counter-clockwise with left index finger.',
              pieceEffect: 'Restores the top layer orientation.',
            },
          ],
          proTips: [
            'When white faces right, exactly ONE Sexy Move (R U R\' U\') solves the corner!',
          ],
        },
        'case-white-facing-up': {
          caseName: 'Possibility 2: White Sticker Facing UP',
          badge: '3 Triggers',
          initialDescription:
            'The White-Green-Red corner is in the top layer directly above its slot, but the White sticker is pointing straight UP to the ceiling.',
          targetDescription:
            'The corner is rotated by 120° and locked into the base with white facing down.',
          detailedSteps: [
            {
              stepTitle: 'Trigger 1 (Moves 1-4): Reorient from Top',
              handAction: 'Perform R U R\' U\' once.',
              pieceEffect: 'Inserts the corner into the slot but with white facing front.',
            },
            {
              stepTitle: 'Trigger 2 (Moves 5-8): Pop and Twist',
              handAction: 'Perform R U R\' U\' a second time.',
              pieceEffect: 'Pops the corner back to the top with white facing right.',
            },
            {
              stepTitle: 'Trigger 3 (Moves 9-12): Final Insertion',
              handAction: 'Perform R U R\' U\' a third time.',
              pieceEffect: 'Docks the corner cleanly into the white base.',
            },
            {
              stepTitle: 'Complete',
              handAction: 'Finish the sequence.',
              pieceEffect: 'Corner solved.',
            },
          ],
          proTips: [
            'When white faces UP, repeat (R U R\' U\') exactly 3 times!',
            'Never rotate the whole cube; keep the white base on the bottom at all times.',
          ],
        },
        'case-corner-trapped': {
          caseName: 'Possibility 3: Corner Trapped in Bottom Slot',
          badge: 'Extraction',
          initialDescription:
            'The corner is already in the bottom layer, but it is twisted backwards or in the wrong slot.',
          targetDescription:
            'The corner is extracted into the top layer, ready to be positioned correctly.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Lift Trapped Corner (R)',
              handAction: 'Rotate right face 90° away from you.',
              pieceEffect: 'Lifts the trapped corner up to the top layer.',
            },
            {
              stepTitle: 'Step 2: Move Away (U)',
              handAction: 'Push top layer 90° clockwise.',
              pieceEffect: 'Kicks the corner out of the right column.',
            },
            {
              stepTitle: 'Step 3: Restore Base (R\')',
              handAction: 'Pull right face 90° towards you.',
              pieceEffect: 'Restores the white cross base intact.',
            },
            {
              stepTitle: 'Step 4: Align (U\')',
              handAction: 'Reset top layer.',
              pieceEffect: 'Ready to re-insert properly.',
            },
          ],
          proTips: [
            'Whenever a corner is in the wrong place on the bottom, a single Sexy Move (R U R\' U\') pops it right out!',
          ],
        },
      },
    },
    'second-layer-edges': {
      title: 'Stage 3: Second Layer (Middle Edges)',
      subtitle: 'Pairing corners and edges together to finish the bottom two layers (F2L)',
      overview:
        'Find an edge on the top layer that has NO yellow sticker. Match its front color with the matching center. Look at its top color to decide whether it needs to insert into the RIGHT slot or the LEFT slot.',
      keyTakeaway:
        'This algorithm works by moving the edge away, lifting the corner out to form a connected "pair", and then cleanly inserting both pieces together.',
      cases: {
        'case-insert-right': {
          caseName: 'Possibility 1: Edge Inserts to the RIGHT',
          badge: 'Right Insertion',
          initialDescription:
            'The Green-Red edge is on the top layer with Green matching the front Green center. The top sticker is Red, meaning it must insert into the RIGHT slot.',
          targetDescription:
            'The Green-Red edge is locked into the middle-right slot between the Green and Red centers.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Move Edge AWAY (U)',
              handAction: 'Turn the top layer 90° clockwise.',
              pieceEffect: 'Moves the edge piece away from its destination slot.',
            },
            {
              stepTitle: 'Step 2: Lift Corner (R)',
              handAction: 'Turn the right face 90° away from you.',
              pieceEffect: 'Lifts the matching corner out of the bottom layer.',
            },
            {
              stepTitle: 'Step 3: Pair Corner with Edge (U\')',
              handAction: 'Turn top layer 90° counter-clockwise.',
              pieceEffect: 'Brings the corner and edge together to form a matched pair.',
            },
            {
              stepTitle: 'Step 4: Reseat Slot (R\')',
              handAction: 'Turn right face 90° towards you.',
              pieceEffect: 'Restores the white base.',
            },
            {
              stepTitle: 'Step 5: Position Pair for Insertion (U\')',
              handAction: 'Turn top layer 90° counter-clockwise.',
              pieceEffect: 'Positions the pair over the front face.',
            },
            {
              stepTitle: 'Step 6: Open Front Slot (F\')',
              handAction: 'Turn front face 90° counter-clockwise.',
              pieceEffect: 'Opens up the front face slot.',
            },
            {
              stepTitle: 'Step 7: Dock Pair (U)',
              handAction: 'Turn top layer 90° clockwise.',
              pieceEffect: 'Slots the combined corner-edge pair into the middle layer.',
            },
            {
              stepTitle: 'Step 8: Close Front Slot (F)',
              handAction: 'Turn front face 90° clockwise.',
              pieceEffect: 'Locks the middle edge and bottom layer completely.',
            },
          ],
          proTips: [
            'Mnemonic: Move away → Sexy Move → Move to front → Reverse Front insert.',
          ],
        },
        'case-insert-left': {
          caseName: 'Possibility 2: Edge Inserts to the LEFT',
          badge: 'Left Insertion (Mirror)',
          initialDescription:
            'The Green-Orange edge is on the top layer with Green matching the front center. The top sticker is Orange, meaning it must insert to the LEFT.',
          targetDescription:
            'The edge is locked into the middle-left slot between Green and Orange centers.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Move Edge AWAY (U\')',
              handAction: 'Turn the top layer 90° counter-clockwise.',
              pieceEffect: 'Moves edge away from left slot.',
            },
            {
              stepTitle: 'Step 2: Lift Left Slot (L\')',
              handAction: 'Turn left face 90° away from you.',
              pieceEffect: 'Lifts the left corner out.',
            },
            {
              stepTitle: 'Step 3: Pair Up (U)',
              handAction: 'Turn top face 90° clockwise.',
              pieceEffect: 'Pairs the corner and edge together.',
            },
            {
              stepTitle: 'Step 4: Restore Base (L)',
              handAction: 'Turn left face 90° towards you.',
              pieceEffect: 'Restores the white base.',
            },
            {
              stepTitle: 'Step 5: Position for Front (U)',
              handAction: 'Turn top face 90° clockwise.',
              pieceEffect: 'Positions pair in front.',
            },
            {
              stepTitle: 'Step 6: Open Front (F)',
              handAction: 'Turn front face 90° clockwise.',
              pieceEffect: 'Exposes the receiving slot.',
            },
            {
              stepTitle: 'Step 7: Insert Pair (U\')',
              handAction: 'Turn top face 90° counter-clockwise.',
              pieceEffect: 'Inserts pair into the slot.',
            },
            {
              stepTitle: 'Step 8: Close Front (F\')',
              handAction: 'Turn front face 90° counter-clockwise.',
              pieceEffect: 'Locks middle layer.',
            },
          ],
          proTips: [
            'Left insertion is the exact mirror of Right insertion: substitute R with L\' and U with U\'.',
          ],
        },
      },
    },
    'yellow-cross': {
      title: 'Stage 4: The Yellow Cross',
      subtitle: 'Orienting the top edges with F (R U R\' U\') F\'',
      overview:
        'Look at the top (Yellow) face. Ignoring corners, the yellow edges form one of 3 patterns: a Center Dot, an \'L\'-shape, or a Horizontal Line. A single universal algorithm transitions through them: Dot → L-shape → Line → Yellow Cross.',
      keyTakeaway:
        'The leading F move temporality rotates the front face down, converting an edge orientation flip into a simple Sexy Move trigger, and F\' restores the first two layers intact.',
      cases: {
        'case-l-shape': {
          caseName: 'Possibility 1: The \'L\'-Shape (90° Angle)',
          badge: 'Most Common',
          initialDescription:
            'Two adjacent yellow edges are facing up, forming an \'L\' shape. Hold the cube so the two edges point to 12 o\'clock (Back) and 9 o\'clock (Left).',
          targetDescription:
            'All 4 yellow edges face up, forming a complete Yellow Cross.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Tilt Front Face Clockwise (F)',
              handAction: 'Rotate the front face 90° clockwise.',
              pieceEffect:
                'Tilts the solved bottom-left pair out of danger and exposes the middle layer.',
            },
            {
              stepTitle: 'Step 2: Lift Right (R)',
              handAction: 'Turn the right face 90° away from you.',
              pieceEffect: 'Enters the Sexy Move trigger.',
            },
            {
              stepTitle: 'Step 3: Spin Top (U)',
              handAction: 'Push top layer 90° clockwise.',
              pieceEffect: 'Reorients the top yellow edge.',
            },
            {
              stepTitle: 'Step 4: Lower Right (R\')',
              handAction: 'Pull right face 90° towards you.',
              pieceEffect: 'Restores right column.',
            },
            {
              stepTitle: 'Step 5: Reset Top (U\')',
              handAction: 'Push top layer 90° counter-clockwise.',
              pieceEffect: 'Completes the Sexy Move trigger.',
            },
            {
              stepTitle: 'Step 6: Restore Front Face (F\')',
              handAction: 'Rotate the front face 90° counter-clockwise.',
              pieceEffect:
                'Restores the bottom two layers and locks the Yellow Cross in place!',
            },
          ],
          proTips: [
            'Remember the sequence acronym: FUR - U\'R\'F\' ("Fur-Urff").',
            'Always verify the L-shape points to 12 and 9 o\'clock before executing.',
          ],
        },
        'case-horizontal-line': {
          caseName: 'Possibility 2: The Horizontal Line',
          badge: '1-Step Cross',
          initialDescription:
            'Two opposite yellow edges form a straight line across the top face. Hold the line HORIZONTALLY (from 9 o\'clock to 3 o\'clock).',
          targetDescription: 'The line expands into a full Yellow Cross.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Front Clockwise (F)',
              handAction: 'Turn front face 90° clockwise.',
              pieceEffect: 'Opens working zone.',
            },
            {
              stepTitle: 'Step 2: Right Up (R)',
              handAction: 'Turn right face 90° up.',
              pieceEffect: 'Sexy move start.',
            },
            {
              stepTitle: 'Step 3: Top Clockwise (U)',
              handAction: 'Push top 90° clockwise.',
              pieceEffect: 'Rotates top.',
            },
            {
              stepTitle: 'Step 4: Right Down (R\')',
              handAction: 'Pull right face 90° down.',
              pieceEffect: 'Restores column.',
            },
            {
              stepTitle: 'Step 5: Top Counter-Clockwise (U\')',
              handAction: 'Push top 90° counter-clockwise.',
              pieceEffect: 'Completes trigger.',
            },
            {
              stepTitle: 'Step 6: Front Counter-Clockwise (F\')',
              handAction: 'Turn front face 90° counter-clockwise.',
              pieceEffect: 'Restores bottom two layers.',
            },
          ],
          proTips: [
            'If the line is held vertically, the algorithm will not solve the cross! Keep it strictly horizontal.',
          ],
        },
        'case-center-dot': {
          caseName: 'Possibility 3: The Center Dot Only',
          badge: 'Double Application',
          initialDescription:
            'None of the 4 yellow edges have yellow facing up—only the yellow center dot is visible.',
          targetDescription: 'Transitions from Dot to L-shape, then to Cross.',
          detailedSteps: [
            {
              stepTitle: 'Step 1-6: Perform F (R U R\' U\') F\'',
              handAction: 'Execute the algorithm from any orientation.',
              pieceEffect: 'Transforms the Dot into the \'L\'-Shape.',
            },
          ],
          proTips: [
            'Once the L-shape appears, hold it at 12 and 9 o\'clock and repeat the algorithm.',
          ],
        },
      },
    },
    'yellow-face-sune': {
      title: 'Stage 5: Orient Yellow Face (The Sune)',
      subtitle: 'Twisting all yellow corners upwards using the famous Sune algorithm',
      overview:
        'With the yellow cross completed, we must orient the remaining yellow corners so the entire top face becomes yellow. The legendary "Sune" algorithm twists 3 corners simultaneously while keeping the cross and first two layers intact.',
      keyTakeaway:
        'Due to orientation parity (conservation of corner twists modulo 3), you can never have just ONE corner twisted by itself on a legal cube.',
      cases: {
        'case-the-fish': {
          caseName: 'Possibility 1: The "Fish" (1 Yellow Corner)',
          badge: 'Direct Sune',
          initialDescription:
            'Exactly ONE corner is yellow, resembling a fish swimming. Hold the cube so the fish\'s nose points towards the BOTTOM-LEFT (front-left). The front-right corner has yellow facing front.',
          targetDescription:
            'The entire top face becomes a solid, uniform yellow plane.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Lift Right Pair (R)',
              handAction: 'Turn the right face 90° away from you.',
              pieceEffect: 'Lifts the front-right corner-edge pair up.',
            },
            {
              stepTitle: 'Step 2: Advance Top 90° (U)',
              handAction: 'Push top layer 90° clockwise with right index finger.',
              pieceEffect: 'Moves the pair forward.',
            },
            {
              stepTitle: 'Step 3: Lower Right Slot (R\')',
              handAction: 'Pull right face 90° towards you.',
              pieceEffect: 'Temporarily reseats the right column.',
            },
            {
              stepTitle: 'Step 4: Advance Top 90° Again (U)',
              handAction: 'Push top layer 90° clockwise again.',
              pieceEffect: 'Pushes the pair around the top perimeter.',
            },
            {
              stepTitle: 'Step 5: Lift Right Slot Back Up (R)',
              handAction: 'Turn right face 90° away from you.',
              pieceEffect: 'Prepares the slot to receive the pair.',
            },
            {
              stepTitle: 'Step 6: Spin Top 180° All The Way Home (U2)',
              handAction: 'Double-flick top layer 180° clockwise.',
              pieceEffect: 'Snaps the pair all the way across directly into the slot.',
            },
            {
              stepTitle: 'Step 7: Lower Slot Cleanly (R\')',
              handAction: 'Pull right face 90° towards you.',
              pieceEffect: 'Locks the pair back into the white base.',
            },
          ],
          proTips: [
            'Fish pattern rule: Always point the fish head to the bottom-left.',
            'If the front-right corner does not show yellow, do Sune once, reposition the fish to bottom-left, and do Sune again.',
          ],
        },
        'case-no-corners-yellow': {
          caseName: 'Possibility 2: Cross with 0 Yellow Corners',
          badge: 'Blinker / Headlights',
          initialDescription:
            'Only the yellow cross is visible; none of the 4 corners show yellow on top. Yellow stickers point outwards.',
          targetDescription:
            'Produces the Fish pattern, from which a single Sune solves the face.',
          detailedSteps: [
            {
              stepTitle: 'Perform Sune Once',
              handAction: 'Execute R U R\' U R U2 R\'.',
              pieceEffect: 'Twists 3 corners, creating the Fish pattern.',
            },
          ],
          proTips: [
            'Hold the cube so yellow headlights on corners point to the left before executing.',
          ],
        },
      },
    },
    'permute-corners': {
      title: 'Stage 6: Position Yellow Corners',
      subtitle: 'Detecting "Headlights" and swapping corners into their rightful slots',
      overview:
        'The entire yellow face is now yellow, but the corners might be in the wrong slots. Look around the sides of the top layer for "Headlights"—two corners on the same face that share the same color. Place headlights in the BACK (or left) and execute the corner permutation algorithm.',
      keyTakeaway:
        'Permutation parity requires corner swaps and edge swaps to share the same sign (even permutations in the alternating group A_n).',
      cases: {
        'case-headlights': {
          caseName: 'Possibility 1: Headlights Found on One Face',
          badge: 'Standard Corner Swap',
          initialDescription:
            'Two corners on the same face share the same color (Headlights). Hold the headlights at the BACK (away from you).',
          targetDescription:
            'All 4 corners match their respective side centers on all 4 faces.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: Top Clockwise (U)',
              handAction: 'Push top layer 90° clockwise.',
              pieceEffect: 'Setup move.',
            },
            {
              stepTitle: 'Step 2: Right Up (R)',
              handAction: 'Turn right face 90° away from you.',
              pieceEffect: 'Lifts right corner.',
            },
            {
              stepTitle: 'Step 3: Top Counter-Clockwise (U\')',
              handAction: 'Push top layer 90° counter-clockwise.',
              pieceEffect: 'Clears top layer.',
            },
            {
              stepTitle: 'Step 4: Left Up (L\')',
              handAction: 'Turn left face 90° away from you.',
              pieceEffect: 'Lifts left corner.',
            },
            {
              stepTitle: 'Step 5: Top Clockwise (U)',
              handAction: 'Push top layer 90° clockwise.',
              pieceEffect: 'Aligns right corner.',
            },
            {
              stepTitle: 'Step 6: Right Down (R\')',
              handAction: 'Pull right face 90° towards you.',
              pieceEffect: 'Reseats right column.',
            },
            {
              stepTitle: 'Step 7: Top Counter-Clockwise (U\')',
              handAction: 'Push top layer 90° counter-clockwise.',
              pieceEffect: 'Aligns left corner.',
            },
            {
              stepTitle: 'Step 8: Left Down (L)',
              handAction: 'Pull left face 90° towards you.',
              pieceEffect: 'Reseats left column and solves all 4 corners!',
            },
          ],
          proTips: [
            'If no face has headlights, execute this algorithm once from any angle; headlights will immediately appear on one face!',
          ],
        },
      },
    },
    'permute-edges': {
      title: 'Stage 7: Permute Yellow Edges (Solved!)',
      subtitle: 'The 3-edge cycle: Finishing the Rubik\'s Cube with the U-Permutation',
      overview:
        'All corners are solved! Look at the 4 top edges. Exactly one edge is fully solved (or none). Place the solved edge at the BACK. The remaining 3 edges need to cycle either clockwise or counter-clockwise to finish the cube!',
      keyTakeaway:
        'A 3-cycle of edges is an even permutation (two 2-transpositions), which perfectly preserves cube parity laws. When this completes, the cube enters the identity state!',
      cases: {
        'case-clockwise-u-perm': {
          caseName: 'Possibility 1: 3 Edges Cycle Clockwise',
          badge: 'Ua Permutation',
          initialDescription:
            'One edge is completely solved (hold it at the BACK). The remaining 3 edges (Front, Left, Right) need to cycle clockwise to solve the cube.',
          targetDescription: '🎉 THE RUBIK\'S CUBE IS 100% SOLVED! All faces are uniform.',
          detailedSteps: [
            {
              stepTitle: 'Step 1: R',
              handAction: 'Turn right face 90° away from you.',
              pieceEffect: 'Lifts right pair.',
            },
            {
              stepTitle: 'Step 2: U\'',
              handAction: 'Push top 90° counter-clockwise.',
              pieceEffect: 'Rotates pair.',
            },
            {
              stepTitle: 'Step 3: R',
              handAction: 'Turn right face 90° up.',
              pieceEffect: 'Advances cycle.',
            },
            {
              stepTitle: 'Step 4: U',
              handAction: 'Push top 90° clockwise.',
              pieceEffect: 'Advances cycle.',
            },
            {
              stepTitle: 'Step 5: R',
              handAction: 'Turn right face 90° up.',
              pieceEffect: 'Advances cycle.',
            },
            {
              stepTitle: 'Step 6: U',
              handAction: 'Push top 90° clockwise.',
              pieceEffect: 'Advances cycle.',
            },
            {
              stepTitle: 'Step 7: R',
              handAction: 'Turn right face 90° up.',
              pieceEffect: 'Advances cycle.',
            },
            {
              stepTitle: 'Step 8: U\'',
              handAction: 'Push top 90° counter-clockwise.',
              pieceEffect: 'Begins alignment.',
            },
            {
              stepTitle: 'Step 9: R\'',
              handAction: 'Turn right face 90° down.',
              pieceEffect: 'Locks left side.',
            },
            {
              stepTitle: 'Step 10: U\'',
              handAction: 'Push top 90° counter-clockwise.',
              pieceEffect: 'Aligns all edges.',
            },
            {
              stepTitle: 'Step 11: R2 (Finish!)',
              handAction: 'Turn right face 180° all the way around.',
              pieceEffect: 'Locks all layers into the pristine solved state!',
            },
          ],
          proTips: [
            'If no edge is solved at the start, perform this algorithm once from any angle; one edge will immediately become solved!',
          ],
        },
      },
    },
  },
  graph: {
    badge: 'Discrete Mathematics & Algorithmic Geometry',
    title: 'Graph Theory of the Rubik\'s Cube',
    subtitle:
      'Explore Cayley graphs, state spaces, graph diameter, BFS wavefronts, and quotient group reductions.',
    tabs: {
      explorer: 'Subgraph Explorer',
      cayley: 'Cayley Graphs',
      diameter: 'God\'s Number',
      search: 'Search Algorithms',
      commutators: 'Commutators',
    },
    explorer: {
      selectSubgroup: 'Select Subgroup:',
      runBfs: 'Run Live BFS Pathfinding',
      resetBfs: 'Reset BFS',
      shortestPath: 'Shortest Path',
      identity: 'Identity (0 moves)',
      exploredStates: 'states in queue',
      realtimeSync: 'Real-time 3D State Sync',
      depth: 'Depth',
      nodeId: 'Node Identifier:',
      movesSeq: 'Permutation Sequence:',
      diameter: 'Graph Subgroup Diameter:',
      syncHint:
        'Click any node on the graph canvas to inspect its 3D geometry and see how the Cayley graph embeds the physical permutations!',
      legendSolved: 'Solved',
      legendVisited: 'BFS Visited',
      legendPath: 'Shortest Path',
      legendSelected: 'Selected',
      subgroups: {
        checkerboard: {
          name: 'Checkerboard ⟨M2, E2, S2⟩ (Hypercube Q₃)',
          desc: 'The elementary abelian 3-generator group (Z₂³). Forms a stunning 3D hypercube graph of 8 states where every generator is an involution (g = g⁻¹). Distance 3 is the famous 6-face checkerboard!',
        },
        r2u2: {
          name: 'Hexagonal Cycle ⟨R2, U2⟩ (Order 6)',
          desc: 'A dihedral-type cycle of order 6 generated by 180° turns of R and U. Notice how alternating R2 and U2 returns exactly to the solved state in 6 moves, forming a regular 6-cycle.',
        },
        commutator: {
          name: 'Commutator Orbit ⟨[R, U]⟩ (Sexy Move)',
          desc: 'The celebrated 4-move \'Sexy Move\' commutator [R, U] = R U R\' U\' has an exact order of 6. Applying it 6 times traverses a 6-node cycle and returns to identity!',
        },
      },
    },
    cayleySection: {
      title: 'The Cayley Graph of the Rubik\'s Group',
      intro:
        'In discrete mathematics, the Rubik\'s Cube is formally modeled as a directed, colored graph called a Cayley Graph Γ(G, S):',
      regularTitle: 'Regular Graph',
      regularDesc:
        'Every node has the exact same degree. In the Quarter-Turn Metric (QTM), the degree is 12 (6 faces × 2 directions). In the Half-Turn Metric (HTM), the degree is 18.',
      vertexTransitiveTitle: 'Vertex-Transitive',
      vertexTransitiveDesc:
        'For any two states u, v ∈ V, an automorphism exists mapping u → v. No state is structurally "special" in graph topology; every vertex has an identical neighborhood graph!',
      bipartiteTitle: 'Bipartite in QTM',
      bipartiteDesc:
        'Every quarter turn is an odd permutation of edges and corners. Thus, paths of even and odd move counts alternate strictly between two disjoint vertex sets.',
      groupOrderTitle: 'The Group Order and the "12 Disconnected Orbits"',
      groupOrderIntro: 'The total number of physically achievable states in the Rubik\'s Cube group is:',
      twelveOrbitsIntro:
        'Why does the denominator contain 2 · 3 · 2 = 12? If you take a cube apart and reassemble pieces randomly, the configuration space contains 12 disconnected isomorphic components! It is physically impossible to move from one component to another without taking the cube apart:',
      cornerParity: '1. Corner Orientation Parity (÷3):',
      cornerParityDesc:
        'Each corner has 3 rotational states. The sum of all 8 corner twists is conserved ∑ twist ≡ 0 (mod 3). You cannot twist a single corner by itself.',
      edgeParity: '2. Edge Orientation Parity (÷2):',
      edgeParityDesc:
        'Each edge has 2 flip states. The sum of all 12 edge flips is conserved ∑ flip ≡ 0 (mod 2). You cannot flip a single edge by itself.',
      permParity: '3. Permutation Parity (÷2):',
      permParityDesc:
        'A face turn is an odd permutation of corners and edges. The total sign of permutation is sgn(corners) = sgn(edges). You cannot swap only two pieces while leaving all other pieces untouched!',
    },
    diameterSection: {
      badge: 'Graph Theory Metric',
      title: 'God\'s Number: The Diameter of the Rubik\'s Graph',
      intro:
        'In graph theory, the diameter of a graph is the greatest distance between any pair of vertices:',
      htmTitle: 'Half-Turn Metric (HTM)',
      htmDesc:
        'Proven in July 2010 by Tomas Rokicki, Herbert Kociemba, Morley Davidson, and John Dethridge using 35 CPU years of distributed Google computing power. Every single state can be solved in at most 20 moves!',
      qtmTitle: 'Quarter-Turn Metric (QTM)',
      qtmDesc:
        'Proven in August 2014. Counting each 90° turn as 1 move (so 180° turns count as 2 moves), God\'s Number in QTM is exactly 26.',
      superflipTitle: 'The "Superflip": The Antipodal Vertex',
      superflipDesc:
        'In 1995, mathematician Michael Reid proved that the Superflip (where all 8 corners are solved and all 12 edges are flipped in place) requires a minimum of 20 moves in HTM. It was the first configuration proven to sit at the absolute antipodal boundary of the Cayley graph:',
      distTitle: 'State Distribution by Distance Depth (HTM)',
      distNote: 'Note: Over 65% of all 43 quintillion states reside at Depth 18!',
    },
    searchSection: {
      title: 'Graph Search: BFS Explosion & Kociemba\'s Two-Phase Reduction',
      bfsFailTitle: 'Why Naive Breadth-First Search (BFS) Explodes',
      bfsFailDesc:
        'In a standard graph, Breadth-First Search finds the optimal shortest path. However, with an average branching factor of b ≈ 13.35, the size of the frontier at depth 20 exceeds 1.8 × 10²² states. Storing this would require petabytes of memory.',
      paradigmsIntro:
        'Computer scientists solved this using two mathematical paradigms:',
      bibfsTitle: '1. Bidirectional BFS',
      bibfsDesc:
        'By expanding two search trees simultaneously—one forward from the scrambled state and one backward from the solved state—the search depth is halved from d to d/2. Time and space drop from O(bᵈ) to O(bᵈ/²), a reduction factor of trillions!',
      pdbTitle: '2. Pattern Databases (PDBs)',
      pdbDesc:
        'Used in A* / IDA* search. We project the 43-quintillion graph onto a smaller quotient graph (e.g., tracking corners only, 88M states). The exact shortest distance in the quotient graph provides an admissible heuristic h(n) ≤ h*(n) that guides search without ever overestimating distance!',
      kociembaTitle: 'Kociemba\'s Two-Phase Algorithm: Quotient Groups & Coset Spaces',
      kociembaIntro:
        'Herbert Kociemba\'s solver (which powers almost all modern computer cube solvers) decomposes the full group into a nested subgroup chain:',
      phase1Title: 'Phase 1 (Coset Graph G / H):',
      phase1Desc:
        'Finds a path from any scramble to the subgroup H. Inside H, all edge orientations are preserved, corner orientations are preserved, and middle-layer edges reside in their slice. The coset graph has only 2.2 × 10⁹ states—searchable in milliseconds!',
      phase2Title: 'Phase 2 (Subgroup Graph H):',
      phase2Desc:
        'With edges and corners correctly oriented, moves are restricted solely to U, D, L², R², F², B². Searching within this restricted graph rapidly reaches the solved identity state.',
    },
    commutatorSection: {
      title: 'Commutators & Conjugation: Minimal Cycles in the Cayley Graph',
      intro:
        'Why do Rubik\'s Cube algorithms look so complex yet leave 90% of the puzzle undisturbed? The secret lies in two fundamental group theory constructs: Commutators and Conjugates.',
      commutatorTitle: 'The Commutator: [A, B] = A B A⁻¹ B⁻¹',
      commutatorDesc1:
        'If move sequences A and B commute, then A B A⁻¹ B⁻¹ = e (identity). But if their physical domains intersect on only 1 or 2 pieces, everything else cancels out completely!',
      commutatorDesc2:
        'The result is a tight 3-cycle or isolated corner twist. The fundamental "Sexy Move" [R, U] = R U R\' U\' is the premier example: applying it cycles pieces in a small local 6-node orbit while leaving the rest of the cube invariant.',
      conjugateTitle: 'The Conjugate: A B A⁻¹',
      conjugateIntro: 'A conjugate is a graph routing operation:',
      setupMove: 'A (Setup Move): Moves target pieces into an ideal working zone.',
      operatorMove: 'B (Operator): Executes a commutator or local cycle on the pieces.',
      teardownMove: 'A⁻¹ (Teardown Move): Inverts the setup move, returning pieces to their original slots.',
      conjugateSummary:
        'Graphically, a conjugate traverses down an edge, executes a local cycle, and walks straight back along the same path!',
      infoBox:
        'Every advanced speedcubing algorithm (OLL, PLL, Blindfolded solving) is engineered directly from commutators and conjugates. Once you understand them, algorithms stop being arbitrary strings of letters and become intuitive closed loops in the state space graph.',
    },
  },
  sandbox: {
    wcaScramble: 'Official WCA 3x3 Scramble',
    copyScramble: 'Copy scramble',
    newScramble: 'Generate new scramble',
    scrambleCube: 'Scramble Cube',
    resetSolved: 'Reset Solved',
    title: '3D Interactive Playground',
    undo: 'Undo',
    turnControls: 'Turn Controls & Slices',
    testerTitle: 'Algorithm Tester & Inverter',
    testerPlaceholder: 'Enter algorithm e.g. R U R\' U\'',
    execute: 'Execute',
    invert: 'Invert',
    history: 'Move History',
    timerTitle: 'Speedcube Timer',
    releaseToStart: 'Release to start!',
    holdSteady: 'Hold steady...',
    solvingTapToStop: 'Solving... tap to stop',
    holdSpaceToStart: 'Hold spacebar or tap here to start',
    bestTime: 'Best Time',
    ao5: 'Ao5',
    recentSolves: 'Recent Solves',
    invertTooltip: 'Compute inverse algorithm',
    clearHistory: 'Clear history',
    turns: 'turns',
      "referenceTitle": "Reference Solution & Solver",
      "showReference": "Show Reference Answer",
      "hideReference": "Hide Reference Answer (Spoiler Shield)",
      "alreadySolved": "Cube is already solved! Scramble or turn any face to generate a reference solution.",
      "solutionBadge": "Optimal Reference Path",
      "copySolution": "Copy Solution",
      "copied": "Copied!",
      "stepNext": "Step Next",
      "stepPrev": "Step Prev",
      "autoSolve": "Auto Solve",
      "pause": "Pause",
      "solveInstant": "Solve Instantly",
    "solverMode": "Solution Method",
    "cfopMode": "CFOP Tutorial Steps",
    "optimalMode": "Direct Inverse (Shortcut)",
    "cfopMethodDesc": "Systematically restores the cube layer-by-layer according to the 7 tutorial stages, advancing CFOP diagnostics step by step.",
    "optimalMethodDesc": "Inverts scramble moves directly for the shortest turn count.",
    "stageCompleted": "Stage Completed",
    "currentStage": "Active Stage",
    "stageHeader": "Stage {stage}: {name}",
    "stageMovesCount": "{count} moves",
    "stageNames": {
          "whiteCross": "White Cross",
          "firstLayer": "First Layer (Corners)",
          "secondLayer": "Second Layer (Middle Edges)",
          "yellowCross": "Yellow Cross (Edge Orientation)",
          "orientYellowCorners": "Orient Yellow Corners",
          "permuteYellowCorners": "Permute Yellow Corners",
          "permuteYellowEdges": "Permute Yellow Edges"
    },

      "phaseDiagnostic": "CFOP / Beginner Phase Diagnostics",
      "phaseCurrent": "Current Stage",
      "phaseNextAlgo": "Recommended Algorithm",
      "piecesRestored": "Restored Pieces",
      "solutionProgress": "Solution Progress",
      "directInverseNote": "Optimal Direct Inverse solves the entire cube concurrently in ≤20 moves rather than layer-by-layer; stage diagnostics will fully lock in during the concluding steps.",
      "edgesAligned": "edges aligned",
      "cornersDocked": "corners docked",
      "edgesPlaced": "edges placed",
      "edgesOriented": "edges oriented",
      "cornersOriented": "corners oriented",
      "importPhysicalCube": "Import Real Cube",
      "importSuccess": "Physical cube state imported! CFOP step-by-step tutorial solution generated.",
      "phaseNames": {
        "whiteCross": "White Cross (Stage 1)",
        "firstLayer": "White Corners / First Layer (Stage 2)",
        "secondLayer": "Second Layer / Middle Edges (Stage 3)",
        "yellowCross": "Yellow Cross / OLL Edges (Stage 4)",
        "orientYellowCorners": "Orient Yellow Corners / Sune (Stage 5)",
        "permuteYellowCorners": "Permute Yellow Corners / PLL Corners (Stage 6)",
        "permuteYellowEdges": "Permute Yellow Edges / PLL Edges (Stage 7)",
        "solved": "Solved State (Complete)"
      },
      "phaseTips": {
        "whiteCross": "Align the 4 white edge pieces with matching lateral centers.",
        "firstLayer": "Use Sexy Move (R U R' U') to dock white corners into place.",
        "secondLayer": "Use Left/Right Insertion algorithms to place middle edges.",
        "yellowCross": "Execute F (R U R' U') F' to form the yellow cross.",
        "orientYellowCorners": "Use Sune algorithm (R U R' U R U2 R') to point all yellow stickers down.",
        "permuteYellowCorners": "Use headlights / A-Perm to place the 4 yellow corners into their target positions.",
        "permuteYellowEdges": "Execute U-Perm (F2 U M' U2 M U F2) to cycle the remaining 3 edge pieces.",
        "solved": "The cube is in the identity state! Everything is completely restored."
      },
},
  quiz: {
    badge: 'Interactive Mastery Challenge',
    title: 'Rubik\'s Cube & Graph Theory Quiz',
    subtitle:
      'Test your knowledge on speedcubing fundamentals, discrete Cayley graphs, state spaces, and group commutators!',
    questionOf: 'Question {current} of {total}',
    correct: 'Correct!',
    explanationLabel: 'Explanation:',
    answeredOf: 'answered',
    submit: 'Submit Quiz & View Results',
    score: 'Score:',
    retake: 'Retake Quiz',
    feedbackMaster: '🎉 Masterful! You have conquered both the cube and its discrete graph theory.',
    feedbackGood: '👍 Great job! Review the explanations above to tighten your intuition.',
    feedbackPractice: 'Keep exploring the tutorial and graph theory deep dives!',
    categories: {
      solving: 'Solving',
      graphTheory: 'Graph Theory',
      groupTheory: 'Group Theory',
    },
    questions: {
      1: {
        question: 'How many stickers does an edge piece have, and can it ever occupy a corner slot?',
        options: [
          '2 stickers; it can become a corner during complex slice moves',
          '2 stickers; an edge can never occupy a corner slot',
          '3 stickers; it alternates roles with corners',
          '1 sticker; edges only reflect side faces',
        ],
        explanation:
          'Edges strictly possess 2 stickers and connect two adjacent faces. Corners have 3 stickers. Their physical orbits are completely disjoint!',
      },
      2: {
        question: 'What is the order of the fundamental "Sexy Move" commutator [R, U] = R U R\' U\'?',
        options: ['4', '6', '12', '24'],
        explanation:
          'Applying (R U R\' U\') exactly 6 times returns every single piece and orientation back to the original solved state! Its group order is 6.',
      },
      3: {
        question:
          'In the Half-Turn Metric (HTM), what is the regular degree of each vertex in the Rubik\'s Cayley graph?',
        options: ['6', '12', '18', '26'],
        explanation:
          'There are 6 faces, each of which can be turned clockwise (90°), counter-clockwise (-90°), or double-turn (180°). 6 × 3 = 18 available generators per state!',
      },
      4: {
        question:
          'What is "God\'s Number" in the Half-Turn Metric (the exact diameter of the Rubik\'s Cayley graph)?',
        options: ['18 moves', '20 moves', '24 moves', '26 moves'],
        explanation:
          'In July 2010, researchers proved using 35 CPU years of distributed computation at Google that every position can be solved in 20 moves or fewer.',
      },
      5: {
        question:
          'Why does the physical configuration space contain 12 completely disconnected isomorphic components?',
        options: [
          'Because there are 12 edges on the cube',
          'Because the cube has 12 colors when disassembled',
          'Due to 3 conservation invariants: corner twist sum (mod 3), edge flip sum (mod 2), and parity of permutations (mod 2)',
          'Because 6 faces times 2 rotations equals 12',
        ],
        explanation:
          '3 × 2 × 2 = 12. You cannot twist one corner alone, flip one edge alone, or swap two pieces alone without disassembling the puzzle.',
      },
      6: {
        question: 'What makes Michael Reid\'s "Superflip" state famous in discrete mathematics?',
        options: [
          'It was the first state proven to require the absolute maximum of 20 moves in HTM',
          'It is the only state that cannot be solved',
          'It has all corners inverted while edges are solved',
          'It forms a 1-move cycle to solved',
        ],
        explanation:
          'The Superflip (all 12 edges flipped in place with corners solved) sits on the furthest antipodal horizon of the graph and was the first configuration proved to need 20 moves.',
      },
      7: {
        question:
          'How do Pattern Databases (PDBs) guarantee an "admissible heuristic" in A* and IDA* search?',
        options: [
          'They randomly guess shortest paths to speed up search',
          'They measure exact shortest distances in a projected quotient graph, which never overestimates the true full distance',
          'They precompute all 43 quintillion states in memory',
          'They guarantee a solution in under 10 seconds',
        ],
        explanation:
          'An admissible heuristic must never overestimate distance (h(n) ≤ h*(n)). Distances in a projected quotient graph are guaranteed lower bounds because relaxing piece constraints can only shorten or preserve paths.',
      },
      8: {
        question: 'In group theory, how does a conjugate A B A⁻¹ work on the cube?',
        options: [
          'It randomly shuffles pieces',
          'It acts as a setup move A, executes operation B, and undoes the setup move with A⁻¹',
          'It turns two opposite faces simultaneously',
          'It is strictly forbidden under WCA rules',
        ],
        explanation:
          'Conjugates route pieces: move A transports target pieces into a working slot, B permutes them, and A⁻¹ safely restores everything else.',
      },
    },
  },
  cubeInput: {
    "modalTitle": "Import Real Rubik's Cube State",
    "modalSubtitle": "Input your physical cube via webcam auto-scan or manual unfolded net painting to learn step-by-step in 3D sandbox",
    "tabCamera": "Camera Auto-Scan",
    "tabManual": "Manual Net Painter",
    "cameraGuideTitle": "Camera Alignment Guide",
    "cameraFacingHint": "Scan each of the 6 faces in order while maintaining consistent orientation",
    "cameraInstructions": "Position the current face inside the central 3×3 viewfinder. Once detected, tap capture.",
    "scanPromptPrefix": "Scanning Face",
    "alignNotice": "Use diffuse, even room lighting to minimize glare and hard shadows",
    "captureFace": "Capture This Face",
    "retakeFace": "Retake",
    "faceCapturedLocked": "Face Captured & Locked",
    "reidentifyFace": "Re-scan This Face",
    "clickToFineTune": "Click stickers to fine-tune colors",
    "capturedFaceHint": "Colors for this face are locked. Click 'Re-scan This Face' to sample again with camera.",
    "scanningProgress": "Scan Progress",
    "waitingAllFaces": "Please scan all 6 faces first (Completed {0}/6)",
    "nextFace": "Next Face",
    "allFacesScanned": "All 6 faces captured successfully!",
    "startCamera": "Start Camera",
    "stopCamera": "Stop Camera",
    "cameraPermissionDenied": "Camera permission denied. Please allow camera access in browser or use Manual Net Painter.",
    "cameraNotAvailable": "No camera found. Please switch to the Manual Net Painter tab.",
    "flipCamera": "Flip Camera",
    "jumpToManual": "Review & Edit Net",
    "facesToScan": {
        "U": "Up Face U (White Center)",
        "L": "Left Face L (Orange Center)",
        "F": "Front Face F (Green Center)",
        "R": "Right Face R (Red Center)",
        "B": "Back Face B (Blue Center)",
        "D": "Down Face D (Yellow Center)"
    },
    "faceOrientations": {
        "U": "Point White face to camera, keep Green face facing Front/Down",
        "L": "Point Orange face to camera, keep White face facing Up",
        "F": "Point Green face to camera, keep White face facing Up",
        "R": "Point Red face to camera, keep White face facing Up",
        "B": "Point Blue face to camera, keep White face facing Up",
        "D": "Point Yellow face to camera, keep Green face facing Front/Up"
    },
    "manualInstructions": "Select a color brush below, then click any facelet in the unfolded net to paint it.",
    "colorPalette": "Color Palette",
    "selectedColor": "Active Brush",
    "remaining": "left",
    "resetSolved": "Fill Solved State",
    "clearAll": "Clear Non-Centers",
    "sampleScramble": "Load Sample Scramble",
    "netLayoutHint": "Unfolded Net: Top(U) / Left(L) / Front(F) / Right(R) / Back(B) / Bottom(D)",
    "statusValid": "Cube state is physically valid and ready to solve!",
    "statusInvalid": "Cube configuration is not ready yet",
    "incompleteStickers": "Some stickers are unpainted. Please fill all 54 facelets.",
    "invalidColorCount": "Invalid color counts (each color must have exactly 9 facelets).",
    "invalidCenters": "Center facelet colors are misaligned.",
    "impossibleEdge": "Physically impossible edge piece detected.",
    "duplicateEdge": "Duplicate edge piece detected.",
    "impossibleCorner": "Physically impossible corner piece detected.",
    "duplicateCorner": "Duplicate corner piece detected.",
    "applyToSandbox": "Import into 3D Sandbox & Solve",
    "cancel": "Cancel",
    "colorNames": {
        "white": "White",
        "yellow": "Yellow",
        "green": "Green",
        "blue": "Blue",
        "red": "Red",
        "orange": "Orange"
    }
},
  footer: {
    brandTitle: 'RubikGraph 3D',
    brandDesc: 'Interactive 3D Modules & Discrete Graph Theory Explorer',
    cayleyLabel: 'Cayley Graphs Γ(G, S)',
    godNumberLabel: 'God\'s Number = 20 HTM',
    groupOrderLabel: '|G| ≈ 4.3 × 10¹⁹',
  },
};
