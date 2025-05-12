export type Status = "Busy" | "Free" | "Working" | "Workin" | "On Vacation";

export interface Customer {
  id: number; //el cliente siempre estará identificado por el id
  name: string;
  email: string;
  address: string,
  role: string;
}