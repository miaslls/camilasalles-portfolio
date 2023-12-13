import styles from './mini-project-card.module.css';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

export type MiniProjectCardProps = {
  img: StaticImageData;
  url: string;
};

// FIXME: ⚠️

export default function MiniProjectCard({ img, url }: MiniProjectCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className={styles.link}
      rel="noopener noreferrer"
    >
      <Image className={styles.img} src={img} placeholder="blur" alt="" />
    </Link>
  );
}
