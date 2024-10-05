'use client';

import { Notice } from '../icons/Notice';
import styles from './UnavailablePreviewNotice.module.css';
import { useScopedI18n } from '@/locales/client';

export const UnavailablePreviewNotice = () => {
  const t = useScopedI18n('projects');

  return (
    <div className={styles['notice-container']}>
      <div className={styles['notice-icon']}>
        <Notice />
      </div>
      <div>{t('unavailablePreviewNotice')}</div>
    </div>
  );
};
