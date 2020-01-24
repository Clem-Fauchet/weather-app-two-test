import React, { useState, useEffect } from 'react'
import './styleTop.scss'

import SunImg from '../../components/img/SunImg.svg'

const api = {
  key: 'b666495dee96c140299b7af58f596c91',
  base: 'http://api.weatherstack.com/',
}

function Weather() {
  const [query, setQuery] = useState({
    cityName: 'London',
    forecastDays: 5,
  })

  useEffect(() => {
    fetch(
      `${api.base}forecast?acces_key=${api.key}&query=${query.cityName}&forecast_days=${query.forecastDays}`
    )
      .then((res) => res.json())
      .then((data) => console.log('DATA', data))
      .catch((err) => {
        if (err) console.error("Can't fetch API", err)
      })
  })

  return (
    <div className='weather-container'>
      <div className='header'>Location here</div>
      <div className='inner-container'>
        <div className='image'>
          <img src={SunImg} alt='sunny' />
        </div>
        <div className='current-weather'>10</div>
      </div>
      <div className='footer'>Sunny</div>
    </div>
  )
}

export default Weather
