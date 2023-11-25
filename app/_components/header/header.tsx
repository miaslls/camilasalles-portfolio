'use client';

import styles from './header.module.css';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import SetTheme from './set-theme';
import MainNav from './main-nav/main-nav';

export default function Header() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              className={
                styles.locale_button +
                ' ' +
                (currentLocale === 'en' ? styles.active_locale : null)
              }
              type="button"
              onClick={() => changeLocale('en')}
            >
              en
            </button>
          </li>

          <li>
            <button
              className={
                styles.locale_button +
                ' ' +
                (currentLocale === 'pt' ? styles.active_locale : null)
              }
              type="button"
              onClick={() => changeLocale('pt')}
            >
              pt
            </button>
          </li>
        </ul>
        <SetTheme />
      </nav>

      <MainNav />
    </header>
  );
}
