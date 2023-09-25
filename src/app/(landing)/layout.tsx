import type { Metadata } from 'next';

import MainLayout from '@/components/layout/MainLayout';

import AppProvider from '../providers';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'School FE',
  description: 'School FE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
