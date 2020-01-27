import React from 'react'
import './App.scss'
import Top from './components/top/TopSection'
import Bottom from './components/bottom/BottomSection'

function App() {
  const { eventEmitter } = this.props
  return (
    <div className='App app-container'>
      <div className='main-container'>
        <div className='top-section'>
          <Top eventEmitter={eventEmitter} />
        </div>
        <div className='bottom-section'>
          <Bottom />
        </div>
      </div>
    </div>
  )
}

export default App
