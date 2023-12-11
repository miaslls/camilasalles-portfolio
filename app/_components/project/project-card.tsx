import styles from './project-card.module.css';

import Image, { StaticImageData } from 'next/image';
import { generateRandomString } from '@lib/utils';

export type ProjectCardProps = {
  title: string;
  img: StaticImageData;
  tags: string[];
};

export default function ProjectCard({ title, img, tags }: ProjectCardProps) {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <Image className={styles.img} src={img} alt="" />

      <ul className={styles.tag_list}>
        {tags.map((tag) => (
          <li key={`${tag}-${generateRandomString(8)}`}>
            <p className="tag">{tag}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
