import type { TranslationSchema } from '../types';

export const it: TranslationSchema = {
  "nav": {
    "brandSubtitle": "Tutorial 3D & Teoria dei Grafi",
    "tutorial": "Tutorial 3D",
    "graph": "Teoria dei Grafi",
    "sandbox": "Sandbox 3D",
    "quiz": "Quiz di Padronanza",
    "shortcuts": "Scorciatoie",
    "shortcutsTitle": "Scorciatoie da Tastiera",
    "primeDoubleHint": "Tieni premuto Shift + Lettera per ruotare in senso antiorario (es. R').",
    "timerHint": "Tieni premuta la barra spaziatrice nella Sandbox per avviare il timer!"
  },
  "cube3d": {
    "dragHint": "Trascina per ruotare la vista 3D",
    "turn": "Rotazione",
    "clockwise": "90° Senso Orario",
    "counterClockwise": "90° Senso Antiorario",
    "halfTurn": "Mezzo Giro 180°",
    "faces": {
      "U": "Sopra / Up (Bianco)",
      "D": "Sotto / Down (Giallo)",
      "R": "Destra / Right (Rosso)",
      "L": "Sinistra / Left (Arancione)",
      "F": "Fronte / Front (Verde)",
      "B": "Retro / Back (Blu)",
      "M": "Strato Centrale (M)",
      "E": "Strato Equatoriale (E)",
      "S": "Strato Standing (S)"
    }
  },
  "tutorial": {
    "stageProgress": "Fase",
    "focusModeOn": "Modalità Focus ATTIVA",
    "focusModeOff": "Modalità Focus DISATTIVA",
    "focusTooltip": "La modalità focus oscura i pezzi non interessati per evitare distrazioni visive",
    "keyIntuition": "Intuizione Chiave",
    "caseSelectorTitle": "Seleziona Caso / Possibilità di Partenza",
    "caseSelectorPrompt": "Quale schema presenta il tuo cubo?",
    "howToIdentify": "Come identificare questo caso:",
    "operationGuideTitle": "Guida Pratica Passo-Passo",
    "moveProgress": "Mossa",
    "howToPerform": "Come eseguire questa mossa:",
    "pieceEffectLabel": "Effetto meccanico sui pezzi:",
    "algorithmComplete": "Algoritmo Completato!",
    "algorithmCompleteDesc": "Stato obiettivo raggiunto per questo caso. Verifica sul tuo cubo reale!",
    "restartCase": "Ricomincia caso",
    "resetCase": "Ripristina",
    "animateTurn": "Anima questa mossa",
    "rotating": "In rotazione...",
    "autoPlay": "Riproduzione automatica",
    "pause": "Pausa",
    "initialState": "Stato Iniziale",
    "guided3D": "3D Guidato",
    "targetGoal": "Obiettivo Finale",
    "showingInitial": "Visualizzazione dello schema di partenza",
    "showingTarget": "Visualizzazione dell'obiettivo finale",
    "aimingFor": "Cosa devi ottenere",
    "dragToInspect": "Trascina per ispezionare",
    "targetGoalLabel": "Obiettivo:",
    "reset3DView": "Ripristina vista 3D",
    "animationSpeedHint": "Rotazioni animate fluidamente a 0.55s",
    "prevStage": "Fase Precedente",
    "nextStage": "Fase Successiva",
    "speedcuberTips": "Consigli da speedcuber per"
  },
  "stages": {
    "anatomy-notation": {
      "title": "Fase 0: Anatomia & Notazione",
      "subtitle": "Comprendere tipi di pezzi, gradi di libertà e rotazioni",
      "overview": "Il Cubo di Rubik è composto da 3 tipi di pezzi: 6 Centri (fissi), 12 Spigoli (2 colori) e 8 Angoli (3 colori). Prima di risolverlo, impara come ciascuna faccia ruota in senso orario e antiorario.",
      "keyTakeaway": "Un angolo non potrà MAI diventare uno spigolo e viceversa. Non si risolvono adesivi isolati, ma si spostano interi pezzi 3D nelle loro posizioni corrette.",
      "cases": {
        "basic-turns": {
          "caseName": "Rotazioni di Base (R, U, F)",
          "badge": "Fondamentale",
          "initialDescription": "Partendo da un cubo risolto. Osserva come ogni mossa muova solo i 9 pezzi della rispettiva faccia lasciando intatti tutti gli altri 17.",
          "targetDescription": "Dopo aver eseguito R U R' U', vedrai l'angolo e lo spigolo frontale-destro spostati.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Ruota la faccia Destra in senso orario (R)",
              "handAction": "Afferra lo strato destro con pollice davanti e dita dietro. Ruotalo di 90° in avanti (senso orario).",
              "pieceEffect": "Solleva l'angolo inferiore frontale-destro nello strato superiore."
            },
            {
              "stepTitle": "Passo 2: Ruota la faccia Superiore in senso orario (U)",
              "handAction": "Spingi con l'indice destro l'angolo posteriore-destro verso sinistra (90° orario).",
              "pieceEffect": "Ruota lo strato superiore allontanando l'angolo dallo strato destro."
            },
            {
              "stepTitle": "Passo 3: Ruota la faccia Destra in senso antiorario (R')",
              "handAction": "Tira lo strato destro verso di te di 90° (senso antiorario).",
              "pieceEffect": "Riporta la colonna destra verso il basso nella base."
            },
            {
              "stepTitle": "Passo 4: Ruota la faccia Superiore in senso antiorario (U')",
              "handAction": "Spingi con l'indice sinistro lo strato superiore di 90° verso destra.",
              "pieceEffect": "Ripristina l'allineamento dello strato superiore."
            }
          ],
          "proTips": [
            "Il senso orario è sempre definito guardando frontalmente la faccia in questione.",
            "L'apostrofo (') indica una rotazione in senso antiorario.",
            "Il numero 2 (es. U2) indica un mezzo giro di 180°."
          ]
        }
      }
    },
    "white-cross": {
      "title": "Fase 1: La Croce Bianca",
      "subtitle": "Creare le fondamenta: allineare gli spigoli bianchi con i centri laterali",
      "overview": "L'obiettivo è posizionare i 4 spigoli bianchi sulla faccia bianca. Fondamentale: il secondo colore di ciascuno spigolo DEVE coincidere con il centro adiacente (Verde con Verde, Rosso con Rosso, ecc.).",
      "keyTakeaway": "Una croce bianca con centri laterali non corrispondenti non è risolta! Ogni spigolo collega due facce contemporaneamente.",
      "cases": {
        "case-daisy-plunge": {
          "caseName": "Possibilità 1: Margherita allineata & Mezzo Giro (180°)",
          "badge": "Caso Tipico",
          "initialDescription": "Lo spigolo bianco-verde è attorno al centro giallo (la Margherita). Il suo colore verde è già allineato con il centro verde.",
          "targetDescription": "Lo spigolo è inserito nella faccia bianca, unendo perfettamente Bianco e Verde.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Ruota la faccia frontale di 180° (F2)",
              "handAction": "Ruota la faccia anteriore di 180° (due quarti di giro).",
              "pieceEffect": "Porta lo spigolo bianco-verde direttamente dallo strato superiore alla base bianca."
            }
          ],
          "proTips": [
            "Metodo Margherita: raggruppa prima i 4 spigoli bianchi attorno al centro giallo, senza formule!",
            "Una volta allineato il colore laterale, un giro di 180° (F2, R2) lo porta a destinazione."
          ]
        },
        "case-flipped-edge": {
          "caseName": "Possibilità 2: Spigolo invertito sul fronte",
          "badge": "Orientamento",
          "initialDescription": "Lo spigolo è nello slot giusto tra centro bianco e verde, ma invertito: il verde è sulla faccia bianca!",
          "targetDescription": "Lo spigolo viene orientato correttamente: bianco sotto, verde davanti.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Fronte antiorario (F')",
              "handAction": "Ruota il fronte di 90° a sinistra.",
              "pieceEffect": "Sposta lo spigolo invertito nello strato mediano destro."
            },
            {
              "stepTitle": "Passo 2: Sopra antiorario (U')",
              "handAction": "Ruota lo strato superiore di 90° a destra.",
              "pieceEffect": "Prepara lo spazio per accogliere lo spigolo."
            },
            {
              "stepTitle": "Passo 3: Destra orario (R)",
              "handAction": "Ruota la faccia destra di 90° in alto.",
              "pieceEffect": "Alza lo spigolo orientato correttamente."
            },
            {
              "stepTitle": "Passo 4: Sopra orario (U)",
              "handAction": "Riporta lo strato superiore a sinistra.",
              "pieceEffect": "Allinea lo spigolo sul centro verde per il tuffo finale."
            }
          ],
          "proTips": [
            "Se il bianco si trova di lato anziché sopra, un passaggio per lo strato intermedio risolve la situazione."
          ]
        }
      }
    },
    "first-layer-corners": {
      "title": "Fase 2: Angoli del Primo Strato",
      "subtitle": "Padroneggiare la \"Sexy Move\" [R, U] = R U R' U' per completare la base bianca",
      "overview": "Fatta la croce, inseriamo i 4 angoli bianchi. Ogni angolo ha 3 colori. Posizionalo sopra il suo slot e ripeti (R U R' U') fino a quando il bianco punta in basso.",
      "keyTakeaway": "La Sexy Move è un commutatore di gruppo che circoscrive le modifiche a un unico slot salvaguardando il resto del cubo.",
      "cases": {
        "case-white-facing-right": {
          "caseName": "Possibilità 1: Adesivo bianco rivolto a DESTRA",
          "badge": "1 Ripetizione (Velocissimo)",
          "initialDescription": "L'angolo Bianco-Verde-Rosso è sopra il suo slot e l'adesivo bianco guarda verso DESTRA.",
          "targetDescription": "L'angolo è inserito nella base bianca con i colori perfettamente combinati.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Alza lo slot (R)",
              "handAction": "Ruota la faccia destra di 90° in alto.",
              "pieceEffect": "Solleva lo slot target verso l'alto."
            },
            {
              "stepTitle": "Passo 2: Connetti l'angolo (U)",
              "handAction": "Ruota lo strato superiore di 90° a sinistra.",
              "pieceEffect": "Collega l'angolo allo slot sollevato."
            },
            {
              "stepTitle": "Passo 3: Abbassa lo slot (R')",
              "handAction": "Ruota la faccia destra di 90° in basso.",
              "pieceEffect": "Riposiziona lo slot e l'angolo nella base bianca."
            },
            {
              "stepTitle": "Passo 4: Riallinea (U')",
              "handAction": "Ruota lo strato superiore di 90° a destra.",
              "pieceEffect": "Ripristina l'orientamento superiore."
            }
          ],
          "proTips": [
            "Quando il bianco guarda a destra, basta esattamente UNA Sexy Move!"
          ]
        },
        "case-white-facing-up": {
          "caseName": "Possibilità 2: Adesivo bianco rivolto in ALTO",
          "badge": "3 Ripetizioni",
          "initialDescription": "L'angolo è sopra il suo slot, ma il bianco guarda dritto verso il soffitto.",
          "targetDescription": "L'angolo ruota di 120° e si inserisce con il bianco rivolto in basso.",
          "detailedSteps": [
            {
              "stepTitle": "Ripetizione 1: Riorientamento",
              "handAction": "Esegui R U R' U' una volta.",
              "pieceEffect": "Sposta l'angolo ma con bianco rivolto avanti."
            },
            {
              "stepTitle": "Ripetizione 2: Estrazione",
              "handAction": "Esegui R U R' U' una seconda volta.",
              "pieceEffect": "Riporta l'angolo in alto con bianco a destra."
            },
            {
              "stepTitle": "Ripetizione 3: Inserimento",
              "handAction": "Esegui R U R' U' una terza volta.",
              "pieceEffect": "Inserisce definitivamente l'angolo nella base."
            },
            {
              "stepTitle": "Completato",
              "handAction": "Fine sequenza.",
              "pieceEffect": "Primo strato completo."
            }
          ],
          "proTips": [
            "Se il bianco guarda in alto: ripeti (R U R' U') esattamente 3 volte!"
          ]
        },
        "case-corner-trapped": {
          "caseName": "Possibilità 3: Angolo intrappolato in basso",
          "badge": "Estrazione",
          "initialDescription": "L'angolo è già nello strato inferiore, ma orientato male o nello slot errato.",
          "targetDescription": "L'angolo viene liberato nello strato superiore, pronto per l'inserimento corretto.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Alza l'angolo (R)",
              "handAction": "Ruota la faccia destra in alto.",
              "pieceEffect": "Porta in alto l'angolo intrappolato."
            },
            {
              "stepTitle": "Passo 2: Allontana (U)",
              "handAction": "Ruota lo strato superiore di 90° a sinistra.",
              "pieceEffect": "Espelle l'angolo dalla colonna destra."
            },
            {
              "stepTitle": "Passo 3: Salva la base (R')",
              "handAction": "Ruota la faccia destra in basso.",
              "pieceEffect": "Mantiene integra la croce bianca."
            },
            {
              "stepTitle": "Passo 4: Riallinea (U')",
              "handAction": "Ruota lo strato superiore a destra.",
              "pieceEffect": "Angolo pronto in alto."
            }
          ],
          "proTips": [
            "Una singola Sexy Move estrae qualsiasi angolo bloccato in basso."
          ]
        }
      }
    },
    "second-layer-edges": {
      "title": "Fase 3: Secondo Strato (Spigoli Intermedi)",
      "subtitle": "Accoppiare angoli e spigoli per completare i primi due strati (F2L)",
      "overview": "Cerca in alto uno spigolo SENZA giallo. Allinea il colore frontale con il centro corrispondente. In base al colore superiore, decidi: inserimento a DESTRA o a SINISTRA?",
      "keyTakeaway": "L'algoritmo allontana lo spigolo, estrae l'angolo per formare una coppia unita, e inserisce entrambi i pezzi contemporaneamente.",
      "cases": {
        "case-insert-right": {
          "caseName": "Possibilità 1: Inserimento a DESTRA",
          "badge": "Inserimento Destro",
          "initialDescription": "Lo spigolo Verde-Rosso è sopra, allineato con il Verde. Il colore superiore è Rosso: deve andare a DESTRA.",
          "targetDescription": "Lo spigolo si incastra perfettamente tra i centri Verde e Rosso.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Allontana lo spigolo (U)",
              "handAction": "Ruota lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Allontana lo spigolo dallo slot di destinazione."
            },
            {
              "stepTitle": "Passo 2: Solleva l'angolo (R)",
              "handAction": "Ruota la faccia destra di 90° verso l'alto.",
              "pieceEffect": "Porta l'angolo corrispondente nello strato superiore."
            },
            {
              "stepTitle": "Passo 3: Accoppia angolo e spigolo (U')",
              "handAction": "Ruota lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Unisce angolo e spigolo formando una coppia F2L."
            },
            {
              "stepTitle": "Passo 4: Ripristina la base (R')",
              "handAction": "Ruota la faccia destra di 90° verso il basso.",
              "pieceEffect": "Ripristina la base bianca."
            },
            {
              "stepTitle": "Passo 5: Posiziona per l'inserimento (U')",
              "handAction": "Ruota lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Porta la coppia sopra la faccia frontale."
            },
            {
              "stepTitle": "Passo 6: Apri lo slot frontale (F')",
              "handAction": "Ruota la faccia frontale di 90° in senso antiorario.",
              "pieceEffect": "Apre lo slot di ricezione."
            },
            {
              "stepTitle": "Passo 7: Inserisci la coppia (U)",
              "handAction": "Ruota lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Inserisce la coppia nello strato intermedio."
            },
            {
              "stepTitle": "Passo 8: Chiudi lo slot frontale (F)",
              "handAction": "Ruota la faccia frontale di 90° in senso orario.",
              "pieceEffect": "Blocca lo spigolo intermedio e completa i primi due strati."
            }
          ],
          "proTips": [
            "Ricorda: Allontana → Sexy Move → Posiziona sul fronte → Inserisci coppia."
          ]
        },
        "case-insert-left": {
          "caseName": "Possibilità 2: Inserimento a SINISTRA",
          "badge": "Inserimento Sinistro (Speculare)",
          "initialDescription": "Lo spigolo Verde-Arancione è sopra, allineato con il Verde. Il sopra è Arancione: deve andare a SINISTRA.",
          "targetDescription": "Lo spigolo si incastra tra i centri Verde e Arancione.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Allontana lo spigolo (U')",
              "handAction": "Ruota lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Allontana lo spigolo dallo slot sinistro."
            },
            {
              "stepTitle": "Passo 2: Solleva lo slot sinistro (L')",
              "handAction": "Ruota la faccia sinistra di 90° verso l'alto.",
              "pieceEffect": "Porta l'angolo sinistro in alto."
            },
            {
              "stepTitle": "Passo 3: Forma la coppia (U)",
              "handAction": "Ruota lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Accoppia angolo e spigolo insieme."
            },
            {
              "stepTitle": "Passo 4: Ripristina la base (L)",
              "handAction": "Ruota la faccia sinistra di 90° verso il basso.",
              "pieceEffect": "Ripristina la base bianca."
            },
            {
              "stepTitle": "Passo 5: Posiziona sul fronte (U)",
              "handAction": "Ruota lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Porta la coppia davanti."
            },
            {
              "stepTitle": "Passo 6: Apri lo slot frontale (F)",
              "handAction": "Ruota la faccia frontale di 90° in senso orario.",
              "pieceEffect": "Apre lo slot di ricezione."
            },
            {
              "stepTitle": "Passo 7: Inserisci la coppia (U')",
              "handAction": "Ruota lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Inserisce la coppia nello slot."
            },
            {
              "stepTitle": "Passo 8: Chiudi il fronte (F')",
              "handAction": "Ruota la faccia frontale di 90° in senso antiorario.",
              "pieceEffect": "Blocca lo strato intermedio."
            }
          ],
          "proTips": [
            "L'inserimento a sinistra è lo specchio esatto: sostituisci R con L' e U con U'."
          ]
        }
      }
    },
    "yellow-cross": {
      "title": "Fase 4: La Croce Gialla",
      "subtitle": "Orientare gli spigoli superiori con F (R U R' U') F'",
      "overview": "Guarda la faccia superiore gialla, ignorando gli angoli. Ci sono 3 pattern: Punto, forma a 'L' o Linea. Una sola sequenza li trasforma: Punto → L → Linea → Croce Gialla.",
      "keyTakeaway": "La mossa F iniziale sposta il fronte per proteggere la base, mentre F' ripristina tutto alla fine.",
      "cases": {
        "case-l-shape": {
          "caseName": "Possibilità 1: La forma a 'L' (Angolo a 90°)",
          "badge": "Più Frequente",
          "initialDescription": "Due spigoli gialli formano una L. Tieni il cubo in modo che i bracci puntino alle 12 (dietro) e alle 9 (sinistra).",
          "targetDescription": "Tutti e 4 gli spigoli gialli guardano in alto: la Croce Gialla è pronta.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Inclina la faccia frontale (F)",
              "handAction": "Ruota la faccia frontale di 90° in senso orario.",
              "pieceEffect": "Sposta la coppia risolta e apre lo spazio di lavoro."
            },
            {
              "stepTitle": "Passo 2: Sali a destra (R)",
              "handAction": "Ruota la faccia destra di 90° in alto.",
              "pieceEffect": "Avvia il trigger Sexy Move."
            },
            {
              "stepTitle": "Passo 3: Ruota lo strato superiore (U)",
              "handAction": "Spingi lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Riorienta lo spigolo giallo superiore."
            },
            {
              "stepTitle": "Passo 4: Scendi a destra (R')",
              "handAction": "Tira la faccia destra di 90° in basso.",
              "pieceEffect": "Ripristina la colonna destra."
            },
            {
              "stepTitle": "Passo 5: Ripristina sopra (U')",
              "handAction": "Spingi lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Completa il Sexy Move."
            },
            {
              "stepTitle": "Passo 6: Ripristina il fronte (F')",
              "handAction": "Ruota la faccia frontale di 90° in senso antiorario.",
              "pieceEffect": "Ripristina i primi due strati e blocca la croce gialla!"
            }
          ],
          "proTips": [
            "Ricorda l'acronimo: FUR - U'R'F' (\"Fur-Urf\").",
            "Verifica sempre che la L punti alle 12 e alle 9."
          ]
        },
        "case-horizontal-line": {
          "caseName": "Possibilità 2: La Linea Orizzontale",
          "badge": "Croce Diretta",
          "initialDescription": "Due spigoli opposti formano una riga. Tienila rigorosamente ORIZZONTALE (da ore 9 a ore 3).",
          "targetDescription": "La linea si espande direttamente nella croce completa.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Fronte orario (F)",
              "handAction": "Ruota la faccia frontale di 90° in senso orario.",
              "pieceEffect": "Apre la zona di lavoro."
            },
            {
              "stepTitle": "Passo 2: Destra in alto (R)",
              "handAction": "Gira la faccia destra in alto di 90°.",
              "pieceEffect": "Avvio mossa Sexy Move."
            },
            {
              "stepTitle": "Passo 3: Sopra orario (U)",
              "handAction": "Gira lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Ruota lo strato superiore."
            },
            {
              "stepTitle": "Passo 4: Destra in basso (R')",
              "handAction": "Gira la faccia destra in basso di 90°.",
              "pieceEffect": "Ripristina la colonna."
            },
            {
              "stepTitle": "Passo 5: Sopra antiorario (U')",
              "handAction": "Gira lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Completa il trigger."
            },
            {
              "stepTitle": "Passo 6: Fronte antiorario (F')",
              "handAction": "Ruota la faccia frontale di 90° in senso antiorario.",
              "pieceEffect": "Ripristina i primi due strati."
            }
          ],
          "proTips": [
            "Se tieni la linea verticale non funzionerà! Sempre orizzontale."
          ]
        },
        "case-center-dot": {
          "caseName": "Possibilità 3: Solo il Punto Centrale",
          "badge": "Doppia Applicazione",
          "initialDescription": "Nessuno spigolo giallo è orientato: è visibile solo il centro giallo.",
          "targetDescription": "Diventa prima la L, poi la linea e infine la croce.",
          "detailedSteps": [
            {
              "stepTitle": "Applica una prima volta F R U R' U' F'",
              "handAction": "Esegui da qualsiasi angolazione.",
              "pieceEffect": "Produce la forma a L."
            }
          ],
          "proTips": [
            "Non appena appare la L, posizionala a ore 12 e 9 e ripeti la mossa."
          ]
        }
      }
    },
    "yellow-face-sune": {
      "title": "Fase 5: Orientare la Faccia Gialla (Sune)",
      "subtitle": "Ruotare tutti gli angoli gialli verso l'alto con il famoso algoritmo Sune",
      "overview": "Fatta la croce, bisogna ruotare gli angoli. Il celebre algoritmo Sune torce 3 angoli simultaneamente mantenendo intatta la croce e i primi due strati.",
      "keyTakeaway": "A causa della parità di orientamento (somma delle torsioni ≡ 0 mod 3), nessun angolo può ruotare da solo su un cubo valido.",
      "cases": {
        "case-the-fish": {
          "caseName": "Possibilità 1: Il \"Pesce\" (1 Angolo Giallo)",
          "badge": "Sune Diretto",
          "initialDescription": "Esattamente UN angolo è giallo (sembra un pesce). Tieni il muso del pesce rivolto in BASSO A SINISTRA.",
          "targetDescription": "L'intera faccia superiore diventa completamente gialla.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Solleva la coppia destra (R)",
              "handAction": "Gira la faccia destra di 90° verso l'alto.",
              "pieceEffect": "Solleva la coppia angolo-spigolo anteriore destra."
            },
            {
              "stepTitle": "Passo 2: Avanza sopra di 90° (U)",
              "handAction": "Spingi lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Fa avanzare la coppia."
            },
            {
              "stepTitle": "Passo 3: Abbassa lo slot destro (R')",
              "handAction": "Tira la faccia destra di 90° verso il basso.",
              "pieceEffect": "Ripristina temporaneamente la colonna destra."
            },
            {
              "stepTitle": "Passo 4: Avanza di nuovo sopra (U)",
              "handAction": "Spingi ancora lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Spinge la coppia lungo il perimetro superiore."
            },
            {
              "stepTitle": "Passo 5: Risolleva lo slot destro (R)",
              "handAction": "Gira la faccia destra di 90° verso l'alto.",
              "pieceEffect": "Prepara lo slot a ricevere la coppia."
            },
            {
              "stepTitle": "Passo 6: Ruota sopra di 180° (U2)",
              "handAction": "Ruota lo strato superiore di 180° in senso orario.",
              "pieceEffect": "Incastra la coppia direttamente nello slot."
            },
            {
              "stepTitle": "Passo 7: Abbassa lo slot (R')",
              "handAction": "Tira la faccia destra di 90° verso il basso.",
              "pieceEffect": "Blocca la coppia e completa la faccia gialla."
            }
          ],
          "proTips": [
            "Regola d'oro: la testa del pesce deve sempre puntare in basso a sinistra."
          ]
        },
        "case-no-corners-yellow": {
          "caseName": "Possibilità 2: Nessun angolo giallo",
          "badge": "Preparazione",
          "initialDescription": "Solo la croce è gialla, nessun angolo punta verso l'alto.",
          "targetDescription": "Genera il pattern del pesce.",
          "detailedSteps": [
            {
              "stepTitle": "Esegui Sune una volta",
              "handAction": "Esegui R U R' U R U2 R'.",
              "pieceEffect": "Genera la configurazione a pesce."
            }
          ],
          "proTips": [
            "Posiziona i fari gialli a sinistra prima di partire."
          ]
        }
      }
    },
    "permute-corners": {
      "title": "Fase 6: Posizionare gli Angoli Gialli",
      "subtitle": "Individuare i \"Fari\" e scambiare gli angoli nei loro slot corretti",
      "overview": "Sopra è tutto giallo, ma gli angoli devono andare ai loro posti. Cerca due angoli dello stesso colore sulla stessa faccia (\"i fari\"). Metti i fari DIETRO ed esegui la formula.",
      "keyTakeaway": "La parità di permutazione richiede che scambi di angoli e di spigoli abbiano lo stesso segno algebrico.",
      "cases": {
        "case-headlights": {
          "caseName": "Possibilità 1: Fari Trovati",
          "badge": "Scambio Angoli",
          "initialDescription": "Due angoli su una faccia hanno lo stesso colore (Fari). Posizionali DIETRO.",
          "targetDescription": "Tutti e 4 gli angoli corrispondono ai rispettivi centri su tutti e 4 i lati.",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: Sopra orario (U)",
              "handAction": "Spingi lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Mossa di preparazione."
            },
            {
              "stepTitle": "Passo 2: Destra in alto (R)",
              "handAction": "Gira la faccia destra di 90° in alto.",
              "pieceEffect": "Solleva l'angolo destro."
            },
            {
              "stepTitle": "Passo 3: Sopra antiorario (U')",
              "handAction": "Spingi lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Libera lo strato superiore."
            },
            {
              "stepTitle": "Passo 4: Sinistra in alto (L')",
              "handAction": "Gira la faccia sinistra di 90° in alto.",
              "pieceEffect": "Solleva l'angolo sinistro."
            },
            {
              "stepTitle": "Passo 5: Sopra orario (U)",
              "handAction": "Spingi lo strato superiore di 90° in senso orario.",
              "pieceEffect": "Allinea l'angolo destro."
            },
            {
              "stepTitle": "Passo 6: Destra in basso (R')",
              "handAction": "Tira la faccia destra di 90° in basso.",
              "pieceEffect": "Riposiziona la colonna destra."
            },
            {
              "stepTitle": "Passo 7: Sopra antiorario (U')",
              "handAction": "Spingi lo strato superiore di 90° in senso antiorario.",
              "pieceEffect": "Allinea l'angolo sinistro."
            },
            {
              "stepTitle": "Passo 8: Sinistra in basso (L)",
              "handAction": "Tira la faccia sinistra di 90° in basso.",
              "pieceEffect": "Riposiziona la colonna sinistra e risolve tutti e 4 gli angoli!"
            }
          ],
          "proTips": [
            "Se non vedi fari da nessuna parte, esegui la mossa una volta: appariranno subito!"
          ]
        }
      }
    },
    "permute-edges": {
      "title": "Fase 7: Posizionare gli Ultimi Spigoli (Risolto!)",
      "subtitle": "Il ciclo a 3 spigoli: completare il Cubo con la U-Permutation",
      "overview": "Tutti gli angoli sono risolti! Uno spigolo è già a posto (mettilo DIETRO). Gli altri 3 devono ruotare in senso orario o antiorario per completare il cubo!",
      "keyTakeaway": "Un 3-ciclo di spigoli è una permutazione pari che rispetta tutte le leggi di invarianza. Il cubo torna nello stato identità!",
      "cases": {
        "case-clockwise-u-perm": {
          "caseName": "Possibilità 1: Ciclo Orario dei 3 Spigoli",
          "badge": "Ua Permutazione",
          "initialDescription": "Uno spigolo è risolto (sul retro). Gli altri 3 ruotano in senso orario.",
          "targetDescription": "🎉 IL CUBO DI RUBIK È COMPLETAMENTE RISOLTO!",
          "detailedSteps": [
            {
              "stepTitle": "Passo 1: R",
              "handAction": "Gira la faccia destra di 90° verso l'alto.",
              "pieceEffect": "Solleva la coppia destra."
            },
            {
              "stepTitle": "Passo 2: U'",
              "handAction": "Spingi sopra di 90° in senso antiorario.",
              "pieceEffect": "Ruota la coppia."
            },
            {
              "stepTitle": "Passo 3: R",
              "handAction": "Gira la faccia destra di 90° in alto.",
              "pieceEffect": "Fa avanzare il ciclo."
            },
            {
              "stepTitle": "Passo 4: U",
              "handAction": "Spingi sopra di 90° in senso orario.",
              "pieceEffect": "Fa avanzare il ciclo."
            },
            {
              "stepTitle": "Passo 5: R",
              "handAction": "Gira la faccia destra di 90° in alto.",
              "pieceEffect": "Fa avanzare il ciclo."
            },
            {
              "stepTitle": "Passo 6: U",
              "handAction": "Spingi sopra di 90° in senso orario.",
              "pieceEffect": "Fa avanzare il ciclo."
            },
            {
              "stepTitle": "Passo 7: R",
              "handAction": "Gira la faccia destra di 90° in alto.",
              "pieceEffect": "Fa avanzare il ciclo."
            },
            {
              "stepTitle": "Passo 8: U'",
              "handAction": "Spingi sopra di 90° in senso antiorario.",
              "pieceEffect": "Avvia l'allineamento."
            },
            {
              "stepTitle": "Passo 9: R'",
              "handAction": "Tira la faccia destra di 90° in basso.",
              "pieceEffect": "Blocca il lato sinistro."
            },
            {
              "stepTitle": "Passo 10: U'",
              "handAction": "Spingi sopra di 90° in senso antiorario.",
              "pieceEffect": "Allinea tutti gli spigoli."
            },
            {
              "stepTitle": "Passo 11: R2 (Finito!)",
              "handAction": "Ruota la faccia destra di 180° completamente.",
              "pieceEffect": "Tutti gli strati si allineano: il cubo è risolto al 100%!"
            }
          ],
          "proTips": [
            "Se all'inizio nessuno spigolo è a posto, fai la formula una volta per risolverne uno."
          ]
        }
      }
    }
  },
  "graph": {
    "badge": "Matematica Discreta & Geometria Algoritmica",
    "title": "Teoria dei Grafi del Cubo di Rubik",
    "subtitle": "Esplora i grafi di Cayley, lo spazio degli stati, il diametro, i fronti d'onda BFS e la riduzione in sottogruppi.",
    "tabs": {
      "explorer": "Esploratore Sottografi",
      "cayley": "Grafi di Cayley",
      "diameter": "Numero di Dio",
      "search": "Algoritmi di Ricerca",
      "commutators": "Commutatori"
    },
    "explorer": {
      "selectSubgroup": "Seleziona Sottogruppo:",
      "runBfs": "Avvia BFS in Tempo Reale",
      "resetBfs": "Ripristina BFS",
      "shortestPath": "Percorso Minimo",
      "identity": "Identità (0 mosse)",
      "exploredStates": "stati nella coda",
      "realtimeSync": "Sincronizzazione 3D Live",
      "depth": "Profondità",
      "nodeId": "ID Nodo:",
      "movesSeq": "Sequenza di Mosse:",
      "diameter": "Diametro del Sottogruppo:",
      "syncHint": "Clicca su qualsiasi nodo del grafo per ispezionare la sua configurazione 3D!",
      "legendSolved": "Risolto",
      "legendVisited": "Visitato BFS",
      "legendPath": "Percorso Minimo",
      "legendSelected": "Selezionato",
      "subgroups": {
        "checkerboard": {
          "name": "Scacchiera ⟨M2, E2, S2⟩ (Ipercubo Q₃)",
          "desc": "Il gruppo abeliano elementare a 3 generatori (Z₂³). Forma un ipercubo 3D di 8 stati. A distanza 3 c'è il famoso motivo a scacchiera su tutte le 6 facce!"
        },
        "r2u2": {
          "name": "Ciclo Esagonale ⟨R2, U2⟩ (Ordine 6)",
          "desc": "Un ciclo di 6 stati generato dai mezzi giri R2 e U2. Ritorna all'identità esattamente dopo 6 mosse alternate."
        },
        "commutator": {
          "name": "Orbita del Commutatore ⟨[R, U]⟩ (Sexy Move)",
          "desc": "Il commutatore [R, U] = R U R' U' ha ordine esatto 6. Applicato 6 volte percorre un ciclo e risolve di nuovo il cubo!"
        }
      }
    },
    "cayleySection": {
      "title": "Il Grafo di Cayley del Gruppo del Cubo",
      "intro": "In matematica discreta, il Cubo di Rubik è modellato come un grafo orientato colorato detto Grafo di Cayley Γ(G, S):",
      "regularTitle": "Grafo Regolare",
      "regularDesc": "Ogni vertice ha lo stesso grado: 12 nella Quarter-Turn Metric (QTM) e 18 nella Half-Turn Metric (HTM).",
      "vertexTransitiveTitle": "Vertice-Transitivo",
      "vertexTransitiveDesc": "Per qualsiasi coppia u, v esiste un automorfismo che mappa u → v. Nessun vertice è speciale; la struttura locale è identica ovunque!",
      "bipartiteTitle": "Bipartito in QTM",
      "bipartiteDesc": "Ogni quarto di giro è una permutazione dispari. I percorsi con numero pari o dispari di mosse alternano strettamente tra insiemi disgiunti.",
      "groupOrderTitle": "Ordine del Gruppo & le \"12 Orbite Disconnesse\"",
      "groupOrderIntro": "Il numero totale di stati fisicamente raggiungibili è:",
      "twelveOrbitsIntro": "Perché dividere per 2 · 3 · 2 = 12? Assemblando i pezzi casualmente, lo spazio si divide in 12 componenti connesse disgiunte:",
      "cornerParity": "1. Parità Orientamento Angoli (÷3):",
      "cornerParityDesc": "La somma delle torsioni degli 8 angoli è conservata: ∑ torsione ≡ 0 (mod 3). Un angolo non può ruotare da solo.",
      "edgeParity": "2. Parità Orientamento Spigoli (÷2):",
      "edgeParityDesc": "La somma dei flip dei 12 spigoli è conservata: ∑ flip ≡ 0 (mod 2). Uno spigolo non può capovolgersi da solo.",
      "permParity": "3. Parità delle Permutazioni (÷2):",
      "permParityDesc": "Segno globale: sgn(angoli) = sgn(spigoli). Non si possono mai scambiare solo due pezzi lasciando intatti tutti gli altri."
    },
    "diameterSection": {
      "badge": "Metrica di Teoria dei Grafi",
      "title": "Numero di Dio: Il Diametro del Grafo del Cubo",
      "intro": "In teoria dei grafi, il diametro è la massima distanza minima tra qualsiasi coppia di vertici:",
      "htmTitle": "Half-Turn Metric (HTM)",
      "htmDesc": "Dimostrato nel luglio 2010: qualsiasi configurazione può essere risolta in 20 mosse o meno!",
      "qtmTitle": "Quarter-Turn Metric (QTM)",
      "qtmDesc": "Dimostrato nell'agosto 2014: contando ogni quarto di giro, il Numero di Dio è esattamente 26.",
      "superflipTitle": "Il \"Superflip\": Vertice Antipodale",
      "superflipDesc": "Nel 1995, Michael Reid ha dimostrato che il Superflip (angoli risolti, tutti i 12 spigoli invertiti) richiede tassativamente 20 mosse in HTM.",
      "distTitle": "Distribuzione degli Stati per Distanza (HTM)",
      "distNote": "Nota: Oltre il 65% dei 43 quintilioni di stati si trova a profondità 18!"
    },
    "searchSection": {
      "title": "Ricerca su Grafi: Esplosione BFS & Riduzione a 2 Fasi di Kociemba",
      "bfsFailTitle": "Perché la ricerca in ampiezza (BFS) ingenua esplode",
      "bfsFailDesc": "Con un branching factor di b ≈ 13.35, la frontiera a profondità 20 supererebbe 1.8 × 10²² stati, richiedendo petabyte di memoria.",
      "paradigmsIntro": "Due paradigmi fondamentali hanno consentito di superare il problema:",
      "bibfsTitle": "1. BFS Bidirezionale",
      "bibfsDesc": "Cercando contemporaneamente dallo scramble e dallo stato risolto, la profondità si dimezza (d/2). Complessità ridotta da O(bᵈ) a O(bᵈ/²).",
      "pdbTitle": "2. Pattern Databases (PDB)",
      "pdbDesc": "Proiettare su grafi quoziente produce un'euristica ammissibile h(n) ≤ h*(n) che guida A* e IDA* senza mai sovrastimare la distanza.",
      "kociembaTitle": "Algoritmo a 2 Fasi di Kociemba",
      "kociembaIntro": "Herbert Kociemba scompone il gruppo in una catena di sottogruppi nidificati:",
      "phase1Title": "Fase 1 (Grafo dei laterali G / H):",
      "phase1Desc": "Raggiunge il sottogruppo H (angoli e spigoli orientati). Solo 2.2 × 10⁹ stati – esplorabili in pochi millisecondi!",
      "phase2Title": "Fase 2 (Grafo del sottogruppo H):",
      "phase2Desc": "Mosse ristrette a U, D, L², R², F², B² per raggiungere rapidamente lo stato risolto."
    },
    "commutatorSection": {
      "title": "Commutatori & Coniugazione: Cicli Minimi nel Grafo",
      "intro": "Perché gli algoritmi lasciano inalterato il 90% del cubo? Il segreto sta nei commutatori e nei coniugati.",
      "commutatorTitle": "Il Commutatore: [A, B] = A B A⁻¹ B⁻¹",
      "commutatorDesc1": "Se A e B commutano, tutto si annulla (e). Se i loro domini si sovrappongono solo su 1 o 2 pezzi, tutto il resto si cancella a vicenda!",
      "commutatorDesc2": "Il risultato è un 3-ciclo isolato. L'esempio principe è [R, U] = R U R' U'.",
      "conjugateTitle": "La Coniugazione: A B A⁻¹",
      "conjugateIntro": "Un instradamento sul grafo:",
      "setupMove": "A (Mossa di Setup): Porta i pezzi target nella zona di lavoro.",
      "operatorMove": "B (Operatore): Esegue il commutatore o ciclo locale.",
      "teardownMove": "A⁻¹ (Ripristino): Annulla esattamente la mossa di setup.",
      "conjugateSummary": "Si percorre un arco, si compie un ciclo locale e si ritorna sullo stesso sentiero!",
      "infoBox": "Tutti gli algoritmi avanzati di speedcubing si basano su commutatori e coniugazione."
    }
  },
  "sandbox": {
    "wcaScramble": "Scramble Ufficiale WCA 3x3",
    "copyScramble": "Copia scramble",
    "newScramble": "Nuovo scramble",
    "scrambleCube": "Mescola Cubo",
    "resetSolved": "Ripristina Risolto",
    "title": "Area di Gioco 3D Interattiva",
    "undo": "Annulla",
    "turnControls": "Comandi di Rotazione & Strati",
    "testerTitle": "Tester & Invertitore di Algoritmi",
    "testerPlaceholder": "Inserisci algoritmo es. R U R' U'",
    "execute": "Esegui",
    "invert": "Inverti",
    "history": "Cronologia Mosse",
    "timerTitle": "Timer Speedcube",
    "releaseToStart": "Rilascia per avviare!",
    "holdSteady": "Tieni premuto...",
    "solvingTapToStop": "In corso... tocca per fermare",
    "holdSpaceToStart": "Tieni premuta la barra spaziatrice o tocca qui",
    "bestTime": "Miglior Tempo",
    "ao5": "Media di 5 (Ao5)",
    "recentSolves": "Tempi Recenti",
    "invertTooltip": "Calcola algoritmo inverso",
    "clearHistory": "Cancella cronologia",
    "turns": "mosse",
      "referenceTitle": "Soluzione di riferimento e risolutore",
      "showReference": "Mostra soluzione di riferimento",
      "hideReference": "Nascondi soluzione (protezione spoiler)",
      "alreadySolved": "Il cubo è già risolto! Mischialo o ruota una faccia per generare una soluzione di riferimento.",
      "solutionBadge": "Percorso ottimale di risoluzione",
      "copySolution": "Copia mosse",
      "copied": "Copiato!",
      "stepNext": "Mossa succ.",
      "stepPrev": "Mossa prec.",
      "autoSolve": "Risoluzione auto",
      "pause": "Pausa",
      "solveInstant": "Risolvi istantaneamente",
    "solverMode": "Metodo di risoluzione",
    "cfopMode": "Passaggi tutorial CFOP",
    "optimalMode": "Inverso diretto (Scorciatoia)",
    "cfopMethodDesc": "Ripristina il cubo metodicamente strato dopo strato secondo le 7 fasi del tutorial (Croce bianca → Primo strato → Secondo strato → Croce gialla → Orientamento angoli → Permutazione angoli → Permutazione spigoli).",
    "optimalMethodDesc": "Inverte direttamente lo scramble per un numero minimo di mosse.",
    "stageCompleted": "Fase completata",
    "currentStage": "Fase corrente",
    "stageHeader": "Fase {stage}: {name}",
    "stageMovesCount": "{count} mosse",
    "stageNames": {
          "whiteCross": "Croce bianca",
          "firstLayer": "Primo strato (Angoli)",
          "secondLayer": "Secondo strato (Spigoli)",
          "yellowCross": "Croce gialla",
          "orientYellowCorners": "Orientamento angoli gialli",
          "permuteYellowCorners": "Permutazione angoli gialli",
          "permuteYellowEdges": "Permutazione spigoli gialli (Risolto)"
    },

      "phaseDiagnostic": "Diagnostica fasi CFOP / Metodo a strati",
      "phaseCurrent": "Fase attuale",
      "phaseNextAlgo": "Algoritmo consigliato",
      "piecesRestored": "Pezzi risolti",
      "solutionProgress": "Avanzamento della soluzione",
      "directInverseNote": "Nota: La soluzione di riferimento utilizza l'inversione diretta ottimale (≤20 mosse) risolvendo tutte le facce simultaneamente. La croce bianca e gli strati si completano nelle mosse finali.",
      "edgesAligned": "spigoli allineati",
      "cornersDocked": "angoli inseriti",
      "edgesPlaced": "spigoli posizionati",
      "edgesOriented": "spigoli orientati",
      "cornersOriented": "angoli orientati",
      "importPhysicalCube": "Importa Cubo Reale",
      "importSuccess": "Stato del cubo reale importato! Soluzione tutoriale CFOP passo-passo generata.",
      "phaseNames": {
        "whiteCross": "Croce bianca (Fase 1)",
        "firstLayer": "Angoli bianchi / Primo strato (Fase 2)",
        "secondLayer": "Secondo strato / Spigoli intermedi (Fase 3)",
        "yellowCross": "Croce gialla / OLL Spigoli (Fase 4)",
        "orientYellowCorners": "Orientamento angoli gialli / Sune (Fase 5)",
        "permuteYellowCorners": "Permutazione angoli gialli / PLL Angoli (Fase 6)",
        "permuteYellowEdges": "Permutazione spigoli gialli / Risoluzione finale (Fase 7)",
        "solved": "Stato risolto (Completo)"
      },
      "phaseTips": {
        "whiteCross": "Allinea i 4 spigoli bianchi con i centri laterali corrispondenti.",
        "firstLayer": "Usa la Sexy Move (R U R' U') per inserire correttamente gli angoli bianchi.",
        "secondLayer": "Usa gli algoritmi di inserimento destro/sinistro per inserire gli spigoli intermedi.",
        "yellowCross": "Esegui F (R U R' U') F' per formare la croce gialla.",
        "orientYellowCorners": "Usa l'algoritmo Sune (R U R' U R U2 R') per orientare tutti gli adesivi gialli verso il basso.",
        "permuteYellowCorners": "Identifica i fari e scambia i 4 angoli gialli nelle loro posizioni corrette.",
        "permuteYellowEdges": "Esegui l'algoritmo U-Perm per ciclare gli ultimi 3 spigoli e completare il cubo.",
        "solved": "Congratulazioni! Il cubo è completamente risolto allo stato fondamentale."
      },
},
  "quiz": {
    "badge": "Sfida di Padronanza Interattiva",
    "title": "Quiz Cubo di Rubik & Teoria dei Grafi",
    "subtitle": "Metti alla prova le tue conoscenze su risoluzione, grafi di Cayley, spazi di stato e commutatori!",
    "questionOf": "Domanda {current} di {total}",
    "correct": "Esatto!",
    "explanationLabel": "Spiegazione:",
    "answeredOf": "{count} su {total} risposte",
    "submit": "Invia Quiz e Mostra Risultati",
    "score": "Punteggio: {score} su {total}",
    "retake": "Rifai il Quiz",
    "feedbackMaster": "🎉 Magistrale! Domini sia il cubo che la sua teoria dei grafi.",
    "feedbackGood": "👍 Ottimo lavoro! Rivedi le spiegazioni per affinare la tua intuizione.",
    "feedbackPractice": "Continua ad esplorare il tutorial e gli approfondimenti matematici!",
    "questions": {
      "1": {
        "question": "Quanti adesivi possiede uno spigolo e può mai occupare il posto di un angolo?",
        "options": [
          "2 adesivi; può diventare un angolo con mosse di strato interno",
          "2 adesivi; uno spigolo non potrà mai occupare il posto di un angolo",
          "3 adesivi; si alterna con gli angoli",
          "1 adesivo; gli spigoli riflettono solo le facce laterali"
        ],
        "explanation": "Gli spigoli possiedono strettamente 2 adesivi e collegano due facce adiacenti. Le loro orbite sono disgiunte da quelle degli angoli a 3 adesivi!"
      },
      "2": {
        "question": "Qual è l'ordine del commutatore fondamentale \"Sexy Move\" [R, U] = R U R' U'?",
        "options": [
          "4",
          "6",
          "12",
          "24"
        ],
        "explanation": "Ripetere (R U R' U') esattamente 6 volte riporta ogni singolo pezzo al suo stato originale! L'ordine è 6."
      },
      "3": {
        "question": "Nella Half-Turn Metric (HTM), qual è il grado regolare di ciascun vertice nel grafo di Cayley del cubo?",
        "options": [
          "6",
          "12",
          "18",
          "26"
        ],
        "explanation": "6 facce × 3 possibili rotazioni (90°, -90°, 180°) = 18 archi uscenti per ogni vertice!"
      },
      "4": {
        "question": "Cos'è il \"Numero di Dio\" nella Half-Turn Metric (il diametro esatto del grafo di Cayley)?",
        "options": [
          "18 mosse",
          "20 mosse",
          "24 mosse",
          "26 mosse"
        ],
        "explanation": "Nel luglio 2010 è stato dimostrato con 35 anni-CPU di calcolo Google che qualsiasi posizione si risolve in al massimo 20 mosse."
      },
      "5": {
        "question": "Perché lo spazio delle configurazioni fisiche è diviso in 12 componenti disconnesse?",
        "options": [
          "Perché il cubo ha 12 spigoli",
          "Perché da smontato ha 12 colori",
          "Per 3 invarianti di conservazione: somma torsioni angoli (mod 3), somma flip spigoli (mod 2) e parità delle permutazioni (mod 2)",
          "Perché 6 facce per 2 rotazioni fa 12"
        ],
        "explanation": "3 × 2 × 2 = 12. Senza smontare il cubo è impossibile torcere un angolo da solo, capovolgere uno spigolo da solo o scambiare due pezzi isolati."
      },
      "6": {
        "question": "Cosa rende celebre lo stato \"Superflip\" di Michael Reid in matematica?",
        "options": [
          "È stato il primo stato dimostrato richiedere il massimo assoluto di 20 mosse in HTM",
          "È l'unico stato impossibile da risolvere",
          "Ha tutti gli angoli invertiti mentre gli spigoli sono risolti",
          "Dista solo 1 mossa dalla soluzione"
        ],
        "explanation": "Il Superflip risiede all'orizzonte antipodale del grafo ed è stato il primo stato per cui sono state provate necessarie 20 mosse."
      },
      "7": {
        "question": "Come garantiscono i Pattern Database (PDB) un'euristica ammissibile negli algoritmi A* e IDA*?",
        "options": [
          "Indovinano casualmente le distanze minime",
          "Misurano la distanza esatta in un grafo quoziente proiettato, che non sovrastima mai la distanza reale",
          "Memorizzano tutti i 43 quintilioni di stati",
          "Garantiscono soluzioni in meno di 10 secondi"
        ],
        "explanation": "Un'euristica ammissibile non deve mai sovrastimare la distanza (h(n) ≤ h*(n)). Rilassando i vincoli in un grafo quoziente, i cammini possono solo accorciarsi o restare uguali."
      },
      "8": {
        "question": "Come opera un coniugato A B A⁻¹ nella teoria dei gruppi?",
        "options": [
          "Mescola casualmente i pezzi",
          "A fa da mossa di setup, B esegue l'operazione, A⁻¹ annulla esattamente il setup",
          "Ruota due facce opposte contemporaneamente",
          "È vietato nei regolamenti WCA"
        ],
        "explanation": "I coniugati instradano i pezzi: A li trasporta nell'area di lavoro, B li permuta, e A⁻¹ rimette tutto a posto."
      }
    },
    "categories": {
      "solving": "Risoluzione",
      "graphTheory": "Teoria dei grafi",
      "groupTheory": "Teoria dei gruppi"
    }
  },
  "cubeInput": {
    "modalTitle": "Importa Stato Reale del Cubo di Rubik",
    "modalSubtitle": "Scansiona il tuo cubo tramite fotocamera o colora lo sviluppo piano per importarlo nel sandbox 3D",
    "tabCamera": "Scansione Fotocamera",
    "tabManual": "Sviluppo Piano Manuale",
    "cameraGuideTitle": "Guida allineamento fotocamera",
    "cameraFacingHint": "Scansiona le 6 facce in ordine mantenendo l'orientamento di riferimento",
    "cameraInstructions": "Inquadra la faccia nel mirino 3×3 centrale, quindi tocca cattura.",
    "scanPromptPrefix": "Scansione faccia",
    "alignNotice": "Usa una luce uniforme evitando forti riflessi e ombre",
    "captureFace": "Cattura questa faccia",
    "retakeFace": "Riprova",
    "faceCapturedLocked": "Faccia acquisita e bloccata",
    "reidentifyFace": "Scansiona di nuovo questa faccia",
    "clickToFineTune": "Clicca sugli adesivi per regolare il colore",
    "capturedFaceHint": "I colori di questa faccia sono bloccati. Clicca su 'Scansiona di nuovo questa faccia' per rieseguire con la fotocamera.",
    "scanningProgress": "Avanzamento scansione",
    "waitingAllFaces": "Scansiona prima tutte le 6 facce (Completate {0}/6)",
    "nextFace": "Prossima faccia",
    "allFacesScanned": "Tutte le 6 facce sono state scansionate!",
    "startCamera": "Avvia fotocamera",
    "stopCamera": "Arresta fotocamera",
    "cameraPermissionDenied": "Permesso fotocamera negato. Consenti l'accesso nel browser o usa la modalità manuale.",
    "cameraNotAvailable": "Nessuna fotocamera trovata. Usa lo sviluppo piano manuale.",
    "flipCamera": "Inverti fotocamera",
    "jumpToManual": "Controlla & rifinisci sviluppo",
    "facesToScan": {
        "U": "Sopra U (Centro bianco)",
        "L": "Sinistra L (Centro arancione)",
        "F": "Fronte F (Centro verde)",
        "R": "Destra R (Centro rosso)",
        "B": "Retro B (Centro blu)",
        "D": "Sotto D (Centro giallo)"
    },
    "faceOrientations": {
        "U": "Bianco verso fotocamera, Verde verso avanti/basso",
        "L": "Arancione verso fotocamera, Bianco verso l'alto",
        "F": "Verde verso fotocamera, Bianco verso l'alto",
        "R": "Rosso verso fotocamera, Bianco verso l'alto",
        "B": "Blu verso fotocamera, Bianco verso l'alto",
        "D": "Giallo verso fotocamera, Verde verso avanti/alto"
    },
    "manualInstructions": "Seleziona un colore sotto e clicca sulle tessere nello sviluppo piano (i centri sono fissi)",
    "colorPalette": "Tavolozza Colori",
    "selectedColor": "Pennello attivo",
    "remaining": "rimasti",
    "resetSolved": "Riempi stato risolto",
    "clearAll": "Svuota tessere non centrali",
    "sampleScramble": "Carica mescolamento di prova",
    "netLayoutHint": "Sviluppo a croce: Alto(U) / Sinistra(L) / Fronte(F) / Destra(R) / Retro(B) / Basso(D)",
    "statusValid": "Stato del cubo fisicamente valido e pronto da risolvere!",
    "statusInvalid": "Configurazione non ancora pronta",
    "incompleteStickers": "Alcune tessere mancano. Riempi tutte le 54 tessere.",
    "invalidColorCount": "Conteggio colori errato (ogni colore deve comparire 9 volte).",
    "invalidCenters": "Colori dei centri non allineati.",
    "impossibleEdge": "Spigolo fisicamente impossibile rilevato.",
    "duplicateEdge": "Spigolo duplicato rilevato.",
    "impossibleCorner": "Angolo fisicamente impossibile rilevato.",
    "duplicateCorner": "Angolo duplicato rilevato.",
    "applyToSandbox": "Importa nel Sandbox 3D & Risolvi",
    "cancel": "Annulla",
    "colorNames": {
        "white": "Bianco",
        "yellow": "Giallo",
        "green": "Verde",
        "blue": "Blu",
        "red": "Rosso",
        "orange": "Arancione"
    }
},
  "footer": {
    "brandTitle": "RubikGraph 3D",
    "brandDesc": "Moduli 3D Interattivi & Esploratore di Teoria dei Grafi",
    "cayleyLabel": "Grafi di Cayley Γ(G, S)",
    "godNumberLabel": "Numero di Dio = 20 HTM",
    "groupOrderLabel": "|G| ≈ 4.3 × 10¹⁹"
  }
};
