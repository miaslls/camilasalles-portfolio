'use client';

import styles from './ContactInfo.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import { useTheme } from '@providers/ThemeContextProvider';
import { useScopedI18n } from '@/locales/client';
import { copyToClipboard } from '@lib/clipboard';

import mailIcon_light from '@icons/light/mail-open-line.svg';
import mailIcon_dark from '@icons/dark/mail-open-line.svg';
import linkedinIcon_light from '@icons/light/linkedin-box-fill.svg';
import linkedinIcon_dark from '@icons/dark/linkedin-box-fill.svg';
import githubIcon_light from '@icons/light/github-fill.svg';
import githubIcon_dark from '@icons/dark/github-fill.svg';
import copyIcon_light from '@icons/light-accent-01/file-copy-line.svg';
import copyIcon_dark from '@icons/dark-accent-01/file-copy-line.svg';

export default function ContactInfo() {
  const t = useScopedI18n('contact.main.links');
  const toolT = useScopedI18n('tooltip.contact');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const emailAddress = t('email.address');
  const linkedinHandle = 'in/salles-camila';
  const linkedinProfileUrl = 'https://www.linkedin.com/in/salles-camila/';
  const githubHandle = '/miaslls';
  const githubProfileUrl = 'https://github.com/miaslls';

  const emailInfo = {
    text: emailAddress,
    icon: isDarkTheme ? mailIcon_light : mailIcon_dark,
    send_mail: {
      href: `mailto:${emailAddress}?body=%0D%0A%0D%0A${t(
        'email.body'
      )}%20https%3A%2F%2Fcamilasalles.dev`,
    },
    copy_button: {
      copy: () => {
        copyToClipboard(emailAddress, t);
      },
      icon: isDarkTheme ? copyIcon_dark : copyIcon_light,
      tooltip: toolT('copy'),
    },
  };

  const linkedinInfo = {
    text: linkedinHandle,
    icon: isDarkTheme ? linkedinIcon_light : linkedinIcon_dark,
    profile: {
      href: linkedinProfileUrl,
    },
  };

  const githubInfo = {
    text: githubHandle,
    icon: isDarkTheme ? githubIcon_light : githubIcon_dark,
    profile: {
      href: githubProfileUrl,
    },
  };

  return (
    <section className={styles.container}>
      <article className={styles.link_container}>
        <Link
          className={styles.link}
          href={emailInfo.send_mail.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className={styles.icon} src={emailInfo.icon} alt="" />
          <span>{emailInfo.text}</span>
        </Link>

        <button
          className={styles.copy}
          onClick={emailInfo.copy_button.copy}
          data-tooltip-id="contacts"
          data-tooltip-content={emailInfo.copy_button.tooltip}
        >
          <Image
            className={styles.icon}
            src={emailInfo.copy_button.icon}
            alt=""
          />
        </button>
      </article>

      <article className={styles.link_container}>
        <Link
          className={styles.link}
          href={linkedinInfo.profile.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className={styles.icon} src={linkedinInfo.icon} alt="" />
          <span>{linkedinInfo.text}</span>
        </Link>
      </article>

      <article className={styles.link_container}>
        <Link
          className={styles.link}
          href={githubInfo.profile.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className={styles.icon} src={githubInfo.icon} alt="" />
          <span>{githubInfo.text}</span>
        </Link>
      </article>

      <Tooltip
        id="contacts"
        className="custom tooltip"
        place="top"
        opacity={1}
        offset={8}
      />
    </section>
  );
}
