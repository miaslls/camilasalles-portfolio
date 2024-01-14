'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';

import SectionTitle from '@components/SectionTitle';
import ViewAllLink from '@components/project/ViewAllLink';
import MiniProjectCard from '@components/project/MiniProjectCard';
import { latestProjects } from '@data/projects';

import megaphoneIcon_light from '@icons/light/megaphone-line.svg';
import megaphoneIcon_dark from '@icons/dark/megaphone-line.svg';

export default function LatestProjects() {
  const t = useScopedI18n('about.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section">
      <SectionTitle
        title={t('latest_projects')}
        icon={isDarkTheme ? megaphoneIcon_light : megaphoneIcon_dark}
      />

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
