import React,{createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
//### A miña
//export const LocalContext = createContext<object>({}); // inicializo
//
import {LocalContextType} from './TIPOS/INTERFACES.App'
import { Comunicacion } from './COMUNICACION.HTTP/Comunicacion.App';
import { endpoints, urlServidorLocal } from './DATOS/datos';

export const LocalContext = createContext<LocalContextType | null>(null);

function Proveedorcontexto({ children }: { children: React.ReactNode }){
    const [isUserLogueado,setIsUserLogueado] = useState(false)
    let navigate = useNavigate();


    const login = async (dato:any)=>{
        
        let oToken = await Comunicacion.metodoPost(`${urlServidorLocal}/${endpoints.acceso}`,dato);
        console.log("Comunicacion.isUser() ",Comunicacion.isUser(oToken))
        if(Comunicacion.isUser(oToken)){
            console.log("Entras?????")
            setIsUserLogueado(true)
            navigate('/app')
        }
    }



    const logout =()=>{
        console.log("estou en Proveedorcontexto en logout: ")
        localStorage.removeItem("usuario");
        setIsUserLogueado(false)
        navigate('/')
        
    }
    
    return (
        <LocalContext.Provider value={{login,logout,isUserLogueado}}>
            {children}
        </LocalContext.Provider>
    )
}

export{
    Proveedorcontexto
}