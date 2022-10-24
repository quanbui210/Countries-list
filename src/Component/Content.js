import React, {useState} from 'react';
import Country from './Country'
import './Content.css'

const Content = ({allCountries, countries, setCountries}) => {
  
    if (countries.length === 1) {
      return (
               <Country allCountries={allCountries} setCountries={setCountries}country={countries[0]}></Country>
             )
    }
    if (countries.length > 2 && countries.length < 10) {
       return <ul>
       {countries.map(country => (<li className='list-container' key={Math.random() * 100}>
       <div className='card-container'>
       <div className="card">
         <img src={country.flags.png} className="card-img-top" alt='aaa' />
         <div className="card-body">
         <h5 className="card-title">{country.name.common}</h5>
         <button className="card-btn" onClick={() => {setCountries([country])}}>show</button>
           </div>
         </div>
       </div>
       </li>))}
     </ul>
     } 
      return <ul>
    {allCountries.map(country => (<li className='list-container' key={Math.random() * 100}>
      <div className='card-container'>
      <div className="card">
        <img src={country.flags.png} className="card-img-top" alt='aaa' />
        <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <button className="card-btn" onClick={() => {setCountries([country])}}>show</button>
         </div>
       </div>
      </div>
      </li>))}
    </ul>
     }


export default Content;
