import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@components/AsideImg';
import ContactInfo from './ContactInfo';
import MessageSection from './MessageSection';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('contact');
  const unscopedT = await getScopedI18n('unscoped');

  let title = '';

  try {
    title = `${t('title').toUpperCase()} | Camila Salles • ${unscopedT(
      'dev_and_design'
    )}`;
  } catch (error) {
    console.error('Error fetching translations:', error);
    title = 'Camila Salles • development & design';
  }

  return { title };
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('contact');

  return (
    <div className="page_container">
      <main className="page_content">
        <header className="content_header">
          <h1 className="clippable">{t('title')}</h1>

          <p className="default">{t('main.text')}</p>
        </header>

        <ContactInfo />
      </main>

      <aside>
        <AsideImg />

        <div className="aside_content">
          <MessageSection />
        </div>
      </aside>
    </div>
  );
}
