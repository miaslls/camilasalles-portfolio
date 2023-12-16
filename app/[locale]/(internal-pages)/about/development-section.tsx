'use client';

import styles from './development-section.module.css';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';

import codeIcon_light from '@icons/light/code-s-slash-line.svg';
import codeIcon_dark from '@icons/dark/code-s-slash-line.svg';

export default function DevelopmentSection() {
  const t = useScopedI18n('about.main');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const tags = [
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
  ];

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <SectionTitle
          title={t('development')}
          icon={isDarkTheme ? codeIcon_light : codeIcon_dark}
        />

        <p className="default">
          Curabitur condimentum elementum venenatis. Mauris iaculis magna
          viverra, molestie turpis non, volutpat lorem. Nulla rhoncus diam sem.
          Nam justo eros, cursus id urna vel, sagittis gravida sapien.
          Pellentesque urna justo, auctor ultrices ullamcorper vel, rutrum sed
          dolor. Fusce volutpat urna nisl, vitae lobortis urna dapibus eget. Ut
          congue metus ac odio semper, in semper felis dignissim. Sed in diam
          non dolor vestibulum rhoncus quis at mauris.
        </p>
      </div>

      <ul className={styles.tag_list}>
        {tags.map((tag) => (
          <li key={`dev-tag-${tag}`}>
            <p className="tag">{tag}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
