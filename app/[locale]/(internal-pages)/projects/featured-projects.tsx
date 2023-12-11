'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';

import starIcon_light from '@icons/light/star-line.svg';
import starIcon_dark from '@icons/dark/star-line.svg';

export default function FeaturedProjects() {
  const t = useScopedI18n('projects.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section">
      <SectionTitle
        title={t('featured_projects')}
        icon={isDarkTheme ? starIcon_light : starIcon_dark}
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