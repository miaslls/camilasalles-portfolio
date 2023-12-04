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

export default function TopBar() {
  const isHomePage = usePathname().length === 3;
  const isMobile = useDevice() === 'mobile';

  return (
    <div className={`${styles.container} ${isHomePage ? styles.home : ''}`}>
      {!isHomePage && (
        <div className={styles.title}>
          <span>Camila Salles • development & design</span>
        </div>
      )}

      {isMobile ? (
        <button className={styles.mobile_menu_btn}>
          <Image src={menuIcon} alt="" width={24} height={24} />
        </button>
      ) : (
        <div className={styles.secondary_menu}>
          <LanguageNav />
          <ToggleThemeButton />
        </div>
      )}
    </div>
  );
}
