'use client';

import styles from './LanguageNav.module.css';
import { usePathname } from 'next/navigation';
import { useScopedI18n } from '@/locales/client';

export default function LanguageNav() {
  const t = useScopedI18n('tooltip.header');

  const localizedPath = usePathname();

  const rawPath = localizedPath.length > 3 ? localizedPath.slice(3) : '/';

  const currentLocale =
    localizedPath.length >= 3 ? localizedPath.slice(1, 3) : '';

  const availableLocales = [
    { abbr: 'en', lang: 'English' },
    { abbr: 'pt', lang: 'Português' },
  ];

  return (
    <nav>
      <ul className={styles.list}>
        {availableLocales.map((locale) => (
          <li key={`locale-${locale.abbr}`}>
            <a
              href={`/${locale.abbr}${rawPath}`}
              className={`${styles.link} ${
                currentLocale === locale.abbr ? styles.active : ''
              }`}
              data-tooltip-id="header"
              data-tooltip-content={`${t('language')} ${locale.lang}${
                currentLocale === locale.abbr ? t('current') : ''
              }`}
            >
              {locale.abbr}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
