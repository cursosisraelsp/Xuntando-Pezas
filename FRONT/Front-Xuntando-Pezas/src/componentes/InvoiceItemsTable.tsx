// InvoiceItemsTable.tsx
import React, { useState, useEffect } from 'react';
import './InvoiceItemsTable.css';
import { InvoiceItem } from '../types/InvoiceItem';

interface InvoiceItemsTableProps {
  items: InvoiceItem[];
  onItemsChange: (newItems: InvoiceItem[]) => void;
}

const InvoiceItemsTable: React.FC<InvoiceItemsTableProps> = (props) => {
  const [localItems, setLocalItems] = useState<InvoiceItem[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setLocalItems(props.items);
    }, [props.items]);


  useEffect(() => {
    let currentSubTotal = 0;
    localItems.forEach(item => {
      currentSubTotal += item.quantity * item.price;
    });
    setSubTotal(currentSubTotal);
        if (currentSubTotal > 0) {
            setTotalAmount(currentSubTotal * (1 + (localItems.reduce((sum, item) => sum + (item.vatRate / 100) * item.quantity * item.price, 0) / currentSubTotal)));
        }
        else {
             setTotalAmount(0)
        }
  }, [localItems]);

  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: localItems.length + 1,
      serviceProduct: '',
      quantity: 1,
      price: 0,
      unit: 'unidad(es)',
      vatRate: 21,
      total: 0,
    };
    const newItems = [...localItems, newItem]
    setLocalItems(newItems);
    props.onItemsChange(newItems);
  };

    const handleItemChange = (index: number, updatedItem: Partial<InvoiceItem>) => {
        const newItems = localItems.map((item, i) =>
            i === index ? { ...item, ...updatedItem } : item
        );
        setLocalItems(newItems);
        props.onItemsChange(newItems); // Llama a la función onItemsChange para actualizar en App
    };

  return (
    <div className="invoice-items-table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Services/Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Vat %</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {localItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={item.serviceProduct}
                  onChange={(e) => handleItemChange(index, { serviceProduct: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, { quantity: parseFloat(e.target.value) || 0 })}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, { price: parseFloat(e.target.value) || 0 })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.unit}
                  onChange={(e) => handleItemChange(index, { unit: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.vatRate}
                  onChange={(e) => handleItemChange(index, { vatRate: parseFloat(e.target.value) || 0 })}
                />
              </td>
              <td>{(item.quantity * item.price * (1 + (item.vatRate / 100))).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddItem} className="add-item-button">+ Add Services/Product</button>
      <div className="totals-container">
        <div className="sub-total">
          <span>Sub Total ($):</span>
          <span>{subTotal.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total ($):</span>
          <span>{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceItemsTable;

