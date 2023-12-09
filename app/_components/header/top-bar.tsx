import styles from './top-bar.module.css';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useDevice } from '@providers/device-provider';
import { useMenu } from '@providers/menu-provider';

import menuIcon from '@icons/light/menu-line.svg';

const LanguageNav = dynamic(() => import('@components/menu/language-nav'));

const ToggleThemeButton = dynamic(
  () => import('@components/menu/toggle-theme-button'),
  { ssr: false }
);

export default function TopBar() {
  const isHomePage = usePathname().length === 3;
  const isMobile = useDevice() === 'mobile';

  const { isMenuOpen, handleToggleMenu: openMenu } = useMenu();

  return (
    <div className={`${styles.container} ${isHomePage ? styles.home : ''}`}>
      {!isHomePage && (
        <p className={styles.title}>
          <span>Camila Salles</span> &nbsp; development & design
        </p>
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
