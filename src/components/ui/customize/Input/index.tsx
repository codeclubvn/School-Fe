import { DetailedHTMLProps, Fragment, InputHTMLAttributes, ReactNode } from 'react';

import './style.css';

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange'
  > {
  label?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (val: string) => void;
  sizes?: 'md' | 'lg';
  color?: 'white' | 'gray';
  customPrefix?: ReactNode;
  customSuffix?: ReactNode;
}

const Input = ({
  label,
  value,
  error,
  disabled,
  onChange,
  sizes = 'md',
  color = 'white',
  customPrefix,
  customSuffix,
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col justify-start">
      {label && <label className="mb-1 text-xl leading-6">{label}</label>}
      <div className="relative">
        {customPrefix && (
          <div className="absolute left-1.5 inset-y-0 flex items-center justify-center">
            {customPrefix}
          </div>
        )}
        <input
          className={`input ${error ? 'input--error' : ''} input--${sizes}${
            customPrefix ? '--prefix' : ''
          }${customSuffix ? '--suffix' : ''} input--${color} ${rest.className}`}
          value={value}
          placeholder={rest.placeholder}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {customSuffix && (
          <div className="absolute right-1.5 inset-y-0 flex items-center justify-center">
            {customSuffix}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
