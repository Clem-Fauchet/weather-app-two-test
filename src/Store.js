import React, { Component } from 'react'

import { EventEmitter } from 'events'

export class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Main App state
      appName: 'Weather up',
    }
    this.eventEmitter = new EventEmitter()
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            ...this.state,
            eventEmitter: this.eventEmitter,
          })
        })}
      </div>
    )
  }
}

export default Store
