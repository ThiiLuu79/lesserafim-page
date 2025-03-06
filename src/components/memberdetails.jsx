import React from "react";
import { useParams } from "react-router-dom";
import membersData from "../data/membersData";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MemberDetails = () => {
  const { id } = useParams();
  const member = membersData.find((m) => m.id === parseInt(id));

  if (!member) {
    return <h2 className="text-center mt-5">Member not found!</h2>;
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-4">← Back to Members</Link>
      <div className="card shadow-lg p-4">
        <div className="row">
          <div className="col-md-4 text-center">
            <img 
              src={member.imageSrc} 
              alt={member.name} 
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">{member.name}</h2>
            <p className="text-muted">{member.description}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Birthday:</strong> {member.birthday}</li>
              <li className="list-group-item"><strong>Position:</strong> {member.position}</li>
              <li className="list-group-item"><strong>Nationality:</strong> {member.nationality}</li>
            </ul>
            <div className="mt-3">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaInstagram className="me-2" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
