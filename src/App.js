import React from 'react';
import { Container, Button } from 'reactstrap';
import './custom.scss';
import { Hello } from './Components/Hello';
import { YouTube } from './Components/YouTube';
import Counter from './Components/Counter';

export function App() {
  return (
    <Container className='my-4'>
      <Hello fname='Eric'>
        <i>Cote</i>
      </Hello>
      {/* <YouTube id='M7lc1UVf-VE' />
      <YouTube id='M7lc1UVf-VE' />
      <YouTube id='M7lc1UVf-VE' /> */}

      <Counter init={5} />
    </Container>
  );
}
