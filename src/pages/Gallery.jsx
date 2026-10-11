import React, { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: "3 Jharkhand CTC NCC Unit Contingent",
    src: "/home.jpg",
    category: "Unit Formation",
    caption: "The cadet contingent assembled with unit ANO and staff officers in front of the central BIT Mesra building."
  },
  {
    id: 2,
    title: "National Cadet Corps Official Crest",
    src: "/ncc-logo.svg",
    category: "Heraldry",
    caption: "The official tri-service emblem with the 17-lotus wreath and 'एकता और अनुशासन' motto scroll."
  },
  {
    id: 3,
    title: "Ceremonial Inspection Formations",
    src: "https://bitmesra.ac.in/UploadedDocuments/user_Pratyush_869/Gallery/_large_1882022223555_IMG_2025b6c4dfe1-8be4-45c8-bc0d-a11fcd4f27bc.jpg",
    category: "Parade",
    caption: "Senior Division & Senior Wing cadets in ceremonial review order on the Institute main ground."
  },
  {
    id: 4,
    title: "Independence Day Guard of Honour",
    src: "https://bitmesra.ac.in/UploadedDocuments/user_Pratyush_869/Gallery/_large_1882022223555_IMG_2025b6c4dfe1-8be4-45c8-bc0d-a11fcd4f27bc.jpg",
    category: "Ceremony",
    caption: "Cadets presenting the ceremonial National Salute during annual 15 August ceremonies at BIT Mesra."
  },
  {
    id: 5,
    title: "Technical Platoon Exercises (Engineers & Signals)",
    src: "/home.jpg",
    category: "Technical",
    caption: "Composite technical training in communications protocol and field engineering support."
  },
  {
    id: 6,
    title: "Combined Annual Training Camp (CATC) Contingent",
    src: "/home.jpg",
    category: "Camps",
    caption: "Cadets participating in mandatory 10-day training camp covering weapon drill and fieldcraft."
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ['All', 'Unit Formation', 'Parade', 'Ceremony', 'Technical', 'Camps'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Cadet Photo Archive</h1>
          <p className="page-subtitle">
            Visual record of ceremonial parades, camp deployments, Guard of Honour formations, and technical training conducted by 3 Jharkhand CTC NCC at BIT Mesra.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn ${activeCategory === cat ? 'btn-navy' : 'btn-outline'}`}
                style={{ padding: '0.45rem 1rem', fontSize: '0.8125rem' }}
                onClick={() => setActiveCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="inst-card" 
                style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedImg(item)}
              >
                <div style={{ height: '220px', overflow: 'hidden', background: 'var(--ncc-navy-darkest)' }}>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: item.id === 2 ? 'contain' : 'cover', 
                      background: item.id === 2 ? 'var(--ncc-navy-deep)' : 'transparent', 
                      padding: item.id === 2 ? '1.5rem' : '0' 
                    }}
                    onError={(e) => { e.target.src = '/ncc-logo.svg'; }}
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span className="badge-tag badge-navy">{item.category}</span>
                  <h3 style={{ fontSize: '1.05rem', margin: '0 0 0.35rem 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8125rem', margin: 0, color: 'var(--text-muted)' }}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1.25rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            <strong>Archival Policy:</strong> Photographs displayed represent verified historical activities documented by BIT Mesra and 3 Jharkhand Composite Technical Company NCC. All assets are archived for institutional display purposes.
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 11, 26, 0.9)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedImg(null)}
        >
          <div 
            style={{ 
              maxWidth: '850px', 
              width: '100%', 
              background: 'var(--bg-surface)', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              border: '2px solid var(--ncc-gold)',
              boxShadow: 'var(--shadow-lg)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ background: 'var(--ncc-navy-darkest)', textAlign: 'center' }}>
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain' }} 
              />
            </div>
            <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)' }}>
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--text-main)', display: 'block' }}>{selectedImg.title}</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{selectedImg.caption}</p>
              </div>
              <button 
                onClick={() => setSelectedImg(null)} 
                className="btn btn-navy"
                style={{ padding: '0.45rem 1rem', fontSize: '0.8125rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}
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
