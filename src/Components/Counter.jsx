import React from 'react';
import { Button } from 'reactstrap';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.init, name: 'Jason' };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>The value is: {this.state.count}</h1>
        <h2>The name is: {this.state.name}</h2>
        <Button color='primary' onClick={this.increment}>
          Increment
        </Button>
      </div>
    );
  }
}
