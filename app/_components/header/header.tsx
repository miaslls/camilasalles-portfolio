'use client';

import styles from './header.module.css';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useDevice } from '@providers/device-provider';

import TopBar from './top-bar/top-bar';

const HomeImg = dynamic(() => import('./home-img/home-img'));
const MainMenu = dynamic(() => import('./main-menu/main-menu'));
const MobileMenu = dynamic(() => import('./mobile-menu/mobile-menu'));

export default function Header() {
  const isHomePage = usePathname().length === 3;
  const isMobile = useDevice() === 'mobile';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.container}>
      <div className="wrapper">
        <TopBar openMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
        {isHomePage && <HomeImg />}
      </div>

      {isMobile ? (
        <MobileMenu isMenuOpen={isMenuOpen} closeMenu={handleToggleMenu} />
      ) : (
        <MainMenu />
      )}
    </header>
  );
}
