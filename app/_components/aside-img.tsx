'use client';

import styles from './aside-img.module.css';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useDevice } from '@providers/device-provider';
import { useTheme } from '@providers/theme-provider';

import girlieImg from '@images/girlie.svg';
import pcImg_light from '@images/pc-light.svg';
import pcImg_dark from '@images/pc-dark.svg';
import phoneImg from '@images/phone.svg';

export default function AsideImg() {
  const isNotMobile = useDevice() !== 'mobile';

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const localizedPath = usePathname();
  const rawPath = localizedPath.length > 3 ? localizedPath.slice(3) : '/';

  const asideImages: Record<string, string> = {
    '/projects': isDarkTheme ? pcImg_dark : pcImg_light,
    '/about': girlieImg,
    '/contact': phoneImg,
  };

  const asideImg = asideImages[rawPath] || girlieImg;

  return isNotMobile ? (
    <div className={styles.img_container}>
      <Image
        className={`${styles.img} ${isDarkTheme ? styles.dark_img : ''}`}
        src={asideImg}
        fetchPriority="high"
        alt=""
      />
    </div>
  ) : null;
}
