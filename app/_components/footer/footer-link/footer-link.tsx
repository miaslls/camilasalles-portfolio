'use client';

import styles from './footer-link.module.css';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from '@providers/theme-provider';
import { useDevice } from '@providers/device-provider';

import externalLinkIcon_light from '@/public/icons/light-accent-01/arrow-right-up-line.svg';
import externalLinkIcon_dark from '@/public/icons/dark-accent-01/arrow-right-up-line.svg';

export type FooterLinkProps = {
  url: string;
  icon: any; // Use any to avoid conflicts with @svgr/webpack plugin or babel-plugin-inline-react-svg plugin.
  text: string;
  isExternal: boolean;
};

export default function FooterLink({
  url,
  icon,
  text,
  isExternal,
}: FooterLinkProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const device = useDevice();

  return (
    <Link
      className={styles.link}
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className={styles.icon_container}>
        <Image className={styles.link_icon} src={icon} alt="" />
      </div>

      {device !== 'mobile' && (
        <>
          <span className={styles.link_text}>{text}</span>

          {device === 'desktop' && isExternal && (
            <div className={styles.icon_container}>
              <Image
                className={styles.link_icon}
                src={
                  isDarkTheme ? externalLinkIcon_dark : externalLinkIcon_light
                }
                alt=""
              />
            </div>
          )}
        </>
      )}
    </Link>
  );
}
