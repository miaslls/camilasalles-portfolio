import { getI18n } from '@/locales/server';

export default async function ContactPage() {
  const t = await getI18n();

  return <h1>{t('contact')}</h1>;
}
