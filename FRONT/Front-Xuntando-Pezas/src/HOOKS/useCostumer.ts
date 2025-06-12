import { useEffect, useState } from "react";
import { Customer } from "../TIPOS/customer";

export function useCustomers() {
    const [customers, setCustomers] = useState<Customer[]>([]);
  
    useEffect(() => {
      const loadCustomers = async () => {
        try {
          const response = await fetch("http://localhost:3000/customers");
          const loadedCustomers = await response.json();
          setCustomers(loadedCustomers);
        } catch (error) {
          console.error("Error loading customers:", error);
        }
      };
  
      loadCustomers();
    }, []);
  
    return { customers };
  }