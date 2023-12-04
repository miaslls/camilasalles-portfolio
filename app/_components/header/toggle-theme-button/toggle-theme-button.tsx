'use client';

import styles from './toggle-theme-button.module.css';

import { useTheme } from '@providers/theme-provider';
import Image from 'next/image';
import sunIcon from '@/public/icons/fff3e7/sun-line.svg';
import moonIcon from '@/public/icons/fff3e7/moon-line.svg';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme}>
      <Image
        src={theme === 'dark' ? moonIcon : sunIcon}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
};

export default ToggleThemeButton;
