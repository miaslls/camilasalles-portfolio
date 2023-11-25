import { setStaticParamsLocale } from 'next-international/server';
import { getI18n } from '@/locales/server';
import MainNav from '@components/main-nav/main-nav';

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return (
    <>
      <MainNav />

      <main>
        <h1>{t('home')}</h1>
      </main>
    </>
  );
}
