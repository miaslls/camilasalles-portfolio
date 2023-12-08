import Image from 'next/image';
import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';

import type { Metadata } from 'next';

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
      <main>
        <h1>{t('title')}</h1>
      </main>

      <aside>
        <div className="aside_img_container">
          <Image className="aside_img" src={''} alt="" />
        </div>

        <section>
          <h2>{t('aside.featured_projects')}</h2>
        </section>
      </aside>
    </div>
  );
}
