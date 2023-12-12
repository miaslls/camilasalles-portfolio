import styles from './project-links.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@providers/theme-provider';

import codeIcon_light from '@icons/light-accent-01/code-s-slash-line.svg';
import codeIcon_dark from '@icons/dark-accent-01/code-s-slash-line.svg';
import terminalIcon_light from '@icons/light-accent-01/terminal-line.svg';
import terminalIcon_dark from '@icons/dark-accent-01/terminal-line.svg';
import bracesIcon_light from '@icons/light-accent-01/braces-line.svg';
import bracesIcon_dark from '@icons/dark-accent-01/braces-line.svg';
import playIcon_light from '@icons/light-accent-01/play-fill.svg';
import playIcon_dark from '@icons/dark-accent-01/play-fill.svg';
import infoIcon_light from '@icons/light/information-line.svg';
import infoIcon_dark from '@icons/dark/information-line.svg';

export type ProjectLinksProps = {
  live_demo_url: string;
  github_single_url?: string;
  github_front_url?: string;
  github_back_url?: string;
  infoState: { isVisible: boolean; relatedDemoUrl: string };
  handleInfo(relatedDemoUrl: string): void;
};

export default function ProjectLinks({
  live_demo_url,
  github_single_url,
  github_front_url,
  github_back_url,
  infoState,
  handleInfo,
}: ProjectLinksProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const infoIsVisible =
    infoState.isVisible && infoState.relatedDemoUrl === live_demo_url;

  return (
    <nav>
      <ul className={styles.link_list}>
        {github_back_url && (
          <li className={styles.list_item}>
            {infoIsVisible && <div className={styles.info}>{'back'}</div>}

            <Link
              href={github_back_url}
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <Image
                className={styles.link_icon}
                src={isDarkTheme ? terminalIcon_dark : terminalIcon_light}
                alt=""
              />
            </Link>
          </li>
        )}

        {github_front_url && (
          <li className={styles.list_item}>
            {infoIsVisible && <div className={styles.info}>{'front'}</div>}

            <Link
              href={github_front_url}
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <Image
                className={styles.link_icon}
                src={isDarkTheme ? codeIcon_dark : codeIcon_light}
                alt=""
              />
            </Link>
          </li>
        )}

        {github_single_url && (
          <li className={styles.list_item}>
            {infoIsVisible && <div className={styles.info}>{'github'}</div>}

            <Link
              href={github_single_url}
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <Image
                className={styles.link_icon}
                src={isDarkTheme ? bracesIcon_dark : bracesIcon_light}
                alt=""
              />
            </Link>
          </li>
        )}

        <li className={styles.list_item}>
          {infoIsVisible && <div className={styles.info}>{'demo'}</div>}

          <Link href={live_demo_url} target="_blank" className={styles.link}>
            <Image
              className={styles.link_icon}
              src={isDarkTheme ? playIcon_dark : playIcon_light}
              alt=""
            />
          </Link>
        </li>

        <li className={styles.list_item}>
          <button
            className={styles.info_btn}
            onClick={() => handleInfo(live_demo_url)}
          >
            <Image
              className={styles.info_icon}
              src={isDarkTheme ? infoIcon_light : infoIcon_dark}
              alt=""
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
