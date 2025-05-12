import { useEffect, useState } from "react";
import { CustomersTableBody } from "./Customers.TableBody";
import { CustomersTableHeader } from "./Customers.TableHeader";
import { Comunicacion } from "../../COMUNICACION.HTTP/Comunicacion.App";

interface Customer {
  id: number;
  name: string;
  email: string;
  status:string
  role: string;
}

export const CustomersTable = () => {
  const [data, setData] = useState<Customer[]>([{
    id:0,name:"",email:"",status:"",role:""
  }])
  const [editingRowId, setEditingRowId] = useState<boolean | null>(null);
  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((data) => {
        //status
        const customersWithStatus = data.map((customer: Customer) => ({
          ...customer,
          status: "Activo"
        }));
        console.log("espero que sólo entres unha vez")
        setData(customersWithStatus);
      })
      .catch((error) => console.error("Error al obtener customers:", error));
  }, []);
const eventoModificarEliminar = (customer:Customer,accion:string) => (e: React.MouseEvent) =>{
  console.log("customer ",customer.id)
  console.log("accion ",accion)
  ///ENDPOINT customers/editar/:id -> `/customers/editar/${customer.id}`
  //Comunicacion.metodoPut(`/customers/editar/${customer.id}`,customer)

}

const handleChange = (id: number, key: string, value: string) => {
  console.log(id, key, value);
  setData((prev) =>
    prev.map((customer) => (customer.id === id ? { ...customer, [key]: value } : customer))
  );
};

  return (
    <table className="tabla-customers">
      <CustomersTableHeader />
      <CustomersTableBody customers={data} setEdit={setEditingRowId} estado={editingRowId} handleChange={handleChange} funcionEvento={eventoModificarEliminar} />
    </table>
  );
};
