import React from 'react';
import { Link } from 'react-router-dom';

export default function Notices() {
  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Official Notices &amp; Circulars</h1>
          <p className="page-subtitle">
            Birla Institute of Technology, Mesra · 3 Jharkhand Composite Technical Company NCC
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="inst-card" style={{ 
            padding: '3rem 2rem', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid var(--border-medium)',
            boxShadow: 'var(--shadow-md)'
          }}>
            {/* Top Tricolour Stripe */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--ncc-red) 0%, var(--ncc-navy) 50%, var(--ncc-sky) 100%)'
            }}></div>

            {/* Emblem */}
            <div style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 1.5rem',
              background: 'var(--ncc-navy-deep)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid var(--ncc-gold)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <img 
                src="/ncc-logo.svg" 
                alt="NCC Official Crest" 
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              />
            </div>

            {/* Status Badge */}
            <span className="badge-tag badge-gold" style={{ 
              margin: '0 auto 1rem', 
              fontSize: '0.75rem', 
              padding: '0.35rem 0.85rem',
              letterSpacing: '0.08em'
            }}>
              NOTICE BOARD UNDER UPDATION &amp; DIGITISATION
            </span>

            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              color: 'var(--ncc-navy)', 
              marginBottom: '1rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 800
            }}>
              Notice Board Under Updation
            </h2>

            <p style={{ 
              fontSize: '0.9375rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.7, 
              maxWidth: '640px', 
              margin: '0 auto 2rem' 
            }}>
              Official notifications, circulars, enrolment orders, and camp directives for <strong>3 Jharkhand Composite Technical Company NCC</strong> at BIT Mesra are currently being compiled, verified, and integrated into the digital notice portal under the guidance of the Associate NCC Officer (ANO).
            </p>

            {/* Information Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              textAlign: 'left',
              background: 'var(--bg-subtle)',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              marginBottom: '2rem'
            }}>
              <div>
                <small style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Scope</small>
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--ncc-navy)', marginTop: '2px' }}>Orders, Enrolment &amp; Directives</strong>
              </div>
              <div>
                <small style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Issuing Authority</small>
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-main)', marginTop: '2px' }}>Associate NCC Officer (ANO) / Unit Office</strong>
              </div>
              <div>
                <small style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Headquarters</small>
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--ncc-red)', marginTop: '2px' }}>Ranchi Group HQ · Dte Bihar &amp; Jharkhand</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '0.85rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <Link to="/" className="btn btn-navy" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8125rem' }}>
                Return to Home
              </Link>
              <Link to="/about" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8125rem' }}>
                About Our Unit →
              </Link>
              <Link to="/gallery" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8125rem' }}>
                Photo Gallery →
              </Link>
            </div>
          </div>

          {/* Institutional Note */}
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem 1.25rem', 
            background: 'var(--bg-subtle)', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--border-light)', 
            fontSize: '0.8125rem', 
            color: 'var(--text-muted)',
            textAlign: 'center'
          }}>
            <strong>Urgent Inquiries:</strong> Regular cadets seeking immediate information regarding upcoming parades, camps, or certificate submissions should visit the Unit Notice Board physically at the Student Activity Centre (SAC), BIT Mesra.
          </div>
        </div>
      </section>
    </main>
  );
}
