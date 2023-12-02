'use client';

import styles from './header.module.css';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@providers/theme-provider';
import { useDevice } from '@providers/device-provider';

import ToggleThemeButton from './toggle-theme-button/toggle-theme-button';
import LangNav from './lang-nav/lang-nav';
import MainNav from './main-nav/main-nav';

import homeImgLight from '@/public/images/HOME-light.jpg';
import homeImgDark from '@/public/images/HOME-dark.jpg';
import menuIcon from '@/public/icons/fff3e7/menu-line.svg';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname.length === 3;

  const { theme } = useTheme();
  const device = useDevice();

  const homeTitle = 'Camila Salles';
  const homeSubtitle = 'development & design';
  const homeDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nulla in nulla dapibus mattis et eget erat. ';

  return (
    <header className={styles.container}>
      <div
        className={styles.top_nav + ' ' + (isHome ? styles.top_nav_home : null)}
      >
        {device !== 'mobile' && <LangNav />}
        {device !== 'mobile' && <ToggleThemeButton />}

        <div className={styles.mobile_nav_title}>
          {device === 'mobile' &&
            !isHome &&
            'Camila Salles • development & design'}
        </div>

        {device === 'mobile' && (
          <div className={styles.mobile_menu_icon}>
            <Image src={menuIcon} alt="" width={24} height={24} />
          </div>
        )}
      </div>

      {isHome && (
        <>
          <div className={styles.home_img_container}>
            <Image
              className={styles.home_img}
              src={theme === 'dark' ? homeImgDark : homeImgLight}
              alt=""
            />
          </div>

          <div className={styles.home_title_container}>
            <hgroup>
              <h1 className={styles.home_title}>{homeTitle}</h1>
              <p className={styles.home_subtitle}>{homeSubtitle}</p>
            </hgroup>

            {device !== 'mobile' && (
              <p className={styles.home_description}>{homeDescription}</p>
            )}
          </div>
        </>
      )}

      {device !== 'mobile' && <MainNav />}
    </header>
  );
}
