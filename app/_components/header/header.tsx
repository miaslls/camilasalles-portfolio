'use client';

import styles from './header.module.css';

import SetTheme from './set-theme';
import LangNav from './lang-nav/lang-nav';
import MainNav from './main-nav/main-nav';

export default function Header() {
  return (
    <header>
      <LangNav />
      <SetTheme />
      <MainNav />
    </header>
  );
}
