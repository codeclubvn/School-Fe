import ManagerSidebar from './ManagerSidebar';

const ManagerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-10">
      <ManagerSidebar />
      <div>{children}</div>
    </div>
  );
};

export default ManagerLayout;
