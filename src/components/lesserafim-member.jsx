import React from "react";
import { useNavigate } from "react-router-dom";

const LeSserafimMember = ({ id, name, imageSrc, position }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/members/${id}`);
  };

  return (
    <div data-aos="fade-right" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="card member-card shadow-lg">
        <img
          src={imageSrc}
          alt={name}
          className="card-img-top"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-center" style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "120px" }}>
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeSserafimMember;
