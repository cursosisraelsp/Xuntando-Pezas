export interface InvoiceItem {
    id: number;
    serviceProduct: string;
    quantity: number;
    price: number;
    unit: string;
    vatRate: number;
    total: number;
  }