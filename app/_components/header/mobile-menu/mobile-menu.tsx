'use client';

import styles from './mobile-menu.module.css';

type OverlayProps = {
  children: React.ReactNode;
  close(): void;
};

function Overlay({ children, close }: OverlayProps) {
  return (
    <div className={styles.overlay} onClick={() => close()}>
      {children}
    </div>
  );
}

type MobileMenuProps = {
  closeMenu(): void;
};

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
  type HandleClickParams = {
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>;
    closeIsAllowed: boolean;
  };

  function handleClick({ e, closeIsAllowed }: HandleClickParams) {
    e.stopPropagation();

    if (closeIsAllowed) {
      closeMenu();
    }
  }

  return (
    <Overlay close={closeMenu}>
      <div
        className={styles.container}
        onClick={(e) => handleClick({ e, closeIsAllowed: false })}
      >
        mobile menu
      </div>
    </Overlay>
  );
}
