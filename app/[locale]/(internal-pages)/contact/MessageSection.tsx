'use client';

import styles from './MessageSection.module.css';

import { useScopedI18n } from '@/locales/client';
import { useMessageForm } from './useMessageForm';
import MessageForm from './MessageForm';
import SectionTitle from '@components/SectionTitle';
import MailIcon from '@/app/_components/icons/MailSendIcon';

export default function MessageSection() {
  const t = useScopedI18n('contact.aside');

  const [formState, formHandlers] = useMessageForm();

  return (
    <section className="aside_section">
      <SectionTitle title={t('message')} icon={<MailIcon />} />

      <p className={styles.required_notice}>* {t('form.required')}</p>

      <MessageForm formState={formState} {...formHandlers} />
    </section>
  );
}
