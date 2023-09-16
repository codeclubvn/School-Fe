'use client';

import Image from 'next/image';

import InfoForm from '@/components/manager/InfoForm';
import TopCollection from '@/components/manager/TopCollection';
import { Button, buttonVariants } from '@/components/ui/button';
import Input from '@/components/ui/customize/Input';

const Dashboard = () => {
  return (
    <div className="pt-12 pr-20">
      <TopCollection title="Thêm học sinh mới" />
      <InfoForm className="mt-5" title="Thông tin học sinh">
        <div className="flex gap-2.5">
          <div className="h-full flex items-center justify-center px-9 pt-8">
            <Image
              src="/images/manager/student.svg"
              width={1000}
              height={1000}
              alt="#student"
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="grid-cols-2 grid gap-9 flex-1 pr-20">
            <Input label="First Name *" placeholder="Your first name" />
            <Input label="Last Name" placeholder="Your last name" />
            <Input label="Phone" placeholder="Your phone number" />
            <Input label="email" placeholder="Your email" />
            <Input label="Address" placeholder="Your address" />
            <Input label="Date of birth" placeholder="Your date of birth" />
          </div>
        </div>
      </InfoForm>
    </div>
  );
};

export default Dashboard;
