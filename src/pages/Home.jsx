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
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #1A145A 0%, #0E0A30 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              color: '#FFF',
              border: '2px solid var(--ncc-gold)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}>
              <span style={{ fontSize: '5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,200,11,0.6)', lineHeight: 0.9, display: 'block' }}>
                03
              </span>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#FFF', display: 'block', margin: '1rem 0 0.5rem 0' }}>
                JHARKHAND COMPOSITE TECHNICAL COMPANY
              </strong>
              <p style={{ fontSize: '0.8125rem', color: '#CBD5E1', margin: 0, lineHeight: 1.6 }}>
                Birla Institute of Technology, Mesra · Under NCC Directorate Bihar &amp; Jharkhand
              </p>
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--ncc-gold)', fontSize: '1.25rem' }}>✦</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--ncc-gold)' }}>“Unity and Discipline”</strong>
                  <small style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', color: '#A0B2CD' }}>THE NCC MOTTO</small>
                </div>
              </div>
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

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '220px', background: 'var(--ncc-navy-darkest)', overflow: 'hidden' }}>
                <img 
                  src="/home.jpg" 
                  alt="3 Jharkhand CTC NCC Cadet Contingent" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span className="badge-tag badge-navy">UNIT CONTINGENT</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Company Formation</h3>
                <p style={{ fontSize: '0.8125rem', margin: 0, color: 'var(--text-muted)' }}>The cadet contingent assembled with officers and the unit signboard at BIT Mesra.</p>
              </div>
            </div>

            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '220px', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                <img 
                  src="/ncc-logo.svg" 
                  alt="Official NCC Crest" 
                  style={{ maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span className="badge-tag badge-navy">UNIT HERALDRY</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>The Crest of Unity</h3>
                <p style={{ fontSize: '0.8125rem', margin: 0, color: 'var(--text-muted)' }}>Tri-service shield with the 17-lotus wreath and 'एकता और अनुशासन' motto.</p>
              </div>
            </div>

            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '220px', background: 'var(--ncc-navy-darkest)', overflow: 'hidden' }}>
                <img 
                  src="https://bitmesra.ac.in/UploadedDocuments/user_Pratyush_869/Gallery/_large_1882022223555_IMG_2025b6c4dfe1-8be4-45c8-bc0d-a11fcd4f27bc.jpg" 
                  alt="Ceremonial Guard of Honour" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/home.jpg'; }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span className="badge-tag badge-red">CEREMONIAL PARADE</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>State Honors</h3>
                <p style={{ fontSize: '0.8125rem', margin: 0, color: 'var(--text-muted)' }}>Guard of honour presented during Independence Day celebrations at the main ground.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Click for More: View Full Photo Gallery</span>
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
