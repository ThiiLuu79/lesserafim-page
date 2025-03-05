import React from 'react';

const LeSserafimMV = ({ title, iframeSrc }) => {
  return (
    <div className="mb-4">
      <h5 className="text-center">{title}</h5>
      <div className="text-center">
        <iframe
          width="560"
          height="315"
          src={iframeSrc}
          title={`${title} video player`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LeSserafimMV;