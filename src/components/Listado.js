import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({egress}) => (  
        <div className="gastos-realizados">
            <h2>Listado</h2>
                {egress.map(egres=>(
                    <Gasto 
                    key={egres.id}
                    egres={egres}
                    />
                ))}
        </div>
)
 
Listado.propTypes={
    egress:PropTypes.array.isRequired
}
export default Listado;