import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import NoticeTicker from './components/NoticeTicker';
import Footer from './components/Footer';
import AnthemModal from './components/AnthemModal';
import AudioPlayer from './components/AudioPlayer';
import DeveloperSignatureModal from './components/DeveloperSignatureModal';

// Exactly 5 Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
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
  const [signatureOpen, setSignatureOpen] = useState(false);

  // Easter Egg: typing 'erevos' opens the developer signature modal
  useEffect(() => {
    let keyBuffer = '';
    const targetWord = 'erevos';

    const handleKeyDown = (e) => {
      if (e.key && e.key.length === 1) {
        keyBuffer += e.key.toLowerCase();
        if (keyBuffer.length > 20) {
          keyBuffer = keyBuffer.slice(-20);
        }
        if (keyBuffer.endsWith(targetWord)) {
          setSignatureOpen(true);
          keyBuffer = '';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollToTop />
      <Topbar />
      <Navbar />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home onOpenAnthem={() => setAnthemOpen(true)} />} />
          <Route path="/about" element={<AboutUs onOpenAnthem={() => setAnthemOpen(true)} />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/history" element={<Navigate to="/about" replace />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer onOpenAnthem={() => setAnthemOpen(true)} />
      <AnthemModal isOpen={anthemOpen} onClose={() => setAnthemOpen(false)} />
      <DeveloperSignatureModal isOpen={signatureOpen} onClose={() => setSignatureOpen(false)} />
      
      {/* Autoplay Background NCC Anthem Player with Floating Controls */}
      <AudioPlayer />
    </>
  );
}
