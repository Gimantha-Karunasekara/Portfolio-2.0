import './App.css';
import Home from './components/sections/Home';
import { Fragment } from 'react';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <main className='main'>
        <Home />
      </main>
    </Fragment>
  );
}

export default App;
