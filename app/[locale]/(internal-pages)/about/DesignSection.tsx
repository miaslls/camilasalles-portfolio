'use client';

import { useScopedI18n } from '@/locales/client';
import SectionTitle from '@components/SectionTitle';
import TagList from '@components/TagList';
import DesignIcon from '@icons/PencilRulerIcon';

export default function DesignSection() {
  const t = useScopedI18n('about.main.design');

  const tags = ['Figma', 'Photoshop', 'Illustrator'];

  return (
    <section className="about_section">
      <div className="wrapper">
        <SectionTitle title={t('title')} icon={<DesignIcon />} />
        <TagList tags={tags} identifier="design" />
      </div>

      <p className="default">{t('text')}</p>
    </section>
  );
}
