import styles from './mini-project-card.module.css';

import ProjectLinks from './project-links';
import type { Project } from '@data/projects';

export default function MiniProjectCard({
  title,
  bg_url,
  tags,
  links,
}: Project) {
  return (
    <article
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(to left, var(--bg-color) 40%, transparent), url(${bg_url})`,
      }}
    >
      <ProjectLinks {...links} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.tags}>{tags.join(', ')}</p>
    </article>
  );
}
