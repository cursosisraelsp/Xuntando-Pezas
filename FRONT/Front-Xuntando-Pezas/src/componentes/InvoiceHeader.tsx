import React from 'react';
import '../componentes/InvoiceHeader.css'; // Archivo de estilos opcional

interface InvoiceHeaderProps {
  onCancel: () => void;
  onDone: () => void;
  isRecurring: boolean;
  onRecurringChange: (checked: boolean) => void;
}

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({ onCancel, onDone, isRecurring, onRecurringChange }) => {
  return (
    <div className="invoice-header">
      <div className="header-left">
        <h2 className="invoice-title">New invoice</h2>
      </div>
      <div className="header-right">
        <div className="recurring-checkbox">
          <label>
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={(e) => onRecurringChange(e.target.checked)}
            />
            Make recurring
          </label>
        </div>
        <div className="header-buttons">
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button className="done-button" onClick={onDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;