import React from 'react';
import DiscographyTimeLineItem from './discographytimelineitem'; 
import discographyData from '../data/discographyData';

const DiscographyTimeline = () => {
  return (
    <section class="bsb-timeline-6 py-3 py-md-5 py-xl-8">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-10 col-md-12 col-xl-10 col-xxl-9">
              <ul className="timeline">
                {discographyData.map((item, index) => (
                  <DiscographyTimeLineItem
                    key={index}
                    title={item.title}
                    type={item.type}
                    release_date={item.release_date}
                    songs={item.songs}
                    img={item.img}
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
