🎵 SymphoNode  
*The Network of Music*

SymphoNode is a lightweight music web application built using **Angular (standalone components)**.  
It allows users to browse songs, manage playlists, and play audio locally using MP3 files.

This project is designed to demonstrate:
- Component-based architecture
- Service-based state management
- Routing in Angular
- Playlist creation and song management

---

## 🚀 Features

- 🎧 Play local MP3 songs
- ❤️ Mark songs as favorites
- 📂 Create multiple playlists
- ➕ Add songs to playlists
- ➖ Remove songs from playlists
- 🎨 Simple, clean UI with navigation
- 🧩 Built entirely using **Angular standalone components**

---

## 🛠️ Tech Stack

- **Frontend:** Angular 20 (Standalone Components)
- **Language:** TypeScript
- **Styling:** CSS
- **Audio:** HTML5 Audio API
- **Package Manager:** npm
- **Version Control:** Git + GitHub

---

## 📁 Project Structure
```text
music-app/
├── public/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── artist-detail/
│   │   │   ├── artists/
│   │   │   ├── navbar/
│   │   │   ├── playlist-manager/
│   │   │   ├── song-list/
│   │   │   └── song-player/
│   │   │
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   ├── artist.model.ts
│   │   │   │   ├── playlist.model.ts
│   │   │   │   └── song.model.ts
│   │   │   │
│   │   │   └── services/
│   │   │       ├── artist.service.ts
│   │   │       ├── audio.service.ts
│   │   │       ├── music.service.ts
│   │   │       └── playlist.service.ts
│   │   │
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   │
│   └── assets/
│       ├── audio/
│       └── image/
│
├── index.html
├── main.ts
├── styles.css
├── .editorconfig
├── angular.json
├── .gitignore
└── package.json
```

