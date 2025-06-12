import React from 'react';
import './Label.css';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, required = false }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
      {required && <span className="required-asterisk">*</span>}
    </label>
  );
};

export default Label;
