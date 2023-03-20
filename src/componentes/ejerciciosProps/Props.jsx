import React from 'react';
import PropsHijo1 from './PropsHijo1';
const Props = () => {
    const persona =  {
        nombre: "ricardo",
        apellido: "manzo",
        caracteristicas: "alto, barbudo, pelo negro"   
     }
    return (
        <>
          <PropsHijo1 persona={persona} />
        </>
    );
}

export default Props;
