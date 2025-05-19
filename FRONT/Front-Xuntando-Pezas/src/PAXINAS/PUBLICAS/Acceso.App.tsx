import { useState } from "react";
import { useDatosContext } from "../../HOOKS/useDatosContext";
import { DatosUser } from "../../TIPOS/INTERFACES.App";
const AccesoApp = () => {
  const {login}  = useDatosContext();
  const [inputs, setInputs] = useState<DatosUser>({
    username:"",
    age:""
  });
  
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(inputs);
  login(inputs)
}


return (<>
<form onSubmit={handleSubmit}>
    <label>Introduce o teu nome:
    <input 
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
    />
    </label>
    <label>Introduce a túa idade:
      <input 
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
  </form>
</>
  
)
  };
  
  
  export default AccesoApp;