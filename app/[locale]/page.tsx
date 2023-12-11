import styles from './page.module.css';

import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';

import FeaturedProjects_Home from './featured-projects_home';

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('home');

  return (
    <main className={styles.main_home}>
      <FeaturedProjects_Home />
    </main>
  );
}
