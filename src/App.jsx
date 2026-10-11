import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import NoticeTicker from './components/NoticeTicker';
import Footer from './components/Footer';
import AnthemModal from './components/AnthemModal';
import AudioPlayer from './components/AudioPlayer';

// Exactly 5 Pages
import Home from './pages/Home';
import LegacyHistory from './pages/LegacyHistory';
import Notices from './pages/Notices';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If navigating to an in-page anchor (e.g. #history), don't force top scroll
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}

export default function App() {
  const [anthemOpen, setAnthemOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollToTop />
      <Topbar />
      <Navbar />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home onOpenAnthem={() => setAnthemOpen(true)} />} />
          <Route path="/history" element={<LegacyHistory />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer onOpenAnthem={() => setAnthemOpen(true)} />
      <AnthemModal isOpen={anthemOpen} onClose={() => setAnthemOpen(false)} />
      
      {/* Autoplay Background NCC Anthem Player with Floating Controls */}
      <AudioPlayer />
    </>
  );
}
