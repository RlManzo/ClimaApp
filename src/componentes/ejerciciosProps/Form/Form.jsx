import React from 'react';
import { useState } from 'react';
import Reload from '../Reload/Reload';
const Form = ({newLocation}) => {
  const [city, setCity] = useState("")
  const onForm= (e)=>{
    e.preventDefault();
    console.log({city})
    if(!city){
    alert("ciudad no encontrada!")
    
    }
    else{
    newLocation(city)}
      
  }
    return (
        <div className='text-center'>
          <nav className="navbar bg-body-tertiary ">
            <div className="centrar text-center">
              <form className="d-flex " role="search" onSubmit={onForm} >
                <div className='input-group '>
                 <input className="form-control" type="search" placeholder="Ciudad" aria-label="Search" onChange={(e)=> setCity(e.target.value)}/>
                 <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
              </div>
              </form>
            </div>
          </nav>
        </div>
    );
}

export default Form;
