'use client';

import styles from './header.module.css';

import dynamic from 'next/dynamic';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

const SetTheme = dynamic(() => import('./set-theme'));

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
    </header>
  );
}
