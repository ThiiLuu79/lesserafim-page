import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeSserafimMV from './components/lesserafim-mv';
import LeSserafimMember from './components/lesserafim-member';

import chaewonimg from './images/members/chaewon.png';
import sakuraimg from './images/members/sakura.png';
import yunjinimg from './images/members/yunjin.png';
import kazuhaimg from './images/members/kazuha.png';
import eunchaeimg from './images/members/eunchae.png';
import groupPicture from './images/members/group.png';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in ms
      once: true,      // Ensures the animation runs only once
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#music-videos">Music Videos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#members">Members</a>
            </li>
          </ul>
        </div>
      </nav>

      <header id="home" className="text-center text-white bg-dark py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-4">Welcome to LE SSERAFIM's Fanpage</h1>
          <p className="lead">I'm Fearless</p>
        </div>
      </header>

      <section id="about" className="py-5" data-aos="fade-left">
        <div className="container">
          <h2 className="text-center mb-4">About LE SSERAFIM</h2>
          <p className="lead text-center">
            LE SSERAFIM is a South Korean girl group formed by Source Music, a sub-label of Hybe. The group consists of five members: Sakura, Kim Chaewon, Huh Yunjin, Kazuha, and Hong Eunchae. Originally a six-member ensemble, member Kim Garam departed from the group in July 2022.
          </p>
          <img 
            src={groupPicture} 
            alt="lesserafim" 
            className="d-block mx-auto rounded shadow-lg img-fluid" 
            style={{ borderRadius: "20px", maxWidth: "80%", height: "auto" }} 
          />
        </div>
      </section>

      <section id="music-videos" className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Music Videos</h2>
          <p className="text-center">Here are some of LE SSERAFIM's music videos!</p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <LeSserafimMV
                title="Star Signs"
                iframeSrc="https://www.youtube.com/embed/E3RPpBJrJFQ?si=5Oh_XarbWLT1grY6"
            />
            <LeSserafimMV
                title="Crazy"
                iframeSrc="https://www.youtube.com/embed/n6B5gQXlB-0?si=xH4x4YGU9xyu72Y7"
            />
            <LeSserafimMV
                title="Smart"
                iframeSrc="https://www.youtube.com/embed/KNexS61fjus?si=4C047g0RYZrPZj9p_"
            />
            <LeSserafimMV
                title="Easy"
                iframeSrc="https://www.youtube.com/embed/bNKXxwOQYB8?si=-FLtINBbVuUTzuB_"
            />
            <LeSserafimMV
                title="Perfect Night"
                iframeSrc="https://www.youtube.com/embed/hLvWy2b857I?si=iOwxBOmwtejCcFQh"
            />
            <LeSserafimMV
                title="Unforgiven"
                iframeSrc="https://www.youtube.com/embed/UBURTj20HXI?si=kg7bfmUuBgQeAJtQ"
            />
            <LeSserafimMV
                title="Antifragile"
                iframeSrc="https://www.youtube.com/embed/pyf8cbqyfPs?si=ymHdi7xN4gJVomBH"
            />
            <LeSserafimMV
                title="Fearless"
                iframeSrc="https://www.youtube.com/embed/4vbDFu0PUew?si=i29enPmghXN-pPM7"
            />
          </div>
        </div>
      </section>

      <section id="members" className="py-5" data-aos="fade-right">
        <div className="container">
          <h2 className="text-center mb-4">Meet the Members</h2>
          <div className="row">
              <LeSserafimMember
              name="Kim Chaewon"
              imageSrc={chaewonimg}
              description="Kim Chaewon is a South Korean singer and leader of LE SSERAFIM. She is known for her captivating voice and leadership skills in the group."
            />
            <LeSserafimMember
              name="Miyawaki Sakura"
              imageSrc={sakuraimg}
              description="Sakura is a Japanese singer and one of the most prominent members of LE SSERAFIM. She is known for her elegant visuals and strong stage presence."
            />
            <LeSserafimMember
              name="Huh Yunjin"
              imageSrc={yunjinimg}
              description="Huh Yunjin is a talented vocalist known for her rich voice and emotional depth. She brings a lot of soul to LE SSERAFIM's music."
            />
            <LeSserafimMember
              name="Nakamura Kazuha"
              imageSrc={kazuhaimg}
              description="Kazuha is a Japanese-born member known for her ballet background and sharp dance skills. Her elegance and grace shine through in her performances."
            />
            <LeSserafimMember
              name="Hong Eunchae"
              imageSrc={eunchaeimg}
              description="Hong Eunchae is the youngest member of LE SSERAFIM, known for her bright energy and impressive vocal abilities at such a young age."
            />
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4 text-center">
        <p>&copy; 2025 LE SSERAFIM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
