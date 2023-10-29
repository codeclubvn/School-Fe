import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import MainLayout from '@/components/layout/MainLayout';

import AppProvider from '../providers';

import '@/styles/globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'School FE',
  description: 'School FE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <MainLayout>{children}</MainLayout>
    </AppProvider>
  );
}
