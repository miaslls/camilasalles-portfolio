import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@components/aside-img';
import ContactLinks from './contact-links';
import MessageMe from './message-me';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('contact');

  return {
    title: t('title').toUpperCase(),
  };
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
          <h1>{t('title')}</h1>

          <p className="default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
            nisl ligula. Aenean vehicula pharetra commodo. Sed sed ultrices
            justo, dignissim pharetra tellus. Nulla fermentum ornare neque vitae
            auctor. Nam mi mi, eleifend vitae tempor nec.
          </p>
        </header>

        <ContactLinks />
      </main>

      <aside>
        <AsideImg />

        <div className="aside_content">
          <MessageMe />
        </div>
      </aside>
    </div>
  );
}
