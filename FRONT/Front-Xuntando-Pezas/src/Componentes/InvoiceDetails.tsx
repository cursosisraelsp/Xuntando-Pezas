import React, { useState, useEffect } from 'react';
import { Calendar, Edit } from "lucide-react";
import '../componentes/InvoiceDetails.css';

interface InvoiceDetailsProps {
  customers: {
    id: string;
    name: string;
    companyName: string;
    companyVat: string;
    companyAddress: string;
    companyCity: string;
    shippingName: string;
    shippingVat: string;
    shippingAddress: string;
    shippingCity: string
  }[];
  selectedCustomer: string;
  invoiceNumber: string;
  invoiceDate: string;
  paymentTerm: string;
  dueDate: string;
  onCustomerSelect: (customerId: string) => void;
  onInvoiceNumberChange: (number: string) => void;
  onInvoiceDateChange: (date: string) => void;
  onPaymentTermChange: (term: string) => void;
  onDueDateChange: (date: string) => void;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = (props) => {
  // Estados locales, inicializados con props
  const [localCompanyDetails, setLocalCompanyDetails] = useState({
    name: '',
    vat: '',
    address: '',
    city: '',
  });

  const [localShippingAddress, setLocalShippingAddress] = useState({
    name: '',
    vat: '',
    address: '',
    city: '',
  });

  const [localDueDate, setLocalDueDate] = useState('');
  const [isEditingDueDate, setIsEditingDueDate] = useState(false);
  const [localSelectedCustomer, setLocalSelectedCustomer] = useState('');
  const [localInvoiceNumber, setLocalInvoiceNumber] = useState('');
  const [localInvoiceDate, setLocalInvoiceDate] = useState('');
  const [localPaymentTerm, setLocalPaymentTerm] = useState('');


  const paymentTermsOptions = [
    { value: '30', label: 'Net 30 days' },
    { value: '60', label: 'Net 60 days' },
    { value: '90', label: 'Net 90 days' },
    { value: 'dueOnReceipt', label: 'Due on Receipt' },
  ];

  // Sincronizar estados locales con props entrantes
  useEffect(() => {
    setLocalSelectedCustomer(props.selectedCustomer);
    setLocalInvoiceNumber(props.invoiceNumber);
    setLocalInvoiceDate(props.invoiceDate);
    setLocalPaymentTerm(props.paymentTerm);
    setLocalDueDate(props.dueDate);
  }, [props.selectedCustomer, props.invoiceNumber, props.invoiceDate, props.paymentTerm, props.dueDate]);


  // Calcula la fecha de vencimiento cuando cambia el plazo de pago
  useEffect(() => {
    if (localPaymentTerm && localPaymentTerm !== 'dueOnReceipt') {
      const days = parseInt(localPaymentTerm, 10);
      if (!isNaN(days)) {
        const today = new Date();
        const calculatedDueDate = new Date(today.setDate(today.getDate() + days));
        const formattedDate = `${calculatedDueDate.getDate()} / ${calculatedDueDate.getMonth() + 1} / ${calculatedDueDate.getFullYear()}`;
        setLocalDueDate(formattedDate);
      }
    } else if (localPaymentTerm === 'dueOnReceipt') {
      const today = new Date();
      const formattedDate = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;
      setLocalDueDate(formattedDate);
    } else {
      setLocalDueDate('');
    }
  }, [localPaymentTerm]);

  // Actualiza los detalles de la compañía y el envío al cambiar el cliente
  useEffect(() => {
    if (localSelectedCustomer) {
      const selected = props.customers.find((c) => c.id === localSelectedCustomer);
      if (selected) {
        setLocalCompanyDetails({
          name: selected.companyName,
          vat: selected.companyVat,
          address: selected.companyAddress,
          city: selected.companyCity,
        });
        setLocalShippingAddress({
          name: selected.shippingName,
          vat: selected.shippingVat,
          address: selected.shippingAddress,
          city: selected.shippingCity,
        });
      }
    } else {
      setLocalCompanyDetails({ name: '', vat: '', address: '', city: '' });
      setLocalShippingAddress({ name: '', vat: '', address: '', city: '' });
    }
  }, [localSelectedCustomer, props.customers]);

  const handleCustomerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCustomerId = e.target.value;
    setLocalSelectedCustomer(newCustomerId);
    props.onCustomerSelect(newCustomerId); // Llama al manejador de App
  };

  const handleInvoiceNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInvoiceNumber = e.target.value;
    setLocalInvoiceNumber(newInvoiceNumber);
    props.onInvoiceNumberChange(newInvoiceNumber);
  };

  const handleInvoiceDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInvoiceDate = e.target.value;
    setLocalInvoiceDate(newInvoiceDate);
    props.onInvoiceDateChange(newInvoiceDate);
  };

  const handlePaymentTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPaymentTerm = e.target.value;
    setLocalPaymentTerm(newPaymentTerm);
    props.onPaymentTermChange(newPaymentTerm);
  };

  const handleDueDateChange = (newDueDate: string) => {
    setLocalDueDate(newDueDate);
    props.onDueDateChange(newDueDate);
  };


  return (
    <div className="invoice-details-container">
      <div className="left-column">
        <div className="customer-selector">
          <label htmlFor="customer">Customer</label>
          <select
            id="customer"
            value={localSelectedCustomer}
            onChange={handleCustomerChange}
          >
            <option value="">Select Customer</option>
            {props.customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="company-shipping-container">
          <div className="company-details">
            <div className="section-title">
              Company Details
              <Edit
                className="edit-icon"
                size={16}
              />
            </div>
            <div>Name: {localCompanyDetails.name}</div>
            <div>VAT: {localCompanyDetails.vat}</div>
            <div>Address: {localCompanyDetails.address}</div>
            <div>City: {localCompanyDetails.city}</div>
          </div>
          <div className="shipping-address">
            <div className="section-title">
              Shipping Address
              <Edit
                className="edit-icon"
                size={16}
              />
            </div>
            <div>Name: {localShippingAddress.name}</div>
            <div>VAT: {localShippingAddress.vat}</div>
            <div>Address: {localShippingAddress.address}</div>
            <div>City: {localShippingAddress.city}</div>
          </div>
        </div>
      </div>

      <div className="right-column">
        <div className="invoice-number">
          <label htmlFor="invoiceNumber">Invoice #</label>
          <input
            type="text"
            id="invoiceNumber"
            value={localInvoiceNumber}
            onChange={handleInvoiceNumberChange}
          />
        </div>
        <div className="date">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            placeholder="dd / mm / aaaa"
            value={localInvoiceDate}
            onChange={handleInvoiceDateChange}
          />
        </div>
        <div className="payment-term">
          <label htmlFor="paymentTerm">Payment Term</label>
          <select
            id="paymentTerm"
            value={localPaymentTerm}
            onChange={handlePaymentTermChange}
          >
            <option value="">Select Term</option>
            {paymentTermsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="due-date">
          <label htmlFor="dueDate">Due Date</label>
          <div className="due-date-input-container">
            <input
              type="text"
              id="dueDate"
              placeholder="dd / mm / aaaa"
              value={localDueDate}
              readOnly
            />
            {/* Icono de calendario */}
            <Calendar
              className="calendar-icon"
              size={20}
              onClick={() => setIsEditingDueDate(!isEditingDueDate)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;




