import React, { useState, useEffect } from 'react'
import './styleTop.scss'

import SunImg from '../../components/img/SunImg.svg'

const api = {
  key: 'b666495dee96c140299b7af58f596c91',
  base: 'http://api.weatherstack.com/',
}

function Weather() {
  const [query, setQuery] = useState('London')
  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch(`${api.base}current?access_key=${api.key}&query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current)
      })
      .catch((err) => {
        if (err) console.error("Can't fetch API", err)
      })
  }, [query])

  return (
    <div className='weather-container'>
      <div className='header'>{query}</div>
      <div className='inner-container'>
        <div className='image'>
          <img src={weather.weather_icons} alt='' />
        </div>
        <div className='current-weather'>{weather.temperature}</div>
      </div>
      <div className='footer'>{weather.weather_descriptions}</div>
    </div>
  )
}

export default Weather
