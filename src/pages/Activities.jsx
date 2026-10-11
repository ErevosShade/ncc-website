import React from 'react';
import { Link } from 'react-router-dom';

export default function Activities() {
  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Unit Activities Archive</h1>
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
              SECTION UNDER DIGITISATION &amp; COMPILATION
            </span>

            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              color: 'var(--ncc-navy)', 
              marginBottom: '1rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 800
            }}>
              Archival Records Under Compilation
            </h2>

            <p style={{ 
              fontSize: '0.9375rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.7, 
              maxWidth: '640px', 
              margin: '0 auto 2rem' 
            }}>
              The comprehensive historical and field activity records—covering ceremonial parades, Combined Annual Training Camps (CATC), social service drives (SSCD), and environmental campaigns conducted by <strong>3 Jharkhand Composite Technical Company NCC</strong> at BIT Mesra—are currently being compiled and verified under official unit supervision.
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
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--ncc-navy)', marginTop: '2px' }}>1956 to Present Field Records</strong>
              </div>
              <div>
                <small style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Supervision</small>
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-main)', marginTop: '2px' }}>Associate NCC Officer (ANO) Office</strong>
              </div>
              <div>
                <small style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Authority</small>
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--ncc-red)', marginTop: '2px' }}>BIT Mesra &amp; NCC Dte Bihar &amp; Jharkhand</strong>
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
              <Link to="/notices" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8125rem' }}>
                Official Notices →
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
            <strong>Official Record Notice:</strong> For urgent historical citations or activity verification for cadet dossiers, please contact the Associate NCC Officer (ANO) at the Student Activity Centre (SAC), BIT Mesra.
          </div>
        </div>
      </section>
    </main>
  );
}
