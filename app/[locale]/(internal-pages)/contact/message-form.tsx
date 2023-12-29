'use client';

import styles from './message-form.module.css';

import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';

import mailIcon_light from '@icons/light/mail-send-line.svg';
import mailIcon_dark from '@icons/dark/mail-send-line.svg';
import clearIcon_light from '@icons/light-accent-01/close-line.svg';
import clearIcon_dark from '@icons/dark-accent-01/close-line.svg';
import sendIcon_light from '@icons/light-accent-01/checkbox-circle-line.svg';
import sendIcon_dark from '@icons/dark-accent-01/checkbox-circle-line.svg';

export default function MessageMe() {
  const t = useScopedI18n('contact.aside'); // 🪲 TODO:

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="aside_section">
      <SectionTitle
        title={t('message')}
        icon={isDarkTheme ? mailIcon_light : mailIcon_dark}
      />

      <p className={styles.required_notice}>* required field</p>

      <form className={styles.form_container}>
        <input
          className={styles.form_field}
          type="text"
          name="name"
          placeholder="name"
        />

        <input
          className={styles.form_field}
          type="email"
          name="email"
          placeholder="email"
        />

        <textarea
          className={`${styles.form_field} ${styles.message_field}`}
          name="message"
          placeholder="message *"
          required
        ></textarea>

        <div className={styles.btn_container}>
          <button className={styles.form_btn} type="reset">
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
    </section>
  );
}
