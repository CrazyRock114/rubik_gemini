import type { TranslationSchema } from '../types';

export const de: TranslationSchema = {
  "nav": {
    "brandSubtitle": "3D-Tutorial & Graphentheorie",
    "tutorial": "3D-Tutorial",
    "graph": "Graphentheorie",
    "sandbox": "3D-Sandkasten",
    "quiz": "Wissensquiz",
    "shortcuts": "Tastenkürzel",
    "shortcutsTitle": "Tastatur-Kurzbefehle",
    "primeDoubleHint": "Halte Shift + Buchstabe für Drehungen gegen den Uhrzeigersinn (z.B. R').",
    "timerHint": "Halte die Leertaste im Sandkasten gedrückt, um den Speedcube-Timer zu starten!"
  },
  "cube3d": {
    "dragHint": "Ziehen zum Drehen der 3D-Ansicht",
    "turn": "Drehung",
    "clockwise": "90° im Uhrzeigersinn",
    "counterClockwise": "90° gegen den Uhrzeigersinn",
    "halfTurn": "180° Halbe Drehung",
    "faces": {
      "U": "Oben / Up (Weiß)",
      "D": "Unten / Down (Gelb)",
      "R": "Rechts / Right (Rot)",
      "L": "Links / Left (Orange)",
      "F": "Vorne / Front (Grün)",
      "B": "Hinten / Back (Blau)",
      "M": "Mittlere Schicht (M)",
      "E": "Äquator-Schicht (E)",
      "S": "Stehende Schicht (S)"
    }
  },
  "tutorial": {
    "stageProgress": "Stufe",
    "focusModeOn": "Fokus-Modus AN",
    "focusModeOff": "Fokus-Modus AUS",
    "focusTooltip": "Der Fokus-Modus blendet irrelevante Steine ab, um den Blick auf Zielsteine zu schärfen",
    "keyIntuition": "Wichtige Intuition",
    "caseSelectorTitle": "Fall auswählen / Ausgangssituation",
    "caseSelectorPrompt": "Welches Muster zeigt dein Würfel?",
    "howToIdentify": "So erkennst du diesen Fall:",
    "operationGuideTitle": "Schritt-für-Schritt Anleitung",
    "moveProgress": "Zug",
    "howToPerform": "Ausführung dieses Zugs:",
    "pieceEffectLabel": "Mechanische Auswirkung auf Steine:",
    "algorithmComplete": "Algorithmus abgeschlossen!",
    "algorithmCompleteDesc": "Zielzustand für diesen Fall erreicht. Überprüfe deinen echten Würfel!",
    "restartCase": "Fall neustarten",
    "resetCase": "Fall zurücksetzen",
    "animateTurn": "Diesen Zug animieren",
    "rotating": "Dreht sich...",
    "autoPlay": "Automatisch abspielen",
    "pause": "Pause",
    "initialState": "Ausgangszustand",
    "guided3D": "Geführtes 3D",
    "targetGoal": "Zielzustand",
    "showingInitial": "Zeigt Ausgangsmuster",
    "showingTarget": "Zeigt angestrebten Zielzustand",
    "aimingFor": "Was du erreichen willst",
    "dragToInspect": "Ziehen zum Inspizieren",
    "targetGoalLabel": "Ziel:",
    "reset3DView": "3D-Ansicht zurücksetzen",
    "animationSpeedHint": "Drehungen animieren flüssig mit 0.55s",
    "prevStage": "Vorherige Stufe",
    "nextStage": "Nächste Stufe",
    "speedcuberTips": "Speedcuber-Tipps für"
  },
  "stages": {
    "anatomy-notation": {
      "title": "Stufe 0: Anatomie & Notation",
      "subtitle": "Steintypen, Freiheitsgrade und Drehmechanik verstehen",
      "overview": "Der Zauberwürfel besteht aus 3 Steinarten: 6 Mittelsteine (feststehend), 12 Kanten (2 Farben) und 8 Ecken (3 Farben). Vor dem Lösen lernst du, wie sich jede Seite im und gegen den Uhrzeigersinn dreht.",
      "keyTakeaway": "Eine Ecke kann NIEMALS zu einer Kante werden und umgekehrt. Du löst keine einzelnen Sticker, sondern bewegst ganze 3D-Steine an ihren Bestimmungsort.",
      "cases": {
        "basic-turns": {
          "caseName": "Grundlegende Seitendrehungen (R, U, F)",
          "badge": "Grundlage",
          "initialDescription": "Ausgangspunkt ist der gelöste Würfel. Beobachte, wie jede Drehung nur die 9 Steine dieser Ebene bewegt, während 17 Steine unberührt bleiben.",
          "targetDescription": "Nach R U R' U' siehst du die vordere rechte Ecke und Kante versetzt.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Rechte Seite im Uhrzeigersinn (R)",
              "handAction": "Umfasse die rechte Ebene mit Daumen vorne und Fingern hinten. Drehe die Ebene um 90° von dir weg.",
              "pieceEffect": "Hebt die untere vordere rechte Ecke in die obere Ebene."
            },
            {
              "stepTitle": "Schritt 2: Obere Seite im Uhrzeigersinn (U)",
              "handAction": "Drücke mit dem rechten Zeigefinger die hintere rechte Ecke nach links (90° im Uhrzeigersinn).",
              "pieceEffect": "Dreht die obere Ebene und entfernt die Ecke aus der rechten Schicht."
            },
            {
              "stepTitle": "Schritt 3: Rechte Seite gegen den Uhrzeigersinn (R')",
              "handAction": "Ziehe die rechte Ebene um 90° zu dir heran.",
              "pieceEffect": "Bringt die rechte Spalte wieder nach unten in die Basisebene."
            },
            {
              "stepTitle": "Schritt 4: Obere Seite gegen den Uhrzeigersinn (U')",
              "handAction": "Drücke mit dem linken Zeigefinger die obere Ebene um 90° nach rechts.",
              "pieceEffect": "Setzt die Ausrichtung der oberen Schicht zurück."
            }
          ],
          "proTips": [
            "Im Uhrzeigersinn meint immer den Blick direkt senkrecht auf die jeweilige Seite.",
            "Ein Apostroph (') kennzeichnet eine Drehung gegen den Uhrzeigersinn.",
            "Eine 2 (z. B. U2) bedeutet eine halbe Drehung um 180°."
          ]
        }
      }
    },
    "white-cross": {
      "title": "Stufe 1: Das weiße Kreuz",
      "subtitle": "Das Fundament: Weiße Kanten mit Weiß und den passenden Mittelsteinen ausrichten",
      "overview": "Ziel ist es, alle 4 weißen Kanten auf der weißen Fläche zu platzieren. Wichtig: Die zweite Farbe jeder Kante muss exakt zum benachbarten Mittelstein passen (Grün zu Grün, Rot zu Rot usw.).",
      "keyTakeaway": "Ein weißes Kreuz mit falschen Seitenfarben ist nicht gelöst! Jede Kante verbindet zwei Ebenen zugleich.",
      "cases": {
        "case-daisy-plunge": {
          "caseName": "Möglichkeit 1: Gänseblümchen & 180°-Drehung",
          "badge": "Häufigster Fall",
          "initialDescription": "Die weiß-grüne Kante sitzt beim gelben Mittelstein (Gänseblümchen). Ihr grüner Sticker stimmt bereits mit dem grünen Mittelstein überein.",
          "targetDescription": "Die Kante sitzt fest in der weißen Fläche und verbindet Weiß sauber mit Grün.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Vorderseite um 180° drehen (F2)",
              "handAction": "Drehe die Vorderseite um 180° (zwei Vierteldrehungen).",
              "pieceEffect": "Befördert die weiß-grüne Kante direkt von oben hinab in die weiße Basis."
            }
          ],
          "proTips": [
            "Die Gänseblümchen-Methode: Sammle zuerst alle 4 weißen Kanten um das gelbe Zentrum – das geht komplett ohne Formeln!",
            "Stimmt die Seitenfarbe, schickt eine 180°-Drehung (F2, R2) die Kante direkt nach unten."
          ]
        },
        "case-flipped-edge": {
          "caseName": "Möglichkeit 2: Verdrehte Kante vorne",
          "badge": "Orientierung",
          "initialDescription": "Die Kante sitzt zwar zwischen weißem und grünem Zentrum, ist aber verdreht: Grün liegt auf der weißen Seite!",
          "targetDescription": "Die Kante ist richtig herum gedreht: Weiß zeigt nach unten, Grün nach vorne.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Vorne gegen den Uhrzeigersinn (F')",
              "handAction": "Drehe die Vorderseite um 90° gegen den Uhrzeigersinn.",
              "pieceEffect": "Befördert die verdrehte Kante in die mittlere Ebene."
            },
            {
              "stepTitle": "Schritt 2: Oben gegen den Uhrzeigersinn (U')",
              "handAction": "Drehe die obere Ebene mit dem linken Zeigefinger um 90°.",
              "pieceEffect": "Schafft oben Platz für die Aufnahme der Kante."
            },
            {
              "stepTitle": "Schritt 3: Rechts im Uhrzeigersinn (R)",
              "handAction": "Drehe die rechte Seite um 90° nach oben.",
              "pieceEffect": "Hebt die Kante richtig orientiert nach oben."
            },
            {
              "stepTitle": "Schritt 4: Oben im Uhrzeigersinn (U)",
              "handAction": "Drehe oben um 90° zurück über das grüne Zentrum.",
              "pieceEffect": "Richtet die Kante für den finalen Tauchgang aus."
            }
          ],
          "proTips": [
            "Zeigt Weiß zur Seite statt nach oben, bringt eine Zwischenlagerung in der Mitte die Lösung."
          ]
        }
      }
    },
    "first-layer-corners": {
      "title": "Stufe 2: Ecken der ersten Ebene",
      "subtitle": "Der \"Sexy Move\" [R, U] = R U R' U' zur Vervollständigung der weißen Basis",
      "overview": "Nach dem Kreuz setzen wir die 4 weißen Ecken ein. Jede Ecke besitzt 3 Farben. Wir positionieren sie über ihrem Zielplatz und wiederholen (R U R' U'), bis Weiß nach unten zeigt.",
      "keyTakeaway": "Der Sexy Move ist ein mathematischer Kommutator, der Änderungen auf einen Slot beschränkt und den Rest des Puzzles schützt.",
      "cases": {
        "case-white-facing-right": {
          "caseName": "Möglichkeit 1: Weißer Sticker zeigt nach RECHTS",
          "badge": "1 Durchgang (Am schnellsten)",
          "initialDescription": "Die Weiß-Grün-Rot-Ecke steht oben über ihrem Slot. Der weiße Sticker zeigt nach RECHTS.",
          "targetDescription": "Die Ecke sitzt unten in der Basis mit Weiß nach unten.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Ziel-Slot anheben (R)",
              "handAction": "Drehe die rechte Seite um 90° nach oben.",
              "pieceEffect": "Hebt den unteren Slot zur oberen Ebene."
            },
            {
              "stepTitle": "Schritt 2: Ecke verbinden (U)",
              "handAction": "Drehe oben um 90° im Uhrzeigersinn.",
              "pieceEffect": "Verbindet die Ecke mit dem angehobenen Slot."
            },
            {
              "stepTitle": "Schritt 3: Slot absenken (R')",
              "handAction": "Ziehe rechts um 90° nach unten.",
              "pieceEffect": "Bringt den Slot samt Ecke in die Basis zurück."
            },
            {
              "stepTitle": "Schritt 4: Obere Ebene ausrichten (U')",
              "handAction": "Drehe oben um 90° gegen den Uhrzeigersinn.",
              "pieceEffect": "Stellt die Orientierung der oberen Ebene wieder her."
            }
          ],
          "proTips": [
            "Zeigt Weiß nach rechts, löst genau EIN Sexy Move (R U R' U') die Ecke!"
          ]
        },
        "case-white-facing-up": {
          "caseName": "Möglichkeit 2: Weißer Sticker zeigt nach OBEN",
          "badge": "3 Durchgänge",
          "initialDescription": "Die Ecke steht über ihrem Platz, aber Weiß zeigt senkrecht nach OBEN zur Decke.",
          "targetDescription": "Die Ecke ist um 120° gedreht und fest in der Basis verankert.",
          "detailedSteps": [
            {
              "stepTitle": "Durchgang 1: Ausrichtung ändern",
              "handAction": "Führe R U R' U' einmal aus.",
              "pieceEffect": "Die Ecke wandert nach unten, Weiß zeigt nach vorne."
            },
            {
              "stepTitle": "Durchgang 2: Ecke herausheben",
              "handAction": "Führe R U R' U' ein zweites Mal aus.",
              "pieceEffect": "Ecke kommt wieder nach oben, Weiß zeigt nach rechts."
            },
            {
              "stepTitle": "Durchgang 3: Finales Einsetzen",
              "handAction": "Führe R U R' U' ein drittes Mal aus.",
              "pieceEffect": "Ecke sitzt perfekt mit Weiß nach unten."
            },
            {
              "stepTitle": "Fertig",
              "handAction": "Sequenz beenden.",
              "pieceEffect": "Erste Ebene komplett."
            }
          ],
          "proTips": [
            "Zeigt Weiß nach oben: Wiederhole (R U R' U') exakt 3 Mal!"
          ]
        },
        "case-corner-trapped": {
          "caseName": "Möglichkeit 3: Ecke unten verdreht gefangen",
          "badge": "Befreiung",
          "initialDescription": "Die Ecke ist bereits in der unteren Ebene, aber falsch herum gedreht oder am falschen Platz.",
          "targetDescription": "Die Ecke wird nach oben befreit, um korrekt eingesetzt zu werden.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Ecke anheben (R)",
              "handAction": "Rechte Seite nach oben drehen.",
              "pieceEffect": "Hebt die gefangene Ecke nach oben."
            },
            {
              "stepTitle": "Schritt 2: Wegdrehen (U)",
              "handAction": "Oben um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Schiebt die Ecke aus der Gefahrenzone."
            },
            {
              "stepTitle": "Schritt 3: Basis sichern (R')",
              "handAction": "Rechts wieder nach unten drehen.",
              "pieceEffect": "Weißes Kreuz bleibt unversehrt."
            },
            {
              "stepTitle": "Schritt 4: Ausrichten (U')",
              "handAction": "Obere Ebene zurückdrehen.",
              "pieceEffect": "Ecke ist nun oben frei beweglich."
            }
          ],
          "proTips": [
            "Sitzt eine Ecke falsch unten, befreit ein einzelner Sexy Move sie sofort nach oben."
          ]
        }
      }
    },
    "second-layer-edges": {
      "title": "Stufe 3: Zweite Ebene (Mittlere Kanten)",
      "subtitle": "Kanten und Ecken paaren, um die ersten beiden Schichten (F2L) abzuschließen",
      "overview": "Suche oben eine Kante OHNE Gelb. Richte ihre Vorderseite am passenden Mittelstein aus. Anhand der oberen Farbe entscheidest du: nach RECHTS oder nach LINKS einsetzen?",
      "keyTakeaway": "Der Algorithmus schiebt die Kante weg, hebt die Ecke heraus zu einem Paar und setzt beide Steine gemeinsam sauber ein.",
      "cases": {
        "case-insert-right": {
          "caseName": "Möglichkeit 1: Kante muss nach RECHTS",
          "badge": "Rechts-Einsetzen",
          "initialDescription": "Die Grün-Rot-Kante passt vorne zu Grün. Oben ist Rot – sie muss also in den RECHTEN Slot.",
          "targetDescription": "Die Grün-Rot-Kante sitzt fest im mittleren rechten Slot.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Kante WEG drehen (U)",
              "handAction": "Obere Ebene um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Entfernt die Kante vom Zielort."
            },
            {
              "stepTitle": "Schritt 2: Ecke anheben (R)",
              "handAction": "Rechte Seite um 90° nach oben drehen.",
              "pieceEffect": "Hebt die passende weiße Ecke heraus."
            },
            {
              "stepTitle": "Schritt 3: Zum Paar verbinden (U')",
              "handAction": "Oben um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Kante und Ecke bilden nun ein verbundenes Paar."
            },
            {
              "stepTitle": "Schritt 4: Basis zurückdrehen (R')",
              "handAction": "Rechts um 90° nach unten drehen.",
              "pieceEffect": "Weißes Kreuz wieder intakt."
            },
            {
              "stepTitle": "Schritt 5: Vorbereiten (U')",
              "handAction": "Oben um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Platziert das Paar vor der Frontseite."
            },
            {
              "stepTitle": "Schritt 6: Front öffnen (F')",
              "handAction": "Vorderseite um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Öffnet den Empfangs-Slot."
            },
            {
              "stepTitle": "Schritt 7: Paar eindrehen (U)",
              "handAction": "Oben um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Schiebt das Paar in den Slot."
            },
            {
              "stepTitle": "Schritt 8: Front schließen (F)",
              "handAction": "Vorderseite um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Schließt die mittlere Ebene komplett."
            }
          ],
          "proTips": [
            "Eselsbrücke: Wegdrehen → Sexy Move → Vorne drehen → Paar hineinschieben."
          ]
        },
        "case-insert-left": {
          "caseName": "Möglichkeit 2: Kante muss nach LINKS",
          "badge": "Links-Einsetzen (Spiegel)",
          "initialDescription": "Die Grün-Orange-Kante passt zu Grün, oben ist Orange – sie muss in den LINKEN Slot.",
          "targetDescription": "Die Kante sitzt fest im mittleren linken Slot.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Kante WEG drehen (U')",
              "handAction": "Oben um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Schiebt die Kante nach rechts weg."
            },
            {
              "stepTitle": "Schritt 2: Linken Slot anheben (L')",
              "handAction": "Linke Seite um 90° nach oben drehen.",
              "pieceEffect": "Hebt die linke weiße Ecke heraus."
            },
            {
              "stepTitle": "Schritt 3: Zum Paar verbinden (U)",
              "handAction": "Oben um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Kante und Ecke schließen sich zusammen."
            },
            {
              "stepTitle": "Schritt 4: Basis sichern (L)",
              "handAction": "Links um 90° nach unten drehen.",
              "pieceEffect": "Weißes Fundament bleibt erhalten."
            },
            {
              "stepTitle": "Schritt 5: Vorbereiten (U)",
              "handAction": "Oben um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Richtet das Paar vor der Front aus."
            },
            {
              "stepTitle": "Schritt 6: Front öffnen (F)",
              "handAction": "Vorderseite um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Macht den Slot bereit."
            },
            {
              "stepTitle": "Schritt 7: Paar hinein (U')",
              "handAction": "Oben um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Paar gleitet hinein."
            },
            {
              "stepTitle": "Schritt 8: Front schließen (F')",
              "handAction": "Vorderseite gegen den Uhrzeigersinn schließen.",
              "pieceEffect": "Mittlere Schicht gelöst!"
            }
          ],
          "proTips": [
            "Das Einsetzen nach links ist das exakte Spiegelbild: Ersetze R durch L' und U durch U'."
          ]
        }
      }
    },
    "yellow-cross": {
      "title": "Stufe 4: Das gelbe Kreuz",
      "subtitle": "Kanten oben ausrichten mit F (R U R' U') F'",
      "overview": "Betrachte die gelbe Oberseite. Ignoriere Ecken. Es gibt 3 Muster: Punkt, 'L'-Form oder waagerechte Linie. Ein einziger Algorithmus führt durch alle Stufen: Punkt → L-Form → Linie → Gelbes Kreuz.",
      "keyTakeaway": "Das führende F kippt die Frontseite weg, wandelt das Problem in einen Sexy Move um, und F' stellt die ersten zwei Ebenen wieder her.",
      "cases": {
        "case-l-shape": {
          "caseName": "Möglichkeit 1: Die 'L'-Form (90°-Winkel)",
          "badge": "Häufig",
          "initialDescription": "Zwei Kanten zeigen nach oben und bilden ein L. Halte den Würfel so, dass die Schenkel auf 12 Uhr (hinten) und 9 Uhr (links) zeigen.",
          "targetDescription": "Alle 4 gelben Kanten zeigen nach oben – das gelbe Kreuz ist da.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Front im Uhrzeigersinn kippen (F)",
              "handAction": "Drehe die Vorderseite um 90° im Uhrzeigersinn.",
              "pieceEffect": "Schützt die unteren Paare vor Zerstörung."
            },
            {
              "stepTitle": "Schritt 2: Rechts hoch (R)",
              "handAction": "Rechte Ebene nach oben drehen.",
              "pieceEffect": "Startet den Sexy Move."
            },
            {
              "stepTitle": "Schritt 3: Oben drehen (U)",
              "handAction": "Oben um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Tauscht gelbe Kanten aus."
            },
            {
              "stepTitle": "Schritt 4: Rechts runter (R')",
              "handAction": "Rechte Ebene nach unten ziehen.",
              "pieceEffect": "Stellt die rechte Spalte wieder her."
            },
            {
              "stepTitle": "Schritt 5: Oben zurück (U')",
              "handAction": "Oben gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Beendet den Trigger."
            },
            {
              "stepTitle": "Schritt 6: Front zurückdrehen (F')",
              "handAction": "Vorderseite um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Erste zwei Ebenen wieder ganz, gelbes Kreuz oben fertig!"
            }
          ],
          "proTips": [
            "Merkwort: FUR - U'R'F' (\"Fur-Urf\").",
            "Achte penibel darauf, dass das L auf 12 und 9 Uhr zeigt."
          ]
        },
        "case-horizontal-line": {
          "caseName": "Möglichkeit 2: Die waagerechte Linie",
          "badge": "Direktes Kreuz",
          "initialDescription": "Zwei gegenüberliegende Kanten bilden eine gerade Linie. Halte sie unbedingt WAAGERECHT (von 9 bis 3 Uhr).",
          "targetDescription": "Die Linie wird sofort zum vollen gelben Kreuz.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Front im Uhrzeigersinn (F)",
              "handAction": "Frontseite um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Öffnet den Arbeitsbereich."
            },
            {
              "stepTitle": "Schritt 2: Rechts hoch (R)",
              "handAction": "Rechte Seite um 90° nach oben drehen.",
              "pieceEffect": "Start des Sexy Move Triggers."
            },
            {
              "stepTitle": "Schritt 3: Oben im Uhrzeigersinn (U)",
              "handAction": "Obere Ebene um 90° im Uhrzeigersinn schieben.",
              "pieceEffect": "Dreht die obere Ebene."
            },
            {
              "stepTitle": "Schritt 4: Rechts runter (R')",
              "handAction": "Rechte Seite um 90° nach unten ziehen.",
              "pieceEffect": "Stellt die rechte Säule wieder her."
            },
            {
              "stepTitle": "Schritt 5: Oben gegen den Uhrzeigersinn (U')",
              "handAction": "Obere Ebene um 90° gegen den Uhrzeigersinn schieben.",
              "pieceEffect": "Vollendet den Trigger."
            },
            {
              "stepTitle": "Schritt 6: Front gegen den Uhrzeigersinn (F')",
              "handAction": "Frontseite um 90° gegen den Uhrzeigersinn zurückdrehen.",
              "pieceEffect": "Stellt die ersten beiden Ebenen vollständig wieder her."
            }
          ],
          "proTips": [
            "Steht die Linie senkrecht, funktioniert es nicht! Immer waagerecht halten."
          ]
        },
        "case-center-dot": {
          "caseName": "Möglichkeit 3: Nur der Mittelpunkt",
          "badge": "Zweifache Anwendung",
          "initialDescription": "Keine Kante zeigt gelb nach oben – nur der gelbe Mittelpunkt ist sichtbar.",
          "targetDescription": "Wandelt sich erst in die L-Form, dann ins Kreuz.",
          "detailedSteps": [
            {
              "stepTitle": "Einmal von beliebiger Seite ausführen",
              "handAction": "Führe F R U R' U' F' aus.",
              "pieceEffect": "Erzeugt sofort die L-Form."
            }
          ],
          "proTips": [
            "Nach Erscheinen des L: Würfel drehen, bis es auf 12 und 9 Uhr steht, dann wiederholen."
          ]
        }
      }
    },
    "yellow-face-sune": {
      "title": "Stufe 5: Gelbe Fläche ausrichten (Sune)",
      "subtitle": "Alle gelben Ecken nach oben drehen mit dem berühmten Sune-Algorithmus",
      "overview": "Mit dem gelben Kreuz müssen nun die gelben Ecken gedreht werden. Der legendäre Sune-Algorithmus kippt 3 Ecken gleichzeitig und lässt das Kreuz und die unteren Ebenen intakt.",
      "keyTakeaway": "Wegen der Orientierungsparität (Drehsumme ≡ 0 mod 3) kann auf einem legalen Würfel niemals eine einzelne Ecke isoliert verdreht sein.",
      "cases": {
        "case-the-fish": {
          "caseName": "Möglichkeit 1: Der \"Fisch\" (1 gelbe Ecke)",
          "badge": "Direkter Sune",
          "initialDescription": "Genau EINE Ecke ist gelb (sieht aus wie ein Fisch). Halte den Fischkopf nach UNTEN-LINKS. Vorne-rechts zeigt gelb nach vorne.",
          "targetDescription": "Die gesamte Oberseite erstrahlt in reinem Gelb.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Rechtes Paar anheben (R)",
              "handAction": "Rechte Seite 90° nach oben drehen.",
              "pieceEffect": "Hebt das Paar heraus."
            },
            {
              "stepTitle": "Schritt 2: Oben 90° weiter (U)",
              "handAction": "Oben um 90° im Uhrzeigersinn weiterdrehen.",
              "pieceEffect": "Schiebt das Paar nach hinten."
            },
            {
              "stepTitle": "Schritt 3: Rechts senken (R')",
              "handAction": "Rechts nach unten ziehen.",
              "pieceEffect": "Slot parkt vorübergehend unten."
            },
            {
              "stepTitle": "Schritt 4: Oben nochmals 90° (U)",
              "handAction": "Oben nochmals 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Paar wandert weiter im Kreis."
            },
            {
              "stepTitle": "Schritt 5: Rechts wieder heben (R)",
              "handAction": "Rechts wieder nach oben drehen.",
              "pieceEffect": "Macht den Slot empfangsbereit."
            },
            {
              "stepTitle": "Schritt 6: Oben 180° nach Hause (U2)",
              "handAction": "Obere Ebene um 180° durchdrehen.",
              "pieceEffect": "Paar rastet wieder exakt im Slot ein."
            },
            {
              "stepTitle": "Schritt 7: Rechts absenken (R')",
              "handAction": "Rechts nach unten ziehen.",
              "pieceEffect": "Ganze gelbe Fläche wird schlagartig gelöst!"
            }
          ],
          "proTips": [
            "Fisch-Regel: Kopf zeigt immer nach unten-links (zu dir links)."
          ]
        },
        "case-no-corners-yellow": {
          "caseName": "Möglichkeit 2: Keine Ecke gelb (Scheinwerfer)",
          "badge": "Vorbereitung",
          "initialDescription": "Nur das gelbe Kreuz ist da, keine Ecke zeigt gelb nach oben.",
          "targetDescription": "Erzeugt das Fischmuster für den finalen Sune.",
          "detailedSteps": [
            {
              "stepTitle": "Sune einmal ausführen",
              "handAction": "R U R' U R U2 R' durchführen.",
              "pieceEffect": "Verdreht 3 Ecken und erzeugt den Fisch."
            }
          ],
          "proTips": [
            "Halte gelbe Ecken-Scheinwerfer nach links, bevor du startest."
          ]
        }
      }
    },
    "permute-corners": {
      "title": "Stufe 6: Gelbe Ecken positionieren",
      "subtitle": "Scheinwerfer finden und Ecken an ihren echten Platz tauschen",
      "overview": "Oben ist alles gelb, aber die Ecken stimmen seitlich noch nicht. Suche nach zwei Ecken auf derselben Seite mit gleicher Farbe (\"Scheinwerfer\"). Nimm sie nach HINTEN und führe die Permutation aus.",
      "keyTakeaway": "Permutationsparität verlangt, dass Ecken- und Kantentäusche dasselbe Vorzeichen haben (alternierende Gruppe A_n).",
      "cases": {
        "case-headlights": {
          "caseName": "Möglichkeit 1: Scheinwerfer vorhanden",
          "badge": "Eckentausch",
          "initialDescription": "Zwei Ecken auf einer Seite haben dieselbe Farbe (Scheinwerfer). Halte sie nach HINTEN.",
          "targetDescription": "Alle 4 Ecken stimmen an allen 4 Seiten mit ihren Zentren überein.",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: Oben im Uhrzeigersinn (U)",
              "handAction": "Obere Ebene um 90° im Uhrzeigersinn schieben.",
              "pieceEffect": "Setup-Zug."
            },
            {
              "stepTitle": "Schritt 2: Rechts hoch (R)",
              "handAction": "Rechte Seite um 90° nach oben drehen.",
              "pieceEffect": "Hebt die rechte Ecke an."
            },
            {
              "stepTitle": "Schritt 3: Oben gegen den Uhrzeigersinn (U')",
              "handAction": "Obere Ebene um 90° gegen den Uhrzeigersinn schieben.",
              "pieceEffect": "Macht Platz auf der oberen Ebene."
            },
            {
              "stepTitle": "Schritt 4: Links hoch (L')",
              "handAction": "Linke Seite um 90° nach oben drehen.",
              "pieceEffect": "Hebt die linke Ecke an."
            },
            {
              "stepTitle": "Schritt 5: Oben im Uhrzeigersinn (U)",
              "handAction": "Obere Ebene um 90° im Uhrzeigersinn schieben.",
              "pieceEffect": "Richtet die rechte Ecke aus."
            },
            {
              "stepTitle": "Schritt 6: Rechts runter (R')",
              "handAction": "Rechte Seite um 90° nach unten ziehen.",
              "pieceEffect": "Setzt die rechte Säule zurück."
            },
            {
              "stepTitle": "Schritt 7: Oben gegen den Uhrzeigersinn (U')",
              "handAction": "Obere Ebene um 90° gegen den Uhrzeigersinn schieben.",
              "pieceEffect": "Richtet die linke Ecke aus."
            },
            {
              "stepTitle": "Schritt 8: Links runter (L)",
              "handAction": "Linke Seite um 90° nach unten ziehen.",
              "pieceEffect": "Setzt die linke Säule zurück und löst alle 4 Ecken!"
            }
          ],
          "proTips": [
            "Gibt es nirgends Scheinwerfer, führe den Zug einmal aus – danach tauchen garantiert welche auf!"
          ]
        }
      }
    },
    "permute-edges": {
      "title": "Stufe 7: Letzte Kanten sortieren (Gelöst!)",
      "subtitle": "Der 3-Kanten-Zyklus: Würfel final vollenden mit der U-Permutation",
      "overview": "Alle Ecken sind gelöst! Genau eine Kante ist schon fertig (nach HINTEN halten). Die restlichen 3 Kanten müssen im oder gegen den Uhrzeigersinn rotieren, um den Würfel komplett zu lösen!",
      "keyTakeaway": "Ein 3er-Zyklus von Kanten ist eine gerade Permutation, die alle Paritätsgesetze erfüllt. Danach ist der Würfel im Identitätszustand e!",
      "cases": {
        "case-clockwise-u-perm": {
          "caseName": "Möglichkeit 1: 3 Kanten im Uhrzeigersinn",
          "badge": "Ua-Permutation",
          "initialDescription": "Eine Kante ist gelöst (liegt hinten). Die anderen 3 Kanten rotieren im Uhrzeigersinn zur Lösung.",
          "targetDescription": "🎉 DER ZAUBERWÜRFEL IST ZU 100% GELÖST!",
          "detailedSteps": [
            {
              "stepTitle": "Schritt 1: R",
              "handAction": "Rechte Seite um 90° nach oben drehen.",
              "pieceEffect": "Hebt das rechte Paar an."
            },
            {
              "stepTitle": "Schritt 2: U'",
              "handAction": "Obere Ebene um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Dreht das Paar weg."
            },
            {
              "stepTitle": "Schritt 3: R",
              "handAction": "Rechte Seite um 90° nach oben drehen.",
              "pieceEffect": "Setzt den 3er-Zyklus fort."
            },
            {
              "stepTitle": "Schritt 4: U",
              "handAction": "Obere Ebene um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Führt den Zyklus weiter."
            },
            {
              "stepTitle": "Schritt 5: R",
              "handAction": "Rechte Seite um 90° nach oben drehen.",
              "pieceEffect": "Führt den Zyklus weiter."
            },
            {
              "stepTitle": "Schritt 6: U",
              "handAction": "Obere Ebene um 90° im Uhrzeigersinn drehen.",
              "pieceEffect": "Führt den Zyklus weiter."
            },
            {
              "stepTitle": "Schritt 7: R",
              "handAction": "Rechte Seite um 90° nach oben drehen.",
              "pieceEffect": "Führt den Zyklus weiter."
            },
            {
              "stepTitle": "Schritt 8: U'",
              "handAction": "Obere Ebene um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Beginnt die Ausrichtung."
            },
            {
              "stepTitle": "Schritt 9: R'",
              "handAction": "Rechte Seite um 90° nach unten ziehen.",
              "pieceEffect": "Sichert die linke Seite."
            },
            {
              "stepTitle": "Schritt 10: U'",
              "handAction": "Obere Ebene um 90° gegen den Uhrzeigersinn drehen.",
              "pieceEffect": "Richtet alle Kanten aus."
            },
            {
              "stepTitle": "Schritt 11: R2 (Geschafft!)",
              "handAction": "Rechte Seite um 180° vollständig herumdrehen.",
              "pieceEffect": "Vollendet den Würfel – 100% gelöst!"
            }
          ],
          "proTips": [
            "Ist noch keine Kante gelöst, führe die U-Permutation einmal aus – dann ist eine fertig."
          ]
        }
      }
    }
  },
  "graph": {
    "badge": "Diskrete Mathematik & Algorithmische Geometrie",
    "title": "Graphentheorie des Zauberwürfels",
    "subtitle": "Erkunde Cayley-Graphen, Zustandsräume, Graphendurchmesser, Breitensuche-Wellenfronten und Nebenklassenreduktion.",
    "tabs": {
      "explorer": "Untergraphen-Explorer",
      "cayley": "Cayley-Graphen",
      "diameter": "Gottes Zahl",
      "search": "Suchalgorithmen",
      "commutators": "Kommutatoren"
    },
    "explorer": {
      "selectSubgroup": "Untergruppe wählen:",
      "runBfs": "Live-Breitensuche (BFS) starten",
      "resetBfs": "BFS zurücksetzen",
      "shortestPath": "Kürzester Pfad",
      "identity": "Identität (0 Züge)",
      "exploredStates": "Zustände in Warteschlange",
      "realtimeSync": "Echtzeit-3D-Synchronisation",
      "depth": "Tiefe",
      "nodeId": "Knoten-ID:",
      "movesSeq": "Permutationsfolge:",
      "diameter": "Untergruppen-Durchmesser:",
      "syncHint": "Klicke auf einen beliebigen Knoten im Graphen, um seine 3D-Geometrie zu sehen!",
      "legendSolved": "Gelöst",
      "legendVisited": "BFS Besucht",
      "legendPath": "Kürzester Pfad",
      "legendSelected": "Ausgewählt",
      "subgroups": {
        "checkerboard": {
          "name": "Schachbrett ⟨M2, E2, S2⟩ (Hyperwürfel Q₃)",
          "desc": "Die elementar-abelsche 3-Erzeuger-Gruppe (Z₂³). Bildet einen 3D-Würfelgraphen aus 8 Zuständen. Abstand 3 ist das berühmte 6-Seiten-Schachbrettmuster!"
        },
        "r2u2": {
          "name": "Sechseckiger Zyklus ⟨R2, U2⟩ (Ordnung 6)",
          "desc": "Ein zyklischer Untergraph der Ordnung 6 durch 180°-Drehungen von R und U. Kehrt nach genau 6 Zügen zur Identität zurück."
        },
        "commutator": {
          "name": "Kommutator-Orbit ⟨[R, U]⟩ (Sexy Move)",
          "desc": "Der berühmte Kommutator [R, U] = R U R' U' hat die exakte Ordnung 6. Nach 6 Wiederholungen ist der Würfel wieder gelöst!"
        }
      }
    },
    "cayleySection": {
      "title": "Der Cayley-Graph der Zauberwürfel-Gruppe",
      "intro": "In der diskreten Mathematik wird der Würfel als gerichteter, gefärbter Cayley-Graph Γ(G, S) modelliert:",
      "regularTitle": "Regulärer Graph",
      "regularDesc": "Jeder Knoten hat denselben Grad. In der Quarter-Turn Metric (QTM) ist der Grad 12, in der Half-Turn Metric (HTM) genau 18.",
      "vertexTransitiveTitle": "Knotentransitiv",
      "vertexTransitiveDesc": "Für zwei beliebige Zustände u, v existiert ein Automorphismus u → v. Kein Zustand ist topologisch bevorzugt; jeder Knoten hat ein identisches Umfeld!",
      "bipartiteTitle": "Bipartit in QTM",
      "bipartiteDesc": "Jede Vierteldrehung ist eine ungerade Permutation. Daher alternieren gerade und ungerade Zuglängen strikt zwischen zwei Knotenmengen.",
      "groupOrderTitle": "Gruppenordnung & die \"12 getrennten Orbits\"",
      "groupOrderIntro": "Die Gesamtzahl erreichbarer Zustände beträgt:",
      "twelveOrbitsIntro": "Warum teilt man durch 2 · 3 · 2 = 12? Beim wahlfreien Zusammensetzen zerfällt der Raum in 12 isolierte Zusammenhangskomponenten:",
      "cornerParity": "1. Ecken-Orientierungsparität (÷3):",
      "cornerParityDesc": "Die Summe aller 8 Eckendrehungen ist invariant: ∑ Drehung ≡ 0 (mod 3). Eine einzelne Ecke kann nicht allein verdreht werden.",
      "edgeParity": "2. Kanten-Orientierungsparität (÷2):",
      "edgeParityDesc": "Die Summe aller 12 Kantenflips ist invariant: ∑ Flip ≡ 0 (mod 2). Eine einzelne Kante kann nicht allein gekippt werden.",
      "permParity": "3. Permutationsparität (÷2):",
      "permParityDesc": "Gesamtvorzeichen: sgn(Ecken) = sgn(Kanten). Man kann niemals nur zwei Steine tauschen, ohne andere zu bewegen."
    },
    "diameterSection": {
      "badge": "Graphentheoretische Metrik",
      "title": "Gottes Zahl: Der Durchmesser des Zauberwürfel-Graphen",
      "intro": "Der Durchmesser eines Graphen ist der maximale Abstand zwischen zwei beliebigen Knoten:",
      "htmTitle": "Half-Turn Metric (HTM)",
      "htmDesc": "Im Juli 2010 bewiesen: Jeder beliebige Zustand lässt sich in maximal 20 Zügen lösen!",
      "qtmTitle": "Quarter-Turn Metric (QTM)",
      "qtmDesc": "Im August 2014 bewiesen: In der Vierteldrehungs-Metrik beträgt Gottes Zahl genau 26.",
      "superflipTitle": "Der \"Superflip\": Der Gegenpol-Knoten",
      "superflipDesc": "1995 bewies Michael Reid, dass der Superflip (alle Ecken gelöst, alle 12 Kanten gekippt) mindestens 20 Züge in HTM benötigt.",
      "distTitle": "Zustandsverteilung nach Abstand (HTM)",
      "distNote": "Hinweis: Über 65% aller 43 Trillionen Zustände liegen in Tiefe 18!"
    },
    "searchSection": {
      "title": "Graphensuche: BFS-Explosion & Kociembas 2-Phasen-Reduktion",
      "bfsFailTitle": "Warum naive Breitensuche (BFS) scheitert",
      "bfsFailDesc": "Mit einem Verzweigungsgrad von b ≈ 13.35 wächst der Suchbaum in Tiefe 20 auf 1.8 × 10²² Zustände an – unmöglich im Speicher zu halten.",
      "paradigmsIntro": "Informatiker lösten dies durch zwei mathematische Methoden:",
      "bibfsTitle": "1. Bidirektionale Breitensuche",
      "bibfsDesc": "Durch gleichzeitige Suche von Start und Ziel halbiert sich die Tiefe von d auf d/2. Komplexität sinkt von O(bᵈ) auf O(bᵈ/²).",
      "pdbTitle": "2. Musterdatenbanken (PDBs)",
      "pdbDesc": "Projektion auf Faktorgraphen liefert zulässige Heuristiken h(n) ≤ h*(n) für A* und IDA*, ohne die Distanz je zu überschätzen.",
      "kociembaTitle": "Kociembas 2-Phasen-Algorithmus",
      "kociembaIntro": "Herbert Kociemba zerlegt die Gruppe in eine Kette von Untergruppen:",
      "phase1Title": "Phase 1 (Nebenklassengraph G / H):",
      "phase1Desc": "Führt den Würfel in die Untergruppe H (Kanten- und Eckenorientierung gelöst). Nur 2.2 × 10⁹ Zustände – in Millisekunden durchsucht!",
      "phase2Title": "Phase 2 (Untergruppen-Graph H):",
      "phase2Desc": "Nur noch Drehungen mit U, D, L², R², F², B² nötig, um schnell die Identität zu erreichen."
    },
    "commutatorSection": {
      "title": "Kommutatoren & Konjugation: Minimale Zyklen im Graphen",
      "intro": "Warum lassen Algorithmen 90% des Würfels intakt? Das Geheimnis liegt in Kommutatoren und Konjugierten.",
      "commutatorTitle": "Der Kommutator: [A, B] = A B A⁻¹ B⁻¹",
      "commutatorDesc1": "Kommutieren A und B, heben sich alle Züge auf (e). Überschneiden sich ihre Wirkungsbereiche nur an 1–2 Steinen, heben sich alle anderen Steine auf!",
      "commutatorDesc2": "Das Ergebnis ist ein isolierter 3er-Zyklus. Das Paradebeispiel ist [R, U] = R U R' U'.",
      "conjugateTitle": "Die Konjugation: A B A⁻¹",
      "conjugateIntro": "Ein Pfad-Routing im Graphen:",
      "setupMove": "A (Setup-Zug): Bringt Zielsteine in die Arbeitszone.",
      "operatorMove": "B (Operator): Führt einen Kommutator/Zyklus aus.",
      "teardownMove": "A⁻¹ (Rückzug): Macht den Setup-Zug exakt rückgängig.",
      "conjugateSummary": "Man läuft eine Kante entlang, führt einen lokalen Kreis aus und kehrt denselben Pfad zurück!",
      "infoBox": "Alle fortgeschrittenen Methoden basieren auf Kommutatoren und Konjugationen."
    }
  },
  "sandbox": {
    "wcaScramble": "Offizieller WCA 3x3 Scramble",
    "copyScramble": "Scramble kopieren",
    "newScramble": "Neuen Scramble generieren",
    "scrambleCube": "Würfel mischen",
    "resetSolved": "Als gelöst zurücksetzen",
    "title": "3D-Interaktives Spielfeld",
    "undo": "Rückgängig",
    "turnControls": "Drehknöpfe & Schnittebenen",
    "testerTitle": "Algorithmen-Tester & Invertierer",
    "testerPlaceholder": "Algorithmus eingeben z.B. R U R' U'",
    "execute": "Ausführen",
    "invert": "Invertieren",
    "history": "Zug-Verlauf",
    "timerTitle": "Speedcube-Timer",
    "releaseToStart": "Loslassen zum Starten!",
    "holdSteady": "Gedrückt halten...",
    "solvingTapToStop": "Stoppuhr läuft... tippen zum Stoppen",
    "holdSpaceToStart": "Leertaste gedrückt halten oder hier tippen",
    "bestTime": "Bestzeit",
    "ao5": "Ao5",
    "recentSolves": "Letzte Zeiten",
    "invertTooltip": "Inversen Algorithmus berechnen",
    "clearHistory": "Verlauf löschen",
    "turns": "Züge",
      "referenceTitle": "Referenzlösung & Solver",
      "showReference": "Referenzlösung anzeigen",
      "hideReference": "Referenzlösung ausblenden (Spoilerschutz)",
      "alreadySolved": "Der Würfel ist bereits gelöst! Mische ihn oder drehe eine Ebene, um eine Lösung zu berechnen.",
      "solutionBadge": "Optimale Lösungsfolge",
      "copySolution": "Zugfolge kopieren",
      "copied": "Kopiert!",
      "stepNext": "Nächster Zug",
      "stepPrev": "Vorheriger Zug",
      "autoSolve": "Automatisch lösen",
      "pause": "Pause",
      "solveInstant": "Sofort lösen",
    "solverMode": "Lösungsmethode",
    "cfopMode": "CFOP-Tutorial-Schritte",
    "optimalMode": "Direkte Umkehrung (Abkürzung)",
    "cfopMethodDesc": "Löst den Würfel schrittweise nach den 7 Tutorial-Stufen (Weißes Kreuz → Erste Ebene → Zweite Ebene → Gelbes Kreuz → Gelbe Ecken orientieren → Gelbe Ecken permutieren → Gelbe Kanten permutieren).",
    "optimalMethodDesc": "Kehrt den Scramble direkt um für die minimale Anzahl an Zügen.",
    "stageCompleted": "Stufe abgeschlossen",
    "currentStage": "Aktuelle Stufe",
    "stageHeader": "Stufe {stage}: {name}",
    "stageMovesCount": "{count} Züge",
    "stageNames": {
          "whiteCross": "Weißes Kreuz",
          "firstLayer": "Erste Ebene (Ecken)",
          "secondLayer": "Zweite Ebene (Kanten)",
          "yellowCross": "Gelbes Kreuz",
          "orientYellowCorners": "Gelbe Ecken orientieren",
          "permuteYellowCorners": "Gelbe Ecken permutieren",
          "permuteYellowEdges": "Gelbe Kanten permutieren (Gelöst)"
    },

      "phaseDiagnostic": "CFOP / Anfänger-Phasendiagnose",
      "phaseCurrent": "Aktuelle Phase",
      "phaseNextAlgo": "Empfohlener Algorithmus",
      "piecesRestored": "Gelöste Steine",
      "solutionProgress": "Lösungsfortschritt",
      "directInverseNote": "Hinweis: Die Referenzlösung nutzt eine direkte inverse Folge (≤20 Züge), die alle Ebenen gleichzeitig löst. Das weiße Kreuz und die Ebenen rasten in den letzten Zügen gemeinsam ein.",
      "edgesAligned": "Kanten ausgerichtet",
      "cornersDocked": "Ecken eingesetzt",
      "edgesPlaced": "Kanten platziert",
      "edgesOriented": "Kanten orientiert",
      "cornersOriented": "Ecken orientiert",
      "importPhysicalCube": "Echten Zauberwürfel erfassen",
      "importSuccess": "Echter Würfelzustand erfasst! CFOP-Schritt-für-Schritt-Anleitung berechnet.",
      "phaseNames": {
        "whiteCross": "Weißes Kreuz (Stufe 1)",
        "firstLayer": "Weiße Ecken / Erste Ebene (Stufe 2)",
        "secondLayer": "Zweite Ebene / Mittlere Kanten (Stufe 3)",
        "yellowCross": "Gelbes Kreuz / OLL-Kanten (Stufe 4)",
        "orientYellowCorners": "Gelbe Ecken orientieren / Sune (Stufe 5)",
        "permuteYellowCorners": "Gelbe Ecken permutieren / PLL-Ecken (Stufe 6)",
        "permuteYellowEdges": "Gelbe Kanten permutieren / PLL-Kanten (Stufe 7)",
        "solved": "Gelöster Zustand (Vollständig)"
      },
      "phaseTips": {
        "whiteCross": "Richte die 4 weißen Kanten an den passenden seitlichen Mittelstücken aus.",
        "firstLayer": "Setze den Sexy Move (R U R' U') ein, um weiße Ecken unten einzusetzen.",
        "secondLayer": "Verwende den Links-/Rechts-Einsetzalgorithmus für die mittleren Kanten.",
        "yellowCross": "Führe F (R U R' U') F' aus, um das gelbe Kreuz zu bilden.",
        "orientYellowCorners": "Nutze den Sune-Algorithmus (R U R' U R U2 R'), um gelbe Sticker nach unten zu drehen.",
        "permuteYellowCorners": "Suche nach Scheinwerfern und tausche die 4 Ecken an ihre korrekten Positionen.",
        "permuteYellowEdges": "Wende den U-Perm an, um die letzten 3 Kanten zu tauschen und den Würfel zu vollenden.",
        "solved": "Perfekt gelöst! Der Zauberwürfel befindet sich im ursprünglichen Zustand."
      },
},
  "quiz": {
    "badge": "Interaktive Wissens-Challenge",
    "title": "Zauberwürfel & Graphentheorie Quiz",
    "subtitle": "Teste dein Wissen zu Lösungsmethoden, Cayley-Graphen, Zustandsräumen und Kommutatoren!",
    "questionOf": "Frage {current} von {total}",
    "correct": "Richtig!",
    "explanationLabel": "Erklärung:",
    "answeredOf": "{count} von {total} beantwortet",
    "submit": "Quiz auswerten",
    "score": "Ergebnis: {score} von {total}",
    "retake": "Quiz wiederholen",
    "feedbackMaster": "🎉 Meisterhaft! Du beherrschst sowohl den Würfel als auch seine Graphentheorie.",
    "feedbackGood": "👍 Sehr gut! Lies dir die Erklärungen durch, um noch sicherer zu werden.",
    "feedbackPractice": "Erkunde die Tutorials und mathematischen Deep-Dives weiter!",
    "questions": {
      "1": {
        "question": "Wie viele Sticker hat eine Kante, und kann sie je auf einen Eckenplatz wandern?",
        "options": [
          "2 Sticker; sie kann bei Schnittdrehungen zur Ecke werden",
          "2 Sticker; eine Kante kann niemals einen Eckenplatz einnehmen",
          "3 Sticker; sie wechselt die Rolle mit Ecken",
          "1 Sticker; Kanten spiegeln nur Seitenflächen"
        ],
        "explanation": "Kanten haben strikt 2 Sticker und verbinden zwei Nachbarflächen. Ihre Bahnen sind mathematisch disjunkt von den 3-farbigen Ecken!"
      },
      "2": {
        "question": "Welche Gruppenordnung hat der fundamentale \"Sexy Move\" Kommutator [R, U] = R U R' U'?",
        "options": [
          "4",
          "6",
          "12",
          "24"
        ],
        "explanation": "Genau 6 Wiederholungen von (R U R' U') bringen alle Steine in den Ausgangszustand zurück! Die Ordnung ist 6."
      },
      "3": {
        "question": "Welchen regulären Grad besitzt jeder Knoten im Cayley-Graphen des Würfels in der Half-Turn Metric (HTM)?",
        "options": [
          "6",
          "12",
          "18",
          "26"
        ],
        "explanation": "6 Seiten × 3 mögliche Drehungen (90°, -90°, 180°) = 18 ausgehende Kanten pro Knoten!"
      },
      "4": {
        "question": "Wie lautet \"Gottes Zahl\" in der Half-Turn Metric (der Durchmesser des Cayley-Graphen)?",
        "options": [
          "18 Züge",
          "20 Züge",
          "24 Züge",
          "26 Züge"
        ],
        "explanation": "Im Juli 2010 wurde mit 35 CPU-Jahren Google-Rechnerleistung bewiesen, dass jede Stellung in maximal 20 Zügen lösbar ist."
      },
      "5": {
        "question": "Warum zerfällt der physikalische Konfigurationsraum in 12 getrennte Komponenten?",
        "options": [
          "Weil der Würfel 12 Kanten hat",
          "Weil der Würfel beim Zerlegen 12 Farben hat",
          "Wegen 3 Erhaltungssätzen: Eckendrehsumme (mod 3), Kantenflipsumme (mod 2) und Permutationsparität (mod 2)",
          "Weil 6 Flächen mal 2 Drehungen 12 ergibt"
        ],
        "explanation": "3 × 2 × 2 = 12. Ohne Zerlegen kann man keine einzelne Ecke verdrehen, keine Kante kippen und keine zwei Steine isoliert tauschen."
      },
      "6": {
        "question": "Was macht Michael Reids \"Superflip\"-Zustand in der Mathematik berühmt?",
        "options": [
          "Er war der erste Zustand, für den die maximalen 20 Züge in HTM bewiesen wurden",
          "Er ist der einzige Zustand, der unlösbar ist",
          "Er hat alle Ecken vertauscht",
          "Er liegt nur 1 Zug von der Lösung entfernt"
        ],
        "explanation": "Der Superflip sitzt am äußersten Gegenpol des Graphen und bewies als erster Zustand, dass 20 Züge tatsächlich nötig sind."
      },
      "7": {
        "question": "Wie garantieren Musterdatenbanken (PDBs) eine \"zulässige Heuristik\" in A* und IDA*?",
        "options": [
          "Sie raten den kürzesten Pfad",
          "Sie messen exakte Abstände in einem projizierten Faktorgraphen, was den echten Abstand nie überschätzt",
          "Sie speichern alle 43 Trillionen Zustände",
          "Sie garantieren Lösungen in unter 10 Sekunden"
        ],
        "explanation": "Eine zulässige Heuristik darf den wahren Abstand nie überschätzen. In einem Faktorgraphen mit weniger Bedingungen sind Pfade höchstens kürzer oder gleich lang."
      },
      "8": {
        "question": "Wie funktioniert eine Konjugation A B A⁻¹ in der Gruppentheorie?",
        "options": [
          "Sie mischt zufällig",
          "A dient als Setup-Zug, B führt die Operation aus, A⁻¹ macht das Setup rückgängig",
          "Sie dreht zwei gegenüberliegende Seiten zeitgleich",
          "Sie ist nach WCA-Regeln verboten"
        ],
        "explanation": "Konjugierte leiten Steine um: A bringt sie in Position, B operiert, A⁻¹ stellt die Ordnung wieder her."
      }
    },
    "categories": {
      "solving": "Lösungsmethoden",
      "graphTheory": "Graphentheorie",
      "groupTheory": "Gruppentheorie"
    }
  },
  "cubeInput": {
    "modalTitle": "Echten Zauberwürfel-Zustand erfassen",
    "modalSubtitle": "Erfasse deinen echten Würfel per Kamera-Scan oder manuellem Ausmalen des Netzes für die 3D-Sandbox",
    "tabCamera": "Kamera-Scan",
    "tabManual": "Manuelles Netz",
    "cameraGuideTitle": "Kamera-Ausrichtung",
    "cameraFacingHint": "Scanne die 6 Seiten nacheinander und halte die Orientierung konstant",
    "cameraInstructions": "Positioniere die Würfelseite im 3×3-Sucher und tippe auf Aufnahme.",
    "scanPromptPrefix": "Aktuelle Seite",
    "alignNotice": "Nutze gleichmäßiges Licht ohne starke Schatten oder Reflexionen",
    "captureFace": "Seite erfassen",
    "retakeFace": "Wiederholen",
    "faceCapturedLocked": "Seite erfasst und gesperrt",
    "reidentifyFace": "Diese Seite neu scannen",
    "clickToFineTune": "Auf Sticker klicken, um Farbe anzupassen",
    "capturedFaceHint": "Farben dieser Seite sind gesperrt. Klicken Sie auf 'Diese Seite neu scannen', um erneut mit der Kamera zu scannen.",
    "scanningProgress": "Scan-Fortschritt",
    "waitingAllFaces": "Bitte zuerst alle 6 Seiten scannen (Abgeschlossen {0}/6)",
    "nextFace": "Nächste Seite",
    "allFacesScanned": "Alle 6 Seiten erfolgreich gescannt!",
    "startCamera": "Kamera starten",
    "stopCamera": "Kamera stoppen",
    "cameraPermissionDenied": "Kamerazugriff verweigert. Bitte erlaube den Kamerazugriff im Browser.",
    "cameraNotAvailable": "Keine Kamera gefunden. Bitte nutze die manuelle Netzeingabe.",
    "flipCamera": "Kamera wechseln",
    "jumpToManual": "Im Netz überprüfen & anpassen",
    "facesToScan": {
        "U": "Oben U (Weißes Zentrum)",
        "L": "Links L (Oranges Zentrum)",
        "F": "Vorne F (Grünes Zentrum)",
        "R": "Rechts R (Rotes Zentrum)",
        "B": "Hinten B (Blaues Zentrum)",
        "D": "Unten D (Gelbes Zentrum)"
    },
    "faceOrientations": {
        "U": "Weiß zur Kamera, Grün nach vorne/unten",
        "L": "Orange zur Kamera, Weiß nach oben",
        "F": "Grün zur Kamera, Weiß nach oben",
        "R": "Rot zur Kamera, Weiß nach oben",
        "B": "Blau zur Kamera, Weiß nach oben",
        "D": "Gelb zur Kamera, Grün nach vorne/oben"
    },
    "manualInstructions": "Wähle eine Farbe aus und klicke auf die Felder im Netz (Zentren sind fixiert)",
    "colorPalette": "Farbpalette",
    "selectedColor": "Aktiver Pinsel",
    "remaining": "übrig",
    "resetSolved": "Gelösten Zustand füllen",
    "clearAll": "Außer Zentren leeren",
    "sampleScramble": "Beispielmischung laden",
    "netLayoutHint": "Kreuznetz: Oben(U) / Links(L) / Vorne(F) / Rechts(R) / Hinten(B) / Unten(D)",
    "statusValid": "Würfelzustand ist physisch gültig und lösbar!",
    "statusInvalid": "Konfiguration noch unvollständig",
    "incompleteStickers": "Bitte fülle alle 54 Farbfelder aus.",
    "invalidColorCount": "Falsche Farbanzahl (jede Farbe muss genau 9-mal vorkommen).",
    "invalidCenters": "Zentrumsfarben sind falsch ausgerichtet.",
    "impossibleEdge": "Physisch unmögliches Kantenstück erkannt.",
    "duplicateEdge": "Doppeltes Kantenstück erkannt.",
    "impossibleCorner": "Physisch unmögliches Eckstück erkannt.",
    "duplicateCorner": "Doppeltes Eckstück erkannt.",
    "applyToSandbox": "In 3D-Sandbox übernehmen & lösen",
    "cancel": "Abbrechen",
    "colorNames": {
        "white": "Weiß",
        "yellow": "Gelb",
        "green": "Grün",
        "blue": "Blau",
        "red": "Rot",
        "orange": "Orange"
    }
},
  "footer": {
    "brandTitle": "RubikGraph 3D",
    "brandDesc": "Interaktive 3D-Module & Graphentheorie-Explorer",
    "cayleyLabel": "Cayley-Graphen Γ(G, S)",
    "godNumberLabel": "Gottes Zahl = 20 HTM",
    "groupOrderLabel": "|G| ≈ 4.3 × 10¹⁹"
  }
};
