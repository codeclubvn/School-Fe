import { Fragment } from 'react';

import './style.css';

interface InputProps {
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (val: string) => void;
  size?: 'md' | 'lg';
  color?: 'white' | 'gray';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = ({
  label,
  className,
  placeholder,
  value,
  error,
  disabled,
  onChange,
  size = 'md',
  color = 'white',
  prefix,
  suffix,
}: InputProps) => {
  return (
    <div className="flex flex-col justify-start">
      {label && <label className="mb-1 text-xl leading-6">{label}</label>}
      <div className="relative">
        {prefix && (
          <div className="absolute left-1.5 inset-y-0 flex items-center justify-center">
            {prefix}
          </div>
        )}
        <input
          className={`input ${error ? 'input--error' : ''} input--${size}${
            prefix ? '--prefix' : ''
          }${suffix ? '--suffix' : ''} input--${color} ${className}`}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {suffix && (
          <div className="absolute right-1.5 inset-y-0 flex items-center justify-center">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
