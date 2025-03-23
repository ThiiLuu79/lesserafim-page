import React, {useState} from 'react';
import DiscoGraphyTimeLine from './discographytimeline';

const DiscographySection = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  const toggleTimeline = () => {
    setShowTimeline(!showTimeline);
  };

  return (
    <section id="about" className="py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-4">Discography</h2>
        <p className="lead text-center">
          Here is a list of all the albums and singles released by LE SSERAFIM. Click on the button below to view the discography.
        </p>
        {showTimeline && <DiscoGraphyTimeLine />}
        <div className="text-center my-4">
          <button 
            className="btn btn-dark"
            onClick={toggleTimeline}
          >
            {showTimeline ? 'Hide Discography' : 'Show Discography'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default DiscographySection;
