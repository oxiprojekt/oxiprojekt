import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import Header from './components/home/Header';
import Footer from './components/home/Footer';

import Hero from './components/home/Hero';
import Abilities from './components/home/Abilities';
import Experience from './components/home/Experience';

import Portfolio from './components/portfolio/Portfolio';
import Games from './components/portfolio/games/Games';
import Gameplay from './components/portfolio/gameplay/Gameplay';
import Design from './components/portfolio/design/Design';

import ContactHeading from './components/contact/ContactHeading';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              {/* <Helmet>
                <title>OxiProjekt | Technical Artist and Game Developer </title>
                <meta name="description" content="OxiProjekt is a creative portfolio about game developer, design, storytelling and inspiring content. Dive into my world of visual rendering techniques and vibes."></meta>
              </Helmet> */}
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
              {/* <Helmet>
                <title>OxiProjekt | Portfolio | Gameplay Design Art </title>
                <meta name="description" content="Keep in touch for creative game projekts and inquiries" />
              </Helmet> */}
              <Header />
              <Portfolio />
              <div className="relative z-50 w-full"><Footer /></div>
            </>
          } />
          <Route path="/portfolio/games" element={
            <>
              {/* <Helmet>
                <title>OxiProjekt | Creative designs and artworks </title>
                <meta name="description" content="You can test the games in your browser, there is no need to download it." />
              </Helmet> */}
              <Header />
              <Games />
              <Footer />
            </>
          } />
          <Route path="/portfolio/gameplay" element={
            <>
              {/* <Helmet>
                <title>OxiProjekt | Game mechanics gameplay videos </title>
                <meta name="description" content="Lets learn with me for latest trend in game to make prototype mechanics and I'm providing free source of code for it." />
              </Helmet> */}
              <Header />
              <Gameplay />
              <Footer />
            </>
          } />
          <Route path="/portfolio/design" element={
            <>
              {/* <Helmet>
                <title>OxiProjekt | Creative designs and artworks </title>
                <meta name="description" content="Get in touch with OxiProjekt for looking creative contents and games. I'm here to bring creative ideas to life." />
              </Helmet> */}
              <Header />
              <Design />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              {/* <Helmet>
                <title>OxiProjekt | Contact or Hire me</title>
                <meta name="description" content="You can contact me for hiring purpose and I'm here for giving answers for your inquiries also." />
              </Helmet> */}
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
