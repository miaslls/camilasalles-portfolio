'use client';

import { useScopedI18n } from '@/locales/client';
import SectionTitle from '@components/SectionTitle';
import SubtitleLink from '@components/SubtitleLink';
import HandsIcon from '@icons/ServiceIcon';

export default function CollaborationSection() {
  const t = useScopedI18n('about.main.collaboration');

  return (
    <section className="about_section">
      <div className="wrapper">
        <SectionTitle title={t('title')} icon={<HandsIcon />} />
        <SubtitleLink href="contact" text={t('contact_link')} />
        <p className="default">{t('text')}</p>
      </div>
    </section>
  );
}
