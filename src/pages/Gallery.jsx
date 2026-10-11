import React, { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: "Archival Cadet Formation at BIT Mesra",
    src: "https://bitmesra.ac.in/UploadedDocuments/user_Pratyush_869/Gallery/_large_1882022223555_IMG_2025b6c4dfe1-8be4-45c8-bc0d-a11fcd4f27bc.jpg",
    category: "Parade",
    caption: "Senior Division & Senior Wing cadets lined in ceremonial inspection formation on the central campus grounds."
  },
  {
    id: 2,
    title: "National Cadet Corps Official Crest",
    src: "/logo.jpeg",
    category: "Heraldry",
    caption: "The official tri-service emblem with the 17-lotus wreath and 'एकता और अनुशासन' motto scroll."
  },
  {
    id: 3,
    title: "Guard of Honour Contingent",
    src: "https://bitmesra.ac.in/UploadedDocuments/user_Pratyush_869/Gallery/_large_1882022223555_IMG_2025b6c4dfe1-8be4-45c8-bc0d-a11fcd4f27bc.jpg",
    category: "Ceremony",
    caption: "Cadets presenting the National Salute during 15 August Independence Day ceremonies at the Institute."
  }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <span className="page-eyebrow">PHOTO &amp; MEDIA ARCHIVE</span>
          <h1 className="page-title">Cadet Photo Archive</h1>
          <p className="page-subtitle">
            Visual record of ceremonial parades, camp deployments, Guard of Honour formations, and community outreach conducted by 3 Jharkhand CTC NCC at BIT Mesra.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-3">
            {galleryItems.map(item => (
              <div 
                key={item.id} 
                className="inst-card" 
                style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedImg(item)}
              >
                <div style={{ height: '220px', overflow: 'hidden', background: '#0E0A30' }}>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: item.id === 2 ? 'contain' : 'cover', background: item.id === 2 ? '#FFF' : 'transparent', padding: item.id === 2 ? '1.5rem' : '0' }}
                    onError={(e) => { e.target.src = '/logo.jpeg'; }}
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span className="badge-tag badge-navy">{item.category}</span>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.35rem 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8125rem', margin: 0 }}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--ncc-gold)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            <strong>Archival Policy:</strong> Photographs displayed represent verified historical activities documented by BIT Mesra. Cadets wishing to submit approved high-resolution camp photographs may contact the unit media cell via the ANO office.
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedImg(null)}
        >
          <div 
            style={{ maxWidth: '800px', width: '100%', background: '#FFF', borderRadius: '8px', overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg.src} 
              alt={selectedImg.title} 
              style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', background: '#0E0A30' }} 
            />
            <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{selectedImg.title}</strong>
                <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{selectedImg.caption}</p>
              </div>
              <button 
                onClick={() => setSelectedImg(null)} 
                className="btn btn-navy"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
