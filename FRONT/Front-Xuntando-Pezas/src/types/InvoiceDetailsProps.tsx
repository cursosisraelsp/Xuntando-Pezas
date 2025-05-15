import { Customer } from './Customer'; // Asegúrate de que la ruta a Customer sea correcta

export interface InvoiceDetailsProps {
  customers: Customer[];
  selectedCustomer: number;
  onCustomerSelect: (customerId: number) => void;
  invoiceNumber: string;
  onInvoiceNumberChange: (number: string) => void;
  invoiceDate: string;
  onInvoiceDateChange: (date: string) => void;
  paymentTerm: string;
  onPaymentTermChange: (term: string) => void;
  dueDate: string;
  onDueDateChange: (date: string) => void;
}