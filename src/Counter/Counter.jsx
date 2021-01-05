import React from 'react';
import { Button, Input } from 'reactstrap';
import MyButton from './MyButton';




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


export default function Counter(props) {
  const [count, setCount] = React.useState(props.init);

  function increment(incr) {
    setCount(count + incr);
  }

  function change(evt) {
    if (+evt.target.value || +evt.target.value === 0) {
      setCount(+evt.target.value);
    }
  }

  return (
    <div>
      <h1>The value is: {count}</h1>
      <Input className="mb-3" value={count} onChange={change} />
      <MyButton value={1} onIncrement={increment} />
      <MyButton value={-10} onIncrement={increment} />
      <MyButton value={100} onIncrement={increment} />
    </div>
  );
}