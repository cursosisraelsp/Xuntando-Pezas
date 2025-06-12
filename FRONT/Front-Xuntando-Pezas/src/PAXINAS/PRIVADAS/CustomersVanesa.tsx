import { CustomersTable } from "../../Componentes/Customers/Customers.Table";

/*Group */
import grupoIconos from "../../assets/ImgCustomers/group.svg";


const Customers = () => {
  return (
  <>
          
          <div className="main_customers">
            <div className="main-header_customers">
              <h1>Customers</h1>
              <button className="botonAnhadir">+ Add New</button>
            </div>
            <div className="divHamburguesa-customers">
              <img
                className="icono-hamburguesa"
                src={grupoIconos}
                alt="hamburguesa"
              />
            </div>
            <CustomersTable />
          </div>
        
    </>
  );
};

export default Customers;
