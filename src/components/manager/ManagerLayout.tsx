import ManagerSidebar from './ManagerSidebar';

const ManagerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-10">
      <ManagerSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ManagerLayout;
