const fetch = require('node-fetch');

module.exports = {
  name: 'lyrics-custom',
  async onPlayerApiReady(api) {
    const { ipcMain } = require('electron');
    ipcMain.handle('fetch-lyrics', async (event, track, artist) => {
      try {
        // Try LRCLIB
        const lrclibRes = await fetch(`https://lrclib.net/api/search?track_name=${encodeURIComponent(track)}&artist_name=${encodeURIComponent(artist)}`);
        const lrclibData = await lrclibRes.json();
        if (lrclibData[0]?.syncedLyrics) return { syncedLyrics: lrclibData[0].syncedLyrics };

        // Fallback to lyrics.ovh
        const ovhRes = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(track)}`);
        const ovhData = await ovhRes.json();
        return { plainLyrics: ovhData.lyrics || 'No lyrics found' };
      } catch (error) {
        console.error('Lyrics fetch error:', error);
        return { plainLyrics: 'Error fetching lyrics' };
      }
    });
  },
};
