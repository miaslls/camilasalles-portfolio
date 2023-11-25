import { setStaticParamsLocale } from 'next-international/server';
import { getI18n } from '@/locales/server';

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return <h1>{t('about')}</h1>;
}
