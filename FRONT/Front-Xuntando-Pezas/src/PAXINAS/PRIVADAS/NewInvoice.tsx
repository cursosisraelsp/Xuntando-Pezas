// App.tsx
import React, { useState } from 'react';
import './App.css';
import InvoiceHeader from '../../componentes/InvoiceHeader';
import InvoiceDetails from '../../componentes/InvoiceDetails';
import InvoiceItemsTable from '../../componentes/InvoiceItemsTable';
import FileUpload from '../../componentes/FileUpload';

interface Customer {
  id: string;
  name: string;
  companyName: string;
  companyVat: string;
  companyAddress: string;
  companyCity: string;
  shippingName: string;
  shippingVat: string;
  shippingAddress: string;
  shippingCity: string;
}
interface InvoiceItem {
    id: number;
    serviceProduct: string;
    quantity: number;
    price: number;
    unit: string;
    vatRate: number;
    total: number;
  }
function App() {
  const [isRecurringInvoice, setIsRecurringInvoice] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]); // Estado para los clientes
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('');
  const [invoiceNumber, setInvoiceNumber] = useState<string>('INV-2024-001');
  const [invoiceDate, setInvoiceDate] = useState<string>('');
  const [paymentTerm, setPaymentTerm] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([
    { id: 1, serviceProduct: 'Consultoría (Horas)', quantity: 2, price: 50, unit: 'hora(s)', vatRate: 21, total: 0 },
  ]);

  // Efecto para obtener los clientes desde el backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3001/customers'); // Ajustar la URL si es diferente
        const data: Customer[] = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      }
    };
    fetchCustomers();
  }, []);

  const handleCancel = () => {
    alert('Se ha cancelado la creación de la factura.');
    setIsRecurringInvoice(false);
    setSelectedCustomerId('');
    setInvoiceNumber('INV-2024-001');
    setInvoiceDate('');
    setPaymentTerm('');
    setDueDate('');
    setInvoiceItems([{ id: 1, serviceProduct: 'Consultoría (Horas)', quantity: 2, price: 50, unit: 'hora(s)', vatRate: 21, total: 0 }]);
  };

  const handleDone = async () => {
    alert('Se han guardado los datos de la factura.');
    try {
      const invoiceData = {
        isRecurringInvoice,
        customerId: selectedCustomerId,
        invoiceNumber,
        invoiceDate,
        paymentTerm,
        dueDate,
        invoiceItems,
      };

      const response = await fetch('http://localhost:3001/invoices', { //Ajustar la dirección
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      });

      if (!response.ok) {
        throw new Error(`Error al guardar la factura: ${response.status}`);
      }
      const result = await response.json();
      console.log('Respuesta del servidor:', result);
      // Aquí podrías redirigir a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al enviar los datos de la factura:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  const handleRecurringChange = (checked: boolean) => {
    setIsRecurringInvoice(checked);
    console.log('Make recurring:', checked);
  };

  const handleInvoiceItemsChange = (newItems: InvoiceItem[]) => {
    setInvoiceItems(newItems);
  };

  const handleCustomerSelect = (customerId: string) => {
    setSelectedCustomerId(customerId);
  };

  const handleInvoiceNumberChange = (number: string) => {
    setInvoiceNumber(number);
  };

  const handleInvoiceDateChange = (date: string) => {
    setInvoiceDate(date);
  };

  const handlePaymentTermChange = (term: string) => {
    setPaymentTerm(term);
  };

  const handleDueDateChange = (date: string) => {
    setDueDate(date);
  };

  return (
    <div className="App">
      <InvoiceHeader
        onCancel={handleCancel}
        onDone={handleDone}
        isRecurring={isRecurringInvoice}
        onRecurringChange={handleRecurringChange}
      />
      <InvoiceDetails
        customers={customers}
        selectedCustomer={selectedCustomerId}
        onCustomerSelect={handleCustomerSelect}
        invoiceNumber={invoiceNumber}
        onInvoiceNumberChange={handleInvoiceNumberChange}
        invoiceDate={invoiceDate}
        onInvoiceDateChange={handleInvoiceDateChange}
        paymentTerm={paymentTerm}
        onPaymentTermChange={handlePaymentTermChange}
        dueDate={dueDate}
        onDueDateChange={handleDueDateChange}
      />
      <InvoiceItemsTable
        items={invoiceItems}
        onItemsChange={handleInvoiceItemsChange}
      />
      <FileUpload
        onFileUploaded={(file) => {
          console.log('Archivo subido en App:', file);
        }}
      />
    </div>
  );
}

export default App;
