import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';

function App() {
 

  const [currentNavEl, setCurrentNavEl] = useState('Home');

  const renderPage = () => {
    switch (currentNavEl) {
      case 'About Me':
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>
      case 'Resume':
        return <Resume/>
      case 'Contact Me':
        return <Contact/>
      default:
        return <Home/>
    }
  }

  return (
    <div>
        <Header
          // navElements={navElements}
          setCurrentNavEl={setCurrentNavEl}
          currentNavEl={currentNavEl}
        ></Header>
        <div className='container'> 
         
          {renderPage(currentNavEl)}
        </div>
        <Footer></Footer>

    </div>
  );
}

export default App;
