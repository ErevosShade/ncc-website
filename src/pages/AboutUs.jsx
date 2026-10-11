import React from 'react';
import AboutHeroSlider from '../components/AboutHeroSlider';
import AboutSections from '../components/AboutSections';

export default function AboutUs({ onOpenAnthem }) {
  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Official aims, motto, heraldic symbols, and anthem of 3 Jharkhand Composite Technical Company NCC, Birla Institute of Technology, Mesra.
          </p>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          {/* Top 3D Carousel with 4 WhatsApp Photos */}
          <AboutHeroSlider />

          {/* Content Sections (Aim of NCC, Our Motto, NCC Flag, NCC Song) */}
          <AboutSections onOpenAnthem={onOpenAnthem} />
        </div>
      </section>
    </main>
  );
}
