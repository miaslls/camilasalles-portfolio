import './globals.css';

import dynamic from 'next/dynamic';
import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import { Work_Sans, Outfit } from 'next/font/google';
import { getStaticParams } from '@/locales/server';
import { I18nProviderClient } from '@/locales/client';
import { getTheme } from '@lib/theme';

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import MobileMenu from '@components/menu/MobileMenu';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const DeviceProvider = dynamic(
  () => import('@providers/DeviceContextProvider'),
  {
    ssr: false,
  }
);

const ThemeProvider = dynamic(() => import('@providers/ThemeContextProvider'), {
  ssr: false,
});

const MenuProvider = dynamic(() => import('@providers/MenuContextProvider'), {
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
  title: 'Camila Salles • development & design',
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

const customToastOptions = {
  style: {
    background: 'var(--accent-02)',
    color: 'var(--light-color)',
    paddingLeft: '1rem',
    borderRadius: '1.5rem',
  },
  iconTheme: {
    primary: 'var(--light-color)',
    secondary: 'var(--accent-02)',
  },
};

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
            <MenuProvider>
              <I18nProviderClient locale={params.locale}>
                <div className="layout_container">
                  <Header />
                  <MobileMenu />

                  <div className="child_container">{children}</div>

                  <Footer />
                  <Toaster
                    position="bottom-center"
                    toastOptions={customToastOptions}
                  />
                  <Analytics />
                  <SpeedInsights />
                </div>
              </I18nProviderClient>
            </MenuProvider>
          </ThemeProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
