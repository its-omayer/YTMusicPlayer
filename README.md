# YTMusicPlayer

A Linux music player inspired by Apple Music, built with Electron, using YouTube Music, LRCLIB, and lyrics.ovh. Packaged as Flatpak and .deb.

## Features
- Stream music from YouTube Music
- Synced lyrics via LRCLIB, fallback to lyrics.ovh
- Modern UI with dark theme, sidebar, and player
- Flatpak and .deb packaging

## Installation
1. Clone: `git clone https://github.com/its-omayer/YTMusicPlayer.git`
2. Install: `pnpm install`
3. Run: `pnpm start`
4. Build: `pnpm make`

## Packaging
- Flatpak: Install with `flatpak install ./out/make/flatpak/*.flatpak`
- .deb: Install with `sudo dpkg -i ./out/make/deb/*.deb`

## Notes
- Uses unofficial YouTube Music APIs; ensure compliance with terms.
- Customize UI in `renderer/src/App.jsx` and styles in `styles/tailwind.css`.
