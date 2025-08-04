import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';


function App() {

   useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Education />
      <Skills/>
      <Certifications/>
      <Projects/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
