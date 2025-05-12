
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

type Props = {
  customers: Customer[];
  funcionEvento: (customer: Customer, accion: string) => () => void;
  handleChange: (id: number, key: string, value: string) => void;
  estado: number | null;
  setEdit: React.Dispatch<React.SetStateAction<number | null>>;
};
export const CustomersTableBody: React.FC<Props> = ({ customers,estado,setEdit,handleChange,funcionEvento }) => {
 


  return (<>
    <tbody className="body-tabla">
      {customers.map((customer) => (
        <tr key={customer.id}>
          <td>
            <input
              readOnly={estado !== customer.id}
              value={customer.name}
              onChange={(e) =>
                handleChange(customer.id, "name", e.target.value)
              }
            />
          </td>
          <td><input readOnly={estado !== customer.id}
              value={customer.email}
              onChange={(e) =>
                handleChange(customer.id, "email", e.target.value)
              }/></td>
          <td><input readOnly={estado !== customer.id}
              value={customer.status}
              onChange={(e) =>
                handleChange(customer.id, "status", e.target.value)
              } /></td>
          <td><input readOnly={estado !== customer.id}
              value={customer.role}
              onChange={(e) =>
                handleChange(customer.id, "role", e.target.value)
              } /></td>
          <td>
          <button onClick={() => {
            console.log("clico ",customer.id)
            setEdit(customer.id)}}>
              Editar
          </button>
          <button onClick={() => {
            console.log("clico ",customer.id)
            setEdit(0)}}>
              gardar
          </button>
            <IconoFuncion
              imaxeUser={Imaxes.papelera}
              estilo="estilo-icono-customers"
              funcion={funcionEvento(customer, "borrar")}
            />
            <IconoFuncion
              imaxeUser={Imaxes.gardar}
              estilo="estilo-icono-customers"
              funcion={funcionEvento(customer, "gardar")}
            />
          </td>
        </tr>
      ))}
    </tbody>
    </>
  );
};
