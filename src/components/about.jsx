import React, { useState } from 'react';
import groupPicture from '../images/members/group.png';
import Timeline from '../components/timeline';

const About = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  const toggleTimeline = () => {
    setShowTimeline(!showTimeline);
  };

  return (
    <section id="about" className="py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-4">About LE SSERAFIM</h2>
        <p className="lead text-center">
          LE SSERAFIM is a South Korean girl group formed by Source Music, a sub-label of Hybe. The group consists of five members: Kim Chaewon, Sakura, Huh Yunjin, Kazuha, and Hong Eunchae. Originally a six-member ensemble, member Kim Garam departed from the group in July 2022.
        </p>
        <img 
          src={groupPicture} 
          alt="lesserafim" 
          className="d-block mx-auto rounded shadow-lg img-fluid" 
          style={{ borderRadius: "20px", maxWidth: "80%", height: "auto" }} 
        />
        
        {showTimeline && <Timeline />}

        <div className="text-center my-4">
          <button 
            className="btn btn-dark"
            onClick={toggleTimeline}
          >
            {showTimeline ? 'Hide timeline' : 'Show timeline'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
