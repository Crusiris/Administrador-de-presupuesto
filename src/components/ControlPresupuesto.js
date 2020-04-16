import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {reviewBudget} from '../helpers';



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
 
ControlPresupuesto.propTypes={
    budget:PropTypes.number.isRequired,
    restBudget:PropTypes.number.isRequired
}
export default ControlPresupuesto;