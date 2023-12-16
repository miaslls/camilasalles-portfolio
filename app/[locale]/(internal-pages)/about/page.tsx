import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@components/aside-img';
import DevelopmentSection from './development-section';
import LatestProjects from './latest-projects';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('about');

  return {
    title: t('title').toUpperCase(),
  };
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
          <h1>{t('title')}</h1>

          <p className="default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
            tellus, gravida ut consequat quis, luctus nec neque. Fusce imperdiet
            consectetur neque, sit amet imperdiet augue venenatis id. Proin et
            eros leo. Morbi fermentum luctus ex, sit amet euismod est porta at.
            Duis dictum hendrerit sagittis. Nam eget luctus turpis. Etiam
            consequat ante ut sem volutpat blandit. Praesent in lacus convallis,
            tempor tellus in, interdum lacus. Vivamus feugiat justo in vehicula
            pharetra. Pellentesque lacus metus, bibendum eu viverra at, varius
            vitae massa. Fusce id dapibus augue. Maecenas id risus laoreet,
            vestibulum ante ut, ultricies dui.
          </p>
        </header>

        <DevelopmentSection />
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
