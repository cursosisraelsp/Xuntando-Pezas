
import "../../estilo/estilo-invoices/SortContentInvoices.css";
import { Imaxes } from "../../assets/Imaxes";

export default function SortContentInvoices() {
    return(
        <div className="sort-content">
            <div>
                <div className="sort-btn-left">
                   <button>Sort By Date</button>
                    <button>Any Date</button>
                    <button className="search-button">                <img
                            src={Imaxes.search_icon}
                            alt="Search"
                            />
                    </button>
                    <input className="search-input" placeholder="Search" />                    
                </div>
            </div>
            <div className="sort-btn-right">
                <button className="btn-view">
                    <img
                      src={Imaxes.gridview_icon}
                      alt="icon-grid"
                    />
                </button>
                <button className="btn-view active">
                    <img
                      src={Imaxes.listview_icon}
                      alt="icon-list"
                    />
                </button>
            </div>
        </div>      

    )
}

