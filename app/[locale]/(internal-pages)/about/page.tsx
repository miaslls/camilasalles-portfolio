import { getI18n } from '@/locales/server';

export default async function AboutPage() {
  const t = await getI18n();

  return <h1>{t('about')}</h1>;
}
