import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({egres}) => (
    <li className="gastos">
            <p>
                {egres.nameegress}
                <span className="gasto">$ {egres.quantity}</span>
            </p>
    </li>
)

Gasto.propTypes={
    egres:PropTypes.object.isRequired
}
export default Gasto;