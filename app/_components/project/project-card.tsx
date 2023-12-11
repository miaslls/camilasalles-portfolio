'use client';

import styles from './project-card.module.css';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from '@providers/theme-provider';
import { generateRandomString } from '@lib/utils';

import codeIcon_light from '@icons/light-accent-01/code-s-slash-line.svg';
import codeIcon_dark from '@icons/dark-accent-01/code-s-slash-line.svg';
import terminalIcon_light from '@icons/light-accent-01/terminal-line.svg';
import terminalIcon_dark from '@icons/dark-accent-01/terminal-line.svg';
import bracesIcon_light from '@icons/light-accent-01/braces-line.svg';
import bracesIcon_dark from '@icons/dark-accent-01/braces-line.svg';
import playIcon_light from '@icons/light-accent-01/play-fill.svg';
import playIcon_dark from '@icons/dark-accent-01/play-fill.svg';

export type ProjectCardProps = {
  title: string;
  img: StaticImageData;
  tags: string[];
  links: {
    live_demo_url: string;
    github_single_url?: string;
    github_front_url?: string;
    github_back_url?: string;
  };
};

export default function ProjectCard({
  title,
  img,
  tags,
  links,
}: ProjectCardProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        <nav>
          <ul className={styles.link_list}>
            {links.github_back_url && (
              <li>
                <Link
                  href={links.github_back_url}
                  target="_blank"
                  className={styles.link}
                >
                  <Image
                    className={styles.link_icon}
                    src={isDarkTheme ? terminalIcon_dark : terminalIcon_light}
                    title="GitHub: Back-End"
                    alt=""
                  />
                </Link>
              </li>
            )}

            {links.github_front_url && (
              <li>
                <Link
                  href={links.github_front_url}
                  target="_blank"
                  className={styles.link}
                >
                  <Image
                    className={styles.link_icon}
                    src={isDarkTheme ? codeIcon_dark : codeIcon_light}
                    title="GitHub: Front-End"
                    alt=""
                  />
                </Link>
              </li>
            )}

            {links.github_single_url && (
              <li>
                <Link
                  href={links.github_single_url}
                  target="_blank"
                  className={styles.link}
                >
                  <Image
                    className={styles.link_icon}
                    src={isDarkTheme ? bracesIcon_dark : bracesIcon_light}
                    title="GitHub"
                    alt=""
                  />
                </Link>
              </li>
            )}

            <li>
              <Link
                href={links.live_demo_url}
                target="_blank"
                className={styles.link}
              >
                <Image
                  className={styles.link_icon}
                  src={isDarkTheme ? playIcon_dark : playIcon_light}
                  title="Live Demo"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Image className={styles.img} src={img} placeholder="blur" alt="" />

      <ul className={styles.tag_list}>
        {tags.map((tag) => (
          <li key={`${tag}-${generateRandomString(8)}`}>
            <p className="tag">{tag}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
