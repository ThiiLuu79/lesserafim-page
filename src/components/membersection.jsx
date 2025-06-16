import React, { useEffect, useState } from "react";
import LeSserafimMember from "./lesserafim-member";
import membersData from "../data/membersData";
import axios from "axios";

const MembersSection = () => {
  const [members, setMembers] = useState(membersData);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("https://lesserafimapi.onrender.com/api/members");
        setMembers(response.data);
      } catch (err) {
        setError("Failed to fetch member data.");
        console.error(err);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section id="members" className="py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-4">Meet the Members</h2>

        {error && <p className="text-danger text-center">{error}</p>}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {members.map((member) => (
            <div key={member.id} className="col">
              <LeSserafimMember
                id={member.id}
                name={member.name}
                imageSrc={member.image1URL || member.imageSrc}
                position={member.position}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
