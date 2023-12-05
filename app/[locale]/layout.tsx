import './globals.css';

import type { Metadata, Viewport } from 'next';

import dynamic from 'next/dynamic';
import { Work_Sans, Outfit } from 'next/font/google';
import { getStaticParams } from '@/locales/server';
import { I18nProviderClient } from '@/locales/client';
import { getTheme } from '@lib/getTheme';

import Header from '@components/header/header';
import Footer from '@components/footer/footer';

const DeviceProvider = dynamic(() => import('@providers/device-provider'), {
  ssr: false,
});

const ThemeProvider = dynamic(() => import('@providers/theme-provider'), {
  ssr: false,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#cdcac2' },
    { media: '(prefers-color-scheme: dark)', color: '#09141e' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Camila Salles • development & design',
    default: 'Camila Salles • development & design',
  },
  description:
    "Camila Salles' professional portfolio showcasing front-end development and web design skills. Specializing in React, Next.js, and TypeScript; Figma, and Adobe Suite.",
  keywords: [
    'Front-End Developer',
    'Web Designer',
    'React',
    'Next.js',
    'TypeScript',
    'Figma',
    'Photoshop',
    'Illustrator',
    'Development Portfolio',
    'Web Design Projects',
    'Projects Showcase',
  ],
  authors: [
    {
      name: 'Camila Salles',
      url: new URL('https://github.com/miaslls'),
    },
  ],
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      pt: '/pt',
    },
  },
  generator: 'Next.js',
  referrer: 'no-referrer',
  metadataBase: new URL('https://camilasalles.dev'),
};

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work_sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export function generateStaticParams() {
  return getStaticParams();
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={params.locale}
      className={`${work_sans.variable} ${outfit.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>

      <body>
        <DeviceProvider>
          <ThemeProvider>
            <I18nProviderClient locale={params.locale}>
              <div className="layout_container">
                <Header />
                <div className="child_container">{children}</div>
                <Footer />
              </div>
            </I18nProviderClient>
          </ThemeProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
