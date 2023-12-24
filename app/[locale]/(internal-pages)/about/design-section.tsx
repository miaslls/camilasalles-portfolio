'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';
import TagList from '@components/tag-list';

import designIcon_light from '@icons/light/pencil-ruler-2-line.svg';
import designIcon_dark from '@icons/dark/pencil-ruler-2-line.svg';

export default function DesignSection() {
  const t = useScopedI18n('about.main.design');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const tags = ['Figma', 'Photoshop', 'Illustrator'];

  return (
    <section className="about_section">
      <div className="wrapper">
        <SectionTitle
          title={t('title')}
          icon={isDarkTheme ? designIcon_light : designIcon_dark}
        />

        <TagList tags={tags} identifier="design" />
      </div>

      <p className="default">{t('text')}</p>
    </section>
  );
}
