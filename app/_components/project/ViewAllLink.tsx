'use client';

import styles from './ViewAllLink.module.css';

import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';
import { useDevice } from '@providers/DeviceContextProvider';
import ArrowIcon from '../icons/ArrowRightDouble';
import arrowIcon_light from '@icons/light-accent-01/arrow-right-double-line.svg';
import arrowIcon_dark from '@icons/dark-accent-01/arrow-right-double-line.svg';

export default function ViewAllLink() {
  const t = useScopedI18n('unscoped');
  const isNotDesktop = useDevice() !== 'desktop';

  return (
    <Link
      className={styles.link}
      href={isNotDesktop ? '/projects#all_projects' : '/projects'}
    >
      <div className={styles.icon}>
        <ArrowIcon />
      </div>
      <p className={styles.text}>{t('view_all')}</p>
    </Link>
  );
}
