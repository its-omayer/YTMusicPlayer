const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let Player;
if (process.platform === 'linux') {
  Player = require('mpris-service');
}

let mprisPlayer;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadFile('renderer/index.html');

  if (process.platform === 'linux') {
    mprisPlayer = Player({
      name: 'ytmusicplayer',
      identity: 'YTMusicPlayer',
      supportedUriSchemes: ['http', 'https'],
      supportedMimeTypes: ['audio/mpeg'],
      supportedInterfaces: ['player']
    });

    // Handle MPRIS events and send to renderer
    mprisPlayer.on('playpause', () => win.webContents.send('mpris-playpause'));
    mprisPlayer.on('next', () => win.webContents.send('mpris-next'));
    mprisPlayer.on('previous', () => win.webContents.send('mpris-previous'));
  }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC for updating metadata from renderer
ipcMain.on('update-metadata', (event, track) => {
  if (process.platform === 'linux' && mprisPlayer) {
    mprisPlayer.metadata = {
      'mpris:trackid': mprisPlayer.objectPath(`track/${track.title.replace(/\s/g, '')}`),
      'mpris:length': 0, // Update with actual duration if available
      'mpris:artUrl': track.artUrl || '', // Add artUrl if available
      'xesam:title': track.title || 'Unknown',
      'xesam:album': track.album || '',
      'xesam:artist': [track.artist || 'Unknown']
    };
    mprisPlayer.playbackStatus = 'Playing'; // Update based on state
  }
});
