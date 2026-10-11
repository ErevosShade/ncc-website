import React, { useState, useEffect, useMemo, useRef } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('bento'); // 'bento' or 'uniform'
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const filmstripRef = useRef(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: galleryItems.length };
    galleryItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter items based on activeCategory and searchQuery
  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q || (
        item.title.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.caption.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q)
      );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Read URL hash on mount for direct deep linking
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const idx = galleryItems.findIndex(i => i.slug === hash);
      if (idx !== -1) {
        setLightboxIndex(idx);
      }
    }
  }, []);

  // Synchronize URL hash with current active lightbox photo
  useEffect(() => {
    if (lightboxIndex !== null) {
      const item = galleryItems[lightboxIndex];
      if (item && window.location.hash !== `#${item.slug}`) {
        window.history.replaceState(null, '', `${window.location.pathname}#${item.slug}`);
      }
    } else {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [lightboxIndex]);

  // Lightbox navigation helpers
  const openLightbox = (item) => {
    const index = galleryItems.findIndex(i => i.id === item.id);
    if (index !== -1) {
      setLightboxIndex(index);
      setIsZoomed(false);
      setIsCopied(false);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
    setIsCopied(false);
  };

  const nextLightboxImg = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
      setIsZoomed(false);
      setIsCopied(false);
    }
  };

  const prevLightboxImg = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
      setIsZoomed(false);
      setIsCopied(false);
    }
  };

  const handleCopyLink = async (e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const item = galleryItems[lightboxIndex];
    const url = `${window.location.origin}${window.location.pathname}#${item.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    } catch {
      // Fallback if clipboard API is constrained
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImg();
      if (e.key === 'ArrowLeft') prevLightboxImg();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex]);

  // Auto-scroll active thumbnail into view in the filmstrip
  useEffect(() => {
    if (lightboxIndex !== null && filmstripRef.current) {
      const activeThumb = filmstripRef.current.children[lightboxIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [lightboxIndex]);

  // Touch swipe support for Lightbox
  const touchStartXRef = useRef(null);
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) nextLightboxImg();
    else if (diff < -50) prevLightboxImg();
    touchStartXRef.current = null;
  };

  const currentItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <main>
      {/* 1. Official Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag badge-gold">3 JHARKHAND COMPO TECH COY NCC</span>
            <span style={{ color: 'var(--ncc-gold)', fontSize: '0.75rem', fontWeight: 600 }}>•</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.75rem', fontWeight: 600 }}>BIT MESRA RANCHI</span>
          </div>
          <h1 className="page-title">Cadet Photo Archive &amp; Field Records</h1>
          <p className="page-subtitle">
            Visual record of ceremonial parades, flight briefings with Army Aviation, annual training camp deployments, 
            Guard of Honour salutations, and civic outreach conducted by 3 JHAR CTC NCC at Birla Institute of Technology, Mesra.
          </p>
        </div>
      </section>

      {/* 2. Telemetry Stats Strip */}
      <section className="gallery-stats-strip" aria-label="Archive Statistics">
        <div className="container">
          <div className="gallery-stats-grid">
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">16</span>
              <span className="gallery-stat-lbl">Archival Photographs</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">3</span>
              <span className="gallery-stat-lbl">Tri-Service Wings</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">100%</span>
              <span className="gallery-stat-lbl">Authentic Deployments</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">CTC</span>
              <span className="gallery-stat-lbl">Technical Coy BIT Mesra</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Filtering & Bento Showcase */}
      <section className="page-section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          {/* Controls Bar */}
          <div className="gallery-toolbar-container">
            <div className="gallery-filter-row">
              {/* Category Pills */}
              <div className="gallery-pills-list" role="tablist" aria-label="Filter photo categories">
                {galleryCategories.map(cat => {
                  const count = categoryCounts[cat.id] || 0;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      role="tab"
                      aria-selected={isActive}
                      className={`gallery-pill ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <span>{cat.label}</span>
                      <span className="gallery-pill-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search & View Mode Actions */}
              <div className="gallery-actions-wrap">
                <div className="gallery-search-box">
                  <span className="gallery-search-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search dispatches, drill, aviation..."
                    className="gallery-search-input"
                    aria-label="Search dispatches"
                  />
                  {searchQuery && (
                    <button 
                      className="gallery-search-clear"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="gallery-view-modes" aria-label="Grid layout toggle">
                  <button
                    className={`view-mode-btn ${viewMode === 'bento' ? 'active' : ''}`}
                    onClick={() => setViewMode('bento')}
                    title="Bento Mosaic Layout"
                    aria-pressed={viewMode === 'bento'}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="3" width="7" height="11" rx="1"></rect>
                      <rect x="14" y="3" width="7" height="6" rx="1"></rect>
                      <rect x="14" y="12" width="7" height="9" rx="1"></rect>
                      <rect x="3" y="16" width="7" height="5" rx="1"></rect>
                    </svg>
                    <span>Bento</span>
                  </button>
                  <button
                    className={`view-mode-btn ${viewMode === 'uniform' ? 'active' : ''}`}
                    onClick={() => setViewMode('uniform')}
                    title="Uniform Grid Layout"
                    aria-pressed={viewMode === 'uniform'}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    </svg>
                    <span>Grid</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results count live region */}
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', marginBottom: '0.75rem', fontWeight: 500 }} aria-live="polite">
            Showing {filteredItems.length} of {galleryItems.length} archival dispatches
          </div>

          {/* Gallery Items Grid */}
          {filteredItems.length > 0 ? (
            <div className={viewMode === 'bento' ? 'gallery-bento-grid' : 'gallery-uniform-grid'}>
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className={`gallery-card ${viewMode === 'bento' ? item.gridSpan : ''}`}
                  onClick={() => openLightbox(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(item);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${item.title}`}
                >
                  <div className="gallery-card-img-wrap">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-card-img"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/ncc-logo.svg'; }}
                    />
                  </div>

                  {/* Tactical HUD Scrim Overlay */}
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-topbar">
                      <span className="card-hud-badge">
                        {item.tag}
                      </span>
                      <span className="card-inspect-btn" aria-hidden="true" title="Click to view">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <polyline points="9 21 3 21 3 15"></polyline>
                          <line x1="21" y1="3" x2="14" y2="10"></line>
                          <line x1="3" y1="21" x2="10" y2="14"></line>
                        </svg>
                      </span>
                    </div>

                    <div className="gallery-card-bottom">
                      <h3 className="gallery-card-title">{item.title}</h3>
                      <div className="gallery-card-meta">
                        <span className="gallery-card-meta-item">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <span>{item.location}</span>
                        </span>
                        <span>•</span>
                        <span>{item.year}</span>
                      </div>
                      <p className="gallery-card-caption-snippet">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-empty-state">
              <div className="gallery-empty-icon" aria-hidden="true">🔍</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>No matching dispatches found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                No archival photographs match your current query "{searchQuery}". Try another keyword or reset the filter.
              </p>
              <button
                className="btn btn-navy"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Archival Policy Notice */}
          <div style={{ marginTop: '3rem', padding: '1.25rem 1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--ncc-navy)', flexShrink: 0 }}>🛡️</span>
            <div>
              <strong style={{ color: 'var(--ncc-navy)', display: 'block', marginBottom: '0.2rem' }}>Archival Integrity &amp; Unit Documentation Policy:</strong>
              Photographs presented in this archive represent authentic training activities, ceremonial guard formations, state reviews, and social campaigns undertaken by 3 Jharkhand Composite Technical Company NCC at BIT Mesra, Ranchi. All images are documented under the stewardship of the unit media cell and Associate NCC Officer. For official publication requests or high-resolution camp negatives, contact the ANO Office.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cinematic Lightbox Theatre */}
      {currentItem && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded image view: ${currentItem.title}`}
        >
          {/* Lightbox Header */}
          <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-title-area">
              <span className="lightbox-unit-badge">{currentItem.unit}</span>
              <span className="lightbox-counter-badge">
                DISPATCH {String(lightboxIndex + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
              </span>
            </div>

            <div className="lightbox-controls-group">
              <button
                className="lightbox-action-btn"
                onClick={handleCopyLink}
                title="Copy direct link to this photograph"
                aria-label="Copy direct photograph link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span>{isCopied ? "✓ Copied!" : "Share"}</span>
              </button>

              <button
                className="lightbox-action-btn"
                onClick={() => setIsZoomed(!isZoomed)}
                title={isZoomed ? "Reset Zoom" : "Zoom 1.4x"}
                aria-label="Toggle zoom"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  {isZoomed ? (
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  ) : (
                    <>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </>
                  )}
                </svg>
                <span>{isZoomed ? "Reset" : "Zoom"}</span>
              </button>

              <a
                href={currentItem.src}
                target="_blank"
                rel="noopener noreferrer"
                className="lightbox-action-btn"
                title="Open full resolution in new tab"
                aria-label="Open full resolution"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Original</span>
              </a>

              <button
                className="lightbox-action-btn lightbox-close-btn"
                onClick={closeLightbox}
                title="Close Lightbox (Esc)"
                aria-label="Close Lightbox"
              >
                ✕ Esc
              </button>
            </div>
          </div>

          {/* Lightbox Stage */}
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            {/* Prev Button */}
            <button
              className="lightbox-nav-btn prev"
              onClick={prevLightboxImg}
              title="Previous photo (Arrow Left)"
              aria-label="Previous photograph"
            >
              ‹
            </button>

            {/* Main Image */}
            <div className={`lightbox-img-wrapper ${isZoomed ? 'zoomed' : ''}`}>
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="lightbox-main-img"
                onClick={() => setIsZoomed(!isZoomed)}
                onError={(e) => { e.currentTarget.src = '/ncc-logo.svg'; }}
              />
            </div>

            {/* Next Button */}
            <button
              className="lightbox-nav-btn next"
              onClick={nextLightboxImg}
              title="Next photo (Arrow Right)"
              aria-label="Next photograph"
            >
              ›
            </button>
          </div>

          {/* Lightbox Footer & Filmstrip */}
          <div className="lightbox-footer" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-info-row">
              <div className="lightbox-caption-box">
                <h2 className="lightbox-caption-title">{currentItem.title}</h2>
                <p className="lightbox-caption-text">{currentItem.caption}</p>
                <div className="lightbox-caption-meta">
                  <span>📍 {currentItem.location}</span>
                  <span>•</span>
                  <span>TAG: {currentItem.tag}</span>
                  <span>•</span>
                  <span>YEAR: {currentItem.year}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Filmstrip */}
            <div
              className="lightbox-filmstrip-strip"
              ref={filmstripRef}
              role="tablist"
              aria-label="Photograph Filmstrip"
            >
              {galleryItems.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  className={`lightbox-thumb-btn ${idx === lightboxIndex ? 'active' : ''}`}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setIsZoomed(false);
                    setIsCopied(false);
                  }}
                  title={thumb.title}
                  aria-label={`Jump to ${thumb.title}`}
                  role="tab"
                  aria-selected={idx === lightboxIndex}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.title}
                    className="lightbox-thumb-img"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/ncc-logo.svg'; }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
