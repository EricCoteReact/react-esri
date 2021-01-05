import React, { Component } from 'react'

export default class Clock extends Component {

  state = { time: new Date().toLocaleTimeString() }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000);
  }
  componentDidUpdate() {
    console.log("The time is now " + this.state.time);
  }

  render() {
    return (
      <div>
        <h1>The time is: {this.state.time}</h1>
      </div>
    )
  }
}


