import { useDatosContext } from "../../HOOKS/useDatosContext";

const Home = () => {
  const {logout}=useDatosContext();

  return <h1>
    <div>HOME</div>
      <button onClick={logout}>Saír</button>
  </h1>;
  };
  
  
  export default Home;