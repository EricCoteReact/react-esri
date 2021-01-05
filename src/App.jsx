import React from 'react';
import { Container, } from 'reactstrap';
import './custom.scss';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Home from './Home/Home';
import About from './About/About';
import Counter from './Counter/Counter';
// import YouTube  from './Components/YouTube';


function Routing(props) {
  switch (props.page) {
    case '#home':
      return <Home />;
    case '#about':
      return <About />;
    case '#counter':
      return <Counter />;
    default:
      return <Home />;
  }
}

export function App() {
  const [currentPage, setCurrentPage] = React.useState(window.location.hash);

  React.useEffect(() => {
    window.addEventListener("hashchange",
      () => { setCurrentPage(window.location.hash) }
    )
  }, [])

  return (
    <>
      <Menu />
      <Container className='my-4'>
        <Routing page={currentPage} />
        <Footer />
      </Container>
    </>
  );
}
