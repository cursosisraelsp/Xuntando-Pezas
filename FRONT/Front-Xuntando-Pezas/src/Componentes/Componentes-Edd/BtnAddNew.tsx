import "../../estilo/estilo-invoices/BtnAddNew.css";
import { Link } from "react-router-dom";

export default function BtnAddNew() {
    return(
        <div className="btn-new-bar">
          <Link to="/app/newinvoice">  
            <button className="btn-header-right">
                <span className="symbol-btn-header-right">+
                </span>
                Add New
            </button>
          </Link>            
        </div>
    )
}

