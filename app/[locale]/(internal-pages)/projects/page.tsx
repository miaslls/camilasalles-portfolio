import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@components/AsideImg';
import AllProjects from './AllProjects';
import FeaturedProjects from './FeaturedProjects';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('projects');
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

export default async function ProjectsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('projects');

  return (
    <div className="page_container">
      <main className="page_content">
        <div className="wrapper">
          <header className="content_header">
            <h1 className="clippable">{t('title')}</h1>
          </header>

          <FeaturedProjects />
        </div>
      </main>

      <aside>
        <AsideImg />

        <div className="aside_content">
          <AllProjects />
        </div>
      </aside>
    </div>
  );
}
