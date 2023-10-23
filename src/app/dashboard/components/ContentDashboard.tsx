import LeftMenu from './LeftMenu';

const ContentDashboard = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <div className="w-full h-[100vh] bg-[#FAFCFE] relative">
      <LeftMenu isMobile={isMobile} />
    </div>
  );
};

export default ContentDashboard;
