import React, { useEffect, useState } from "react";
import videos from '../data/musicVideos.js';
import LeSserafimMV from './lesserafim-mv';
import axios from "axios";

const sortVideosByDateDesc = (arr) =>
  [...arr].sort((a, b) => {
    const da = a?.releaseDate ? new Date(a.releaseDate).getTime() : 0;
    const db = b?.releaseDate ? new Date(b.releaseDate).getTime() : 0;
    return db - da;
  });

const MVSection = () => {
  const [expanded, setExpanded] = useState(false);

  const [musicVideos, setMusicVideos] = useState(sortVideosByDateDesc(videos));
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMusicVideos = async () => {
      try {
        const response = await axios.get("https://lesserafimapi.onrender.com/api/musicVideos");
        // sort fetched data before setting state
        setMusicVideos(sortVideosByDateDesc(response.data));
      } catch (err) {
        setError("Failed to fetch music videos data.");
        console.error(err);
      }
    };

    fetchMusicVideos();
  }, []);

  const visibleVideos = expanded ? musicVideos : musicVideos.slice(0, 3);

  return (
    <section id="music-videos" className="py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-4">Music Videos</h2>
        <p className="lead text-center">Here are some of LE SSERAFIM's music videos!</p>

        {error && <p className="text-danger text-center">{error}</p>}

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
