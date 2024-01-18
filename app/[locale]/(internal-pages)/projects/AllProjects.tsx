'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';
import { projects } from '@data/projects';
import SectionTitle from '@components/SectionTitle';
import MiniProjectCard from '@components/project/MiniProjectCard';

import computerIcon_light from '@icons/light/computer-line.svg';
import computerIcon_dark from '@icons/dark/computer-line.svg';

export default function AllProjects() {
  const t = useScopedI18n('projects.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section" id="all_projects">
      <SectionTitle
        title={t('all_projects')}
        icon={isDarkTheme ? computerIcon_light : computerIcon_dark}
      />

      <ul className="project_list">
        {projects.map((project) => (
          <li key={`project-${project.slug}`}>
            <MiniProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
