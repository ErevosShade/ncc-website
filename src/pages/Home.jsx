import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const activitiesData = [
  {
    id: 1,
    title: "78th Independence Day Ceremonial Parade",
    date: "15 August 2024",
    location: "Main Parade Ground, BIT Mesra",
    category: "national",
    categoryLabel: "National Occasion",
    strength: "125 Cadets",
    description: "Senior Division and Senior Wing cadets presented the ceremonial Guard of Honour to the Vice Chancellor, followed by a march past and weapon drill demonstration.",
    citation: "BIT Mesra Outreach Activities Report 2024–25"
  },
  {
    id: 2,
    title: "Puneet Sagar Abhiyan Riverbank Clean-Up",
    date: "31 August 2024",
    location: "Subarnarekha River Basin, Ranchi",
    category: "service",
    categoryLabel: "Social Service & Ecology",
    strength: "87 Cadets",
    description: "Ecological action drive collecting non-biodegradable plastics from riverbanks, raising public awareness on keeping water bodies free of plastic waste.",
    citation: "BIT Mesra Outreach Activities Report 2024–25"
  },
  {
    id: 3,
    title: "Kargil Vijay Diwas Marathon & Plantation",
    date: "26 July 2024",
    location: "BIT Mesra Campus Circuit",
    category: "national",
    categoryLabel: "National Memorial",
    strength: "All Cadets",
    description: "Organised a 3 km unit run honoring the heroes of Operation Vijay (1999), concluded by a memorial tree plantation drive planting over 100 saplings.",
    citation: "BIT Mesra Outreach Activities Report 2024–25"
  },
  {
    id: 4,
    title: "Swachh Bharat Abhiyan Cleanliness Drive",
    date: "02 October 2024",
    location: "Hostel & Academic Grounds, BIT Mesra",
    category: "service",
    categoryLabel: "Community Service",
    strength: "54 Cadets",
    description: "Gandhi Jayanti institutional cleanliness operation targeting high-density student areas and waste segregation awareness in neighboring rural hamlets.",
    citation: "BIT Mesra Outreach Activities Report 2024–25"
  },
  {
    id: 5,
    title: "NCC Raising Day Cyclothon & Cultural Program",
    date: "24 November 2024",
    location: "Ranchi Urban & Campus Corridors",
    category: "service",
    categoryLabel: "Raising Day",
    strength: "Unit Contingent",
    description: "Conducted an awareness cyclothon promoting fitness and drug-free youth lifestyle, followed by an evening cultural integration presentation.",
    citation: "NCC Directorate Bihar & Jharkhand Bulletin"
  },
  {
    id: 6,
    title: "Combined Annual Training Camp (CATC)",
    date: "December 2024",
    location: "BIT Mesra Parade & Firing Ranges",
    category: "camp",
    categoryLabel: "Camp Training",
    strength: "Full SD/SW Cadre",
    description: "Intensive 10-day military camp encompassing .22 rifle live firing, map reading exercises, tent pitching, obstacle negotiations, and inter-company sports.",
    citation: "NCC Directorate Bihar & Jharkhand Official Bulletin"
  }
];

