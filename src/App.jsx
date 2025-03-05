import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeSserafimMV from './components/lesserafim-mv';
import LeSserafimMember from './components/lesserafim-member';

import chaewonimg from './images/members/chaewon.png';
import sakuraimg from './images/members/sakura.png';
import yunjinimg from './images/members/yunjin.png';
import kazuhaimg from './images/members/kazuha.png';
import eunchaeimg from './images/members/eunchae.png';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">LE SSERAFIM</a>
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

      <header id="home" className="text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="display-4">Welcome to LE SSERAFIM's Fanpage</h1>
          <p className="lead">I'm Fearless</p>
        </div>
      </header>

      <section id="about" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">About LE SSERAFIM</h2>
          <p class="lead text-center">
            LE SSERAFIM is a South Korean girl group formed by Source Music, a sub-label of Hybe. The group consists of five members: Sakura, Kim Chaewon, Huh Yunjin, Kazuha, and Hong Eunchae. Originally a six-member ensemble, member Kim Garam departed from the group in July 2022.
          </p>
        </div>
      </section>

      <section id="music-videos" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Music Videos</h2>
          <p className="text-center">Here are some of LE SSERAFIM's music videos!</p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <div className="ratio ratio-16x9">
                  <LeSserafimMV
                    title="Crazy"
                    iframeSrc="https://www.youtube.com/embed/n6B5gQXlB-0?si=xH4x4YGU9xyu72Y7"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="ratio ratio-16x9">
                  <LeSserafimMV
                    title="Easy"
                    iframeSrc="https://www.youtube.com/embed/bNKXxwOQYB8?si=-FLtINBbVuUTzuB_"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="ratio ratio-16x9">
                  <LeSserafimMV
                    title="Unforgiven"
                    iframeSrc="https://www.youtube.com/embed/UBURTj20HXI?si=kg7bfmUuBgQeAJtQ"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="ratio ratio-16x9">
                  <LeSserafimMV
                    title="Antifragile"
                    iframeSrc="https://www.youtube.com/embed/pyf8cbqyfPs?si=ymHdi7xN4gJVomBH"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="ratio ratio-16x9">
                  <LeSserafimMV
                    title="Fearless"
                    iframeSrc="https://www.youtube.com/embed/4vbDFu0PUew?si=i29enPmghXN-pPM7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="members" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Meet the Members</h2>
          <div className="row">
              <LeSserafimMember
              name="Kim Chae-won"
              imageSrc={chaewonimg}
              description="Kim Chae-won is a South Korean singer and leader of LE SSERAFIM. She is known for her captivating voice and leadership skills in the group."
            />
            <LeSserafimMember
              name="Sakura"
              imageSrc={sakuraimg}
              description="Sakura is a Japanese singer and one of the most prominent members of LE SSERAFIM. She is known for her elegant visuals and strong stage presence."
            />
            <LeSserafimMember
              name="Huh Yun-jin"
              imageSrc={yunjinimg}
              description="Huh Yun-jin is a talented vocalist known for her rich voice and emotional depth. She brings a lot of soul to LE SSERAFIM's music."
            />
            <LeSserafimMember
              name="Kazuha"
              imageSrc={kazuhaimg}
              description="Kazuha is a Japanese-born member known for her ballet background and sharp dance skills. Her elegance and grace shine through in her performances."
            />
            <LeSserafimMember
              name="Hong Eun-chae"
              imageSrc={eunchaeimg}
              description="Hong Eun-chae is the youngest member of LE SSERAFIM, known for her bright energy and impressive vocal abilities at such a young age."
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
