import styles from './main-menu.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/locales/client';

export default function MainMenu() {
  const t = useI18n();

  const localizedPath = usePathname();
  const rawPath = localizedPath.length > 3 ? localizedPath.slice(3) : '/';

  const menuItems = [
    { href: '/', label: t('home.title') },
    { href: '/projects', label: t('projects.title') },
    { href: '/about', label: t('about.title') },
    { href: '/contact', label: t('contact.title') },
  ];

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
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
