'use client';

import styles from './ProjectLinks.module.css';

import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import { useScopedI18n } from '@/locales/client';
import type { ProjectLinks } from '@data/projects';

import GithubIcon from '../icons/GithubIcon';
import PlayIcon from '../icons/PlayIcon';

export default function ProjectLinks({
  live_demo_url,
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
            className={styles.link}
            rel="noopener noreferrer"
            data-tooltip-id="project_link"
            data-tooltip-content={t('demo')}
          >
            <div className={styles.link_icon}>
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
    </nav>
  );
}
