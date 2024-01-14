'use client';

import styles from './ToggleThemeButton.module.css';

import Image from 'next/image';
import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';

import sunIcon_light from '@icons/light/sun-fill.svg';
import moonIcon_light from '@icons/light/moon-fill.svg';
import sunIcon_dark from '@icons/dark/sun-fill.svg';
import moonIcon_dark from '@icons/dark/moon-fill.svg';

type ToggleThemeButtonProps = {
  isIconVariable: boolean;
};

export default function ToggleThemeButton({
  isIconVariable,
}: ToggleThemeButtonProps) {
  const t = useScopedI18n('tooltip.header');

  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  let moonIcon = moonIcon_light;
  let sunIcon = sunIcon_light;

  if (isIconVariable) {
    moonIcon = isDarkTheme ? moonIcon_light : moonIcon_dark;
    sunIcon = isDarkTheme ? sunIcon_light : sunIcon_dark;
  }

  return (
    <button
      className={styles.button}
      onClick={toggleTheme}
      data-tooltip-id="header"
      data-tooltip-content={t('theme')}
      data-tooltip-offset={8}
    >
      <Image
        src={isDarkTheme ? moonIcon : sunIcon}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
}
