'use client';

import styles from './Footer.module.css';

import { Tooltip } from 'react-tooltip';
import { useTheme } from '@providers/ThemeContextProvider';
import { useDevice } from '@providers/DeviceContextProvider';
import { useScopedI18n } from '@/locales/client';

import FooterLink from './FooterLink';

import githubIcon_light from '@icons/light-accent-01/github-fill.svg';
import linkedinIcon_light from '@icons/light-accent-01/linkedin-box-fill.svg';
import locationIcon_light from '@icons/light-accent-01/map-pin-line.svg';
import githubIcon_dark from '@icons/dark-accent-01/github-fill.svg';
import linkedinIcon_dark from '@icons/dark-accent-01/linkedin-box-fill.svg';
import locationIcon_dark from '@icons/dark-accent-01/map-pin-line.svg';

export default function Footer() {
  const t = useScopedI18n('tooltip.footer');
  const unscopedT = useScopedI18n('unscoped');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const device = useDevice();

  const links = [
    {
      url: 'https://maps.app.goo.gl/vzsyxqckDcDaemHz8',
      icon: isDarkTheme ? locationIcon_dark : locationIcon_light,
      text: device === 'desktop' ? 'São Paulo, SP' : 'maps',
      tooltip: t('maps'),
      isExternal: true,
    },
    {
      url: 'https://linkedin.com/in/salles-camila',
      icon: isDarkTheme ? linkedinIcon_dark : linkedinIcon_light,
      text: device === 'desktop' ? 'in/salles-camila' : 'linkedin',
      tooltip: t('linkedin'),
      isExternal: true,
    },
    {
      url: 'https://github.com/miaslls',
      icon: isDarkTheme ? githubIcon_dark : githubIcon_light,
      text: device === 'desktop' ? '/miaslls' : 'github',
      tooltip: t('github'),
      isExternal: true,
    },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>Camila Salles</p>
        <p className={styles.subtitle}>{unscopedT('dev_and_design')}</p>
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
