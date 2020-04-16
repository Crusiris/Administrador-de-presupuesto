import React, {Fragment} from 'react'

const ControlPresupuesto = ({budget, restBudget}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                    Presupuesto: {budget}
            </div>
            <div className="alert">
                Restante: {restBudget}
            </div>
        </Fragment>
     );
}
 
export default ControlPresupuesto;