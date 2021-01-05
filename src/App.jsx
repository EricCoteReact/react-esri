import React from 'react';
import { Container, Button } from 'reactstrap';
import './custom.scss';
// import Hello  from './Components/Hello';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Clock from './Components/Clock';
// import YouTube  from './Components/YouTube';


export function App() {
  const [isClockVisible, setClockVisible] = React.useState(false);
  const [initialRender, setInitialRender] = React.useState(true);


  function toggleClock() {
    setClockVisible(!isClockVisible);
    if (initialRender) setInitialRender(false);
  }


  return (
    <Container className='my-4'>
      {/* <Hello /> */}
      <Counter init={5} />
      {/* <Button
        color={initialRender ? "primary" : (isClockVisible ? "success" : "danger")}
        onClick={toggleClock} >
        {isClockVisible ? "Hide" : "Show"} Clock
      </Button>
      {isClockVisible && <Clock />} */}
      <Footer />
    </Container>
  );
}
