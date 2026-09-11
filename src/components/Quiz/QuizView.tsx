import { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext';

interface QuizQuestion {
  id: number;
  question: string;
  category: 'Solving' | 'Graph Theory' | 'Group Theory';
  options: string[];
  correctIndex: number;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'How many stickers does an edge piece have, and can it ever occupy a corner slot?',
    category: 'Solving',
    options: [
      '2 stickers; it can become a corner during complex slice moves',
      '2 stickers; an edge can never occupy a corner slot',
      '3 stickers; it alternates roles with corners',
      '1 sticker; edges only reflect side faces',
    ],
    correctIndex: 1,
    explanation:
      'Edges strictly possess 2 stickers and connect two adjacent faces. Corners have 3 stickers. Their physical orbits are completely disjoint!',
  },
  {
    id: 2,
    question: 'What is the order of the fundamental "Sexy Move" commutator [R, U] = R U R\' U\'?',
    category: 'Group Theory',
    options: ['4', '6', '12', '24'],
    correctIndex: 1,
    explanation:
      'Applying (R U R\' U\') exactly 6 times returns every single piece and orientation back to the original solved state! Its group order is 6.',
  },
  {
    id: 3,
    question: 'In the Half-Turn Metric (HTM), what is the regular degree of each vertex in the Rubik\'s Cayley graph?',
    category: 'Graph Theory',
    options: ['6', '12', '18', '26'],
    correctIndex: 2,
    explanation:
      'There are 6 faces, each of which can be turned clockwise (90°), counter-clockwise (-90°), or double-turn (180°). 6 × 3 = 18 available generators per state!',
  },
  {
    id: 4,
    question: 'What is "God\'s Number" in the Half-Turn Metric (the exact diameter of the Rubik\'s Cayley graph)?',
    category: 'Graph Theory',
    options: ['18 moves', '20 moves', '24 moves', '26 moves'],
    correctIndex: 1,
    explanation:
      'In July 2010, researchers proved using 35 CPU years of distributed computation at Google that every position can be solved in 20 moves or fewer.',
  },
  {
    id: 5,
    question: 'Why does the physical configuration space contain 12 completely disconnected isomorphic components?',
    category: 'Graph Theory',
    options: [
      'Because there are 12 edges on the cube',
      'Because the cube has 12 colors when disassembled',
      'Due to 3 conservation invariants: corner twist sum (mod 3), edge flip sum (mod 2), and parity of permutations (mod 2)',
      'Because 6 faces times 2 rotations equals 12',
    ],
    correctIndex: 2,
    explanation:
      '3 × 2 × 2 = 12. You cannot twist one corner alone, flip one edge alone, or swap two pieces alone without disassembling the puzzle.',
  },
  {
    id: 6,
    question: 'What makes Michael Reid\'s "Superflip" state famous in discrete mathematics?',
    category: 'Graph Theory',
    options: [
      'It was the first state proven to require the absolute maximum of 20 moves in HTM',
      'It is the only state that cannot be solved',
      'It has all corners inverted while edges are solved',
      'It forms a 1-move cycle to solved',
    ],
    correctIndex: 0,
    explanation:
      'The Superflip (all 12 edges flipped in place with corners solved) sits on the furthest antipodal horizon of the graph and was the first configuration proved to need 20 moves.',
  },
  {
    id: 7,
    question: 'How do Pattern Databases (PDBs) guarantee an "admissible heuristic" in A* and IDA* search?',
    category: 'Graph Theory',
    options: [
      'They randomly guess shortest paths to speed up search',
      'They measure exact shortest distances in a projected quotient graph, which never overestimates the true full distance',
      'They precompute all 43 quintillion states in memory',
      'They guarantee a solution in under 10 seconds',
    ],
    correctIndex: 1,
    explanation:
      'An admissible heuristic must never overestimate distance (h(n) ≤ h*(n)). Distances in a projected quotient graph are guaranteed lower bounds because relaxing piece constraints can only shorten or preserve paths.',
  },
  {
    id: 8,
    question: 'In group theory, how does a conjugate A B A⁻¹ work on the cube?',
    category: 'Group Theory',
    options: [
      'It randomly scrambles the pieces',
      'It moves target pieces to a working zone (A), operates on them (B), and cleanly inverts the setup (A⁻¹)',
      'It rotates two opposing faces simultaneously',
      'It is an illegal move in WCA competition',
    ],
    correctIndex: 1,
    explanation:
      'Conjugation is the algebraic engine behind all setup moves: A routes target pieces into the operating frame, B performs the cycle, and A⁻¹ restores the entire remainder of the puzzle.',
  },
];

