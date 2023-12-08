'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type MenuContextState = {
  isMenuOpen: boolean;
  handleToggleMenu(): void;
};

export const MenuContext = createContext<MenuContextState | null>(null);

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      'useMobileMenu must be used within a component wrapped with MobileMenuProvider'
    );
  }

  return context;
}

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(() => {
    const storedValue = sessionStorage.getItem('isMenuOpen');

    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    sessionStorage.setItem('isMenuOpen', JSON.stringify(isMenuOpen));
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen((current) => !current);

    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
