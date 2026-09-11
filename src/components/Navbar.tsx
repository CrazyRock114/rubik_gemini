import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Network, Box, HelpCircle, Keyboard, X, Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../i18n/types';

export type NavTab = 'tutorial' | 'graph' | 'sandbox' | 'quiz';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [showShortcuts, setShowShortcuts] = useState<boolean>(false);
  const [showLangMenu, setShowLangMenu] = useState<boolean>(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t } = useTranslation();

  const currentLangOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };
    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLangMenu]);

  return (
    <>
      <header className="w-full glass-panel sticky top-0 z-50 border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-2.5 cursor-pointer select-none"
            onClick={() => onSelectTab('tutorial')}
          >
            {/* Colorful Mini-Cube SVG Icon */}
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/20 p-1 flex items-center justify-center shadow-md shrink-0">
              <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                <div className="bg-rose-500 rounded-xs" />
                <div className="bg-sky-400 rounded-xs" />
                <div className="bg-emerald-400 rounded-xs" />
                <div className="bg-amber-400 rounded-xs" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base tracking-tight leading-none">
                Rubik<span className="text-cyan-400">Graph</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                {t.nav.brandSubtitle}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => onSelectTab('tutorial')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'tutorial'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">{t.nav.tutorial}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('graph')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'graph'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Network className="w-4 h-4" />
              <span className="hidden md:inline">{t.nav.graph}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('sandbox')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'sandbox'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Box className="w-4 h-4" />
              <span className="hidden md:inline">{t.nav.sandbox}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('quiz')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'quiz'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden md:inline">{t.nav.quiz}</span>
            </button>
          </nav>

          {/* Right Actions: Language Switcher & Keyboard Shortcuts */}
          <div className="flex items-center gap-2">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setShowLangMenu((prev) => !prev)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs rounded-xl border border-white/10 transition shadow-sm"
                title="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-sm leading-none">{currentLangOption.flag}</span>
                <span className="hidden sm:inline text-[11px] font-semibold">
                  {currentLangOption.name}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {/* Language Menu */}
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-slate-900/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl py-1 z-50 animate-fade-in">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-400 border-b border-white/5">
                    Select Language
                  </div>
                  {SUPPORTED_LANGUAGES.map((opt) => {
                    const isSelected = opt.code === language;
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        onClick={() => {
                          setLanguage(opt.code as SupportedLanguage);
                          setShowLangMenu(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left transition ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base leading-none">{opt.flag}</span>
                          <span>{opt.name}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Keyboard Shortcuts Button */}
            <button
              type="button"
              onClick={() => setShowShortcuts(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs rounded-xl border border-white/5 transition"
              title={t.nav.shortcutsTitle}
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px]">{t.nav.shortcuts}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Keyboard Shortcuts Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-md rounded-2xl p-6 border border-white/10 flex flex-col gap-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Keyboard className="w-5 h-5 text-cyan-400" />
                <span>{t.nav.shortcutsTitle}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowShortcuts(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-white/5">
                <span className="text-slate-300">{t.cube3d.faces.U}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 font-mono text-cyan-300 rounded font-bold">
                  U
                </kbd>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-white/5">
                <span className="text-slate-300">{t.cube3d.faces.D}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 font-mono text-cyan-300 rounded font-bold">
                  D
                </kbd>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-white/5">
                <span className="text-slate-300">{t.cube3d.faces.R}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 font-mono text-cyan-300 rounded font-bold">
                  R
                </kbd>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-white/5">
                <span className="text-slate-300">{t.cube3d.faces.L}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 font-mono text-cyan-300 rounded font-bold">
                  L
                </kbd>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-white/5">
                <span className="text-slate-300">{t.cube3d.faces.F}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 font-mono text-cyan-300 rounded font-bold">
                  F
                </kbd>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-white/5">
                <span className="text-slate-300">{t.cube3d.faces.B}</span>
                <kbd className="px-2 py-0.5 bg-slate-800 font-mono text-cyan-300 rounded font-bold">
                  B
                </kbd>
              </div>
            </div>

            <div className="p-3 bg-cyan-950/40 rounded-xl border border-cyan-500/20 text-xs text-slate-300 flex flex-col gap-1">
              <span className="font-semibold text-cyan-300">{t.nav.shortcuts}:</span>
              <span>• {t.nav.primeDoubleHint}</span>
              <span>• {t.nav.timerHint}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
