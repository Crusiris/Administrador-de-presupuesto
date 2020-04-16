import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({setEgres, setCreateEgres}) => {
    //State para el nombres y el monto del gasto
    const [ nameegress, setNameEgress ]= useState('');
    const [ quantity, saveQuantity ]= useState(0);

    //State para los errores en los input de gastos
    const [error, saveError]= useState(false);

    //Funcion para agregar el gasto
    const addEgress = e =>{
        e.preventDefault();

        //validando
        if (nameegress.trim() === "" || quantity < 1 || isNaN(quantity)){
            saveError(true);
            return;
        }
        saveError(false);
        //Construir el gasto

        const egres = {
            nameegress,
            quantity,
            id:shortid.generate()
        }

        //Pasar el gasto al componente principal
        setEgres(egres);
        setCreateEgres(true)
        //resetear el formulario
        setNameEgress('')
        saveQuantity('')
    }

    return ( 
        <form
            onSubmit={addEgress}
        >

            <h2>Agrega tus gastos aqui</h2>

            {error
            ? <Error message="Todos los campos son obligatorios y el presupuesto debe ser mayor que 0"/>
            :
            null
            }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={nameegress}
                onChange={e => setNameEgress(e.target.value)}
                />
            </div>

            <div className="campo">
            <label>Cantidad Gasto</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
                value={quantity}
                onChange={e => saveQuantity( parseInt(e.target.value, 10) )}
                />
            </div>

            <input
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
            />

        </form>
        
     );
}

Formulario.propTypes={
    setEgres:PropTypes.func.isRequired,
    setCreateEgres:PropTypes.func.isRequired
}

export default Formulario;