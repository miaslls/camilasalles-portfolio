'use client';

import styles from './Footer.module.css';

import { Tooltip } from 'react-tooltip';
import { useI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';
import { useDevice } from '@/app/_providers/DeviceContextProvider';

import FooterLink from './FooterLink';

import githubIcon_light from '@icons/light-accent-01/github-fill.svg';
import linkedinIcon_light from '@icons/light-accent-01/linkedin-box-fill.svg';
import locationIcon_light from '@icons/light-accent-01/map-pin-line.svg';
import githubIcon_dark from '@icons/dark-accent-01/github-fill.svg';
import linkedinIcon_dark from '@icons/dark-accent-01/linkedin-box-fill.svg';
import locationIcon_dark from '@icons/dark-accent-01/map-pin-line.svg';

export default function Footer() {
  const t = useI18n();

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const device = useDevice();

  const links = [
    {
      url: 'https://maps.app.goo.gl/vzsyxqckDcDaemHz8',
      icon: isDarkTheme ? locationIcon_dark : locationIcon_light,
      text: device === 'desktop' ? 'São Paulo, SP' : 'maps',
      tooltip: t('tooltip.footer.maps'),
      isExternal: true,
    },
    {
      url: 'https://linkedin.com/in/salles-camila',
      icon: isDarkTheme ? linkedinIcon_dark : linkedinIcon_light,
      text: device === 'desktop' ? 'in/salles-camila' : 'linkedin',
      tooltip: t('tooltip.footer.linkedin'),
      isExternal: true,
    },
    {
      url: 'https://github.com/miaslls',
      icon: isDarkTheme ? githubIcon_dark : githubIcon_light,
      text: device === 'desktop' ? '/miaslls' : 'github',
      tooltip: t('tooltip.footer.github'),
      isExternal: true,
    },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>Camila Salles</p>
        <p className={styles.subtitle}>development & design</p>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.text}>
              <FooterLink {...link} />
            </li>
          ))}
        </ul>
      </nav>

      {device !== 'mobile' && (
        <p className={styles.legal}>{`© ${new Date().getFullYear()} ${
          device === 'desktop' ? 'Camila Salles' : 'miaslls'
        }`}</p>
      )}

      <Tooltip
        id="footer"
        className="custom tooltip"
        place="top"
        opacity={1}
        offset={12}
      />
    </footer>
  );
}
