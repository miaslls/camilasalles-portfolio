'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';

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
        </ul>
      </nav>
    </header>
  );
}
