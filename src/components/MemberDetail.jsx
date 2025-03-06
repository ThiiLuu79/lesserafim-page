import React from "react";
import { useParams } from "react-router-dom";
import membersData from "./membersData"; // Import member data

const MemberDetail = () => {
  const { id } = useParams();
  const member = membersData.find((m) => m.id === parseInt(id));

  if (!member) {
    return <h2>Member not found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card text-center p-4 shadow-lg">
        <img src={member.imageSrc} alt={member.name} className="img-fluid rounded-circle" style={{ width: "200px", height: "200px" }} />
        <h2 className="mt-3">{member.name}</h2>
        <p><strong>Birthday:</strong> {member.birthday}</p>
        <p><strong>Position:</strong> {member.position}</p>
        <p><strong>Nationality:</strong> {member.nationality}</p>
        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default MemberDetail;
