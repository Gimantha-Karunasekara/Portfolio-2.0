import './App.css';
import { Fragment } from 'react';
import NavBar from './components/nav/NavBar';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Qualifications from './components/sections/Qualifications/Qualifications';
import Skills from './components/sections/Skills/Skills';
import Portfolio from './components/sections/Portfolio/Portfolio';
import Contact from './components/sections/Contact/Contact';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <main className='main'>
        <Home />
        <About/>
        <Qualifications/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
    </Fragment>
  );
}

export default App;
