import styles from './page.module.css';

// import Image from 'next/image';
import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import { generateRandomString } from '@lib/utils';
import type { Metadata } from 'next';

import ProjectCard from '@components/project/project-card';
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

  const projects = [
    {
      title: 'MiaTask',
      img: miataskImg,
      tags: ['React', 'Next.js', 'TypeScript'],
    },
    {
      title: 'Labareda drinks & BBQ',
      img: labaredaImg,
      tags: ['React', 'NestJS', 'TypeScript'],
    },
    {
      title: 'MiaPlay',
      img: miaplayImg,
      tags: ['React', 'NestJS', 'TypeScript'],
    },
  ];

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
            {projects.map((project) => (
              <ProjectCard
                {...project}
                key={`${project.title}-${generateRandomString(8)}`}
              />
            ))}
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
