'use client';

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
      <Input onChange={(e) => console.log('e :', e.target.value)} />
    </div>
  );
};

export default Dashboard;
