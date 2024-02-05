'use client';

import { useScopedI18n } from '@/locales/client';
import { latestProjects } from '@data/projects';
import SectionTitle from '@components/SectionTitle';
import ViewAllLink from '@components/project/ViewAllLink';
import MiniProjectCard from '@components/project/MiniProjectCard';
import MegaphoneIcon from '@/app/_components/icons/MegaphoneIcon';

export default function LatestProjects() {
  const t = useScopedI18n('about.aside');

  return (
    <section className="aside_section">
      <SectionTitle title={t('latest_projects')} icon={<MegaphoneIcon />} />

      <ViewAllLink />

      <ul className="project_list">
        {latestProjects.map((project) => (
          <li key={`${project.slug}-latest`}>
            <MiniProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
