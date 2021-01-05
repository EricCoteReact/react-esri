import React from 'react';
import { Button } from 'reactstrap';

export class CounterClass extends React.Component {
  state = { count: this.props.init, name: 'Jason' };

  increment = () => {
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


export default function Counter(props){
    const [count, setCount] = React.useState(props.init);

    function increment(){
      setCount(count+1);
    }

    return (
      <div>
        <h1>The value is: {count}</h1>
        <Button color='primary' onClick={increment}>
          Increment
        </Button>
      </div>
    );
}