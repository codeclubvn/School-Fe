'use client';

import useWindowSize from '@/hooks/useWindowSize';

import HeaderDashboard from '@/components/layout/dashboard/Header';

import ContentDashboard from './components/ContentDashboard';

const Dashboard = () => {
  const { width } = useWindowSize();
  return (
    <div className="">
      {width < 1024 ? (
        <>
          <HeaderDashboard />
          <ContentDashboard isMobile={false} />
        </>
      ) : (
        <ContentDashboard isMobile={true} />
      )}
    </div>
  );
};

export default Dashboard;
