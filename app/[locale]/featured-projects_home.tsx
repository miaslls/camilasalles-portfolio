'use client';

import { useScopedI18n } from '@/locales/client';
import { useTheme } from '@providers/theme-provider';
import SectionTitle from '@components/section-title';

import starIcon_light from '@icons/light/star-line.svg';
import starIcon_dark from '@icons/dark/star-line.svg';

export default function FeaturedProjects_Home() {
  const t = useScopedI18n('home');

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <section className="home_section">
      <SectionTitle
        title={t('featured_projects')}
        icon={isDarkTheme ? starIcon_light : starIcon_dark}
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
        tellus, gravida ut consequat quis, luctus nec neque. Fusce imperdiet
        consectetur neque, sit amet imperdiet augue venenatis id. Proin et eros
        leo. Morbi fermentum luctus ex, sit amet euismod est porta at. Duis
        dictum hendrerit sagittis. Nam eget luctus turpis. Etiam consequat ante
        ut sem volutpat blandit. Praesent in lacus convallis, tempor tellus in,
        interdum lacus. Vivamus feugiat justo in vehicula pharetra. Pellentesque
        lacus metus, bibendum eu viverra at, varius vitae massa. Fusce id
        dapibus augue. Maecenas id risus laoreet, vestibulum ante ut, ultricies
        dui.
      </p>

      <br />

      <p>
        Nam facilisis elementum enim nec fermentum. Etiam mollis erat sed nulla
        fringilla, vel vestibulum elit congue. Mauris et dapibus nibh. Maecenas
        bibendum auctor purus, vel rutrum lacus semper vitae. Aliquam gravida
        nisl lorem, eget cursus nisi fermentum nec. Etiam ac interdum risus.
        Vivamus hendrerit tortor vitae semper aliquam. Suspendisse porta nibh
        sed enim congue, vitae bibendum est mollis. Vestibulum erat neque,
        rhoncus et tellus vitae, vehicula vestibulum ante. Fusce massa odio,
        condimentum non viverra ut, congue eget erat. Nam porttitor fermentum
        mi, non placerat ligula. Fusce pretium ultrices fermentum.
      </p>
    </section>
  );
}
