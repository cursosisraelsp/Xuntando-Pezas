import { useState } from "react";
import { useDatosContext } from "../../HOOKS/useDatosContext";
import { DatosUser } from "../../TIPOS/INTERFACES.App";
import "../../estilo/Acceso.App.css";
import { Titulo } from "../../Componentes/Titulo";
import { Imaxes } from "../../assets/Imaxes";

const AccesoApp = () => {
  const {login}  = useDatosContext();
  const [inputs, setInputs] = useState<DatosUser>({
    username:"",
    pwd:""
  });
  
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(inputs);
  await login(inputs)
}


return (<div className="estilo-acceso">
  
<form className="form-acceso" onSubmit={handleSubmit}>
    <Titulo titulo="Login" estilo="estilo-titulo"/>
    <label className="label-acceso">
      <img className="imaxes-acceso" src={Imaxes.usuario} alt="usuario" />
      
    <input 
      className="input-acceso"
      type="text" 
      name="username" 
      placeholder="Introduce o teu nome"
      value={inputs.username || ""} 
      onChange={handleChange}
    />
    </label>
    <label className="label-acceso" >
    <img className="imaxes-acceso" src={Imaxes.mensaxeSecreto}  alt="usuario" />
      <input 
        className="input-acceso"
        type="password" 
        name="pwd" 
        placeholder="Introduce o teu password"
        value={inputs.pwd || ""} 
        onChange={handleChange}
      />
      </label>
      <label>{/* <input className="input-acceso" type="submit" /> */}<button type="submit" className="input-acceso">Enviar</button></label>
      
  </form>
</div>
  
)
  };
  
  
  export default AccesoApp;