import React, { Component } from 'react'
import './styleTop.scss'
import Weather from './Weather'

export class Top extends Component {
  render() {
    return (
      <div className='top-container'>
        <div className='title'>Weather Up</div>
        <Weather />
        <button className='btn btn-location'>Select location</button>
      </div>
    )
  }
}

export default Top
