'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';
import TagList from '@components/tag-list';

import codeIcon_light from '@icons/light/code-s-slash-line.svg';
import codeIcon_dark from '@icons/dark/code-s-slash-line.svg';

export default function DevelopmentSection() {
  const t = useScopedI18n('about.main.development');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const tags = ['React', 'Next.js', 'NestJS', 'TypeScript'];

  return (
    <section className="about_section">
      <div className="wrapper">
        <SectionTitle
          title={t('title')}
          icon={isDarkTheme ? codeIcon_light : codeIcon_dark}
        />

        <TagList tags={tags} identifier="development" />
      </div>

      <p className="default">{t('text')}</p>
    </section>
  );
}
