'use client';

import styles from './ProjectLinks.module.css';

import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import { useScopedI18n } from '@/locales/client';
import type { ProjectLinks } from '@data/projects';

import GithubIcon from '@icons/GithubIcon';
import PlayIcon from '@icons/PlayIcon';

export default function ProjectLinks({
  live_demo_url,
  live_demo_disabled,
  github_single_url,
  github_front_url,
  github_back_url,
}: ProjectLinks) {
  const t = useScopedI18n('tooltip.project');

  return (
    <nav>
      <ul className={styles.link_list}>
        {github_back_url && (
          <li className={styles.list_item}>
            <p className={styles.info}>{'back'}</p>

            <Link
              href={github_back_url}
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
              data-tooltip-id="project_link"
              data-tooltip-content={t('repo')}
            >
              <div className={styles.link_icon}>
                <GithubIcon />
              </div>
            </Link>
          </li>
        )}

        {github_front_url && (
          <li className={styles.list_item}>
            <p className={styles.info}>{'front'}</p>

            <Link
              href={github_front_url}
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
              data-tooltip-id="project_link"
              data-tooltip-content={t('repo')}
            >
              <div className={styles.link_icon}>
                <GithubIcon />
              </div>
            </Link>
          </li>
        )}

        {github_single_url && (
          <li className={styles.list_item}>
            <Link
              href={github_single_url}
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
              data-tooltip-id="project_link"
              data-tooltip-content={t('repo')}
            >
              <div className={styles.link_icon}>
                <GithubIcon />
              </div>
            </Link>
          </li>
        )}

        <li className={styles.list_item}>
          <Link
            href={live_demo_url}
            target="_blank"
            scroll={false}
            className={styles.link}
            rel="noopener noreferrer"
            data-tooltip-id={
              !live_demo_disabled ? 'project_link' : 'project_link_disabled'
            }
            data-tooltip-content={
              !live_demo_disabled ? t('demo') : t('unavailable')
            }
            onClick={(ev) => {
              live_demo_disabled && ev.preventDefault();
            }}
          >
            <div
              className={`${styles.link_icon} ${
                live_demo_disabled ? styles.disabled : ''
              }`}
            >
              <PlayIcon />
            </div>
          </Link>
        </li>
      </ul>

      <Tooltip
        id="project_link"
        className="custom tooltip"
        place="left"
        opacity={1}
        offset={12}
      />

      <Tooltip
        id="project_link_disabled"
        className="custom tooltip warning"
        place="left"
        opacity={1}
        offset={12}
      />
    </nav>
  );
}
