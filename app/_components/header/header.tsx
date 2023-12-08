'use client';

import styles from './header.module.css';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import { useDevice } from '@providers/device-provider';
import TopBar from './top-bar/top-bar';

const HomeImg = dynamic(() => import('@components/header/home-img/home-img'));
const MainMenu = dynamic(() => import('@components/menu/main-menu/main-menu'));

export default function Header() {
  const isHomePage = usePathname().length === 3;
  const isNotMobile = useDevice() !== 'mobile';

  return (
    <header className={styles.container}>
      <div className="wrapper">
        <TopBar />

        {isHomePage && <HomeImg />}
      </div>

      {isNotMobile && <MainMenu />}
    </header>
  );
}
