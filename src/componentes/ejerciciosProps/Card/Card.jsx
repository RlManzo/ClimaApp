import React from 'react';
import Spinner from '../Spinner/Spinner';
import Reload from '../Reload/Reload';
const Card = ({showData, wheater, loadingData, foreCast}) => {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = day+'/'+month+'/'+year

    let url = ""
    let iconUrl = ""
    let iconUrl3 = ""
    let iconUrl6 = ""
    let iconUrl9 = ""
    let foreCastDate3 = ""
    let foreCastDate6 = ""
    let foreCastDate9 = ""

    if(loadingData){
     return   <Spinner/>
    }
    if(showData === !showData){
        alert("error")
    }
    if(showData){
        url = 'http://openweathermap.org/img/w/'
        iconUrl = url + wheater.weather[0].icon + ".png"
        iconUrl3 = url + foreCast.list[1].weather[0].icon + ".png"
        iconUrl6 = url + foreCast.list[2].weather[0].icon + ".png"
        iconUrl9 = url + foreCast.list[3].weather[0].icon + ".png"

        foreCastDate3 = foreCast.list[1].dt_txt.substring(8, 10) + '/' + foreCast.list[1].dt_txt.substring(5, 7) + '/' + foreCast.list[1].dt_txt.substring(0, 4) + ' '+ foreCast.list[1].dt_txt.substring(11, 13)
        foreCastDate6 = foreCast.list[2].dt_txt.substring(8, 10) + '/' + foreCast.list[2].dt_txt.substring(5, 7) + '/' + foreCast.list[2].dt_txt.substring(0, 4)+' '+ foreCast.list[2].dt_txt.substring(11, 13)
        foreCastDate9 = foreCast.list[3].dt_txt.substring(8, 10) + '/' + foreCast.list[3].dt_txt.substring(5, 7) + '/' + foreCast.list[3].dt_txt.substring(0, 4)+' '+ foreCast.list[3].dt_txt.substring(11, 13)
    }
    return (
        <div className='mt-4'>
            {showData === true 
            ? (
               <div className='container'>
                  <div className='card mb-3 mx-auto  text-dark cardSombra'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <h3 className='card-title text-light'>{wheater.name}</h3>
                            <p className='h5 card-date text-light'>{date}</p>
                            <h1 className='card-temp text-light'>{(wheater.main.temp - 273.15).toFixed(1)}°C</h1>
                            <p className='card-desc text-light'><img src={iconUrl}  alt='icon'/>{wheater.weather[0].description}</p>
                            <img src='https://images.pexels.com/photos/1547730/pexels-photo-1547730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img-fluid rounded-start ' alt=""/>
                        </div>
                        <div className='col-md-8'>
                           <div className='card-body text-start mt-2'>
                                     <h5 className='card-text'>Temperatura maxima: {(wheater.main.temp_max - 273.15).toFixed(1)}°C </h5>
                                     <h5 className='card-text'>Temperatura minima: {(wheater.main.temp_min - 273.15).toFixed(1)}°C </h5>
                                     <h5 className='card-text'>Sensacion termica: {(wheater.main.feels_like - 273.15).toFixed(1)}°C </h5>
                                    <h5 className='card-text'>Humedad: {wheater.main.humidity}% </h5>
                                    <h5 className='card-text'>Velocidad del viento: {wheater.wind.speed} km/s</h5>
                           </div>
                           <hr/>
                               <div className='row mt-5 colClima'>
                                <div className='col'>
                                    <p className='nombreDesc'>{foreCastDate3}hs</p>
                                    <p className='description nombreDesc'><img src={iconUrl3} alt="icon" />{foreCast.list[1].weather[0].description}</p>
                                       <p className='temp nombreDesc'> {(foreCast.list[1].main.temp - 273.5).toFixed(1)}°C</p>      
                                </div>
                                <div className='col'>
                                    <p className='nombreDesc'>{foreCastDate6}hs</p>
                                    <p className='description nombreDesc'><img src={iconUrl6} alt="icon" />{foreCast.list[2].weather[0].description}</p>
                                       <p className='temp nombreDesc'> {(foreCast.list[2].main.temp - 273.5).toFixed(1)}°C</p>      
                                </div>
                                <div className='col'>
                                    <p className='nombreDesc'>{foreCastDate9}hs</p>
                                    <p className='description nombreDesc'><img src={iconUrl9} alt="icon" />{foreCast.list[3].weather[0].description}</p>
                                       <p className='temp nombreDesc'> {(foreCast.list[3].main.temp - 273.5).toFixed(1)}°C</p>      
                                </div>
                               </div>

                        </div>
                    </div>
                  </div>   
               </div>
            ) :(
            <Reload/>
            )

            }
            
        </div>
    );
}

export default Card;
