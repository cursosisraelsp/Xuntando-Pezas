import { InvoiceItem } from './InvoiceItem';  //Asegúrate de que la ruta a InvoiceItem sea correcta

export interface InvoiceItemsTableProps {
  items: InvoiceItem[];
  onItemsChange: (newItems: InvoiceItem[]) => void;
}