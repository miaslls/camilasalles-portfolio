import { getI18n } from '@/locales/server';

export default async function ProjectsPage() {
  const t = await getI18n();

  return <h1>{t('projects')}</h1>;
}
