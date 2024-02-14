'use client';

import styles from './SubtitleLink.module.css';

import Link from 'next/link';
import ArrowIcon from '@icons/ArrowRightDouble';

export interface SubtitleLinkProps {
  href: string;
  text: string;
}

export default function SubtitleLink({ href, text }: SubtitleLinkProps) {
  return (
    <Link className={styles.link} href={href}>
      <div className={styles.icon}>
        <ArrowIcon />
      </div>

      <p className={styles.text}>{text}</p>
    </Link>
  );
}
