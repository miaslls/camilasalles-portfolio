'use client';

import styles from './contact-links.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';

import mailIcon_light from '@icons/light/mail-open-line.svg';
import mailIcon_dark from '@icons/dark/mail-open-line.svg';
import linkedinIcon_light from '@icons/light/linkedin-box-fill.svg';
import linkedinIcon_dark from '@icons/dark/linkedin-box-fill.svg';
import githubIcon_light from '@icons/light/github-fill.svg';
import githubIcon_dark from '@icons/dark/github-fill.svg';
import copyIcon_light from '@icons/light-accent-01/file-copy-line.svg';
import copyIcon_dark from '@icons/dark-accent-01/file-copy-line.svg';
import externalLinkIcon_light from '@icons/light-accent-01/arrow-right-up-line.svg';
import externalLinkIcon_dark from '@icons/dark-accent-01/arrow-right-up-line.svg';

export default function ContactLinks() {
  const t = useScopedI18n('contact.main.links');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className={styles.container}>
      <article>
        <SectionTitle
          title="dev@camilasalles.dev"
          icon={isDarkTheme ? mailIcon_light : mailIcon_dark}
        />

        <ul className={styles.link_list}>
          <li>
            <Link
              className={styles.link}
              href="mailto:dev@camilasalles.dev" // 🐞 TODO:
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.text}>{t('mail')}</span>

              <Image
                className={styles.icon}
                src={
                  isDarkTheme ? externalLinkIcon_dark : externalLinkIcon_light
                }
                alt=""
              />
            </Link>
          </li>

          <li>
            <button
              className={`button_link ${styles.link}`}
              onClick={() => {
                /* 🐞 TODO: */
              }}
            >
              <span className={styles.text}>{t('copy')}</span>

              <Image
                className={styles.icon}
                src={isDarkTheme ? copyIcon_dark : copyIcon_light}
                alt=""
              />
            </button>
          </li>
        </ul>
      </article>

      <article>
        <SectionTitle
          title="in/salles-camila"
          icon={isDarkTheme ? linkedinIcon_light : linkedinIcon_dark}
        />

        <ul className={styles.link_list}>
          <li>
            <Link
              className={styles.link}
              href="https://www.linkedin.com/in/salles-camila/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.text}>{t('profile')}</span>

              <Image
                className={styles.icon}
                src={
                  isDarkTheme ? externalLinkIcon_dark : externalLinkIcon_light
                }
                alt=""
              />
            </Link>
          </li>
        </ul>
      </article>

      <article>
        <SectionTitle
          title="/miaslls"
          icon={isDarkTheme ? githubIcon_light : githubIcon_dark}
        />

        <ul className={styles.link_list}>
          <li>
            <Link
              className={styles.link}
              href="https://github.com/miaslls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.text}>{t('profile')}</span>

              <Image
                className={styles.icon}
                src={
                  isDarkTheme ? externalLinkIcon_dark : externalLinkIcon_light
                }
                alt=""
              />
            </Link>
          </li>

          <li>
            <Link
              className={styles.link}
              href="https://github.com/miaslls?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.text}>{t('repos')}</span>

              <Image
                className={styles.icon}
                src={
                  isDarkTheme ? externalLinkIcon_dark : externalLinkIcon_light
                }
                alt=""
              />
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
