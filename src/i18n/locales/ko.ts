import type { TranslationSchema } from '../types';

export const ko: TranslationSchema = {
  "nav": {
    "brandSubtitle": "3D 인터랙티브 가이드 & 그래프 이론",
    "tutorial": "3D 튜토리얼",
    "graph": "그래프 이론",
    "sandbox": "3D 샌드박스",
    "quiz": "마스터 퀴즈",
    "shortcuts": "단축키",
    "shortcutsTitle": "키보드 단축키 안내",
    "primeDoubleHint": "Shift 키를 누른 채 회전하면 반시계 방향(프라임, 예: R')으로 회전합니다.",
    "timerHint": "샌드박스에서 스페이스바를 길게 누르면 스피드큐빙 타이머가 시작됩니다!"
  },
  "cube3d": {
    "dragHint": "드래그하여 3D 시점 회전",
    "turn": "회전",
    "clockwise": "90° 시계 방향",
    "counterClockwise": "90° 반시계 방향",
    "halfTurn": "180° 반바퀴 회전",
    "faces": {
      "U": "윗면 / Up (흰색)",
      "D": "아랫면 / Down (노란색)",
      "R": "오른쪽면 / Right (빨간색)",
      "L": "왼쪽면 / Left (주황색)",
      "F": "앞면 / Front (초록색)",
      "B": "뒷면 / Back (파란색)",
      "M": "중앙 수직 슬라이스 (M)",
      "E": "중앙 수평 슬라이스 (E)",
      "S": "중앙 입면 슬라이스 (S)"
    }
  },
  "tutorial": {
    "stageProgress": "단계",
    "focusModeOn": "포커스 ON",
    "focusModeOff": "포커스 OFF",
    "focusTooltip": "관련 없는 조각을 반투명하게 만들어 핵심 조각만 집중 조명합니다",
    "keyIntuition": "핵심 직관",
    "caseSelectorTitle": "케이스 선택 / 시작 상태",
    "caseSelectorPrompt": "현재 큐브는 어떤 상태인가요?",
    "howToIdentify": "이 케이스 구별법:",
    "operationGuideTitle": "단계별 조작 가이드",
    "moveProgress": "진행도",
    "howToPerform": "회전 손가락 조작법:",
    "pieceEffectLabel": "조각 역학적 변화:",
    "algorithmComplete": "알고리즘 완료!",
    "algorithmCompleteDesc": "목표 상태에 도달했습니다. 실제 큐브의 상태와 일치하는지 확인해보세요!",
    "restartCase": "처음부터 다시하기",
    "resetCase": "초기화",
    "animateTurn": "이 회전을 3D로 실행",
    "rotating": "회전 중...",
    "autoPlay": "자동 재생",
    "pause": "일시정지",
    "initialState": "시작 상태",
    "guided3D": "3D 조작 가이드",
    "targetGoal": "목표 상태",
    "showingInitial": "알고리즘 시작 전 상태 표시 중",
    "showingTarget": "도달해야 할 목표 상태 표시 중",
    "aimingFor": "달성해야 할 목표 상태",
    "dragToInspect": "드래그하여 전 방향에서 검토",
    "targetGoalLabel": "목표 완성 상태",
    "reset3DView": "시점 초기화",
    "animationSpeedHint": "공식 버튼을 누르면 부드러운 3D 회전 애니메이션이 재생됩니다",
    "prevStage": "이전 단계",
    "nextStage": "다음 단계",
    "speedcuberTips": "스피드큐버 팁"
  },
  "stages": {
    "anatomy-notation": {
      "title": "0단계: 구조와 기본 회전 기호",
      "subtitle": "조각의 유형, 자유도, 그리고 면 회전의 메커니즘 이해하기",
      "overview": "루빅스 큐브는 3종류의 조각으로 구성됩니다: 6개의 중심 조각(위치 고정), 12개의 엣지(모서리, 2개 색상), 8개의 코너(꼭짓점, 3개 색상). 맞추기를 시작하기 전, 각 면이 시계 방향과 반시계 방향으로 어떻게 회전하는지 익혀야 합니다.",
      "keyTakeaway": "코너 조각은 절대 엣지 조각이 될 수 없으며, 엣지도 코너가 될 수 없습니다. 스티커를 맞추는 것이 아니라 3차원 조각 전체를 제자리로 이동시키는 것입니다.",
      "cases": {
        "basic-turns": {
          "caseName": "기본 회전 기호 (R, U, F, R', U')",
          "badge": "기본 공식",
          "initialDescription": "맞춰진 큐브에서 시작합니다. 각 면을 돌릴 때 해당 면의 9개 조각만 회전하고 나머지 17개 조각은 전혀 움직이지 않는 것을 관찰하세요.",
          "targetDescription": "섹시 무브 (R U R' U') 4회전을 연습하여 손에 익힙니다. 이 4가지 동작은 큐브 맞추기 전반에서 가장 널리 쓰이는 기본 메커니즘입니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: R (오른쪽 시계 방향)",
              "handAction": "오른손 엄지를 앞면에, 검지와 중지를 윗면 뒤쪽에 대고 오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "앞-우-하단 코너를 앞-우-상단으로 올리고 우측 엣지들을 한 칸씩 위로 순환시킵니다."
            },
            {
              "stepTitle": "스텝 2: U (윗면 시계 방향)",
              "handAction": "오른손 검지로 윗면 오른쪽 뒤 모서리를 왼쪽 방향으로 당깁니다 (핑거트릭).",
              "pieceEffect": "방금 올라온 코너를 왼쪽 뒤로 밀어내어 안전하게 보관합니다."
            },
            {
              "stepTitle": "스텝 3: R' (오른쪽 반시계 방향)",
              "handAction": "오른손 전체를 아래로 내려 오른쪽 면을 원래 위치로 90° 되돌립니다.",
              "pieceEffect": "오른쪽 아래 슬롯의 기초를 복구하면서 상단 조각들의 위치를 재정렬합니다."
            },
            {
              "stepTitle": "스텝 4: U' (윗면 반시계 방향)",
              "handAction": "왼손 검지로 윗면 왼쪽 뒤 모서리를 오른쪽 방향으로 밉니다.",
              "pieceEffect": "상단 층의 정렬을 원래대로 복구하여 4동작 1사이클을 완성합니다."
            }
          ],
          "proTips": [
            "시계 방향은 항상 해당 면을 정면에서 똑바로 바라본 상태를 기준으로 합니다.",
            "프라임 표시(')는 반시계 방향으로 90° 회전함을 뜻합니다.",
            "숫자 2(예: U2)는 어느 쪽으로든 180° 반바퀴 회전함을 의미합니다."
          ]
        }
      }
    },
    "white-cross": {
      "title": "1단계: 흰색 십자가 (White Cross)",
      "subtitle": "기초 다지기: 흰색 엣지를 흰색 중심 및 인접 옆면 중심과 완벽히 일치시키기",
      "overview": "목표는 4개의 흰색 엣지 조각을 흰색 면에 배치하는 것입니다. 핵심은 각 흰색 엣지의 옆면 색상이 인접한 중심 조각(초록-초록, 빨강-빨강, 파랑-파랑, 주황-주황)과 반드시 일치해야 한다는 점입니다.",
      "keyTakeaway": "옆면 색상이 맞지 않는 흰색 십자가는 완성된 것이 아닙니다! 각 엣지 조각은 두 면을 동시에 연결하는 닻(Anchor) 역할을 합니다.",
      "cases": {
        "case-daisy-plunge": {
          "caseName": "케이스 1: 데이지에서 내리기 (Daisy Plunge)",
          "badge": "표준 케이스",
          "initialDescription": "흰색 엣지가 노란색 중심 주변(윗면 데이지 꽃)에 모여 있으며, 엣지의 옆면 색상이 해당 옆면 중심과 일치합니다.",
          "targetDescription": "흰색 엣지가 바닥 흰색 중심으로 180° 회전하여 내려가며 흰색 십자가의 한 팔을 완성합니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 앞면 180° 회전 (F2)",
              "handAction": "앞면(F)을 잡고 시계 방향으로 180°(두 번) 돌려 바닥으로 내립니다.",
              "pieceEffect": "흰색 스티커가 바닥의 흰색 중심과 만나 단단히 결합됩니다."
            }
          ],
          "proTips": [
            "데이지 방법: 노란색 중심 주변에 4개의 흰색 엣지를 먼저 모으면 복잡한 공식 없이 직관적으로 맞출 수 있습니다.",
            "F2로 내리기 전 반드시 옆면 색상이 중심과 맞았는지 확인하세요."
          ]
        },
        "case-flipped-edge": {
          "caseName": "케이스 2: 앞면 엣지 방향 뒤집힘",
          "badge": "방향 교정",
          "initialDescription": "흰색 엣지가 올바른 슬롯에 위치하지만 방향이 뒤집혀 있습니다: 흰색이 옆면을 보고, 옆면 색상이 흰색 면을 봅니다!",
          "targetDescription": "엣지가 올바르게 뒤집혀 흰색은 바닥을 향하고 옆면 색상은 중심과 완벽히 정렬됩니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: F' (앞면 반시계 방향)",
              "handAction": "앞면을 반시계 방향으로 90° 돌려 엣지를 오른쪽 중간 레이어로 보냅니다.",
              "pieceEffect": "뒤집힌 엣지를 작업 공간으로 빼냅니다."
            },
            {
              "stepTitle": "스텝 2: U' (윗면 반시계 방향)",
              "handAction": "왼손 검지로 윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "윗면에 엣지를 받아들일 공간을 만듭니다."
            },
            {
              "stepTitle": "스텝 3: R (오른쪽 시계 방향)",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "엣지를 올바른 방향으로 윗면 레이어에 진입시킵니다."
            },
            {
              "stepTitle": "스텝 4: U (윗면 시계 방향)",
              "handAction": "윗면을 오른쪽으로 90° 돌려 중심 색상과 맞춥니다.",
              "pieceEffect": "엣지가 중심과 정렬되어 즉시 바닥으로 내려갈 준비가 됩니다."
            }
          ],
          "proTips": [
            "엣지의 흰색이 위가 아닌 옆을 보고 있을 때는 중간 레이어로 보낸 후 윗면으로 올리면 방향이 교정됩니다."
          ]
        }
      }
    },
    "first-layer-corners": {
      "title": "2단계: 1층 코너 완성 (First Layer Corners)",
      "subtitle": "기본 공식 [R, U] = R U R' U'로 흰색 바닥층 완성하기",
      "overview": "흰색 십자가가 완성되면 4개의 흰색 코너 조각을 넣습니다. 각 코너는 3개의 색상을 가집니다. 목표 슬롯 바로 위에 코너를 두고 섹시무브(R U R' U')를 반복하여 흰색이 아래를 향할 때까지 삽입합니다.",
      "keyTakeaway": "섹시 무브 [R, U] = R U R' U'는 특정 슬롯만 교체하고 큐브의 나머지 부분을 온전히 보존하는 교환자(Commutator)입니다.",
      "cases": {
        "case-white-facing-right": {
          "caseName": "케이스 1: 코너 흰색이 오른쪽을 향할 때",
          "badge": "1회 완료 (가장 빠름)",
          "initialDescription": "흰색-초록-빨강 코너가 슬롯 바로 위에 있고, 흰색 스티커가 오른쪽(R면)을 향하고 있습니다.",
          "targetDescription": "단 한 번의 R U R' U'로 코너가 바닥에 흰색을 아래로 하여 정확히 삽입됩니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 목표 슬롯 들어올리기 (R)",
              "handAction": "오른쪽 면을 위로 90° 돌립니다.",
              "pieceEffect": "바닥 슬롯을 윗면으로 올려 코너를 맞이합니다."
            },
            {
              "stepTitle": "스텝 2: 코너 결합하기 (U)",
              "handAction": "오른손 검지로 윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "코너 조각을 올려진 슬롯과 직접 결합합니다."
            },
            {
              "stepTitle": "스텝 3: 슬롯 바닥으로 내리기 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "결합된 코너를 흰색 바닥층으로 안전하게 되돌립니다."
            },
            {
              "stepTitle": "스텝 4: 상단 정렬 복구 (U')",
              "handAction": "왼손 검지로 윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "상단 층의 정렬을 원래대로 복구합니다."
            }
          ],
          "proTips": [
            "흰색이 오른쪽을 보고 있을 때는 정확히 1번의 섹시무브(R U R' U')로 즉시 완성됩니다!"
          ]
        },
        "case-white-facing-up": {
          "caseName": "케이스 2: 코너 흰색이 천장을 향할 때",
          "badge": "3회 반복",
          "initialDescription": "코너가 슬롯 바로 위에 위치하지만 흰색 스티커가 똑바로 위(천장)를 가리키고 있습니다.",
          "targetDescription": "코너가 120° 회전하여 흰색이 아래를 향한 채 바닥에 견고히 안착합니다.",
          "detailedSteps": [
            {
              "stepTitle": "트리거 1 (1-4수): 상단에서 방향 전환",
              "handAction": "R U R' U'를 1회 실행합니다.",
              "pieceEffect": "코너가 슬롯에 들어가지만 흰색이 앞을 보게 됩니다."
            },
            {
              "stepTitle": "트리거 2 (5-8수): 튕겨내며 각도 교정",
              "handAction": "R U R' U'를 2회째 실행합니다.",
              "pieceEffect": "코너가 다시 위로 튀어나오며 흰색이 오른쪽을 향합니다."
            },
            {
              "stepTitle": "트리거 3 (9-12수): 최종 슬롯 삽입",
              "handAction": "R U R' U'를 3회째 실행합니다.",
              "pieceEffect": "코너가 흰색 바닥에 올바른 방향으로 도킹됩니다."
            },
            {
              "stepTitle": "완료",
              "handAction": "공식 시퀀스를 마무리합니다.",
              "pieceEffect": "코너 조각이 완벽히 해결되었습니다."
            }
          ],
          "proTips": [
            "흰색이 위를 향할 때는 (R U R' U')를 정확히 3회 반복하면 무조건 맞습니다!",
            "절대로 큐브 전체를 돌리지 말고 흰색 면이 항상 바닥을 향하게 유지하세요."
          ]
        },
        "case-corner-trapped": {
          "caseName": "케이스 3: 코너가 바닥 슬롯에 갇혀 있을 때",
          "badge": "탈출 및 재배치",
          "initialDescription": "코너가 이미 바닥층에 들어가 있지만 방향이 뒤집혀 있거나 잘못된 슬롯에 끼어 있습니다.",
          "targetDescription": "코너를 윗면 레이어로 탈출시켜 정상 삽입 준비를 완료합니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 갇힌 코너 올리기 (R)",
              "handAction": "오른쪽 면을 위로 90° 돌립니다.",
              "pieceEffect": "갇혀 있던 코너를 윗면 레이어로 끌어올립니다."
            },
            {
              "stepTitle": "스텝 2: 밖으로 밀어내기 (U)",
              "handAction": "윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "코너를 오른쪽 회전 열 밖으로 밀어냅니다."
            },
            {
              "stepTitle": "스텝 3: 바닥 십자가 복구 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "흰색 십자가 바닥을 손상 없이 복구합니다."
            },
            {
              "stepTitle": "스텝 4: 상단 정렬 (U')",
              "handAction": "윗면을 재정렬합니다.",
              "pieceEffect": "올바른 위치에서 다시 삽입할 준비가 되었습니다."
            }
          ],
          "proTips": [
            "바닥에 잘못 들어간 코너는 섹시무브 1회로 상단으로 가볍게 빼낼 수 있습니다."
          ]
        }
      }
    },
    "second-layer-edges": {
      "title": "3단계: 2층 엣지 맞추기 (Second Layer)",
      "subtitle": "코너와 엣지를 페어로 결합하여 1-2층(F2L) 완성하기",
      "overview": "윗면에서 노란색 스티커가 없는 엣지를 찾습니다. 엣지의 정면 색상을 같은 색의 중심 조각과 일치시킵니다. 윗면 색상을 확인하여 오른쪽 슬롯에 넣을지 왼쪽 슬롯에 넣을지 결정합니다.",
      "keyTakeaway": "이 공식은 엣지를 반대쪽으로 피신시키고, 코너를 꺼내 공중에서 페어로 결합한 후 함께 통째로 슬롯에 넣는 우아한 알고리즘입니다.",
      "cases": {
        "case-insert-right": {
          "caseName": "케이스 1: 엣지를 오른쪽 슬롯에 삽입",
          "badge": "우측 삽입",
          "initialDescription": "초록-빨강 엣지가 윗면에 있고 초록색이 앞면 중심과 일치합니다. 윗면이 빨간색이므로 오른쪽 슬롯에 들어가야 합니다.",
          "targetDescription": "초록-빨강 엣지가 초록색과 빨간색 중심 사이의 우측 중층 슬롯에 잠깁니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 엣지 반대편으로 피신 (U)",
              "handAction": "윗면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "엣지를 목적지 반대 방향(왼쪽)으로 밀어 피합니다."
            },
            {
              "stepTitle": "스텝 2: 코너 마중 올리기 (R)",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "바닥의 매칭 코너를 윗면으로 들어올립니다."
            },
            {
              "stepTitle": "스텝 3: 공중에서 페어 결합 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 돌립니다.",
              "pieceEffect": "코너와 엣지가 만나 하나의 완성된 페어 블록을 형성합니다."
            },
            {
              "stepTitle": "스텝 4: 바닥 복구 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "흰색 바닥 베이스를 복구합니다."
            },
            {
              "stepTitle": "스텝 5: 앞면 삽입 위치로 회전 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 돌립니다.",
              "pieceEffect": "페어 블록을 앞면 삽입 각도로 이동시킵니다."
            },
            {
              "stepTitle": "스텝 6: 앞면 슬롯 열기 (F')",
              "handAction": "앞면을 반시계 방향으로 90° 돌립니다.",
              "pieceEffect": "앞면의 수신 슬롯을 개방합니다."
            },
            {
              "stepTitle": "스텝 7: 페어 블록 슬롯 안으로 (U)",
              "handAction": "윗면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "결합된 코너-엣지 블록을 중층 슬롯에 밀어 넣습니다."
            },
            {
              "stepTitle": "스텝 8: 앞면 슬롯 닫기 (F)",
              "handAction": "앞면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "중층 엣지와 1층 코너를 완벽하게 잠급니다."
            }
          ],
          "proTips": [
            "기억 암기법: 멀리 피하기 → 오른쪽 올리기 → 페어 묶기 → 내리기 → 앞면으로 돌리기 → 앞면 열고 넣기."
          ]
        },
        "case-insert-left": {
          "caseName": "케이스 2: 엣지를 왼쪽 슬롯에 삽입",
          "badge": "좌측 삽입 (미러)",
          "initialDescription": "초록-주황 엣지가 윗면에 있고 초록색이 앞면 중심과 일치합니다. 윗면이 주황색이므로 왼쪽 슬롯에 들어가야 합니다.",
          "targetDescription": "초록-주황 엣지가 초록색과 주황색 중심 사이의 좌측 중층 슬롯에 안착합니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 엣지 반대편으로 피신 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 돌립니다.",
              "pieceEffect": "엣지를 왼쪽 슬롯 반대쪽(오른쪽)으로 피신시킵니다."
            },
            {
              "stepTitle": "스텝 2: 왼쪽 코너 올리기 (L')",
              "handAction": "왼쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "왼쪽 바닥 코너를 윗면으로 마중 나옵니다."
            },
            {
              "stepTitle": "스텝 3: 공중에서 페어 결합 (U)",
              "handAction": "윗면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "왼쪽 코너와 엣지가 공중에서 페어로 결합됩니다."
            },
            {
              "stepTitle": "스텝 4: 바닥 복구 (L)",
              "handAction": "왼쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "흰색 바닥 베이스를 복구합니다."
            },
            {
              "stepTitle": "스텝 5: 정면 삽입 위치로 (U)",
              "handAction": "윗면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "페어 블록을 정면 투입구 앞으로 가져옵니다."
            },
            {
              "stepTitle": "스텝 6: 앞면 슬롯 열기 (F)",
              "handAction": "앞면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "왼쪽 슬롯 입구를 엽니다."
            },
            {
              "stepTitle": "스텝 7: 페어 삽입 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 돌립니다.",
              "pieceEffect": "페어를 슬롯 안으로 도킹합니다."
            },
            {
              "stepTitle": "스텝 8: 앞면 닫기 (F')",
              "handAction": "앞면을 반시계 방향으로 90° 돌립니다.",
              "pieceEffect": "중층을 잠그고 2층을 완전히 완성합니다."
            }
          ],
          "proTips": [
            "좌측 삽입 공식은 우측 삽입 공식의 완벽한 대칭(좌우 반전)입니다."
          ]
        }
      }
    },
    "yellow-cross": {
      "title": "4단계: 노란색 십자가 (Yellow Cross)",
      "subtitle": "F (R U R' U') F' 공식으로 윗면 엣지 방향 맞추기",
      "overview": "윗면(노란색 면)을 봅니다. 코너는 무시하고 노란색 엣지만 보면 3가지 패턴 중 하나입니다: 중심 점만 있는 경우, 'L'자 꺾임 형태, 또는 가로 일자 형태. 하나의 만능 공식으로 순서대로 진행합니다: 점 → L자 → 일자 → 노란색 십자가.",
      "keyTakeaway": "앞면 F 회전이 앞면을 임시로 눕혀 엣지 방향 전환을 섹시 무브로 가능하게 만들고, F'가 하단 2층을 원상복구합니다.",
      "cases": {
        "case-l-shape": {
          "caseName": "케이스 1: 'L'자 꺾임 형태 (90° 각도)",
          "badge": "가장 흔한 케이스",
          "initialDescription": "두 개의 인접한 노란색 엣지가 위를 보고 있어 'L' 모양을 이룹니다. 두 엣지가 12시(뒤쪽)와 9시(왼쪽)를 가리키도록 잡습니다.",
          "targetDescription": "4개의 노란색 엣지가 모두 위를 향해 완전한 노란색 십자가가 만들어집니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 앞면 시계 방향 기울이기 (F)",
              "handAction": "앞면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "하단 페어를 안전하게 치우고 작업 공간을 엽니다."
            },
            {
              "stepTitle": "스텝 2: 오른쪽 올리기 (R)",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "섹시 무브 시작 동작."
            },
            {
              "stepTitle": "스텝 3: 윗면 시계 방향 (U)",
              "handAction": "윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "상단 엣지 방향 재정렬."
            },
            {
              "stepTitle": "스텝 4: 오른쪽 내리기 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "오른쪽 기둥 복원."
            },
            {
              "stepTitle": "스텝 5: 윗면 반시계 방향 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "섹시 무브 마무리."
            },
            {
              "stepTitle": "스텝 6: 앞면 원상복구 (F')",
              "handAction": "앞면을 반시계 방향으로 90° 되돌립니다.",
              "pieceEffect": "하단 2층을 복원하고 노란색 십자가를 완성합니다!"
            }
          ],
          "proTips": [
            "공식 암기: 시-상-좌-하-우-반 (FUR - U'R'F').",
            "공식을 쓰기 전 반드시 L자가 12시와 9시를 가리키는지 확인하세요."
          ]
        },
        "case-horizontal-line": {
          "caseName": "케이스 2: 가로 일자 형태",
          "badge": "1단계로 십자가 완성",
          "initialDescription": "마주 보는 두 엣지가 윗면을 가로지르는 일직선을 형성합니다. 일자 선이 수평(9시에서 3시 방향)이 되도록 잡습니다.",
          "targetDescription": "일자선이 즉시 사방으로 뻗어 완전한 노란색 십자가로 확장됩니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 앞면 시계 방향 (F)",
              "handAction": "앞면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "작업 영역을 엽니다."
            },
            {
              "stepTitle": "스텝 2: 오른쪽 올리기 (R)",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "섹시 무브 진입."
            },
            {
              "stepTitle": "스텝 3: 윗면 시계 방향 (U)",
              "handAction": "윗면을 시계 방향으로 90° 돌립니다.",
              "pieceEffect": "윗면 회전."
            },
            {
              "stepTitle": "스텝 4: 오른쪽 내리기 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "오른쪽 기둥 복원."
            },
            {
              "stepTitle": "스텝 5: 윗면 반시계 방향 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 돌립니다.",
              "pieceEffect": "트리거 완료."
            },
            {
              "stepTitle": "스텝 6: 앞면 반시계 방향 (F')",
              "handAction": "앞면을 반시계 방향으로 90° 되돌립니다.",
              "pieceEffect": "하단 2층을 복원합니다."
            }
          ],
          "proTips": [
            "일자선을 세로로 잡고 공식을 쓰면 십자가가 나오지 않습니다! 반드시 가로(수평)로 잡아야 합니다."
          ]
        },
        "case-center-dot": {
          "caseName": "케이스 3: 중심 점만 있는 형태",
          "badge": "2회 연속 적용",
          "initialDescription": "4개의 엣지 중 노란색이 위를 향한 것이 하나도 없고 중심 점만 노란색입니다.",
          "targetDescription": "공식을 쓰면 점이 L자로 바뀌고, 이후 일자를 거쳐 십자가로 완성됩니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1-6: F (R U R' U') F' 실행",
              "handAction": "어느 방향에서든 공식을 1회 실행합니다.",
              "pieceEffect": "중심 점 형태를 'L'자 형태로 변환시킵니다."
            }
          ],
          "proTips": [
            "L자가 나오면 12시와 9시 방향에 두고 공식을 한 번 더 쓰면 됩니다."
          ]
        }
      }
    },
    "yellow-face-sune": {
      "title": "5단계: 노란색 윗면 맞추기 (The Sune)",
      "subtitle": "유명한 쥐네(Sune) 공식으로 노란색 코너를 모두 위로 뒤집기",
      "overview": "노란색 십자가가 완성되면 나머지 노란색 코너들의 방향을 맞춰 윗면 전체를 노란색으로 만듭니다. 전설적인 쥐네(Sune) 공식은 십자가와 하단 2층을 유지하면서 3개의 코너를 동시에 뒤집습니다.",
      "keyTakeaway": "방향 패리티(코너 비틀림의 합 mod 3 보존) 법칙으로 인해, 정상적인 큐브에서 코너 1개만 단독으로 뒤집히는 것은 불가능합니다.",
      "cases": {
        "case-the-fish": {
          "caseName": "케이스 1: 물고기 형태 (노란 코너 1개)",
          "badge": "표준 쥐네",
          "initialDescription": "노란색 코너가 정확히 1개만 위를 보고 있어 헤엄치는 물고기 모양을 띱니다. 물고기 머리가 왼쪽 아래(앞-왼쪽)를 향하게 잡습니다. 이때 앞-오른쪽 코너의 노란색이 앞을 바라봅니다.",
          "targetDescription": "윗면 전체가 완벽하고 균일한 노란색 평면으로 맞춰집니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 우측 페어 들어올리기 (R)",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "앞-오른쪽 코너-엣지 페어를 들어올립니다."
            },
            {
              "stepTitle": "스텝 2: 윗면 90° 전진 (U)",
              "handAction": "오른손 검지로 윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "페어를 앞으로 이동시킵니다."
            },
            {
              "stepTitle": "스텝 3: 우측 슬롯 내리기 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "오른쪽 기둥을 임시로 복구합니다."
            },
            {
              "stepTitle": "스텝 4: 윗면 다시 90° 전진 (U)",
              "handAction": "윗면을 시계 방향으로 90° 한 번 더 밉니다.",
              "pieceEffect": "페어를 상단 테두리를 따라 전진시킵니다."
            },
            {
              "stepTitle": "스텝 5: 우측 슬롯 마중 올리기 (R)",
              "handAction": "오른쪽 면을 다시 위로 90° 올립니다.",
              "pieceEffect": "페어를 수신할 준비를 합니다."
            },
            {
              "stepTitle": "스텝 6: 윗면 180° 반바퀴 직행 (U2)",
              "handAction": "윗면을 시계 방향으로 180° 빠르게 회전시킵니다.",
              "pieceEffect": "페어를 슬롯 안으로 단번에 정확히 도킹시킵니다."
            },
            {
              "stepTitle": "스텝 7: 깔끔하게 슬롯 내리기 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "페어를 바닥에 잠그고 윗면 노란색을 완성합니다."
            }
          ],
          "proTips": [
            "물고기 법칙: 항상 물고기 머리가 왼쪽 아래를 향하도록 잡으세요.",
            "앞-오른쪽 코너가 노란색이 앞을 보지 않는다면, 쥐네를 1번 쓰고 다시 머리를 왼쪽 아래로 둔 뒤 쥐네를 쓰면 됩니다."
          ]
        },
        "case-no-corners-yellow": {
          "caseName": "케이스 2: 십자가만 있고 노란 코너 0개",
          "badge": "블링커/헤드라이트",
          "initialDescription": "노란색 십자가만 보이고 4개 코너 모두 노란색이 위를 향하지 않으며 옆면을 바라봅니다.",
          "targetDescription": "물고기 형태로 전환되며, 이후 쥐네 1회로 윗면이 완성됩니다.",
          "detailedSteps": [
            {
              "stepTitle": "쥐네(Sune) 1회 실행",
              "handAction": "R U R' U R U2 R'를 실행합니다.",
              "pieceEffect": "3개의 코너를 뒤집어 물고기 패턴을 생성합니다."
            }
          ],
          "proTips": [
            "노란색 코너 헤드라이트가 왼쪽을 향하도록 두고 공식을 실행하세요."
          ]
        }
      }
    },
    "permute-corners": {
      "title": "6단계: 노란색 코너 위치 맞추기 (Position Corners)",
      "subtitle": "헤드라이트를 감지하고 코너를 제자리로 교환하기",
      "overview": "윗면은 다 노란색이지만 코너 조각들의 옆면 위치가 어긋나 있을 수 있습니다. 윗층 옆면을 둘러보며 같은 색상의 두 코너(헤드라이트)를 찾습니다. 헤드라이트를 뒤쪽(B면)에 두고 코너 치환 공식을 실행합니다.",
      "keyTakeaway": "치환 패리티 법칙에 따라 코너의 교환과 엣지의 교환은 반드시 동일한 치환 부호(교대군 A_n의 짝치환)를 가집니다.",
      "cases": {
        "case-headlights": {
          "caseName": "케이스 1: 한 면에서 헤드라이트 발견",
          "badge": "표준 코너 치환",
          "initialDescription": "같은 면에 있는 두 코너의 색상이 같습니다(헤드라이트). 헤드라이트를 뒤쪽(몸 반대편)에 둡니다.",
          "targetDescription": "4개의 코너가 4개 옆면 모두에서 중심 색상과 일치하게 배치됩니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: 윗면 시계 방향 (U)",
              "handAction": "윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "셋업 동작."
            },
            {
              "stepTitle": "스텝 2: 오른쪽 올리기 (R)",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "오른쪽 코너 올리기."
            },
            {
              "stepTitle": "스텝 3: 윗면 반시계 방향 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "상단 비우기."
            },
            {
              "stepTitle": "스텝 4: 왼쪽 올리기 (L')",
              "handAction": "왼쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "왼쪽 코너 올리기."
            },
            {
              "stepTitle": "스텝 5: 윗면 시계 방향 (U)",
              "handAction": "윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "오른쪽 코너 정렬."
            },
            {
              "stepTitle": "스텝 6: 오른쪽 내리기 (R')",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "오른쪽 기둥 복원."
            },
            {
              "stepTitle": "스텝 7: 윗면 반시계 방향 (U')",
              "handAction": "윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "왼쪽 코너 정렬."
            },
            {
              "stepTitle": "스텝 8: 왼쪽 내리기 (L)",
              "handAction": "왼쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "왼쪽 기둥을 내리며 4개의 코너가 모두 제자리를 찾습니다!"
            }
          ],
          "proTips": [
            "어느 면에도 헤드라이트가 없다면 아무 방향에서나 공식을 1번 쓰세요. 즉시 헤드라이트가 나타납니다!"
          ]
        }
      }
    },
    "permute-edges": {
      "title": "7단계: 노란색 엣지 위치 맞추기 (완전 정복!)",
      "subtitle": "3-엣지 순환 공식 (U-Perm)으로 큐브 완전히 완성하기",
      "overview": "모든 코너가 맞춰졌습니다! 윗면의 4개 엣지를 봅니다. 정확히 한 면이 완전히 맞춰져 있거나 아무 면도 안 맞춰져 있습니다. 맞춰진 면을 뒤쪽에 둡니다. 나머지 3개의 엣지를 시계 방향으로 순환시키면 큐브가 100% 완성됩니다!",
      "keyTakeaway": "3개의 엣지 순환은 짝치환(두 개의 맞교환)으로, 큐브 패리티 법칙을 완벽히 보존합니다. 이 동작이 끝나면 큐브는 항등원(Identity, 완전 해결 상태)에 도달합니다!",
      "cases": {
        "case-clockwise-u-perm": {
          "caseName": "케이스 1: 3개 엣지 시계 방향 순환",
          "badge": "Ua 순환 치환",
          "initialDescription": "한 면이 완전히 맞춰져 있습니다(뒤쪽에 둡니다). 나머지 3개 엣지(앞, 왼, 오른)가 시계 방향으로 순환해야 합니다.",
          "targetDescription": "🎉 루빅스 큐브가 100% 완전히 해결되었습니다! 모든 면이 단일 색상으로 빛납니다.",
          "detailedSteps": [
            {
              "stepTitle": "스텝 1: R",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "오른쪽 페어 올리기."
            },
            {
              "stepTitle": "스텝 2: U'",
              "handAction": "윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "페어 회전."
            },
            {
              "stepTitle": "스텝 3: R",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "순환 진행."
            },
            {
              "stepTitle": "스텝 4: U",
              "handAction": "윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "순환 진행."
            },
            {
              "stepTitle": "스텝 5: R",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "순환 진행."
            },
            {
              "stepTitle": "스텝 6: U",
              "handAction": "윗면을 시계 방향으로 90° 밉니다.",
              "pieceEffect": "순환 진행."
            },
            {
              "stepTitle": "스텝 7: R",
              "handAction": "오른쪽 면을 위로 90° 올립니다.",
              "pieceEffect": "순환 진행."
            },
            {
              "stepTitle": "스텝 8: U'",
              "handAction": "윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "정렬 시작."
            },
            {
              "stepTitle": "스텝 9: R'",
              "handAction": "오른쪽 면을 아래로 90° 내립니다.",
              "pieceEffect": "왼쪽 면 고정."
            },
            {
              "stepTitle": "스텝 10: U'",
              "handAction": "윗면을 반시계 방향으로 90° 밉니다.",
              "pieceEffect": "모든 엣지 정렬."
            },
            {
              "stepTitle": "스텝 11: R2 (완성!)",
              "handAction": "오른쪽 면을 180° 반바퀴 회전시킵니다.",
              "pieceEffect": "모든 층이 잠기며 루빅스 큐브가 완전히 완성됩니다!"
            }
          ],
          "proTips": [
            "완성된 면이 하나도 없다면 아무 방향에서나 공식을 1번 쓰면 완성된 면이 하나 생깁니다!"
          ]
        }
      }
    }
  },
  "graph": {
    "badge": "이산수학 & 추상대수학",
    "title": "루빅스 큐브의 그래프 이론 심층 분석",
    "subtitle": "수학적 케일리 그래프, 대칭군, 갓스 넘버(20수), 그리고 탐색 알고리즘 탐구",
    "tabs": {
      "explorer": "케일리 부분그래프 탐색기",
      "cayley": "케일리 그래프 정의",
      "diameter": "그래프 지름 (갓스 넘버)",
      "search": "최적 탐색 알고리즘",
      "commutators": "교환자 & 켤레 연산"
    },
    "explorer": {
      "selectSubgroup": "부분군 궤도 선택:",
      "runBfs": "너비 우선 탐색 (BFS) 실행",
      "resetBfs": "탐색 초기화",
      "shortestPath": "최단 경로 / 갓스 알고리즘",
      "identity": "항등원 (완성 상태)",
      "exploredStates": "탐색된 상태 노드 수",
      "realtimeSync": "3D 큐브와 실시간 동기화",
      "depth": "거리 / 깊이 d(e, v):",
      "nodeId": "노드 식별자:",
      "movesSeq": "최소 생성원 회전열:",
      "diameter": "부분군 지름:",
      "syncHint": "아무 노드나 클릭하면 3D 큐브가 해당 순열 상태로 즉시 회전합니다.",
      "legendSolved": "완성 상태 (e)",
      "legendVisited": "방문한 노드",
      "legendPath": "최단 경로 (BFS)",
      "legendSelected": "선택된 상태",
      "subgroups": {
        "checkerboard": {
          "name": "체커보드 부분군 Q₃ ≅ (ℤ/2ℤ)³",
          "desc": "생성원 집합 S = {M2, E2, S2}. 가환군(아벨군)으로, 단 8개 상태와 지름 3을 가집니다."
        },
        "r2u2": {
          "name": "이면체 부분군 ⟨R², U²⟩ ≅ D₄",
          "desc": "오직 오른쪽 180°와 윗면 180° 회전만 허용. 노드 12개, 지름 6의 순환 대칭 구조."
        },
        "commutator": {
          "name": "섹시 무브 순환군 ⟨R U R' U'⟩ ≅ ℤ₆",
          "desc": "4수 교환자를 반복 적용. 6번 회전 시 정확히 항등원(완성)으로 복귀하는 위수 6의 부분군."
        }
      }
    },
    "cayleySection": {
      "title": "케일리 그래프 Γ(G, S)의 대수적 구조",
      "intro": "군 G와 생성원 집합 S에 대하여, 케일리 그래프 Γ = (V, E)는 다음과 같이 엄밀하게 정의됩니다: 각 정점 v ∈ V는 유일한 큐브 상태를 나타내며, 유향 변 (u, v)는 어떤 생성원 s ∈ S가 존재하여 u · s = v를 만족할 때 존재합니다.",
      "regularTitle": "18-정규 그래프 (18-Regular)",
      "regularDesc": "Half-Turn Metric (HTM)에서 6개 면 × 3가지 회전 각도(90°, -90°, 180°) = 18개의 생성원이 존재하므로, 모든 정점은 정확히 18개의 차수(degree)를 갖는 완전 정규 그래프입니다.",
      "vertexTransitiveTitle": "정점 추이성 (Vertex Transitive)",
      "vertexTransitiveDesc": "임의의 두 큐브 상태 u, v에 대하여, u를 v로 매핑하는 그래프 자기동형사상(Automorphism)이 항상 존재합니다. 즉, 큐브 상태 공간은 어디서 보나 국소적으로 완벽히 동일한 기하학적 대칭을 가집니다.",
      "bipartiteTitle": "이분 그래프 성질 (Bipartite in QTM)",
      "bipartiteDesc": "Quarter-Turn Metric(90° 회전만 1수로 인정)에서는 한 번의 회전이 항상 조각 순열의 홀짝성(Parity)을 반전시킵니다. 따라서 홀수 길이의 사이클이 존재하지 않아 그래프가 완벽한 이분 그래프(Bipartite)를 형성합니다.",
      "groupOrderTitle": "루빅스 큐브 군의 위수 |G|",
      "groupOrderIntro": "큐브를 물리적으로 분해하지 않고 회전만으로 도달 가능한 총 상태 수는 다음과 같이 정확히 계산됩니다:",
      "twelveOrbitsIntro": "왜 물리적 조각 조합(8! × 3⁸ × 12! × 2¹²)보다 12배 작을까요? 세 가지 대수적 보존 법칙 때문입니다:",
      "cornerParity": "코너 방향 합 보존: Σ orient(corner) ≡ 0 (mod 3)",
      "cornerParityDesc": "하나의 코너만 단독으로 120° 비틀 수 없습니다 (위수 3 제약).",
      "edgeParity": "엣지 뒤집힘 합 보존: Σ flip(edge) ≡ 0 (mod 2)",
      "edgeParityDesc": "하나의 엣지만 홀로 제자리에서 뒤집을 수 없습니다 (위수 2 제약).",
      "permParity": "순열 홀짝성 보존: sgn(σ_corners) = sgn(σ_edges)",
      "permParityDesc": "다른 조각에 영향 없이 단 두 개의 조각만 맞교환할 수 없습니다 (교대군 제약)."
    },
    "diameterSection": {
      "badge": "지름 = 20 수",
      "title": "그래프 지름 & 갓스 넘버 (God's Number)",
      "intro": "그래프 이론에서 지름(Diameter)은 모든 정점 쌍 간의 최단 경로 거리 중 최댓값 diam(Γ) = max d(u, v)으로 정의됩니다. 큐브에서는 어떤 헝클어진 상태에서도 최적의 방법(신이 푼다면)으로 몇 수 안에 풀 수 있는가를 의미합니다.",
      "htmTitle": "HTM 메트릭: 지름 = 20",
      "htmDesc": "2010년 7월, 토마스 로키키(Tomas Rokicki), 허버트 코쳄바(Herbert Kociemba) 등은 구글의 분산 연산 지원(35 CPU 연)을 받아 모든 4.3 × 10¹⁹ 상태가 최대 20수 안에 풀림을 수학적으로 증명했습니다.",
      "qtmTitle": "QTM 메트릭: 지름 = 26",
      "qtmDesc": "180° 회전을 2수로 계산하는 Quarter-Turn Metric에서는 지름이 정확히 26수로 증명되었습니다.",
      "superflipTitle": "최장 거리 대척점: 슈퍼플립 (Superflip)",
      "superflipDesc": "모든 코너는 제자리에 맞고 모든 12개 엣지가 제자리에서 뒤집힌 \"슈퍼플립\" 상태는 완성 상태로부터 정확히 거리 20에 위치하는 대척점(Antipode)입니다. 19수 이하로는 절대 풀 수 없습니다.",
      "distTitle": "거리별 상태 분포 (거리 20에 도달하는 상태 수)",
      "distNote": "대부분의 상태는 거리 17~18 부근에 집중되어 있으며, 20수가 필요한 상태는 약 4억 9천만 개로 전체의 극히 일부에 불과합니다."
    },
    "searchSection": {
      "title": "최단 경로 탐색 알고리즘",
      "bfsFailTitle": "단순 BFS의 한계 (차원의 저주)",
      "bfsFailDesc": "18-정규 그래프에서 너비 우선 탐색(BFS)을 시도하면 깊이 d에서 노드 수가 18^d로 기하급수적으로 폭증합니다. 깊이 10만 가도 수조 개의 메모리가 필요하여 일반적인 BFS로는 탐색이 불가능합니다.",
      "paradigmsIntro": "현대 인공지능과 그래프 탐색은 다음 3가지 핵심 패러다임을 통해 이를 극복합니다:",
      "bibfsTitle": "양방향 BFS (Bidirectional Search)",
      "bibfsDesc": "시작 노드와 목표 노드(완성 상태) 양쪽에서 동시에 탐색 반경을 넓혀 중간 지점에서 만납니다. 시간 복잡도가 O(b^d)에서 O(b^(d/2))로 획기적으로 감소합니다.",
      "pdbTitle": "패턴 데이터베이스 (Pattern Databases / PDB)",
      "pdbDesc": "코너 조각이나 엣지 조각만을 고려하는 완화된 상(Quotient) 그래프에서 미리 모든 최단 거리를 역산해 둡니다. 이는 A* 탐색에서 절대 실제 거리를 과대평가하지 않는 완벽한 허용적 휴리스틱(Admissible Heuristic)을 보장합니다.",
      "kociembaTitle": "코쳄바의 2단계 알고리즘 (Kociemba 2-Phase Algorithm)",
      "kociembaIntro": "현대 모든 초고속 솔버의 근간이 되는 군론적 축소 알고리즘:",
      "phase1Title": "1단계: 부분군 H = ⟨U, D, R2, L2, F2, B2⟩ 로 유도",
      "phase1Desc": "모든 엣지의 방향(방향 벡터 0)과 코너 방향을 맞추고 중간층 엣지를 중층으로 모읍니다. 이 상공간의 크기는 약 2.2 × 10⁹ 개로 0.001초 만에 최적 경로를 찾습니다.",
      "phase2Title": "2단계: 부분군 H 내부에서 완성 상태 e 로 탐색",
      "phase2Desc": "H 내부에서는 R, L, F, B 면의 90° 회전이 금지되고 오직 180° 회전만 허용됩니다. 탐색 공간이 급격히 축소되어 순식간에 최종 해를 찾아냅니다."
    },
    "commutatorSection": {
      "title": "교환자 [A, B] 와 켤레 연산 A B A⁻¹",
      "intro": "루빅스 큐브의 고수와 블라인드(BLD) 선수들은 긴 공식을 외우지 않고 군론의 교환자와 켤레 연산을 이용해 즉석에서 공식을 유도합니다.",
      "commutatorTitle": "교환자 (Commutator): [A, B] = A B A⁻¹ B⁻¹",
      "commutatorDesc1": "두 동작 A와 B가 서로 교환 가능하다면(AB = BA) [A, B] = e (항등원, 아무 변화 없음)가 됩니다. 하지만 교환되지 않는다면 오직 두 동작의 교집합 영역에 있는 조각들만 국소적으로 변화합니다.",
      "commutatorDesc2": "이를 통해 다른 맞춰진 조각들을 99% 온전히 보존하면서 정확히 3개의 코너나 3개의 엣지만 순환(3-Cycle)시키는 기적적인 수술이 가능해집니다.",
      "conjugateTitle": "켤레 연산 (Conjugation): A B A⁻¹",
      "conjugateIntro": "\"셋업 무브(Setup Move)\"의 수학적 본질입니다:",
      "setupMove": "A (셋업): 원하는 조각을 수술하기 편한 위치로 잠시 이동시킵니다.",
      "operatorMove": "B (주요 조작): 교환자나 알고리즘을 실행하여 해당 조각들을 변환합니다.",
      "teardownMove": "A⁻¹ (셋업 해제): A의 정확한 역연산을 실행하여 주변 조각들을 원상복구합니다.",
      "conjugateSummary": "켤레 연산은 연산 B의 작용을 큐브 상의 전혀 다른 위치로 그대로 복사-이식하는 강력한 대수적 도구입니다.",
      "infoBox": "고급 해법인 3-스타일(3-Style) 공식 수천 가지는 모두 [A, B] 교환자와 A B A⁻¹ 켤레 연산 단 두 가지 원리로 유도됩니다."
    }
  },
  "sandbox": {
    "wcaScramble": "공식 WCA 스크램블:",
    "copyScramble": "스크램블 복사",
    "newScramble": "새 스크램블 생성",
    "scrambleCube": "3D 큐브 섞기",
    "resetSolved": "완성 상태로 초기화",
    "title": "3D 인터랙티브 샌드박스 & 스피드큐빙 타이머",
    "undo": "한 수 취소",
    "turnControls": "면 회전 조작패널",
    "testerTitle": "알고리즘 실시간 테스트기",
    "testerPlaceholder": "공식 입력 (예: R U R' U' R' F R2 U' R' U' R U R' F')...",
    "execute": "공식 실행",
    "invert": "역공식 반전",
    "history": "회전 기록",
    "timerTitle": "스피드큐빙 타이머",
    "releaseToStart": "손을 떼면 타이머가 시작됩니다!",
    "holdSteady": "스페이스바를 누르고 계세요 (0.5초 대기)...",
    "solvingTapToStop": "측정 중! 아무 키나 누르면 멈춥니다",
    "holdSpaceToStart": "스페이스바를 꾹 누르고 있으면 준비됩니다",
    "bestTime": "최고 기록 (Best)",
    "ao5": "최근 5회 평균 (Ao5)",
    "recentSolves": "최근 기록 목록",
    "invertTooltip": "역회전 공식 계산",
    "clearHistory": "기록 삭제",
    "turns": "회전",
      "referenceTitle": "모범 답안 및 솔버",
      "showReference": "모범 답안 보기",
      "hideReference": "모범 답안 숨기기 (스포일러 방지)",
      "alreadySolved": "큐브가 이미 완성되어 있습니다! 큐브를 섞거나 면을 회전하면 모범 답안이 생성됩니다.",
      "solutionBadge": "추천 해결 경로",
      "copySolution": "해법 공식 복사",
      "copied": "복사 완료!",
      "stepNext": "다음 수",
      "stepPrev": "이전 수",
      "autoSolve": "자동 재생",
      "pause": "일시정지",
      "solveInstant": "즉시 맞추기",
    "solverMode": "복원 해법 모드",
    "cfopMode": "CFOP 튜토리얼 단계별 해법",
    "optimalMode": "최소 회전 직접 역순",
    "cfopMethodDesc": "튜토리얼 7단계(화이트 크로스 → 1층 코너 → 2층 엣지 → 옐로우 크로스 → 코너 오리엔테이션 → 코너 퍼뮤테이션 → 엣지 퍼뮤테이션)에 따라 순차적으로 복원하여 진단 단계를 진행합니다.",
    "optimalMethodDesc": "스크램블을 역순으로 직접 회전하여 최소 회전수로 빠르게 복원합니다.",
    "stageCompleted": "단계 완료",
    "currentStage": "현재 진행 단계",
    "stageHeader": "{stage}단계: {name}",
    "stageMovesCount": "{count}회전",
    "stageNames": {
          "whiteCross": "화이트 크로스",
          "firstLayer": "1층 코너 (1단계 완성)",
          "secondLayer": "2층 엣지 (2단계 완성)",
          "yellowCross": "옐로우 크로스",
          "orientYellowCorners": "옐로우 코너 방향 맞추기",
          "permuteYellowCorners": "옐로우 코너 위치 맞추기",
          "permuteYellowEdges": "옐로우 엣지 위치 맞추기 (완성)"
    },

      "phaseDiagnostic": "CFOP / 초급 해법 단계 진단",
      "phaseCurrent": "현재 단계",
      "phaseNextAlgo": "추천 공식",
      "piecesRestored": "맞춘 조각 수",
      "solutionProgress": "해법 진행 상황",
      "directInverseNote": "안내: 현재 해법은 20수 이내의 최적 역순 해법(전체 동시 복원)으로, 층별 해법과 다릅니다. 흰색 십자가 및 각 단계는 마지막 몇 수에서 한꺼번에 완성됩니다.",
      "edgesAligned": "개 엣지 정렬됨",
      "cornersDocked": "개 코너 삽입됨",
      "edgesPlaced": "개 엣지 배치됨",
      "edgesOriented": "개 엣지 방향 맞춤",
      "cornersOriented": "개 코너 방향 맞춤",
      "importPhysicalCube": "실제 큐브 상태 입력",
      "importSuccess": "실제 큐브 상태를 불러왔습니다! 단계별 복원 해법을 생성했습니다.",
      "phaseNames": {
        "whiteCross": "흰색 십자가 (1단계)",
        "firstLayer": "흰색 코너 / 1단계 완성 (2단계)",
        "secondLayer": "2층 엣지 / 2단계 완성 (3단계)",
        "yellowCross": "노란색 십자가 / OLL 엣지 (4단계)",
        "orientYellowCorners": "노란색 코너 방향 맞추기 / 슝 공식 (5단계)",
        "permuteYellowCorners": "노란색 코너 위치 맞추기 / PLL 코너 (6단계)",
        "permuteYellowEdges": "노란색 엣지 위치 맞추기 / 최종 완성 (7단계)",
        "solved": "완성된 상태 (항등 상태)"
      },
      "phaseTips": {
        "whiteCross": "4개의 흰색 엣지를 옆면 중심 조각 색상과 일치하도록 맞춥니다.",
        "firstLayer": "트위스트(R U R' U')를 사용하여 흰색 코너를 알맞게 삽입합니다.",
        "secondLayer": "왼손/오른손 삽입 공식을 사용하여 2층 엣지를 맞춥니다.",
        "yellowCross": "F (R U R' U') F' 공식을 사용하여 노란색 십자가를 만듭니다.",
        "orientYellowCorners": "슝 공식(R U R' U R U2 R')을 사용하여 노란색 조각을 모두 바닥으로 향하게 합니다.",
        "permuteYellowCorners": "헤드라이트를 찾고 코너 위치 교환 공식을 사용하여 4개 모서리의 위치를 맞춥니다.",
        "permuteYellowEdges": "U-Perm 공식을 사용하여 마지막 3개 엣지를 회전시켜 큐브를 완전히 완성합니다.",
        "solved": "축하합니다! 큐브가 완전히 완성되었습니다."
      },
},
  "quiz": {
    "badge": "실력 검증",
    "title": "루빅스 큐브 & 그래프 이론 마스터 퀴즈",
    "subtitle": "조작법, 회전 기호, 케일리 그래프, 대칭군 지식 8문항 테스트",
    "questionOf": "문제 {current} / {total}",
    "correct": "정답입니다!",
    "explanationLabel": "상세 해설:",
    "answeredOf": "답변 완료: {count} / {total}",
    "submit": "퀴즈 제출 및 채점",
    "score": "점수: {score} / {total}",
    "retake": "퀴즈 다시 풀기",
    "feedbackMaster": "완벽합니다! 당신은 큐브 조작과 그래프 이론의 마스터입니다!",
    "feedbackGood": "훌륭합니다! 큐브와 수학의 핵심 원리를 잘 이해하고 있습니다.",
    "feedbackPractice": "수고하셨습니다! 튜토리얼과 그래프 이론 내용을 복습해보세요.",
    "questions": {
      "1": {
        "question": "루빅스 큐브에서 중심(Center) 조각에 대한 설명 중 옳은 것은?",
        "options": [
          "언제든지 코너 조각과 자리를 바꿀 수 있다.",
          "내부 십자축(코어)에 고정되어 있어 면의 기준 색상을 정의한다.",
          "시계 방향으로 180° 돌리면 색상이 뒤바뀐다.",
          "총 12개가 존재한다."
        ],
        "explanation": "중심 조각은 6개이며 내부 코어에 고정되어 있습니다. 흰색 맞은편은 노란색, 초록 맞은편은 파란색처럼 절대적 공간 기준을 제공합니다."
      },
      "2": {
        "question": "섹시 무브 (R U R' U')를 완성된 큐브에서 연속으로 몇 번 실행해야 완전히 원래 상태로 돌아올까요?",
        "options": [
          "4회",
          "6회",
          "12회",
          "24회"
        ],
        "explanation": "(R U R' U')를 정확히 6번 반복하면 모든 조각이 원래 위치와 방향으로 완벽히 복원됩니다! 즉, 이 순열의 위수(Order)는 6입니다."
      },
      "3": {
        "question": "Half-Turn Metric (HTM)에서 루빅스 큐브 케일리 그래프의 정점 차수(Degree)는 얼마인가요?",
        "options": [
          "6",
          "12",
          "18",
          "26"
        ],
        "explanation": "6개 면 × 3가지 회전 각도(90°, -90°, 180°) = 각 정점에서 18개의 변(Edge)이 뻗어나가는 18-정규 그래프입니다."
      },
      "4": {
        "question": "HTM 메트릭에서 케일리 그래프의 지름(Diameter), 즉 \"갓스 넘버(God's Number)\"는 얼마인가요?",
        "options": [
          "18수",
          "20수",
          "24수",
          "26수"
        ],
        "explanation": "2010년 구글의 대규모 분산 연산 증명을 통해, 임의의 어떤 큐브 상태라도 최대 20수 안에 풀 수 있음이 증명되었습니다."
      },
      "5": {
        "question": "물리적으로 분해 가능한 큐브 상태 중 오직 1/12만이 회전으로 도달 가능한 연결 성분을 이루는 이유는?",
        "options": [
          "큐브에 엣지가 12개 있기 때문에",
          "분해한 큐브에 12가지 색상이 있기 때문에",
          "코너 방향(mod 3), 엣지 뒤집힘(mod 2), 순열 홀짝성(mod 2)의 3가지 보존 법칙(3 × 2 × 2 = 12) 때문",
          "6면 × 2방향 = 12 이기 때문에"
        ],
        "explanation": "3 × 2 × 2 = 12. 큐브를 물리적으로 뜯지 않는 한, 코너 하나만 비틀거나, 엣지 하나만 뒤집거나, 두 조각만 맞바꾸는 것은 불가능합니다."
      },
      "6": {
        "question": "마이클 리드의 \"슈퍼플립(Superflip)\" 상태가 수학사에서 중요한 의미를 갖는 이유는?",
        "options": [
          "풀이에 반드시 20수가 필요함이 최초로 엄밀하게 증명된 대척점 상태이기 때문에",
          "인간이 풀 수 없는 유일한 상태이기 때문에",
          "모든 코너가 뒤집혀 있기 때문에",
          "완성 상태에서 1수 만에 도달할 수 있기 때문에"
        ],
        "explanation": "슈퍼플립(코너 완성, 12개 엣지 모두 제자리 반전)은 케일리 그래프에서 완성 상태로부터 정확히 거리 20에 위치하는 대척점입니다."
      },
      "7": {
        "question": "패턴 데이터베이스(PDB)가 A* 탐색에서 허용적 휴리스틱(Admissible Heuristic)을 보장하는 이유는?",
        "options": [
          "랜덤으로 최단 경로를 추측하기 때문에",
          "일부 제약을 완화한 상(Quotient) 그래프에서의 최단 거리이므로 실제 거리를 결코 과대평가하지 않기 때문에",
          "4300경 개의 모든 상태를 메모리에 저장하기 때문에",
          "10초 이내에 해를 출력하도록 강제하기 때문에"
        ],
        "explanation": "허용적 휴리스틱 h(n) ≤ h*(n) 이어야 합니다. 조각 일부만 고려하는 축소 그래프에서의 거리는 실제 전체 거리보다 항상 작거나 같습니다."
      },
      "8": {
        "question": "군론에서의 켤레 연산 A B A⁻¹ 은 큐브에서 어떻게 작용하나요?",
        "options": [
          "무작위로 조각을 섞는다.",
          "A로 목적 조각을 작업 위치로 가져오고, B로 변환한 후, A⁻¹로 원래 위치로 안전하게 되돌려놓는다.",
          "마주보는 두 면을 동시에 회전시킨다.",
          "WCA 공식 규정에서 금지되어 있다."
        ],
        "explanation": "켤레 연산은 셋업 무브의 본질입니다. A로 원하는 부품을 가져오고, B로 조작한 뒤, A⁻¹로 주변을 완벽히 복원합니다."
      }
    },
    "categories": {
      "solving": "큐브 해법",
      "graphTheory": "그래프 이론",
      "groupTheory": "군론"
    }
  },
  "cubeInput": {
    "modalTitle": "실제 루빅스 큐브 초기 상태 입력",
    "modalSubtitle": "카메라 자동 스캔 또는 전개도 직접 채색으로 실제 큐브 상태를 3D 샌드박스로 불러옵니다",
    "tabCamera": "카메라 자동 인식",
    "tabManual": "전개도 수동 입력",
    "cameraGuideTitle": "카메라 정렬 가이드",
    "cameraFacingHint": "안내에 따라 6면을 순서대로 스캔하고 기준 방향을 일정하게 유지하세요",
    "cameraInstructions": "화면 중앙의 3×3 뷰파인더 안에 큐브 면을 맞춘 후 촬영하세요",
    "scanPromptPrefix": "현재 스캔 중",
    "alignNotice": "강한 반사나 그림자를 피해 균일한 조명에서 스캔하세요",
    "captureFace": "이 면 캡처",
    "retakeFace": "다시 촬영",
    "faceCapturedLocked": "이 면은 스캔 완료되어 고정됨",
    "reidentifyFace": "이 면 다시 스캔",
    "clickToFineTune": "스티커를 클릭하여 색상을 미세 조정",
    "capturedFaceHint": "이 면의 색상이 고정되었습니다. 다시 인식하려면 아래 '이 면 다시 스캔'을 클릭하세요.",
    "scanningProgress": "스캔 진행률",
    "waitingAllFaces": "6개 면을 모두 스캔해 주세요 (완료: {0}/6)",
    "nextFace": "다음 면",
    "allFacesScanned": "6개 면 스캔 완료!",
    "startCamera": "카메라 시작",
    "stopCamera": "카메라 끄기",
    "cameraPermissionDenied": "카메라 권한이 거부되었습니다. 브라우저 설정에서 권한을 허용하거나 전개도 수동 입력을 이용하세요.",
    "cameraNotAvailable": "사용 가능한 카메라를 찾을 수 없습니다. 수동 입력을 사용해주세요.",
    "flipCamera": "카메라 전환",
    "jumpToManual": "전개도에서 확인 및 수정",
    "facesToScan": {
        "U": "윗면 U (흰색 센터)",
        "L": "왼쪽면 L (주황색 센터)",
        "F": "앞면 F (초록색 센터)",
        "R": "오른쪽면 R (빨간색 센터)",
        "B": "뒷면 B (파란색 센터)",
        "D": "밑면 D (노란색 센터)"
    },
    "faceOrientations": {
        "U": "흰색 면을 카메라로 향하고, 초록색 면을 아래/앞쪽으로 유지",
        "L": "주황색 면을 카메라로 향하고, 흰색 면을 위로 유지",
        "F": "초록색 면을 카메라로 향하고, 흰색 면을 위로 유지",
        "R": "빨간색 면을 카메라로 향하고, 흰색 면을 위로 유지",
        "B": "파란색 면을 카메라로 향하고, 흰색 면을 위로 유지",
        "D": "노란색 면을 카메라로 향하고, 초록색 면을 위/앞쪽으로 유지"
    },
    "manualInstructions": "팔레트에서 색상을 선택한 후 전개도의 블록을 클릭하여 색을 채우세요 (센터 색상 고정)",
    "colorPalette": "색상 팔레트",
    "selectedColor": "선택된 브러시",
    "remaining": "남음",
    "resetSolved": "완성 상태로 채우기",
    "clearAll": "센터 외 모두 비우기",
    "sampleScramble": "샘플 섞기 불러오기",
    "netLayoutHint": "십자 전개도: 위(U) / 왼쪽(L) / 앞(F) / 오른쪽(R) / 뒤(B) / 아래(D)",
    "statusValid": "큐브 상태가 물리적으로 유효하며 복원 가능합니다!",
    "statusInvalid": "큐브 상태가 아직 준비되지 않았습니다",
    "incompleteStickers": "아직 칠하지 않은 블록이 있습니다. 54칸을 모두 채워주세요.",
    "invalidColorCount": "색상 개수가 올바르지 않습니다 (색상당 9개여야 함).",
    "invalidCenters": "센터 색상 배치가 올바르지 않습니다.",
    "impossibleEdge": "물리적으로 불가능한 엣지 조각 조합입니다.",
    "duplicateEdge": "중복된 엣지 조각이 존재합니다.",
    "impossibleCorner": "물리적으로 불가능한 코너 조각 조합입니다.",
    "duplicateCorner": "중복된 코너 조각이 존재합니다.",
    "applyToSandbox": "3D 샌드박스로 가져오기 및 해법 생성",
    "cancel": "취소",
    "colorNames": {
        "white": "흰색",
        "yellow": "노란색",
        "green": "초록색",
        "blue": "파란색",
        "red": "빨간색",
        "orange": "주황색"
    }
},
  "footer": {
    "brandTitle": "RubikGraph 3D",
    "brandDesc": "인터랙티브 3D 모듈 & 이산 그래프 이론 익스플로러",
    "cayleyLabel": "케일리 그래프 Γ(G, S)",
    "godNumberLabel": "갓스 넘버 = 20 HTM",
    "groupOrderLabel": "|G| ≈ 4.3 × 10¹⁹"
  }
};
