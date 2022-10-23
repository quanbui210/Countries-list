import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Country.css'

const Country = ({country}) => {
  const [currentWeather, setCurrentWeather] = useState(null)
 
 useEffect(() =>{
   const params = {
     access_key: process.env.REACT_APP_API_KEY,
     query: country.capital,
     lat: country.latlng[0],
     lon: country.latlng[1]
   }
   console.log(params.lon, params.lat)
   console.log(params.access_key)
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${params.lat}&lon=${params.lon}&exclude=hourly,daily&appid=${params.access_key}`)
    .then(response =>{ 
      const apiResponse = response.data;
      setCurrentWeather(apiResponse) 
    })
 },[country.capital, country.latlng]);

  if(currentWeather) {
     const imgId = currentWeather.current.weather[0].icon
     const imgSrc = `http://openweathermap.org/img/wn/${imgId}@2x.png`
    return (
      <div className="country-container">
      <h1 className="country-name">{country.name.common}</h1>
      <ul>
        <li className="country-caliital">Capital: {country.capital}</li>
        <li className="country-area">Area: {country.area}km2</li>
        <li className="country-located">Continent: {country.continents}</li>
        <li className='country.population'>Population: {country.population} (million)</li>
      </ul>  
      <h4 className="country-borders">Border with: {country.borders ? <ul>
        {country.borders.map(border => <li className="country-border-list" key={Math.random() * 1000} style={{fontWeight: 'normal', fontSize:'15px'}} >{border}</li>)}
      </ul> : <p style={{fontWeight: 'normal', fontSize:'15px'}}>No border</p>}</h4> 
        <img src={country.flags.png} alt="Country flag"></img>
          <h2>Weather in {country.capital}</h2>
          <p>Current Condition: {currentWeather.current.weather[0].description.toUpperCase()}</p>    
           <img src={imgSrc} alt="Weather icon"></img> 
           <ul>
            <li>temperature: {currentWeather.current.temp}</li>
            <li>humidity: {currentWeather.current.humidity} %</li>
           </ul>
    </div>
    )
  } else {
    return (  
      <div className="country-container">
        <h1 className="country-name">{country.name.common}</h1>
        <p className="country-capital">Capital: {country.capital}</p>
        <p className="country-area">Area: {country.area}km2</p>
        <p className="country-located">Continent: {country.continents}</p>
        <h3 className="country-borders">Borders: {country.borders ? <ul>
          {country.borders.map(border => <li className="country-border-list" key={Math.random() * 1000} style={{fontWeight: 'normal', fontSize:'15px'}} >{border}</li>)}
        </ul> : <p style={{fontWeight: 'normal', fontSize:'15px'}}>No border</p>}</h3> 
      </div>
    )
  } 
}

export default Country