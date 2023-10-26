import Image from 'next/image';

import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import SideBar from '@/app/dashboard/components/Sidebar';
import { cn } from '@/lib/utils';

const LeftMenu = ({ isMobile }: { isMobile?: boolean }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <div className="flex items-center gap-6 max-h-[90vh]">
      <Sheet open={isMobile}>
        <SheetTrigger>
          <FiMenu size={24} className="block lg:hidden" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className={cn(`w-[240px] lg:border-none lg:shadow-none`)}
          isMobile={isMobile}
        >
          <SheetHeader>
            <SheetTitle className="w-full m-auto h-[42px] ml-[10px]">
              <Image
                src={'/images/dashboard/Logo leftbar.png'}
                width={117}
                height={42}
                alt="Logo Dashboard"
              />
            </SheetTitle>
            <SheetDescription>
              <SideBar />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Image
        src={'/images/dashboard/logo.jpg'}
        width={84}
        height={30}
        alt="Logo Dashboard"
      />
    </div>
  );
};

export default LeftMenu;
