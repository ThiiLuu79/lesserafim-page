import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeSserafimMV from './components/lesserafim-mv';

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

      {/* Hero Section */}
      <header id="home" className="text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="display-4">Welcome to LE SSERAFIM's Fanpage</h1>
          <p className="lead">I'm Fearless</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About LE SSERAFIM</h2>
          <p className="lead text-center">
            LE SSERAFIM is a South Korean girl group formed by Source Music, a sub-label of Hybe. The group consists of five members: Sakura, Kim Chaewon, Huh Yunjin, Kazuha, and Hong Eunchae. Originally a six-member ensemble, member Kim Garam departed from the group in July 2022.
          </p>
        </div>
      </section>

      {/* Music Videos Section */}
      <section id="music-videos" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Music Videos</h2>
          <p className="text-center">Here are some of LE SSERAFIM's music videos!</p>

          <LeSserafimMV
            title="Crazy"
            iframeSrc="https://www.youtube.com/embed/n6B5gQXlB-0?si=xH4x4YGU9xyu72Y7"
          />
          <LeSserafimMV
            title="Easy"
            iframeSrc="https://www.youtube.com/embed/bNKXxwOQYB8?si=-FLtINBbVuUTzuB_"
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
      </section>

      {/* Members Section */}
      <section id="members" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Meet the Members</h2>
          <div className="row">
            {/* Member Cards */}
            {['Kim Chae-won', 'Sakura', 'Huh Yun-jin', 'Kazuha', 'Hong Eun-chae'].map((member, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img
                    src="https://via.placeholder.com/300"
                    alt={member}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{member}</h5>
                    <p className="card-text">
                      {member} is a South Korean singer and leader of LE SSERAFIM. She is known for her captivating voice and leadership skills in the group.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <p>&copy; 2025 LE SSERAFIM. All rights reserved.</p>
      </footer>

      {/* Bootstrap JS and Popper.js */}
      <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
