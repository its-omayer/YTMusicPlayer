import React, { useState, useEffect } from 'react';
import { Sidebar, Player, Content } from './components';
import './styles/tailwind.css';

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    if (currentTrack) {
      window.electronAPI.updateMetadata(currentTrack);
      window.electronAPI.fetchLyrics(currentTrack.title, currentTrack.artist)
        .then(data => setLyrics(data.syncedLyrics || data.plainLyrics || 'No lyrics found'));
    }
  }, [currentTrack]);

  // Listen for MPRIS events (add playback logic)
  useEffect(() => {
    window.electronAPI.onMprisPlayPause(() => {
      // Toggle play/pause state
      console.log('Play/Pause from MPRIS');
      // Implement actual toggle here
    });
    window.electronAPI.onMprisNext(() => {
      // Skip to next track
      console.log('Next from MPRIS');
      // Implement skip next
    });
    window.electronAPI.onMprisPrevious(() => {
      // Skip to previous track
      console.log('Previous from MPRIS');
      // Implement skip previous
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <Content setCurrentTrack={setCurrentTrack} />
      <Player track={currentTrack} lyrics={lyrics} />
    </div>
  );
};

export default App;
