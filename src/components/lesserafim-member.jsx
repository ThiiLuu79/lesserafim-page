import React from 'react';

const LeSserafimMember = ({ name, imageSrc, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg" style={{ height: '400px' }}>
        <img 
          src={imageSrc} 
          alt={name} 
          className="card-img-top" 
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '120px' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeSserafimMember;
