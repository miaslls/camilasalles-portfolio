'use client';

import styles from './ProjectCard.module.css';

import Image from 'next/image';
import ProjectLinks from './ProjectLinks';
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
