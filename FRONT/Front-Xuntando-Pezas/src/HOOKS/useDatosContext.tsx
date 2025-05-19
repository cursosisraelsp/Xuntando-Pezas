import {useContext} from 'react';
import { LocalContext } from '../0.CONTEXTO.App';
//
function useDatosContext() {
  const contexto = useContext(LocalContext);
if (!contexto) {
    throw new Error("Proveedorcontexto debe estar dentro de LocalContext.Provider");
}
    return contexto;
  }

export {
    useDatosContext
}