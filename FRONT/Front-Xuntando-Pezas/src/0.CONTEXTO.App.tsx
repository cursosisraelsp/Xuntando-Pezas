import React,{createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
//### A miña
//export const LocalContext = createContext<object>({}); // inicializo
//
import {UserData,LocalContextType} from './TIPOS/INTERFACES.App'

export const LocalContext = createContext<LocalContextType | null>(null);

function Proveedorcontexto({ children }: { children: React.ReactNode }){
    const [isUserLogueado,setIsUserLogueado] = useState(false)
    let navigate = useNavigate();
    const login=(dato:UserData)=>{
        console.log("estou en Proveedorcontexto en login: ",dato.username)
        if(dato.username == 'Israel'){
            console.log('estou dentro de filtro: ',dato.username)
            setIsUserLogueado(true)
            navigate('/app')
        }
    }
    const logout =()=>{
        console.log("estou en Proveedorcontexto en logout: ")
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