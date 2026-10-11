import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenAnthem }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1: Unit Identification */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img 
              src="/logo.jpeg" 
              alt="NCC Crest" 
              style={{ width: '48px', height: '48px', objectFit: 'contain', background: '#FFF', borderRadius: '4px', padding: '2px', border: '1px solid var(--ncc-gold)' }} 
            />
            <div>
              <strong style={{ fontFamily: 'var(--font-display)', color: '#FFF', display: 'block', fontSize: '1rem' }}>
                NATIONAL CADET CORPS
              </strong>
              <small style={{ color: 'var(--ncc-gold)', fontWeight: 700, fontSize: '0.75rem' }}>
                3 JHAR CTC · BIT MESRA RANCHI
              </small>
            </div>
          </div>
          <p style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.6 }}>
            3 Jharkhand Composite Technical Company NCC, established at BIT Mesra in 1957. Operating under the administrative aegis of NCC Directorate Bihar &amp; Jharkhand.
          </p>
          <button 
            onClick={onOpenAnthem} 
            className="btn btn-gold" 
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', marginTop: '0.5rem' }}
            type="button"
          >
            ♫ Song of NCC
          </button>
        </div>

        {/* Column 2: 5 Pages Navigation */}
        <div>
          <h3 className="footer-heading">Site Directory</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/notices">Notices</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Column 3: Defense & Official Portals */}
        <div>
          <h3 className="footer-heading">Official Portals</h3>
          <ul className="footer-links">
            <li><a href="https://indiancc.mygov.in/" target="_blank" rel="noreferrer">DG NCC India Portal ↗</a></li>
            <li><a href="https://nccdtebj.in/" target="_blank" rel="noreferrer">NCC Dte Bihar &amp; Jharkhand ↗</a></li>
            <li><a href="https://joinindianarmy.nic.in/" target="_blank" rel="noreferrer">Join Indian Army ↗</a></li>
            <li><a href="https://joinindiannavy.gov.in/" target="_blank" rel="noreferrer">Join Indian Navy ↗</a></li>
            <li><a href="https://careerindianairforce.cdac.in/" target="_blank" rel="noreferrer">Join Indian Air Force ↗</a></li>
            <li><a href="https://bitmesra.ac.in/" target="_blank" rel="noreferrer">BIT Mesra Official ↗</a></li>
          </ul>
        </div>

        {/* Column 4: Official Unit Address */}
        <div>
          <h3 className="footer-heading">Unit Headquarters</h3>
          <p style={{ color: '#94A3B8', fontSize: '0.8125rem', lineHeight: 1.6, margin: 0 }}>
            <strong>3 Jharkhand Composite Technical Company NCC</strong><br />
            Birla Institute of Technology (BIT), Mesra<br />
            Ranchi – 835215, Jharkhand, India<br /><br />
            <strong>ANO Office:</strong> Student Activity Centre (SAC)<br />
            <strong>Parade Grounds:</strong> Main Institute Sports Ground<br />
            <strong>Parent Directorate:</strong> Bihar &amp; Jharkhand
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} 3 Jharkhand Composite Technical Company NCC, BIT Mesra.</span>
          <span style={{ color: 'var(--ncc-gold)', fontWeight: 700, letterSpacing: '0.05em' }}>
            UNITY AND DISCIPLINE · <span className="hindi">एकता और अनुशासन</span>
          </span>
          <a href="#top" style={{ color: '#94A3B8' }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
