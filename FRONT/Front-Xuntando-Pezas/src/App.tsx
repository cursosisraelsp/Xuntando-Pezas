import { BrowserRouter } from 'react-router-dom';
import { Proveedorcontexto } from './0.CONTEXTO.App';
import './App.css'
import LogueoApp from './LogueoApp/Logueo.App';
import RutasPublicasApp from './RUTAS/Rutas.Publicas.App';
import RutasPrivadas from './RUTAS/Rutas.Privadas.App';

function App() {

  return (
    <>
      <BrowserRouter>
        <Proveedorcontexto>
          <LogueoApp>
            <RutasPublicasApp />
            <RutasPrivadas />
          </LogueoApp>
        </Proveedorcontexto>
      </BrowserRouter>
    </>
  )
}

export default App
