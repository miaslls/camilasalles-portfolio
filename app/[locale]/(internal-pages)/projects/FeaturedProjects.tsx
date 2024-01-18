'use client';

import styles from './FeaturedProjects.module.css';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';
import { useDevice } from '@providers/DeviceContextProvider';
import { featuredProjects } from '@data/projects';
import SectionTitle from '@components/SectionTitle';
import ViewAllLink from '@components/project/ViewAllLink';
import ProjectCard from '@components/project/ProjectCard';

import starIcon_light from '@icons/light/star-line.svg';
import starIcon_dark from '@icons/dark/star-line.svg';

export default function FeaturedProjects() {
  const t = useScopedI18n('projects.main');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const isNotDesktop = useDevice() !== 'desktop';

  return (
    <section className={styles.projects}>
      <SectionTitle
        title={t('featured_projects')}
        icon={isDarkTheme ? starIcon_light : starIcon_dark}
      />

      {isNotDesktop && <ViewAllLink />}

      <div className={styles.project_grid}>
        {featuredProjects.map((project) => (
          <ProjectCard {...project} key={`featured-${project.slug}`} />
        ))}
      </div>
    </section>
  );
}
