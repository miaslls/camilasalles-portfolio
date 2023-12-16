'use client';

import styles from './latest-projects.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';

import SectionTitle from '@components/section-title';
import MiniProjectCard from '@components/project/mini-project-card';
import { latestProjects } from '@data/projects';

import megaphoneIcon_light from '@icons/light/megaphone-line.svg';
import megaphoneIcon_dark from '@icons/dark/megaphone-line.svg';
import arrowIcon_light from '@icons/light-accent-01/arrow-right-double-line.svg';
import arrowIcon_dark from '@icons/dark-accent-01/arrow-right-double-line.svg';

export default function LatestProjects() {
  const t = useScopedI18n('about.aside');
  const unscopedT = useScopedI18n('unscoped');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className={`aside_section ${styles.container}`}>
      <div className={styles.wrapper}>
        <SectionTitle
          title={t('latest_projects')}
          icon={isDarkTheme ? megaphoneIcon_light : megaphoneIcon_dark}
        />

        <Link className={styles.view_link} href="/projects">
          <Image
            className={styles.icon}
            src={isDarkTheme ? arrowIcon_dark : arrowIcon_light}
            alt=""
          />
          <p className={styles.text}>{unscopedT('view_all')}</p>
        </Link>
      </div>

      <ul className={styles.project_list}>
        {latestProjects.map((project) => (
          <li key={`${project.slug}-latest`}>
            <MiniProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
