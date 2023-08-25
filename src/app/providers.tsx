'use client';

import { Toaster } from 'react-hot-toast';

import { TOAST_DEFAULT_OPTIONS } from '@/config/helpers/toast.helper';

import CusThemeProvider from '@/theme';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CusThemeProvider>{children}</CusThemeProvider>
      <Toaster {...TOAST_DEFAULT_OPTIONS} />
    </>
  );
};

export default AppProvider;
