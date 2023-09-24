'use client';

import Image from 'next/image';

import { useState } from 'react';

import InfoForm from '@/components/manager/InfoForm';
import TopCollection from '@/components/manager/TopCollection';
import Input from '@/components/ui/customize/Input';
import Radio from '@/components/ui/customize/Radio';

interface StudentInfoProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}

enum ParentType {
  DAD = 'dad',
  MOM = 'mom',
}

interface ParentInfoProps {
  type?: ParentType;
}

const Dashboard = () => {
  const [studentInfo, setStudentInfo] = useState<StudentInfoProps>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  });

  const [parentInfo, setParentInfo] = useState<ParentInfoProps>({
    type: ParentType.DAD,
  });

  const handleUpdateInfoStudent = ({
    field,
    val,
  }: {
    field: 'firstName' | 'lastName' | 'phone' | 'email' | 'address';
    val: string;
  }) => {
    setStudentInfo({ ...studentInfo, [field]: val });
  };

  return (
    <div className="pt-12 pr-20">
      <TopCollection title="Add new student" />
      <InfoForm className="mt-5" title="Student Info">
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
          <div className="grid-cols-2 grid gap-9 flex-1">
            <Input
              value={studentInfo.firstName}
              onChange={(val) => handleUpdateInfoStudent({ field: 'firstName', val })}
              label="First Name *"
              placeholder="Your first name"
            />
            <Input
              value={studentInfo.lastName}
              onChange={(val) => handleUpdateInfoStudent({ field: 'lastName', val })}
              label="Last Name"
              placeholder="Your last name"
            />
            <Input
              value={studentInfo.phone}
              onChange={(val) => handleUpdateInfoStudent({ field: 'phone', val })}
              label="Phone"
              placeholder="Your phone number"
            />
            <Input
              value={studentInfo.email}
              onChange={(val) => handleUpdateInfoStudent({ field: 'email', val })}
              label="Email"
              placeholder="Your email"
            />
            <Input
              value={studentInfo.address}
              onChange={(val) => handleUpdateInfoStudent({ field: 'address', val })}
              label="Address"
              placeholder="Your address"
            />
            <Input label="Date of birth" placeholder="Your date of birth" />
          </div>
        </div>
      </InfoForm>

      <InfoForm title="Parent" className="mt-5">
        <div className="grid grid-cols-2 gap-10">
          <Input placeholder="name" />
          <Input placeholder="job" />
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="date of birth" />
            <Input placeholder="address" />
          </div>
          <Input placeholder="phone" />
          <div className="col-span-2 w-full flex justify-end gap-36">
            <Radio
              label="Dad"
              checked={parentInfo.type === ParentType.DAD}
              value={ParentType.DAD}
              onClick={(val) => setParentInfo({ type: val as ParentType })}
            />
            <Radio
              label="Mom"
              checked={parentInfo.type === ParentType.MOM}
              value={ParentType.MOM}
              onClick={(val) => setParentInfo({ type: val as ParentType })}
            />
          </div>
        </div>
      </InfoForm>

      <div className="mt-10 flex items-center justify-end gap-6">
        <button className="border border-[#0E81A5] rounded-[40px] text-[#0E81A5] text-sm py-2 px-5">
          Save Data
        </button>
        <button className="bg-[#0E81A5] rounded-[40px] text-white text-sm py-2 px-5">
          Add
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
