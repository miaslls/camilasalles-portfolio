import styles from './TopBar.module.css';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useScopedI18n } from '@/locales/client';
import { useDevice } from '@providers/DeviceContextProvider';
import { useMenu } from '@providers/MenuContextProvider';

import MenuIcon from '../icons/MenuIcon';

const LanguageNav = dynamic(() => import('@components/menu/LanguageNav'));

const ToggleThemeButton = dynamic(
  () => import('@components/menu/ToggleThemeButton'),
  { ssr: false }
);

export default function TopBar() {
  const t = useScopedI18n('unscoped');

  const isHomePage = usePathname().length === 3;
  const isMobile = useDevice() === 'mobile';

  const { isMenuOpen, handleToggleMenu: openMenu } = useMenu();

  return (
    <div className={`${styles.container} ${isHomePage ? styles.home : ''}`}>
      {!isHomePage && (
        <p className={`${styles.title} clippable`}>
          <span>Camila Salles</span> &nbsp; {t('dev_and_design')}
        </p>
      )}

      {isMobile ? (
        <button className={styles.mobile_menu_btn} onClick={openMenu}>
          <div className={styles.mobile_menu_icon}>
            <MenuIcon />
          </div>
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
