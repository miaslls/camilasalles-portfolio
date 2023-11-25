import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('home');

  return (
    <main>
      <h1>{t('title')}</h1>
      <h2>{t('featured_projects')}</h2>
    </main>
  );
}
