import React from 'react';

const Content = ({ setCurrentTrack }) => {
  // Mock track selection (replace with ytmusicapi integration)
  const selectTrack = () => {
    setCurrentTrack({ title: 'Sample Song', artist: 'Sample Artist' });
  };

  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl mb-4">Browse</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-700 p-4 rounded cursor-pointer" onClick={selectTrack}>
          Sample Song
        </div>
      </div>
    </div>
  );
};

export default Content;
