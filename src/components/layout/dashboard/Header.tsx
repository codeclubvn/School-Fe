'use client';

import Image from 'next/image';

import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import SideBar from '@/app/dashboard/components/Sidebar';

const HeaderDashboard = () => {
  return (
    <div className="flex items-center justify-between p-5 h-[60px] md:p-10 lg:hidden 2xl:hidden  ">
      <div className="flex items-center gap-6 ">
        <Sheet>
          <SheetTrigger>
            <FiMenu size={24} />
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px]">
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
      <div className="flex items-center gap-6 relative">
        <Input
          className="hidden  md:block md:pl-12 md:focus-visible:ring-transparent"
          placeholder="Search..."
        />
        <BiSearch size={24} color="grey" className="relative md:absolute md:left-4 " />

        <Avatar className="block md:hidden">
          <AvatarImage src="/images/dashboard/avatar.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default HeaderDashboard;
