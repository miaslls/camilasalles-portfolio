'use client';

import styles from './footer.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@providers/theme-provider';
import { useDevice } from '@providers/device-provider';

import externalLinkIcon_light from '@/public/icons/light-accent-01/arrow-right-up-line.svg';
import githubIcon_light from '@/public/icons/light-accent-01/github-fill.svg';
import linkedinIcon_light from '@/public/icons/light-accent-01/linkedin-box-fill.svg';
import locationIcon_light from '@/public/icons/light-accent-01/map-pin-line.svg';
import externalLinkIcon_dark from '@/public/icons/dark-accent-01/arrow-right-up-line.svg';
import githubIcon_dark from '@/public/icons/dark-accent-01/github-fill.svg';
import linkedinIcon_dark from '@/public/icons/dark-accent-01/linkedin-box-fill.svg';
import locationIcon_dark from '@/public/icons/dark-accent-01/map-pin-line.svg';

export default function Footer() {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const device = useDevice();

  return (
    <footer className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>Camila Salles</p>
        <p className={styles.subtitle}>development & design</p>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link
              className={styles.link}
              href={'https://maps.app.goo.gl/vzsyxqckDcDaemHz8'}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.icon_container}>
                <Image
                  className={styles.link_icon}
                  src={isDarkTheme ? locationIcon_dark : locationIcon_light}
                  alt=""
                />
              </div>

              {device !== 'mobile' && (
                <>
                  <span className={styles.link_text}>
                    {device === 'tablet' ? 'maps' : 'São Paulo, SP'}
                  </span>

                  {device !== 'tablet' && (
                    <div className={styles.icon_container}>
                      <Image
                        className={styles.link_icon}
                        src={
                          isDarkTheme
                            ? externalLinkIcon_dark
                            : externalLinkIcon_light
                        }
                        alt=""
                      />
                    </div>
                  )}
                </>
              )}
            </Link>
          </li>

          <li>
            <Link
              className={styles.link}
              href={'https://linkedin.com/in/salles-camila'}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.icon_container}>
                <Image
                  className={styles.link_icon}
                  src={isDarkTheme ? linkedinIcon_dark : linkedinIcon_light}
                  alt=""
                />
              </div>

              {device !== 'mobile' && (
                <>
                  <span className={styles.link_text}>
                    {device === 'tablet' ? 'linkedin' : 'in/salles-camila'}
                  </span>

                  {device !== 'tablet' && (
                    <div className={styles.icon_container}>
                      <Image
                        className={styles.link_icon}
                        src={
                          isDarkTheme
                            ? externalLinkIcon_dark
                            : externalLinkIcon_light
                        }
                        alt=""
                      />
                    </div>
                  )}
                </>
              )}
            </Link>
          </li>

          <li>
            <Link
              className={styles.link}
              href={'https://github.com/miaslls'}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.icon_container}>
                <Image
                  className={styles.link_icon}
                  src={isDarkTheme ? githubIcon_dark : githubIcon_light}
                  alt=""
                />
              </div>

              {device !== 'mobile' && (
                <>
                  <span className={styles.link_text}>
                    {device === 'tablet' ? 'github' : '/miaslls'}
                  </span>

                  {device !== 'tablet' && (
                    <div className={styles.icon_container}>
                      <Image
                        className={styles.link_icon}
                        src={
                          isDarkTheme
                            ? externalLinkIcon_dark
                            : externalLinkIcon_light
                        }
                        alt=""
                      />
                    </div>
                  )}
                </>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {device !== 'mobile' && (
        <p className={styles.legal}>{`© ${new Date().getFullYear()} ${
          device === 'tablet' ? 'miaslls' : 'Camila Salles'
        }`}</p>
      )}
    </footer>
  );
}
