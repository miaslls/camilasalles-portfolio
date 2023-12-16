'use client';

import styles from './featured-projects_home.module.css';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';

import SectionTitle from '@components/section-title';
import ProjectCard from '@components/project/project-card';
import { featuredProjects } from '@data/projects';

import starIcon_light from '@icons/light/star-line.svg';
import starIcon_dark from '@icons/dark/star-line.svg';

export default function FeaturedProjects_Home() {
  const t = useScopedI18n('home');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className={`home_section ${styles.projects}`}>
      <SectionTitle
        title={t('featured_projects')}
        icon={isDarkTheme ? starIcon_light : starIcon_dark}
      />

      <div className={styles.project_grid}>
        {featuredProjects.map((project) => (
          <ProjectCard {...project} key={`home-featured-${project.slug}`} />
        ))}
      </div>
    </section>
  );
}
