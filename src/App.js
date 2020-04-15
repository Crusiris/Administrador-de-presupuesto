import React, {useState} from 'react';
import Question from './components/Question'


function App() {
//State del presupuesto
const [budget, saveBudget] = useState(0);
//State del restante del presupuesto
const [restBudget, saveRest]= useState(0)

  return (
    <div className="container">
      <h1>Gasto semanal</h1>
      <div className="contenido-principal contenido">
      <Question
      saveBudget= { saveBudget }
      saveRest= { saveRest }
      />
      </div>
      
    </div>
  );
}

export default App;
