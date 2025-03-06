import React from 'react';
import LeSserafimMember from './lesserafim-member';

import chaewonimg from '../images/members/chaewon.png';
import sakuraimg from '../images/members/sakura.png';
import yunjinimg from '../images/members/yunjin.png';
import kazuhaimg from '../images/members/kazuha.png';
import eunchaeimg from '../images/members/eunchae.png';

const MembersSection = () => {

  return (
    <section id="members" className="py-5" data-aos="fade-right">
        <div className="container">
            <h2 className="text-center mb-4">Meet the Members</h2>
            <div className="row">
                <LeSserafimMember
                name="Kim Chaewon"
                imageSrc={chaewonimg}
                description="Kim Chaewon is a South Korean singer and leader of LE SSERAFIM. She is known for her captivating voice and leadership skills in the group."
                />
                <LeSserafimMember
                name="Miyawaki Sakura"
                imageSrc={sakuraimg}
                description="Sakura is a Japanese singer and one of the most prominent members of LE SSERAFIM. She is known for her elegant visuals and strong stage presence."
                />
                <LeSserafimMember
                name="Huh Yunjin"
                imageSrc={yunjinimg}
                description="Huh Yunjin is a talented vocalist known for her rich voice and emotional depth. She brings a lot of soul to LE SSERAFIM's music."
                />
                <LeSserafimMember
                name="Nakamura Kazuha"
                imageSrc={kazuhaimg}
                description="Kazuha is a Japanese-born member known for her ballet background and sharp dance skills. Her elegance and grace shine through in her performances."
                />
                <LeSserafimMember
                name="Hong Eunchae"
                imageSrc={eunchaeimg}
                description="Hong Eunchae is the youngest member of LE SSERAFIM, known for her bright energy and impressive vocal abilities at such a young age."
                />
            </div>
        </div>
    </section>
  );
};

export default MembersSection;
