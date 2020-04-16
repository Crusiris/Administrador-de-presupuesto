import React from 'react'
import Gasto from './Gasto'

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
 
export default Listado;