import { BiSearch } from 'react-icons/bi';

import Input from '../ui/customize/Input';

interface TopCollectionProps {
  title: string;
  search?: boolean;
  className?: string;
  onSearch?: () => void;
}
const TopCollection = ({ title, search, onSearch, className }: TopCollectionProps) => {
  return (
    <div className={`flex w-full items-center justify-between ${className}`}>
      <p className="text-black text-4xl">{title}</p>
      {search && (
        <Input
          label="This is the label"
          className=""
          placeholder="this is the placeholer"
        />
      )}
    </div>
  );
};

export default TopCollection;
