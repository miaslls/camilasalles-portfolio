import styles from './SectionTitle.module.css';
import Image from 'next/image';

export type SectionTitleProps = {
  title: string;
  icon: any; // 🪲
};

export default function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <div className={styles.title_container}>
      <Image className={styles.icon} src={icon} alt="" />
      <h2 className="clippable">{title}</h2>
    </div>
  );
}
