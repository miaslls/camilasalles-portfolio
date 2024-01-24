'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';
import SectionTitle from '@components/SectionTitle';

import handsIcon_light from '@icons/light/service-line.svg';
import handsIcon_dark from '@icons/dark/service-line.svg';

export default function CollaborationSection() {
  const t = useScopedI18n('about.main.collaboration');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="about_section">
      {/* <div className="wrapper"> */}
      <SectionTitle
        title={t('title')}
        icon={isDarkTheme ? handsIcon_light : handsIcon_dark}
      />
      {/* TODO: contact me! BUTTON 🪲 */}
      {/* </div> */}

      <p className="default">{t('text')}</p>
    </section>
  );
}
