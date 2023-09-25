import type { AppProps } from 'next/app';
import { Revalia, Roboto } from 'next/font/google';

export const revalia = Revalia({ subsets: ['latin'], weight: ['400'] });
export const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
});
