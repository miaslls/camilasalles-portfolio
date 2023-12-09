'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';

import megaphoneIcon_light from '@icons/light/megaphone-line.svg';
import megaphoneIcon_dark from '@icons/dark/megaphone-line.svg';

export default function LatestProjects() {
  const t = useScopedI18n('about.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section">
      <SectionTitle
        title={t('latest_projects')}
        icon={isDarkTheme ? megaphoneIcon_light : megaphoneIcon_dark}
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
