'use client';

import styles from './Footer.module.css';

import { Tooltip } from 'react-tooltip';
import { useDevice } from '@providers/DeviceContextProvider';
import { useScopedI18n } from '@/locales/client';
import FooterLink from './FooterLink';
import GithubIcon from '@icons/GithubIcon';
import LinkedinIcon from '@icons/LinkedinBoxIcon';
import LocationIcon from '@icons/MapPinIcon';

export default function Footer() {
  const t = useScopedI18n('tooltip.footer');
  const unscopedT = useScopedI18n('unscoped');

  const device = useDevice();

  const links = [
    {
      url: 'https://maps.app.goo.gl/vzsyxqckDcDaemHz8',
      icon: <LocationIcon />,
      text: device === 'desktop' ? 'São Paulo, SP' : 'maps',
      tooltip: t('maps'),
      isExternal: true,
    },
    {
      url: 'https://linkedin.com/in/salles-camila',
      icon: <LinkedinIcon />,
      text: device === 'desktop' ? 'in/salles-camila' : 'linkedin',
      tooltip: t('linkedin'),
      isExternal: true,
    },
    {
      url: 'https://github.com/miaslls',
      icon: <GithubIcon />,
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
