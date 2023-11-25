import { setStaticParamsLocale } from 'next-international/server';
import { getI18n } from '@/locales/server';

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return <h1>{t('contact')}</h1>;
}
