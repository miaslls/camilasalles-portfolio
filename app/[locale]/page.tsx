import styles from './page.module.css';

import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import FeaturedProjects_Home from './FeaturedProjects_home';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('unscoped');

  let title = '';

  try {
    title = `Camila Salles • ${t('dev_and_design')}`;
  } catch (error) {
    console.error('Error fetching translations:', error);
    title = 'Camila Salles • development & design';
  }

  return { title };
}

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  return (
    <main className={styles.main_home}>
      <FeaturedProjects_Home />
    </main>
  );
}
