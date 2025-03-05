import React from 'react';

const LeSserafimMember = ({ name, imageSrc, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageSrc} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LeSserafimMember;
