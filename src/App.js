import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is installed

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

          {/* Individual Music Video Embeds */}
          {['Crazy', 'Easy', 'Unforgiven', 'Antifragile', 'Fearless'].map((title, index) => (
            <div className="mb-4" key={index}>
              <h5 className="text-center">{title}</h5>
              <div className="text-center">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${getVideoId(title)}?si=${generateVideoParams()}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
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

// Helper functions for YouTube embeds (to simulate dynamic embedding)
const getVideoId = (title) => {
  const videoIds = {
    'Crazy': 'n6B5gQXlB-0',
    'Easy': 'bNKXxwOQYB8',
    'Unforgiven': 'UBURTj20HXI',
    'Antifragile': 'pyf8cbqyfPs',
    'Fearless': '4vbDFu0PUew',
  };
  return videoIds[title];
};

const generateVideoParams = () => {
  return Math.random().toString(36).substring(2, 15);
};

export default App;
