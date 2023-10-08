import React from 'react';

interface InfoFormProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
const InfoForm = ({ title, children, className }: InfoFormProps) => {
  return (
    <div
      className={`flex flex-col w-full rounded-xl border border-[#A5AAB5] overflow-hidden ${className}`}
    >
      <div className="bg-[#0E81A5] w-full">
        <h2 className=" text-[34px] leading-[34px] px-2.5 py-3 text-white">{title}</h2>
      </div>
      <div className="w-full p-6 pr-20">{children}</div>
    </div>
  );
};

export default InfoForm;
