import React from 'react';
import AboutHeroSlider from '../components/AboutHeroSlider';
import AboutSections from '../components/AboutSections';

export default function AboutUs({ onOpenAnthem }) {
  return (
    <main className="about-page-wrapper">
      <div className="about-page-container">
        {/* Top 3D Carousel with the 4 high-res WhatsApp images */}
        <AboutHeroSlider />

        {/* The 4 requested sections */}
        <AboutSections onOpenAnthem={onOpenAnthem} />
      </div>
    </main>
  );
}
