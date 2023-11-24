'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/locales/client';

export default function MainNav() {
  const pathname = usePathname();
  const t = useI18n();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">{t('home')}</Link>
        </li>

        <li>
          <Link href="/projects">{t('projects')}</Link>
        </li>

        <li>
          <Link href="/about">{t('about')}</Link>
        </li>

        <li>
          <Link href="/contact">{t('contact')}</Link>
        </li>
      </ul>
    </nav>
  );
}
