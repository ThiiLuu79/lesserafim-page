import React from 'react';
import LeSserafimMember from './lesserafim-member';
import membersData from '../data/membersData';

const MembersSection = () => {
  return (
    <section id="members" className="py-5" data-aos="fade-right">
      <div className="container">
        <h2 className="text-center mb-4">Meet the Members</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {membersData.map((member) => (
            <div key={member.id} className="col">
                <LeSserafimMember 
                  name={member.name} 
                  imageSrc={member.imageSrc} 
                  description={member.description} 
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
