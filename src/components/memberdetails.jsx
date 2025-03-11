import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import membersData from "../data/membersData";
import { FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const MemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = membersData.find((m) => m.id === parseInt(id));

  if (!member) {
    return <h2 className="text-center mt-5">Member not found!</h2>;
  }

  return (
    <div className="container mt-5 mb-5" data-aos="fade-right">
      <button className="btn btn-secondary mb-4" onClick={() => navigate("/")}>← Back to Homepage</button>
      <div className="card shadow-lg p-4">
        <p>Informations are taken from <a href="https://kprofiles.com/le-sserafim-members-profile/" target="_blank" rel="noreferrer">LE SSERAFIM Members Profile</a> </p>
        <div className="row">
          <div className="col-md-4 text-center">
            <img 
              src={member.imageSrc2} 
              alt={member.name} 
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">{member.name}</h2>
            <p className="text-muted">{member.description}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Birth Name:</strong> {member.birthname}</li>
              <li className="list-group-item"><strong>Position:</strong> {member.position}</li>
              <li className="list-group-item"><strong>Nationality:</strong> {member.nationality}</li>
              <li className="list-group-item"><strong>Birthday:</strong> {member.birthday}</li>
              <li className="list-group-item"><strong>Zodiac:</strong> {member.zodiac}</li>
              <li className="list-group-item"><strong>Chinese Zodiac:</strong> {member.chineseZodiac}</li>
              <li className="list-group-item"><strong>Height:</strong> {member.height}</li>
              <li className="list-group-item"><strong>Weight:</strong> {member.weight}</li>
              <li className="list-group-item"><strong>Blood Type:</strong> {member.bloodType}</li>
              <li className="list-group-item"><strong>MBTI:</strong> {member.mbti}</li>
            </ul>
            <div className="mt-3">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
                  color: "white",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <FaInstagram className="me-2" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
