'use client';

import styles from './FooterLink.module.css';

import Link from 'next/link';
import { useDevice } from '@providers/DeviceContextProvider';
import ExternalLinkIcon from '../icons/ArrowRightUpIcon';

export type FooterLinkProps = {
  url: string;
  icon: JSX.Element;
  tooltip: string;
  text: string;
  isExternal: boolean;
};

export default function FooterLink({
  url,
  icon,
  text,
  tooltip,
  isExternal,
}: FooterLinkProps) {
  const device = useDevice();

  return (
    <Link
      className={styles.link}
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      data-tooltip-id="footer"
      data-tooltip-content={tooltip}
    >
      <div className={styles.link_icon}>{icon}</div>

      {device !== 'mobile' && (
        <>
          <span className={styles.link_text}>{text}</span>

          {device === 'desktop' && isExternal && (
            <div className={styles.icon_container}>
              <div className={styles.link_icon}>
                <ExternalLinkIcon />
              </div>
            </div>
          )}
        </>
      )}
    </Link>
  );
}
