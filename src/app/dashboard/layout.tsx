'use client';

import useWindowSize from '@/hooks/useWindowSize';

import HeaderDashboard from '@/components/layout/dashboard/Header';

import LeftMenuDesktop from './components/LeftMenuDesktop';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { width } = useWindowSize();
  return (
    <>
      {width < 1024 ? (
        <>
          <HeaderDashboard />
          {children}
        </>
      ) : (
        <>
          <LeftMenuDesktop />
          {children}
        </>
      )}
    </>
  );
}
