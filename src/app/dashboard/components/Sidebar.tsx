'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const ListBar = [
  {
    id: 1,
    name: 'Dashboard',
    icon: '/images/dashboard/dashboard.svg',
    active: true,
  },
  {
    id: 2,
    name: 'Courses',
    icon: '/images/dashboard/courses.svg',
    active: false,
  },
  {
    id: 3,
    name: 'Routine',
    icon: '/images/dashboard/routine.svg',
    active: false,
  },
  {
    id: 4,
    name: 'Exams',
    icon: '/images/dashboard/exams.svg',
    active: false,
  },
  {
    id: 5,
    name: 'Results',
    icon: '/images/dashboard/results.svg',
    active: false,
  },
  {
    id: 6,
    name: 'Students',
    icon: '/images/dashboard/student.svg',
    active: false,
  },
  {
    id: 7,
    name: 'Messages',
    icon: '/images/dashboard/message.svg',
    active: false,
  },
  {
    id: 8,
    name: 'Notice Board',
    icon: '/images/dashboard/notice board.svg',
    active: false,
  },
  {
    id: 9,
    name: 'Live Class',
    icon: '/images/dashboard/live class.svg',
    active: false,
  },
];
const SideBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="w-[178px] h-[450px] flex flex-col gap-6 mt-8 ">
        {ListBar.map((item) => {
          return (
            <div
              className={`flex gap-4 items-center ml-[10px] hover:cursor-pointer hover:opacity-80 relative ${
                item.active
                  ? "after:content-[''] after:bg-green-600 after:absolute after:top-[-4px] after:left-[-30px] after:w-1 after:h-[130%] after:rounded-r-3xl after:z-[-1]"
                  : ''
              } `}
              key={item.id}
            >
              <Image src={item.icon} width={24} height={24} alt={item.name} />
              <span
                className={`text-sm font-bold ${
                  item.active ? 'text-[#0E927A]' : 'text-[#4D6276]'
                }`}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className=" flex flex-col p-4 rounded-md shadow gap-y-1">
        <Avatar className="block md:hidden">
          <AvatarImage src="/images/dashboard/avatar.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-[16px] font-medium text-[#203B54] text-start">
          Haris Ahmed
        </span>
        <span className="text-[12px] leading-[140%] text-[#A6B1BB] text-start">
          Assistant professor
        </span>
        <span className="text-start text-[#A6B1BB]">
          Dept. of <strong className="text-[#203B54]">Graphic Design</strong>
        </span>
        <Button className="mt-2 mb-4" variant={'btnDashboard'}>
          View profile
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
