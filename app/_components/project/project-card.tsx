'use client';

import styles from './project-card.module.css';

import Image, { StaticImageData } from 'next/image';
import { generateRandomString } from '@lib/utils';

import ProjectLinks from './project-links';

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
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <ProjectLinks {...links} />
      </header>

      <Image className={styles.img} src={img} placeholder="blur" alt="" />

      <ul className={styles.tag_list}>
        {tags.map((tag) => (
          <li key={`${tag}-${generateRandomString(4)}`}>
            <p className="tag">{tag}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
