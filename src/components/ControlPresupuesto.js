import React, {Fragment} from 'react'
import {reviewBudget} from '../helpers'

const ControlPresupuesto = ({budget, restBudget}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                    Presupuesto: {budget}
            </div>
            <div className={reviewBudget(budget,restBudget)}>
                Restante: {restBudget}
            </div>
        </Fragment>
     );
}
 
export default ControlPresupuesto;