import styles from './SectionTitle.module.css';

export type SectionTitleProps = {
  title: string;
  icon: JSX.Element;
};

export default function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <div className={styles.title_container}>
      <div className={styles.icon}>{icon}</div>
      <h2 className="clippable">{title}</h2>
    </div>
  );
}
