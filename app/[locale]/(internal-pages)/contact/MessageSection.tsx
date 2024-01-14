'use client';

import styles from './MessageSection.module.css';

import { useTheme } from '@providers/ThemeContextProvider';
import { useScopedI18n } from '@/locales/client';
import { useMessageForm } from './useMessageForm';
import SectionTitle from '@components/SectionTitle';
import MessageForm from './MessageForm';

import mailIcon_light from '@icons/light/mail-send-line.svg';
import mailIcon_dark from '@icons/dark/mail-send-line.svg';

export default function MessageSection() {
  const t = useScopedI18n('contact.aside');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const [formState, formHandlers] = useMessageForm();

  return (
    <section className="aside_section">
      <SectionTitle
        title={t('message')}
        icon={isDarkTheme ? mailIcon_light : mailIcon_dark}
      />

      <p className={styles.required_notice}>* {t('form.required')}</p>

      <MessageForm formState={formState} {...formHandlers} />
    </section>
  );
}
