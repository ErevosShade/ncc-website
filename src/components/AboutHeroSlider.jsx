import React, { useState, useEffect, useRef } from 'react';

const IMAGES = [
  {
    src: '/images/about/unit-hq-bit-mesra.jpeg',
    alt: '3 Jharkhand Composite Technical Company NCC Unit Headquarters at BIT Mesra',
    title: 'Unit Headquarters · BIT Mesra'
  },
  {
    src: '/images/about/army-aviation-briefing.jpeg',
    alt: 'Cadets receiving military aviation briefing in front of Army Aviation helicopter',
    title: 'Army Aviation Core Briefing'
  },
  {
    src: '/images/about/unit-cadets-medals.jpeg',
    alt: 'Cadets with competition medals and company flags',
    title: 'Cadet Honors & Medals'
  },
  {
    src: '/images/about/cadet-ground-lecture.jpeg',
    alt: 'Outdoor military instruction and field lecture',
    title: 'Field Training & Instruction'
  }
];

export default function AboutHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getPositionClass = (index) => {
    const total = IMAGES.length;
    const diff = (index - currentIndex + total) % total;
    if (diff === 0) return 'active';
    if (diff === 1) return 'next';
    if (diff === total - 1) return 'prev';
    return 'hidden';
  };

  return (
    <section 
      className="about-3d-slider" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Cadet Training Photo Gallery"
    >
      <div className="about-3d-track">
        {IMAGES.map((img, idx) => {
          const pos = getPositionClass(idx);
          const isCurrent = pos === 'active';
          return (
            <div
              key={img.src}
              className={`about-3d-slide ${pos}`}
              onClick={() => {
                if (pos === 'prev') prevSlide();
                if (pos === 'next') nextSlide();
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${idx + 1} of ${IMAGES.length}: ${img.title}`}
              aria-hidden={!isCurrent}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="about-3d-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
                width="800"
                height="500"
              />
              <div className="about-3d-caption">
                <span>{img.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <button 
        type="button" 
        className="about-slider-nav prev-btn" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button 
        type="button" 
        className="about-slider-nav next-btn" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span aria-hidden="true">›</span>
      </button>

      {/* Dots Indicator */}
      <div className="about-slider-dots" role="tablist" aria-label="Slide Selector">
        {IMAGES.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={idx === currentIndex}
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}: ${img.title}`}
          />
        ))}
      </div>
    </section>
  );
}
