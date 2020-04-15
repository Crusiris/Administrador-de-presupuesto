import React, {Fragment, useState} from 'react'
import Error from './Error'

const Question = ({saveBudget, saveRest}) => {

    //definiendo STATE del presupuesto
    const [ quantity, saveQuantity ]= useState(0)

    //definiendo STATE para los errores
    const [ error, saveError ]= useState(false)


    //Funcion que va rescatar los valores del input
    const defineBudget = e =>{
        saveQuantity(parseInt(e.target.value,10));
    }

    const addBudget = e =>{
    e.preventDefault();
    //Validar el valor ingresado en el input
    if(quantity < 1 ||isNaN (quantity)){
        saveError(true)
        return;
    }
    saveError(false);
    saveBudget(quantity);
    saveRest(quantity);

    }

    return (  
        <Fragment>
            <h1>Ingresa tu presupuesto</h1>
             { error ? <Error message="El presupuesto es Incorrecto"/> : null } 
            <form
            onSubmit={addBudget}
            >
            <input
            type="number"
            className="u-full-width"
            placeholder="Ingresa aqui tu presupuesto"
            onChange={defineBudget}
            />
            <input
             type="submit"
             className="button-primary u-full-width"
             value="Definir Presupuesto"
             
            />
            </form>
        </Fragment>
    );
}
 
export default Question;
