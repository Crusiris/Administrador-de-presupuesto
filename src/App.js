import React, {useState, useEffect} from 'react';
import Question from './components/Question'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
//State del presupuesto
const [budget, saveBudget] = useState(0);
//State del restante del presupuesto
const [restBudget, saveRest]= useState(0);
//State del componente que se va mostrar
const[toshowquetion, modifyToshowquetion] = useState(true);
//State de gastos
const [egress, setEgress] = useState([]);
//State de gasto [INDIVIDUAL]
const [egres, setEgres]=useState({})
const [createegres, setCreateEgres]=useState(false)

//UseEffect que actualiza el restante
useEffect(()=>{
if(createegres){
  //agregando el nuevo presupuesto
  setEgress([
    ...egress,
    egres
  ])

  //resta del presupuesto actual

  const remainingBudget = restBudget-egres.quantity;
  saveRest(remainingBudget)

  //reseteando a false
  setCreateEgres(false);
}

},[egres, createegres, egress, restBudget])


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
                    setEgres={setEgres}
                    setCreateEgres={setCreateEgres}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado
                    egress={egress}
                    />

                    <ControlPresupuesto
                    budget={budget}
                    restBudget={restBudget}
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
