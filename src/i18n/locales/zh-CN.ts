import type { TranslationSchema } from '../types';

export const zhCN: TranslationSchema = {
  "nav": {
    "brandSubtitle": "3D交互式教学 & 图论探索",
    "tutorial": "3D教学指南",
    "graph": "图论解析",
    "sandbox": "3D沙盒演练",
    "quiz": "大师测验",
    "shortcuts": "快捷键",
    "shortcutsTitle": "键盘快捷键指南",
    "primeDoubleHint": "按住 Shift + 字母键 执行逆时针转动（撇号，如 R'）。",
    "timerHint": "在沙盒页面长按空格键即可启动专业速拧计时器！"
  },
  "cube3d": {
    "dragHint": "按住鼠标拖拽旋转 3D 视角",
    "turn": "转动",
    "clockwise": "90° 顺时针",
    "counterClockwise": "90° 逆时针",
    "halfTurn": "180° 半圈转动",
    "faces": {
      "U": "顶面 / Up (白)",
      "D": "底面 / Down (黄)",
      "R": "右面 / Right (红)",
      "L": "左面 / Left (橙)",
      "F": "前面 / Front (绿)",
      "B": "后面 / Back (蓝)",
      "M": "中层垂直切片 (M)",
      "E": "中层水平切片 (E)",
      "S": "立面垂直切片 (S)"
    }
  },
  "tutorial": {
    "stageProgress": "阶段",
    "focusModeOn": "聚焦模式 开",
    "focusModeOff": "聚焦模式 关",
    "focusTooltip": "将无关方块半透明化，仅高亮显示当前需要关注的特征方块",
    "keyIntuition": "核心心法",
    "caseSelectorTitle": "选择当前形态 / 起始状态",
    "caseSelectorPrompt": "你的魔方当前处于哪种形态？",
    "howToIdentify": "如何快速识别该形态：",
    "operationGuideTitle": "手把手操作指导",
    "moveProgress": "步数",
    "howToPerform": "本步转动手法：",
    "pieceEffectLabel": "块机械物理位移：",
    "algorithmComplete": "公式执行完成！",
    "algorithmCompleteDesc": "已达成目标状态。快对照你手中的魔方确认成果吧！",
    "restartCase": "从头再来",
    "resetCase": "重置",
    "animateTurn": "在 3D 中演示此步",
    "rotating": "转动演示中...",
    "autoPlay": "自动连贯演示",
    "pause": "暂停",
    "initialState": "起始状态",
    "guided3D": "3D操作指导",
    "targetGoal": "目标完成态",
    "showingInitial": "当前展示：公式执行前的初始状态",
    "showingTarget": "当前展示：本步骤应达成的目标成果",
    "aimingFor": "本阶段目标完成态",
    "dragToInspect": "按住鼠标可360°旋转审视",
    "targetGoalLabel": "达成目标态",
    "reset3DView": "复位视角",
    "animationSpeedHint": "点击步骤按钮即可欣赏平滑逼真的 3D 物理层转动动画",
    "prevStage": "上一阶段",
    "nextStage": "下一阶段",
    "speedcuberTips": "速拧高阶技巧"
  },
  "stages": {
    "anatomy-notation": {
      "title": "第 0 步：结构与基础转动符号",
      "subtitle": "理解方块类型、自由度与面旋转力学",
      "overview": "魔方由 3 种不同的方块组成：6 个中心块（位置绝对固定）、12 个棱块（双色）和 8 个角块（三色）。在开始复原前，必须熟悉每个面顺时针与逆时针旋转的基本规律。",
      "keyTakeaway": "角块永远不可能变成棱块，棱块也永远不可能变成角块。复原魔方不是拼凑表面贴纸，而是将三维立体方块送入它们正确的空间轨道。",
      "cases": {
        "basic-turns": {
          "caseName": "基础转动符号 (R, U, F)",
          "badge": "基石动作",
          "initialDescription": "从复原状态的魔方开始。观察每次转动一个面时，仅该面上的 9 个方块发生位移，其余 17 个方块完全纹丝不动。",
          "targetDescription": "完成 R U R' U' 后，右前方的角块与棱块被调出并准备接受进一步认知。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：顺时针旋转右面 (R)",
              "handAction": "右手拇指放在前面，其余手指握住右面后方，将整个右层向上推转 90°（顺时针）。",
              "pieceEffect": "将右前下方的底角块提升到顶层，并展开右侧中层切片。"
            },
            {
              "stepTitle": "第 2 步：顺时针旋转顶面 (U)",
              "handAction": "右手食指从右后方向左轻拨顶层，顶面顺时针旋转 90°。",
              "pieceEffect": "拨动顶层，将刚才升上来的角块推离右侧操作轨道。"
            },
            {
              "stepTitle": "第 3 步：逆时针旋转右面 (R')",
              "handAction": "重新握住右层，向下拉回 90°（逆时针）。",
              "pieceEffect": "将右侧竖列重新沉回底层基础。"
            },
            {
              "stepTitle": "第 4 步：逆时针旋转顶面 (U')",
              "handAction": "左手食指从左后方向右拨动顶层，顶面逆时针旋转 90°。",
              "pieceEffect": "恢复顶层对齐，完成标准四步循环。"
            }
          ],
          "proTips": [
            "顺时针定义：视线必须正对该面本身观察。",
            "带撇号（'）代表逆时针转动 90°（英文读作 Prime）。",
            "数字 2（如 U2）代表旋转 180° 半圈。"
          ]
        }
      }
    },
    "white-cross": {
      "title": "第 1 步：白色底面十字 (White Cross)",
      "subtitle": "筑牢基石：将白色棱块与白色中心及对应侧面中心严丝合缝对齐",
      "overview": "目标是将 4 个白棱块归位到底层。核心要点：每个白棱块的侧面颜色，必须与相邻侧面中心块颜色（绿对绿、红对红、蓝对蓝、橙对橙）完全匹配。",
      "keyTakeaway": "侧面颜色未对齐的白十字不是真正复原的十字！每个棱块都是同时连接两个面的双色锚点。",
      "cases": {
        "case-daisy-plunge": {
          "caseName": "情况 1：小黄花对齐后 180° 下沉入位",
          "badge": "标准形态",
          "initialDescription": "白棱块已聚集在黄色中心周围（顶层小黄花形态）。其绿色侧面已与绿色中心块对齐。",
          "targetDescription": "白绿棱块锁定在白色底面，白色与绿色中心完全相连。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面旋转 180° (F2)",
              "handAction": "双手握住前面，顺时针旋转 180°（转动两次 90°）。",
              "pieceEffect": "将白绿棱块从顶部黄色层径直沉入底层白色基座。"
            }
          ],
          "proTips": [
            "小雏菊法：先将 4 个白棱聚集在黄色中心周围，极易上手且无需记忆复杂公式。",
            "侧面颜色一旦与侧中心对齐，一个简单的 180° 下沉（F2、R2 等）即可完美归位。"
          ]
        },
        "case-flipped-edge": {
          "caseName": "情况 2：前面棱块朝向翻转",
          "badge": "方向校正",
          "initialDescription": "白绿棱块在白色与绿色中心之间的正确槽位中，但方向翻反了：绿色在白色面，白色在绿色面！",
          "targetDescription": "棱块被利落翻正，白色朝下，绿色与绿色中心完全吻合。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面逆时针旋转 90° (F')",
              "handAction": "逆时针转动前面 90°。",
              "pieceEffect": "将反向棱块弹出至右侧中间层。"
            },
            {
              "stepTitle": "第 2 步：顶面逆时针旋转 90° (U')",
              "handAction": "左手食指逆时针拨动顶层 90°。",
              "pieceEffect": "在顶层腾出空间接纳该棱块。"
            },
            {
              "stepTitle": "第 3 步：右面顺时针旋转 90° (R)",
              "handAction": "右面向上推转 90°。",
              "pieceEffect": "将棱块带入顶层，且朝向已被翻正。"
            },
            {
              "stepTitle": "第 4 步：顶面顺时针旋转 90° (U)",
              "handAction": "顶层向右推回 90° 与绿色中心对齐。",
              "pieceEffect": "棱块与绿色中心对齐，随时可以下沉入位。"
            }
          ],
          "proTips": [
            "当白棱块侧白朝向侧面而非顶部时，移入中间层即可轻松翻转归位。"
          ]
        }
      }
    },
    "first-layer-corners": {
      "title": "第 2 步：底层角块复原 (First Layer Corners)",
      "subtitle": "掌握经典右手连招 [R, U] = R U R' U' 完成纯白底面",
      "overview": "完成白十字后，我们逐一装入 4 个白色角块。每个角块具有 3 种颜色（如白绿红）。将其置于目标槽位正上方，重复执行四步公式 (R U R' U') 直至白色朝下准确归位。",
      "keyTakeaway": "右手公式 [R, U] = R U R' U' 是一个换位子操作，它能在局部槽位产生精确变化，同时完全保全魔方其余部分。",
      "cases": {
        "case-white-facing-right": {
          "caseName": "情况 1：白色贴纸朝向右侧",
          "badge": "1 组公式（最快）",
          "initialDescription": "白绿红角块位于顶层、绿红槽位正上方，白色贴纸朝向右侧。",
          "targetDescription": "角块准确滑入底层，白色朝下，绿红两色与中心块完美匹配。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：升起目标槽位 (R)",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "将右下角槽位提至顶层迎接角块。"
            },
            {
              "stepTitle": "第 2 步：吸合角块 (U)",
              "handAction": "右手食指顺时针拨动顶层 90°。",
              "pieceEffect": "将角块直接推进升起的槽位中。"
            },
            {
              "stepTitle": "第 3 步：沉入底层 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "将槽位与角块带回底面白色基座。"
            },
            {
              "stepTitle": "第 4 步：复位顶层对齐 (U')",
              "handAction": "左手食指逆时针拨回顶层 90°。",
              "pieceEffect": "恢复顶层基准方位。"
            }
          ],
          "proTips": [
            "当白色贴纸朝向右侧时，只需执行 1 次右手公式 (R U R' U') 即可瞬间复原！"
          ]
        },
        "case-white-facing-up": {
          "caseName": "情况 2：白色贴纸朝向正上方",
          "badge": "3 组公式",
          "initialDescription": "白绿红角块位于槽位正上方，但白色贴纸直指天花板（朝上）。",
          "targetDescription": "角块旋转 120° 并端正嵌入底座，白色贴纸朝下。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 组 (1-4 步)：从顶面调整方向",
              "handAction": "执行一次 R U R' U'。",
              "pieceEffect": "角块落入槽位，但白贴纸朝向正面。"
            },
            {
              "stepTitle": "第 2 组 (5-8 步)：弹出并旋转",
              "handAction": "再次执行一次 R U R' U'。",
              "pieceEffect": "角块重新弹出至顶层，白贴纸转为朝向右侧。"
            },
            {
              "stepTitle": "第 3 组 (9-12 步)：最终装填入位",
              "handAction": "第三次执行 R U R' U'。",
              "pieceEffect": "角块利落端正地锁入白色底座。"
            },
            {
              "stepTitle": "完成",
              "handAction": "结束整个公式序列。",
              "pieceEffect": "角块完全复原。"
            }
          ],
          "proTips": [
            "白面朝上时，连续做 3 遍 (R U R' U') 必定成功！",
            "切勿整体翻转魔方，始终保持白底朝下。"
          ]
        },
        "case-corner-trapped": {
          "caseName": "情况 3：角块卡在底层槽位中",
          "badge": "脱困提取",
          "initialDescription": "角块已经在底层，但朝向错误或位于错误的颜色插槽中。",
          "targetDescription": "将角块提取到顶层，准备重新正向插入。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：升起被困角块 (R)",
              "handAction": "右面向上推转 90°。",
              "pieceEffect": "将被困角块带至顶层。"
            },
            {
              "stepTitle": "第 2 步：推离移开 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "将角块踢出右侧竖列。"
            },
            {
              "stepTitle": "第 3 步：恢复底座 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢复底层白色十字完整无损。"
            },
            {
              "stepTitle": "第 4 步：调整对齐 (U')",
              "handAction": "复位顶层。",
              "pieceEffect": "准备重新正确装填。"
            }
          ],
          "proTips": [
            "底层角块卡住或扭曲时，执行一次右手公式 (R U R' U') 即可瞬间将其顶出。"
          ]
        }
      }
    },
    "second-layer-edges": {
      "title": "第 3 步：中层棱块复原 (Second Layer)",
      "subtitle": "角棱配对组合，完成魔方前两层 (F2L)",
      "overview": "在顶层寻找不含黄色的棱块，将其侧面颜色与正面中心块对齐。观察其顶面颜色，判断该棱块应填入右侧槽位还是左侧槽位。",
      "keyTakeaway": "此公式通过“反推棱块避让、升出底角空中配对、再整体送入槽位”的优雅逻辑运作。",
      "cases": {
        "case-insert-right": {
          "caseName": "情况 1：棱块向右侧槽位填入",
          "badge": "右向插入",
          "initialDescription": "绿红棱块在顶层，绿色与正面中心对齐。顶面贴纸为红色，说明需插入右侧槽位。",
          "targetDescription": "绿红棱块锁定在绿红中心之间的右侧中层插槽中。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：将棱块推开避让 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "将棱块推离目标槽位（向反方向避让）。"
            },
            {
              "stepTitle": "第 2 步：升起底角 (R)",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "将匹配的底角块升至顶层。"
            },
            {
              "stepTitle": "第 3 步：空中角棱配对 (U')",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "角块与棱块在空中贴合，形成同色连块对。"
            },
            {
              "stepTitle": "第 4 步：沉回复位 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢复白色底座。"
            },
            {
              "stepTitle": "第 5 步：调整连块方位 (U')",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "将连块对移至正面上方。"
            },
            {
              "stepTitle": "第 6 步：打开正面插槽 (F')",
              "handAction": "前面逆时针旋转 90°。",
              "pieceEffect": "开启正面接收插槽。"
            },
            {
              "stepTitle": "第 7 步：滑入连块对 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "将连块对滑入中层槽位。"
            },
            {
              "stepTitle": "第 8 步：锁定插槽 (F)",
              "handAction": "前面顺时针旋转 90°。",
              "pieceEffect": "锁定中层棱块，底层完全修复。"
            }
          ],
          "proTips": [
            "记忆口诀：“远推、起角、空中配对、正面装入”。"
          ]
        },
        "case-insert-left": {
          "caseName": "情况 2：棱块向左侧槽位填入",
          "badge": "左向插入（镜像）",
          "initialDescription": "绿橙棱块在顶层，绿色与前面中心匹配。顶面贴纸为橙色，说明需插入左侧槽位。",
          "targetDescription": "棱块锁定在绿橙中心之间的左侧中层插槽中。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：将棱块推开避让 (U')",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "将棱块推离左侧插槽。"
            },
            {
              "stepTitle": "第 2 步：升起左底角 (L')",
              "handAction": "左面向上旋转 90°。",
              "pieceEffect": "将左底角提至顶层。"
            },
            {
              "stepTitle": "第 3 步：空中角棱配对 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "角块与棱块在空中贴合配对。"
            },
            {
              "stepTitle": "第 4 步：恢复底座 (L)",
              "handAction": "左面向下拉回 90°。",
              "pieceEffect": "恢复白色底座。"
            },
            {
              "stepTitle": "第 5 步：调整连块方位 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "将连块对移至正前方。"
            },
            {
              "stepTitle": "第 6 步：打开正面插槽 (F)",
              "handAction": "前面顺时针旋转 90°。",
              "pieceEffect": "开启正面插槽通道。"
            },
            {
              "stepTitle": "第 7 步：滑入连块对 (U')",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "将连块对送入插槽。"
            },
            {
              "stepTitle": "第 8 步：锁定插槽 (F')",
              "handAction": "前面逆时针旋转 90°。",
              "pieceEffect": "锁定中层，下两层完全复原。"
            }
          ],
          "proTips": [
            "左向插入是右向插入的完全镜像：将 R 换成 L'，U 换成 U'。"
          ]
        }
      }
    },
    "yellow-cross": {
      "title": "第 4 步：黄色顶面十字 (Yellow Cross)",
      "subtitle": "使用万能公式 F (R U R' U') F' 翻转顶棱朝向",
      "overview": "观察顶面（黄色面）。忽略角块，黄色棱块呈现三种图案之一：中心孤点、小折角（L形）或水平一字。统一公式按序跃迁：中心点 → L形 → 一字形 → 顶面十字。",
      "keyTakeaway": "起始的 F 转动将前面暂时下放，将棱块翻转转化为标准的右手连招，末尾的 F' 完好无损地复原下两层。",
      "cases": {
        "case-l-shape": {
          "caseName": "情况 1：小折角形态 ('L' 形 90°)",
          "badge": "最常见",
          "initialDescription": "两个相邻的黄棱朝上形成 'L' 形状。摆放魔方使两个棱块分别指向 12 点钟（后方）与 9 点钟（左方）。",
          "targetDescription": "4 个黄色棱块全部朝上，形成完整的黄色十字。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面顺时针倾斜 (F)",
              "handAction": "前面顺时针旋转 90°。",
              "pieceEffect": "将下两层安全移开，展开中层工作区。"
            },
            {
              "stepTitle": "第 2 步：升起右侧 (R)",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "启动右手连招。"
            },
            {
              "stepTitle": "第 3 步：拨动顶层 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "调整顶面黄棱方向。"
            },
            {
              "stepTitle": "第 4 步：右侧降回 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢复右侧竖列。"
            },
            {
              "stepTitle": "第 5 步：顶层复位 (U')",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "完成右手四步连招。"
            },
            {
              "stepTitle": "第 6 步：前面复位 (F')",
              "handAction": "前面逆时针旋转 90°。",
              "pieceEffect": "恢复下两层，锁定黄色十字！"
            }
          ],
          "proTips": [
            "口诀：顺-上-右-下-左-逆 (FUR - U'R'F')。",
            "做公式前务必确认 L 形指向 12 点和 9 点方向。"
          ]
        },
        "case-horizontal-line": {
          "caseName": "情况 2：水平一字形态",
          "badge": "一步成十字",
          "initialDescription": "相对的两个黄棱连成一条穿过顶面的直线。水平横握该线（9 点至 3 点钟方向）。",
          "targetDescription": "一字形态瞬间扩展为完整的黄色十字。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：前面顺时针 (F)",
              "handAction": "前面顺时针转动 90°。",
              "pieceEffect": "开启工作槽区。"
            },
            {
              "stepTitle": "第 2 步：右面上提 (R)",
              "handAction": "右面向上转动 90°。",
              "pieceEffect": "右手连招开始。"
            },
            {
              "stepTitle": "第 3 步：顶面顺拨 (U)",
              "handAction": "顶面顺时针转动 90°。",
              "pieceEffect": "转动顶层。"
            },
            {
              "stepTitle": "第 4 步：右面下拉 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "恢复竖列。"
            },
            {
              "stepTitle": "第 5 步：顶面逆拨 (U')",
              "handAction": "顶面逆时针转动 90°。",
              "pieceEffect": "完成触发。"
            },
            {
              "stepTitle": "第 6 步：前面逆时针 (F')",
              "handAction": "前面逆时针旋转 90°。",
              "pieceEffect": "完整复原下两层。"
            }
          ],
          "proTips": [
            "如果把直线竖着拿，公式将无法形成十字！必须严格水平横放。"
          ]
        },
        "case-center-dot": {
          "caseName": "情况 3：仅中心孤点形态",
          "badge": "双重应用",
          "initialDescription": "4 个黄色棱块均未朝上，只有黄色中心块可见。",
          "targetDescription": "由孤点转变为 L 形，随后转变为十字。",
          "detailedSteps": [
            {
              "stepTitle": "第 1-6 步：执行 F (R U R' U') F'",
              "handAction": "从任意角度执行该公式。",
              "pieceEffect": "将孤点形态转化为 L 形。"
            }
          ],
          "proTips": [
            "出现 L 形后，将其置于 12 点和 9 点钟方向，再次执行公式即可。"
          ]
        }
      }
    },
    "yellow-face-sune": {
      "title": "第 5 步：黄色顶面翻正 (Sune 小鱼公式)",
      "subtitle": "运用经典小鱼公式将所有黄色角块翻转朝上",
      "overview": "黄色十字完成后，我们翻转所有角块使整个顶面完全变黄。著名的小鱼公式 (Sune) 能够在保全十字和下两层的前提下，同时扭转 3 个角块。",
      "keyTakeaway": "受方向奇偶性（角块朝向模 3 守恒）制约，合法魔方永远不可能单独扭转 1 个角块。",
      "cases": {
        "case-the-fish": {
          "caseName": "情况 1：标准小鱼形态 (1 个黄角朝上)",
          "badge": "标准 Sune",
          "initialDescription": "顶面恰好只有 1 个角块朝上，形如小鱼游动。将鱼头对准左下方（前左）。前右角块的黄色贴纸朝向正前方。",
          "targetDescription": "整个顶面完全变平，呈现纯净金黄。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：升起右侧连块 (R)",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "将右前角棱对升起。"
            },
            {
              "stepTitle": "第 2 步：顶面前进 90° (U)",
              "handAction": "右手食指拨动顶层 90°。",
              "pieceEffect": "将连块对向前推进。"
            },
            {
              "stepTitle": "第 3 步：右侧降回避让 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "暂时归位右侧竖列。"
            },
            {
              "stepTitle": "第 4 步：顶面再次前进 90° (U)",
              "handAction": "顶层顺时针再拨 90°。",
              "pieceEffect": "推动连块沿顶层边缘周转。"
            },
            {
              "stepTitle": "第 5 步：升起右槽接应 (R)",
              "handAction": "右面再次向上转动 90°。",
              "pieceEffect": "准备接收连块。"
            },
            {
              "stepTitle": "第 6 步：顶面 180° 直奔归位 (U2)",
              "handAction": "快速拨动顶层 180°。",
              "pieceEffect": "连块对直接精准扣入插槽。"
            },
            {
              "stepTitle": "第 7 步：平稳降入底层 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "将连块锁回白色底座。"
            }
          ],
          "proTips": [
            "小鱼法则：鱼头务必始终指向左下角。",
            "如果右前角黄色没有正对前方，做一次小鱼公式，重新摆正鱼头到左下角，再做一次即可。"
          ]
        },
        "case-no-corners-yellow": {
          "caseName": "情况 2：纯十字 0 个黄角朝上",
          "badge": "车灯/反光态",
          "initialDescription": "只有黄色十字可见，4 个角块全都没有朝上，黄色贴纸全部朝向侧方。",
          "targetDescription": "生成小鱼形态，随后一次 Sune 即可复原顶面。",
          "detailedSteps": [
            {
              "stepTitle": "执行一次小鱼公式",
              "handAction": "执行 R U R' U R U2 R'。",
              "pieceEffect": "翻转 3 个角块，生成标准小鱼形态。"
            }
          ],
          "proTips": [
            "将黄色角块车灯朝向左侧放置，然后执行小鱼公式。"
          ]
        }
      }
    },
    "permute-corners": {
      "title": "第 6 步：黄色角块位置复原 (Position Corners)",
      "subtitle": "寻找侧面“同色车灯”并将 4 个角块换入正确槽位",
      "overview": "顶面已经全黄，但角块侧面颜色可能错位。环顾顶层四周寻找“车灯”——同侧面有两个角块颜色相同。将车灯放在后方（或左侧），执行角块轮换公式。",
      "keyTakeaway": "置换奇偶性要求角块对换与棱块对换必须保持相同的置换符号（属于交错群 A_n 的偶置换）。",
      "cases": {
        "case-headlights": {
          "caseName": "情况 1：在一面发现同色车灯",
          "badge": "标准角块置换",
          "initialDescription": "同一侧面的两个角块颜色相同（车灯）。将车灯置于后方（背对自己）。",
          "targetDescription": "4 个角块在所有 4 个侧面全部与中心块颜色吻合。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：顶面顺时针 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "准备动作。"
            },
            {
              "stepTitle": "第 2 步：右面上提 (R)",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "提升右角。"
            },
            {
              "stepTitle": "第 3 步：顶面逆时针 (U')",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "让出顶层。"
            },
            {
              "stepTitle": "第 4 步：左面上提 (L')",
              "handAction": "左面向上旋转 90°。",
              "pieceEffect": "提升左角。"
            },
            {
              "stepTitle": "第 5 步：顶面顺时针 (U)",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "对齐右角。"
            },
            {
              "stepTitle": "第 6 步：右面下拉 (R')",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "复位右列。"
            },
            {
              "stepTitle": "第 7 步：顶面逆时针 (U')",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "对齐左角。"
            },
            {
              "stepTitle": "第 8 步：左面下拉 (L)",
              "handAction": "左面向下拉回 90°。",
              "pieceEffect": "复位左列，4 个角块完全复原！"
            }
          ],
          "proTips": [
            "如果四面都没有车灯，从任意角度执行一次该公式，四周必定会出现车灯！"
          ]
        }
      }
    },
    "permute-edges": {
      "title": "第 7 步：黄色棱块位置复原 (Solved!)",
      "subtitle": "三棱顺时针轮换：用 U-Perm 彻底复原魔方",
      "overview": "角块已经完全解决！观察顶层的 4 个棱块。正好有一条边已经全拼好（或者没有）。将拼好的面放在后方。其余 3 个棱块只需按顺时针轮换即可完全复原魔方！",
      "keyTakeaway": "棱块的三轮换是一个偶置换（两个对换的乘积），严格遵守魔方奇偶守恒定律。完成后魔方进入最终恒等态！",
      "cases": {
        "case-clockwise-u-perm": {
          "caseName": "情况 1：3 个棱块顺时针轮换",
          "badge": "Ua 顺时针置换",
          "initialDescription": "一个侧面已完全拼好（将其放在后方）。其余 3 个棱块（前、左、右）需顺时针轮换以复原。",
          "targetDescription": "🎉 魔方 100% 完全复原！六面色彩纯净如初。",
          "detailedSteps": [
            {
              "stepTitle": "第 1 步：R",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "升起右侧连块。"
            },
            {
              "stepTitle": "第 2 步：U'",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "转动连块。"
            },
            {
              "stepTitle": "第 3 步：R",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "推进轮换。"
            },
            {
              "stepTitle": "第 4 步：U",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "推进轮换。"
            },
            {
              "stepTitle": "第 5 步：R",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "推进轮换。"
            },
            {
              "stepTitle": "第 6 步：U",
              "handAction": "顶层顺时针旋转 90°。",
              "pieceEffect": "推进轮换。"
            },
            {
              "stepTitle": "第 7 步：R",
              "handAction": "右面向上旋转 90°。",
              "pieceEffect": "推进轮换。"
            },
            {
              "stepTitle": "第 8 步：U'",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "开始对齐。"
            },
            {
              "stepTitle": "第 9 步：R'",
              "handAction": "右面向下拉回 90°。",
              "pieceEffect": "锁定左侧。"
            },
            {
              "stepTitle": "第 10 步：U'",
              "handAction": "顶层逆时针旋转 90°。",
              "pieceEffect": "对齐所有棱块。"
            },
            {
              "stepTitle": "第 11 步：R2（终章！）",
              "handAction": "右面旋转 180° 整圈。",
              "pieceEffect": "全部层级锁定，魔方完全复原！"
            }
          ],
          "proTips": [
            "如果 4 个面都没有完整拼好的边，从任意角度做一次公式，就会出现一个拼好的面！"
          ]
        }
      }
    }
  },
  "graph": {
    "badge": "离散数学 & 抽象代数",
    "title": "魔方状态空间的图论深层解构",
    "subtitle": "探秘数学凯莱图 (Cayley Graph)、对称群、上帝之数 (20步) 与最优寻路算法",
    "tabs": {
      "explorer": "凯莱子图拓扑漫游",
      "cayley": "凯莱图严谨定义",
      "diameter": "图直径 (上帝之数)",
      "search": "最优求解搜索算法",
      "commutators": "换位子与共轭变换"
    },
    "explorer": {
      "selectSubgroup": "选择子群作用轨道：",
      "runBfs": "执行广度优先搜索 (BFS)",
      "resetBfs": "重置搜索",
      "shortestPath": "最短路径 / 上帝算法",
      "identity": "恒等元（复原态）",
      "exploredStates": "已展开状态节点数",
      "realtimeSync": "3D 魔方实时动态联动",
      "depth": "距离 / 搜索深度 d(e, v)：",
      "nodeId": "节点哈希标识：",
      "movesSeq": "生成元最短转动序列：",
      "diameter": "子群图直径：",
      "syncHint": "点击图中任意状态节点，右侧 3D 魔方将实时连动旋转到该置换态。",
      "legendSolved": "复原态 (e)",
      "legendVisited": "已探索节点",
      "legendPath": "最短路径 (BFS)",
      "legendSelected": "当前聚焦状态",
      "subgroups": {
        "checkerboard": {
          "name": "棋盘格变换子群 Q₃ ≅ (ℤ/2ℤ)³",
          "desc": "生成元集 S = {M2, E2, S2}。阿贝尔交换群，仅包含 8 个状态，图直径为 3。"
        },
        "r2u2": {
          "name": "二面体子群 ⟨R², U²⟩ ≅ D₄",
          "desc": "仅允许右面与顶面 180° 转动。包含 12 个状态节点，图直径为 6 的环状对称结构。"
        },
        "commutator": {
          "name": "右手四步循环子群 ⟨R U R' U'⟩ ≅ ℤ₆",
          "desc": "连续重复右手四步法。执行 6 次刚好恢复原状，阶数为 6 的单生成元循环子群。"
        }
      }
    },
    "cayleySection": {
      "title": "凯莱图 Γ(G, S) 的代数几何构造",
      "intro": "对于群 G 与其对称生成元集合 S，凯莱图 Γ = (V, E) 拥有严格的代数定义：每个顶点 v ∈ V 代表魔方的一种唯一置换状态；当且仅当存在生成元 s ∈ S 使得 u · s = v 时，存在一条由 u 指向 v 的有向边 (u, v)。",
      "regularTitle": "18-正则图 (18-Regular)",
      "regularDesc": "在半转动度量 (HTM: Half-Turn Metric) 下，6 个面各有 3 种独立转动（90°, -90°, 180°），总计 18 个生成元。因此，凯莱图中的每一个顶点都严格拥有 18 条向外出射的边，是高度对称的正则图。",
      "vertexTransitiveTitle": "顶点传递性 (Vertex Transitive)",
      "vertexTransitiveDesc": "对于图中的任意两个状态节点 u 与 v，必定存在一个图自同构映射将 u 映射为 v。这意味着魔方的状态宇宙在任何一个节点局部看去，几何环境完全同构，不存在任何“边缘特异点”。",
      "bipartiteTitle": "QTM 度量下的二分图性质 (Bipartite in QTM)",
      "bipartiteDesc": "在 1/4 转动度量 (QTM) 中，每一次 90° 旋转必定颠倒棱块或角块置换的奇偶性 (Parity)。这意味着状态图不存在奇数长度的闭环，凯莱图是一个严格的偶二分图。",
      "groupOrderTitle": "魔方群的阶数（总状态空间）|G|",
      "groupOrderIntro": "在不将魔方暴力拆解的前提下，从复原态出发纯靠转动能够达到的所有状态总数可被严格计算：",
      "twelveOrbitsIntro": "为什么能够达到的状态数恰好比物理零部件的所有可能排布（8! × 3⁸ × 12! × 2¹²）小 12 倍？因为物理转动受到三大代数守恒定律的严格束缚：",
      "cornerParity": "角块朝向守恒：Σ orient(corner) ≡ 0 (mod 3)",
      "cornerParityDesc": "你无法在保持其他块不变的情况下，单独将一颗角块就地旋转 120°（模 3 约束）。",
      "edgeParity": "棱块翻转守恒：Σ flip(edge) ≡ 0 (mod 2)",
      "edgeParityDesc": "你无法在保持其他块不变的情况下，单独将一颗棱块就地翻面（模 2 约束）。",
      "permParity": "置换奇偶性守恒：sgn(σ_corners) = sgn(σ_edges)",
      "permParityDesc": "角块置换的符号必须与棱块置换的符号相同，无法只对调两颗方块而不影响其余结构（交错群限制）。"
    },
    "diameterSection": {
      "badge": "图直径 = 20 步",
      "title": "图直径与上帝之数 (God's Number)",
      "intro": "在图论中，图的直径 diam(Γ) = max d(u, v) 代表全图中任意两点间最短测地线距离的最大值。在魔方中，它代表：哪怕由最狠的对手任意打乱，如果由“全知全能的上帝”使用最优算法解法，最多需要多少步即可还原。",
      "htmTitle": "HTM 半转动度量：上帝之数 = 20",
      "htmDesc": "2010 年 7 月，Tomas Rokicki、Herbert Kociemba、Morley Davidson 等数学家借助 Google 赞助的 35 CPU年分布式算力，彻底证明了三阶魔方在 HTM 下没有任何一种状态需要超过 20 步，即 diam(Γ) = 20。",
      "qtmTitle": "QTM 1/4转动度量：直径 = 26",
      "qtmDesc": "如果将 180° 转动计作两步（即只允许 90° 旋转），此时的图直径被严格证明为 26 步。",
      "superflipTitle": "最遥远的对极点：超级翻转 (Superflip)",
      "superflipDesc": "在 1995 年由 Michael Reid 证实的“超级翻转”状态（所有 8 个角块全部在原位且朝向正确，而所有 12 个棱块全部在原位但全部就地颠倒），被证明距离复原态的真正最短距离严格为 20 步，是凯莱图最遥远的对极点之一。",
      "distTitle": "状态距离分布规律",
      "distNote": "绝大多数打乱状态（约 99% 以上）的距离集中在 17 到 18 步之间。真正需要极限 20 步的状态大约有 4.9 亿个，在 4300 亿亿的宏大总数中属于极其罕见的深空孤点。"
    },
    "searchSection": {
      "title": "大规模图的最优路径搜索算法",
      "bfsFailTitle": "朴素 BFS 的崩溃（维度灾难）",
      "bfsFailDesc": "在分支因子 b=18 的正则图中，简单广度优先搜索的节点数随深度以 18^d 呈天文数字级爆炸。搜索到深度 10 就已产生数万亿节点，内存瞬间枯竭，常规算法完全束手无策。",
      "paradigmsIntro": "现代人工智能与算法理论通过以下三大数学范式破解了这一极限挑战：",
      "bibfsTitle": "双向广度优先搜索 (Bidirectional BFS)",
      "bibfsDesc": "同时从初始打乱态和目标复原态两个方向交替辐射，当两端的探索前沿在半途相遇时即拼接出最短路径。时间与空间复杂度从 O(b^d) 骤降至 O(b^(d/2))。",
      "pdbTitle": "模式数据库 (Pattern Databases / PDB)",
      "pdbDesc": "通过将魔方抽象为只保留角块或部分棱块的商图（Quotient Graph），预先离线计算出所有子状态的最短距离。在 A* 搜索中，PDB 提供了严格满足 h(n) ≤ h*(n) 的容许启发式估计（Admissible Heuristic），确保绝对最优解。",
      "kociembaTitle": "Kociemba 两阶段算法 (2-Phase Algorithm)",
      "kociembaIntro": "由 Herbert Kociemba 发明，作为现代所有超高速计算机魔方求解器的核心引擎：",
      "phase1Title": "阶段 1：导引至子群 H = ⟨U, D, R2, L2, F2, B2⟩",
      "phase1Desc": "将所有棱块方向翻正、角块朝向翻正，并将 4 个中间层棱块送回中层。此商空间的规模约为 2.2 × 10⁹，可在数毫秒内搜得最优解。",
      "phase2Title": "阶段 2：在子群 H 内部搜索通往恒等元 e 的路径",
      "phase2Desc": "在 H 内部，禁止 R, L, F, B 的 90° 转动，仅允许 180° 转动。搜索空间急剧坍缩，瞬间即可得出完整的全局近似最优还原序列（通常不超过 22 步）。"
    },
    "commutatorSection": {
      "title": "换位子 [A, B] 与共轭变换 A B A⁻¹",
      "intro": "魔方顶尖盲拧（BLD）选手与公式发明大师从不盲目死记硬背成百上千种公式，而是利用抽象代数中的换位子与共轭变换现场随心所欲地合成出精巧的手术刀式算法。",
      "commutatorTitle": "换位子 (Commutator)：[A, B] = A B A⁻¹ B⁻¹",
      "commutatorDesc1": "如果动作 A 与动作 B 可以对易（AB = BA），则换位子 [A, B] = e（恒等元，一切还原）。但当它们不可对易时，两者的重叠影响区域将被高度聚焦。",
      "commutatorDesc2": "通过巧妙设计仅在单个方块上相交的 A 与 B，换位子能实现令人惊叹的“纯三循环（3-Cycle）”——在保持其余 99% 方块完全不动的前提下，精准交换 3 个角块或 3 个棱块。",
      "conjugateTitle": "共轭变换 (Conjugation)：A B A⁻¹",
      "conjugateIntro": "共轭变换即是魔方界俗称的“设立步骤 (Setup Move)”背后的纯数学本质：",
      "setupMove": "A（设立）：将散落在任意位置的目标方块，临时调度到易于操作的手术槽位。",
      "operatorMove": "B（手术）：执行预备好的换位子或标准变换，精确完成局部状态调换。",
      "teardownMove": "A⁻¹（撤销）：严格执行 A 的逆动作，将被带跑的所有环境方块原路送回。",
      "conjugateSummary": "共轭变换使得我们只需掌握针对极少数固定槽位的基本算子 B，即可通过设立步 A 将其威力自由投射到整个魔方的任何空间角落。",
      "infoBox": "现代高阶魔方解法（如 3-Style 盲拧体系）中数千个看似神妙莫测的公式，其本质全都是 [A, B] 换位子与 A B A⁻¹ 共轭变换的数学组合产物。"
    }
  },
  "sandbox": {
    "wcaScramble": "WCA 官方标准打乱公式：",
    "copyScramble": "复制打乱序列",
    "newScramble": "生成全新打乱",
    "scrambleCube": "执行打乱 3D 动画",
    "resetSolved": "一键复位至复原态",
    "title": "3D 交互式演练沙盒 & 专业速拧计时器",
    "undo": "撤销上一步",
    "turnControls": "各面转动操控板",
    "testerTitle": "自定义公式实时演练器",
    "testerPlaceholder": "在此输入公式（例如：R U R' U' R' F R2 U' R' U' R U R' F'）...",
    "execute": "执行公式动画",
    "invert": "反转为逆公式",
    "history": "已走步数记录",
    "timerTitle": "专业速拧计时器",
    "releaseToStart": "松开空格键（或手指），计时立即开始！",
    "holdSteady": "按住空格键保持稳定（0.5 秒准备）...",
    "solvingTapToStop": "计时进行中！按任意键或点击屏幕即可停止",
    "holdSpaceToStart": "长按空格键或触摸屏幕进入准备状态",
    "bestTime": "最快单次 (PB)",
    "ao5": "五次去极值平均 (Ao5)",
    "recentSolves": "近期还原用时记录",
    "invertTooltip": "计算逆算法",
    "clearHistory": "清空历史记录",
    "turns": "步",
      "referenceTitle": "参考答案与求解向导",
      "showReference": "显示参考答案",
      "hideReference": "隐藏参考答案（防剧透）",
      "alreadySolved": "魔方已处于复原状态！打乱或转动任意面即可生成参考还原步骤。",
      "solutionBadge": "推荐还原路径",
      "copySolution": "复制解法公式",
      "copied": "已复制！",
      "stepNext": "下一步",
      "stepPrev": "上一步",
      "autoSolve": "自动演示",
      "pause": "暂停",
      "solveInstant": "瞬间复原",
    "solverMode": "还原解法模式",
    "cfopMode": "CFOP 分步教学解法",
    "optimalMode": "最少步快速逆序",
    "cfopMethodDesc": "严格按照教学7个阶段（白色十字→底层角块→中层棱块→黄色十字→顶层翻角→顶层换角→顶层换棱）层先复原，精准触发教学诊断阶段推进。",
    "optimalMethodDesc": "直接对打乱公式求逆以达到最少旋转步数快速复原。",
    "stageCompleted": "阶段已完成",
    "currentStage": "当前进行阶段",
    "stageHeader": "第 {stage} 阶段：{name}",
    "stageMovesCount": "{count} 步",
    "stageNames": {
          "whiteCross": "白色十字",
          "firstLayer": "底层角块（第一层）",
          "secondLayer": "中层棱块（第二层）",
          "yellowCross": "顶层黄色十字",
          "orientYellowCorners": "顶层黄色角块翻色",
          "permuteYellowCorners": "顶层黄色角块位置归位",
          "permuteYellowEdges": "顶层黄色棱块位置归位"
    },

      "phaseDiagnostic": "CFOP / 层先法阶段诊断",
      "phaseCurrent": "当前还原阶段",
      "phaseNextAlgo": "推荐公式",
      "piecesRestored": "方块已就位复原数",
      "solutionProgress": "参考解法执行进度",
      "directInverseNote": "提示：当前为最优逆序解法（≤20步全局并发还原），并非传统的层先逐层法；底层十字与各层状态将在最后几步协同完成。如需体验层先法，可参照下方阶段推荐公式练习。",
      "edgesAligned": "条棱已对齐",
      "cornersDocked": "个角块已嵌入",
      "edgesPlaced": "条棱块已归位",
      "edgesOriented": "条棱已翻色",
      "cornersOriented": "个角已翻面",
      "importPhysicalCube": "录入真实魔方",
      "importSuccess": "真实魔方初始状态录入成功！已为您规划分步复原方案。",
      "phaseNames": {
        "whiteCross": "白色十字（阶段 1）",
        "firstLayer": "底层角块 / 第一层（阶段 2）",
        "secondLayer": "中层棱块 / 第二层（阶段 3）",
        "yellowCross": "黄色十字 / 顶层棱定向（阶段 4）",
        "orientYellowCorners": "黄色角块翻色 / 小鱼公式（阶段 5）",
        "permuteYellowCorners": "黄色角块归位 / 角块换位（阶段 6）",
        "permuteYellowEdges": "黄色棱块归位 / 最终还原（阶段 7）",
        "solved": "已完全复原（恒等状态）"
      },
      "phaseTips": {
        "whiteCross": "将4个白色棱块归位，并对齐侧面的中心块颜色。",
        "firstLayer": "使用四步法（R U R' U'）将白色角块准确嵌入底角。",
        "secondLayer": "使用左手/右手入槽公式将中层棱块复位。",
        "yellowCross": "执行 F (R U R' U') F' 构建黄色十字。",
        "orientYellowCorners": "使用小鱼公式（R U R' U R U2 R'）将所有黄色贴纸翻朝向下。",
        "permuteYellowCorners": "寻找眼睛块或使用换角公式调整4个角块的正确相对位置。",
        "permuteYellowEdges": "执行三棱换公式（U-Perm）对调最后3个棱块完成魔方。",
        "solved": "恭喜！魔方已处于恒等状态，所有面均已完全复原。"
      },
},
  "quiz": {
    "badge": "实战大考",
    "title": "魔方与图论通识大师挑战赛",
    "subtitle": "检验你对转动符号、还原机理、凯莱图拓扑与群论知识的掌握程度",
    "questionOf": "第 {current} 题 / 共 {total} 题",
    "correct": "回答完全正确！",
    "explanationLabel": "深度解析：",
    "answeredOf": "已作答：{count} / {total}",
    "submit": "提交试卷并计算最终得分",
    "score": "最终得分：{score} / {total}",
    "retake": "重新挑战测试",
    "feedbackMaster": "太神了！你已经完全掌握了魔方物理复原与高深图论精髓！",
    "feedbackGood": "非常棒！你对魔方的还原机理与核心代数结构有着扎实的理解。",
    "feedbackPractice": "再接再厉！不妨回看 3D 教程与图论章节，温故而知新。",
    "questions": {
      "1": {
        "question": "在标准三阶魔方中，关于“中心块 (Center)”的描述，下列哪项是正确的？",
        "options": [
          "可以通过转动与角块互换位置",
          "固定在内部十字轴心上，定义了该面的基准颜色",
          "顺时针转动 180° 后颜色会改变",
          "整个魔方共有 12 个中心块"
        ],
        "explanation": "魔方有且仅有 6 个中心块，它们直接固定在中央十字内轴上，相对朝向永远固定（如白对黄、绿对蓝、红对橙），构成了三维空间的绝对基准参照系。"
      },
      "2": {
        "question": "在已复原的魔方上，连续重复执行右手四步法 (R U R' U') 多少次，整只魔方将完全恢复原状？",
        "options": [
          "4 次",
          "6 次",
          "12 次",
          "24 次"
        ],
        "explanation": "右手四步法在魔方群中诱导的置换阶数（Order）恰好为 6。因此连续做 6 次整整 24 步后，所有被调换的棱块与角块将完全恢复原位原色！"
      },
      "3": {
        "question": "在半转动度量 (HTM) 下，魔方凯莱图 (Cayley Graph) 的每个顶点的正则度数是多少？",
        "options": [
          "6",
          "12",
          "18",
          "26"
        ],
        "explanation": "6 个面 × 每个面有 3 种独立转动（90°, -90°, 180°）= 18 个对称生成元。因此每个顶点均出射 18 条边，是标准的 18-正则图。"
      },
      "4": {
        "question": "在 HTM 度量下，三阶魔方凯莱图的图直径（即著名的“上帝之数”）是多少步？",
        "options": [
          "18 步",
          "20 步",
          "24 步",
          "26 步"
        ],
        "explanation": "2010 年 7 月，数学家与计算机科学家借助 Google 赞助的大规模分布式集群算力，彻底证明了任意魔方状态均可在最多 20 步内解决。"
      },
      "5": {
        "question": "在物理拆散魔方可能形成的全部组合中，为什么只有 1/12 能够通过合法转动还原？",
        "options": [
          "因为魔方一共有 12 个棱块",
          "因为拆开后的魔方有 12 种不同贴纸颜色",
          "由于角块朝向和 (mod 3)、棱块朝向和 (mod 2) 以及置换奇偶性 (mod 2) 三大守恒定律的联合制约 (3 × 2 × 2 = 12)",
          "因为 6 个面 × 2 个旋转方向 = 12"
        ],
        "explanation": "3 × 2 × 2 = 12。在不拆解的前提下，单角扭转是不可能的（mod 3），单棱翻转是不可能的（mod 2），单独对调两颗方块也是不可能的（奇偶同性）。因此总状态空间被割裂为 12 个互不连通的孤立轨道。"
      },
      "6": {
        "question": "Michael Reid 的“超级翻转 (Superflip)”状态在图论历史上为何具有非凡意义？",
        "options": [
          "它是人类历史上第一个被严格证明在 HTM 下必须消耗整整 20 步的对极点状态",
          "它是目前已知唯一无法被还原的死锁状态",
          "它的所有角块都发生了原地反转",
          "它距离复原态只需 1 步"
        ],
        "explanation": "超级翻转（8 个角全对，12 个棱全原地反转）坐落在凯莱图直径最远的对极点上，1995 年证明了它绝不可能在 19 步以内还原，奠定了上帝之数下界为 20。"
      },
      "7": {
        "question": "模式数据库 (Pattern Databases / PDB) 能够作为 A* 启发式搜索中“容许启发式 (Admissible)”的根本原因是什么？",
        "options": [
          "它在搜索时对最短路径进行随机概率猜测",
          "它通过松弛约束在抽象商图上计算真实测地距离，因此得出的启发估计值永远不会高估实际步数",
          "它把 4300 亿亿种可能全部硬编码存进了内存",
          "它强制所有搜索必须在 10 秒之内超时截断"
        ],
        "explanation": "容许启发式必须满足 h(n) ≤ h*(n)。由于忽略部分方块的子问题（商图）的实际最短距离必定小于等于完整原问题的距离，因此 PDB 天然构成了绝不高估的完美启发函数。"
      },
      "8": {
        "question": "抽象代数中的共轭变换 A B A⁻¹ 在魔方还原中是如何具体发挥作用的？",
        "options": [
          "将整个魔方的方块进行彻底的无序乱序混洗",
          "先通过设立步 A 将目标块送入手术位，通过 B 执行精确调换，再通过撤销步 A⁻¹ 将周围环境原样复原",
          "同时快速旋转魔方相对的两个面",
          "在世界魔方协会 (WCA) 竞赛中属于严禁使用的违规操作"
        ],
        "explanation": "共轭变换即魔方高阶还原中“设立步 (Setup Move)”的代数本质：A 负责投递，B 负责定向修改，A⁻¹ 负责原路环境还原。"
      }
    },
    "categories": {
      "solving": "复原解法",
      "graphTheory": "图论",
      "groupTheory": "群论"
    }
  },
  "cubeInput": {
    "modalTitle": "录入真实魔方初始状态",
    "modalSubtitle": "通过摄像头自动扫描或手动在展开图涂色，将您手中的真实魔方导入 3D 沙盒教学",
    "tabCamera": "摄像头自动识别",
    "tabManual": "手动展开图录入",
    "cameraGuideTitle": "摄像头对准指引",
    "cameraFacingHint": "请按照提示依次扫描 6 个面，并保持参考朝向一致",
    "cameraInstructions": "将魔方当前面完整放入屏幕中央的 3×3 取景框内，确认 9 个色块识别无误后点击拍照",
    "scanPromptPrefix": "当前扫描",
    "alignNotice": "建议在光线均匀处扫描，避免强烈反光或阴影",
    "captureFace": "识别并记录此面",
    "retakeFace": "重新识别",
    "faceCapturedLocked": "此面已完成采集并锁定",
    "reidentifyFace": "重新识别此面",
    "clickToFineTune": "点击色块可切换微调颜色",
    "capturedFaceHint": "此面颜色已锁定。如需重新识别，请点击下方“重新识别此面”。",
    "scanningProgress": "采集进度",
    "waitingAllFaces": "请依次采集完成全部 6 个面 (已完成 {0}/6)",
    "nextFace": "进入下一面",
    "allFacesScanned": "6 个面已全部扫描完成！",
    "startCamera": "开启摄像头",
    "stopCamera": "关闭摄像头",
    "cameraPermissionDenied": "摄像头权限被拒绝，请在浏览器地址栏允许摄像头访问，或使用手动录入模式。",
    "cameraNotAvailable": "未检测到可用摄像头设备，请直接使用“手动展开图录入”。",
    "flipCamera": "切换镜头",
    "jumpToManual": "前往展开图微调",
    "facesToScan": {
        "U": "顶面 U (白色中心)",
        "L": "左面 L (橙色中心)",
        "F": "正面 F (绿色中心)",
        "R": "右面 R (红色中心)",
        "B": "背面 B (蓝色中心)",
        "D": "底面 D (黄色中心)"
    },
    "faceOrientations": {
        "U": "顶面朝向镜头，绿色面保持朝向正前方/下方",
        "L": "左面朝向镜头，白色面保持朝向正上方",
        "F": "正面朝向镜头，白色面保持朝向正上方",
        "R": "右面朝向镜头，白色面保持朝向正上方",
        "B": "背面朝向镜头，白色面保持朝向正上方",
        "D": "底面朝向镜头，绿色面保持朝向正前方/上方"
    },
    "manualInstructions": "在下方调色板选择颜色，然后点击展开图中的色块涂色（中心块颜色已固定为基准）",
    "colorPalette": "取色画笔",
    "selectedColor": "当前画笔颜色",
    "remaining": "待涂",
    "resetSolved": "填满已复原态",
    "clearAll": "清空非中心块",
    "sampleScramble": "加载测试打乱",
    "netLayoutHint": "十字展开图：上顶(U) / 左(L) / 中正(F) / 右(R) / 极右背(B) / 下底(D)",
    "statusValid": "魔方状态物理有效，可直接导入！",
    "statusInvalid": "魔方状态尚未就绪",
    "incompleteStickers": "尚有未涂色的色块，请完整涂满 54 个色块",
    "invalidColorCount": "颜色数量异常（标准魔方每种颜色应恰好 9 块）",
    "invalidCenters": "中心块颜色顺序不正确",
    "impossibleEdge": "检测到物理上不可能存在的棱块颜色组合",
    "duplicateEdge": "检测到重复的多余棱块",
    "impossibleCorner": "检测到物理上不可能存在的角块颜色组合",
    "duplicateCorner": "检测到重复的多余角块",
    "applyToSandbox": "导入 3D 沙盒并生成教学解法",
    "cancel": "取消",
    "colorNames": {
        "white": "白色",
        "yellow": "黄色",
        "green": "绿色",
        "blue": "蓝色",
        "red": "红色",
        "orange": "橙色"
    }
},
  "footer": {
    "brandTitle": "RubikGraph 3D",
    "brandDesc": "交互式 3D 魔方全解教程与离散图论探索空间",
    "cayleyLabel": "凯莱图 Γ(G, S)",
    "godNumberLabel": "上帝之数 = 20 HTM",
    "groupOrderLabel": "|G| ≈ 4.3 × 10¹⁹"
  }
};
