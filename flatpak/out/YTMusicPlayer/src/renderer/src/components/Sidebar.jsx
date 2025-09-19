import React from 'react';

const Sidebar = () => (
  <div className="w-64 bg-gray-800 p-4">
    <h1 className="text-2xl font-bold mb-6">YTMusicPlayer</h1>
    <nav>
      <ul>
        <li className="py-2 hover:bg-gray-700 rounded">Listen Now</li>
        <li className="py-2 hover:bg-gray-700 rounded">Browse</li>
        <li className="py-2 hover:bg-gray-700 rounded">Library</li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
