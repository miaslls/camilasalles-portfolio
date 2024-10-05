'use client';

import styles from './FeaturedProjects_home.module.css';

import { useI18n, useScopedI18n } from '@/locales/client';
import { featuredProjects } from '@data/projects';

import SectionTitle from '@components/SectionTitle';
import ProjectCard from '@components/project/ProjectCard';
import StarIcon from '@icons/StarIcon';
import { UnavailablePreviewNotice } from '../_components/project/UnavailablePreviewNotice';

export default function FeaturedProjects_Home() {
  const t = useScopedI18n('home');
  const unscopedT = useI18n();

  return (
    <section className={`home_section ${styles.projects}`}>
      <SectionTitle title={t('featured_projects')} icon={<StarIcon />} />

      <UnavailablePreviewNotice />

      <div className={styles.project_grid}>
        {featuredProjects.map((project) => (
          <ProjectCard {...project} key={`home-featured-${project.slug}`} />
        ))}
      </div>
    </section>
  );
}
