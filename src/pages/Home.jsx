import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <section className="page-header-banner" style={{ padding: '4.5rem 0 4rem' }} id="top">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="page-eyebrow">NATIONAL CADET CORPS · SENIOR DIVISION</span>
            <h1 className="page-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
              3 Jharkhand Composite Technical Company NCC
            </h1>
            <p className="page-subtitle" style={{ fontSize: '1.05rem', marginBottom: '1.75rem', color: '#E2E8F0' }}>
              Birla Institute of Technology, Mesra, Ranchi. Imparting disciplined military training, technical armed forces education, and selfless community service under the NCC Directorate Bihar &amp; Jharkhand since 1956.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#history" className="btn btn-gold">
                Explore Unit Section ↓
              </a>
              <Link to="/history" className="btn btn-outline" style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.4)' }}>
                Full History Page →
              </Link>
              <Link to="/notices" className="btn btn-navy" style={{ background: '#1E1863', border: '1px solid var(--ncc-gold)' }}>
                Notice Board
              </Link>
              <button 
                onClick={onOpenAnthem} 
                className="btn btn-outline" 
                style={{ color: 'var(--ncc-gold)', borderColor: 'var(--ncc-gold)' }}
                type="button"
              >
                ♫ Song of NCC
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(145deg, #1A145A, #0D0933)',
              border: '2px solid var(--ncc-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              display: 'inline-block',
              maxWidth: '380px',
              width: '100%',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img 
                src="/logo.jpeg" 
                alt="National Cadet Corps Crest" 
                style={{ width: '140px', height: '140px', objectFit: 'contain', margin: '0 auto 1.25rem', background: '#FFF', borderRadius: '8px', padding: '6px', border: '2px solid var(--ncc-gold)' }} 
              />
              <strong style={{ display: 'block', color: '#FFF', fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>
                UNITY AND DISCIPLINE
              </strong>
              <span className="hindi" style={{ display: 'block', color: 'var(--ncc-gold)', fontSize: '1rem', fontWeight: 700, margin: '4px 0 12px 0' }}>
                एकता और अनुशासन
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', fontSize: '0.6875rem', fontWeight: 800 }}>
                <span style={{ background: 'rgba(228,0,15,0.25)', color: '#FF8A8F', padding: '4px 2px', borderRadius: '3px', border: '1px solid rgba(228,0,15,0.5)' }}>
                  ARMY
                </span>
                <span style={{ background: 'rgba(44,39,131,0.5)', color: '#C0BCFF', padding: '4px 2px', borderRadius: '3px', border: '1px solid rgba(44,39,131,0.8)' }}>
                  NAVY
                </span>
                <span style={{ background: 'rgba(1,158,227,0.25)', color: '#82DCFF', padding: '4px 2px', borderRadius: '3px', border: '1px solid rgba(1,158,227,0.5)' }}>
                  AIR FORCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. KEY FIGURES BAR
          ========================================================================= */}
      <section style={{ background: '#FFF', borderBottom: '1px solid var(--border-light)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--ncc-navy)', display: 'block', lineHeight: 1 }}>
              1956
            </span>
            <strong style={{ fontSize: '0.875rem', display: 'block', marginTop: '0.35rem' }}>Raised at Sindri</strong>
            <small style={{ color: 'var(--text-subtle)', fontSize: '0.75rem' }}>5 January 1956</small>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--ncc-navy)', display: 'block', lineHeight: 1 }}>
              1957
            </span>
            <strong style={{ fontSize: '0.875rem', display: 'block', marginTop: '0.35rem' }}>Relocated to Mesra</strong>
            <small style={{ color: 'var(--text-subtle)', fontSize: '0.75rem' }}>BIT Mesra permanent base</small>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--ncc-navy)', display: 'block', lineHeight: 1 }}>
              03
            </span>
            <strong style={{ fontSize: '0.875rem', display: 'block', marginTop: '0.35rem' }}>Technical Platoons</strong>
            <small style={{ color: 'var(--text-subtle)', fontSize: '0.75rem' }}>Engineers, Signals &amp; EME</small>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--ncc-navy)', display: 'block', lineHeight: 1 }}>
              200
            </span>
            <strong style={{ fontSize: '0.875rem', display: 'block', marginTop: '0.35rem' }}>Authorized Strength</strong>
            <small style={{ color: 'var(--text-subtle)', fontSize: '0.75rem' }}>Senior Division &amp; Wing Cadets</small>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. LEGACY & HISTORY SECTION (WITH ROUTE TO FULL PAGE)
          ========================================================================= */}
      <section className="page-section" id="history">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">HERITAGE &amp; LINEAGE</span>
            <h2 className="section-main-title">Legacy &amp; History</h2>
            <p className="section-desc">
              Originally raised on 5 January 1956 at Sindri, Bihar, the unit relocated to BIT Mesra on 1 January 1957. Over six decades, it evolved through six key designations into today's composite technical company.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.25rem' }}>
            <div className="inst-card">
              <span className="badge-tag badge-red">CHAPTER 1 · 1956</span>
              <h3>Raised at Sindri</h3>
              <p>
                Established as <strong>6 Bihar EME Section NCC</strong> to provide technical training to engineering scholars of Bihar Institute of Technology, Sindri.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">CHAPTER 2 · 1957</span>
              <h3>Relocation to BIT Mesra</h3>
              <p>
                Permanently established at Birla Institute of Technology, Mesra on 1 January 1957, beginning an unbroken institutional tradition.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">CHAPTER 3 · 2000+</span>
              <h3>3 Jharkhand CTC</h3>
              <p>
                Redesignated under Jharkhand state formation, comprising three composite technical platoons under NCC Directorate Bihar &amp; Jharkhand.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/history" className="btn btn-navy" style={{ padding: '0.85rem 2rem' }}>
              <span>Click for More: Full Legacy &amp; History Page</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COMPOSITE TECHNICAL PLATOONS
          ========================================================================= */}
      <section className="page-section page-section-alt" id="platoons">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">TECHNICAL SPECIALIZATION</span>
            <h2 className="section-main-title">The Three Technical Arms</h2>
            <p className="section-desc">
              Integrating engineering scholarship with military technical arms at BIT Mesra.
            </p>
          </div>

          <div className="grid-3">
            <div className="inst-card">
              <span className="badge-tag badge-red">PLATOON 1: ENGINEERS</span>
              <h3>Combat Engineers</h3>
              <p>
                Field fortification construction, combat obstacle laying and clearing, mine awareness, water obstacle crossing, and military bridging.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">PLATOON 2: SIGNALS</span>
              <h3>Tactical Signals</h3>
              <p>
                Tactical field communications, VHF/UHF wireless radio operations, line laying, military voice procedures, and cryptographic fundamentals.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">PLATOON 3: EME</span>
              <h3>Electrical &amp; Mechanical</h3>
              <p>
                Vehicle recovery protocols, weapons overhaul and maintenance, electrical instruments servicing, and workshop field logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TRAINING & SYLLABUS CONTINUUM
          ========================================================================= */}
      <section className="page-section" id="training">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">CADET SYLLABUS</span>
            <h2 className="section-main-title">Military Training Curriculum</h2>
            <p className="section-desc">
              Approved syllabus governed by DG NCC, covering both common defense subjects and specialized tactical modules.
            </p>
          </div>

          <div className="grid-2">
            <div className="inst-card">
              <span className="badge-tag badge-red">COMMON DEFENCE SUBJECTS</span>
              <h3>Drill, Weapon Training &amp; Civil Defence</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
                <li><strong>Drill (Foot &amp; Arms):</strong> Squad drill, saluting, guard mounting, and ceremonial march-past.</li>
                <li><strong>Weapon Training:</strong> Safe handling, stripping, assembling, sight picture, and live firing with .22" Deluxe Rifle &amp; 7.62mm SLR.</li>
                <li><strong>Disaster Management:</strong> First aid, triage, fire-fighting, flood rescue, and civil defense coordination.</li>
              </ul>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">SPECIALISED TACTICAL MODULES</span>
              <h3>Map Reading &amp; Field Craft</h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
                <li><strong>Map Reading:</strong> Prismatic compass, Service Protractor, 6-figure grid references, and night navigation.</li>
                <li><strong>Field Craft / Battle Craft:</strong> Judging distance, ground description, section formations, and field signals.</li>
                <li><strong>Camp Deployments:</strong> 10-day Combined Annual Training Camp (CATC), Thal Sainik Camp (TSC), and Republic Day Camp (RDC).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. UNIT ACHIEVEMENTS & EXAM PASSES
          ========================================================================= */}
      <section className="page-section page-section-alt" id="achievements">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">EXAMINATION RECORDS</span>
            <h2 className="section-main-title">Published Certificate Results</h2>
            <p className="section-desc">
              Verified outcomes from BIT Mesra annual outreach reports and NCC Directorate Bihar &amp; Jharkhand records.
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            <div className="inst-card" style={{ borderLeft: '4px solid var(--ncc-gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge-tag badge-gold">2025 CYCLE</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--ncc-navy)', lineHeight: 1 }}>
                  60
                </span>
              </div>
              <h3>'B' Certificate Passes</h3>
              <p>60 cadets passed the official NCC 'B' Certificate examination under Directorate Bihar &amp; Jharkhand.</p>
            </div>

            <div className="inst-card" style={{ borderLeft: '4px solid var(--ncc-red)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge-tag badge-red">2024 CYCLE</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--ncc-red)', lineHeight: 1 }}>
                  50
                </span>
              </div>
              <h3>'C' Certificate Passes</h3>
              <p>50 cadets earned the highest 'C' Certificate qualification, unlocking direct SSB interview commission routes.</p>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            borderLeft: '4px solid var(--ncc-navy)',
            fontSize: '0.875rem'
          }}>
            <strong>NCC Special Entry Privilege:</strong> Cadets holding an NCC 'C' Certificate with 'A' or 'B' grade are exempt from the UPSC CDS written examination for the Indian Army, Indian Navy, and Indian Air Force. They receive a direct call letter for the 5-day SSB interview.
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. DOCUMENTED ACTIVITIES (WITH ROUTE TO FULL ACTIVITIES PAGE)
          ========================================================================= */}
      <section className="page-section" id="activities">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">COMMUNITY &amp; CAMPS</span>
            <h2 className="section-main-title">Documented Activities</h2>
            <p className="section-desc">
              Highlights of ceremonial parades, environmental campaigns, and camp training conducted by the unit.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.25rem' }}>
            <div className="inst-card">
              <span className="badge-tag badge-red">15 AUGUST 2024</span>
              <h3>Independence Day Parade</h3>
              <p>
                125 cadets presented the Guard of Honour and marched in ceremonial formation before institute authorities.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">31 AUGUST 2024</span>
              <h3>Puneet Sagar Abhiyan</h3>
              <p>
                87 cadets led a river cleanup initiative along the Subarnarekha River collecting plastic waste and educating citizens.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">DECEMBER 2024</span>
              <h3>CATC Training Camp</h3>
              <p>
                10-day military camp encompassing .22 live rifle firing, map reading, obstacle training, and drill.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/activities" className="btn btn-navy" style={{ padding: '0.85rem 2rem' }}>
              <span>Click for More: View All Documented Activities</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CADET PHOTO GALLERY (WITH ROUTE TO FULL GALLERY PAGE)
          ========================================================================= */}
      <section className="page-section page-section-alt" id="gallery">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">PHOTO ARCHIVE</span>
            <h2 className="section-main-title">Cadet Photo Highlights</h2>
            <p className="section-desc">
              Archival moments from parades, inspections, and crest heraldry on the BIT Mesra campus grounds.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.25rem' }}>
            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '210px', background: '#0E0A30', overflow: 'hidden' }}>
                <img 
                  src="https://bitmesra.ac.in/UploadedDocuments/user_Pratyush_869/Gallery/_large_1882022223555_IMG_2025b6c4dfe1-8be4-45c8-bc0d-a11fcd4f27bc.jpg" 
                  alt="Archival Cadet Formation" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/logo.jpeg'; }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span className="badge-tag badge-red">PARADE GROUND</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Ceremonial Formations</h3>
                <p style={{ fontSize: '0.8125rem', margin: 0 }}>Senior cadets lined for inspection during annual ceremonies at BIT Mesra.</p>
              </div>
            </div>

            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '210px', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                <img 
                  src="/logo.jpeg" 
                  alt="Official NCC Crest" 
                  style={{ maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span className="badge-tag badge-navy">UNIT HERALDRY</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>The Crest of Unity</h3>
                <p style={{ fontSize: '0.8125rem', margin: 0 }}>Tri-service shield with the 17-lotus wreath and 'एकता और अनुशासन' motto.</p>
              </div>
            </div>

            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '210px', background: 'linear-gradient(135deg, var(--ncc-navy-deep), #2A2175)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FFF', textAlign: 'center', padding: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🇮🇳</span>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>Guard of Honour</strong>
                <small style={{ color: 'var(--ncc-gold)', fontSize: '0.75rem', marginTop: '4px' }}>Independence Day &amp; Republic Day</small>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span className="badge-tag badge-sky">NATIONAL DAYS</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>State Honors</h3>
                <p style={{ fontSize: '0.8125rem', margin: 0 }}>Guard of honour presented to the Vice Chancellor and defense dignitaries.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-navy" style={{ padding: '0.85rem 2rem' }}>
              <span>Click for More: View Full Photo Gallery</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. OFFICIAL NOTICES STRIP (WITH ROUTE TO NOTICES PAGE)
          ========================================================================= */}
      <section className="page-section" id="notices">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="section-kicker">ORDERS &amp; CIRCULARS</span>
            <h2 className="section-main-title">Official Notice Board</h2>
            <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
              Access published nominal roll deadlines for 'B' &amp; 'C' Certificate examinations, enrolment notifications for Year 1 undergraduate students, and camp movement orders issued by the unit office.
            </p>
            <Link to="/notices" className="btn btn-gold">
              Open Full Notices &amp; Orders Page →
            </Link>
          </div>

          <div className="inst-card" style={{ borderLeft: '4px solid var(--ncc-gold)' }}>
            <span className="badge-tag badge-gold">LATEST ANNOUNCEMENT</span>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Enrolment Schedule — Academic Batch 2025–26</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Fresh Senior Division (SD) and Senior Wing (SW) cadet enrolment trials open to 1st-year students of BIT Mesra at the Student Activity Centre (SAC).
            </p>
            <Link to="/notices" style={{ color: 'var(--ncc-navy)', fontWeight: 700, fontSize: '0.8125rem' }}>
              Read Circular Details →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CADET ENROLMENT GUIDELINES
          ========================================================================= */}
      <section className="page-section page-section-alt" id="join">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">ADMISSION GUIDELINES</span>
            <h2 className="section-main-title">How to Join NCC at BIT Mesra</h2>
            <p className="section-desc">
              Three-step selection process for 1st-year undergraduate students of BIT Mesra.
            </p>
          </div>

          <div className="grid-3">
            <div className="inst-card">
              <span className="badge-tag badge-red">STEP 01</span>
              <h3>Physical Fitness Test</h3>
              <p>
                1.6 km run within 6 mins 30 secs, minimum 20 pushups, 25 sit-ups, and pull-up assessment at the Institute Sports Ground.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">STEP 02</span>
              <h3>Aptitude &amp; Interview</h3>
              <p>
                General defense knowledge test followed by a personal interview assessing leadership inclination and discipline with the ANO.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">STEP 03</span>
              <h3>Document Verification</h3>
              <p>
                Submission of Form I (Enrolment Form), medical fitness certificate, Class 10/12 marksheets, fee receipt, and Aadhaar card at SAC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
          ========================================================================= */}
      <section className="page-section" id="faq">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">QUICK ANSWERS</span>
            <h2 className="section-main-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Answers regarding cadet enrolment, drill timings, uniforms, and defense benefits.
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
                  <span style={{ fontSize: '1.25rem', color: 'var(--ncc-red)', fontWeight: 700, marginLeft: '1rem' }}>
                    {openFaq === idx ? '−' : '+'}
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
