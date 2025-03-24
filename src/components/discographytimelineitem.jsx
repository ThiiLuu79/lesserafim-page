import React from 'react';

const DiscographyTimelineItem = ({ title, type, release_date, songs, img, reverse }) => {
  const itemClass = reverse ? 'timeline-item right' : 'timeline-item left';

  return (
    <li className={itemClass} data-aos="fade-right">
        <div className="timeline-body">
            <div className="timeline-content">
                <div className="card border-0">
                    <img className="card-img-top img-fluid" loading="lazy" src={img} alt={title} />
                    <div className="card-body border border-top-0 border-light-subtle">
                        <h2 className="card-title mb-2">{title}</h2>
                        <h6 className="card-subtitle text-secondary mb-3">{release_date} | {type}</h6>
                        <ol className="card-text mb-2">
                          {songs.map((song, index) => (
                            <li key={index}>{song}</li>
                          ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </li>
  );
};

export default DiscographyTimelineItem;
