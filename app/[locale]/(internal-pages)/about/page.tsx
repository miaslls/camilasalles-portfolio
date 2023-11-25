import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('about');

  return {
    title: t('title').toUpperCase(),
  };
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('about');

  return <h1>{t('title')}</h1>;
}
