'use client';

import styles from './Header.module.css';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useDevice } from '@/app/_providers/DeviceContextProvider';

import TopBar from './TopBar';

const HomeImg = dynamic(() => import('./HomeImg'));
const MainMenu = dynamic(() => import('@/app/_components/menu/MainMenu'));

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
