import React, { useState, useEffect } from 'react'
import './styleTop.scss'

const api = {
  key: 'b666495dee96c140299b7af58f596c91',
  base: 'http://api.weatherstack.com/',
}

function Weather({ locationName, update }) {
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch(`${api.base}current?access_key=${api.key}&query=${locationName}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setIsLoading(false)
          setWeather(data.current)
          setQuery(data.location)
        }, 2000)
      })
      .catch((err) => {
        if (err) console.error("Can't fetch API", err)
      })
  }, [update])

  return (
    <div className='weather-container'>
      {isLoading === true ? (
        <h3 className='loading-screen'>Loading data...</h3>
      ) : (
        <div>
          <div className='header'>{query.name}</div>
          <div className='inner-container'>
            <div className='image'>
              <img src={weather.weather_icons} alt='Img' />
            </div>
            <div className='current-weather'>{weather.temperature}°</div>
          </div>
          <div className='footer'>{weather.weather_descriptions}</div>
        </div>
      )}
    </div>
  )
}

export default Weather
