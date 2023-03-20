import React from 'react';

const PropsHijo1 = ({persona}) => {
    return (
        <div>
            <div>
            <h1>hola {persona.nombre} </h1>
            <p>{persona.caracteristicas} </p>
        </div>
        </div>
    );
}

export default PropsHijo1;
