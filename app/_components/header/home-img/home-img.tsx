import styles from './home-img.module.css';

import Image from 'next/image';
import { useTheme } from '@providers/theme-provider';
import { useDevice } from '@providers/device-provider';

import img_light from '@images/home-light.svg';
import img_dark from '@images/home-dark.svg';

export default function HomeImg() {
  const { theme } = useTheme();
  const isNotMobile = useDevice() !== 'mobile';

  const title = 'Camila Salles';
  const subtitle = 'development & design';
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet nulla in nulla dapibus mattis et eget erat. ';

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          priority
          className={styles.img}
          src={theme === 'dark' ? img_dark : img_light}
          alt=""
        />
      </div>

      <div className={styles.text_container}>
        <hgroup>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </hgroup>

        {isNotMobile && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}
