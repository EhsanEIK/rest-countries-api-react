import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, region, area, flags } = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country: {name.common}</h2>
            <h4>Region: {region}</h4>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;