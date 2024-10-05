'use client';

import styles from './FeaturedProjects.module.css';

import { useScopedI18n } from '@/locales/client';
import { useDevice } from '@providers/DeviceContextProvider';
import { featuredProjects } from '@data/projects';
import SectionTitle from '@components/SectionTitle';
import SubtitleLink from '@components/SubtitleLink';
import ProjectCard from '@components/project/ProjectCard';
import StarIcon from '@icons/StarIcon';
import { UnavailablePreviewNotice } from '@/app/_components/project/UnavailablePreviewNotice';

export default function FeaturedProjects() {
  const t = useScopedI18n('projects.main');
  const unscopedT = useScopedI18n('unscoped');
  const isNotDesktop = useDevice() !== 'desktop';

  return (
    <section className={styles.projects}>
      <SectionTitle title={t('featured_projects')} icon={<StarIcon />} />

      {isNotDesktop && (
        <SubtitleLink
          href="/projects#all_projects"
          text={unscopedT('view_all')}
        />
      )}

      <UnavailablePreviewNotice />

      <div className={styles.project_grid}>
        {featuredProjects.map((project) => (
          <ProjectCard {...project} key={`featured-${project.slug}`} />
        ))}
      </div>
    </section>
  );
}
