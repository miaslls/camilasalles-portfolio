import styles from './page.module.css';

import Image from 'next/image';
import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@components/aside-img';
import FeaturedProjects from './featured-projects';

import miataskImg from '@images/projects/miatask.jpg';
import labaredaImg from '@images/projects/labareda.png';
import miaplayImg from '@images/projects/miaplay.jpg';

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

        <section className={styles.projects}>
          <h2 className="hidden">{t('main.all_projects')}</h2>

          <div className={styles.project_grid}>
            <article className={styles.project_container}>
              <div className="wrapper">
                <h3 className={styles.project_title}>MiaTask</h3>
                <Image className={styles.project_img} src={miataskImg} alt="" />
              </div>

              <ul className={styles.tag_list}>
                <li className={styles.tag}>React</li>
                <li className={styles.tag}>Next.js</li>
                <li className={styles.tag}>TypeScript</li>
              </ul>
            </article>

            <article className={styles.project_container}>
              <div className="wrapper">
                <h3 className={styles.project_title}>Labareda drinks & BBQ</h3>
                <Image
                  className={styles.project_img}
                  src={labaredaImg}
                  alt=""
                />
              </div>

              <ul className={styles.tag_list}>
                <li className={styles.tag}>React</li>
                <li className={styles.tag}>NestJS</li>
                <li className={styles.tag}>TypeScript</li>
              </ul>
            </article>

            <article className={styles.project_container}>
              <div className="wrapper">
                <h3 className={styles.project_title}>MiaPlay</h3>
                <Image className={styles.project_img} src={miaplayImg} alt="" />
              </div>

              <ul className={styles.tag_list}>
                <li className={styles.tag}>React</li>
                <li className={styles.tag}>NestJS</li>
                <li className={styles.tag}>TypeScript</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <aside>
        <AsideImg />

        <div className="aside_content">
          <FeaturedProjects />
        </div>
      </aside>
    </div>
  );
}
