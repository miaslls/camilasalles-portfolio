import styles from './top-bar.module.css';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useDevice } from '@providers/device-provider';

import menuIcon from '@/public/icons/fff3e7/menu-line.svg';

const LanguageNav = dynamic(
  () => import('@components/header/language-nav/language-nav'),
);
const ToggleThemeButton = dynamic(
  () => import('@components/header/toggle-theme-button/toggle-theme-button'),
);

export type TopBarProps = {
  isMenuOpen: boolean;
  openMenu(): void;
};

export default function TopBar({ isMenuOpen, openMenu }: TopBarProps) {
  const isHomePage = usePathname().length === 3;
  const isMobile = useDevice() === 'mobile';

  return (
    <div className={`${styles.container} ${isHomePage ? styles.home : ''}`}>
      {!isHomePage && (
        <p className={styles.title}>Camila Salles • development & design</p>
      )}

      {isMobile ? (
        <button className={styles.mobile_menu_btn} onClick={openMenu}>
          <Image src={menuIcon} alt="" width={24} height={24} />
        </button>
      ) : (
        <div className={styles.secondary_menu}>
          <LanguageNav />
          <ToggleThemeButton isIconVariable={isMenuOpen} />
        </div>
      )}
    </div>
  );
}
