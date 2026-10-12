import React, { useState, useEffect, useMemo, useRef } from 'react';
import { galleryCategories, galleryItems, mediaAchievements } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('bento'); // 'bento' or 'uniform'
  
  // Unified Lightbox State supporting both archival dispatches and media achievements
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: galleryItems,
    index: 0,
    collectionTitle: 'Archival Field Dispatch'
  });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const filmstripRef = useRef(null);

  // Compute category counts for archival items
  const categoryCounts = useMemo(() => {
    const counts = { all: galleryItems.length };
    galleryItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter archival items based on activeCategory and searchQuery
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
      // Check media achievements first
      const mediaIdx = mediaAchievements.findIndex(i => i.slug === hash);
      if (mediaIdx !== -1) {
        setLightboxState({
          isOpen: true,
          items: mediaAchievements,
          index: mediaIdx,
          collectionTitle: 'Media Coverage & Achievement'
        });
        return;
      }
      // Check archival gallery items
      const galIdx = galleryItems.findIndex(i => i.slug === hash);
      if (galIdx !== -1) {
        setLightboxState({
          isOpen: true,
          items: galleryItems,
          index: galIdx,
          collectionTitle: 'Archival Field Dispatch'
        });
      }
    }
  }, []);

  // Synchronize URL hash with current active lightbox photo
  useEffect(() => {
    if (lightboxState.isOpen) {
      const item = lightboxState.items[lightboxState.index];
      if (item && window.location.hash !== `#${item.slug}`) {
        window.history.replaceState(null, '', `${window.location.pathname}#${item.slug}`);
      }
    } else {
      const hash = window.location.hash.replace('#', '');
      const isItemSlug = galleryItems.some(i => i.slug === hash) || mediaAchievements.some(i => i.slug === hash);
      if (isItemSlug) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [lightboxState.isOpen, lightboxState.index, lightboxState.items]);

  // Lightbox openers
  const openArchivalLightbox = (item) => {
    const index = galleryItems.findIndex(i => i.id === item.id);
    setLightboxState({
      isOpen: true,
      items: galleryItems,
      index: index !== -1 ? index : 0,
      collectionTitle: 'Archival Field Dispatch'
    });
    setIsZoomed(false);
    setIsCopied(false);
  };

  const openMediaLightbox = (item) => {
    const index = mediaAchievements.findIndex(i => i.id === item.id);
    setLightboxState({
      isOpen: true,
      items: mediaAchievements,
      index: index !== -1 ? index : 0,
      collectionTitle: 'Media Coverage & Achievement'
    });
    setIsZoomed(false);
    setIsCopied(false);
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
    setIsZoomed(false);
    setIsCopied(false);
  };

  const nextLightboxImg = () => {
    if (!lightboxState.isOpen || !lightboxState.items.length) return;
    setLightboxState(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length
    }));
    setIsZoomed(false);
    setIsCopied(false);
  };

  const prevLightboxImg = () => {
    if (!lightboxState.isOpen || !lightboxState.items.length) return;
    setLightboxState(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.items.length) % prev.items.length
    }));
    setIsZoomed(false);
    setIsCopied(false);
  };

  const handleCopyLink = async (e) => {
    e.stopPropagation();
    if (!lightboxState.isOpen) return;
    const item = lightboxState.items[lightboxState.index];
    if (!item) return;
    const url = `${window.location.origin}${window.location.pathname}#${item.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    } catch {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxState.isOpen) return;

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
  }, [lightboxState.isOpen, lightboxState.index, lightboxState.items.length]);

  // Auto-scroll active thumbnail into view in the filmstrip
  useEffect(() => {
    if (lightboxState.isOpen && filmstripRef.current) {
      const activeThumb = filmstripRef.current.children[lightboxState.index];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [lightboxState.isOpen, lightboxState.index]);

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

  const currentItem = lightboxState.isOpen && lightboxState.items[lightboxState.index]
    ? lightboxState.items[lightboxState.index]
    : null;

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
            Guard of Honour salutations, civic outreach, and regional press coverage conducted by 3 JHAR CTC NCC at Birla Institute of Technology, Mesra.
          </p>

          {/* Direct Section Quick Jump Anchors */}
          <div className="gallery-nav-anchors" role="navigation" aria-label="Section Quick Jump">
            <a href="#media-coverage" className="gallery-nav-anchor-btn primary">
              <span>Media Coverage &amp; Achievements ({mediaAchievements.length})</span>
            </a>
            <a href="#cadet-dispatches" className="gallery-nav-anchor-btn secondary">
              <span>Archival Field Dispatches ({galleryItems.length})</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Telemetry Stats Strip */}
      <section className="gallery-stats-strip" aria-label="Archive Statistics">
        <div className="container">
          <div className="gallery-stats-grid">
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">{galleryItems.length}</span>
              <span className="gallery-stat-lbl">Archival Photographs</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">{mediaAchievements.length}</span>
              <span className="gallery-stat-lbl">Press &amp; Media Features</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">3</span>
              <span className="gallery-stat-lbl">Tri-Service Wings</span>
            </div>
            <div className="gallery-stat-item">
              <span className="gallery-stat-num">CTC</span>
              <span className="gallery-stat-lbl">Technical Coy BIT Mesra</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SEPARATE SECTION: MEDIA & COVERAGE (HIGHLIGHTING ACHIEVEMENTS)
          ========================================================================= */}
      <section className="media-coverage-section" id="media-coverage" aria-labelledby="media-heading">
        <div className="container">
          <div className="media-section-header">
            <div className="media-section-topline">
              <span className="badge-tag badge-gold">PRESS DISPATCHES &amp; PUBLIC RECOGNITION</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                {mediaAchievements.length} Official Press &amp; Publication Records
              </span>
            </div>
            <h2 className="section-main-title" id="media-heading" style={{ margin: '0.25rem 0 0.5rem 0' }}>
              Media Coverage &amp; Unit Achievements
            </h2>
            <p className="section-desc">
              Authentic newspaper clippings, regional press reports, and official commemorative releases highlighting key achievements, 
              community outreach, sports championships, and defense technical training undertaken by 3 Jharkhand Composite Technical Company NCC at BIT Mesra.
            </p>

            {/* Quick Accolade Milestones Strip */}
            <div className="media-accolades-strip" aria-label="Key Unit Accolades">
              <div className="media-accolade-chip">
                <span className="chip-dot"></span>
                <span>10-KM Har Ghar Tiranga Walkathon</span>
              </div>
              <div className="media-accolade-chip">
                <span className="chip-dot"></span>
                <span>Army Aviation Reconnaissance Study</span>
              </div>
              <div className="media-accolade-chip">
                <span className="chip-dot"></span>
                <span>National Sports Day 2026 Champion Meet</span>
              </div>
              <div className="media-accolade-chip">
                <span className="chip-dot"></span>
                <span>University Induction Platform 2026</span>
              </div>
            </div>
          </div>

          {/* Grid of Media & Coverage Cards */}
          <div className="media-coverage-grid">
            {mediaAchievements.map((item) => (
              <article
                key={item.id}
                className="media-card"
                aria-label={`Media coverage: ${item.title}`}
              >
                {/* Image Wrap with Enlarge Prompt */}
                <div
                  className="media-card-img-wrap"
                  onClick={() => openMediaLightbox(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openMediaLightbox(item);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Click to inspect clipping: ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="media-card-img"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.src = '/ncc-logo.svg'; }}
                  />

                  {/* Top Scrim with Badges */}
                  <div className="media-card-top-scrim">
                    <span className="media-badge-pill">
                      {item.tag}
                    </span>
                    <span className="media-date-pill">
                      {item.date}
                    </span>
                  </div>

                  {/* Bottom Scrim with Click Prompt */}
                  <div className="media-card-bottom-scrim">
                    <span className="media-inspect-prompt">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <span>Click to Enlarge &amp; Read Dispatch</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Achievement Highlights */}
                <div className="media-card-body">
                  <div className="media-card-meta-line">
                    <span className="media-outlet-badge">
                      {item.source}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-subtle)' }}>
                      {item.publicationType}
                    </span>
                  </div>

                  {item.hindiHeadline && (
                    <h3 className="media-hindi-headline">
                      "{item.hindiHeadline}"
                    </h3>
                  )}

                  <h4 className="media-english-title">
                    {item.title}
                  </h4>

                  <p className="media-card-summary">
                    {item.summary}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="media-highlights-list">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="media-highlight-item">
                        <span className="media-highlight-icon">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Footer */}
                  <div className="media-card-actions">
                    <div className="media-location-info">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span>{item.location}</span>
                    </div>

                    <div className="media-btn-group">
                      <button
                        type="button"
                        className="btn-inspect-media"
                        onClick={() => openMediaLightbox(item)}
                        aria-label={`Enlarge ${item.title}`}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <span>Read Dispatch</span>
                      </button>

                      <a
                        href={item.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-original-media"
                        title="View high-resolution original image"
                      >
                        Original ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ARCHIVAL CADET FIELD DISPATCHES & BENTO SHOWCASE
          ========================================================================= */}
      <section className="page-section" id="cadet-dispatches" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span className="badge-tag badge-navy">HISTORIC &amp; FIELD PHOTOGRAPHY</span>
            </div>
            <h2 className="section-main-title" style={{ margin: '0.2rem 0 0.5rem 0' }}>
              Cadet Field Dispatches &amp; Photographic Archive
            </h2>
            <p className="section-desc">
              Filter and explore authentic high-resolution field photographs documented across training camps, Guard of Honour formations, 
              sword salutes, aviation orientations, and inter-service competitions.
            </p>
          </div>

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
                  onClick={() => openArchivalLightbox(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openArchivalLightbox(item);
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
                      decoding="async"
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
                        <span>{item.year}</span>
                        <span>•</span>
                        <span>{item.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-empty-state">
              <div className="gallery-empty-icon" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto', display: 'block' }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--ncc-navy)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <div>
              <strong style={{ color: 'var(--ncc-navy)', display: 'block', marginBottom: '0.2rem' }}>Archival Integrity &amp; Unit Documentation Policy:</strong>
              Photographs and dispatches presented in this archive represent authentic training activities, ceremonial guard formations, state reviews, and social campaigns undertaken by 3 Jharkhand Composite Technical Company NCC at BIT Mesra, Ranchi. All media records are maintained under the stewardship of the unit media cell and Caretaker Officer / Associate NCC Officer. For official publication requests or high-resolution camp negatives, contact the Unit Headquarters.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CINEMATIC FULLSCREEN LIGHTBOX THEATRE (UNIFIED)
          ========================================================================= */}
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
              <span className="lightbox-unit-badge">{currentItem.tag || currentItem.unit}</span>
              <span className="lightbox-counter-badge">
                {lightboxState.collectionTitle.toUpperCase()} • {String(lightboxState.index + 1).padStart(2, '0')} / {String(lightboxState.items.length).padStart(2, '0')}
              </span>
            </div>

            <div className="lightbox-controls-group">
              <button
                className="lightbox-action-btn"
                onClick={handleCopyLink}
                title="Copy direct link to this record"
                aria-label="Copy direct record link"
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
                {currentItem.hindiHeadline && (
                  <div style={{ fontFamily: 'var(--font-hindi)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ncc-gold)', marginBottom: '0.35rem' }}>
                    "{currentItem.hindiHeadline}"
                  </div>
                )}
                <h2 className="lightbox-caption-title">{currentItem.title}</h2>
                <p className="lightbox-caption-text">{currentItem.caption}</p>
                <div className="lightbox-caption-meta">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{currentItem.location}</span>
                  </span>
                  <span>•</span>
                  <span>TAG: {currentItem.tag}</span>
                  <span>•</span>
                  <span>YEAR: {currentItem.year}</span>
                  {currentItem.source && (
                    <>
                      <span>•</span>
                      <span>SOURCE: {currentItem.source}</span>
                    </>
                  )}
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
              {lightboxState.items.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  className={`lightbox-thumb-btn ${idx === lightboxState.index ? 'active' : ''}`}
                  onClick={() => {
                    setLightboxState(prev => ({ ...prev, index: idx }));
                    setIsZoomed(false);
                    setIsCopied(false);
                  }}
                  title={thumb.title}
                  aria-label={`Jump to ${thumb.title}`}
                  role="tab"
                  aria-selected={idx === lightboxState.index}
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
