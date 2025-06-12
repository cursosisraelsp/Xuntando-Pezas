import React from "react";
import { IconoFuncion } from "../IconoFuncion";
import { Imaxes } from "../../assets/Imaxes";
import "../../estilo/Customers.App.css";
interface Customer {
  id:number;
  name: string;
  email: string;
  status: string;
  role: string;
}

interface Props {
  customers: Customer[];
  funcionEvento: (customer:Customer,accion:string) => (event: React.MouseEvent) => void
}

export const CustomersTableBody: React.FC<Props> = ({ customers,funcionEvento }) => {
  
  return (
    <tbody className="body-tabla">
      {customers.map((customer, index) => (
        <tr key={index}>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.status}</td>
          <td>{customer.role}</td>
          <td>
            <IconoFuncion imaxeUser={Imaxes.editar} estilo="estilo-icono-customers" funcion={funcionEvento(customer,"editar")}/>
            <IconoFuncion imaxeUser={Imaxes.papelera} estilo="estilo-icono-customers" funcion={funcionEvento(customer,"borrar")}/>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
