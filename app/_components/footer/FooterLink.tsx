'use client';

import styles from './FooterLink.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@providers/ThemeContextProvider';
import { useDevice } from '@providers/DeviceContextProvider';

import externalLinkIcon_light from '@icons/light-accent-01/arrow-right-up-line.svg';
import externalLinkIcon_dark from '@icons/dark-accent-01/arrow-right-up-line.svg';

export type FooterLinkProps = {
  url: string;
  icon: any; // Use any to avoid conflicts with @svgr/webpack plugin or babel-plugin-inline-react-svg plugin.
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
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

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
      <Image className={styles.link_icon} src={icon} alt="" />

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
