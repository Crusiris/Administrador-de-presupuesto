import React from 'react'

const Gasto = ({egres}) => (
    <li className="gastos">
            <p>
                {egres.nameegress}
                <span className="gasto">$ {egres.quantity}</span>
            </p>
    </li>
)
export default Gasto;