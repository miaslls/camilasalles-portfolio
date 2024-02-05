'use client';

import { useScopedI18n } from '@/locales/client';
import SectionTitle from '@components/SectionTitle';
import TagList from '@components/TagList';
import CodeIcon from '@/app/_components/icons/CodeSSlashIcon';

export default function DevelopmentSection() {
  const t = useScopedI18n('about.main.development');

  const tags = ['React', 'Next.js', 'NestJS', 'TypeScript'];

  return (
    <section className="about_section">
      <div className="wrapper">
        <SectionTitle title={t('title')} icon={<CodeIcon />} />
        <TagList tags={tags} identifier="development" />
      </div>

      <p className="default">{t('text')}</p>
    </section>
  );
}
