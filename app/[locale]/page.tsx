import styles from './page.module.css';

import { setStaticParamsLocale } from 'next-international/server';
import FeaturedProjects_Home from './FeaturedProjects_home';

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
