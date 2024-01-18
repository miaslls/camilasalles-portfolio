'use client';

import styles from './ProjectCard.module.css';

import Link from 'next/link';
import Image from 'next/image';
import ProjectLinks from './ProjectLinks';
import { useScopedI18n } from '@/locales/client';
import type { Project } from '@data/projects';

import TagList from '@components/TagList';

export default function ProjectCard({
  title,
  slug,
  img,
  tags,
  links,
  blur_data_url,
}: Project) {
  const t = useScopedI18n('projects.main');

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h3 className={`${styles.title} clippable`}>{title}</h3>
        <ProjectLinks {...links} />
      </header>

      <div className={styles.img_container}>
        <Image
          className={styles.img}
          src={img}
          placeholder="blur"
          blurDataURL={blur_data_url}
          alt=""
        />

        <Link
          href={links.live_demo_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.btn_container}>
            <button className={styles.view_demo}>{t('view_demo')}</button>
          </div>
        </Link>
      </div>

      <TagList tags={tags} identifier={`project-${slug}`} />
    </article>
  );
}
