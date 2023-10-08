import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ManagerLayout from '@/components/manager/ManagerLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'School FE',
  description: 'School FE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${inter.className} container-layout`}>
      <ManagerLayout>{children}</ManagerLayout>
    </main>
  );
}
