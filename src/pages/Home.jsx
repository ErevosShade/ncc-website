import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutHeroSlider from '../components/AboutHeroSlider';

export default function Home({ onOpenAnthem }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the official designation and affiliation of the unit?",
      a: "The unit is designated as 3 Jharkhand Composite Technical Company NCC, BIT Mesra, Ranchi. It operates under Ranchi Group Headquarters and NCC Directorate Bihar & Jharkhand, Patna."
    },
    {
      q: "Who is eligible to enrol as a cadet at BIT Mesra?",
      a: "Bona fide regular 1st-year undergraduate students (B.Tech, B.Arch, B.Pharm) of BIT Mesra meeting the medical and age criteria (18–23 years) are eligible for Senior Division (SD) and Senior Wing (SW) enrolment."
    },
    {
      q: "What are the direct SSB advantages of holding an NCC 'C' Certificate?",
      a: "Cadets holding a 'C' Certificate with 'A' or 'B' grade are exempt from the UPSC Combined Defence Services (CDS) written examination for the Indian Army (OTA Chennai), Navy, and Air Force. They receive a direct call letter for the Services Selection Board (SSB) interview."
    },
    {
      q: "Does NCC training conflict with engineering academic hours?",
      a: "No. Routine parades and drill sessions are scheduled on Saturday and early morning hours. Academic leave concessions are granted by the Institute for authorized 10-day camp deployments."
    },
    {
      q: "What technical platoons exist in 3 Jharkhand CTC NCC?",
      a: "Being a composite technical company, the unit is organized into three technical platoons: Corps of Engineers (field fortifications/bridging), Corps of Signals (tactical radio/telecommunications), and Corps of EME (electrical/mechanical equipment support)."
    }
  ];

  return (
    <main>
      {/* =========================================================================
          1. HERO COMMAND SECTION
          ========================================================================= */}
      <section className="hero-home-banner" id="top">
        <div className="container hero-content-wrap">
          <div className="hero-text-block">
            <h1 className="hero-title">
              3 Jharkhand Composite Technical Company NCC
            </h1>
            <p className="hero-subtitle">
              Birla Institute of Technology, Mesra, Ranchi · Under NCC Directorate Bihar &amp; Jharkhand
            </p>
            <div className="hero-meta-strip">
              <span className="hero-meta-dot"></span>
              <span>ESTABLISHED 1956</span>
              <span>•</span>
              <span>MESRA, RANCHI</span>
              <span>•</span>
              <span>UNITY AND DISCIPLINE</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. ABOUT THE UNIT SECTION
          ========================================================================= */}
      <section className="page-section" id="about">
        <div className="container about-home-grid">
          <div>
            <div className="about-home-img-wrap">
              <img 
                src="/images/about/unit-hq-bit-mesra.jpeg" 
                alt="3 Jharkhand Composite Technical Company NCC Unit Headquarters at BIT Mesra" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block' 
                }} 
              />
            </div>
          </div>

          <div>
            <h2 className="section-main-title">A legacy built on purpose and service.</h2>
            <p className="section-desc" style={{ marginBottom: '1rem' }}>
              NCC at BIT Mesra is part of a wider national movement that encourages young citizens to become disciplined, confident, and service-minded leaders.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The unit's own history reaches back to January 1956, when it was raised at Sindri as an EME section. It moved to Mesra in January 1957, then evolved through several technical formations before taking its present Jharkhand designation.
            </p>

            <div style={{ display: 'grid', gap: '0.875rem', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--ncc-red)', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-main)' }}>Discipline with Purpose</strong>
                  <small style={{ color: 'var(--text-subtle)' }}>Personal responsibility, military coordination, and commitment.</small>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--ncc-navy)', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-main)' }}>Learning by Doing</strong>
                  <small style={{ color: 'var(--text-subtle)' }}>Parade training, fieldcraft, weapon handling, camps, and practical exercises.</small>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--ncc-sky-dark)', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-main)' }}>Service Beyond Campus</strong>
                  <small style={{ color: 'var(--text-subtle)' }}>Participation in national initiatives, disaster response, and river conservation.</small>
                </div>
              </div>
            </div>

            <a href="#history" className="btn btn-navy">
              Read Our Full Journey ↓
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EARLIER COMPLETE LEGACY & HISTORY TIMELINE SECTION
          ========================================================================= */}
      <section className="page-section page-section-alt" id="history">
        <div className="container">
          <div className="section-heading-block" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <h2 className="section-main-title">A Timeline of Transformation</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              From a small EME section to a composite technical company, each chapter reflects an organisation adapting while carrying forward its foundational military purpose.
            </p>
          </div>

          {/* Full Interactive Chronological Timeline */}
          <div className="timeline-track">
            {/* 1956 */}
            <div className="timeline-milestone">
              <div className="timeline-pin"></div>
              <div className="timeline-card">
                <span className="milestone-year">1956</span>
                <h3 className="milestone-heading">Raised at Sindri</h3>
                <p className="milestone-body">
                  On 5 January 1956, the unit was raised at Sindri, Bihar, as <strong>6 Bihar EME Section NCC</strong> to provide technical NCC coverage to the engineering students of Bihar Institute of Technology, Sindri.
                </p>
              </div>
            </div>

            {/* 1957 */}
            <div className="timeline-milestone">
              <div className="timeline-pin"></div>
              <div className="timeline-card">
                <span className="milestone-year">1957</span>
                <h3 className="milestone-heading">Relocation to Mesra</h3>
                <p className="milestone-body">
                  On 1 January 1957, the unit moved to its permanent location at Mesra, Ranchi, establishing its depot to provide technical military coverage to the Birla Institute of Technology.
                </p>
              </div>
            </div>

            {/* 1964 */}
            <div className="timeline-milestone">
              <div className="timeline-pin"></div>
              <div className="timeline-card">
                <span className="milestone-year">1964</span>
                <h3 className="milestone-heading">1 Bihar EME Unit</h3>
                <p className="milestone-body">
                  In July 1964, the unit was reorganised and its reported cadet strength increased to 120. It received the designation <strong>1 Bihar EME Unit, Mesra (Ranchi)</strong>.
                </p>
              </div>
            </div>

            {/* 1967 */}
            <div className="timeline-milestone">
              <div className="timeline-pin"></div>
              <div className="timeline-card">
                <span className="milestone-year">1967</span>
                <h3 className="milestone-heading">The Mixed Regiment Era</h3>
                <p className="milestone-body">
                  In November 1967, Engineers, Signals, and EME technical companies were amalgamated into a full Mixed Regiment with a reported strength of 600 cadets, renamed <strong>3 Bihar Mixed Regiment NCC</strong>.
                </p>
                <div className="milestone-tags">
                  <span>ENGINEERS</span>
                  <span>SIGNALS</span>
                  <span>EME</span>
                </div>
              </div>
            </div>

            {/* 1977 */}
            <div className="timeline-milestone">
              <div className="timeline-pin"></div>
              <div className="timeline-card">
                <span className="milestone-year">1977</span>
                <h3 className="milestone-heading">Composite Technical Company</h3>
                <p className="milestone-body">
                  Under a national reduction policy for NCC technical units, the regiment was restructured into a company with three specialized platoons and a 200-cadet capacity: <strong>3 Bihar Composite Technical Company NCC</strong>.
                </p>
              </div>
            </div>

            {/* 2000+ */}
            <div className="timeline-milestone">
              <div className="timeline-pin"></div>
              <div className="timeline-card">
                <span className="milestone-year">2000+</span>
                <h3 className="milestone-heading">The Present Designation</h3>
                <p className="milestone-body">
                  Following the formation of the state of Jharkhand, the unit was redesignated <strong>3 Jharkhand Composite Technical Company NCC, Mesra</strong>, serving under NCC Directorate Bihar &amp; Jharkhand.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/history" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Click for More: View Dedicated Legacy &amp; History Page</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TRAINING SECTION (TECHNICAL PLATOONS & MILITARY DISCIPLINE)
          ========================================================================= */}
      <section className="page-section" id="training">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Training that Shapes More Than a Cadet</h2>
            <p className="section-desc">
              NCC training builds habits, technical endurance, and operational capabilities across three specialized technical platoons.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
            <div className="inst-card">
              <span className="badge-tag badge-red">CORPS OF ENGINEERS</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Field Fortifications</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Field obstacles, expedited bridging concepts, mine-awareness, and defensive construction support.</p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">CORPS OF SIGNALS</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Tactical Telephony</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Line laying, radio telephony procedures, cipher communication basics, and field antenna deployment.</p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">CORPS OF EME</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Technical Equipment</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Electrical &amp; mechanical maintenance, small arms handling, instrument calibration, and recovery drill.</p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-gold">ANNUAL CAMPS</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>CATC &amp; Trials</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Combined Annual Training Camps (CATC), .22 rifle live marksmanship, obstacle courses, and Thal Sainik trials.</p>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          8. CADET PHOTO GALLERY PREVIEW (INTERACTIVE SLIDER)
          ========================================================================= */}
      <section className="page-section page-section-alt" id="gallery">
        <div className="container">
          <div className="section-heading-block" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="badge-tag badge-navy" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
              CADET GLIMPSES &amp; GALLERY
            </span>
            <h2 className="section-main-title">Moments &amp; Formations in Focus</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Interactive showcase of unit headquarters, aviation briefings, cadet honors, and field training sessions at BIT Mesra.
            </p>
          </div>

          {/* Interactive 3D Gallery Slider */}
          <AboutHeroSlider />

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link to="/gallery" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Click for More: View Full 16-Photo Archive</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
          ========================================================================= */}
      <section className="page-section page-section-alt" id="faq">
        <div className="container">
          <div className="section-heading-block" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <h2 className="section-main-title">Frequently Asked Questions</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Essential information regarding cadet commitments, technical platoons, drill timings, and defence incentives.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="inst-card" 
                style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}
                onClick={() => toggleFaq(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--ncc-navy)' }}>{faq.q}</strong>
                  <span style={{ fontSize: '1.1rem', color: 'var(--ncc-red)', fontWeight: 800, marginLeft: '1rem', flexShrink: 0 }}>
                    {openFaq === idx ? '▲' : '▼'}
                  </span>
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: '0.75rem', marginBottom: 0, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
