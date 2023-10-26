import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import AppProvider from './providers';

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
    <html lang="en">
      <body className={roboto.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
