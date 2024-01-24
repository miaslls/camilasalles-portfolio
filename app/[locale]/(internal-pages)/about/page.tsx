import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@components/AsideImg';
import DevelopmentSection from './DevelopmentSection';
import DesignSection from './DesignSection';
import CollaborationSection from './CollaborationSection';
import LatestProjects from './LatestProjects';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('about');
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

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('about');

  return (
    <div className="page_container">
      <main className="page_content">
        <header className="content_header">
          <h1 className="clippable">{t('title')}</h1>

          <p className="default">{t('main.intro.text')}</p>
        </header>

        <DevelopmentSection />
        <DesignSection />
        <CollaborationSection />
      </main>

      <aside>
        <AsideImg />

        <div className="aside_content">
          <LatestProjects />
        </div>
      </aside>
    </div>
  );
}
