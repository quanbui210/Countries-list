import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './Component/Content'
import Filter from './Component/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if (newFilter) {
      const regex = new RegExp( newFilter, 'i' );
      const filteredCountries = () => allCountries.filter(country => country.name.common.match(regex))
      setCountries(filteredCountries)
    }
  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content newFilter={newFilter} allCountries={allCountries} countries={countries} setCountries={setCountries} />
    </div>
  )
}

export default App



// useEffect(() =>{
//   const params = {
//     access_key: process.env.REACT_APP_API_KEY,
//     query: country.capital,
//     lat: country.latlng[0],
//     lon: country.latlng[1]
//   }
//   console.log(params.lon, params.lat)
//   console.log(params.access_key)
//    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${params.lat}&lon=${params.lon}&exclude=hourly,daily&appid=${params.access_key}`)
//    .then(response =>{ 
//      const apiResponse = response.data;
//      setWeather(apiResponse)
//    })
// },[]);