'use client';

import styles from './MainMenu.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/locales/client';

export type MainMenuProps = {
  closeMenu?(): void;
};

export default function MainMenu({ closeMenu }: MainMenuProps) {
  const t = useI18n();

  const localizedPath = usePathname();
  const rawPath = localizedPath.length > 3 ? localizedPath.slice(3) : '/';

  const menuItems = [
    { href: '/', label: t('home.title') },
    { href: '/projects', label: t('projects.title') },
    { href: '/about', label: t('about.title') },
    { href: '/contact', label: t('contact.title') },
  ];

  const handleLinkClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={handleLinkClick}
              className={`${styles.link} ${
                rawPath === item.href ? styles.active : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
