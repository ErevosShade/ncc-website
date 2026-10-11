import React, { useEffect } from 'react';

export default function DeveloperSignatureModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 9, 20, 0.78)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Developer Signature"
    >
      <div
        style={{
          background: 'linear-gradient(160deg, #101426 0%, #0a0d18 100%)',
          borderRadius: '16px',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(245, 158, 11, 0.12)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          overflow: 'hidden',
          textAlign: 'center',
          padding: '2.5rem 2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sleek Glowing Monogram */}
        <div
          style={{
            width: '54px',
            height: '54px',
            margin: '0 auto 1.25rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(26, 20, 90, 0.4) 100%)',
            border: '1.5px solid var(--ncc-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.25)'
          }}
        >
          ⚡
        </div>

        {/* Minimal Signature Title */}
        <h2
          style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.35rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em'
          }}
        >
          Made by <span style={{ color: 'var(--ncc-gold)' }}>Team Erevos</span>
        </h2>

        {/* Subtitle / Unit Dedication */}
        <p
          style={{
            margin: '0 0 1.75rem 0',
            fontSize: '0.85rem',
            color: '#94A3B8',
            lineHeight: 1.6
          }}
        >
          Architected for 3 Jharkhand Composite Technical Company NCC, Birla Institute of Technology, Mesra.
        </p>

        {/* Minimal Dismiss Button */}
        <button
          onClick={onClose}
          className="btn btn-gold"
          style={{
            padding: '0.5rem 1.75rem',
            fontSize: '0.8125rem',
            fontWeight: 700,
            borderRadius: '8px'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
