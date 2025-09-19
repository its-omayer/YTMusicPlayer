import React from 'react';

const Player = ({ track, lyrics }) => (
  <div className="fixed bottom-0 w-full bg-gray-850 p-4 flex justify-between items-center">
    <div>
      <h3>{track?.title || 'No track'}</h3>
      <p>{track?.artist || ''}</p>
    </div>
    <div className="w-1/3 text-sm overflow-y-auto max-h-20">
      {lyrics.split('\n').map((line, i) => <p key={i}>{line}</p>)}
    </div>
    <div>
      <button className="px-4 py-2 bg-blue-600 rounded">Play/Pause</button>
    </div>
  </div>
);

export default Player;
