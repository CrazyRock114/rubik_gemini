import type { TranslationSchema } from '../types';

export const ja: TranslationSchema = {
  "nav": {
    "brandSubtitle": "3D解説＆グラフ理論",
    "tutorial": "3Dチュートリアル",
    "graph": "グラフ理論",
    "sandbox": "3Dサンドボックス",
    "quiz": "マスタークイズ",
    "shortcuts": "ショートカット",
    "shortcutsTitle": "キーボードショートカット",
    "primeDoubleHint": "Shift + キーで反時計回り（プライム、例: R'）を実行します。",
    "timerHint": "サンドボックスでスペースバーを長押しするとタイマーが作動します！"
  },
  "cube3d": {
    "dragHint": "ドラッグして3D視点を回転",
    "turn": "回転",
    "clockwise": "90° 時計回り",
    "counterClockwise": "90° 反時計回り",
    "halfTurn": "180° 半回転",
    "faces": {
      "U": "上面 / Up (白)",
      "D": "下面 / Down (黄)",
      "R": "右面 / Right (赤)",
      "L": "左面 / Left (橙)",
      "F": "前面 / Front (緑)",
      "B": "後面 / Back (青)",
      "M": "中層縦スライス (M)",
      "E": "中層水平スライス (E)",
      "S": "立面スライス (S)"
    }
  },
  "tutorial": {
    "stageProgress": "ステージ",
    "focusModeOn": "フォーカスON",
    "focusModeOff": "フォーカスOFF",
    "focusTooltip": "関係のないパーツを半透明化し、対象パーツのみを強調表示します",
    "keyIntuition": "重要ポイント",
    "caseSelectorTitle": "パターン選択 / 開始状態",
    "caseSelectorPrompt": "あなたのキューブはどの状態ですか？",
    "howToIdentify": "このパターンの見分け方：",
    "operationGuideTitle": "ステップ別操作ガイド",
    "moveProgress": "手数",
    "howToPerform": "この手数の回し方：",
    "pieceEffectLabel": "パーツへの力学的効果：",
    "algorithmComplete": "手順完了！",
    "algorithmCompleteDesc": "目標状態に到達しました。お手元のキューブと照合してください！",
    "restartCase": "最初からやり直す",
    "resetCase": "リセット",
    "animateTurn": "この手を3D回転する",
    "rotating": "回転中...",
    "autoPlay": "自動再生",
    "pause": "一時停止",
    "initialState": "初期状態",
    "guided3D": "3D操作ガイド",
    "targetGoal": "目標状態",
    "showingInitial": "開始時の初期パターンを表示中",
    "showingTarget": "目指すべき完成目標を表示中",
    "aimingFor": "達成すべき目標状態",
    "dragToInspect": "ドラッグで全方向から確認",
    "targetGoalLabel": "目標：",
    "reset3DView": "3D視点をリセット",
    "animationSpeedHint": "0.55秒の滑らかな3D回転アニメーション",
    "prevStage": "前のステージ",
    "nextStage": "次のステージ",
    "speedcuberTips": "スピードキューブのコツ："
  },
  "stages": {
    "anatomy-notation": {
      "title": "ステージ0：構造と回転記号",
      "subtitle": "パーツの種類、自由度、回転記号の基礎を学ぶ",
      "overview": "ルービックキューブには3種類のパーツがあります：6個のセンター（位置固定）、12個のエッジ（2色）、8個のコーナー（3色）。揃え始める前に、時計回りと反時計回りの回し方をマスターしましょう。",
      "keyTakeaway": "コーナーがエッジになることは絶対にありません。色シールを揃えるのではなく、3Dパーツを本来の正しいスロットへ配置していきます。",
      "cases": {
        "basic-turns": {
          "caseName": "基本回転（R, U, F）",
          "badge": "基礎",
          "initialDescription": "完成状態からスタート。1つの面を回しても、その面の9個のパーツだけが動き、残りの17個は一切動かないことを確認してください。",
          "targetDescription": "R U R' U' を行うと、右手前のコーナーとエッジが入れ替わります。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ1：右面を時計回りに回す（R）",
              "handAction": "右手親指を手前、他の指を奥に添えて右の層を握り、奥（時計回り）へ90°回します。",
              "pieceEffect": "右下前のコーナーを上の層へと持ち上げます。"
            },
            {
              "stepTitle": "ステップ2：上面を時計回りに回す（U）",
              "handAction": "右人差し指で上面の右奥の角を手前左へ押し込み、上面を時計回りに90°回します。",
              "pieceEffect": "上の層を回転させ、持ち上げたコーナーを右層から退避させます。"
            },
            {
              "stepTitle": "ステップ3：右面を反時計回りに回す（R'）",
              "handAction": "右の層を手前（反時計回り）へ90°引き戻します。",
              "pieceEffect": "右側の柱を下のベース層へと戻します。"
            },
            {
              "stepTitle": "ステップ4：上面を反時計回りに回す（U'）",
              "handAction": "左人差し指で上面を右方向へ押し戻し、反時計回りに90°回します。",
              "pieceEffect": "上の層のアライメントを元に戻し、4手のサイクルを完了します。"
            }
          ],
          "proTips": [
            "時計回りとは、その面を正面から真直ぐ見つめたときの回転方向です。",
            "プライム記号（'）は反時計回りを表します。",
            "数字の2（例: U2）は180度の半回転を表します。"
          ]
        }
      }
    },
    "white-cross": {
      "title": "ステージ1：白の十字架（クロス）",
      "subtitle": "基礎の構築：白エッジを白面と側面センターの両方に合わせる",
      "overview": "目的は白の4つのエッジを白面に揃えることです。最重要：白エッジのもう1つの色は、隣接する側面センター（緑は緑、赤は赤など）と完全に一致させる必要があります。",
      "keyTakeaway": "側面のセンターと色がズレている白い十字は完成ではありません！エッジは2つの面を同時に繋ぐ架け橋です。",
      "cases": {
        "case-daisy-plunge": {
          "caseName": "パターン1：デイジー整列＆180°ダイブ",
          "badge": "基本パターン",
          "initialDescription": "白緑エッジが黄色センターの周りに集まっています（デイジー）。側面の緑が緑センターとすでに合っています。",
          "targetDescription": "白緑エッジが白面に収まり、白と緑の両センターを美しく繋いでいます。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ1：前面を180°回す（F2）",
              "handAction": "前面を時計回りに180°（2回分）回します。",
              "pieceEffect": "上の黄色層にある白緑エッジを、真下の白い底面へと直接送り込みます。"
            }
          ],
          "proTips": [
            "デイジー（ヒナギク）法：公式を覚えなくても、まず黄色の周りに白エッジを4つ集めるだけで誰でも揃えられます！",
            "側面のセンターと色が合ったら、180度回す（F2やR2）だけで一発で完成します。"
          ]
        },
        "case-flipped-edge": {
          "caseName": "パターン2：前面で反転しているエッジ",
          "badge": "向きの修正",
          "initialDescription": "白緑エッジは白と緑の間にありますが、向きが逆で、白面に緑が露出しています。",
          "targetDescription": "エッジが正しく反転され、白が下、緑が手前を向きます。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ1：前面を反時計回り（F'）",
              "handAction": "前面を左（反時計回り）に90°回します。",
              "pieceEffect": "反転したエッジを右の中段スライスへ逃がします。"
            },
            {
              "stepTitle": "ステップ2：上面を反時計回り（U'）",
              "handAction": "左人差し指で上面を90°右へ回します。",
              "pieceEffect": "エッジを迎え入れるスペースを上面に作ります。"
            },
            {
              "stepTitle": "ステップ3：右面を時計回り（R）",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "エッジを正しい向きにして上面へ持ち上げます。"
            },
            {
              "stepTitle": "ステップ4：上面を時計回り（U）",
              "handAction": "上面を左へ90°戻して緑センターと合わせます。",
              "pieceEffect": "エッジが緑センターの上に揃い、ダイブ準備完了です。"
            }
          ],
          "proTips": [
            "白が上ではなく横を向いている場合は、一度中段層を経由することで簡単に反転できます。"
          ]
        }
      }
    },
    "first-layer-corners": {
      "title": "ステージ2：第1層のコーナー",
      "subtitle": "万能手順「セクシームーブ」[R, U] = R U R' U' で白面を完成させる",
      "overview": "白のクロスができたら、4つの白コーナーを入れます。目的のコーナーをターゲットスロットの真上に配置し、白が下を向くまで（R U R' U'）を繰り返します。",
      "keyTakeaway": "セクシームーブは群論における「交換子」であり、他のパーツを壊さずに特定の1箇所のみを変化させます。",
      "cases": {
        "case-white-facing-right": {
          "caseName": "パターン1：白シールが右を向いている",
          "badge": "1回で完成（最速）",
          "initialDescription": "白緑赤コーナーが上の層にあり、白シールが右側を向いています。",
          "targetDescription": "コーナーが白の底面へ入り、緑センター・赤センターともぴったり一致します。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ1：スロットを持ち上げる（R）",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "底のスロットを上面まで持ち上げます。"
            },
            {
              "stepTitle": "ステップ2：コーナーを合体（U）",
              "handAction": "右人差し指で上面を左へ90°回します。",
              "pieceEffect": "コーナーをスロットに連結させます。"
            },
            {
              "stepTitle": "ステップ3：スロットを戻す（R'）",
              "handAction": "右面を手前へ90°引き戻します。",
              "pieceEffect": "連結したコーナーを白の底面へと格納します。"
            },
            {
              "stepTitle": "ステップ4：上面を整える（U'）",
              "handAction": "上面を右へ90°戻します。",
              "pieceEffect": "上面のアライメントを復元します。"
            }
          ],
          "proTips": [
            "白が右を向いているときは、セクシームーブ（R U R' U'）たった1回で入ります！"
          ]
        },
        "case-white-facing-up": {
          "caseName": "パターン2：白シールが真上（天井）を向いている",
          "badge": "3回繰り返し",
          "initialDescription": "コーナーはスロットの上にありますが、白シールが真上を向いています。",
          "targetDescription": "コーナーが120度回転して、白が下を向いて固定されます。",
          "detailedSteps": [
            {
              "stepTitle": "1回目：向きの変更",
              "handAction": "R U R' U' を1回実行します。",
              "pieceEffect": "コーナーが下に入り、白が正面を向きます。"
            },
            {
              "stepTitle": "2回目：取り出し",
              "handAction": "R U R' U' を2回目実行します。",
              "pieceEffect": "上面へ戻り、白が右を向くようになります。"
            },
            {
              "stepTitle": "3回目：正しい挿入",
              "handAction": "R U R' U' を3回目実行します。",
              "pieceEffect": "白が下を向いて美しく格納されます。"
            },
            {
              "stepTitle": "完了",
              "handAction": "動作終了。",
              "pieceEffect": "第1層コーナー完成。"
            }
          ],
          "proTips": [
            "白が真上を向いているときは、（R U R' U'）をきっちり3回繰り返します！"
          ]
        },
        "case-corner-trapped": {
          "caseName": "パターン3：コーナーが下で向きが狂って挟まっている",
          "badge": "救出",
          "initialDescription": "コーナーは下層にありますが、向きが逆か、違うスロットに入っています。",
          "targetDescription": "コーナーが上の層へ救出され、正しいスロットへ入れられる状態になります。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ1：挟まったコーナーを持ち上げる（R）",
              "handAction": "右面を奥へ回します。",
              "pieceEffect": "挟まったコーナーを上面へ押し上げます。"
            },
            {
              "stepTitle": "ステップ2：退避させる（U）",
              "handAction": "上面を左へ90°回します。",
              "pieceEffect": "コーナーを右列から逃がします。"
            },
            {
              "stepTitle": "ステップ3：ベースを保護（R'）",
              "handAction": "右面を手前へ戻します。",
              "pieceEffect": "白の十字架を元の安全な状態に戻します。"
            },
            {
              "stepTitle": "ステップ4：位置合わせ（U'）",
              "handAction": "上面を戻します。",
              "pieceEffect": "救出完了。"
            }
          ],
          "proTips": [
            "下層で間違った向きになっているコーナーは、セクシームーブ1回で救出できます。"
          ]
        }
      }
    },
    "second-layer-edges": {
      "title": "ステージ3：第2層（中段エッジ）",
      "subtitle": "コーナーとエッジをペアにして、下2段（F2L）を一気に揃える",
      "overview": "上の層から黄色のないエッジを探します。正面の色をセンターと合わせ、上面の色を見て「右のスロット」か「左のスロット」か判断します。",
      "keyTakeaway": "エッジを一旦遠ざけ、コーナーを引き出してペア（F2Lペア）を作り、まとめてスロットへ流し込みます。",
      "cases": {
        "case-insert-right": {
          "caseName": "パターン1：右のスロットへ入れる場合",
          "badge": "右インサート",
          "initialDescription": "緑赤エッジが上面にあり、手前の緑が緑センターと一致。上面が赤なので、右側のスロットに入れます。",
          "targetDescription": "緑赤エッジが中段の右スロットに収まり、2層目が揃います。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ 1: エッジを反対側へ逃がす (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "エッジを目的地（右スロット）とは逆の左方向へ逃がします。"
            },
            {
              "stepTitle": "ステップ 2: コーナーを迎えに上げる (R)",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "底面の対応するコーナーを上面へ引き上げます。"
            },
            {
              "stepTitle": "ステップ 3: 空中でペアを合体 (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "コーナーとエッジが合体し、F2Lペアが完成します。"
            },
            {
              "stepTitle": "ステップ 4: 白ベースを復元 (R')",
              "handAction": "右面を手前へ90°回します。",
              "pieceEffect": "白の底面クロスを復元します。"
            },
            {
              "stepTitle": "ステップ 5: 正面挿入位置へ移動 (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "ペアを正面の投入スロット上へ位置付けます。"
            },
            {
              "stepTitle": "ステップ 6: 正面スロットを開く (F')",
              "handAction": "前面を反時計回りに90°回します。",
              "pieceEffect": "前面の受け入れスロットを開放します。"
            },
            {
              "stepTitle": "ステップ 7: ペアをスロットへ滑り込ませる (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "ペアを中層スロットへと差し込みます。"
            },
            {
              "stepTitle": "ステップ 8: 正面スロットを閉じる (F)",
              "handAction": "前面を時計回りに90°回します。",
              "pieceEffect": "中層エッジと下層を完全に固定・完成させます。"
            }
          ],
          "proTips": [
            "合言葉：遠ざける → セクシームーブ → 正面を回す → ペアを押し込む。"
          ]
        },
        "case-insert-left": {
          "caseName": "パターン2：左のスロットへ入れる場合",
          "badge": "左インサート（左右対称）",
          "initialDescription": "緑橙エッジが上面にあり、上面が橙なので、左側のスロットに入れます。",
          "targetDescription": "緑橙エッジが中段の左スロットに収まります。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ 1: エッジを反対側へ逃がす (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "エッジを左スロットとは逆の右方向へ逃がします。"
            },
            {
              "stepTitle": "ステップ 2: 左のコーナーを引き上げる (L')",
              "handAction": "左面を奥へ90°回します。",
              "pieceEffect": "左底面のコーナーを上面へ迎えに行きます。"
            },
            {
              "stepTitle": "ステップ 3: 空中でペアを合体 (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "コーナーとエッジを合体させてペアを作ります。"
            },
            {
              "stepTitle": "ステップ 4: 白ベースを保護 (L)",
              "handAction": "左面を手前へ90°回します。",
              "pieceEffect": "白の底面を復元します。"
            },
            {
              "stepTitle": "ステップ 5: 正面挿入位置へ (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "ペアを正面へ移動させます。"
            },
            {
              "stepTitle": "ステップ 6: 正面スロットを開く (F)",
              "handAction": "前面を時計回りに90°回します。",
              "pieceEffect": "受け入れスロットを開きます。"
            },
            {
              "stepTitle": "ステップ 7: ペアを挿入 (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "ペアを中層スロットへ挿入します。"
            },
            {
              "stepTitle": "ステップ 8: 正面を閉じてロック (F')",
              "handAction": "前面を反時計回りに90°回します。",
              "pieceEffect": "中層をロックし、下2層が完成します。"
            }
          ],
          "proTips": [
            "左インサートは右の手順の対称動作です（RをL'に、UをU'に置き換えるだけ）。"
          ]
        }
      }
    },
    "yellow-cross": {
      "title": "ステージ4：黄色の十字架（トップクロス）",
      "subtitle": "F (R U R' U') F' で上面のエッジの向きを揃える",
      "overview": "上面の黄色を見ます。コーナーは無視します。「点」「L字」「横一本線」の3パターンがあります。万能公式 F (R U R' U') F' で 点 → L字 → 直線 → 黄色クロス と変化します。",
      "keyTakeaway": "最初のFで手前を倒してエッジの向きを変えやすくし、セクシームーブ後にF'で下2層を復元します。",
      "cases": {
        "case-l-shape": {
          "caseName": "パターン1：L字型（90度のカギ型）",
          "badge": "最頻出",
          "initialDescription": "黄色エッジがL字になっています。針が12時（奥）と9時（左）を指すようにキューブを持ちます。",
          "targetDescription": "4つの黄色エッジがすべて上を向き、完全な黄色い十字架が完成します。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ 1: 前面を倒す (F)",
              "handAction": "前面を時計回りに90°回します。",
              "pieceEffect": "下2層を安全な場所へ逃がし、作業スペースを開きます。"
            },
            {
              "stepTitle": "ステップ 2: 右面を上げる (R)",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "セクシームーブを開始します。"
            },
            {
              "stepTitle": "ステップ 3: 上面を回す (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "上面エッジの向きを変えます。"
            },
            {
              "stepTitle": "ステップ 4: 右面を下げる (R')",
              "handAction": "右面を手前へ90°回します。",
              "pieceEffect": "右列を復元します。"
            },
            {
              "stepTitle": "ステップ 5: 上面を戻す (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "セクシームーブを完了します。"
            },
            {
              "stepTitle": "ステップ 6: 前面を戻す (F')",
              "handAction": "前面を反時計回りに90°戻します。",
              "pieceEffect": "下2層を復元し、黄色十字を固定します！"
            }
          ],
          "proTips": [
            "覚える呪文：FUR - U'R'F'（ファー・アーフ）。",
            "必ずL字が12時と9時を指していることを確認してから回してください。"
          ]
        },
        "case-horizontal-line": {
          "caseName": "パターン2：横一本線",
          "badge": "一発クロス",
          "initialDescription": "エッジが横一直線に並んでいます。必ず「横向き（9時〜3時）」に持って構えます。",
          "targetDescription": "直線が一発で十字架へと展開します。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ 1: 前面を時計回り (F)",
              "handAction": "前面を時計回りに90°回します。",
              "pieceEffect": "作業エリアを開きます。"
            },
            {
              "stepTitle": "ステップ 2: 右面を上へ (R)",
              "handAction": "右面を上へ90°回します。",
              "pieceEffect": "トリガーを開始します。"
            },
            {
              "stepTitle": "ステップ 3: 上面を時計回り (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "上面を回転させます。"
            },
            {
              "stepTitle": "ステップ 4: 右面を下へ (R')",
              "handAction": "右面を下へ90°回します。",
              "pieceEffect": "右列を復元します。"
            },
            {
              "stepTitle": "ステップ 5: 上面を反時計回り (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "トリガーを完了します。"
            },
            {
              "stepTitle": "ステップ 6: 前面を反時計回り (F')",
              "handAction": "前面を反時計回りに90°戻します。",
              "pieceEffect": "下2層を完全に復元します。"
            }
          ],
          "proTips": [
            "縦向きに持って回すと元に戻ってしまいます！必ず横向きに構えてください。"
          ]
        },
        "case-center-dot": {
          "caseName": "パターン3：中央の点のみ",
          "badge": "2回実行",
          "initialDescription": "エッジが1つも上を向いておらず、中央の黄色い点だけが見えています。",
          "targetDescription": "L字になり、次に直線、そして十字架へと進みます。",
          "detailedSteps": [
            {
              "stepTitle": "どこからでも1回回す",
              "handAction": "F R U R' U' F' を回します。",
              "pieceEffect": "L字パターンが出現します。"
            }
          ],
          "proTips": [
            "L字が出たら、12時と9時に配置してもう一度回します。"
          ]
        }
      }
    },
    "yellow-face-sune": {
      "title": "ステージ5：上面を黄色一色にする（スン手順）",
      "subtitle": "名手順「Sune」を使って黄色のコーナーを上向きに揃える",
      "overview": "黄色クロスができたら、4つのコーナーを反転させて上面全体を黄色一色にします。有名な「Sune（スン）」手順は、クロスを崩さずに3つのコーナーを同時にひねります。",
      "keyTakeaway": "コーナーのひねり数の合計は3の倍数で保存されるため（mod 3）、正常なキューブで1個のコーナーだけがひねられることは絶対にありません。",
      "cases": {
        "case-the-fish": {
          "caseName": "パターン1：魚の形（黄色コーナーが1個）",
          "badge": "一発Sune",
          "initialDescription": "黄色が1個だけ揃って魚のように見えます。魚の頭を「左下（手前左）」に向けます。",
          "targetDescription": "上面全体が鮮やかな黄色一色のフラットな面になります。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ 1: 右ペアを持ち上げる (R)",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "右前のコーナー・エッジペアを引き上げます。"
            },
            {
              "stepTitle": "ステップ 2: 上面を90°進める (U)",
              "handAction": "右手人差し指で上面を時計回りに90°回します。",
              "pieceEffect": "ペアを前進させます。"
            },
            {
              "stepTitle": "ステップ 3: 右スロットを下げる (R')",
              "handAction": "右面を手前へ90°回します。",
              "pieceEffect": "右列を一時的に退避させます。"
            },
            {
              "stepTitle": "ステップ 4: 上面をもう一度90°進める (U)",
              "handAction": "上面をさらに時計回りに90°回します。",
              "pieceEffect": "ペアを上面の周囲に沿って進めます。"
            },
            {
              "stepTitle": "ステップ 5: 右スロットを迎えに上げる (R)",
              "handAction": "右面を再び奥へ90°回します。",
              "pieceEffect": "ペアを迎え入れる準備を整えます。"
            },
            {
              "stepTitle": "ステップ 6: 上面を180°一気に回す (U2)",
              "handAction": "上面を時計回りに180°素早く2回転させます。",
              "pieceEffect": "ペアをスロットに一気に滑り込ませます。"
            },
            {
              "stepTitle": "ステップ 7: スロットを元に戻す (R')",
              "handAction": "右面を手前へ90°回します。",
              "pieceEffect": "ペアを白ベースに固定し、上面を黄色一色にします。"
            }
          ],
          "proTips": [
            "魚の法則：魚の頭は必ず手前左下に向けること。"
          ]
        },
        "case-no-corners-yellow": {
          "caseName": "パターン2：黄色コーナーが0個",
          "badge": "準備",
          "initialDescription": "クロスのみで、上面を向いている黄色コーナーが1個もありません。",
          "targetDescription": "魚の形を作り出します。",
          "detailedSteps": [
            {
              "stepTitle": "Suneを1回実行",
              "handAction": "R U R' U R U2 R' を回します。",
              "pieceEffect": "魚の形が現れます。"
            }
          ],
          "proTips": [
            "黄色のシールが左側面に見えるように構えてからスタートします。"
          ]
        }
      }
    },
    "permute-corners": {
      "title": "ステージ6：黄色コーナーの位置合わせ",
      "subtitle": "「ヘッドライト」を見つけ、4隅のコーナーを正しい位置へ交換する",
      "overview": "上面は黄色になりましたが、コーナーの位置がずれています。側面に同色の角が2つ並んでいる「ヘッドライト」を探し、ヘッドライトを「奥」にして手順を回します。",
      "keyTakeaway": "置換パリティの法則により、エッジの交換とコーナーの交換は常に同じ符号（偶置換）を共有します。",
      "cases": {
        "case-headlights": {
          "caseName": "パターン1：ヘッドライトがある場合",
          "badge": "コーナー交換",
          "initialDescription": "1つの面に同じ色のコーナーが2つ並んでいます（ヘッドライト）。これを奥（B面）に向けます。",
          "targetDescription": "4つのコーナーすべてが側面のセンターと完璧に一致します。",
          "detailedSteps": [
            {
              "stepTitle": "ステップ 1: 上面時計回り (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "セットアップ動作。"
            },
            {
              "stepTitle": "ステップ 2: 右面を上げる (R)",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "右コーナーを引き上げます。"
            },
            {
              "stepTitle": "ステップ 3: 上面反時計回り (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "上面を退避させます。"
            },
            {
              "stepTitle": "ステップ 4: 左面を上げる (L')",
              "handAction": "左面を奥へ90°回します。",
              "pieceEffect": "左コーナーを引き上げます。"
            },
            {
              "stepTitle": "ステップ 5: 上面時計回り (U)",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "右コーナーを揃えます。"
            },
            {
              "stepTitle": "ステップ 6: 右面を下げる (R')",
              "handAction": "右面を手前へ90°回します。",
              "pieceEffect": "右列を元に戻します。"
            },
            {
              "stepTitle": "ステップ 7: 上面反時計回り (U')",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "左コーナーを揃えます。"
            },
            {
              "stepTitle": "ステップ 8: 左面を下げる (L)",
              "handAction": "左面を手前へ90°回します。",
              "pieceEffect": "左列を戻し、全4つのコーナーが揃います！"
            }
          ],
          "proTips": [
            "どこにもヘッドライトがない場合は、適当な向きから1回回すと必ずヘッドライトが出現します！"
          ]
        }
      }
    },
    "permute-edges": {
      "title": "ステージ7：最後のエッジの位置合わせ（完成！）",
      "subtitle": "エッジの3点交換：Uパームでキューブを完全制覇する",
      "overview": "コーナーは全て揃いました！上面のエッジを見ます。1箇所だけ完全に揃っている面を「奥」に向けます。残りの3つのエッジを時計回りまたは反時計回りにローテーションさせれば完成です！",
      "keyTakeaway": "エッジの3点交換は偶置換（2互換の積）であり、群の不変量を完璧に維持しながら恒等置換（解法状態）へと収束します！",
      "cases": {
        "case-clockwise-u-perm": {
          "caseName": "パターン1：3個のエッジを時計回りに回す",
          "badge": "Uaパーム",
          "initialDescription": "奥の1面のエッジが揃っています。手前・左・右の3つのエッジが時計回りに移動すると完成します。",
          "targetDescription": "🎉 ルービックキューブが100%完全に揃いました！",
          "detailedSteps": [
            {
              "stepTitle": "ステップ 1: R",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "右ペアを引き上げます。"
            },
            {
              "stepTitle": "ステップ 2: U'",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "ペアを回転させます。"
            },
            {
              "stepTitle": "ステップ 3: R",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "置換サイクルを進めます。"
            },
            {
              "stepTitle": "ステップ 4: U",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "置換サイクルを進めます。"
            },
            {
              "stepTitle": "ステップ 5: R",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "置換サイクルを進めます。"
            },
            {
              "stepTitle": "ステップ 6: U",
              "handAction": "上面を時計回りに90°回します。",
              "pieceEffect": "置換サイクルを進めます。"
            },
            {
              "stepTitle": "ステップ 7: R",
              "handAction": "右面を奥へ90°回します。",
              "pieceEffect": "置換サイクルを進めます。"
            },
            {
              "stepTitle": "ステップ 8: U'",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "整列を開始します。"
            },
            {
              "stepTitle": "ステップ 9: R'",
              "handAction": "右面を手前へ90°回します。",
              "pieceEffect": "左側をロックします。"
            },
            {
              "stepTitle": "ステップ 10: U'",
              "handAction": "上面を反時計回りに90°回します。",
              "pieceEffect": "全エッジを揃えます。"
            },
            {
              "stepTitle": "ステップ 11: R2 (フィニッシュ！)",
              "handAction": "右面を180°ぐるりと半周回します。",
              "pieceEffect": "全層がロックされ、キューブが100%完全完成します！"
            }
          ],
          "proTips": [
            "最初どこも揃っていない場合は、任意の向きから1回回せば必ず1面揃います。"
          ]
        }
      }
    }
  },
  "graph": {
    "badge": "離散数学＆アルゴリズム幾何学",
    "title": "ルービックキューブのグラフ理論",
    "subtitle": "ケイリーグラフ、状態空間、グラフ直径、幅優先探索（BFS）フロント、剰余群による2段階探索を紐解く。",
    "tabs": {
      "explorer": "部分グラフ探査",
      "cayley": "ケイリーグラフ",
      "diameter": "神の数字",
      "search": "探索アルゴリズム",
      "commutators": "交換子"
    },
    "explorer": {
      "selectSubgroup": "部分群を選択：",
      "runBfs": "リアルタイム幅優先探索（BFS）を実行",
      "resetBfs": "BFSリセット",
      "shortestPath": "最短経路",
      "identity": "恒等元（0手）",
      "exploredStates": "探索済みノード",
      "realtimeSync": "リアルタイム3D状態同期",
      "depth": "深さ",
      "nodeId": "ノードID：",
      "movesSeq": "操作シーケンス：",
      "diameter": "部分群グラフ直径：",
      "syncHint": "グラフ上の任意のノードをクリックすると、対応する3Dキューブ形状が即座に表示されます！",
      "legendSolved": "完成",
      "legendVisited": "BFS訪問済",
      "legendPath": "最短経路",
      "legendSelected": "選択中",
      "subgroups": {
        "checkerboard": {
          "name": "チェッカーボード ⟨M2, E2, S2⟩ (3次元超立方体 Q₃)",
          "desc": "3元生成の基本アーベル群 (Z₂³)。8個のノードからなる美しい立方体グラフを形成し、すべてのエッジが対合（g = g⁻¹）です。距離3が有名な6面市松模様です！"
        },
        "r2u2": {
          "name": "6角形サイクル ⟨R2, U2⟩ (位数6)",
          "desc": "R2とU2の180°回転によって生成される位数6の二面体型サイクル。交互に回すと6手で元の完成状態に戻ります。"
        },
        "commutator": {
          "name": "交換子軌道 ⟨[R, U]⟩ (セクシームーブ)",
          "desc": "基本手順 [R, U] = R U R' U' の位数は正確に6です。6回適用すると6ノードの閉路を巡って完成状態へと戻ります！"
        }
      }
    },
    "cayleySection": {
      "title": "キューブ群のケイリーグラフ",
      "intro": "離散数学において、ルービックキューブは有向彩色グラフ「ケイリーグラフ Γ(G, S)」として厳密にモデル化されます：",
      "regularTitle": "正則グラフ",
      "regularDesc": "すべての頂点が全く同じ次数を持ちます。Quarter-Turn Metric（QTM）では次数12、Half-Turn Metric（HTM）では次数18となります。",
      "vertexTransitiveTitle": "頂点推移的",
      "vertexTransitiveDesc": "任意の2つの状態 u, v に対し、u → v を写す同型写像が存在します。トポロジー的に特別な状態は存在せず、どの頂点も合同な局所構造を持ちます！",
      "bipartiteTitle": "QTMにおける2部グラフ性",
      "bipartiteDesc": "90°の回転はすべて奇置換です。したがって、偶数手と奇数手の状態は2つの互いに素な頂点集合間を厳密に行き来します。",
      "groupOrderTitle": "群の位数と「12個の独立した軌道」",
      "groupOrderIntro": "キューブ群で物理的に到達可能な状態の総数は次の通りです：",
      "twelveOrbitsIntro": "なぜ分母に 2 · 3 · 2 = 12 があるのでしょうか？分解してランダムに組み立て直すと、空間は12個の互いに到達できない孤立した連結成分に分裂します：",
      "cornerParity": "1. コーナーの向きのパリティ（÷3）：",
      "cornerParityDesc": "8個のコーナーの回転数の和は常に保存されます：∑ twist ≡ 0 (mod 3)。1個のコーナーだけをひねることは不可能です。",
      "edgeParity": "2. エッジの向きのパリティ（÷2）：",
      "edgeParityDesc": "12個のエッジの反転数の和は保存されます：∑ flip ≡ 0 (mod 2)。1個のエッジだけを反転させることは不可能です。",
      "permParity": "3. 置換のパリティ（÷2）：",
      "permParityDesc": "全置換の符号：sgn(コーナー) = sgn(エッジ)。他のパーツに触れずに2個のパーツだけを交換することは物理的に不可能です。"
    },
    "diameterSection": {
      "badge": "グラフ理論の基本指標",
      "title": "神の数字：キューブグラフの直径",
      "intro": "グラフ理論における「直径」とは、任意の2頂点間の最短距離の最大値を意味します：",
      "htmTitle": "Half-Turn Metric (HTM)",
      "htmDesc": "2010年7月にGoogleの35CPU年の計算によって証明：いかなる配置からも、最大20手以内で必ず解くことができます！",
      "qtmTitle": "Quarter-Turn Metric (QTM)",
      "qtmDesc": "2014年8月に証明：90°回転を1手（180°を2手）と数えるQTMでの神の数字はちょうど26手です。",
      "superflipTitle": "「スーパーフリップ」：対蹠点（最遠の頂点）",
      "superflipDesc": "1995年、数学者マイケル・リードはスーパーフリップ（コーナー完成、全12エッジ反転）がHTMで20手を要することを証明しました。",
      "distTitle": "距離（深さ）ごとの状態数分布（HTM）",
      "distNote": "注：全4300京通りの状態のうち、なんと65%以上が「深さ18」に集中しています！"
    },
    "searchSection": {
      "title": "グラフ探索：BFSの爆発とコシエンバの2段階縮約法",
      "bfsFailTitle": "なぜ単純な幅優先探索（BFS）は破綻するのか",
      "bfsFailDesc": "平均分岐係数 b ≈ 13.35 では、深さ20の探索フロントは 1.8 × 10²² 状態に膨れ上がり、ペタバイト級のメモリでも保持不能です。",
      "paradigmsIntro": "情報科学者は2つの数学的パラダイムによってこれを克服しました：",
      "bibfsTitle": "1. 双方向幅優先探索",
      "bibfsDesc": "シャッフル状態と完成状態の両側から同時に探索を展開することで、深さが d から d/2 へ半減。計算量が O(bᵈ) から O(bᵈ/²) へと劇的に縮小します。",
      "pdbTitle": "2. パターンデータベース（PDB）",
      "pdbDesc": "商グラフ（例：コーナーのみの8800万状態）への射影から、真の距離を決して過大評価しない「許容ヒューリスティック h(n) ≤ h*(n)」を導出します。",
      "kociembaTitle": "コシエンバの2段階解法アルゴリズム",
      "kociembaIntro": "ハーバート・コシエンバは群全体を入れ子の部分群系列へと分解しました：",
      "phase1Title": "フェーズ1（剰余類グラフ G / H）：",
      "phase1Desc": "任意の状態から部分群 H（エッジ・コーナーの向きが揃った状態）への経路を発見。わずか22億状態のため数ミリ秒で走査可能です！",
      "phase2Title": "フェーズ2（部分群グラフ H）：",
      "phase2Desc": "U, D, L², R², F², B² のみを用いて、極めて小さな探索空間で恒等元（完成）へ到達します。"
    },
    "commutatorSection": {
      "title": "交換子と共役：ケイリーグラフ上の局所ループ",
      "intro": "なぜ手順はキューブの90%を壊さずに特定のピースだけを動かせるのでしょうか？その答えが交換子（Commutator）と共役（Conjugate）です。",
      "commutatorTitle": "交換子：[A, B] = A B A⁻¹ B⁻¹",
      "commutatorDesc1": "もし操作AとBが可換なら A B A⁻¹ B⁻¹ = e（恒等元）となります。作用領域が1〜2個のピースのみで交差する場合、残りのパーツは完全に相殺されます！",
      "commutatorDesc2": "結果として孤立した3点交換が得られます。代表例がセクシームーブ [R, U] = R U R' U' です。",
      "conjugateTitle": "共役：A B A⁻¹",
      "conjugateIntro": "グラフ上の往復ルート配送：",
      "setupMove": "A（セットアップ）：目的のピースを作業エリアへと運ぶ。",
      "operatorMove": "B（オペレーター）：局所的な交換子やサイクルを実行する。",
      "teardownMove": "A⁻¹（逆セットアップ）：セットアップを完全に巻き戻し、元の位置へ戻す。",
      "conjugateSummary": "エッジを進み、局所ループを実行して、同じ道を通って戻ってくる直感的な構造です！",
      "infoBox": "OLL、PLL、目隠し競技（BLD）などの高度な解法は、すべて交換子と共役によって設計されています。"
    }
  },
  "sandbox": {
    "wcaScramble": "WCA公式 3x3 スクランブル",
    "copyScramble": "スクランブルをコピー",
    "newScramble": "新規スクランブル生成",
    "scrambleCube": "キューブを崩す",
    "resetSolved": "完成状態にリセット",
    "title": "3Dフリープレイ・サンドボックス",
    "undo": "1手戻す",
    "turnControls": "回転ボタン＆スライス操作",
    "testerTitle": "手順テスター＆逆手順生成",
    "testerPlaceholder": "手順を入力（例: R U R' U'）",
    "execute": "実行",
    "invert": "逆手順に変換",
    "history": "回転履歴",
    "timerTitle": "スピードキューブ・タイマー",
    "releaseToStart": "離してスタート！",
    "holdSteady": "長押ししてください...",
    "solvingTapToStop": "計測中... タップで停止",
    "holdSpaceToStart": "スペースバー長押し または ここをタップ",
    "bestTime": "自己ベスト",
    "ao5": "5回平均（Ao5）",
    "recentSolves": "最近の記録",
    "invertTooltip": "逆再生アルゴリズムを計算",
    "clearHistory": "履歴を消去",
    "turns": "手",
      "referenceTitle": "模範解答とソルバー",
      "showReference": "模範解答を表示",
      "hideReference": "模範解答を隠す（ネタバレ防止）",
      "alreadySolved": "キューブはすでに揃っています！シャッフルするか面を回すと模範解答が生成されます。",
      "solutionBadge": "推奨復元ルート",
      "copySolution": "解法手順をコピー",
      "copied": "コピー完了！",
      "stepNext": "1手進む",
      "stepPrev": "1手戻る",
      "autoSolve": "自動再生",
      "pause": "一時停止",
      "solveInstant": "一瞬で揃える",
    "solverMode": "解法モード",
    "cfopMode": "CFOP チュートリアル手順解法",
    "optimalMode": "最短手逆順（ショートカット）",
    "cfopMethodDesc": "チュートリアルの7段階（白クロス→1層目コーナー→2層目エッジ→黄色クロス→黄色コーナー向き→黄色コーナー位置→黄色エッジ位置）に沿って段階的に復元し、診断ステータスを進めます。",
    "optimalMethodDesc": "スクランブルを直接逆回転して最小手数で素早く復元します。",
    "stageCompleted": "ステージ完了",
    "currentStage": "現在のステージ",
    "stageHeader": "ステージ {stage}：{name}",
    "stageMovesCount": "{count} 手",
    "stageNames": {
          "whiteCross": "白クロス",
          "firstLayer": "1層目コーナー（完全1層）",
          "secondLayer": "2層目エッジ（完全2層）",
          "yellowCross": "黄色クロス",
          "orientYellowCorners": "黄色コーナー向き揃え",
          "permuteYellowCorners": "黄色コーナー位置揃え",
          "permuteYellowEdges": "黄色エッジ位置揃え（完成）"
    },

      "phaseDiagnostic": "CFOP / LBL法 ステージ診断",
      "phaseCurrent": "現在の段階",
      "phaseNextAlgo": "おすすめの手順",
      "piecesRestored": "揃ったピース数",
      "solutionProgress": "模範解答の進捗",
      "directInverseNote": "ヒント：現在の模範解答は20手以内の最短逆順解法（全層同時復元）であり、LBL（層別解法）とは異なります。下層クロス等は最後の数手で一気に揃います。",
      "edgesAligned": "個のエッジが揃い",
      "cornersDocked": "個のコーナーが格納",
      "edgesPlaced": "個のエッジが配置済み",
      "edgesOriented": "個のエッジ向きが一致",
      "cornersOriented": "個のコーナー向きが一致",
      "importPhysicalCube": "手元のルービックキューブを取り込む",
      "importSuccess": "実物キューブの状態を取り込みました！CFOPステップ解説解法を生成しました。",
      "phaseNames": {
        "whiteCross": "白のクロス（ステージ 1）",
        "firstLayer": "白のコーナー / 完全1面（ステージ 2）",
        "secondLayer": "中段エッジ / 2層目（ステージ 3）",
        "yellowCross": "黄色のクロス / OLLエッジ（ステージ 4）",
        "orientYellowCorners": "黄色のコーナー向き揃え / スーネ（ステージ 5）",
        "permuteYellowCorners": "黄色のコーナー位置揃え / PLLコーナー（ステージ 6）",
        "permuteYellowEdges": "黄色のエッジ位置揃え / 完全完成（ステージ 7）",
        "solved": "完全揃い（恒等状態）"
      },
      "phaseTips": {
        "whiteCross": "4つの白エッジを正しい側面センター色と一致させて配置します。",
        "firstLayer": "セクシームーブ（R U R' U'）を使って白コーナーを正しく格納します。",
        "secondLayer": "左手・右手インサート手順を使って中段エッジを入れます。",
        "yellowCross": "F (R U R' U') F' を実行して上面の黄色クロスを作ります。",
        "orientYellowCorners": "スーネ手順（R U R' U R U2 R'）で全黄色ステッカーを下向きに揃えます。",
        "permuteYellowCorners": "ヘッドライトを見つけてコーナー交換手順で4隅を正しい位置に揃えます。",
        "permuteYellowEdges": "Uパーム（3エッジ交換）を実行して最後のピースを揃え、完全完成させます。",
        "solved": "おめでとうございます！すべての面が元通りに揃いました。"
      },
},
  "quiz": {
    "badge": "インタラクティブ知識チャレンジ",
    "title": "キューブ解法＆グラフ理論クイズ",
    "subtitle": "揃え方の基礎、ケイリーグラフ、状態空間、交換子の数学的理解度をチェック！",
    "questionOf": "問題 {current} / {total}",
    "correct": "正解！",
    "explanationLabel": "解説：",
    "answeredOf": "{count} / {total} 問回答済み",
    "submit": "クイズを採点する",
    "score": "スコア：{score} / {total}",
    "retake": "もう一度挑戦",
    "feedbackMaster": "🎉 完璧です！ルービックキューブの解法とグラフ理論を完全にマスターしています。",
    "feedbackGood": "👍 素晴らしい！解説を読んでさらに直感を深めましょう。",
    "feedbackPractice": "チュートリアルやグラフ理論の各項目を復習してみましょう！",
    "questions": {
      "1": {
        "question": "エッジパーツには何枚のシールがあり、コーナーのスロットへ移動することは可能ですか？",
        "options": [
          "2枚。スライス回転を使えばコーナースロットへ移動できる",
          "2枚。エッジがコーナースロットに入ることは絶対にできない",
          "3枚。コーナーと役割が入れ替わる",
          "1枚。エッジは側面の色のみを反射する"
        ],
        "explanation": "エッジは厳密に2枚のシールを持ち、隣接する2面を繋ぎます。3枚のシールを持つコーナーとは軌道が完全に分離しています！"
      },
      "2": {
        "question": "基本手順「セクシームーブ」[R, U] = R U R' U' の群論における位数はいくつですか？",
        "options": [
          "4",
          "6",
          "12",
          "24"
        ],
        "explanation": "(R U R' U') をちょうど6回繰り返すと、すべてのパーツが元の位置と向きに戻ります！したがって位数は6です。"
      },
      "3": {
        "question": "Half-Turn Metric (HTM) において、キューブのケイリーグラフの各頂点の正則次数はいくつですか？",
        "options": [
          "6",
          "12",
          "18",
          "26"
        ],
        "explanation": "6面 × 3通りの回転（90°, -90°, 180°）= 各頂点から18本のエッジが伸びています！"
      },
      "4": {
        "question": "HTMにおける「神の数字」（ケイリーグラフの真の直径）は何手ですか？",
        "options": [
          "18手",
          "20手",
          "24手",
          "26手"
        ],
        "explanation": "2010年7月、Googleの分散計算（35CPU年）によって、いかなる配置も最大20手で解けることが証明されました。"
      },
      "5": {
        "question": "物理的なパーツの組み立て空間が12個の独立した連結成分に分裂するのはなぜですか？",
        "options": [
          "キューブに12個のエッジがあるため",
          "分解したキューブに12種類の色があるため",
          "コーナーの回転和 (mod 3)、エッジの反転和 (mod 2)、全置換のパリティ (mod 2) の3つの保存則があるため",
          "6面 × 2方向 = 12 だから"
        ],
        "explanation": "3 × 2 × 2 = 12。キューブを分解しない限り、コーナー1個だけをひねったり、エッジ1個だけを反転させたり、2個のパーツだけを交換することは不可能です。"
      },
      "6": {
        "question": "マイケル・リードの「スーパーフリップ」が数学的に有名な理由は何ですか？",
        "options": [
          "HTMで絶対最大値である20手かかることが証明された最初の配置だから",
          "解くことが不可能な唯一の配置だから",
          "コーナーが反転しているから",
          "完成から1手で届くから"
        ],
        "explanation": "スーパーフリップ（コーナー完成、全12エッジ反転）はグラフの最遠の対蹠点に位置し、20手が必要であることが証明された歴史的第一号です。"
      },
      "7": {
        "question": "パターンデータベース（PDB）がA*探索において「許容ヒューリスティック」を保証するのはなぜですか？",
        "options": [
          "最短経路をランダムに推測するから",
          "制約を緩めた商グラフ上の真の最短距離を測定しており、実距離を決して過大評価しないから",
          "4300京通りの状態をすべて保存しているから",
          "10秒以内での解出力を保証するから"
        ],
        "explanation": "許容ヒューリスティックは h(n) ≤ h*(n) を満たす必要があります。制約を省略した商グラフでの最短距離は、実空間の距離以下であることが数学的に保証されます。"
      },
      "8": {
        "question": "群論における共役操作 A B A⁻¹ はキューブ上でどのように働きますか？",
        "options": [
          "ランダムにパーツをシャッフルする",
          "Aで対象パーツを作業位置へ運び、Bで操作し、A⁻¹で元の位置へ正確に戻す",
          "向かい合う2面を同時に回す",
          "WCA公式ルールで禁止されている"
        ],
        "explanation": "共役はパーツの往復配送です：Aでセットアップし、Bで置換を行い、A⁻¹で周囲を完璧に復元します。"
      }
    },
    "categories": {
      "solving": "解法",
      "graphTheory": "グラフ理論",
      "groupTheory": "群論"
    }
  },
  "cubeInput": {
    "modalTitle": "手元のルービックキューブ状態を取り込む",
    "modalSubtitle": "Webカメラによる自動スキャンまたは展開図の手動塗りで、お手持ちのキューブを3Dサンドボックスに読み込みます",
    "tabCamera": "カメラ自動認識",
    "tabManual": "展開図手動入力",
    "cameraGuideTitle": "カメラ位置合わせガイド",
    "cameraFacingHint": "ガイダンスに従って6面を順番にスキャンし、キューブの基準向きを保ってください",
    "cameraInstructions": "スキャン対象の面を画面中央の3×3ファインダーに合わせて撮影してください",
    "scanPromptPrefix": "スキャン中",
    "alignNotice": "反射や強い影を避けるため、均一な明るさの室内で撮影してください",
    "captureFace": "この面を記録",
    "retakeFace": "やり直す",
    "faceCapturedLocked": "この面は取得済みでロック中",
    "reidentifyFace": "この面を再スキャン",
    "clickToFineTune": "ステッカーをクリックして色を微調整",
    "capturedFaceHint": "この面の色は固定されています。再度認識するには「この面を再スキャン」をクリックしてください。",
    "scanningProgress": "スキャン進捗",
    "waitingAllFaces": "全6面をスキャンしてください (完了: {0}/6)",
    "nextFace": "次の面へ",
    "allFacesScanned": "全6面のスキャンが完了しました！",
    "startCamera": "カメラ起動",
    "stopCamera": "カメラ停止",
    "cameraPermissionDenied": "カメラの使用が拒否されました。ブラウザでカメラの権限を許可するか、手動入力をお使いください。",
    "cameraNotAvailable": "カメラが見つかりません。「展開図手動入力」をご利用ください。",
    "flipCamera": "カメラ切り替え",
    "jumpToManual": "展開図で確認・微調整",
    "facesToScan": {
        "U": "上面 U (白センター)",
        "L": "左面 L (橙センター)",
        "F": "前面 F (緑センター)",
        "R": "右面 R (赤センター)",
        "B": "後面 B (青センター)",
        "D": "下面 D (黄センター)"
    },
    "faceOrientations": {
        "U": "白面をカメラに向け、緑面を下/手前に向けてください",
        "L": "橙面をカメラに向け、白面を上に保ってください",
        "F": "緑面をカメラに向け、白面を上に保ってください",
        "R": "赤面をカメラに向け、白面を上に保ってください",
        "B": "青面をカメラに向け、白面を上に保ってください",
        "D": "黄面をカメラに向け、緑面を上/手前に向けてください"
    },
    "manualInstructions": "下のカラーパレットから色を選び、展開図のマスをクリックして色を塗ります（センターは固定）",
    "colorPalette": "カラーパレット",
    "selectedColor": "選択中の色",
    "remaining": "残り",
    "resetSolved": "完成状態で満たす",
    "clearAll": "センター以外をクリア",
    "sampleScramble": "サンプル崩しをロード",
    "netLayoutHint": "十字展開図：上(U) / 左(L) / 前(F) / 右(R) / 後(B) / 下(D)",
    "statusValid": "物理的に有効なキューブ状態です！インポート可能です。",
    "statusInvalid": "キューブの状態がまだ整っていません",
    "incompleteStickers": "未入力のマスがあります。54マスすべて指定してください。",
    "invalidColorCount": "各色の数が不正です（各色9マスである必要があります）。",
    "invalidCenters": "センターの色配置が不正です。",
    "impossibleEdge": "物理的にあり得ないエッジパーツを検出しました。",
    "duplicateEdge": "重複するエッジパーツを検出しました。",
    "impossibleCorner": "物理的にあり得ないコーナーパーツを検出しました。",
    "duplicateCorner": "重複するコーナーパーツを検出しました。",
    "applyToSandbox": "3Dサンドボックスに適用して解法生成",
    "cancel": "キャンセル",
    "colorNames": {
        "white": "白",
        "yellow": "黄",
        "green": "緑",
        "blue": "青",
        "red": "赤",
        "orange": "橙"
    }
},
  "footer": {
    "brandTitle": "RubikGraph 3D",
    "brandDesc": "インタラクティブ3Dモジュール＆離散グラフ理論エクスプローラー",
    "cayleyLabel": "ケイリーグラフ Γ(G, S)",
    "godNumberLabel": "神の数字 = 20 HTM",
    "groupOrderLabel": "|G| ≈ 4.3 × 10¹⁹"
  }
};
