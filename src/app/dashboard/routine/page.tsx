'use client';

import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';

import ContentDashboard from '../components/ContentDashboard';
import LeftMenuDesktop from '../components/LeftMenuDesktop';

const RoutinePage = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="ml-[228px] mt-[32px]">
        <div className="flex justify-between">
          <div className="text-skyblue100 text-2xl font-bold flex items-center justify-center ">
            March 13 - 19, 2021
            <MdNavigateNext color="gray" className="rotate-180" size={20} />
            <MdNavigateNext color="gray" size={20} />
            <div></div>
          </div>
        </div>
        <select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
      </div>
    </>
  );
};

export default RoutinePage;
