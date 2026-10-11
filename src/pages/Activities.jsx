import React, { useState } from 'react';

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

export default function Activities() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? activitiesData 
    : activitiesData.filter(item => item.category === filter);

  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Unit Activities Archive</h1>
          <p className="page-subtitle">
            Documented public outreach records, ceremonial parades, environmental preservation drives, and training deployments conducted by 3 Jharkhand CTC NCC.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          {/* Filter Bar */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button 
              className={`btn ${filter === 'all' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setFilter('all')}
              type="button"
            >
              All Records ({activitiesData.length})
            </button>
            <button 
              className={`btn ${filter === 'national' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setFilter('national')}
              type="button"
            >
              National Occasions
            </button>
            <button 
              className={`btn ${filter === 'service' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setFilter('service')}
              type="button"
            >
              Social Service (SSCD)
            </button>
            <button 
              className={`btn ${filter === 'camp' ? 'btn-navy' : 'btn-outline'}`}
              onClick={() => setFilter('camp')}
              type="button"
            >
              Camps &amp; Drills
            </button>
          </div>

          {/* Activity Cards Grid */}
          <div className="grid-3">
            {filtered.map(act => (
              <div key={act.id} className="inst-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className={`badge-tag ${act.category === 'national' ? 'badge-red' : act.category === 'service' ? 'badge-sky' : 'badge-navy'}`}>
                    {act.categoryLabel}
                  </span>
                  <small style={{ fontWeight: 700, color: 'var(--text-subtle)', fontSize: '0.6875rem' }}>
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
        </div>
      </section>
    </main>
  );
}
