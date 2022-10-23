import React from 'react'
import './Filter.css'

const Filter = ({value, onChange}) =>
    <div className="filter-container">
        <p className="filter-text">Search</p> <input className="filter-input" value={value} onChange={onChange} />
    </div>

export default Filter