import styles from './TopBar.module.css';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useDevice } from '@providers/DeviceContextProvider';
import { useMenu } from '@providers/MenuContextProvider';

import menuIcon from '@icons/light/menu-line.svg';

const LanguageNav = dynamic(() => import('@components/menu/LanguageNav'));

const ToggleThemeButton = dynamic(
  () => import('@components/menu/ToggleThemeButton'),
  { ssr: false }
);

export default function TopBar() {
  const isHomePage = usePathname().length === 3;
  const isMobile = useDevice() === 'mobile';

  const { isMenuOpen, handleToggleMenu: openMenu } = useMenu();

  return (
    <div className={`${styles.container} ${isHomePage ? styles.home : ''}`}>
      {!isHomePage && (
        <p className={`${styles.title} clippable`}>
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
