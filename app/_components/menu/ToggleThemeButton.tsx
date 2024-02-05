'use client';

import styles from './ToggleThemeButton.module.css';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/ThemeContextProvider';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';

type ToggleThemeButtonProps = {
  isIconVariable: boolean;
};

export default function ToggleThemeButton({
  isIconVariable,
}: ToggleThemeButtonProps) {
  const t = useScopedI18n('tooltip.header');

  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <button
      className={styles.button}
      onClick={toggleTheme}
      data-tooltip-id="header"
      data-tooltip-content={t('theme')}
      data-tooltip-offset={8}
    >
      <div
        className={`${styles.icon} ${isIconVariable ? styles.variable : ''}`}
      >
        {isDarkTheme ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
}
