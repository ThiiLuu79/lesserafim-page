import React from 'react';

function LeSserafimMV({ title, iframeSrc }) {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        title={title}
        src={iframeSrc}
        className="w-100 h-100"
        allowFullScreen
      />
    </div>
  );
}

export default LeSserafimMV;
