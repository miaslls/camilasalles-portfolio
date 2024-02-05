'use client';

import styles from './ContactInfo.module.css';

import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import { useScopedI18n } from '@/locales/client';
import { copyToClipboard } from '@lib/clipboard';

import MailIcon from '@/app/_components/icons/MailOpenIcon';
import LinkedinIcon from '@/app/_components/icons/LinkedinBoxIcon';
import GithubIcon from '@/app/_components/icons/GithubIcon';
import CopyIcon from '@/app/_components/icons/FileCopyIcon';

export default function ContactInfo() {
  const t = useScopedI18n('contact.main.links');
  const toolT = useScopedI18n('tooltip.contact');

  const emailAddress = t('email.address');
  const linkedinHandle = 'in/salles-camila';
  const linkedinProfileUrl = 'https://www.linkedin.com/in/salles-camila/';
  const githubHandle = '/miaslls';
  const githubProfileUrl = 'https://github.com/miaslls';

  const emailInfo = {
    text: emailAddress,
    icon: <MailIcon />,
    send_mail: {
      href: `mailto:${emailAddress}?body=%0D%0A%0D%0A${t(
        'email.body'
      )}%20https%3A%2F%2Fcamilasalles.dev`,
    },
    copy_button: {
      copy: () => {
        copyToClipboard(emailAddress, t);
      },
      icon: <CopyIcon />,
      tooltip: toolT('copy'),
    },
  };

  const linkedinInfo = {
    text: linkedinHandle,
    icon: <LinkedinIcon />,
    profile: {
      href: linkedinProfileUrl,
    },
  };

  const githubInfo = {
    text: githubHandle,
    icon: <GithubIcon />,
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
          <div className={styles.icon}>{emailInfo.icon}</div>
          <span>{emailInfo.text}</span>
        </Link>

        <button
          className={styles.copy}
          onClick={emailInfo.copy_button.copy}
          data-tooltip-id="contacts"
          data-tooltip-content={emailInfo.copy_button.tooltip}
        >
          <div className={styles.icon}>{emailInfo.copy_button.icon}</div>
        </button>
      </article>

      <article className={styles.link_container}>
        <Link
          className={styles.link}
          href={linkedinInfo.profile.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.icon}>{linkedinInfo.icon}</div>
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
          <div className={styles.icon}>{githubInfo.icon}</div>
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
