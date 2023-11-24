import './globals.css';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { I18nProviderClient } from '@/locales/client';

import Header from '@components/header/header';
import Footer from '@components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Camila Salles | Portfolio',
  description: 'description',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Header />

        <I18nProviderClient locale={params.locale}>
          {children}
        </I18nProviderClient>

        <Footer />
      </body>
    </html>
  );
}
