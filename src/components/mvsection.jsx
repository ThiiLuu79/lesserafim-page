import React from 'react';
import LeSserafimMV from './lesserafim-mv';

const MVSection = () => {

  return (
    <section id="music-videos" className="py-5" data-aos="fade-right">
        <div className="container">
            <h2 className="text-center mb-4">Music Videos</h2>
            <p className="text-center">Here are some of LE SSERAFIM's music videos!</p>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <LeSserafimMV
                    title="Star Signs"
                    iframeSrc="https://www.youtube.com/embed/E3RPpBJrJFQ?si=5Oh_XarbWLT1grY6"
                />
                <LeSserafimMV
                    title="Crazy"
                    iframeSrc="https://www.youtube.com/embed/n6B5gQXlB-0?si=xH4x4YGU9xyu72Y7"
                />
                <LeSserafimMV
                    title="Smart"
                    iframeSrc="https://www.youtube.com/embed/KNexS61fjus?si=4C047g0RYZrPZj9p_"
                />
                <LeSserafimMV
                    title="Easy"
                    iframeSrc="https://www.youtube.com/embed/bNKXxwOQYB8?si=-FLtINBbVuUTzuB_"
                />
                <LeSserafimMV
                    title="Perfect Night"
                    iframeSrc="https://www.youtube.com/embed/hLvWy2b857I?si=iOwxBOmwtejCcFQh"
                />
                <LeSserafimMV
                    title="Unforgiven"
                    iframeSrc="https://www.youtube.com/embed/UBURTj20HXI?si=kg7bfmUuBgQeAJtQ"
                />
                <LeSserafimMV
                    title="Antifragile"
                    iframeSrc="https://www.youtube.com/embed/pyf8cbqyfPs?si=ymHdi7xN4gJVomBH"
                />
                <LeSserafimMV
                    title="Fearless"
                    iframeSrc="https://www.youtube.com/embed/4vbDFu0PUew?si=i29enPmghXN-pPM7"
                />
            </div>
        </div>
    </section>
  );
};

export default MVSection;
