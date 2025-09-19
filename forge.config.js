module.exports = {
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Your Name',
          homepage: 'https://github.com/yourusername/YTMusicPlayer'
        }
      }
    },
    {
      name: '@electron-forge/maker-flatpak',
      config: {
        options: {
          id: 'org.ytmusicplayer.YTMusicPlayer',
          categories: ['AudioVideo', 'Audio'],
          base: 'org.electronjs.Electron2.BaseApp',
          baseVersion: '22.08',
          files: [['./', '/share/YTMusicPlayer']],
          finishArgs: ['--share=network', '--socket=pulseaudio', '--share=ipc', '--device=dri', '--socket=system-bus', '--own-name=org.mpris.MediaPlayer2.ytmusicplayer.*']
        }
      }
    }
  ]
};
