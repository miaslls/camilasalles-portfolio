import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@components/AsideImg';
import AllProjects from './AllProjects';
import FeaturedProjects from './FeaturedProjects';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('projects');

  return {
    title: t('title').toUpperCase(),
  };
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
        <header className="content_header">
          <h1>{t('title')}</h1>

          <p className="default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
            tellus, gravida ut consequat quis, luctus nec neque. Fusce imperdiet
            consectetur neque, sit amet imperdiet augue venenatis id.
          </p>
        </header>

        <FeaturedProjects />
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
