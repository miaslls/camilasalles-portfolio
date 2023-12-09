'use client';

import styles from './featured-projects.module.css';

import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';

import starIcon_light from '@icons/light/star-line.svg';
import starIcon_dark from '@icons/dark/star-line.svg';

export default function FeaturedProjects() {
  const t = useScopedI18n('projects.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section">
      <div className={styles.title_container}>
        <Image
          className={styles.icon}
          src={isDarkTheme ? starIcon_light : starIcon_dark}
          alt=""
        />
        <h2 className={styles.title}>{t('featured_projects')}</h2>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quisquam
        temporibus fuga beatae quos corrupti, consectetur ipsum quaerat facilis
        error ratione, dolorum iste aut velit ipsam, aliquid repellat earum
        cumque?
      </p>
    </section>
  );
}
