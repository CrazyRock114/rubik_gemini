import { useState } from 'react';
import { Navbar, type NavTab } from './components/Navbar';
import { TutorialView } from './components/Tutorial/TutorialView';
import { GraphTheoryView } from './components/GraphTheory/GraphTheoryView';
import { SandboxView } from './components/Sandbox/SandboxView';
import { QuizView } from './components/Quiz/QuizView';
import { LanguageProvider, useTranslation } from './i18n/LanguageContext';

function AppContent() {
  const [activeTab, setActiveTab] = useState<NavTab>('tutorial');
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Bar */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main View Area */}
      <main className="flex-1 py-4">
        {activeTab === 'tutorial' && <TutorialView />}
        {activeTab === 'graph' && <GraphTheoryView />}
        {activeTab === 'sandbox' && <SandboxView />}
        {activeTab === 'quiz' && <QuizView />}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-8 mt-12 bg-slate-950/40 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-semibold text-slate-300">
              {t.footer.brandTitle}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              {t.footer.brandDesc}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>{t.footer.cayleyLabel}</span>
            <span>•</span>
            <span>{t.footer.godNumberLabel}</span>
            <span>•</span>
            <span>{t.footer.groupOrderLabel}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