export default function Home({ onOpenAnthem }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activityFilter, setActivityFilter] = useState('all');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredActivities = activityFilter === 'all'
    ? activitiesData
    : activitiesData.filter(act => act.category === activityFilter);

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
            <h1 className="page-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
              Discipline in Action.<br />
              <span style={{ color: 'var(--ncc-gold)' }}>Leadership for Life.</span>
            </h1>
            <p className="page-subtitle" style={{ fontSize: '1.05rem', marginBottom: '1.75rem', color: '#E2E8F0' }}>
              A tradition shaped by service, strengthened by training, and carried forward by the cadets of <strong>3 Jharkhand Composite Technical Company NCC</strong>, Birla Institute of Technology, Mesra, Ranchi.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#about" className="btn btn-saffron">
                Discover Our Unit ↓
              </a>
              <a href="#history" className="btn btn-outline" style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.4)' }}>
                Timeline of Journey ↓
              </a>
              <Link to="/history" className="btn btn-navy" style={{ background: '#1c1e69', border: '1px solid rgba(255,255,255,0.2)' }}>
                Full History Page →
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
              <span>BIHAR &amp; JHARKHAND DTE</span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(145deg, #161852, #0d0e2e)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              display: 'inline-block',
              maxWidth: '380px',
              width: '100%',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img 
                src="/ncc-logo.svg" 
                alt="National Cadet Corps Crest" 
                style={{ width: '150px', height: '150px', objectFit: 'contain', margin: '0 auto 1.25rem', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.4))' }} 
              />
              <strong style={{ display: 'block', color: '#FFF', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.03em' }}>
                UNITY AND DISCIPLINE
              </strong>
              <span className="hindi" style={{ display: 'block', color: '#ffcc00', fontSize: '1.05rem', fontWeight: 700, margin: '4px 0 14px 0' }}>
                एकता और अनुशासन
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', fontSize: '0.72rem', fontWeight: 800 }}>
                <span style={{ background: 'rgba(239,28,36,0.25)', color: '#ff8a8f', padding: '5px 2px', borderRadius: '3px', border: '1px solid rgba(239,28,36,0.5)' }}>
                  ARMY
                </span>
                <span style={{ background: 'rgba(46,48,146,0.5)', color: '#c0bcff', padding: '5px 2px', borderRadius: '3px', border: '1px solid rgba(46,48,146,0.8)' }}>
                  NAVY
                </span>
                <span style={{ background: 'rgba(0,174,239,0.25)', color: '#82dcff', padding: '5px 2px', borderRadius: '3px', border: '1px solid rgba(0,174,239,0.5)' }}>
                  AIR FORCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STATS DASHBOARD STRIP (Modeled on indiancc.mygov.in .dashboard .count_wrap)
          ========================================================================= */}
      <section className="gov-dashboard-strip" id="stats">
        <div className="container dashboard-grid">
          <div className="count-wrap">
            <span className="count-number">1956</span>
            <span className="count-title">Raised at Sindri</span>
            <span className="count-sub">5 January · historical record</span>
          </div>
          <div className="count-wrap">
            <span className="count-number">1957</span>
            <span className="count-title">Moved to Mesra</span>
            <span className="count-sub">1 January · BIT chapter</span>
          </div>
          <div className="count-wrap">
            <span className="count-number">03</span>
            <span className="count-title">Technical Platoons</span>
            <span className="count-sub">Engineers, Signals &amp; EME</span>
          </div>
          <div className="count-wrap">
            <span className="count-number">200</span>
            <span className="count-title">Cadet Strength</span>
            <span className="count-sub">Active SD &amp; SW Contingent</span>
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
          5. TRAINING SECTION (DRILL, FITNESS, FIELDCRAFT, CAMPS)
          ========================================================================= */}
      {/* =========================================================================
          5. TRAINING SECTION (DRILL, FITNESS, FIELDCRAFT, CAMPS)
          ========================================================================= */}
      <section className="page-section" id="training">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Training that Shapes More Than a Cadet</h2>
            <p className="section-desc">
              NCC training builds habits, endurance, and operational capabilities that carry beyond the parade ground and camp.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
            <div className="inst-card">
              <span className="badge-tag badge-red">DISCIPLINE</span>
              <h3>Drill &amp; Parade</h3>
              <p>Foot drill, arms drill, coordination, command words, and ceremonial guard mounting.</p>
              <span style={{ marginTop: 'auto', fontSize: '0.6875rem', fontWeight: 800, color: 'var(--ncc-red)', letterSpacing: '0.08em' }}>FOUNDATIONS</span>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">READINESS</span>
              <h3>Fitness &amp; Endurance</h3>
              <p>Physical readiness, obstacle clearing, 1.6 km runs, and physical endurance conditioning.</p>
              <span style={{ marginTop: 'auto', fontSize: '0.6875rem', fontWeight: 800, color: 'var(--ncc-navy)', letterSpacing: '0.08em' }}>PREPAREDNESS</span>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">FIELDCRAFT</span>
              <h3>Weapon &amp; Field Skills</h3>
              <p>Map reading with prismatic compass, .22 rifle marksmanship, target recognition, and camouflage.</p>
              <span style={{ marginTop: 'auto', fontSize: '0.6875rem', fontWeight: 800, color: 'var(--ncc-sky-dark)', letterSpacing: '0.08em' }}>PRACTICAL LEARNING</span>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-gold">TOGETHER</span>
              <h3>Camps &amp; Teamwork</h3>
              <p>Combined Annual Training Camps (CATC), Thal Sainik trials, peer leadership, and camaraderie.</p>
              <span style={{ marginTop: 'auto', fontSize: '0.6875rem', fontWeight: 800, color: 'var(--ncc-gold-dark)', letterSpacing: '0.08em' }}>TEAM SPIRIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ACTIVITIES & HIGHLIGHTS SECTION (WITH LIVE CATEGORY FILTER)
          ========================================================================= */}
      <section className="page-section page-section-alt" id="activities">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Documented Field Activities</h2>
            <p className="section-desc">
              Highlights from BIT Mesra and Directorate public records.
            </p>
          </div>

          {/* Activity Category Filters */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button 
              className={`btn ${activityFilter === 'all' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setActivityFilter('all')}
              type="button"
            >
              All Highlights (06)
            </button>
            <button 
              className={`btn ${activityFilter === 'service' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setActivityFilter('service')}
              type="button"
            >
              Social Service
            </button>
            <button 
              className={`btn ${activityFilter === 'national' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setActivityFilter('national')}
              type="button"
            >
              National Occasions
            </button>
            <button 
              className={`btn ${activityFilter === 'camp' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setActivityFilter('camp')}
              type="button"
            >
              Camps &amp; Drills
            </button>
          </div>

          {/* Activities Cards Grid */}
          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {filteredActivities.map(act => (
              <div key={act.id} className="inst-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className={`badge-tag ${act.category === 'national' ? 'badge-red' : act.category === 'service' ? 'badge-sky' : 'badge-navy'}`}>
                    {act.categoryLabel}
                  </span>
                  <small style={{ fontWeight: 800, color: 'var(--text-subtle)', fontSize: '0.6875rem' }}>
                    {act.strength}
                  </small>
                </div>
                <h3>{act.title}</h3>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ncc-red)', marginBottom: '0.5rem' }}>
                  {act.date} · {act.location}
                </div>
                <p>{act.description}</p>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: 'auto', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                  Record Ref: {act.citation}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/activities" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Click for More: View Dedicated Activities Page</span>
              <span aria-hidden="true">→</span>
            </Link>
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
              Certificate examinations mark an important stage in a cadet's NCC journey. Published records at BIT Mesra verify the following pass counts.
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
              <h3>'B' Certificate Passes</h3>
              <p>Documented in the Institute's 2024–25 outreach activities report under NCC Directorate Bihar &amp; Jharkhand.</p>
            </div>

            <div className="inst-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge-tag badge-red">2024 · REPORTED</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--ncc-red)', lineHeight: 1 }}>
                  50
                </span>
              </div>
              <h3>'C' Certificate Passes</h3>
              <p>Highest qualification in NCC, granting direct eligibility for the Indian Armed Forces SSB Special Entry Scheme.</p>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-light)',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem'
          }}>
            <strong>SSB Direct Interview Route:</strong> Cadets who pass the 'C' Certificate examination with 'A' or 'B' grade are exempt from the UPSC Combined Defence Services (CDS) written test for the Army (OTA Chennai), Navy, and Air Force.
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CADET PHOTO GALLERY (WITH ROUTE TO FULL GALLERY PAGE)
          ========================================================================= */}
      <section className="page-section page-section-alt" id="gallery">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Archival Moments &amp; Formations</h2>
            <p className="section-desc">
              Parades, camps, service drives, and shared milestones tell the story better than words alone.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '220px', background: '#0E0A30', overflow: 'hidden' }}>
                <img 
                  src="https://bitmesra.ac.in/UploadedDocuments/user_Pratyush_869/Gallery/_large_1882022223555_IMG_2025b6c4dfe1-8be4-45c8-bc0d-a11fcd4f27bc.jpg" 
                  alt="Archival Cadet Formation" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/ncc-logo.svg'; }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span className="badge-tag badge-red">PARADE GROUND</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Ceremonial Formations</h3>
                <p style={{ fontSize: '0.8125rem', margin: 0 }}>Senior cadets lined for inspection during annual ceremonies at BIT Mesra.</p>
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
                <p style={{ fontSize: '0.8125rem', margin: 0 }}>Tri-service shield with the 17-lotus wreath and 'एकता और अनुशासन' motto.</p>
              </div>
            </div>

            <div className="inst-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '220px', background: 'linear-gradient(135deg, var(--ncc-navy-deep), #2A2175)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FFF', textAlign: 'center', padding: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🇮🇳</span>
                <strong style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.15rem' }}>Guard of Honour</strong>
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
            <Link to="/gallery" className="btn btn-navy" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Click for More: View Full Photo Gallery</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. HOW TO JOIN NCC SECTION (3 STEPS)
          ========================================================================= */}
      <section className="page-section" id="join">
        <div className="container">
          <div className="section-heading-block">
            <h2 className="section-main-title">Enrolment Process &amp; Eligibility</h2>
            <p className="section-desc">
              NCC offers an opportunity to grow through disciplined military training, teamwork, responsibility, and service.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            <div className="inst-card">
              <span className="badge-tag badge-red">STEP 01</span>
              <h3>Check Current Notices</h3>
              <p>Look for official enrolment circulars and schedules released by the unit at the start of the academic year.</p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">STEP 02</span>
              <h3>Confirm Eligibility &amp; PFT</h3>
              <p>Be a regular 1st-year student at BIT Mesra meeting medical standards and passing physical trials (1.6 km run, push-ups).</p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">STEP 03</span>
              <h3>Contact the Unit Office</h3>
              <p>Submit Form I, fee receipt, and identity documents to the Associate NCC Officer (ANO) at SAC.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/notices" className="btn btn-saffron" style={{ padding: '0.85rem 2.25rem' }}>
              Check Enrolment Notices →
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
              Essential queries regarding cadet enrolment, drill timings, uniform issue, and defense benefits.
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
