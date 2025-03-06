import React from 'react';

function LeSserafimMV({ title, iframeSrc }) {
  return (
    <div className="col">
        <div className="card shadow-lg">
        <div className="ratio ratio-16x9">
            <iframe
                title={title}
                src={iframeSrc}
                className="w-100 h-100"
                allowFullScreen
            />
        </div>
        </div>
    </div>


  );
}

export default LeSserafimMV;
