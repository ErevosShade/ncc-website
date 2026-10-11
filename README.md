# National Cadet Corps (NCC) — 3 Jharkhand Composite Technical Company, BIT Mesra

Official multi-page institutional web application for **3 Jharkhand Composite Technical Company NCC, Birla Institute of Technology, Mesra, Ranchi** (under **NCC Directorate Bihar & Jharkhand**, Ministry of Defence).

Built with **React**, **Vite**, and **React Router DOM**.

---

## 🏛️ The Five Official Pages

The portal features five dedicated, consistently designed pages:

1. **Home (`/`)**: Full SPA landing page with hero command, key stats (1956, 1957, 3 Platoons, 200 Cadres), timeline, technical platoons, training syllabus, achievements/certifications, documented activities, gallery highlights, enrolment guidelines, and interactive FAQ.
2. **About Us (`/about`)**: Chronological formation timeline (1956 Sindri, 1957 Mesra, 1964 1 Bihar EME, 1967 Mixed Regiment, 1977 Composite Tech Co, 2000+ 3 Jharkhand CTC), official crest heraldry, and technical platoons (Engineers, Signals, EME).
3. **Notices (`/notices`)**: Authorised circulars, enrolment notices, examination nominal roll deadlines, and camp movement orders with interactive category filter and detail viewer.
4. **Activities (`/activities`)**: Documented unit events (Independence Day Parade, Puneet Sagar Abhiyan river cleanup, Kargil Vijay Diwas marathon, Swachh Bharat Abhiyan) with interactive category filtering.
5. **Gallery (`/gallery`)**: Archival photo repository with full-screen interactive image lightbox.

---

## 🎵 NCC Anthem Audio (`song.mpeg`)

The official Song of NCC (*"हम सब भारतीय हैं"*) audio file [`song.mpeg`](file:///C:/Users/Mysha/Documents/Event%20Projects/ncc-website/public/audio/song.mpeg) is structured under:
- **Location**: `public/audio/song.mpeg`
- **Auto-Playback**: Automatically initiates on website load (with seamless one-touch fallback for browsers with strict unmuted autoplay policies).
- **Controls**: Persistent floating widget at the bottom-left with Play/Pause, Mute/Unmute, and status indicator, plus an embedded player inside the Anthem Lyrics Modal.

---

## 🎨 Authentic Color Palette (Sampled from `logo.jpeg`)

- **Indian Army Red**: `#E4000F`
- **Indian Navy Deep Blue**: `#2C2783`
- **Indian Air Force Sky Blue**: `#019EE3`
- **Lotus Wreath & Crest Gold**: `#FFC80B`
- **High-Contrast Deep Navy**: `#0E0A30` / `#161248`
- **Clean Background Neutral**: `#F8FAFC` / `#FFFFFF`

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (runs on http://localhost:8000)
npm run dev

# 3. Production build
npm run build
```
