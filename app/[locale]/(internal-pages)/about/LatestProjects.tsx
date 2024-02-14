'use client';

import { useScopedI18n } from '@/locales/client';
import { useDevice } from '@providers/DeviceContextProvider';
import { latestProjects } from '@data/projects';
import SectionTitle from '@components/SectionTitle';
import SubtitleLink from '@components/SubtitleLink';
import MiniProjectCard from '@components/project/MiniProjectCard';
import MegaphoneIcon from '@icons/MegaphoneIcon';

export default function LatestProjects() {
  const t = useScopedI18n('about.aside');
  const unscopedT = useScopedI18n('unscoped');
  const isNotDesktop = useDevice() !== 'desktop';

  return (
    <section className="aside_section">
      <SectionTitle title={t('latest_projects')} icon={<MegaphoneIcon />} />
      <SubtitleLink
        href={isNotDesktop ? '/projects#all_projects' : '/projects'}
        text={unscopedT('view_all')}
      />

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
