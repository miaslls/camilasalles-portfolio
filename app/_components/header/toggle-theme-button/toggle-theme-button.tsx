'use client';

import styles from './toggle-theme-button.module.css';

import { useTheme } from '@providers/theme-provider';
import Image from 'next/image';

import sunIcon_light from '@/public/icons/light/sun-line.svg';
import moonIcon_light from '@/public/icons/light/moon-line.svg';
import sunIcon_dark from '@/public/icons/dark/sun-line.svg';
import moonIcon_dark from '@/public/icons/dark/moon-line.svg';

type ToggleThemeButtonProps = {
  isIconVariable: boolean;
};

export default function ToggleThemeButton({
  isIconVariable,
}: ToggleThemeButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  let moonIcon = moonIcon_light;
  let sunIcon = sunIcon_light;

  if (isIconVariable) {
    moonIcon = isDarkTheme ? moonIcon_light : moonIcon_dark;
    sunIcon = isDarkTheme ? sunIcon_light : sunIcon_dark;
  }

  return (
    <button className={styles.button} onClick={toggleTheme}>
      <Image
        src={isDarkTheme ? moonIcon : sunIcon}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
}
