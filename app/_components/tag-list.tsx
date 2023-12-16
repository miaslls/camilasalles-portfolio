import styles from './tag-list.module.css';

export type TagListProps = {
  tags: string[];
  identifier: string;
};

export default function TagList({ tags, identifier }: TagListProps) {
  return (
    <ul className={styles.container}>
      {tags.map((tag) => (
        <li key={`${identifier}-${tag}`}>
          <p className={styles.tag}>{tag}</p>
        </li>
      ))}
    </ul>
  );
}
