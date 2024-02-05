'use client';

import { useScopedI18n } from '@/locales/client';
import { projects } from '@data/projects';
import SectionTitle from '@components/SectionTitle';
import MiniProjectCard from '@components/project/MiniProjectCard';
import ComputerIcon from '@icons/ComputerIcon';

export default function AllProjects() {
  const t = useScopedI18n('projects.aside');

  return (
    <section className="aside_section" id="all_projects">
      <SectionTitle title={t('all_projects')} icon={<ComputerIcon />} />

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
