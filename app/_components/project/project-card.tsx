'use client';

import styles from './project-card.module.css';

import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@data/projects';

import ProjectLinks from './project-links';

export default function ProjectCard({ title, img, tags, links }: Project) {
  const initialInfoState = {
    isVisible: false,
    relatedDemoUrl: '',
  };

  const [infoState, setInfoState] = useState(initialInfoState);

  function handleInfo(relatedDemoUrl: string) {
    if (relatedDemoUrl !== infoState.relatedDemoUrl) {
      setInfoState({
        isVisible: true,
        relatedDemoUrl,
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

      {/* <Image className={styles.img} src={img} placeholder="blur" alt="" /> ⚠️ return after removing gifs */}
      <Image className={styles.img} src={img} alt="" />

      <ul className={styles.tag_list}>
        {tags.map((tag) => (
          <li key={`${title}-${tag}`}>
            <p className="tag">{tag}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
