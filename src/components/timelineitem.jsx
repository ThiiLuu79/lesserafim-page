import React from 'react';

const TimelineItem = ({ imageSrc, title, date, alt, text, reverse }) => {
  const itemClass = reverse ? 'timeline-item right' : 'timeline-item left';

  return (
    <li className={itemClass} data-aos="fade-right">
        <div className="timeline-body">
            <div className="timeline-content">
                <div className="card border-0">
                    <img className="card-img-top img-fluid" loading="lazy" src={imageSrc} alt={alt} />
                    <div className="card-body border border-top-0 border-light-subtle">
                        <h2 className="card-title mb-2">{title}</h2>
                        <h6 className="card-subtitle text-secondary mb-3">{date}</h6>
                        <p className="card-text mb-2">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>
  );
};

export default TimelineItem;
