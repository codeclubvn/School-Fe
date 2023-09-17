import { useEffect, useState } from 'react';

interface RadioProps {
  label: string;
  checked: boolean;
  onClick?: (val: string | undefined) => void;
  value: string | undefined;
}

const Radio = ({ label, checked, onClick, value }: RadioProps) => {
  const [currentCheck, setCurrentCheck] = useState<boolean>(checked);
  useEffect(() => {
    setCurrentCheck(checked);
  }, [checked]);

  const handleClick = () => {
    if (currentCheck) {
      onClick && onClick(undefined);
      setCurrentCheck(false);
      return;
    }
    onClick && onClick(value);
    setCurrentCheck(true);
  };
  return (
    <div className="inline-flex items-center justify-start gap-4">
      <div
        className={`w-[26px] h-[26px] rounded-full cursor-pointer ${
          currentCheck ? 'bg-[#0E81A5]/[0.5]' : 'bg-white border border-[#0E81A5]/[0.5]'
        }`}
        onClick={handleClick}
      />
      <p className="text-sm tracking-[0.057px]">{label}</p>
    </div>
  );
};

export default Radio;
