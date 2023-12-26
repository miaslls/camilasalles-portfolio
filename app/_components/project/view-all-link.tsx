'use client';

import styles from './view-all-link.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import { useDevice } from '@providers/device-provider';

import arrowIcon_light from '@icons/light-accent-01/arrow-right-double-line.svg';
import arrowIcon_dark from '@icons/dark-accent-01/arrow-right-double-line.svg';

export default function ViewAllLink() {
  const t = useScopedI18n('unscoped');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const isNotDesktop = useDevice() !== 'desktop';

  return (
    <Link
      className={styles.link}
      href={isNotDesktop ? '/projects#all_projects' : '/projects'}
    >
      <Image
        className={styles.icon}
        src={isDarkTheme ? arrowIcon_dark : arrowIcon_light}
        alt=""
      />
      <p className={styles.text}>{t('view_all')}</p>
    </Link>
  );
}
