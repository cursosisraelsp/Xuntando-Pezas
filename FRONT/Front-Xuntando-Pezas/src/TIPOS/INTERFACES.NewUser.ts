export interface DatosNewUser {
    nombre: string;
    apellidos: string;
    email: string;
    profesion: string;
    rol: string;
    imagen?:string | File | null; 
  }
  