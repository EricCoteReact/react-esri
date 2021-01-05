import React from 'react';
import { Container, } from 'reactstrap';
import './custom.scss';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Home from './Home/Home';
import About from './About/About';
import Counter from './Counter/Counter';
// import YouTube  from './Components/YouTube';


export function App() {


  return (
    <>
      <Menu />
      <Container className='my-4'>
        <Home />
        <About />
        <Counter />
        <Footer />
      </Container>
    </>
  );
}
