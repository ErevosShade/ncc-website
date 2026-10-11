import React from 'react';

export default function Topbar() {
  const setFontSize = (size) => {
    document.documentElement.setAttribute('data-font-size', size);
    localStorage.setItem('ncc_font_size', size);
  };

  const toggleContrast = () => {
    const body = document.body;
    const isHighContrast = body.getAttribute('data-contrast') === 'high';
    if (isHighContrast) {
      body.removeAttribute('data-contrast');
      localStorage.removeItem('ncc_contrast');
    } else {
      body.setAttribute('data-contrast', 'high');
      localStorage.setItem('ncc_contrast', 'high');
    }
  };

  return (
    <>
      {/* Official Tri-Service Color Stripes */}
      <div className="top-tricolour-band" aria-hidden="true">
        <span className="band-army"></span>
        <span className="band-navy"></span>
        <span className="band-air"></span>
      </div>

      <div className="institutional-topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="gov-meta">
              <strong className="hindi">भारत सरकार</strong> <span className="gov-sub-text">GOVERNMENT OF INDIA</span>
            </span>
            <span className="gov-divider" aria-hidden="true">|</span>
            <span className="gov-meta">
              <span className="hindi">रक्षा मंत्रालय</span> <span className="gov-sub-text">MINISTRY OF DEFENCE</span>
            </span>
            <span className="gov-divider" aria-hidden="true">|</span>
            <span className="motto-tag">
              <span className="hindi">एकता और अनुशासन</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span>UNITY AND DISCIPLINE</span>
            </span>
          </div>

          <div className="topbar-right">
            <a href="#stats" className="a11y-link">Skip to Main Content</a>
            <span className="gov-divider" aria-hidden="true">|</span>
            <div className="a11y-group" aria-label="Text size control">
              <button className="a11y-btn" onClick={() => setFontSize('small')} type="button" aria-label="Decrease text size">A-</button>
              <button className="a11y-btn" onClick={() => setFontSize('normal')} type="button" aria-label="Default text size">A</button>
              <button className="a11y-btn" onClick={() => setFontSize('large')} type="button" aria-label="Increase text size">A+</button>
            </div>
            <span className="gov-divider" aria-hidden="true">|</span>
            <button className="btn-contrast-toggle" onClick={toggleContrast} type="button" aria-label="Toggle High-Contrast mode">
              ◐ High Contrast
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
