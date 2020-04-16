import React, {useState} from 'react';
import Question from './components/Question'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
//State del presupuesto
const [budget, saveBudget] = useState(0);
//State del restante del presupuesto
const [restBudget, saveRest]= useState(0);
//State del componente que se va mostrar
const[toshowquetion, modifyToshowquetion] = useState(true);
//State de gastos
const [egress, setEgress] = useState([]);

//funcion para agregar nuevo gasto al array
const addNewEgress = egres=>{
  setEgress([
    ...egress,
    egres

  ])
}

  return (
    <div className="container">
      <header>
          <h1>Gasto semanal</h1>

            <div className="contenido-principal contenido">
              {toshowquetion
              ?
              (
                <Question
                saveBudget= {saveBudget}
                saveRest= {saveRest}
                modifyToshowquetion={modifyToshowquetion}
                />
              )
              :
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                    addNewEgress={addNewEgress}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado
                    egress={egress}
                    />
                  </div>  
               </div>
              )
              }
             
            </div>
        </header>
    </div>
  );
}

export default App;
