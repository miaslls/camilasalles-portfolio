'use client';

import styles from './HomeImg.module.css';

import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';

import img_light from '@images/home-light.svg';
import img_dark from '@images/home-dark.svg';

export default function HomeImg() {
  const t = useScopedI18n('unscoped');

  const { theme } = useTheme();
  const title = 'Camila Salles';
  const subtitle = t('dev_and_design');

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          className={styles.img}
          src={theme === 'dark' ? img_dark : img_light}
          priority
          alt=""
        />
      </div>

      <div className={styles.text_container}>
        <hgroup>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </hgroup>
      </div>
    </div>
  );
}
