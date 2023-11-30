'use client';

import styles from './header.module.css';

import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/_providers/theme-provider';
import Image from 'next/image';

import ToggleThemeButton from './toggle-theme-button/toggle-theme-button';
import LangNav from './lang-nav/lang-nav';
import MainNav from './main-nav/main-nav';

import homeImgLight from '@/public/images/HOME-light.jpg';
import homeImgDark from '@/public/images/HOME-dark.jpg';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname.length === 3;

  const { theme } = useTheme();

  return (
    <header className={styles.container}>
      <div
        className={styles.top_nav + ' ' + (isHome ? styles.top_nav_home : null)}
      >
        <LangNav />
        <ToggleThemeButton />
      </div>

      {isHome && (
        <div className={styles.home_img_container}>
          <Image
            className={styles.home_img}
            src={theme === 'dark' ? homeImgDark : homeImgLight}
            alt=""
          />
        </div>
      )}

      <MainNav />
    </header>
  );
}
