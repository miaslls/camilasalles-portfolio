'use client';

import styles from './FeaturedProjects_home.module.css';

import { useScopedI18n } from '@/locales/client';
import { featuredProjects } from '@data/projects';

import SectionTitle from '@components/SectionTitle';
import ProjectCard from '@components/project/ProjectCard';
import StarIcon from '../_components/icons/StarIcon';

export default function FeaturedProjects_Home() {
  const t = useScopedI18n('home');

  return (
    <section className={`home_section ${styles.projects}`}>
      <SectionTitle title={t('featured_projects')} icon={<StarIcon />} />

      <div className={styles.project_grid}>
        {featuredProjects.map((project) => (
          <ProjectCard {...project} key={`home-featured-${project.slug}`} />
        ))}
      </div>
    </section>
  );
}
