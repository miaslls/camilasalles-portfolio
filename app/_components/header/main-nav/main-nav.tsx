'use client';

import styles from './main-nav.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/locales/client';

export default function MainNav() {
  const pathname = usePathname();
  const t = useI18n();

  return (
    <nav className={styles.container}>
      <ul className={styles.links_list}>
        <li>
          <Link
            href="/"
            className={
              styles.nav_link +
              ' ' +
              (pathname.length === 3 ? styles.active_path : null)
            }
          >
            {t('home.title')}
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className={
              styles.nav_link +
              ' ' +
              (pathname.endsWith('projects') ? styles.active_path : null)
            }
          >
            {t('projects.title')}
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={
              styles.nav_link +
              ' ' +
              (pathname.endsWith('about') ? styles.active_path : null)
            }
          >
            {t('about.title')}
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={
              styles.nav_link +
              ' ' +
              (pathname.endsWith('contact') ? styles.active_path : null)
            }
          >
            {t('contact.title')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
