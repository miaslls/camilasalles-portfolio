import { setStaticParamsLocale } from 'next-international/server';
import { getI18n } from '@/locales/server';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('about').toUpperCase(),
  };
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return <h1>{t('about')}</h1>;
}
