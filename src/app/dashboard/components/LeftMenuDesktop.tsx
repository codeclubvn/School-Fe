import Image from 'next/image';

import { useEffect, useState } from 'react';

import SideBar from '@/app/dashboard/components/Sidebar';

const LeftMenuDesktop = ({ isMobile }: { isMobile?: boolean }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <div className="flex items-center gap-6 h-full overflow-y-auto fixed top-0 left-0 z-10 flex-col ">
      <Image
        src={'/images/dashboard/Logo leftbar.png'}
        width={117}
        height={42}
        alt="Logo Dashboard"
        className="mt-[20px] start-0"
      />
      <SideBar />
    </div>
  );
};

export default LeftMenuDesktop;
