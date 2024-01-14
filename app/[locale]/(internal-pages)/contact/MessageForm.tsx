import styles from './MessageForm.module.css';

import Image from 'next/image';
import { ChangeEvent } from 'react';
import { useTheme } from '@providers/ThemeContextProvider';
import { useScopedI18n } from '@/locales/client';
import { handleSubmitMessage } from './handleSubmitMessage';
import type { FormState } from './useMessageForm';

import clearIcon_light from '@icons/light-accent-01/close-line.svg';
import clearIcon_dark from '@icons/dark-accent-01/close-line.svg';
import sendIcon_light from '@icons/light-accent-01/checkbox-circle-line.svg';
import sendIcon_dark from '@icons/dark-accent-01/checkbox-circle-line.svg';

type MessageFormProps = {
  formState: FormState;
  clearForm: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => void;
};

export default function MessageForm({
  formState,
  clearForm,
  handleChange,
}: MessageFormProps) {
  const t = useScopedI18n('contact.aside.form');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <form
      className={styles.form_container}
      onSubmit={(e) => handleSubmitMessage(e, formState, clearForm, t)}
    >
      <input
        className={styles.form_field}
        type="text"
        name="name"
        placeholder={t('name')}
        value={formState.name || ''}
        onChange={(e) => handleChange(e, 'name')}
      />

      <input
        className={styles.form_field}
        type="email"
        name="email"
        placeholder={t('email')}
        value={formState.email || ''}
        onChange={(e) => handleChange(e, 'email')}
      />

      <input
        className={styles.form_field}
        type="text"
        name="phone"
        placeholder={t('phone')}
        value={formState.phone || ''}
        onChange={(e) => handleChange(e, 'phone')}
      />

      <textarea
        className={`${styles.form_field} ${styles.message_field}`}
        name="message"
        placeholder={`${t('message')} *`}
        value={formState.message || ''}
        onChange={(e) => handleChange(e, 'message')}
      ></textarea>

      <div className={styles.btn_container}>
        <button className={styles.form_btn} type="button" onClick={clearForm}>
          <Image
            className={styles.btn_icon}
            src={isDarkTheme ? clearIcon_dark : clearIcon_light}
            alt=""
          />
        </button>

        <button className={styles.form_btn} type="submit">
          <Image
            className={styles.btn_icon}
            src={isDarkTheme ? sendIcon_dark : sendIcon_light}
            alt=""
          />
        </button>
      </div>
    </form>
  );
}
