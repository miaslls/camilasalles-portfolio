import styles from './language-nav.module.css';

import { usePathname } from 'next/navigation';

export default function LanguageNav() {
  const localizedPath = usePathname();

  const rawPath = localizedPath.length > 3 ? localizedPath.slice(3) : '/';

  const currentLocale =
    localizedPath.length >= 3 ? localizedPath.slice(1, 3) : '';

  const availableLocales = ['en', 'pt'];

  return (
    <nav>
      <ul className={styles.list}>
        {availableLocales.map((locale) => (
          <li key={locale}>
            <a
              href={`/${locale}${rawPath}`}
              className={`${styles.link} ${
                currentLocale === locale ? styles.active : ''
              }`}
            >
              {locale}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
