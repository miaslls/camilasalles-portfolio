'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';

import mailIcon_light from '@icons/light/mail-send-line.svg';
import mailIcon_dark from '@icons/dark/mail-send-line.svg';

export default function MessageMe() {
  const t = useScopedI18n('contact.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section">
      <SectionTitle
        title={t('message')}
        icon={isDarkTheme ? mailIcon_light : mailIcon_dark}
      />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quisquam
        temporibus fuga beatae quos corrupti, consectetur ipsum quaerat facilis
        error ratione, dolorum iste aut velit ipsam, aliquid repellat earum
        cumque?
      </p>
    </section>
  );
}
