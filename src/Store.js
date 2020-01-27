import React, { Component } from 'react'

import EventEmitter from 'events'

export class Store extends Component {
  constructor(props) {
    super(props)

    this.eventEmitter = new EventEmitter()

    this.state = {
      // Main App state
      appName: 'Weather up',
    }
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
