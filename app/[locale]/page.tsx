import styles from './page.module.css';

import { getI18n } from '@/locales/server';

export default async function Home() {
  const t = await getI18n();

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('home.hello', { name: <strong>miaslls</strong> })}</p>
    </div>
  );
}
