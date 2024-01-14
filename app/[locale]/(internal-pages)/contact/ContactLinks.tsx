'use client';

import styles from './ContactLinks.module.css';

import Image from 'next/image';
import { useTheme } from '@providers/ThemeContextProvider';
import { useScopedI18n } from '@/locales/client';
import { copyToClipboard } from '@lib/clipboard';

import SectionTitle from '@components/SectionTitle';
import ExternalContactLink from './ExternalContactLink';

import mailIcon_light from '@icons/light/mail-open-line.svg';
import mailIcon_dark from '@icons/dark/mail-open-line.svg';
import linkedinIcon_light from '@icons/light/linkedin-box-fill.svg';
import linkedinIcon_dark from '@icons/dark/linkedin-box-fill.svg';
import githubIcon_light from '@icons/light/github-fill.svg';
import githubIcon_dark from '@icons/dark/github-fill.svg';

import copyIcon_light from '@icons/light-accent-01/file-copy-line.svg';
import copyIcon_dark from '@icons/dark-accent-01/file-copy-line.svg';

export default function ContactLinks() {
  const t = useScopedI18n('contact.main.links');
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const emailAddress = 'dev@camilasalles.dev';
  const linkedinHandle = 'in/salles-camila';
  const linkedinProfileUrl = 'https://www.linkedin.com/in/salles-camila/';
  const githubHandle = '/miaslls';
  const githubProfileUrl = 'https://github.com/miaslls';
  const githubReposUrl = 'https://github.com/miaslls?tab=repositories';

  const emailInfo = {
    title: emailAddress,
    icon: isDarkTheme ? mailIcon_light : mailIcon_dark,
    links: [
      {
        href: `mailto:${emailAddress}?body=%0D%0A%0D%0A${t('email.body')}`,
        text: t('email.label'),
      },
    ],
    copy_button: {
      copy: () => {
        copyToClipboard(emailAddress, t);
      },
      text: t('copy'),
      icon: isDarkTheme ? copyIcon_dark : copyIcon_light,
    },
  };

  const linkedinInfo = {
    title: linkedinHandle,
    icon: isDarkTheme ? linkedinIcon_light : linkedinIcon_dark,
    links: [
      {
        href: linkedinProfileUrl,
        text: t('profile'),
      },
    ],
  };

  const githubInfo = {
    title: githubHandle,
    icon: isDarkTheme ? githubIcon_light : githubIcon_dark,
    links: [
      {
        href: githubProfileUrl,
        text: t('profile'),
      },
      {
        href: githubReposUrl,
        text: t('repos'),
      },
    ],
  };

  return (
    <section className={styles.container}>
      <article>
        <SectionTitle title={emailInfo.title} icon={emailInfo.icon} />

        <ul className={styles.link_list}>
          {emailInfo.links.map((link, index) => (
            <li key={`email-link-${index}`}>
              <ExternalContactLink {...link} isDarkTheme={isDarkTheme} />
            </li>
          ))}

          {/* 🪲 EXTRA + FIXME: mobile copy to clipboard 📋 */}

          <li>
            <button
              className={`button_link ${styles.link}`}
              onClick={emailInfo.copy_button.copy}
            >
              <span className={styles.text}>{emailInfo.copy_button.text}</span>

              <Image
                className={styles.icon}
                src={emailInfo.copy_button.icon}
                alt=""
              />
            </button>
          </li>
        </ul>
      </article>

      <article>
        <SectionTitle title={linkedinInfo.title} icon={linkedinInfo.icon} />

        <ul className={styles.link_list}>
          {linkedinInfo.links.map((link, index) => (
            <li key={`linkedin-link-${index}`}>
              <ExternalContactLink {...link} isDarkTheme={isDarkTheme} />
            </li>
          ))}
        </ul>
      </article>

      <article>
        <SectionTitle title={githubInfo.title} icon={githubInfo.icon} />

        <ul className={styles.link_list}>
          {githubInfo.links.map((link, index) => (
            <li key={`github-link-${index}`}>
              <ExternalContactLink {...link} isDarkTheme={isDarkTheme} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
