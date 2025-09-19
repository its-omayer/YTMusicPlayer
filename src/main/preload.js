const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  fetchLyrics: (track, artist) => ipcRenderer.invoke('fetch-lyrics', track, artist),
  updateMetadata: (track) => ipcRenderer.send('update-metadata', track),
  onMprisPlayPause: (callback) => ipcRenderer.on('mpris-playpause', callback),
  onMprisNext: (callback) => ipcRenderer.on('mpris-next', callback),
  onMprisPrevious: (callback) => ipcRenderer.on('mpris-previous', callback),
});
