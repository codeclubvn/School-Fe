'use client';

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
      name: 'Lịch',
      href: '/lich',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Thi',
      href: '/thi',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Kết quả',
      href: '/ket-qua',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Học Sinh',
      href: '/hoc-sinh',
      icon: <AiFillCalendar />,
    },
    {
      name: 'Giáo Viên',
      href: '/giao-vien',
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
        <LogoIcon />
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

const LogoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="42"
      viewBox="0 0 28 42"
      fill="none"
    >
      <g clipPath="url(#clip0_375_714)">
        <path
          d="M23.1814 36.7053L15.8513 41.3618C14.5685 42.1835 12.9193 42.1835 11.6365 41.3618L4.12317 36.7053C1.55764 35.0618 0 32.3227 0 29.2183V11.9618H27.2129V29.3096C27.2129 32.3227 25.7469 35.0618 23.1814 36.7053Z"
          fill="#010101"
        />
        <path
          d="M21.5316 34.7876L15.3926 38.6224C14.2931 39.2615 13.0104 39.2615 11.9108 38.6224L5.68027 34.6963C3.57288 33.3267 2.19849 31.0441 2.19849 28.4876V14.1528H24.9217V28.5789C25.0134 31.1354 23.639 33.418 21.5316 34.7876Z"
          fill="#FEC411"
        />
        <path d="M21.9894 3.19611V7.76132H12.9185L21.9894 3.19611Z" fill="#F6871F" />
        <path d="M5.22266 3.19611V7.76132H14.2936L5.22266 3.19611Z" fill="#F6871F" />
        <path d="M21.8986 6.29919H5.22266V9.67745H21.8986V6.29919Z" fill="#FEC411" />
        <path d="M13.6519 0L9.07056 7.76087H18.1415L13.6519 0Z" fill="#FEC411" />
        <path d="M14.2012 7.12195H12.9185V8.40021H14.2012V7.12195Z" fill="#F6871F" />
        <path
          d="M13.6519 27.9396C10.6282 27.9396 8.1543 25.4744 8.1543 22.4614C8.1543 19.4483 10.6282 16.9831 13.6519 16.9831C16.6755 16.9831 19.1494 19.4483 19.1494 22.4614C19.1494 25.4744 16.6755 27.9396 13.6519 27.9396ZM13.6519 19.8135C12.1858 19.8135 10.9947 21.0005 10.9947 22.4614C10.9947 23.9222 12.1858 25.1092 13.6519 25.1092C15.1179 25.1092 16.309 23.9222 16.309 22.4614C16.309 21.0005 15.1179 19.8135 13.6519 19.8135Z"
          fill="#010101"
        />
        <path d="M19.5157 29.2172H7.7876V32.139H19.5157V29.2172Z" fill="#010101" />
      </g>
      <defs>
        <clipPath id="clip0_375_714">
          <rect width="27.2129" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ManagerSidebar;
