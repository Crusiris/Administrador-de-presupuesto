import React, {useState} from 'react';
import Question from './components/Question'
import Formulario from './components/Formulario'

function App() {
//State del presupuesto
const [budget, saveBudget] = useState(0);
//State del restante del presupuesto
const [restBudget, saveRest]= useState(0)

  return (
    <div className="container">
      <header>
          <h1>Gasto semanal</h1>

            <div className="contenido-principal contenido">
              <Question
              saveBudget= {saveBudget}
              saveRest= {saveRest}
              />

            <div className="row">
                <div className="one-half column">
                  <Formulario/>
                </div>
                <div className="one-half column">
                  2
                </div>  
            </div>

            </div>
            </header>
    </div>
  );
}

export default App;
