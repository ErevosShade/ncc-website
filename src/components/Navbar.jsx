import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-lockup" onClick={closeMobile} aria-label="National Cadet Corps BIT Mesra Home">
          <img src="/ncc-logo.svg" alt="NCC Crest" className="brand-crest" />
          <div className="brand-text">
            <span className="brand-hindi">राष्ट्रीय कैडेट कोर</span>
            <span className="brand-title">NATIONAL CADET CORPS</span>
            <span className="brand-sub">3 JHAR CTC · BIT MESRA RANCHI</span>
          </div>
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobile} 
          type="button" 
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

        {/* Exactly the 5 pages requested */}
        <nav className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            About Us
          </NavLink>
          <NavLink to="/notices" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Notices
          </NavLink>
          <NavLink to="/activities" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Activities
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Gallery
          </NavLink>
          <Link to="/notices" className="nav-cta" onClick={closeMobile}>
            Notices
          </Link>
        </nav>
      </div>
    </header>
  );
}
