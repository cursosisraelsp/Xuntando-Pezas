import { useState, useEffect } from "react";
import "../../estilo/estilo-invoices/ContentListedInvoices.css";

interface Invoice {
  date:string;
  id_invoice: number;
  customer_name: string;
  amount: number;
  due_date: string;
}

export default function ContentListedInvoices() {
    const [invoices, setInvoices] =  useState<Invoice[]>([]);;
    
    useEffect(() => {
    fetch("http://localhost:3000/invoices")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        setInvoices(data);
        console.log("The object is:", data)
      })
      .catch((err) => {
        console.error(err);        
      });
  }, []);

  const numRexistros = invoices.length;



    return( 

    
    <div className="content-listed">
        object here
        <div className="bar-invoices-options">
            <ul>
                <li className="activo">Invoices</li>
                <li className="inactivo">Draft</li>
                <li className="inactivo">Recurring Invoices</li>
            </ul>
        </div>
       {/*  <div className="bar-btn-invoices">
            <button>All <span>Num</span> <span>1€</span></button>
            <button>Unpaid <span>Num</span> <span>1€</span></button>
            <button>Paid <span>Num</span> <span>1€</span></button>
            <button>Cancelled <span>Num</span> <span>1€</span></button>
        </div> */}
        <div className="invoice-table">
            <div className="invoice-table-header">
                <div></div>
                <div>Date</div>
                <div>Number</div>
                <div>Customer</div>
                <div>Amount</div>
                <div>Due Date</div>
                <div>State</div>
            </div>     

            {invoices.map((invoice, index) => (
                <div className={`invoice-table-row row${index + 1}`} key={index}>
                    <div className={`row${index + 1} col-input`}>
                        <input type="checkbox" />
                    </div>
                    <div className={`row${index + 1} col1-date`}>{invoice.date}</div>
                    <div className={`row${index + 1} col2-number`}>{invoice.id_invoice}</div>
                    <div className={`row${index + 1} col3-customer`}>{invoice.customer_name}</div>
                    <div className={`row${index + 1} col4-amount`}>${invoice.amount}</div>
                    <div className={`row${index + 1} col5-duedate`}>{invoice.due_date}</div>
                    <div className={`row${index + 1} col6-state`}>
                        <span>Invoiced</span>
                    </div>
                </div>
            ))}


            {/*<div className="invoice-table-row">
                <div className="row1 col-input"><input type="checkbox" /></div>
                <div className="row1 col1-date">02-21-2018</div>
                <div className="row1 col2-number">00087</div>
                <div className="row1 col3-customer">Reactial</div>
                <div className="row1 col4-amount">$2500</div>
                <div className="row1 col5-duedate">03-17-2018</div>
                <div className="row1 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row2 col-input"><input type="checkbox" /></div>
                <div className="row2 col1-date">02-16-2018</div>
                <div className="row2 col2-number">00086</div>
                <div className="row2 col3-customer">Promotional</div>
                <div className="row2 col4-amount">$1890</div>
                <div className="row2 col5-duedate">11-18-2018</div>
                <div className="row2 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row3 col-input"><input type="checkbox" /></div>
                <div className="row3 col1-date">01-29-2018</div>
                <div className="row3 col2-number">00085</div>
                <div className="row3 col3-customer">Effie Watkins</div>
                <div className="row3 col4-amount">$3400</div>
                <div className="row3 col5-duedate">09-07-2018</div>
                <div className="row3 col6-state"><span>Invoiced</span></div>          
            </div>
            <div className="invoice-table-row">
                <div className="row4 col-input"><input type="checkbox" /></div>
                <div className="row4 col1-date">01-29-2018</div>
                <div className="row4 col2-number">00085</div>
                <div className="row4 col3-customer">Effie Watkins</div>
                <div className="row4 col4-amount">$3400</div>                
                <div className="row4 col5-duedate">09-07-2018</div>
                <div className="row4 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row5 col-input"><input type="checkbox" /></div>
                <div className="row5 col1-date">01-29-2018</div>
                <div className="row5 col2-number">00085</div>
                <div className="row5 col3-customer">Effie Watkins</div>
                <div className="row5 col4-amount">$3400</div>
                <div className="row5 col5-duedate">09-07-2018</div>
                <div className="row5 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row6 col-input"><input type="checkbox" /></div>
                <div className="row6 col1-date">01-29-2018</div>
                <div className="row6 col2-number">00085</div>
                <div className="row6 col3-customer">Effie Watkins</div>
                <div className="row6 col4-amount">$3400</div>                
                <div className="row6 col5-duedate">09-07-2018</div>
                <div className="row6 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row7 col-input"><input type="checkbox" /></div>
                <div className="row7 col1-date">01-29-2018</div>
                <div className="row7 col2-number">00085</div>
                <div className="row7 col3-customer">Effie Watkins</div>
                <div className="row7 col4-amount">$3400</div>                
                <div className="row7 col5-duedate">09-07-2018</div>
                <div className="row7 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row8 col-input"><input type="checkbox" /></div>
                <div className="row8 col1-date">01-29-2018</div>
                <div className="row8 col2-number">00085</div>
                <div className="row8 col3-customer">Effie Watkins</div>
                <div className="row8 col4-amount">$3400</div>
                <div className="row8 col5-duedate">09-07-2018</div>
                <div className="row8 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row9 col-input"><input type="checkbox" /></div>
                <div className="row9 col1-date">01-29-2018</div>
                <div className="row9 col2-number">00085</div>
                <div className="row9 col3-customer">Effie Watkins</div>
                <div className="row9 col4-amount">$3400</div>                
                <div className="row9 col5-duedate">09-07-2018</div>
                <div className="row9 col6-state"><span>Invoiced</span></div>
            </div>
            <div className="invoice-table-row">
                <div className="row10 col-input"><input type="checkbox" /></div>
                <div className="row10 col1-date">01-29-2018</div>
                <div className="row10 col2-number">00085</div>
                <div className="row10 col3-customer">Effie Watkins</div>
                <div className="row10 col4-amount">$3400</div>                
                <div className="row10 col5-duedate">09-07-2018</div>
                <div className="row10 col6-state"><span>Invoiced</span></div>
            </div> */}
        </div>
        <footer className="footer-list">
            <div className="count-db-rows">{numRexistros}/{numRexistros}</div>
            <div className="number-pages">
                {/* <span>First</span>
                <button></button>
                <button></button>
                <span>Last</span> */}
            </div>
        </footer>
    </div>
    )
}