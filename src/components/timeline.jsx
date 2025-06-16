import React, { useEffect, useState } from "react";
import TimelineItem from './timelineitem';
import timelineData from '../data/timelineData';
import axios from "axios";


const Timeline = () => {
  const [timeline, setTimeline] = useState(timelineData);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const response = await axios.get("https://lesserafimapi.onrender.com/api/timeline");
        setTimeline(response.data);
      } catch (err) {
        setError("Failed to fetch timeline data.");
        console.error(err);
      }
    };

    fetchTimeline();
  }, []);

  return (
    <section className="bsb-timeline-6 py-3 py-md-5 py-xl-8">
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-12 col-xl-10 col-xxl-9">
            <ul className="timeline">
              {timeline.map((item, index) => (
                <TimelineItem
                  key={index}
                  imageSrc={item.imageSrc || item.imageURL}
                  title={item.title}
                  date={new Date(item.date).getFullYear()}
                  alt={item.alt}
                  text={item.text}
                  reverse={index % 2 === 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
