import ManagerSidebar from './ManagerSidebar';

const ManagerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <ManagerSidebar />
      <div>{children}</div>
    </div>
  );
};

export default ManagerLayout;
