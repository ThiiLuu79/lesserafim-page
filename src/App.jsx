import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MVSection from './components/mvsection';
import MembersSection from './components/membersection';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      once: true,      // Ensures the animation runs only once
    });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <About />
        <MVSection />
        <MembersSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
