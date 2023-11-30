'use client';

import styles from './set-theme.module.css';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import sunIcon from '@/public/icons/fff3e7/sun-line.svg';
import moonIcon from '@/public/icons/fff3e7/moon-line.svg';

const SetTheme = () => {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <button className={styles.toggle_button} onClick={toggleTheme}>
      {isDark ? (
        <Image src={moonIcon} alt="" width={20} height={20} />
      ) : (
        <Image src={sunIcon} alt="" width={20} height={20} />
      )}
    </button>
  );
};

export default SetTheme;
