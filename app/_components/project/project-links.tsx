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
};

export default function ProjectLinks({
  live_demo_url,
  github_single_url,
  github_front_url,
  github_back_url,
}: ProjectLinksProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <nav>
      <ul className={styles.link_list}>
        {github_back_url && (
          <li className={styles.list_item}>
            <Link
              href={github_back_url}
              target="_blank"
              className={styles.link}
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
            <Link
              href={github_front_url}
              target="_blank"
              className={styles.link}
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
            <Link
              href={github_single_url}
              target="_blank"
              className={styles.link}
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
          <Link href={live_demo_url} target="_blank" className={styles.link}>
            <Image
              className={styles.link_icon}
              src={isDarkTheme ? playIcon_dark : playIcon_light}
              alt=""
            />
          </Link>
        </li>

        <li className={styles.list_item}>
          <button className={styles.info_btn}>
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
