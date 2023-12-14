'use client';

import styles from './project-card.module.css';

import Image from 'next/image';
import { useState } from 'react';

import ProjectLinks from './project-links';
import type { Project } from '@data/projects';

const initialInfoState = {
  isVisible: false,
  relatedSlug: '',
};

export type InfoState = typeof initialInfoState;

export default function ProjectCard({
  title,
  slug,
  img,
  tags,
  links,
}: Project) {
  const [infoState, setInfoState] = useState(initialInfoState);

  function handleInfo(slug: string) {
    if (slug !== infoState.relatedSlug) {
      setInfoState({
        isVisible: true,
        relatedSlug: slug,
      });
    } else {
      setInfoState(initialInfoState);
    }
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        <ProjectLinks
          {...links}
          infoState={infoState}
          handleInfo={handleInfo}
        />
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
