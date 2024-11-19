import './App.css';
import NavBar from './components/nav/NavBar';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Qualifications from './components/sections/Qualifications/Qualifications';
import Skills from './components/sections/Skills/Skills';
import Portfolio from './components/sections/Portfolio/Portfolio';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/footer/Footer';
import ThemeContextProvider from './context/theme-context';
import { Element } from 'react-scroll';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.body.classList.add('dark-theme');
  }, [])

  return (
      <ThemeContextProvider>
        <NavBar />
        <main className='main dark-theme'>
          <Element name='home'>
            <Home />
          </Element>
          <Element name='about'>
            <About />
          </Element>
          <Element name='qualifications'>
            <Qualifications />
          </Element>
          <Element name='skills'>
            <Skills />
          </Element>
          <Element name='portfolio'>
            <Portfolio />
          </Element>
          <Element name='contact'>
            <Contact />
          </Element>
          <Footer />
        </main>
      </ThemeContextProvider>
  );
}

export default App;
