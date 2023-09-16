'use client';

import TopCollection from '@/components/manager/TopCollection';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  return (
    <div>
      <Button
        onClick={() => console.log('called ')}
        className="text-white rounded-2xl"
        title="button"
      >
        test
      </Button>
      {/* <Input
        prefix="this is the prefix"
        onChange={(e) => console.log('e :', e.target.value)}
      /> */}
      <TopCollection title="Thêm học sinh mới" search />
    </div>
  );
};

export default Dashboard;
