'use client';

import styles from './project-card.module.css';

import Image from 'next/image';
import ProjectLinks from './project-links';
import type { Project } from '@data/projects';

import TagList from '@components/tag-list';

export default function ProjectCard({
  title,
  slug,
  img,
  tags,
  links,
  blur_data_url,
}: Project) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <ProjectLinks {...links} />
      </header>

      <Image
        className={styles.img}
        src={img}
        placeholder="blur"
        blurDataURL={blur_data_url}
        alt=""
      />

      <TagList tags={tags} identifier={`project-${slug}`} />
    </article>
  );
}
