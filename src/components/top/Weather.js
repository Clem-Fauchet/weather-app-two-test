import React, { useState, useEffect } from 'react'
import './styleTop.scss'

const api = {
  key: 'b666495dee96c140299b7af58f596c91',
  base: 'http://api.weatherstack.com/',
}

function Weather() {
  const [query, setQuery] = useState('London')
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${api.base}current?access_key=${api.key}&query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setIsLoading(false)
          setWeather(data.current)
        }, 1800)
        const { eventEmitter } = this.props
        eventEmitter.on('updateWeather', (data) => {
          console.log('LocationName: ', data[0].locationName)
        })
      })
      .catch((err) => {
        if (err) console.error("Can't fetch API", err)
      })
  }, [query])

  return (
    <div className='weather-container'>
      {isLoading === true ? (
        <h3 className='loading-screen'>Loading Weather...</h3>
      ) : (
        <div>
          <div className='header'>{query}</div>
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
