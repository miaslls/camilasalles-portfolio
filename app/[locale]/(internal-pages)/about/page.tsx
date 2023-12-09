import { setStaticParamsLocale } from 'next-international/server';
import { getScopedI18n } from '@/locales/server';
import type { Metadata } from 'next';

import AsideImg from '@/app/_components/aside-img';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('about');

  return {
    title: t('title').toUpperCase(),
  };
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('about');

  return (
    <div className="page_container">
      <main>
        <h1>{t('title')}</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
          tellus, gravida ut consequat quis, luctus nec neque. Fusce imperdiet
          consectetur neque, sit amet imperdiet augue venenatis id. Proin et
          eros leo. Morbi fermentum luctus ex, sit amet euismod est porta at.
          Duis dictum hendrerit sagittis. Nam eget luctus turpis. Etiam
          consequat ante ut sem volutpat blandit. Praesent in lacus convallis,
          tempor tellus in, interdum lacus. Vivamus feugiat justo in vehicula
          pharetra. Pellentesque lacus metus, bibendum eu viverra at, varius
          vitae massa. Fusce id dapibus augue. Maecenas id risus laoreet,
          vestibulum ante ut, ultricies dui.
        </p>

        <br />

        <p>
          Nam facilisis elementum enim nec fermentum. Etiam mollis erat sed
          nulla fringilla, vel vestibulum elit congue. Mauris et dapibus nibh.
          Maecenas bibendum auctor purus, vel rutrum lacus semper vitae. Aliquam
          gravida nisl lorem, eget cursus nisi fermentum nec. Etiam ac interdum
          risus. Vivamus hendrerit tortor vitae semper aliquam. Suspendisse
          porta nibh sed enim congue, vitae bibendum est mollis. Vestibulum erat
          neque, rhoncus et tellus vitae, vehicula vestibulum ante. Fusce massa
          odio, condimentum non viverra ut, congue eget erat. Nam porttitor
          fermentum mi, non placerat ligula. Fusce pretium ultrices fermentum.
        </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
          tellus, gravida ut consequat quis, luctus nec neque. Fusce imperdiet
          consectetur neque, sit amet imperdiet augue venenatis id. Proin et
          eros leo. Morbi fermentum luctus ex, sit amet euismod est porta at.
          Duis dictum hendrerit sagittis. Nam eget luctus turpis. Etiam
          consequat ante ut sem volutpat blandit. Praesent in lacus convallis,
          tempor tellus in, interdum lacus. Vivamus feugiat justo in vehicula
          pharetra. Pellentesque lacus metus, bibendum eu viverra at, varius
          vitae massa. Fusce id dapibus augue. Maecenas id risus laoreet,
          vestibulum ante ut, ultricies dui.
        </p>
      </main>

      <aside>
        <AsideImg />

        <div className="aside_content">
          <section>
            <h2>{t('aside.latest_projects')}</h2>
          </section>
        </div>
      </aside>
    </div>
  );
}
