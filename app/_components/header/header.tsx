'use client';

import styles from './header.module.css';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// import SetTheme from './set-theme/set-theme';
import LangNav from './lang-nav/lang-nav';
import MainNav from './main-nav/main-nav';

import homeImgLight from '@/public/images/HOME-light.jpg';
// import homeImgDark from '@/public/images/HOME-dark.jpg';

const SetTheme = dynamic(
  () => import('@components/header/set-theme/set-theme'),
  {
    ssr: false,
  },
);

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname.length === 3;

  return (
    <header className={styles.container}>
      <div
        className={styles.top_nav + ' ' + (isHome ? styles.top_nav_home : null)}
      >
        <LangNav />
        <SetTheme />
      </div>

      {isHome && (
        <div className={styles.home_img_container}>
          <Image className={styles.home_img} src={homeImgLight} alt="" />
        </div>
      )}

      <MainNav />
    </header>
  );
}
