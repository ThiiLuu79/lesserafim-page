import React, { useEffect, useState } from "react";
import DiscographyTimeLineItem from './discographytimelineitem'; 
import discographyData from '../data/discographyData';
import axios from "axios";

const DiscographyTimeline = () => {
  const [discography, setDiscography] = useState(discographyData);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscography = async () => {
      try {
        const response = await axios.get("https://lesserafimapi.onrender.com/api/discographies");
        setDiscography(response.data);
      } catch (err) {
        setError("Failed to fetch discography data.");
        console.error(err);
      }
    };

    fetchDiscography();
  }, []);

  return (
    <section class="bsb-timeline-6 py-3 py-md-5 py-xl-8">
        {error && <p className="text-danger text-center">{error}</p>}
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-10 col-md-12 col-xl-10 col-xxl-9">
              <ul className="timeline">
                {discography.map((item, index) => (
                  <DiscographyTimeLineItem
                    key={index}
                    title={item.title}
                    type={item.type}
                    release_date={new Date(item.release_date || item.releaseDate).toLocaleDateString('en-CA', {
                      timeZone: "UTC",
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                    songs={item.songs}
                    img={item.img || item.imageURL}
                    reverse={index % 2 === 0}
                  />
                ))}
              </ul>
            </div>
        </div>
        </div>
    </section>
  );
};

export default DiscographyTimeline;
