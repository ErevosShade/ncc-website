import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutHeroSlider from '../components/AboutHeroSlider';
import AboutSections from '../components/AboutSections';

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
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#about" className="btn btn-saffron">
                Discover Our Unit ↓
              </a>
              <a href="#history" className="btn btn-outline" style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.4)' }}>
                Timeline of Journey ↓
              </a>
              <Link to="/about" className="btn btn-navy" style={{ background: '#1c1e69', border: '1px solid rgba(255,255,255,0.2)' }}>
                About Us →
              </Link>
              <button 
                onClick={onOpenAnthem} 
                className="btn btn-outline" 
                style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.4)' }}
                type="button"
              >
                ♫ Song of NCC
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.08em' }}>
              <span style={{ width: '28px', height: '2px', background: 'var(--ncc-orange)' }}></span>
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
      <section className="page-section page-section-alt" id="about">
        <div className="container">
          <div className="section-heading-block" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="badge-tag badge-gold" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              ABOUT NCC &amp; OUR UNIT
            </span>
            <h2 className="section-main-title">Leadership, Purpose &amp; Service</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Official establishment aims, heraldic symbols, motto, and song of 3 Jharkhand Composite Technical Company NCC, BIT Mesra.
            </p>
          </div>

          {/* 3D Carousel with 4 WhatsApp Photos */}
          <AboutHeroSlider />

          {/* Screenshot Sections (Aim, Motto, Flag, Song) */}
          <AboutSections onOpenAnthem={onOpenAnthem} />
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
            <Link to="/about" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Click for More: View Dedicated About Us Page</span>
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
          7. ACHIEVEMENTS & CERTIFICATE EXAMINATION PASSES
          ========================================================================= */}
      <section className="page-section" id="achievements">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Progress &amp; Certificate Validations</h2>
            <p className="section-desc">
              Official certificate qualifications awarded under NCC Directorate Bihar &amp; Jharkhand.
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            <div className="inst-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge-tag badge-gold">2025 · REPORTED</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--ncc-navy)', lineHeight: 1 }}>
                  60
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>'B' Certificate Passes</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Documented in the Institute's 2024–25 outreach activities report under NCC Directorate Bihar &amp; Jharkhand.</p>
            </div>

            <div className="inst-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge-tag badge-red">2024 · REPORTED</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--ncc-red)', lineHeight: 1 }}>
                  50
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>'C' Certificate Passes</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Highest qualification in NCC, granting direct eligibility for the Indian Armed Forces SSB Special Entry Scheme.</p>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-light)',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            color: 'var(--text-main)',
            lineHeight: 1.6
          }}>
            <strong>SSB Direct Interview Route:</strong> Cadets who pass the 'C' Certificate examination with 'A' or 'B' grade are exempt from the UPSC Combined Defence Services (CDS) written examination for the Indian Army (OTA Chennai), Navy, and Air Force, receiving direct call letters for the Services Selection Board (SSB).
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CADET PHOTO GALLERY PREVIEW
          ========================================================================= */}
      <section className="page-section page-section-alt" id="gallery">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Archival Moments &amp; Formations</h2>
            <p className="section-desc">
              Verified photographs documenting parades, ceremonial inspections, and unit heraldry at BIT Mesra.
            </p>
          </div>

          <div className="home-gallery-preview-grid">
            <Link to="/gallery" className="home-gallery-card">
              <div className="home-gallery-card-img-wrap">
                <span className="home-gallery-card-badge">GUARD OF HONOUR</span>
                <img 
                  src="/images/gallery/cadet-sword-salute.jpg" 
                  alt="Ceremonial Sword Salutation" 
                  className="home-gallery-card-img"
                  loading="lazy"
                />
              </div>
              <div className="home-gallery-card-content">
                <span className="badge-tag badge-red" style={{ alignSelf: 'flex-start' }}>PARADE &amp; DRILL</span>
                <h3 className="home-gallery-card-title">Ceremonial Sword Salutation</h3>
                <p className="home-gallery-card-caption">Contingent Commander calling cadence and rendering the traditional ceremonial sword salute at BIT Mesra.</p>
              </div>
            </Link>

            <Link to="/gallery" className="home-gallery-card">
              <div className="home-gallery-card-img-wrap">
                <span className="home-gallery-card-badge">ARMY AVIATION</span>
                <img 
                  src="/images/gallery/army-aviation-briefing.jpg" 
                  alt="Army Aviation Flight Briefing" 
                  className="home-gallery-card-img"
                  loading="lazy"
                />
              </div>
              <div className="home-gallery-card-content">
                <span className="badge-tag badge-sky" style={{ alignSelf: 'flex-start' }}>AIRFIELD TRAINING</span>
                <h3 className="home-gallery-card-title">Aviation Flight Briefing</h3>
                <p className="home-gallery-card-caption">Cadets receiving flight aerodynamics and mission briefing beside an HAL Chetak helicopter.</p>
              </div>
            </Link>

            <Link to="/gallery" className="home-gallery-card">
              <div className="home-gallery-card-img-wrap">
                <span className="home-gallery-card-badge">DRILL &amp; DISCIPLINE</span>
                <img 
                  src="/images/gallery/synchronized-march-past.jpg" 
                  alt="Synchronized March Past Drill" 
                  className="home-gallery-card-img"
                  loading="lazy"
                />
              </div>
              <div className="home-gallery-card-content">
                <span className="badge-tag badge-navy" style={{ alignSelf: 'flex-start' }}>MARCH PAST</span>
                <h3 className="home-gallery-card-title">Synchronized March Drill</h3>
                <p className="home-gallery-card-caption">Cadets maintaining laser-straight alignment and arm-swings in tri-color hackles and white gloves.</p>
              </div>
            </Link>

            <Link to="/gallery" className="home-gallery-card">
              <div className="home-gallery-card-img-wrap">
                <span className="home-gallery-card-badge">HEADQUARTERS</span>
                <img 
                  src="/images/gallery/battalion-battledress-portrait.jpg" 
                  alt="Unit Battalion Formal Roll" 
                  className="home-gallery-card-img"
                  loading="lazy"
                />
              </div>
              <div className="home-gallery-card-content">
                <span className="badge-tag badge-gold" style={{ alignSelf: 'flex-start' }}>BATTALION ROLL</span>
                <h3 className="home-gallery-card-title">Unit Battalion Formal Roll</h3>
                <p className="home-gallery-card-caption">All cadet ranks assembled in ceremonial battledress outside the 3 JHAR CTC NCC headquarters building.</p>
              </div>
            </Link>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Click for More: View Full 16-Photo Archive</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. ENROLMENT GUIDELINES (PHYSICAL ON-CAMPUS MODE ONLY)
          ========================================================================= */}
      <section className="page-section" id="join">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Cadet Enrolment Guidelines</h2>
            <p className="section-desc">
              All enrolment selections are conducted physically on-campus at BIT Mesra. This portal is strictly informational and does not process online applications.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-light)',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem', color: 'var(--ncc-orange)' }}>ℹ</span>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              <strong>Notice:</strong> 3 Jharkhand CTC NCC is a regular institutional technical unit. Enrolments are open exclusively to regular 1st-year undergraduate students of BIT Mesra through physical trials at the Student Activity Centre (SAC).
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            <div className="inst-card">
              <span className="badge-tag badge-navy">ELIGIBILITY</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Institutional Criteria</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Must be a bona fide regular 1st-year student of BIT Mesra (B.Tech / B.Arch / B.Pharm) with satisfactory medical fitness standards.</p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-red">PHYSICAL TRIALS</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Fitness Assessment</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Conducted on the Institute Sports Ground: 1.6 km run, push-ups, sit-ups, and drill aptitude evaluation by Permanent Instructional (PI) staff.</p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">IN-PERSON SUBMISSION</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Unit Office at SAC</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Enrolment Form I, medical certificate, and institutional identity proofs are submitted physically to the Associate NCC Officer (ANO) at SAC.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/notices" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              View Official Circulars &amp; Notices →
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
