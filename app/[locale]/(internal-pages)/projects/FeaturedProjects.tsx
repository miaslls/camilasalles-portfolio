'use client';

import styles from './FeaturedProjects.module.css';

import { useScopedI18n } from '@/locales/client';
import { useDevice } from '@providers/DeviceContextProvider';
import { featuredProjects } from '@data/projects';
import SectionTitle from '@components/SectionTitle';
import ViewAllLink from '@components/project/ViewAllLink';
import ProjectCard from '@components/project/ProjectCard';
import StarIcon from '@icons/StarIcon';

export default function FeaturedProjects() {
  const t = useScopedI18n('projects.main');
  const isNotDesktop = useDevice() !== 'desktop';

  return (
    <section className={styles.projects}>
      <SectionTitle title={t('featured_projects')} icon={<StarIcon />} />

      {isNotDesktop && <ViewAllLink />}

      <div className={styles.project_grid}>
        {featuredProjects.map((project) => (
          <ProjectCard {...project} key={`featured-${project.slug}`} />
        ))}
      </div>
    </section>
  );
}
