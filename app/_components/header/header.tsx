'use client';

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
            <button type="button" onClick={() => changeLocale('en')}>
              en
            </button>
          </li>

          <li>
            <button type="button" onClick={() => changeLocale('pt')}>
              pt
            </button>
          </li>

          <li>
            <SetTheme />
          </li>
        </ul>
      </nav>
    </header>
  );
}
