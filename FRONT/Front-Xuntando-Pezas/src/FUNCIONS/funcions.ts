export const datosAFormatoForm = ()=>{

}

export const adaptoToken = ():string=>{
  type user = {
    usuario: string
  };
  // parse traballa con string, 'getItem' devolve `string` ou `null`, entón temos a comparación
  // en caso de null o operador vai situar na variable dato as ''
  let dato = localStorage.getItem("usuario") ?? ''
  const datoUsuario : user = {
    usuario: dato
  }
  console.log("datoUsuario.usuario ",datoUsuario.usuario)
  return datoUsuario.usuario
}