'use client';

import styles from './project-card.module.css';

import Image from 'next/image';
import ProjectLinks from './project-links';
import type { Project } from '@data/projects';

export default function ProjectCard({
  title,
  slug,
  img,
  tags,
  links,
}: Project) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <ProjectLinks {...links} />
      </header>

      {/* 🐞 restore after removing gifs 🔻 */}
      {/* <Image className={styles.img} src={img} placeholder="blur" alt="" />  */}

      <Image className={styles.img} src={img} alt="" />

      <ul className={styles.tag_list}>
        {tags.map((tag) => (
          <li key={`${slug}-${tag}`}>
            <p className="tag">{tag}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
