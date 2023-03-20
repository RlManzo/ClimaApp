import React from 'react';
import { useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
const WheaterPanel = () => {
    const [wheater, setWheater] = useState([])
    const [foreCast, setForeCast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState (false)
    const [location, setLocation] = useState("")

    const getLocation = (loc)=>{
        let cityUrl = "&q="
        setLoading(true);
        setLocation(loc)
        const search = cityUrl + loc

        fetch(`https://api.openweathermap.org/data/2.5/weather?${search}&appid=f00dff2fbdd0f00cdf3b6e9578f91b32&lang=es `)
        .then(response => response.json())
        .then(wheaterData =>{
            console.log(wheaterData)
          setWheater(wheaterData)
        }).catch(error =>{ 
        console.log(error)
        setLoading(false)
        setShow(false)
    })
   // urlWheater = urlWheater + cityUrl + loc

   fetch(`https://api.openweathermap.org/data/2.5/forecast?${search}&appid=f00dff2fbdd0f00cdf3b6e9578f91b32&lang=es `)
        .then(response => response.json())
        .then(foreCastData =>{
            console.log(foreCastData)
          setForeCast(foreCastData)
          setLoading(false)
          setShow(true)
        }).catch(error =>{ 
        console.log(error)
        setLoading(false)
        setShow(false)
    })

    }

    
    return (
        <>
          <Form newLocation={getLocation} />  
          <Card showData={show} loadingData={loading}  wheater={wheater} foreCast={foreCast} />
        </>
    );
}

export default WheaterPanel;
