import React, { Component } from 'react'

export default class Clock extends Component {
  state = { time: new Date().toLocaleTimeString() }
  timerRef = null;

  componentDidMount() {
    this.timerRef = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      console.log("We are sending setState to the clock.");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("The time is now " + this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.timerRef);
  }

  render() {
    return (
      <div>
        <h1>The time is: {this.state.time}</h1>
      </div>
    )
  }
}


