import type { TranslationSchema } from '../types';

export const zhTW: TranslationSchema = {
  "nav": {
    "brandSubtitle": "3D 互動式教學 & 圖論探索",
    "tutorial": "3D 教學指南",
    "graph": "圖論解析",
    "sandbox": "3D 沙盒演練",
    "quiz": "大師測驗",
    "shortcuts": "快捷鍵",
    "shortcutsTitle": "鍵盤快捷鍵指南",
    "primeDoubleHint": "按住 Shift + 字母鍵 執行逆時針轉動（撇號，如 R'）。",
    "timerHint": "在沙盒頁面長按空白鍵即可啟動專業速解計時器！"
  },
  "cube3d": {
    "dragHint": "按住滑鼠拖曳旋轉 3D 視角",
    "turn": "轉動",
    "clockwise": "90° 順時針",
    "counterClockwise": "90° 逆時針",
    "halfTurn": "180° 半圈轉動",
    "faces": {
      "U": "頂面 / Up (白)",
      "D": "底面 / Down (黃)",
      "R": "右面 / Right (紅)",
      "L": "左面 / Left (橙)",
      "F": "前面 / Front (綠)",
      "B": "後面 / Back (藍)",
      "M": "中層垂直切片 (M)",
      "E": "中層水平切片 (E)",
      "S": "立面垂直切片 (S)"
    }
  },
  "tutorial": {
    "stageProgress": "階段",
    "focusModeOn": "聚焦模式 開",
    "focusModeOff": "聚焦模式 關",
    "focusTooltip": "將無關方塊半透明化，僅高亮顯示當前需要關注的特徵方塊",
    "keyIntuition": "核心心法",
    "caseSelectorTitle": "選擇當前型態 / 起始狀態",
    "caseSelectorPrompt": "你的魔術方塊當前處於哪種型態？",
    "howToIdentify": "如何快速辨識該型態：",
    "operationGuideTitle": "步驟操作指南",
    "moveProgress": "步數",
    "howToPerform": "本步轉動手法：",
    "pieceEffectLabel": "方塊機械物理位移：",
    "algorithmComplete": "公式執行完成！",
    "algorithmCompleteDesc": "已達成目標狀態。快對照你手中的方塊確認成果吧！",
    "restartCase": "從頭再來",
    "resetCase": "重設",
    "animateTurn": "在 3D 中演示此步",
    "rotating": "轉動演示中...",
    "autoPlay": "自動連貫演示",
    "pause": "暫停",
    "initialState": "起始狀態",
    "guided3D": "3D 操作指導",
    "targetGoal": "目標完成態",
    "showingInitial": "當前展示：公式執行前的初始狀態",
    "showingTarget": "當前展示：本步驟應達成的目標成果",
    "aimingFor": "本階段目標完成態",
    "dragToInspect": "按住滑鼠可 360° 旋轉檢視",
    "targetGoalLabel": "達成目標態",
    "reset3DView": "復位視角",
    "animationSpeedHint": "點擊步驟按鈕即可欣賞平滑逼真的 3D 物理層轉動動畫",
    "prevStage": "上一階段",
    "nextStage": "下一階段",
    "speedcuberTips": "速解高階技巧"
  },
  "stages": {
    "anatomy-notation": {
      "title": "第 0 步：結構與基礎轉動符號",
      "subtitle": "理解方塊類型、自由度與面旋轉力學",
      "overview": "魔術方塊由 3 種不同的方塊組成：6 個中心塊（位置絕對固定）、12 個邊塊（雙色）和 8 個角塊（三色）。在開始復原前，必須熟悉每個面順時針與逆時針旋轉的基本規律。",
      "keyTakeaway": "角塊永遠不可能變成邊塊，邊塊也永遠不可能變成角塊。復原魔術方塊不是拼湊表面貼紙，而是將三維立體方塊送入它們正確的空間軌道。",
      "cases": {
        "basic-turns": {
          "caseName": "基礎轉動符號 (R, U, F)",
          "badge": "基石動作",
          "initialDescription": "從復原狀態的方塊開始。觀察每次轉動一個面時，僅該面上的 9 個方塊發生位移，其餘 17 個方塊完全紋絲不動。",
          "targetDescription": "完成 R U R' U' 後，右前方的角塊與邊塊被調出並準備接受進一步認知。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：順時針旋轉右面 (R)",
              "handAction": "右手拇指放在前面，其餘手指握住右面後方，將整個右層向上推轉 90°（順時針）。",
              "pieceEffect": "將右前下方的底角塊提升到頂層，並展開右側中層切片。"
            },
            {
              "stepTitle": "第 2 步：順時針旋轉頂面 (U)",
              "handAction": "右手食指從右後方向左輕撥頂層，頂面順時針旋轉 90°。",
              "pieceEffect": "撥動頂層，將剛才升上來的角塊推離右側操作軌道。"
            },
            {
              "stepTitle": "第 3 步：逆時針旋轉右面 (R')",
              "handAction": "重新握住右層，向下拉回 90°（逆時針）。",
              "pieceEffect": "將右側豎列重新沉回底層基礎。"
            },
            {
              "stepTitle": "第 4 步：逆時針旋轉頂面 (U')",
              "handAction": "左手食指從左後方向右撥動頂層，頂面逆時針旋轉 90°。",
              "pieceEffect": "恢復頂層對齊，完成標準四步循環。"
            }
          ],
          "proTips": [
            "順時針定義：視線必須正對該面本身觀察。",
            "帶撇號（'）代表逆時針轉動 90°（英文讀作 Prime）。",
            "數字 2（如 U2）代表旋轉 180° 半圈。"
          ]
        }
      }
    },
    "white-cross": {
      "title": "第 1 步：白色底面十字 (White Cross)",
      "subtitle": "築牢基石：將白色邊塊與白色中心及對應側面中心嚴絲合縫對齊",
      "overview": "目標是將 4 個白邊塊歸位到底層。核心要點：每個白邊塊的側面顏色，必須與相鄰側面中心塊顏色（綠對綠、紅對紅、藍對藍、橘對橘）完全匹配。",
      "keyTakeaway": "側面顏色未對齊的白十字不是真正復原的十字！每個邊塊都是同時連接兩個面的雙色錨點。",
      "cases": {
        "case-daisy-plunge": {
          "caseName": "情況 1：小雛菊對齊後 180° 下沉入位",
          "badge": "標準形態",
          "initialDescription": "白邊塊已聚集在黃色中心周圍（頂層小雛菊形態）。其綠色側面已與綠色中心塊對齊。",
          "targetDescription": "白綠邊塊鎖定在白色底面，白色與綠色中心完全相連。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面旋轉 180° (F2)",
              "handAction": "雙手握住前面，順時針旋轉 180°（轉動兩次 90°）。",
              "pieceEffect": "將白綠邊塊從頂部黃色層徑直沉入底層白色基座。"
            }
          ],
          "proTips": [
            "小雛菊法：先將 4 個白邊聚集在黃色中心周圍，極易上手且無需記憶複雜公式。",
            "側面顏色一旦與側中心對齊，一個簡單的 180° 下沉（F2、R2 等）即可完美歸位。"
          ]
        },
        "case-flipped-edge": {
          "caseName": "情況 2：前面邊塊朝向翻轉",
          "badge": "方向校正",
          "initialDescription": "白綠邊塊在白色與綠色中心之間的正確槽位中，但方向翻反了：綠色在白色面，白色在綠色面！",
          "targetDescription": "邊塊被俐落翻正，白色朝下，綠色與綠色中心完全吻合。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面逆時針旋轉 90° (F')",
              "handAction": "逆時針轉動前面 90°。",
              "pieceEffect": "將反向邊塊彈出至右側中間層。"
            },
            {
              "stepTitle": "第 2 步：頂面逆時針旋轉 90° (U')",
              "handAction": "左手食指逆時針撥動頂層 90°。",
              "pieceEffect": "在頂層騰出空間接納該邊塊。"
            },
            {
              "stepTitle": "第 3 步：右面順時針旋轉 90° (R)",
              "handAction": "右面向上推轉 90°。",
              "pieceEffect": "將邊塊帶入頂層，且朝向已被翻正。"
            },
            {
              "stepTitle": "第 4 步：頂面順時針旋轉 90° (U)",
              "handAction": "頂層向右推回 90° 與綠色中心對齊。",
              "pieceEffect": "邊塊與綠色中心對齊，隨時可以下沉入位。"
            }
          ],
          "proTips": [
            "當白邊塊側白朝向側面而非頂部時，移入中間層即可輕鬆翻轉歸位。"
          ]
        }
      }
    },
    "first-layer-corners": {
      "title": "第 2 步：底層角塊復原 (First Layer Corners)",
      "subtitle": "掌握經典右手連招 [R, U] = R U R' U' 完成純白底面",
      "overview": "完成白十字後，我們逐一裝入 4 個白色角塊。每個角塊具有 3 種顏色（如白綠紅）。將其置於目標槽位正上方，重複執行四步公式 (R U R' U') 直至白色朝下準確歸位。",
      "keyTakeaway": "右手公式 [R, U] = R U R' U' 是一個交換子操作，它能在局部槽位產生精確變化，同時完全保全方塊其餘部分。",
      "cases": {
        "case-white-facing-right": {
          "caseName": "情況 1：白色貼紙朝向右側",
          "badge": "1 組公式（最快）",
          "initialDescription": "白綠紅角塊位於頂層、綠紅槽位正上方，白色貼紙朝向右側。",
          "targetDescription": "角塊準確滑入底層，白色朝下，綠紅兩色與中心塊完美匹配。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：升起目標槽位 (R)",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "將右下角槽位提至頂層迎接角塊。"
            },
            {
              "stepTitle": "第 2 步：吸合角塊 (U)",
              "handAction": "右手食指順時針撥動頂層 90°。",
              "pieceEffect": "將角塊直接推進升起的槽位中。"
            },
            {
              "stepTitle": "第 3 步：沉入底層 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "將槽位與角塊帶回底面白色基座。"
            },
            {
              "stepTitle": "第 4 步：復位頂層對齊 (U')",
              "handAction": "左手食指逆時針撥回頂層 90°。",
              "pieceEffect": "恢復頂層基準方位。"
            }
          ],
          "proTips": [
            "當白色貼紙朝向右側時，只需執行 1 次右手公式 (R U R' U') 即可瞬間復原！"
          ]
        },
        "case-white-facing-up": {
          "caseName": "情況 2：白色貼紙朝向正上方",
          "badge": "3 組公式",
          "initialDescription": "白綠紅角塊位於槽位正上方，但白色貼紙直指天花板（朝上）。",
          "targetDescription": "角塊旋轉 120° 並端正嵌入底座，白色貼紙朝下。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 組 (1-4 步)：從頂面調整方向",
              "handAction": "執行一次 R U R' U'。",
              "pieceEffect": "角塊落入槽位，但白貼紙朝向正面。"
            },
            {
              "stepTitle": "第 2 组 (5-8 步)：彈出並旋轉",
              "handAction": "再次執行一次 R U R' U'。",
              "pieceEffect": "角塊重新彈出至頂層，白貼紙轉為朝向右側。"
            },
            {
              "stepTitle": "第 3 組 (9-12 步)：最終裝填入位",
              "handAction": "第三次執行 R U R' U'。",
              "pieceEffect": "角塊俐落端正地鎖入白色底座。"
            },
            {
              "stepTitle": "完成",
              "handAction": "結束整個公式序列。",
              "pieceEffect": "角塊完全復原。"
            }
          ],
          "proTips": [
            "白面朝上時，連續做 3 遍 (R U R' U') 必定成功！",
            "切勿整體翻轉方塊，始終保持白底朝下。"
          ]
        },
        "case-corner-trapped": {
          "caseName": "情況 3：角塊卡在底層槽位中",
          "badge": "脫困提取",
          "initialDescription": "角塊已經在底層，但朝向錯誤或位於錯誤的顏色插槽中。",
          "targetDescription": "將角塊提取到頂層，準備重新正向插入。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：升起被困角塊 (R)",
              "handAction": "右面向上推轉 90°。",
              "pieceEffect": "將被困角塊帶至頂層。"
            },
            {
              "stepTitle": "第 2 步：推離移開 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "將角塊踢出右側豎列。"
            },
            {
              "stepTitle": "第 3 步：恢復底座 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢復底層白色十字完整無損。"
            },
            {
              "stepTitle": "第 4 步：調整對齊 (U')",
              "handAction": "復位頂層。",
              "pieceEffect": "準備重新正確裝填。"
            }
          ],
          "proTips": [
            "底層角塊卡住或扭曲時，執行一次右手公式 (R U R' U') 即可瞬間將其頂出。"
          ]
        }
      }
    },
    "second-layer-edges": {
      "title": "第 3 步：中層邊塊復原 (Second Layer)",
      "subtitle": "角邊配對組合，完成方塊前兩層 (F2L)",
      "overview": "在頂層尋找不含黃色的邊塊，將其側面顏色與正面中心塊對齊。觀察其頂面顏色，判斷該邊塊應填入右側槽位還是左側槽位。",
      "keyTakeaway": "此公式通過「反推邊塊避讓、升出底角空中配對、再整體送入槽位」的優雅邏輯運作。",
      "cases": {
        "case-insert-right": {
          "caseName": "情況 1：邊塊向右側槽位填入",
          "badge": "右向插入",
          "initialDescription": "綠紅邊塊在頂層，綠色與正面中心對齊。頂面貼紙為紅色，說明需插入右側槽位。",
          "targetDescription": "綠紅邊塊鎖定在綠紅中心之間的右側中層插槽中。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：將邊塊推開避讓 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "將邊塊推離目標槽位（向反方向避讓）。"
            },
            {
              "stepTitle": "第 2 步：升起底角 (R)",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "將匹配的底角塊升至頂層。"
            },
            {
              "stepTitle": "第 3 步：空中角邊配對 (U')",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "角塊與邊塊在空中貼合，形成同色連塊對。"
            },
            {
              "stepTitle": "第 4 步：沉回復位 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢復白色底座。"
            },
            {
              "stepTitle": "第 5 步：調整連塊方位 (U')",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "將連塊對移至正面上方。"
            },
            {
              "stepTitle": "第 6 步：打開正面插槽 (F')",
              "handAction": "前面逆時針旋轉 90°。",
              "pieceEffect": "開啟正面接收插槽。"
            },
            {
              "stepTitle": "第 7 步：滑入連塊對 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "將連塊對滑入中層槽位。"
            },
            {
              "stepTitle": "第 8 步：鎖定插槽 (F)",
              "handAction": "前面順時針旋轉 90°。",
              "pieceEffect": "鎖定中層邊塊，底層完全修復。"
            }
          ],
          "proTips": [
            "記憶口訣：「遠推、起角、空中配對、正面裝入」。"
          ]
        },
        "case-insert-left": {
          "caseName": "情況 2：邊塊向左側槽位填入",
          "badge": "左向插入（鏡像）",
          "initialDescription": "綠橘邊塊在頂層，綠色與前面中心匹配。頂面貼紙為橘色，說明需插入左側槽位。",
          "targetDescription": "邊塊鎖定在綠橘中心之間的左側中層插槽中。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：將邊塊推開避讓 (U')",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "將邊塊推離左側插槽。"
            },
            {
              "stepTitle": "第 2 步：升起左底角 (L')",
              "handAction": "左面向上旋轉 90°。",
              "pieceEffect": "將左底角提至頂層。"
            },
            {
              "stepTitle": "第 3 步：空中角邊配對 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "角塊與邊塊在空中貼合配對。"
            },
            {
              "stepTitle": "第 4 步：恢復底座 (L)",
              "handAction": "左面向下拉回 90°。",
              "pieceEffect": "恢復白色底座。"
            },
            {
              "stepTitle": "第 5 步：調整連塊方位 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "將連塊對移至正前方。"
            },
            {
              "stepTitle": "第 6 步：打開正面插槽 (F)",
              "handAction": "前面順時針旋轉 90°。",
              "pieceEffect": "開啟正面插槽通道。"
            },
            {
              "stepTitle": "第 7 步：滑入連塊對 (U')",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "將連塊對送入插槽。"
            },
            {
              "stepTitle": "第 8 步：鎖定插槽 (F')",
              "handAction": "前面逆時針旋轉 90°。",
              "pieceEffect": "鎖定中層，下兩層完全復原。"
            }
          ],
          "proTips": [
            "左向插入是右向插入的完全鏡像：將 R 換成 L'，U 換成 U'。"
          ]
        }
      }
    },
    "yellow-cross": {
      "title": "第 4 步：黃色頂面十字 (Yellow Cross)",
      "subtitle": "使用萬能公式 F (R U R' U') F' 翻轉頂邊朝向",
      "overview": "觀察頂面（黃色面）。忽略角塊，黃色邊塊呈現三種圖案之一：中心孤點、小折角（L形）或水平一字。統一公式按序躍遷：中心點 → L形 → 一字形 → 頂面十字。",
      "keyTakeaway": "起始的 F 轉動將前面暫時下放，將邊塊翻轉轉化為標準的右手連招，末尾的 F' 完好無損地復原下兩層。",
      "cases": {
        "case-l-shape": {
          "caseName": "情況 1：小折角形態 ('L' 形 90°)",
          "badge": "最常見",
          "initialDescription": "兩個相鄰的黃邊朝上形成 'L' 形狀。擺放方塊使兩個邊塊分別指向 12 點鐘（後方）與 9 點鐘（左方）。",
          "targetDescription": "4 個黃色邊塊全部朝上，形成完整的黃色十字。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面順時針傾斜 (F)",
              "handAction": "前面順時針旋轉 90°。",
              "pieceEffect": "將下兩層安全移開，展開中層工作區。"
            },
            {
              "stepTitle": "第 2 步：升起右側 (R)",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "啟動右手連招。"
            },
            {
              "stepTitle": "第 3 步：撥動頂層 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "調整頂面黃邊方向。"
            },
            {
              "stepTitle": "第 4 步：右側降回 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢復右側豎列。"
            },
            {
              "stepTitle": "第 5 步：頂層復位 (U')",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "完成右手四步連招。"
            },
            {
              "stepTitle": "第 6 步：前面復位 (F')",
              "handAction": "前面逆時針旋轉 90°。",
              "pieceEffect": "恢復下兩層，鎖定黃色十字！"
            }
          ],
          "proTips": [
            "口訣：順-上-右-下-左-逆 (FUR - U'R'F')。",
            "做公式前務必確認 L 形指向 12 點和 9 點方向。"
          ]
        },
        "case-horizontal-line": {
          "caseName": "情況 2：水平一字形態",
          "badge": "一步成十字",
          "initialDescription": "相對的兩個黃邊連成一條穿過頂面的直線。水平橫握該線（9 點至 3 點鐘方向）。",
          "targetDescription": "一字形態瞬間擴展為完整的黃色十字。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面順時針 (F)",
              "handAction": "前面順時針轉動 90°。",
              "pieceEffect": "開啟工作槽區。"
            },
            {
              "stepTitle": "第 2 步：右面上提 (R)",
              "handAction": "右面向上轉動 90°。",
              "pieceEffect": "右手連招開始。"
            },
            {
              "stepTitle": "第 3 步：頂面順撥 (U)",
              "handAction": "頂面順時針轉動 90°。",
              "pieceEffect": "轉動頂層。"
            },
            {
              "stepTitle": "第 4 步：右面下拉 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢復豎列。"
            },
            {
              "stepTitle": "第 5 步：頂面逆撥 (U')",
              "handAction": "頂面逆時針轉動 90°。",
              "pieceEffect": "完成觸發。"
            },
            {
              "stepTitle": "第 6 步：前面逆時針 (F')",
              "handAction": "前面逆時針旋轉 90°。",
              "pieceEffect": "完整復原下兩層。"
            }
          ],
          "proTips": [
            "如果把直線豎著拿，公式將無法形成十字！必須嚴格水平橫放。"
          ]
        },
        "case-center-dot": {
          "caseName": "情況 3：僅中心孤點形態",
          "badge": "雙重應用",
          "initialDescription": "4 個黃色邊塊均未朝上，只有黃色中心塊可見。",
          "targetDescription": "由孤點轉變為 L 形，隨後轉變為十字。",
          "detailedSteps": [
            {
              "stepTitle": "第 1-6 步：執行 F (R U R' U') F'",
              "handAction": "從任意角度執行該公式。",
              "pieceEffect": "將孤點形態轉化為 L 形。"
            }
          ],
          "proTips": [
            "出現 L 形後，將其置於 12 點和 9 點鐘方向，再次執行公式即可。"
          ]
        }
      }
    },
    "yellow-face-sune": {
      "title": "第 5 步：黃色頂面翻正 (Sune 小魚公式)",
      "subtitle": "運用經典小魚公式將所有黃色角塊翻轉朝上",
      "overview": "黃色十字完成後，我們翻轉所有角塊使整個頂面完全變黃。著名的小魚公式 (Sune) 能夠在保全十字和下兩層的前提下，同時扭轉 3 個角塊。",
      "keyTakeaway": "受方向同位性（角塊朝向模 3 守恆）制約，合法魔術方塊永遠不可能單獨扭轉 1 個角塊。",
      "cases": {
        "case-the-fish": {
          "caseName": "情況 1：標準小魚形態 (1 個黃角朝上)",
          "badge": "標準 Sune",
          "initialDescription": "頂面恰好只有 1 個角塊朝上，形如小魚游動。將魚頭對準左下方（前左）。前右角塊的黃色貼紙朝向正前方。",
          "targetDescription": "整個頂面完全變平，呈現純淨金黃。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：升起右側連塊 (R)",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "將右前角邊對升起。"
            },
            {
              "stepTitle": "第 2 步：頂面前進 90° (U)",
              "handAction": "右手食指撥動頂層 90°。",
              "pieceEffect": "將連塊對向前推進。"
            },
            {
              "stepTitle": "第 3 步：右側降回避讓 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "暫時歸位右側豎列。"
            },
            {
              "stepTitle": "第 4 步：頂面再次前進 90° (U)",
              "handAction": "頂層順時針再撥 90°。",
              "pieceEffect": "推動連塊沿頂層邊緣周轉。"
            },
            {
              "stepTitle": "第 5 步：升起右槽接應 (R)",
              "handAction": "右面再次向上轉動 90°。",
              "pieceEffect": "準備接收連塊。"
            },
            {
              "stepTitle": "第 6 步：頂面 180° 直奔歸位 (U2)",
              "handAction": "快速撥動頂層 180°。",
              "pieceEffect": "連塊對直接精準扣入插槽。"
            },
            {
              "stepTitle": "第 7 步：平穩降入底層 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "將連塊鎖回白色底座。"
            }
          ],
          "proTips": [
            "小魚法則：魚頭務必始終指向左下角。",
            "如果右前角黃色沒有正對前方，做一次小魚公式，重新擺正魚頭到左下角，再做一次即可。"
          ]
        },
        "case-no-corners-yellow": {
          "caseName": "情況 2：純十字 0 個黃角朝上",
          "badge": "車燈/反光態",
          "initialDescription": "只有黃色十字可見，4 個角塊全都沒有朝上，黃色貼紙全部朝向側方。",
          "targetDescription": "生成小魚形態，隨後一次 Sune 即可復原頂面。",
          "detailedSteps": [
            {
              "stepTitle": "執行一次小魚公式",
              "handAction": "執行 R U R' U R U2 R'。",
              "pieceEffect": "翻轉 3 個角塊，生成標準小魚形態。"
            }
          ],
          "proTips": [
            "將黃色角塊車燈朝向左側放置，然後執行小魚公式。"
          ]
        }
      }
    },
    "permute-corners": {
      "title": "第 6 步：黃色角塊位置復原 (Position Corners)",
      "subtitle": "尋找側面「同色車燈」並將 4 個角塊換入正確槽位",
      "overview": "頂面已經全黃，但角塊側面顏色可能錯位。環顧頂層四周尋找「車燈」——同側面有兩個角塊顏色相同。將車燈放在後方（或左側），執行角塊輪換公式。",
      "keyTakeaway": "置換奇偶性要求角塊對換與邊塊對換必須保持相同的置換符號（屬於交錯群 A_n 的偶置換）。",
      "cases": {
        "case-headlights": {
          "caseName": "情況 1：在一面發現同色車燈",
          "badge": "標準角塊置換",
          "initialDescription": "同一側面的兩個角块顏色相同（車燈）。將車燈置於後方（背對自己）。",
          "targetDescription": "4 個角塊在所有 4 個側面全部與中心塊顏色吻合。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：頂面順時針 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "準備動作。"
            },
            {
              "stepTitle": "第 2 步：右面上提 (R)",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "提升右角。"
            },
            {
              "stepTitle": "第 3 步：頂面逆時針 (U')",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "讓出頂層。"
            },
            {
              "stepTitle": "第 4 步：左面上提 (L')",
              "handAction": "左面向上旋轉 90°。",
              "pieceEffect": "提升左角。"
            },
            {
              "stepTitle": "第 5 步：頂面順時針 (U)",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "對齊右角。"
            },
            {
              "stepTitle": "第 6 步：右面下拉 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "復位右列。"
            },
            {
              "stepTitle": "第 7 步：頂面逆時針 (U')",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "對齊左角。"
            },
            {
              "stepTitle": "第 8 步：左面下拉 (L)",
              "handAction": "左面向下拉回 90°。",
              "pieceEffect": "復位左列，4 個角塊完全復原！"
            }
          ],
          "proTips": [
            "如果四面都沒有車燈，從任意角度執行一次該公式，四周必定會出現車燈！"
          ]
        }
      }
    },
    "permute-edges": {
      "title": "第 7 步：黃色邊塊位置復原 (Solved!)",
      "subtitle": "三邊順時針輪換：用 U-Perm 徹底復原方塊",
      "overview": "角塊已經完全解決！觀察頂層的 4 個邊塊。正好有一條邊已經全拼好（或者沒有）。將拼好的面放在後方。其餘 3 個邊塊只需按順時針輪換即可完全復原魔術方塊！",
      "keyTakeaway": "邊塊的三輪換是一個偶置換（兩個對換的乘積），嚴格遵守魔術方塊同位守恆定律。完成後魔術方塊進入最終恆等態！",
      "cases": {
        "case-clockwise-u-perm": {
          "caseName": "情況 1：3 個邊塊順時針輪換",
          "badge": "Ua 順時針置換",
          "initialDescription": "一個側面已完全拼好（將其放在後方）。其餘 3 個邊塊（前、左、右）需順時針輪換以復原。",
          "targetDescription": "🎉 魔術方塊 100% 完全復原！六面色彩純淨如初。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：R",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "升起右側連塊。"
            },
            {
              "stepTitle": "第 2 步：U'",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "轉動連塊。"
            },
            {
              "stepTitle": "第 3 步：R",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "推進輪換。"
            },
            {
              "stepTitle": "第 4 步：U",
              "handAction": "頂層順時针旋轉 90°。",
              "pieceEffect": "推進輪換。"
            },
            {
              "stepTitle": "第 5 步：R",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "推進輪換。"
            },
            {
              "stepTitle": "第 6 步：U",
              "handAction": "頂層順時針旋轉 90°。",
              "pieceEffect": "推進輪換。"
            },
            {
              "stepTitle": "第 7 步：R",
              "handAction": "右面向上旋轉 90°。",
              "pieceEffect": "推進輪換。"
            },
            {
              "stepTitle": "第 8 步：U'",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "開始對齊。"
            },
            {
              "stepTitle": "第 9 步：R'",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "鎖定左側。"
            },
            {
              "stepTitle": "第 10 步：U'",
              "handAction": "頂層逆時針旋轉 90°。",
              "pieceEffect": "對齊所有邊塊。"
            },
            {
              "stepTitle": "第 11 步：R2（終章！）",
              "handAction": "右面旋轉 180° 整圈。",
              "pieceEffect": "全部層級鎖定，魔術方塊完全復原！"
            }
          ],
          "proTips": [
            "如果 4 個面都沒有完整拼好的邊，從任意角度做一次公式，就會出現一個拼好的面！"
          ]
        }
      }
    }
  },
  "graph": {
    "badge": "離散數學 & 抽象代數",
    "title": "魔術方塊狀態空間的圖論深層解構",
    "subtitle": "探秘數學凱萊圖 (Cayley Graph)、對稱群、上帝之數 (20步) 與最優尋路演算法",
    "tabs": {
      "explorer": "凱萊子圖拓撲漫遊",
      "cayley": "凱萊圖嚴謹定義",
      "diameter": "圖直徑 (上帝之數)",
      "search": "最優求解搜尋演算法",
      "commutators": "換位子與共軛變換"
    },
    "explorer": {
      "selectSubgroup": "選擇子群作用軌道：",
      "runBfs": "執行廣度優先搜尋 (BFS)",
      "resetBfs": "重設搜尋",
      "shortestPath": "最短路徑 / 上帝演算法",
      "identity": "恆等元（復原態）",
      "exploredStates": "已展開狀態節點數",
      "realtimeSync": "3D 方塊即時動態連動",
      "depth": "距離 / 搜尋深度 d(e, v)：",
      "nodeId": "節點雜湊識別：",
      "movesSeq": "生成元最短轉動序列：",
      "diameter": "子群圖直徑：",
      "syncHint": "點擊圖中任意狀態節點，右側 3D 方塊將即時連動旋轉到該置換態。",
      "legendSolved": "復原態 (e)",
      "legendVisited": "已探索節點",
      "legendPath": "最短路徑 (BFS)",
      "legendSelected": "當前聚焦狀態",
      "subgroups": {
        "checkerboard": {
          "name": "棋盤格變換子群 Q₃ ≅ (ℤ/2ℤ)³",
          "desc": "生成元集 S = {M2, E2, S2}。阿貝爾交換群，僅包含 8 個狀態，圖直徑為 3。"
        },
        "r2u2": {
          "name": "二面體子群 ⟨R², U²⟩ ≅ D₄",
          "desc": "僅允許右面與頂面 180° 轉動。包含 12 個狀態節點，圖直徑為 6 的環狀對稱結構。"
        },
        "commutator": {
          "name": "右手四步循環子群 ⟨R U R' U'⟩ ≅ ℤ₆",
          "desc": "連續重複右手四步法。執行 6 次剛好恢復原狀，階數為 6 的單生成元循環子群。"
        }
      }
    },
    "cayleySection": {
      "title": "凱萊圖 Γ(G, S) 的代數幾何構造",
      "intro": "對於群 G 與其對稱生成元集合 S，凱萊圖 Γ = (V, E) 擁有嚴格的代數定義：每個頂點 v ∈ V 代表魔術方塊的一種唯一置換狀態；當且僅當存在生成元 s ∈ S 使得 u · s = v 時，存在一條由 u 指向 v 的有向邊 (u, v)。",
      "regularTitle": "18-正則圖 (18-Regular)",
      "regularDesc": "在半轉度量 (HTM: Half-Turn Metric) 下，6 個面各有 3 種獨立轉動（90°, -90°, 180°），總計 18 個生成元。因此，凱萊圖中的每一個頂點都嚴格擁有 18 條向外出射的邊，是高度對稱的正則圖。",
      "vertexTransitiveTitle": "頂點傳遞性 (Vertex Transitive)",
      "vertexTransitiveDesc": "對於圖中的任意兩個狀態節點 u 與 v，必定存在一個圖自同構映射將 u 映射為 v。這意味著方塊的狀態宇宙在任何一個節點局部看去，幾何環境完全同構，不存在任何「邊緣特異點」。",
      "bipartiteTitle": "QTM 度量下的二分圖性質 (Bipartite in QTM)",
      "bipartiteDesc": "在 1/4 轉度量 (QTM) 中，每一次 90° 旋轉必定顛倒稜塊或角塊置換的奇偶性 (Parity)。這意味著狀態圖不存在奇數長度的閉環，凱萊圖是一個嚴格的偶二分圖。",
      "groupOrderTitle": "魔術方塊群的階數（總狀態空間）|G|",
      "groupOrderIntro": "在不將方塊暴力拆解的前提下，從復原態出發純靠轉動能夠達到的所有狀態總數可被嚴格計算：",
      "twelveOrbitsIntro": "為什麼能夠達到的狀態數恰好比物理零部件的所有可能排布（8! × 3⁸ × 12! × 2¹²）小 12 倍？因為物理轉動受到三大代數守恆定律的嚴格束縛：",
      "cornerParity": "角塊朝向守恆：Σ orient(corner) ≡ 0 (mod 3)",
      "cornerParityDesc": "你無法在保持其他塊不變的情況下，單獨將一顆角塊就地旋轉 120°（模 3 約束）。",
      "edgeParity": "稜塊翻轉守恆：Σ flip(edge) ≡ 0 (mod 2)",
      "edgeParityDesc": "你無法在保持其他塊不變的情況下，單獨將一顆稜塊就地翻面（模 2 約束）。",
      "permParity": "置換奇偶性守恆：sgn(σ_corners) = sgn(σ_edges)",
      "permParityDesc": "角塊置換的符號必須與稜塊置換的符號相同，無法只對調兩顆方塊而不影響其餘結構（交錯群限制）。"
    },
    "diameterSection": {
      "badge": "圖直徑 = 20 步",
      "title": "圖直徑與上帝之數 (God's Number)",
      "intro": "在圖論中，圖的直徑 diam(Γ) = max d(u, v) 代表全圖中任意兩點間最短測地線距離的最大值。在魔術方塊中，它代表：哪怕由最狠的對手任意打亂，如果由「全知全能的上帝」使用最優解法，最多需要多少步即可還原。",
      "htmTitle": "HTM 半轉度量：上帝之數 = 20",
      "htmDesc": "2010 年 7 月，Tomas Rokicki、Herbert Kociemba、Morley Davidson 等數學家借助 Google 贊助的 35 CPU年分散式算力，徹底證明了三階魔術方塊在 HTM 下沒有任何一種狀態需要超過 20 步，即 diam(Γ) = 20。",
      "qtmTitle": "QTM 1/4轉度量：直徑 = 26",
      "qtmDesc": "如果將 180° 轉動計作兩步（即只允許 90° 旋轉），此時的圖直徑被嚴格證明為 26 步。",
      "superflipTitle": "最遙遠的對極點：超級翻轉 (Superflip)",
      "superflipDesc": "在 1995 年由 Michael Reid 證實的「超級翻轉」狀態（所有 8 個角塊全部在原位且朝向正確，而所有 12 個稜塊全部在原位但全部就地顛倒），被證明距離復原態的真正最短距離嚴格為 20 步，是凱萊圖最遙遠的對極點之一。",
      "distTitle": "狀態距離分佈規律",
      "distNote": "絕大多數打亂狀態（約 99% 以上）的距離集中在 17 到 18 步之間。真正需要極限 20 步的狀態大約有 4.9 億個，在 4300 億億的宏大總數中屬於極其罕見的深空孤點。"
    },
    "searchSection": {
      "title": "大規模圖的最優路徑搜尋演算法",
      "bfsFailTitle": "樸素 BFS 的崩潰（維度災難）",
      "bfsFailDesc": "在分支因子 b=18 的正則圖中，簡單廣度優先搜尋的節點數隨深度以 18^d 呈天文數字級爆炸。搜尋到深度 10 就已產生數萬億節點，記憶體瞬間枯竭，常規演算法完全束手無策。",
      "paradigmsIntro": "現代人工智慧與演算法理論通過以下三大數學範式破解了這一極限挑戰：",
      "bibfsTitle": "雙向廣度優先搜尋 (Bidirectional BFS)",
      "bibfsDesc": "同時從初始打亂態和目標復原態兩個方向交替輻射，當兩端的探索前沿在半途相遇時即拼接出最短路徑。時間與空間複雜度從 O(b^d) 驟降至 O(b^(d/2))。",
      "pdbTitle": "模式資料庫 (Pattern Databases / PDB)",
      "pdbDesc": "通過將魔術方塊抽象為只保留角塊或部分稜塊的商圖（Quotient Graph），預先離線計算出所有子狀態的最短距離。在 A* 搜尋中，PDB 提供了嚴格滿足 h(n) ≤ h*(n) 的容許啟發式估計（Admissible Heuristic），確保絕對最優解。",
      "kociembaTitle": "Kociemba 兩階段演算法 (2-Phase Algorithm)",
      "kociembaIntro": "由 Herbert Kociemba 發明，作為現代所有超高速計算機求解器的核心引擎：",
      "phase1Title": "階段 1：導引至子群 H = ⟨U, D, R2, L2, F2, B2⟩",
      "phase1Desc": "將所有稜塊方向翻正、角塊朝向翻正，並將 4 個中間層稜塊送回中層。此商空間的規模約為 2.2 × 10⁹，可在數毫秒內搜得最優解。",
      "phase2Title": "階段 2：在子群 H 內部搜尋通往恆等元 e 的路徑",
      "phase2Desc": "在 H 內部，禁止 R, L, F, B 的 90° 轉動，僅允許 180° 轉動。搜尋空間急劇坍縮，瞬間即可得出完整的全局近似最優還原序列（通常不超過 22 步）。"
    },
    "commutatorSection": {
      "title": "換位子 [A, B] 與共軛變換 A B A⁻¹",
      "intro": "頂尖盲解（BLD）選手與公式發明大師從不盲目死記硬背成百上千種公式，而是利用抽象代數中的換位子與共軛變換現場隨心所欲地合成出精巧的手術刀式演算法。",
      "commutatorTitle": "換位子 (Commutator)：[A, B] = A B A⁻¹ B⁻¹",
      "commutatorDesc1": "如果動作 A 與動作 B 可以對易（AB = BA），則換位子 [A, B] = e（恆等元，一切還原）。但當它們不可對易時，兩者的重疊影響區域將被高度聚焦。",
      "commutatorDesc2": "通過巧妙設計僅在單個方塊上相交的 A 與 B，換位子能實現令人驚嘆的「純三循環（3-Cycle）」——在保持其餘 99% 方塊完全不動的前提下，精準交換 3 個角塊或 3 個稜塊。",
      "conjugateTitle": "共軛變換 (Conjugation)：A B A⁻¹",
      "conjugateIntro": "共軛變換即是方塊界俗稱的「設定步驟 (Setup Move)」背後的純數學本質：",
      "setupMove": "A（設定）：將散落於任意位置的目標方塊，臨時調度到易於操作的手術槽位。",
      "operatorMove": "B（手術）：執行預備好的換位子或標準變換，精確完成局部狀態調換。",
      "teardownMove": "A⁻¹（撤銷）：嚴格執行 A 的逆動作，將被帶跑的所有環境方塊原路送回。",
      "conjugateSummary": "共軛變換使得我們只需掌握針對極少數固定槽位的基本算子 B，即可通過設定步 A 將其威力自由投射到整個方塊的任何空間角落。",
      "infoBox": "現代高階魔術方塊解法（如 3-Style 盲解體系）中數千個看似神妙莫測的公式，其本質全都是 [A, B] 換位子與 A B A⁻¹ 共軛變換的數學組合產物。"
    }
  },
  "sandbox": {
    "wcaScramble": "WCA 官方標準打亂公式：",
    "copyScramble": "複製打亂序列",
    "newScramble": "生成全新打亂",
    "scrambleCube": "執行打亂 3D 動畫",
    "resetSolved": "一鍵復位至復原態",
    "title": "3D 互動式演練沙盒 & 專業速解計時器",
    "undo": "撤銷上一步",
    "turnControls": "各面轉動操控板",
    "testerTitle": "自定義公式即時演練器",
    "testerPlaceholder": "在此輸入公式（例如：R U R' U' R' F R2 U' R' U' R U R' F'）...",
    "execute": "執行公式動畫",
    "invert": "反轉為逆公式",
    "history": "已走步數記錄",
    "timerTitle": "專業速解計時器",
    "releaseToStart": "鬆開空白鍵（或手指），計時立即開始！",
    "holdSteady": "按住空白鍵保持穩定（0.5 秒準備）...",
    "solvingTapToStop": "計時進行中！按任意鍵或點擊螢幕即可停止",
    "holdSpaceToStart": "長按空白鍵或觸控螢幕進入準備狀態",
    "bestTime": "最快單次 (PB)",
    "ao5": "五次去極值平均 (Ao5)",
    "recentSolves": "近期還原用時記錄",
    "invertTooltip": "計算逆演算法",
    "clearHistory": "清空歷史記錄",
    "turns": "步",
      "referenceTitle": "參考答案與求解導引",
      "showReference": "顯示參考答案",
      "hideReference": "隱藏參考答案（防劇透）",
      "alreadySolved": "魔方已處於復原狀態！打亂或轉動任意面即可產生參考還原步驟。",
      "solutionBadge": "推薦還原路徑",
      "copySolution": "複製解法公式",
      "copied": "已複製！",
      "stepNext": "下一步",
      "stepPrev": "上一步",
      "autoSolve": "自動演示",
      "pause": "暫停",
      "solveInstant": "瞬間復原",
    "solverMode": "還原解法模式",
    "cfopMode": "CFOP 分步教學解法",
    "optimalMode": "最少步快速逆序",
    "cfopMethodDesc": "嚴格按照教學7個階段（白色十字→底層角塊→中層棱塊→黃色十字→頂層翻角→頂層換角→頂層換棱）層先復原，精準觸發教學診斷階段推進。",
    "optimalMethodDesc": "直接對打亂公式求逆以達到最少旋轉步數快速復原。",
    "stageCompleted": "階段已完成",
    "currentStage": "當前進行階段",
    "stageHeader": "第 {stage} 階段：{name}",
    "stageMovesCount": "{count} 步",
    "stageNames": {
          "whiteCross": "白色十字",
          "firstLayer": "底層角塊（第一層）",
          "secondLayer": "中層棱塊（第二層）",
          "yellowCross": "頂層黃色十字",
          "orientYellowCorners": "頂層黃色角塊翻色",
          "permuteYellowCorners": "頂層黃色角塊位置歸位",
          "permuteYellowEdges": "頂層黃色棱塊位置歸位"
    },

      "phaseDiagnostic": "CFOP / 層先法階段診斷",
      "phaseCurrent": "當前還原階段",
      "phaseNextAlgo": "推薦公式",
      "piecesRestored": "方塊已就位復原數",
      "solutionProgress": "參考解法執行進度",
      "directInverseNote": "提示：當前為最優逆序解法（≤20步全局並發還原），並非傳統的層先逐層法；底層十字與各層狀態將在最後幾步協同完成。如需體驗層先法，可參照下方階段推薦公式練習。",
      "edgesAligned": "條邊已對齊",
      "cornersDocked": "個角塊已嵌入",
      "edgesPlaced": "條邊塊已歸位",
      "edgesOriented": "條邊已翻色",
      "cornersOriented": "個角已翻面",
      "importPhysicalCube": "錄入真實魔術方塊",
      "importSuccess": "真實魔術方塊初始狀態錄入成功！已為您規劃分步復原方案。",
      "phaseNames": {
        "whiteCross": "白色十字（階段 1）",
        "firstLayer": "底層角塊 / 第一層（階段 2）",
        "secondLayer": "中層邊塊 / 第二層（階段 3）",
        "yellowCross": "黃色十字 / 頂層邊定向（階段 4）",
        "orientYellowCorners": "黃色角塊翻色 / 小魚公式（階段 5）",
        "permuteYellowCorners": "黃色角塊歸位 / 角塊換位（階段 6）",
        "permuteYellowEdges": "黃色邊塊歸位 / 最終還原（階段 7）",
        "solved": "已完全復原（恆等狀態）"
      },
      "phaseTips": {
        "whiteCross": "將4個白色邊塊歸位，並對齊側面的中心塊顏色。",
        "firstLayer": "使用四步法（R U R' U'）將白色角塊精確嵌入底角。",
        "secondLayer": "使用左手/右手入槽公式將中層邊塊復位。",
        "yellowCross": "執行 F (R U R' U') F' 建構黃色十字。",
        "orientYellowCorners": "使用小魚公式（R U R' U R U2 R'）將所有黃色貼紙翻轉朝下。",
        "permuteYellowCorners": "尋找眼睛塊或使用換角公式調整4個角塊的正確相對位置。",
        "permuteYellowEdges": "執行三邊換公式（U-Perm）對調最後3個邊塊完成魔方。",
        "solved": "恭喜！魔方已處於恆等狀態，所有面皆已完全復原。"
      },
},
  "quiz": {
    "badge": "實戰大考",
    "title": "魔術方塊與圖論通識大師挑戰賽",
    "subtitle": "檢驗你對轉動符號、還原機理、凱萊圖拓撲與群論知識的掌握程度",
    "questionOf": "第 {current} 題 / 共 {total} 題",
    "correct": "回答完全正確！",
    "explanationLabel": "深度解析：",
    "answeredOf": "已作答：{count} / {total}",
    "submit": "提交試卷並計算最終得分",
    "score": "最終得分：{score} / {total}",
    "retake": "重新挑戰測試",
    "feedbackMaster": "太神了！你已經完全掌握了魔術方塊物理復原與高深圖論精髓！",
    "feedbackGood": "非常棒！你對方塊的還原機理與核心代數結構有著扎實的理解。",
    "feedbackPractice": "再接再厲！不妨回看 3D 教學與圖論章節，溫故而知新。",
    "questions": {
      "1": {
        "question": "在標準三階魔術方塊中，關於「中心塊 (Center)」的描述，下列哪項是正確的？",
        "options": [
          "可以通過轉動與角塊互換位置",
          "固定在內部十字軸心上，定義了該面的基準顏色",
          "順時針轉動 180° 後顏色會改變",
          "整個方塊共有 12 個中心塊"
        ],
        "explanation": "方塊有且僅有 6 個中心塊，它們直接固定在中央十字內軸上，相對朝向永遠固定（如白對黃、綠對藍、紅對橙），構成了三維空間的絕對基準參照系。"
      },
      "2": {
        "question": "在已復原的方塊上，連續重複執行右手四步法 (R U R' U') 多少次，整顆方塊將完全恢復原狀？",
        "options": [
          "4 次",
          "6 次",
          "12 次",
          "24 次"
        ],
        "explanation": "右手四步法在魔術方塊群中誘導的置換階數（Order）恰好為 6。因此連續做 6 次整整 24 步後，所有被調換的稜塊與角塊將完全恢復原位原色！"
      },
      "3": {
        "question": "在半轉度量 (HTM) 下，方塊凱萊圖 (Cayley Graph) 的每個頂點的正則度數是多少？",
        "options": [
          "6",
          "12",
          "18",
          "26"
        ],
        "explanation": "6 個面 × 每個面有 3 種獨立轉動（90°, -90°, 180°）= 18 個對稱生成元。因此每個頂點均出射 18 條邊，是標準的 18-正則圖。"
      },
      "4": {
        "question": "在 HTM 度量下，三階方塊凱萊圖的圖直徑（即著名的「上帝之數」）是多少步？",
        "options": [
          "18 步",
          "20 步",
          "24 步",
          "26 步"
        ],
        "explanation": "2010 年 7 月，數學家與計算機科學家借助 Google 贊助的大規模分散式叢集算力，徹底證明了任意方塊狀態均可在最多 20 步內解決。"
      },
      "5": {
        "question": "在物理拆散方塊可能形成的全部組合中，為什麼只有 1/12 能夠通過合法轉動還原？",
        "options": [
          "因為方塊一共有 12 個稜塊",
          "因為拆開後的方塊有 12 種不同貼紙顏色",
          "由於角塊朝向和 (mod 3)、稜塊朝向和 (mod 2) 以及置換奇偶性 (mod 2) 三大守恆定律的聯合制約 (3 × 2 × 2 = 12)",
          "因為 6 個面 × 2 個旋轉方向 = 12"
        ],
        "explanation": "3 × 2 × 2 = 12。在不拆解的前提下，單角扭轉是不可能的（mod 3），單稜翻轉是不可能的（mod 2），單獨對調兩顆方塊也是不可能的（奇偶同性）。因此總狀態空間被割裂為 12 個互不連通的孤立軌道。"
      },
      "6": {
        "question": "Michael Reid 的「超級翻轉 (Superflip)」狀態在圖論歷史上為何具有非凡意義？",
        "options": [
          "它是人類歷史上第一個被嚴格證明在 HTM 下必須消耗整整 20 步的對極點狀態",
          "它是目前已知唯一無法被還原的死鎖狀態",
          "它的所有角塊都發生了原地反轉",
          "它距離復原態只需 1 步"
        ],
        "explanation": "超級翻轉（8 個角全對，12 個稜全原地反轉）坐落在凱萊圖直徑最遠的對極點上，1995 年證明了它絕不可能在 19 步以內還原，奠定了上帝之數下界為 20。"
      },
      "7": {
        "question": "模式資料庫 (Pattern Databases / PDB) 能夠作為 A* 啟發式搜尋中「容許啟發式 (Admissible)」的根本原因是什麼？",
        "options": [
          "它在搜尋時對最短路徑進行隨機概率猜測",
          "它通過鬆弛約束在抽象商圖上計算真實測地距離，因此得出的啟發估計值永遠不會高估實際步數",
          "它把 4300 億億種可能全部硬編碼存進了記憶體",
          "它強制所有搜尋必須在 10 秒之內逾時截斷"
        ],
        "explanation": "容許啟發式必須滿足 h(n) ≤ h*(n)。由於忽略部分方塊的子問題（商圖）的實際最短距離必定小於等於完整原問題的距離，因此 PDB 天然構成了絕不高估的完美啟發函數。"
      },
      "8": {
        "question": "抽象代數中的共軛變換 A B A⁻¹ 在魔術方塊還原中是如何具體發揮作用的？",
        "options": [
          "將整個方塊進行徹底的無序亂序混洗",
          "先通過設定步 A 將目標塊送入手術位，通過 B 執行精確調換，再通過撤銷步 A⁻¹ 將周圍環境原樣復原",
          "同時快速旋轉方塊相對的兩個面",
          "在世界魔術方塊協會 (WCA) 競賽中屬於嚴禁使用的違規操作"
        ],
        "explanation": "共軛變換即方塊高階還原中「設定步 (Setup Move)」的代數本質：A 負責投遞，B 負責定向修改，A⁻¹ 負責原路環境還原。"
      }
    },
    "categories": {
      "solving": "復原解法",
      "graphTheory": "圖論",
      "groupTheory": "群論"
    }
  },
  "cubeInput": {
    "modalTitle": "錄入真實魔術方塊初始狀態",
    "modalSubtitle": "透過鏡頭自動掃描或手動在展開圖著色，將您手中的真實魔術方塊匯入 3D 沙盒教學",
    "tabCamera": "鏡頭自動辨識",
    "tabManual": "手動展開圖錄入",
    "cameraGuideTitle": "鏡頭對準指引",
    "cameraFacingHint": "請依照提示依序掃描 6 個面，並保持參考朝向一致",
    "cameraInstructions": "將魔術方塊當前面完整放入螢幕中央的 3×3 取景框內，確認 9 個色塊辨識無誤後點擊拍照",
    "scanPromptPrefix": "當前掃描",
    "alignNotice": "建議在光線均勻處掃描，避免強烈反光或陰影",
    "captureFace": "辨識並記錄此面",
    "retakeFace": "重新辨識",
    "faceCapturedLocked": "此面已完成採集並鎖定",
    "reidentifyFace": "重新識別此面",
    "clickToFineTune": "點擊色塊可切換微調顏色",
    "capturedFaceHint": "此面顏色已鎖定。如需重新識別，請點擊下方「重新識別此面」。",
    "scanningProgress": "採集進度",
    "waitingAllFaces": "請依次採集完成全部 6 個面 (已完成 {0}/6)",
    "nextFace": "進入下一面",
    "allFacesScanned": "6 個面已全部掃描完成！",
    "startCamera": "開啟鏡頭",
    "stopCamera": "關閉鏡頭",
    "cameraPermissionDenied": "鏡頭權限被拒絕，請在瀏覽器網址列允許鏡頭訪問，或使用手動錄入模式。",
    "cameraNotAvailable": "未檢測到可用鏡頭設備，請直接使用「手動展開圖錄入」。",
    "flipCamera": "切換鏡頭",
    "jumpToManual": "前往展開圖微調",
    "facesToScan": {
        "U": "頂面 U (白色中心)",
        "L": "左面 L (橙色中心)",
        "F": "正面 F (綠色中心)",
        "R": "右面 R (紅色中心)",
        "B": "背面 B (藍色中心)",
        "D": "底面 D (黃色中心)"
    },
    "faceOrientations": {
        "U": "頂面朝向鏡頭，綠色面保持朝向正前方/下方",
        "L": "左面朝向鏡頭，白色面保持朝向正上方",
        "F": "正面朝向鏡頭，白色面保持朝向正上方",
        "R": "右面朝向鏡頭，白色面保持朝向正上方",
        "B": "背面朝向鏡頭，白色面保持朝向正上方",
        "D": "底面朝向鏡頭，綠色面保持朝向正前方/上方"
    },
    "manualInstructions": "在下方調色盤選擇顏色，然後點擊展開圖中的色塊著色（中心塊顏色已固定為基準）",
    "colorPalette": "取色畫筆",
    "selectedColor": "當前畫筆顏色",
    "remaining": "待塗",
    "resetSolved": "填滿已復原態",
    "clearAll": "清空非中心塊",
    "sampleScramble": "載入測試打亂",
    "netLayoutHint": "十字展開圖：上頂(U) / 左(L) / 中正(F) / 右(R) / 極右背(B) / 下底(D)",
    "statusValid": "魔術方塊狀態物理有效，可直接匯入！",
    "statusInvalid": "魔術方塊狀態尚未就緒",
    "incompleteStickers": "尚有未著色的色塊，請完整塗滿 54 個色塊",
    "invalidColorCount": "顏色數量異常（標準魔術方塊每種顏色應恰好 9 塊）",
    "invalidCenters": "中心塊顏色順序不正確",
    "impossibleEdge": "檢測到物理上不可能存在的邊塊顏色組合",
    "duplicateEdge": "檢測到重複的多餘邊塊",
    "impossibleCorner": "檢測到物理上不可能存在的角塊顏色組合",
    "duplicateCorner": "檢測到重複的多餘角塊",
    "applyToSandbox": "匯入 3D 沙盒並生成教學解法",
    "cancel": "取消",
    "colorNames": {
        "white": "白色",
        "yellow": "黃色",
        "green": "綠色",
        "blue": "藍色",
        "red": "紅色",
        "orange": "橙色"
    }
},
  "footer": {
    "brandTitle": "RubikGraph 3D",
    "brandDesc": "互動式 3D 魔術方塊全解教學與離散圖論探索空間",
    "cayleyLabel": "凱萊圖 Γ(G, S)",
    "godNumberLabel": "上帝之數 = 20 HTM",
    "groupOrderLabel": "|G| ≈ 4.3 × 10¹⁹"
  }
};
