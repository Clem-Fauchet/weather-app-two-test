import React, { Component } from 'react'
import './styleTop.scss'

import SunImg from '../../components/img/SunImg.svg'

export class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
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
}

export default Weather
