import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MVSection from './components/mvsection';
import MembersSection from './components/membersection';
import MemberDetails from './components/memberdetails';
import MemberDetailsHeader from './components/memberdetailsheader';
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
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <About />
            <MVSection />
            <MembersSection />
            <Footer />
          </>
        } />

        {/* Member Details Page with Navbar, Header, and Footer */}
        <Route 
          path="/members/:id" 
          element={
            <>
              <MemberDetailsHeader />
              <MemberDetails />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