export const QuizView = () => {
  const { t } = useTranslation();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = (): number => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    if (score >= QUIZ_QUESTIONS.length * 0.75) {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col gap-6">
      {/* Quiz Header */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>{t.quiz.badge}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {t.quiz.title}
        </h1>
        <p className="text-sm text-slate-300">
          {t.quiz.subtitle}
        </p>
      </div>

      {/* Questions List */}
      <div className="flex flex-col gap-5">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];
          const isCorrect = userChoice === q.correctIndex;
          const localizedQ = t.quiz.questions[q.id];
          const qText = localizedQ?.question || q.question;
          const qOptions = localizedQ?.options || q.options;
          const qExplanation = localizedQ?.explanation || q.explanation;

          const questionHeader = t.quiz.questionOf
            .replace('{current}', String(idx + 1))
            .replace('{total}', String(QUIZ_QUESTIONS.length));

          const categoryLabel =
            q.category === 'Solving'
              ? t.quiz.categories?.solving || q.category
              : q.category === 'Graph Theory'
              ? t.quiz.categories?.graphTheory || q.category
              : t.quiz.categories?.groupTheory || q.category;

          return (
            <div
              key={q.id}
              className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">
                  {questionHeader}
                </span>
                <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {categoryLabel}
                </span>
              </div>

              <h2 className="text-base font-semibold text-white leading-relaxed">
                {qText}
              </h2>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {qOptions.map((opt, optIdx) => {
                  const isSelected = userChoice === optIdx;
                  let btnStyle =
                    'bg-slate-900/70 hover:bg-slate-800 text-slate-200 border-white/5';

                  if (isSelected && !submitted) {
                    btnStyle = 'bg-sky-500/20 border-sky-500/50 text-sky-200 font-semibold';
                  }

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      btnStyle =
                        'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected && optIdx !== q.correctIndex) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-200 font-bold';
                    } else {
                      btnStyle = 'bg-slate-900/40 text-slate-500 border-white/5 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={submitted}
                      className={`p-3 rounded-xl border text-xs sm:text-sm text-left transition flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {submitted && isSelected && optIdx !== q.correctIndex && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation upon submission */}
              {submitted && (
                <div
                  className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2 ${
                    isCorrect
                      ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
                  }`}
                >
                  <span className="font-bold uppercase tracking-wider text-[10px]">
                    {isCorrect ? t.quiz.correct : t.quiz.explanationLabel}
                  </span>
                  <span>{qExplanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submission & Scorecard */}
      <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {!submitted ? (
          <>
            <span className="text-xs text-slate-400">
              {t.quiz.answeredOf
                .replace('{count}', String(answeredCount))
                .replace('{total}', String(QUIZ_QUESTIONS.length))}
            </span>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={answeredCount === 0}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm rounded-xl shadow-lg transition disabled:opacity-40"
            >
              {t.quiz.submit}
            </button>
          </>
        ) : (
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-400" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  {t.quiz.score
                    .replace('{score}', String(score))
                    .replace('{total}', String(QUIZ_QUESTIONS.length))} (
                  {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%)
                </span>
                <span className="text-xs text-slate-300">
                  {score >= 7
                    ? t.quiz.feedbackMaster
                    : score >= 5
                    ? t.quiz.feedbackGood
                    : t.quiz.feedbackPractice}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> {t.quiz.retake}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
