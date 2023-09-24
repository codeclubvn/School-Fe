'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { AiFillCalendar } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';

const ManagerSidebar = () => {
  const path = usePathname();
  const menu = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: <RxDashboard />,
    },
    {
      name: 'Calendar',
      href: '/calendar',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Exam',
      href: '/exam',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Result',
      href: '/result',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Student',
      href: '/student',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Teacher',
      href: '/teacher',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Notice Board',
      href: '/notice-board',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Live Class',
      href: '/live-class',
      icon: <AiFillCalendar />,
    },
  ];

  return (
    <div className="w-48">
      <div className="flex items-center justify-start gap-4 pl-8 mb-16">
        <Image
          src="/images/manager/logo-sidebar.svg"
          alt="logo-sidebar"
          width={100}
          height={100}
          className="h-[42px] w-auto object-contain"
        />
        <div className="flex flex-col mt-2.5">
          <h1 className="text-[15.254px] font-bold uppercase tracking-[1.525px]">
            OFSPACE
          </h1>
          <p className="text-[#FFBC01] text-[6.934px] tracking-[6.934px]">ACADEMY</p>
        </div>
      </div>
      <div>
        {menu.map(({ name, href, icon }) => (
          <Link
            href={href}
            key={name}
            className={`flex pl-10 py-[14px] items-center justify-start gap-5 ${
              path === href
                ? 'text-[#0E81A5] border-l-2 border-[#0E81A5]'
                : 'hover:text-[#0E81A5]'
            }`}
          >
            <span>{icon}</span> {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManagerSidebar;
