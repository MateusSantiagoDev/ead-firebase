import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Cursos } from './pages/Cursos/Cursos';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>          

          <Route path="/:nomeCurso/:nomeModulo/:nomeAula">
            <div className="aula-video">Mostrar aula</div>
          </Route>

          <Route path="/:nomeCurso/:nomeModulo">
            <div className="aulas">Lista Aulas</div>
          </Route>

          <Route path="/:nomeCurso">
            <div className="modulos">Lista Módulos</div>
          </Route>

          <Route path="/" Component={<Cursos />}/>
            
       

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
