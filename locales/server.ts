import { createI18nServer } from 'next-international/server';
import type { LocaleKeys } from './langTypes';

type LocaleModule = () => Promise<{ default: LocaleKeys }>;

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: (() => import('./en')) as LocaleModule,
  pt: (() => import('./pt')) as LocaleModule,
});
