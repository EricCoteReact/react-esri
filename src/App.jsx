import React from 'react';
import { Container, } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './custom.scss';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Home from './Home/Home';
import About from './About/About';
import Counter from './Counter/Counter';
// import YouTube  from './Components/YouTube';


export function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Container className='my-4'>
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/counter" render={() => <Counter init={6} />} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
