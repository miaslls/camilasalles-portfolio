'use client';

import { createI18nClient } from 'next-international/client';
import type { LocaleKeys } from './langTypes';

type LocaleModule = () => Promise<{ default: LocaleKeys }>;

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient({
  en: (() => import('./en')) as LocaleModule,
  pt: (() => import('./pt')) as LocaleModule,
});
