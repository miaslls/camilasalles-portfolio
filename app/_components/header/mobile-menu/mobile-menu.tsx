'use client';

import styles from './mobile-menu.module.css';

import Image from 'next/image';
import { useTheme } from '@providers/theme-provider';
import { usePathname } from 'next/navigation';

import MainMenu from '../main-menu/main-menu';
import LanguageNav from '../language-nav/language-nav';
import ToggleThemeButton from '../toggle-theme-button/toggle-theme-button';

import closeIcon_light from '@/public/icons/light/close-line.svg';
import closeIcon_dark from '@/public/icons/dark/close-line.svg';
import girlieImg from '@/public/images/girlie.svg';
import pcImg_light from '@/public/images/pc-light.svg';
import officeImg_light from '@/public/images/office-light.svg';
import officeImg_dark from '@/public/images/office-dark.svg';
import pcImg_dark from '@/public/images/pc-dark.svg';
import phoneImg from '@/public/images/phone.svg';

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

type MobileMenuProps = {
  isMenuOpen: boolean;
  closeMenu(): void;
};

export default function MobileMenu({ isMenuOpen, closeMenu }: MobileMenuProps) {
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
    <Overlay isOpen={isMenuOpen} close={closeMenu}>
      <div className={styles.container} onClick={handleClick}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <button className={styles.close_btn} onClick={handleClick}>
              <Image
                src={isDarkTheme ? closeIcon_light : closeIcon_dark}
                alt=""
                width={32}
                height={32}
              />
            </button>

            <div className={styles.secondary_menu}>
              <LanguageNav />
              <ToggleThemeButton isIconVariable={isMenuOpen} />
            </div>
          </div>

          <div className={styles.menu}>
            <MainMenu closeMenu={closeMenu} />

            <div className={styles.img_container}>
              <Image
                className={`${styles.menu_img} ${
                  isDarkTheme ? styles.dark_img : ''
                }`}
                src={menuImg}
                alt=""
              />
            </div>
          </div>
        </div>

        <p className={styles.legal}>
          © {new Date().getFullYear()} Camila Salles
        </p>
      </div>
    </Overlay>
  );
}
