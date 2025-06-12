import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import './InputGroup.css';

interface InputGroupProps {
  id: string;
  label: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = ''
}) => {
  return (
    <div className="input-group">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
