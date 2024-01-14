import styles from './MiniProjectCard.module.css';

import ProjectLinks from './ProjectLinks';
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
        backgroundImage: `linear-gradient(to left,var(--bg-color) 20%, var(--bg-90) 35%, var(--bg-75) 60%, var(--bg-50) 85%, transparent), url(${bg_url})`,
      }}
    >
      <ProjectLinks {...links} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.tags}>{tags.join(', ')}</p>
    </article>
  );
}
