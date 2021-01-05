import React from 'react';
import { Container } from 'reactstrap';
import './custom.scss';
import Hello  from './Components/Hello';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
// import YouTube  from './Components/YouTube';


export function App() {
    return (
    <Container className='my-4'>
      <Hello />
      <Counter init={5} />
      <Footer />
    </Container>
  );
}
