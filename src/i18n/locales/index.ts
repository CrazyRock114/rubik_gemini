import type { SupportedLanguage, TranslationSchema } from '../types';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import { it } from './it';
import { ja } from './ja';
import { ko } from './ko';
import { zhCN } from './zh-CN';
import { zhTW } from './zh-TW';

export const LOCALES: Record<SupportedLanguage, TranslationSchema> = {
  en,
  de,
  fr,
  it,
  ja,
  ko,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
};

export { en, de, fr, it, ja, ko, zhCN, zhTW };
