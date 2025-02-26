import React from 'react';

const ZaptBadge = () => {
  return (
    <div className="fixed bottom-4 right-4 z-10">
      <a 
        href="https://www.zapt.ai" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg hover:bg-gray-800 transition-colors"
      >
        Made on ZAPT
      </a>
    </div>
  );
};

export default ZaptBadge;