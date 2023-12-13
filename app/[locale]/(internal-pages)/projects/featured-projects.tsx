'use client';

import styles from './featured-projects.module.css';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';

import SectionTitle from '@components/section-title';
import MiniProjectCard from '@components/project/mini-project-card';

import starIcon_light from '@icons/light/star-line.svg';
import starIcon_dark from '@icons/dark/star-line.svg';
import mialogImg from '@images/projects/mialog.jpg';
import miamoodImg from '@images/projects/miamood.jpg';

export default function FeaturedProjects() {
  const t = useScopedI18n('projects.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section">
      <SectionTitle
        title={t('featured_projects')}
        icon={isDarkTheme ? starIcon_light : starIcon_dark}
      />

      <div className={styles.project_list}>
        <MiniProjectCard
          img={mialogImg}
          url={'https://github.com/miaslls/MiaLog#readme'}
        />

        <MiniProjectCard
          img={miamoodImg}
          url={'https://github.com/miaslls/MiaMood#readme'}
        />
      </div>
    </section>
  );
}
