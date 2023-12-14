import styles from './mini-project-card.module.css';

import { useState } from 'react';

import ProjectLinks from './project-links';
import type { Project } from '@data/projects';

export default function MiniProjectCard({
  title,
  slug,
  bg_url,
  tags,
  links,
}: Project) {
  const initialMiniInfoState = {
    isVisible: false,
    relatedSlug: '',
  };

  const [miniInfoState, setMiniInfoState] = useState(initialMiniInfoState);

  function handleMiniInfo(slug: string) {
    if (slug !== miniInfoState.relatedSlug) {
      setMiniInfoState({
        isVisible: true,
        relatedSlug: slug,
      });
    } else {
      setMiniInfoState(initialMiniInfoState);
    }
  }

  return (
    <article
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(to left, var(--bg-color) 40%, transparent), url(${bg_url})`,
      }}
    >
      <ProjectLinks
        {...links}
        infoState={miniInfoState}
        handleInfo={handleMiniInfo}
      />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.tags}>{tags.join(', ')}</p>
    </article>
  );
}
