import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './components/home/Hero';
import Abilities from './components/home/Abilities';
import Experience from './components/home/Experience';

import Portfolio from './components/portfolio/Portfolio';

import ContactHeading from './components/contact/ContactHeading';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Abilities />
              <Experience />
              <Footer />
            </>
          } />
          <Route path="/home" element={
            <>
              <Header />
              <Hero />
              <Abilities />
              <Experience />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <Header />
              <Portfolio />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <ContactHeading />
              <Contact />
              <Footer />
            </>
          } />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
