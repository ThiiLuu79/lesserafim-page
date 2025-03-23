import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100`}>
      <div className="container-fluid">
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
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#music-videos">Music Videos</a></li>
            <li className="nav-item"><a className="nav-link" href="#members">Discography</a></li>
            <li className="nav-item"><a className="nav-link" href="#discography">Members</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
