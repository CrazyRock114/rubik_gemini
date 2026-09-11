import type { TranslationSchema } from '../types';

export const fr: TranslationSchema = {
  "nav": {
    "brandSubtitle": "Tutoriel 3D & Théorie des Graphes",
    "tutorial": "Tutoriel 3D",
    "graph": "Théorie des Graphes",
    "sandbox": "Bac à Sable 3D",
    "quiz": "Quiz de Maîtrise",
    "shortcuts": "Raccourcis",
    "shortcutsTitle": "Raccourcis Clavier",
    "primeDoubleHint": "Maintenez Maj + Lettre pour tourner dans le sens inverse (ex. R').",
    "timerHint": "Maintenez la barre d'espace dans le Bac à Sable pour démarrer le chronomètre !"
  },
  "cube3d": {
    "dragHint": "Glisser pour orbiter la vue 3D",
    "turn": "Rotation",
    "clockwise": "90° Sens Horaire",
    "counterClockwise": "90° Sens Anti-Horaire",
    "halfTurn": "Demi-Tour 180°",
    "faces": {
      "U": "Haut / Up (Blanc)",
      "D": "Bas / Down (Jaune)",
      "R": "Droite / Right (Rouge)",
      "L": "Gauche / Left (Orange)",
      "F": "Face / Front (Vert)",
      "B": "Arrière / Back (Bleu)",
      "M": "Tranche Milieu (M)",
      "E": "Tranche Équateur (E)",
      "S": "Tranche Standing (S)"
    }
  },
  "tutorial": {
    "stageProgress": "Étape",
    "focusModeOn": "Mode Focus ACTIVÉ",
    "focusModeOff": "Mode Focus DÉSACTIVÉ",
    "focusTooltip": "Le mode focus estompe les pièces hors cible pour éliminer la confusion visuelle",
    "keyIntuition": "Intuition Clé",
    "caseSelectorTitle": "Sélectionner le Cas / Configuration",
    "caseSelectorPrompt": "Quel cas correspond à votre cube ?",
    "howToIdentify": "Comment identifier ce cas :",
    "operationGuideTitle": "Guide d'Opération Pas à Pas",
    "moveProgress": "Mouvement",
    "howToPerform": "Comment effectuer ce mouvement :",
    "pieceEffectLabel": "Effet mécanique sur les pièces :",
    "algorithmComplete": "Algorithme Terminé !",
    "algorithmCompleteDesc": "État cible atteint pour ce cas. Vérifiez sur votre vrai cube !",
    "restartCase": "Recommencer le cas",
    "resetCase": "Réinitialiser",
    "animateTurn": "Animer ce mouvement",
    "rotating": "En rotation...",
    "autoPlay": "Lecture auto",
    "pause": "Pause",
    "initialState": "État Initial",
    "guided3D": "3D Guidée",
    "targetGoal": "État Cible",
    "showingInitial": "Affichage du motif de départ",
    "showingTarget": "Affichage de l'objectif final",
    "aimingFor": "Ce que vous devez obtenir",
    "dragToInspect": "Glisser pour inspecter",
    "targetGoalLabel": "Objectif Cible :",
    "reset3DView": "Réinitialiser vue 3D",
    "animationSpeedHint": "Rotations animées fluidement à 0.55s",
    "prevStage": "Étape Précédente",
    "nextStage": "Étape Suivante",
    "speedcuberTips": "Astuces de speedcuber pour"
  },
  "stages": {
    "anatomy-notation": {
      "title": "Étape 0 : Anatomie & Notation",
      "subtitle": "Comprendre les types de pièces, les degrés de liberté et la rotation",
      "overview": "Le Rubik's Cube possède 3 types de pièces : 6 Centres (fixes), 12 Arêtes (2 couleurs) et 8 Coins (3 couleurs). Avant de résoudre, apprenez comment chaque face tourne dans le sens horaire et anti-horaire.",
      "keyTakeaway": "Un coin ne peut JAMAIS devenir une arête et vice-versa. On ne résout pas des stickers, on déplace des pièces 3D entières vers leurs emplacements légitimes.",
      "cases": {
        "basic-turns": {
          "caseName": "Rotations de Base (R, U, F)",
          "badge": "Fondamental",
          "initialDescription": "En partant d'un cube résolu. Observez comment chaque rotation n'affecte que les 9 pièces de sa face tout en laissant les 17 autres intactes.",
          "targetDescription": "Après R U R' U', vous verrez le coin et l'arête avant-droite déplacés.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Tourner face Droite sens horaire (R)",
              "handAction": "Saisissez la face droite avec le pouce devant et les doigts derrière. Tournez la face de 90° vers l'avant (sens horaire).",
              "pieceEffect": "Monte le coin inférieur avant-droit dans la couche supérieure."
            },
            {
              "stepTitle": "Étape 2 : Tourner face Haut sens horaire (U)",
              "handAction": "Poussez avec l'index droit le coin arrière-droit vers la gauche (90° horaire).",
              "pieceEffect": "Fait tourner la face supérieure et éloigne le coin de la couche droite."
            },
            {
              "stepTitle": "Étape 3 : Tourner face Droite sens anti-horaire (R')",
              "handAction": "Tirez la face droite de 90° vers vous (sens anti-horaire).",
              "pieceEffect": "Redescend la colonne droite vers la face inférieure."
            },
            {
              "stepTitle": "Étape 4 : Tourner face Haut sens anti-horaire (U')",
              "handAction": "Poussez avec l'index gauche la face supérieure de 90° vers la droite.",
              "pieceEffect": "Rétablit l'alignement de la face supérieure."
            }
          ],
          "proTips": [
            "Le sens horaire est défini en regardant la face droit devant soi.",
            "Une apostrophe (') désigne un tour anti-horaire.",
            "Un 2 (ex. U2) désigne un demi-tour de 180°."
          ]
        }
      }
    },
    "white-cross": {
      "title": "Étape 1 : La Croix Blanche",
      "subtitle": "Créer les fondations : aligner les arêtes blanches avec les centres latéraux",
      "overview": "L'objectif est de placer les 4 arêtes blanches sur la face blanche. Crucial : la seconde couleur de chaque arête DOIT correspondre à son centre (Vert avec Vert, Rouge avec Rouge, etc.).",
      "keyTakeaway": "Une croix blanche avec des centres latéraux désalignés n'est pas résolue ! Une arête relie deux faces à la fois.",
      "cases": {
        "case-daisy-plunge": {
          "caseName": "Possibilité 1 : Marguerite alignée & Demi-tour 180°",
          "badge": "Le Plus Fréquent",
          "initialDescription": "L'arête blanc-vert est autour du centre jaune (la Marguerite). Sa couleur verte est déjà alignée avec le centre vert.",
          "targetDescription": "L'arête est fixée sur la face blanche, reliant parfaitement le Blanc au Vert.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Tourner la face Avant de 180° (F2)",
              "handAction": "Faites tourner la face avant de 180° (deux quarts de tour).",
              "pieceEffect": "Transfère l'arête directement de la couche jaune vers la base blanche."
            }
          ],
          "proTips": [
            "Méthode Marguerite : rassemblez d'abord les 4 arêtes blanches autour du centre jaune sans mémoriser d'algorithmes !",
            "Une fois la couleur latérale alignée, un simple demi-tour F2 ou R2 l'insère directement."
          ]
        },
        "case-flipped-edge": {
          "caseName": "Possibilité 2 : Arête inversée sur la face Avant",
          "badge": "Orientation",
          "initialDescription": "L'arête blanc-vert est bien placée entre les centres blanc et vert, mais inversée : le vert est sur la face blanche !",
          "targetDescription": "L'arête est retournée : blanc vers le bas, vert vers l'avant.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Avant sens anti-horaire (F')",
              "handAction": "Tournez la face avant de 90° vers la gauche.",
              "pieceEffect": "Dégage l'arête vers la tranche centrale droite."
            },
            {
              "stepTitle": "Étape 2 : Haut sens anti-horaire (U')",
              "handAction": "Tournez la face supérieure de 90° vers la droite.",
              "pieceEffect": "Prépare l'espace pour recevoir l'arête."
            },
            {
              "stepTitle": "Étape 3 : Droite sens horaire (R)",
              "handAction": "Tournez la face droite de 90° vers le haut.",
              "pieceEffect": "Remonte l'arête correctement orientée."
            },
            {
              "stepTitle": "Étape 4 : Haut sens horaire (U)",
              "handAction": "Tournez la face supérieure de 90° vers la gauche.",
              "pieceEffect": "Aligne l'arête au-dessus du centre vert."
            }
          ],
          "proTips": [
            "Si le blanc est sur le côté au lieu du dessus, un passage par la couche du milieu permet de la réorienter."
          ]
        }
      }
    },
    "first-layer-corners": {
      "title": "Étape 2 : Les Coins de la 1ère Couronne",
      "subtitle": "Maîtriser le fameux \"Sexy Move\" [R, U] = R U R' U' pour finir la face blanche",
      "overview": "La croix faite, insérons les 4 coins blancs. Chaque coin a 3 couleurs. Placez-le au-dessus de son emplacement et répétez (R U R' U') jusqu'à ce que le blanc pointe vers le bas.",
      "keyTakeaway": "Le Sexy Move est un commutateur de groupe qui localise les changements sans détruire le reste du cube.",
      "cases": {
        "case-white-facing-right": {
          "caseName": "Possibilité 1 : Sticker blanc vers la DROITE",
          "badge": "1 Répétition (Très Rapide)",
          "initialDescription": "Le coin Blanc-Vert-Rouge est en haut au-dessus de son slot. Le blanc regarde vers la DROITE.",
          "targetDescription": "Le coin est inséré avec le blanc vers le bas et ses couleurs accordées.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Lever le slot (R)",
              "handAction": "Tournez la face droite de 90° vers le haut.",
              "pieceEffect": "Monte le slot cible vers le haut."
            },
            {
              "stepTitle": "Étape 2 : Connecter le coin (U)",
              "handAction": "Tournez la face supérieure de 90° vers la gauche.",
              "pieceEffect": "Connecte le coin au slot levé."
            },
            {
              "stepTitle": "Étape 3 : Descendre le slot (R')",
              "handAction": "Tournez la face droite de 90° vers le bas.",
              "pieceEffect": "Replace le coin dans la base blanche."
            },
            {
              "stepTitle": "Étape 4 : Réaligner (U')",
              "handAction": "Tournez la face supérieure de 90° vers la droite.",
              "pieceEffect": "Rétablit l'alignement supérieur."
            }
          ],
          "proTips": [
            "Quand le blanc regarde à droite, exactement UN Sexy Move résout le coin !"
          ]
        },
        "case-white-facing-up": {
          "caseName": "Possibilité 2 : Sticker blanc vers le HAUT",
          "badge": "3 Répétitions",
          "initialDescription": "Le coin est au bon endroit au-dessus de son slot, mais le blanc regarde directement vers le plafond.",
          "targetDescription": "Le coin pivote de 120° et s'installe avec le blanc vers le bas.",
          "detailedSteps": [
            {
              "stepTitle": "Passe 1 : Réorientation",
              "handAction": "Effectuez R U R' U' une fois.",
              "pieceEffect": "Descend le coin mais blanc regarde devant."
            },
            {
              "stepTitle": "Passe 2 : Éjection",
              "handAction": "Effectuez R U R' U' une deuxième fois.",
              "pieceEffect": "Remonte le coin avec blanc vers la droite."
            },
            {
              "stepTitle": "Passe 3 : Insertion Finale",
              "handAction": "Effectuez R U R' U' une troisième fois.",
              "pieceEffect": "Insère définitivement le coin avec blanc en bas."
            },
            {
              "stepTitle": "Terminé",
              "handAction": "Fin de séquence.",
              "pieceEffect": "Coin résolu."
            }
          ],
          "proTips": [
            "Blanc vers le haut : répétez (R U R' U') 3 fois d'affilée !"
          ]
        },
        "case-corner-trapped": {
          "caseName": "Possibilité 3 : Coin piégé en bas mal orienté",
          "badge": "Extraction",
          "initialDescription": "Le coin est déjà dans la première couronne, mais mal orienté ou au mauvais endroit.",
          "targetDescription": "Le coin est extrait dans la couche supérieure, prêt à être inséré.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Lever le coin (R)",
              "handAction": "Tournez la face droite vers le haut.",
              "pieceEffect": "Monte le coin coincé."
            },
            {
              "stepTitle": "Étape 2 : Éloigner (U)",
              "handAction": "Tournez le haut de 90° horaire.",
              "pieceEffect": "Éjecte le coin de la colonne droite."
            },
            {
              "stepTitle": "Étape 3 : Sécuriser la base (R')",
              "handAction": "Tournez la face droite vers le bas.",
              "pieceEffect": "Restaure la croix blanche."
            },
            {
              "stepTitle": "Étape 4 : Réaligner (U')",
              "handAction": "Tournez le haut vers la droite.",
              "pieceEffect": "Coin libre en haut."
            }
          ],
          "proTips": [
            "Un Sexy Move suffit toujours à déloger un coin mal placé vers le haut."
          ]
        }
      }
    },
    "second-layer-edges": {
      "title": "Étape 3 : Deuxième Couronne (Arêtes du Milieu)",
      "subtitle": "Associer coins et arêtes pour achever les deux premières couronnes (F2L)",
      "overview": "Trouvez en haut une arête SANS jaune. Alignez sa couleur avant avec son centre. Selon la couleur du dessus, déterminez : insertion à DROITE ou à GAUCHE ?",
      "keyTakeaway": "L'algorithme éloigne l'arête, sort le coin pour former une paire, puis insère les deux pièces d'un coup.",
      "cases": {
        "case-insert-right": {
          "caseName": "Possibilité 1 : Insertion vers la DROITE",
          "badge": "Insertion Droite",
          "initialDescription": "L'arête Vert-Rouge est en haut, Vert aligné avec le centre avant. Le dessus est Rouge : elle doit aller à DROITE.",
          "targetDescription": "L'arête est logée entre les centres Vert et Rouge.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Éloigner l'arête (U)",
              "handAction": "Tournez le haut de 90° dans le sens horaire.",
              "pieceEffect": "Éloigne l'arête de son slot cible."
            },
            {
              "stepTitle": "Étape 2 : Monter le coin (R)",
              "handAction": "Tournez la face droite de 90° vers le haut.",
              "pieceEffect": "Extrait le coin blanc associé."
            },
            {
              "stepTitle": "Étape 3 : Former la paire (U')",
              "handAction": "Tournez le haut de 90° vers la droite.",
              "pieceEffect": "Lie le coin et l'arête côte à côte."
            },
            {
              "stepTitle": "Étape 4 : Réparer la base (R')",
              "handAction": "Tournez la face droite vers le bas.",
              "pieceEffect": "Restaure le blanc."
            },
            {
              "stepTitle": "Étape 5 : Positionner la paire (U')",
              "handAction": "Tournez le haut de 90° vers la droite.",
              "pieceEffect": "Place la paire face au slot."
            },
            {
              "stepTitle": "Étape 6 : Ouvrir le slot avant (F')",
              "handAction": "Tournez la face avant de 90° vers la gauche.",
              "pieceEffect": "Ouvre l'emplacement d'accueil."
            },
            {
              "stepTitle": "Étape 7 : Insérer la paire (U)",
              "handAction": "Tournez le haut de 90° vers la gauche.",
              "pieceEffect": "Glisse la paire dans son logement."
            },
            {
              "stepTitle": "Étape 8 : Refermer (F)",
              "handAction": "Tournez la face avant de 90° vers la droite.",
              "pieceEffect": "Verrouille la deuxième couronne."
            }
          ],
          "proTips": [
            "Moyen mnémotechnique : Éloigner → Sexy Move → Tourner la face avant → Insérer la paire."
          ]
        },
        "case-insert-left": {
          "caseName": "Possibilité 2 : Insertion vers la GAUCHE",
          "badge": "Insertion Gauche (Miroir)",
          "initialDescription": "L'arête Vert-Orange est en haut, alignée avec Vert. Le dessus est Orange : elle doit aller à GAUCHE.",
          "targetDescription": "L'arête est insérée entre les centres Vert et Orange.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Éloigner l'arête (U')",
              "handAction": "Tournez la face supérieure de 90° dans le sens antihoraire.",
              "pieceEffect": "Éloigne l'arête de son emplacement cible."
            },
            {
              "stepTitle": "Étape 2 : Monter le coin gauche (L')",
              "handAction": "Tournez la face gauche de 90° vers le haut.",
              "pieceEffect": "Monte le coin inférieur gauche vers la couche supérieure."
            },
            {
              "stepTitle": "Étape 3 : Former la paire (U)",
              "handAction": "Tournez la face supérieure de 90° dans le sens horaire.",
              "pieceEffect": "Associe le coin et l'arête pour créer une paire F2L."
            },
            {
              "stepTitle": "Étape 4 : Restaurer la base (L)",
              "handAction": "Tournez la face gauche de 90° vers le bas.",
              "pieceEffect": "Restaure la base blanche intacte."
            },
            {
              "stepTitle": "Étape 5 : Positionner devant (U)",
              "handAction": "Tournez la face supérieure de 90° dans le sens horaire.",
              "pieceEffect": "Positionne la paire devant son emplacement d'insertion."
            },
            {
              "stepTitle": "Étape 6 : Ouvrir la face avant (F)",
              "handAction": "Tournez la face avant de 90° dans le sens horaire.",
              "pieceEffect": "Ouvre le logement de réception."
            },
            {
              "stepTitle": "Étape 7 : Insérer la paire (U')",
              "handAction": "Tournez la face supérieure de 90° dans le sens antihoraire.",
              "pieceEffect": "Insère la paire dans la couche intermédiaire."
            },
            {
              "stepTitle": "Étape 8 : Refermer la face avant (F')",
              "handAction": "Tournez la face avant de 90° dans le sens antihoraire.",
              "pieceEffect": "Verrouille la tranche centrale et complète les deux premières couches."
            }
          ],
          "proTips": [
            "L'insertion à gauche est le miroir parfait : échangez R avec L' et U avec U'."
          ]
        }
      }
    },
    "yellow-cross": {
      "title": "Étape 4 : La Croix Jaune",
      "subtitle": "Orienter les arêtes supérieures avec F (R U R' U') F'",
      "overview": "Regardez la face supérieure jaune. Ignorez les coins. Il y a 3 motifs : le Point, le 'L' ou la Ligne. Un seul algorithme enchaîne ces états : Point → L → Ligne → Croix Jaune.",
      "keyTakeaway": "Le F initial bascule la face avant pour transformer le retournement d'arêtes en Sexy Move, et F' répare tout le bas.",
      "cases": {
        "case-l-shape": {
          "caseName": "Possibilité 1 : Le 'L' (Angle à 90°)",
          "badge": "Le Plus Fréquent",
          "initialDescription": "Deux arêtes jaunes forment un L. Tenez le cube pour que les branches pointent vers 12h (arrière) et 9h (gauche).",
          "targetDescription": "Les 4 arêtes jaunes regardent vers le haut : la Croix Jaune est formée.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Basculer la face avant (F)",
              "handAction": "Tournez la face avant de 90° dans le sens horaire.",
              "pieceEffect": "Dégage la zone de travail sans détruire la base."
            },
            {
              "stepTitle": "Étape 2 : Monter à droite (R)",
              "handAction": "Tournez la face droite de 90° vers le haut.",
              "pieceEffect": "Lance le déclencheur Sexy Move."
            },
            {
              "stepTitle": "Étape 3 : Tourner le haut (U)",
              "handAction": "Poussez la face supérieure de 90° dans le sens horaire.",
              "pieceEffect": "Réoriente l'arête supérieure jaune."
            },
            {
              "stepTitle": "Étape 4 : Descendre à droite (R')",
              "handAction": "Tirez la face droite de 90° vers le bas.",
              "pieceEffect": "Restaure la colonne droite."
            },
            {
              "stepTitle": "Étape 5 : Réinitialiser le haut (U')",
              "handAction": "Poussez la face supérieure de 90° dans le sens antihoraire.",
              "pieceEffect": "Termine le déclencheur Sexy Move."
            },
            {
              "stepTitle": "Étape 6 : Restaurer la face avant (F')",
              "handAction": "Tournez la face avant de 90° dans le sens antihoraire.",
              "pieceEffect": "Restaure les deux couches du bas et verrouille la croix jaune !"
            }
          ],
          "proTips": [
            "Retenez la formule : FUR - U'R'F' (\"Fur-Urf\").",
            "Assurez-vous toujours que le L pointe bien vers 12h et 9h."
          ]
        },
        "case-horizontal-line": {
          "caseName": "Possibilité 2 : La Ligne Horizontale",
          "badge": "Croix Directe",
          "initialDescription": "Deux arêtes opposées forment une ligne. Tenez impérativement la ligne HORIZONTALE (de 9h à 3h).",
          "targetDescription": "La ligne se transforme immédiatement en croix complète.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Face avant horaire (F)",
              "handAction": "Tournez la face avant de 90° dans le sens horaire.",
              "pieceEffect": "Ouvre la zone de travail."
            },
            {
              "stepTitle": "Étape 2 : Droite vers le haut (R)",
              "handAction": "Montez la face droite de 90°.",
              "pieceEffect": "Début du mouvement Sexy Move."
            },
            {
              "stepTitle": "Étape 3 : Haut horaire (U)",
              "handAction": "Tournez la face supérieure de 90°.",
              "pieceEffect": "Fait pivoter le sommet."
            },
            {
              "stepTitle": "Étape 4 : Droite vers le bas (R')",
              "handAction": "Descendez la face droite de 90°.",
              "pieceEffect": "Restaure la colonne."
            },
            {
              "stepTitle": "Étape 5 : Haut antihoraire (U')",
              "handAction": "Tournez la face supérieure de 90° en sens inverse.",
              "pieceEffect": "Complète le déclencheur."
            },
            {
              "stepTitle": "Étape 6 : Face avant antihoraire (F')",
              "handAction": "Tournez la face avant de 90° en sens inverse.",
              "pieceEffect": "Restaure les deux premières couches."
            }
          ],
          "proTips": [
            "Si vous tenez la ligne verticalement, cela ne marchera pas ! Toujours horizontale."
          ]
        },
        "case-center-dot": {
          "caseName": "Possibilité 3 : Le Point Central Seul",
          "badge": "Double Application",
          "initialDescription": "Aucune arête jaune n'est orientée : seul le centre jaune est visible.",
          "targetDescription": "Devient le L, puis la ligne, puis la croix.",
          "detailedSteps": [
            {
              "stepTitle": "Appliquer une première fois F R U R' U' F'",
              "handAction": "Exécutez l'algorithme depuis n'importe quel côté.",
              "pieceEffect": "Fait apparaître le motif en L."
            }
          ],
          "proTips": [
            "Dès que le L apparaît, placez-le à 12h et 9h et répétez la formule."
          ]
        }
      }
    },
    "yellow-face-sune": {
      "title": "Étape 5 : Orienter la Face Jaune (La Chaise / Sune)",
      "subtitle": "Tourner les coins jaunes vers le haut avec le célèbre algorithme Sune",
      "overview": "La croix jaune finie, il faut pivoter les coins. L'algorithme légendaire de la Chaise (Sune) fait pivoter 3 coins à la fois sans défaire la croix ni le bas.",
      "keyTakeaway": "En raison de la parité d'orientation (somme des twists ≡ 0 mod 3), un coin ne peut jamais être tourné seul sur un cube régulier.",
      "cases": {
        "case-the-fish": {
          "caseName": "Possibilité 1 : Le Poisson (1 Coin Jaune)",
          "badge": "Sune Direct",
          "initialDescription": "Exactement UN coin est jaune (ressemble à un poisson). Tenez le nez du poisson vers le BAS-GAUCHE.",
          "targetDescription": "Toute la face supérieure devient entièrement jaune.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Monter la paire droite (R)",
              "handAction": "Tournez la face droite de 90° vers le haut.",
              "pieceEffect": "Monte la paire coin-arête avant droite."
            },
            {
              "stepTitle": "Étape 2 : Avancer le haut de 90° (U)",
              "handAction": "Poussez la face supérieure de 90° dans le sens horaire.",
              "pieceEffect": "Fait avancer la paire."
            },
            {
              "stepTitle": "Étape 3 : Baisser la colonne droite (R')",
              "handAction": "Tirez la face droite de 90° vers vous.",
              "pieceEffect": "Restaure temporairement la colonne."
            },
            {
              "stepTitle": "Étape 4 : Avancer le haut à nouveau (U)",
              "handAction": "Poussez encore la face supérieure de 90° dans le sens horaire.",
              "pieceEffect": "Déplace la paire le long du sommet."
            },
            {
              "stepTitle": "Étape 5 : Remonter la colonne droite (R)",
              "handAction": "Tournez la face droite de 90° vers le haut.",
              "pieceEffect": "Prépare le logement pour recevoir la paire."
            },
            {
              "stepTitle": "Étape 6 : Rotation du haut à 180° (U2)",
              "handAction": "Faites tourner la face supérieure de 180° en double pichenette.",
              "pieceEffect": "Enclenche la paire directement dans son logement."
            },
            {
              "stepTitle": "Étape 7 : Verrouiller vers le bas (R')",
              "handAction": "Tirez la face droite de 90° vers le bas.",
              "pieceEffect": "Verrouille la paire et termine la face jaune."
            }
          ],
          "proTips": [
            "Règle du poisson : le museau doit impérativement pointer vers le bas-gauche."
          ]
        },
        "case-no-corners-yellow": {
          "caseName": "Possibilité 2 : Aucun coin jaune",
          "badge": "Préparation",
          "initialDescription": "Seule la croix est jaune, aucun coin ne regarde en haut.",
          "targetDescription": "Crée le motif du poisson.",
          "detailedSteps": [
            {
              "stepTitle": "Appliquer Sune une fois",
              "handAction": "Exécutez R U R' U R U2 R'.",
              "pieceEffect": "Fait apparaître le poisson."
            }
          ],
          "proTips": [
            "Placez les phares jaunes vers la gauche avant de commencer."
          ]
        }
      }
    },
    "permute-corners": {
      "title": "Étape 6 : Placer les Coins Jaunes",
      "subtitle": "Identifier les \"Phares\" et permuter les coins vers leurs vraies places",
      "overview": "Tout est jaune en haut, mais les coins doivent être permutés. Cherchez deux coins de même couleur sur une même face (\"les phares\"). Placez les phares à l'ARRIÈRE et appliquez la formule.",
      "keyTakeaway": "La parité de permutation impose que les transpositions de coins et d'arêtes partagent la même signature.",
      "cases": {
        "case-headlights": {
          "caseName": "Possibilité 1 : Phares Détectés",
          "badge": "Permutation Coins",
          "initialDescription": "Deux coins sur une même face ont la même couleur (Phares). Placez-les à l'ARRIÈRE.",
          "targetDescription": "Les 4 coins correspondent désormais à leurs centres respectifs sur les 4 côtés.",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : Haut horaire (U)",
              "handAction": "Tournez la face supérieure de 90° dans le sens horaire.",
              "pieceEffect": "Mouvement de préparation."
            },
            {
              "stepTitle": "Étape 2 : Droite vers le haut (R)",
              "handAction": "Montez la face droite de 90°.",
              "pieceEffect": "Soulève le coin droit."
            },
            {
              "stepTitle": "Étape 3 : Haut antihoraire (U')",
              "handAction": "Tournez la face supérieure de 90° dans le sens antihoraire.",
              "pieceEffect": "Libère la face supérieure."
            },
            {
              "stepTitle": "Étape 4 : Gauche vers le haut (L')",
              "handAction": "Montez la face gauche de 90°.",
              "pieceEffect": "Soulève le coin gauche."
            },
            {
              "stepTitle": "Étape 5 : Haut horaire (U)",
              "handAction": "Tournez la face supérieure de 90° dans le sens horaire.",
              "pieceEffect": "Aligne le coin droit."
            },
            {
              "stepTitle": "Étape 6 : Droite vers le bas (R')",
              "handAction": "Descendez la face droite de 90°.",
              "pieceEffect": "Replace la colonne droite."
            },
            {
              "stepTitle": "Étape 7 : Haut antihoraire (U')",
              "handAction": "Tournez la face supérieure de 90° dans le sens antihoraire.",
              "pieceEffect": "Aligne le coin gauche."
            },
            {
              "stepTitle": "Étape 8 : Gauche vers le bas (L)",
              "handAction": "Descendez la face gauche de 90°.",
              "pieceEffect": "Replace la colonne gauche et résout les 4 coins !"
            }
          ],
          "proTips": [
            "S'il n'y a aucun phare, faites la formule une fois : des phares apparaîtront aussitôt !"
          ]
        }
      }
    },
    "permute-edges": {
      "title": "Étape 7 : Placer les Dernières Arêtes (Résolu !)",
      "subtitle": "Le cycle de 3 arêtes : achever le cube avec la U-Permutation",
      "overview": "Tous les coins sont résolus ! Une arête est déjà résolue (mettez-la à l'ARRIÈRE). Les 3 autres arêtes doivent tourner dans le sens horaire ou anti-horaire.",
      "keyTakeaway": "Un 3-cycle d'arêtes est une permutation paire respectant toutes les lois d'invariance.",
      "cases": {
        "case-clockwise-u-perm": {
          "caseName": "Possibilité 1 : Cycle Horaire des 3 Arêtes",
          "badge": "Ua Permutation",
          "initialDescription": "Une arête est résolue (à l'arrière). Les 3 autres arêtes tournent dans le sens horaire.",
          "targetDescription": "🎉 LE RUBIK'S CUBE EST ENTIÈREMENT RÉSOLU !",
          "detailedSteps": [
            {
              "stepTitle": "Étape 1 : R",
              "handAction": "Montez la face droite de 90°.",
              "pieceEffect": "Monte la paire droite."
            },
            {
              "stepTitle": "Étape 2 : U'",
              "handAction": "Tournez le haut de 90° en sens inverse.",
              "pieceEffect": "Pivote la paire."
            },
            {
              "stepTitle": "Étape 3 : R",
              "handAction": "Montez la face droite de 90°.",
              "pieceEffect": "Fait progresser le cycle."
            },
            {
              "stepTitle": "Étape 4 : U",
              "handAction": "Tournez le haut de 90°.",
              "pieceEffect": "Fait progresser le cycle."
            },
            {
              "stepTitle": "Étape 5 : R",
              "handAction": "Montez la face droite de 90°.",
              "pieceEffect": "Fait progresser le cycle."
            },
            {
              "stepTitle": "Étape 6 : U",
              "handAction": "Tournez le haut de 90°.",
              "pieceEffect": "Fait progresser le cycle."
            },
            {
              "stepTitle": "Étape 7 : R",
              "handAction": "Montez la face droite de 90°.",
              "pieceEffect": "Fait progresser le cycle."
            },
            {
              "stepTitle": "Étape 8 : U'",
              "handAction": "Tournez le haut de 90° en sens inverse.",
              "pieceEffect": "Amorce l'alignement."
            },
            {
              "stepTitle": "Étape 9 : R'",
              "handAction": "Descendez la face droite de 90°.",
              "pieceEffect": "Verrouille le côté gauche."
            },
            {
              "stepTitle": "Étape 10 : U'",
              "handAction": "Tournez le haut de 90° en sens inverse.",
              "pieceEffect": "Aligne toutes les arêtes."
            },
            {
              "stepTitle": "Étape 11 : R2 (Terminé !)",
              "handAction": "Tournez la face droite de 180° complète.",
              "pieceEffect": "Verrouille toutes les couches : le Rubik's Cube est 100% résolu !"
            }
          ],
          "proTips": [
            "Si aucune arête n'est résolue au départ, appliquez la formule une fois pour en résoudre une."
          ]
        }
      }
    }
  },
  "graph": {
    "badge": "Mathématiques Discrètes & Géométrie Algorithmique",
    "title": "Théorie des Graphes du Rubik's Cube",
    "subtitle": "Explorez les graphes de Cayley, les espaces d'états, le diamètre, les fronts d'onde BFS et la réduction en sous-groupes.",
    "tabs": {
      "explorer": "Explorateur de Sous-graphes",
      "cayley": "Graphes de Cayley",
      "diameter": "Nombre de Dieu",
      "search": "Algorithmes de Recherche",
      "commutators": "Commutateurs"
    },
    "explorer": {
      "selectSubgroup": "Sélectionner un Sous-groupe :",
      "runBfs": "Lancer Parcours BFS en Direct",
      "resetBfs": "Réinitialiser BFS",
      "shortestPath": "Plus Court Chemin",
      "identity": "Identité (0 mouvement)",
      "exploredStates": "états dans la file",
      "realtimeSync": "Synchronisation 3D en Temps Réel",
      "depth": "Profondeur",
      "nodeId": "Identifiant Nœud :",
      "movesSeq": "Séquence de Mouvements :",
      "diameter": "Diamètre du Sous-groupe :",
      "syncHint": "Cliquez sur n'importe quel nœud du graphe pour inspecter sa configuration 3D !",
      "legendSolved": "Résolu",
      "legendVisited": "Visité BFS",
      "legendPath": "Plus Court Chemin",
      "legendSelected": "Sélectionné",
      "subgroups": {
        "checkerboard": {
          "name": "Échiquier ⟨M2, E2, S2⟩ (Hypercube Q₃)",
          "desc": "Le groupe abélien élémentaire à 3 générateurs (Z₂³). Forme un hypercube 3D de 8 états où chaque mouvement est une involution (g = g⁻¹). Distance 3 : le motif damier sur les 6 faces !"
        },
        "r2u2": {
          "name": "Cycle Hexagonal ⟨R2, U2⟩ (Ordre 6)",
          "desc": "Un cycle de 6 états généré par des demi-tours R2 et U2. Rejoint l'état résolu en exactement 6 mouvements."
        },
        "commutator": {
          "name": "Orbite du Commutateur ⟨[R, U]⟩ (Sexy Move)",
          "desc": "Le célèbre commutateur [R, U] = R U R' U' est d'ordre 6. Répété 6 fois, il traverse un cycle et revient à l'identité !"
        }
      }
    },
    "cayleySection": {
      "title": "Le Graphe de Cayley du Groupe du Cube",
      "intro": "En mathématiques discrètes, le Rubik's Cube est modélisé par un graphe orienté coloré appelé Graphe de Cayley Γ(G, S) :",
      "regularTitle": "Graphe Régulier",
      "regularDesc": "Chaque sommet possède le même degré : 12 en Quarter-Turn Metric (QTM) et 18 en Half-Turn Metric (HTM).",
      "vertexTransitiveTitle": "Sommet-Transitif",
      "vertexTransitiveDesc": "Pour deux états quelconques u, v, il existe un automorphisme envoyant u vers v. Aucun état n'a de structure topologique privilégiée !",
      "bipartiteTitle": "Biparti en QTM",
      "bipartiteDesc": "Chaque quart de tour est une permutation impaire. Les longueurs paires et impaires alternent strictement entre deux ensembles disjoints.",
      "groupOrderTitle": "Ordre du Groupe & les \"12 Orbites Déconnectées\"",
      "groupOrderIntro": "Le nombre total d'états accessibles physiquement est de :",
      "twelveOrbitsIntro": "Pourquoi diviser par 2 · 3 · 2 = 12 ? Lors d'un remontage aléatoire, l'espace se décompose en 12 composantes connexes disjointes :",
      "cornerParity": "1. Parité d'Orientation des Coins (÷3) :",
      "cornerParityDesc": "La somme des rotations des 8 coins est invariante : ∑ rotation ≡ 0 (mod 3). Un coin ne peut pas être tourné seul.",
      "edgeParity": "2. Parité d'Orientation des Arêtes (÷2) :",
      "edgeParityDesc": "La somme des inversions des 12 arêtes est invariante : ∑ flip ≡ 0 (mod 2). Une arête ne peut pas être retournée seule.",
      "permParity": "3. Parité des Permutations (÷2) :",
      "permParityDesc": "Signature : sgn(coins) = sgn(arêtes). On ne peut jamais échanger seulement deux pièces sans en bouger d'autres."
    },
    "diameterSection": {
      "badge": "Métrique de Théorie des Graphes",
      "title": "Le Nombre de Dieu : Diamètre du Graphe du Cube",
      "intro": "En théorie des graphes, le diamètre correspond à la distance maximale entre deux sommets :",
      "htmTitle": "Half-Turn Metric (HTM)",
      "htmDesc": "Prouvé en juillet 2010 : n'importe quelle configuration se résout en 20 mouvements ou moins !",
      "qtmTitle": "Quarter-Turn Metric (QTM)",
      "qtmDesc": "Prouvé en août 2014 : en comptant chaque quart de tour, le Nombre de Dieu est de 26.",
      "superflipTitle": "Le \"Superflip\" : Sommet Antipodal",
      "superflipDesc": "En 1995, Michael Reid a prouvé que le Superflip (tous coins résolus, 12 arêtes inversées) requiert impérativement 20 mouvements.",
      "distTitle": "Distribution des États selon la Distance (HTM)",
      "distNote": "Remarque : plus de 65 % des 43 quintillions d'états se situent à la profondeur 18 !"
    },
    "searchSection": {
      "title": "Recherche : Explosion BFS & Réduction 2-Phases de Kociemba",
      "bfsFailTitle": "Pourquoi la recherche en largeur (BFS) naïve explose",
      "bfsFailDesc": "Avec un facteur de branchement b ≈ 13.35, la frontière à la profondeur 20 dépasse 1.8 × 10²² états, nécessitant des pétaoctets de mémoire.",
      "paradigmsIntro": "Deux paradigmes majeurs ont permis de surmonter ce défi :",
      "bibfsTitle": "1. BFS Bidirectionnel",
      "bibfsDesc": "En explorant simultanément depuis le mélange et depuis l'état résolu, la profondeur est divisée par deux (d/2). Complexité réduite de O(bᵈ) à O(bᵈ/²).",
      "pdbTitle": "2. Bases de Données de Motifs (PDBs)",
      "pdbDesc": "La projection sur des graphes quotients fournit une heuristique admissible h(n) ≤ h*(n) guidant A* et IDA* sans surestimation.",
      "kociembaTitle": "Algorithme 2-Phases de Kociemba",
      "kociembaIntro": "Herbert Kociemba décompose le groupe en une chaîne de sous-groupes emboîtés :",
      "phase1Title": "Phase 1 (Graphe des classes G / H) :",
      "phase1Desc": "Atteint le sous-groupe H (arêtes et coins orientés). Seulement 2.2 × 10⁹ états – explorés en millisecondes !",
      "phase2Title": "Phase 2 (Graphe du sous-groupe H) :",
      "phase2Desc": "Mouvements restreints à U, D, L², R², F², B² pour atteindre l'état résolu."
    },
    "commutatorSection": {
      "title": "Commutateurs & Conjugaison : Cycles Minimaux dans le Graphe",
      "intro": "Pourquoi les algorithmes laissent-ils 90 % du cube intact ? Le secret réside dans les commutateurs et les conjugués.",
      "commutatorTitle": "Le Commutateur : [A, B] = A B A⁻¹ B⁻¹",
      "commutatorDesc1": "Si A et B commutent, tout s'annule (e). Si leurs zones d'action ne se croisent que sur 1 ou 2 pièces, tout le reste s'annule également !",
      "commutatorDesc2": "Le résultat est un 3-cycle isolé. L'exemple phare est [R, U] = R U R' U'.",
      "conjugateTitle": "La Conjugaison : A B A⁻¹",
      "conjugateIntro": "Un routage sur le graphe :",
      "setupMove": "A (Mouvement de préparation) : Place les pièces dans la zone d'action.",
      "operatorMove": "B (Opérateur) : Exécute le commutateur ou cycle local.",
      "teardownMove": "A⁻¹ (Rétablissement) : Annule le mouvement de préparation.",
      "conjugateSummary": "On emprunte une arête, on effectue une boucle locale, et on revient en sens inverse !",
      "infoBox": "Tous les algorithmes avancés de speedcubing reposent sur les commutateurs et la conjugaison."
    }
  },
  "sandbox": {
    "wcaScramble": "Mélange Officiel WCA 3x3",
    "copyScramble": "Copier mélange",
    "newScramble": "Nouveau mélange",
    "scrambleCube": "Mélanger le Cube",
    "resetSolved": "Réinitialiser Résolu",
    "title": "Espace Interactif 3D",
    "undo": "Annuler",
    "turnControls": "Contrôles de Rotation & Tranches",
    "testerTitle": "Testeur & Inverseur d'Algorithme",
    "testerPlaceholder": "Exemple d'algorithme : R U R' U'",
    "execute": "Exécuter",
    "invert": "Inverser",
    "history": "Historique des Mouvements",
    "timerTitle": "Chronomètre Speedcube",
    "releaseToStart": "Relâchez pour démarrer !",
    "holdSteady": "Maintenez enfoncé...",
    "solvingTapToStop": "Chrono en cours... cliquez pour stopper",
    "holdSpaceToStart": "Espace enfoncé ou touchez ici",
    "bestTime": "Meilleur Temps",
    "ao5": "Moyenne de 5 (Ao5)",
    "recentSolves": "Temps Récents",
    "invertTooltip": "Calculer l'algorithme inverse",
    "clearHistory": "Effacer l'historique",
    "turns": "mouvements",
      "referenceTitle": "Solution de référence et solveur",
      "showReference": "Afficher la solution",
      "hideReference": "Masquer la solution (anti-spoiler)",
      "alreadySolved": "Le cube est déjà résolu ! Mélangez-le ou tournez une face pour générer une solution de référence.",
      "solutionBadge": "Chemin de résolution optimal",
      "copySolution": "Copier les mouvements",
      "copied": "Copié !",
      "stepNext": "Coup suivant",
      "stepPrev": "Coup précédent",
      "autoSolve": "Résolution auto",
      "pause": "Pause",
      "solveInstant": "Résoudre instantanément",
    "solverMode": "Méthode de résolution",
    "cfopMode": "Étapes du tutoriel CFOP",
    "optimalMode": "Inverse direct (Raccourci)",
    "cfopMethodDesc": "Restaure le cube méthodiquement couche par couche selon les 7 étapes du tutoriel (Croix blanche → Première couche → Deuxième couche → Croix jaune → Orientation coins → Permutation coins → Permutation arêtes).",
    "optimalMethodDesc": "Inverse directement le mélange pour un nombre minimal de mouvements.",
    "stageCompleted": "Étape terminée",
    "currentStage": "Étape actuelle",
    "stageHeader": "Étape {stage} : {name}",
    "stageMovesCount": "{count} mouvements",
    "stageNames": {
          "whiteCross": "Croix blanche",
          "firstLayer": "Première couche (Coins)",
          "secondLayer": "Deuxième couche (Arêtes)",
          "yellowCross": "Croix jaune",
          "orientYellowCorners": "Orientation des coins jaunes",
          "permuteYellowCorners": "Permutation des coins jaunes",
          "permuteYellowEdges": "Permutation des arêtes jaunes (Résolu)"
    },

      "phaseDiagnostic": "Diagnostic de phase CFOP / Méthode débutante",
      "phaseCurrent": "Phase actuelle",
      "phaseNextAlgo": "Algorithme recommandé",
      "piecesRestored": "Pièces résolues",
      "solutionProgress": "Progression de la solution",
      "directInverseNote": "Note : La solution de référence utilise une inversion directe optimale (≤20 mouvements) résolvant toutes les faces simultanément. La croix blanche et les couronnes se verrouillent dans les derniers coups.",
      "edgesAligned": "arêtes alignées",
      "cornersDocked": "coins insérés",
      "edgesPlaced": "arêtes placées",
      "edgesOriented": "arêtes orientées",
      "cornersOriented": "coins orientés",
      "importPhysicalCube": "Importer un vrai Rubik's Cube",
      "importSuccess": "État du cube importé ! Solution tutorielle CFOP étape par étape calculée.",
      "phaseNames": {
        "whiteCross": "Croix blanche (Étape 1)",
        "firstLayer": "Coins blancs / Première couronne (Étape 2)",
        "secondLayer": "Deuxième couronne / Arêtes moyennes (Étape 3)",
        "yellowCross": "Croix jaune / OLL Arêtes (Étape 4)",
        "orientYellowCorners": "Orientation des coins jaunes / Sune (Étape 5)",
        "permuteYellowCorners": "Permutation des coins jaunes / PLL Coins (Étape 6)",
        "permuteYellowEdges": "Permutation des arêtes jaunes / Finition (Étape 7)",
        "solved": "État résolu (Complet)"
      },
      "phaseTips": {
        "whiteCross": "Alignez les 4 arêtes blanches avec les centres latéraux correspondants.",
        "firstLayer": "Utilisez le Sexy Move (R U R' U') pour insérer les coins blancs dans la base.",
        "secondLayer": "Appliquez l'algorithme d'insertion droite/gauche pour placer les arêtes moyennes.",
        "yellowCross": "Exécutez F (R U R' U') F' pour former la croix jaune.",
        "orientYellowCorners": "Utilisez l'algorithme Sune (R U R' U R U2 R') pour orienter les coins jaunes vers le bas.",
        "permuteYellowCorners": "Repérez les phares et permutez les 4 coins jaunes à leurs places respectives.",
        "permuteYellowEdges": "Exécutez la PLL U pour permuter les 3 dernières arêtes et terminer le cube.",
        "solved": "Félicitations ! Le cube est parfaitement résolu dans son état d'identité."
      },
},
  "quiz": {
    "badge": "Défi de Maîtrise Interactif",
    "title": "Quiz Rubik's Cube & Théorie des Graphes",
    "subtitle": "Testez vos connaissances sur la résolution, les graphes de Cayley, les espaces d'états et les commutateurs !",
    "questionOf": "Question {current} sur {total}",
    "correct": "Correct !",
    "explanationLabel": "Explication :",
    "answeredOf": "{count} sur {total} répondu(es)",
    "submit": "Valider et Voir les Résultats",
    "score": "Score : {score} sur {total}",
    "retake": "Recommencer le Quiz",
    "feedbackMaster": "🎉 Magistral ! Vous maîtrisez parfaitement le cube et sa théorie mathématique.",
    "feedbackGood": "👍 Très bon résultat ! Relisez les explications pour affiner votre compréhension.",
    "feedbackPractice": "Continuez d'explorer le tutoriel et les démonstrations graphiques !",
    "questions": {
      "1": {
        "question": "Combien de stickers possède une arête, et peut-elle occuper l'emplacement d'un coin ?",
        "options": [
          "2 stickers ; elle peut devenir un coin lors de mouvements de tranche",
          "2 stickers ; une arête ne peut jamais occuper un emplacement de coin",
          "3 stickers ; elle échange son rôle avec les coins",
          "1 sticker ; les arêtes ne reflètent que les faces latérales"
        ],
        "explanation": "Les arêtes possèdent strictement 2 stickers reliant deux faces voisines. Leurs orbites sont entièrement disjointes de celles des coins à 3 stickers !"
      },
      "2": {
        "question": "Quel est l'ordre du commutateur fondamental \"Sexy Move\" [R, U] = R U R' U' ?",
        "options": [
          "4",
          "6",
          "12",
          "24"
        ],
        "explanation": "Répéter (R U R' U') exactement 6 fois ramène chaque pièce à son état d'origine ! Son ordre est donc 6."
      },
      "3": {
        "question": "Dans la Half-Turn Metric (HTM), quel est le degré régulier de chaque sommet dans le graphe de Cayley du cube ?",
        "options": [
          "6",
          "12",
          "18",
          "26"
        ],
        "explanation": "6 faces × 3 rotations possibles (90°, -90°, 180°) = 18 arêtes sortantes par sommet !"
      },
      "4": {
        "question": "Quel est le \"Nombre de Dieu\" dans la Half-Turn Metric (diamètre du graphe de Cayley) ?",
        "options": [
          "18 mouvements",
          "20 mouvements",
          "24 mouvements",
          "26 mouvements"
        ],
        "explanation": "En juillet 2010, les chercheurs ont prouvé que n'importe quelle position est résoluble en 20 mouvements ou moins."
      },
      "5": {
        "question": "Pourquoi l'espace des configurations physiques est-il divisé en 12 composantes déconnectées ?",
        "options": [
          "Parce que le cube a 12 arêtes",
          "Parce que le cube démonté a 12 couleurs",
          "En raison de 3 invariants : somme des twists de coins (mod 3), somme des flips d'arêtes (mod 2) et parité de permutation (mod 2)",
          "Car 6 faces fois 2 rotations donne 12"
        ],
        "explanation": "3 × 2 × 2 = 12. Sans démontage physique, on ne peut pas tourner un coin seul, inverser une arête seule ou permuter deux pièces seules."
      },
      "6": {
        "question": "Pourquoi l'état \"Superflip\" de Michael Reid est-il célèbre en mathématiques ?",
        "options": [
          "C'est le premier état prouvé nécessitant le maximum absolu de 20 mouvements en HTM",
          "C'est le seul état impossible à résoudre",
          "Tous les coins sont inversés alors que les arêtes sont résolues",
          "Il est à 1 mouvement de la solution"
        ],
        "explanation": "Le Superflip se situe à l'horizon antipodal du graphe et fut le premier état prouvé requérant 20 mouvements."
      },
      "7": {
        "question": "Comment les Bases de Données de Motifs (PDBs) garantissent-elles une \"heuristique admissible\" pour A* et IDA* ?",
        "options": [
          "Elles devinent au hasard les plus courts chemins",
          "Elles mesurent la distance exacte dans un graphe quotient projeté, qui ne surestime jamais la distance réelle",
          "Elles stockent les 43 quintillions d'états",
          "Elles garantissent une résolution en moins de 10 secondes"
        ],
        "explanation": "Une heuristique admissible ne doit jamais surestimer la distance (h(n) ≤ h*(n)). Dans un graphe quotient aux contraintes allégées, les distances ne peuvent qu'être inférieures ou égales."
      },
      "8": {
        "question": "Comment opère une conjugaison A B A⁻¹ en théorie des groupes ?",
        "options": [
          "Elle mélange aléatoirement",
          "A sert de préparation, B applique l'opération, A⁻¹ annule la préparation",
          "Elle tourne deux faces opposées en même temps",
          "Elle est interdite en compétition WCA"
        ],
        "explanation": "La conjugaison route les pièces : A les transporte dans la zone d'action, B les permute, et A⁻¹ restaure le reste."
      }
    },
    "categories": {
      "solving": "Résolution",
      "graphTheory": "Théorie des graphes",
      "groupTheory": "Théorie des groupes"
    }
  },
  "cubeInput": {
    "modalTitle": "Importer l'état réel du Rubik's Cube",
    "modalSubtitle": "Scannez votre cube physique avec la caméra ou peignez le patron déplié pour l'importer dans le bac à sable 3D",
    "tabCamera": "Reconnaissance caméra",
    "tabManual": "Patron manuel",
    "cameraGuideTitle": "Guide d'alignement caméra",
    "cameraFacingHint": "Scannez les 6 faces dans l'ordre en maintenant l'orientation de référence",
    "cameraInstructions": "Cadrez la face dans le viseur 3×3 au centre, puis appuyez sur capturer.",
    "scanPromptPrefix": "Face en cours",
    "alignNotice": "Privilégiez une lumière diffuse pour éviter reflets et ombres fortes",
    "captureFace": "Capturer cette face",
    "retakeFace": "Recommencer",
    "faceCapturedLocked": "Face capturée et verrouillée",
    "reidentifyFace": "Scanner à nouveau cette face",
    "clickToFineTune": "Cliquez sur une vignette pour ajuster la couleur",
    "capturedFaceHint": "Les couleurs de cette face sont verrouillées. Cliquez sur 'Scanner à nouveau cette face' pour reprendre avec la caméra.",
    "scanningProgress": "Progression du scan",
    "waitingAllFaces": "Veuillez scanner les 6 faces (Terminé {0}/6)",
    "nextFace": "Face suivante",
    "allFacesScanned": "Les 6 faces ont été scannées avec succès !",
    "startCamera": "Démarrer caméra",
    "stopCamera": "Arrêter caméra",
    "cameraPermissionDenied": "Accès caméra refusé. Veuillez autoriser la caméra dans votre navigateur.",
    "cameraNotAvailable": "Aucune caméra détectée. Veuillez utiliser le patron manuel.",
    "flipCamera": "Changer de caméra",
    "jumpToManual": "Vérifier & ajuster le patron",
    "facesToScan": {
        "U": "Haut U (Centre blanc)",
        "L": "Gauche L (Centre orange)",
        "F": "Face F (Centre vert)",
        "R": "Droite R (Centre rouge)",
        "B": "Arrière B (Centre bleu)",
        "D": "Bas D (Centre jaune)"
    },
    "faceOrientations": {
        "U": "Blanc face caméra, Vert vers l'avant/bas",
        "L": "Orange face caméra, Blanc vers le haut",
        "F": "Vert face caméra, Blanc vers le haut",
        "R": "Rouge face caméra, Blanc vers le haut",
        "B": "Bleu face caméra, Blanc vers le haut",
        "D": "Jaune face caméra, Vert vers l'avant/haut"
    },
    "manualInstructions": "Choisissez une couleur puis cliquez sur les facettes du patron déplié (les centres sont fixés)",
    "colorPalette": "Palette de couleurs",
    "selectedColor": "Pinceau actif",
    "remaining": "restant",
    "resetSolved": "Remplir l'état résolu",
    "clearAll": "Effacer hors centres",
    "sampleScramble": "Charger un mélange exemple",
    "netLayoutHint": "Patron en croix : Haut(U) / Gauche(L) / Face(F) / Droite(R) / Arrière(B) / Bas(D)",
    "statusValid": "État du cube physiquement valide et prêt à résoudre !",
    "statusInvalid": "Configuration du cube incomplète ou invalide",
    "incompleteStickers": "Facettes incomplètes. Veuillez remplir les 54 facettes.",
    "invalidColorCount": "Nombre de couleurs invalide (chaque couleur doit avoir exactement 9 facettes).",
    "invalidCenters": "Les centres ne correspondent pas.",
    "impossibleEdge": "Arête physiquement impossible détectée.",
    "duplicateEdge": "Arête en double détectée.",
    "impossibleCorner": "Coin physiquement impossible détecté.",
    "duplicateCorner": "Coin en double détecté.",
    "applyToSandbox": "Importer dans le bac à sable & Résoudre",
    "cancel": "Annuler",
    "colorNames": {
        "white": "Blanc",
        "yellow": "Jaune",
        "green": "Vert",
        "blue": "Bleu",
        "red": "Rouge",
        "orange": "Orange"
    }
},
  "footer": {
    "brandTitle": "RubikGraph 3D",
    "brandDesc": "Modules 3D Interactifs & Explorateur de Théorie des Graphes",
    "cayleyLabel": "Graphes de Cayley Γ(G, S)",
    "godNumberLabel": "Nombre de Dieu = 20 HTM",
    "groupOrderLabel": "|G| ≈ 4.3 × 10¹⁹"
  }
};
