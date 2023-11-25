import styles from './lang-nav.module.css';
import { usePathname } from 'next/navigation';

export default function LangNav() {
  const localizedPath = usePathname();

  const rawPath = localizedPath.slice(3) || '/';
  const currentLocale = localizedPath.slice(1, 3);

  return (
    <nav>
      <ul>
        <li>
          <a
            href={'/en' + rawPath}
            className={
              styles.locale_link +
              ' ' +
              (currentLocale === 'en' ? styles.active_locale : null)
            }
          >
            en
          </a>
        </li>
        <li>
          <a
            href={'/pt' + rawPath}
            className={
              styles.locale_link +
              ' ' +
              (currentLocale === 'pt' ? styles.active_locale : null)
            }
          >
            pt
          </a>
        </li>
      </ul>
    </nav>
  );
}
