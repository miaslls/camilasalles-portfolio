import styles from './ContactLinks.module.css';

import Link from 'next/link';
import Image from 'next/image';

import externalLinkIcon_light from '@icons/light-accent-01/arrow-right-up-line.svg';
import externalLinkIcon_dark from '@icons/dark-accent-01/arrow-right-up-line.svg';

export type ExternalContactLinkProps = {
  href: string;
  text: string;
  isDarkTheme: boolean;
};

export default function ExternalContactLink({
  href,
  text,
  isDarkTheme,
}: ExternalContactLinkProps) {
  return (
    <Link
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.text}>{text}</span>

      <Image
        className={styles.icon}
        src={isDarkTheme ? externalLinkIcon_dark : externalLinkIcon_light}
        alt=""
      />
    </Link>
  );
}
