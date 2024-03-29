'use client';

import styles from './MobileMenu.module.css';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useDevice } from '@providers/DeviceContextProvider';
import { useMenu } from '@providers/MenuContextProvider';
import { useTheme } from '@providers/ThemeContextProvider';

import MainMenu from './MainMenu';
import LanguageNav from './LanguageNav';
import ToggleThemeButton from './ToggleThemeButton';
import CloseIcon from '@icons/CloseIcon';

import girlieImg from '@images/girlie.svg';
import pcImg_light from '@images/pc-light.svg';
import officeImg_light from '@images/office-light.svg';
import officeImg_dark from '@images/office-dark.svg';
import pcImg_dark from '@images/pc-dark.svg';
import phoneImg from '@images/phone.svg';

type OverlayProps = {
  children: React.ReactNode;
  isOpen: boolean;
  close(): void;
};

function Overlay({ children, isOpen, close }: OverlayProps) {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={() => close()}
    >
      {children}
    </div>
  );
}

export default function MobileMenu() {
  const { isMenuOpen, handleToggleMenu: closeMenu } = useMenu();

  const isMobile = useDevice() === 'mobile';

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const localizedPath = usePathname();
  const rawPath = localizedPath.length > 3 ? localizedPath.slice(3) : '/';

  const menuImages: Record<string, string> = {
    '/': isDarkTheme ? officeImg_dark : officeImg_light,
    '/projects': isDarkTheme ? pcImg_dark : pcImg_light,
    '/about': girlieImg,
    '/contact': phoneImg,
  };

  const menuImg = menuImages[rawPath] || girlieImg;

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) {
    e.stopPropagation();

    if (e.currentTarget instanceof HTMLButtonElement) {
      closeMenu();
    }
  }

  return (
    isMobile && (
      <Overlay isOpen={isMenuOpen} close={closeMenu}>
        <div
          className={`${styles.container} ${isDarkTheme ? styles.dark : ''}`}
          onClick={handleClick}
        >
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <button className={styles.close_btn} onClick={handleClick}>
                <CloseIcon />
              </button>

              <div className={styles.secondary_menu}>
                <LanguageNav />
                <ToggleThemeButton isIconVariable={isMenuOpen} />
              </div>
            </div>

            <div className={styles.menu}>
              <MainMenu closeMenu={closeMenu} />

              <Image
                className={`${styles.menu_img} ${
                  isDarkTheme ? styles.dark : ''
                }`}
                src={menuImg}
                alt=""
              />
            </div>
          </div>

          <p className={styles.legal}>
            © {new Date().getFullYear()} Camila Salles
          </p>
        </div>
      </Overlay>
    )
  );
}
