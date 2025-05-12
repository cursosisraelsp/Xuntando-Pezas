import { useState } from 'react';

import MenuLateral from "../../Componentes/MenuLateral";
import InvoiceHeader from '../../Componentes/InvoiceHeader';
import InvoiceDetails from '../../Componentes/InvoiceDetails';
import InvoiceItemsTable from '../../Componentes/InvoiceItemsTable';
import FileUpload from '../../Componentes/FileUpload';

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

const NewInvoice = ()=>{
    const [isRecurringInvoice, setIsRecurringInvoice] = useState(false);
    const [customers] = useState<Customer[]>([
      {
        id: '1',
        name: 'Cliente A',
        companyName: 'Empresa A',
        companyVat: 'ES12345678',
        companyAddress: 'Calle Falsa 123',
        companyCity: 'Madrid',
        shippingName: 'Contacto A',
        shippingVat: 'ES87654321',
        shippingAddress: 'Avenida Inventada 456',
        shippingCity: 'Barcelona',
      },
      {
        id: '2',
        name: 'Cliente B',
        companyName: 'Negocio B',
        companyVat: 'FR98765432',
        companyAddress: 'Rue de Exemple 789',
        companyCity: 'París',
        shippingName: 'Responsable B',
        shippingVat: 'FR23456789',
        shippingAddress: 'Boulevard Imaginaire 101',
        shippingCity: 'Lyon',
      },
    ]);

    const handleCancel = () => {
        alert('Se ha cancelado la creación de la factura.');
      };
    
      const handleDone = () => {
        alert('Se han guardado los datos de la factura.');
      };
    
      const handleRecurringChange = (checked: boolean) => {
        setIsRecurringInvoice(checked);
        console.log('Make recurring:', checked);
      };
    
      // Estado para almacenar los items de la factura.  Lo inicializamos aquí
      const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([
        { id: 1, serviceProduct: 'Consultoría (Horas)', quantity: 2, price: 50, unit: 'hora(s)', vatRate: 21, total: 0 },
      ]);
    
        // Estado para almacenar la información de la factura seleccionada
      const [selectedCustomerId, setSelectedCustomerId] = useState<string>('');
      const [invoiceNumber, setInvoiceNumber] = useState<string>('INV-2024-001'); // Ejemplo de número de factura
      const [invoiceDate, setInvoiceDate] = useState<string>('');
      const [paymentTerm, setPaymentTerm] = useState<string>('');
      const [dueDate, setDueDate] = useState<string>('');
    
      // Función para manejar los cambios en los items de la factura.  Se pasa al componente InvoiceItemsTable
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


    return <div className="estilo-paxinas-app">
        <div className="flex-1">
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
      <MenuLateral />
    </div>
}

export default NewInvoice;