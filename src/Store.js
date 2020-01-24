import React, { Component } from 'react'

export class Store extends Component {

  constructor(props){
    super(props)
    this.state= { // Main App state
      appName= 'Weather up'

    }
  }

  
  render() {
    return (
      <div>
        {React.Children.map((this.props.children),( child) => {
          return React.cloneElement(child,{...this.state})
        })}
      </div>
    )
  }
}

export default Store
