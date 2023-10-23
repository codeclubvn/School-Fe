import { BiSearch } from 'react-icons/bi';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

import LeftMenu from '@/app/dashboard/components/LeftMenu';

const HeaderDashboard = () => {
  return (
    <div className="flex items-center justify-between p-5 h-[60px] md:p-10 lg:hidden 2xl:hidden  ">
      <LeftMenu />

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
