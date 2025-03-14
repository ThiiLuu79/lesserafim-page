import React, { useState } from 'react';
import LeSserafimMV from './lesserafim-mv';

const MVSection = () => {
  const [expanded, setExpanded] = useState(false);

  const videos = [
    { title: "Hot", iframeSrc: "https://www.youtube.com/embed/r9AEGPB6qIU?si=453U3s6fmSc2L7MH" },
    { title: "Star Signs", iframeSrc: "https://www.youtube.com/embed/E3RPpBJrJFQ?si=5Oh_XarbWLT1grY6" },
    { title: "Crazy", iframeSrc: "https://www.youtube.com/embed/n6B5gQXlB-0?si=xH4x4YGU9xyu72Y7" },
    { title: "Smart", iframeSrc: "https://www.youtube.com/embed/KNexS61fjus?si=4C047g0RYZrPZj9p_" },
    { title: "Easy", iframeSrc: "https://www.youtube.com/embed/bNKXxwOQYB8?si=-FLtINBbVuUTzuB_" },
    { title: "Perfect Night", iframeSrc: "https://www.youtube.com/embed/hLvWy2b857I?si=iOwxBOmwtejCcFQh" },
    { title: "Eve, Psyche & The Bluebeard's wife", iframeSrc: "https://www.youtube.com/embed/dZs_cLHfnNA?si=Vk8Gnf4lCaztq8VR" },
    { title: "Unforgiven", iframeSrc: "https://www.youtube.com/embed/UBURTj20HXI?si=kg7bfmUuBgQeAJtQ" },
    { title: "Impurities", iframeSrc: "https://www.youtube.com/embed/Ccz123Jlflc?si=utodbZyVQiPPXZsX" },
    { title: "Good Parts", iframeSrc: "https://www.youtube.com/embed/jJxMlmf58SM?si=5gkt4dnG_4kYWFoQ" },
    { title: "Antifragile", iframeSrc: "https://www.youtube.com/embed/pyf8cbqyfPs?si=ymHdi7xN4gJVomBH" },
    { title: "Fearless", iframeSrc: "https://www.youtube.com/embed/4vbDFu0PUew?si=i29enPmghXN-pPM7" }
  ];

  const visibleVideos = expanded ? videos : videos.slice(0, 3);

  return (
    <section id="music-videos" className="py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-4">Music Videos</h2>
        <p className="text-center">Here are some of LE SSERAFIM's music videos!</p>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {visibleVideos.map((video, index) => (
            <LeSserafimMV key={index} title={video.title} iframeSrc={video.iframeSrc} />
          ))}
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-dark" onClick={() => setExpanded(!expanded)}>
            {expanded ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MVSection;
