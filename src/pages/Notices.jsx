import React, { useState } from 'react';

const officialNotices = [
  {
    id: 'NOT-2025-01',
    date: '10 October 2025',
    title: 'Senior Division (SD) & Senior Wing (SW) Enrolment — Batch 2025–26',
    category: 'Enrolment',
    priority: 'High',
    issuingAuthority: 'Associate NCC Officer (ANO), 3 Jhar CTC NCC',
    summary: 'Fresh cadet enrolment is open for 1st-year regular undergraduate students of BIT Mesra. Physical fitness trials and document verification will be conducted at the Institute Sports Ground.',
    details: 'Eligibility: 1st Year UG students (B.Tech, B.Arch, B.Pharm). Physical standards: 1.6 km run, push-ups, sit-ups. Venue: Main Sports Complex, BIT Mesra. Registration forms available at Student Activity Centre (SAC).'
  },
  {
    id: 'NOT-2025-02',
    date: '28 September 2025',
    title: 'Submission of Nominal Roll for NCC ‘B’ and ‘C’ Certificate Examinations',
    category: 'Examinations',
    priority: 'Urgent',
    issuingAuthority: 'NCC Directorate Bihar & Jharkhand, Patna',
    summary: 'All eligible 2nd and 3rd-year cadets must submit their examination registration forms along with required camp attendance certificates to the Unit Office.',
    details: 'Mandatory prerequisites: 75% parade attendance and minimum one 10-day CATC/ATC for ‘B’ Certificate; two camps for ‘C’ Certificate. Late submissions will not be accepted by Group HQ.'
  },
  {
    id: 'NOT-2024-03',
    date: '15 November 2024',
    title: 'Combined Annual Training Camp (CATC) Movement Order & Briefing',
    category: 'Camps',
    priority: 'High',
    issuingAuthority: 'Commanding Officer, 3 Jhar CTC NCC',
    summary: 'Detailed reporting schedule, kit layout, and medical fitness clearance for cadets attending the upcoming 10-day CATC camp at Ranchi.',
    details: 'Required kit: Khaki uniform (2 sets), beret with hackle, DMS boots with puttees, PT shoes, mess tin, ground sheet, and personal toiletries. Reporting time: 0630 hrs at SAC.'
  },
  {
    id: 'NOT-2024-04',
    date: '25 August 2024',
    title: 'Deployment Schedule for Puneet Sagar Abhiyan Riverbank Clean-Up Drive',
    category: 'Social Service',
    priority: 'Routine',
    issuingAuthority: 'Unit Adjutant, 3 Jhar CTC NCC',
    summary: 'Mobilization instructions for cadets participating in the plastic waste elimination drive along the Subarnarekha River.',
    details: 'Cadets to assemble in unit tracksuits at 0700 hrs. Gloves, trash collection bags, and hydration support will be provided by the unit quartermaster.'
  },
  {
    id: 'NOT-2024-05',
    date: '10 August 2024',
    title: 'Ceremonial Guard of Honour Rehearsals for 78th Independence Day',
    category: 'Ceremonial',
    priority: 'High',
    issuingAuthority: 'Permanent Instructional (PI) Staff, 3 Jhar CTC NCC',
    summary: 'Daily ceremonial drill practice schedule for selected Guard of Honour and March Past platoons at the Institute Parade Ground.',
    details: 'Rehearsals daily from 0600 hrs to 0830 hrs. Full dress rehearsal scheduled on 13 August 2024.'
  }
];

export default function Notices() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNotice, setSelectedNotice] = useState(null);

  const categories = ['All', 'Enrolment', 'Examinations', 'Camps', 'Social Service', 'Ceremonial'];

  const filteredNotices = activeCategory === 'All'
    ? officialNotices
    : officialNotices.filter(n => n.category === activeCategory);

  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Unit Notices &amp; Circulars</h1>
          <p className="page-subtitle">
            Authorised announcements, examination schedules, movement orders, and recruitment circulars issued by 3 Jharkhand Composite Technical Company NCC and higher headquarters.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn ${activeCategory === cat ? 'btn-navy' : 'btn-outline'}`}
                style={{ padding: '0.45rem 1rem', fontSize: '0.8125rem' }}
                onClick={() => setActiveCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notices Register Table */}
          <div className="data-table-wrapper" style={{ marginBottom: '2.5rem' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '120px' }}>Notice Ref</th>
                  <th style={{ width: '130px' }}>Date</th>
                  <th style={{ width: '130px' }}>Category</th>
                  <th>Subject &amp; Summary</th>
                  <th style={{ width: '120px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotices.map(notice => (
                  <tr key={notice.id}>
                    <td><strong style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{notice.id}</strong></td>
                    <td style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>{notice.date}</td>
                    <td>
                      <span className={`badge-tag ${
                        notice.category === 'Examinations' ? 'badge-red' :
                        notice.category === 'Enrolment' ? 'badge-gold' :
                        notice.category === 'Camps' ? 'badge-navy' : 'badge-sky'
                      }`} style={{ margin: 0 }}>
                        {notice.category}
                      </span>
                    </td>
                    <td>
                      <strong style={{ display: 'block', color: 'var(--ncc-navy)', fontSize: '0.9375rem', marginBottom: '0.2rem' }}>
                        {notice.title}
                      </strong>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        {notice.summary}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-outline"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}
                        onClick={() => setSelectedNotice(notice)}
                        type="button"
                      >
                        View Order →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Institutional Notice Protocol Box */}
          <div style={{
            background: 'var(--bg-subtle)',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)'
          }}>
            <strong>Notice Protocol:</strong> All circulars published here are issued under the authority of the Associate NCC Officer (ANO) and Commanding Officer, 3 Jharkhand CTC NCC. In case of any disparity, orders displayed on the physical notice board at the Student Activity Centre (SAC) take operational precedence.
          </div>
        </div>
      </section>

      {/* Notice Detail Modal */}
      {selectedNotice && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(14, 10, 48, 0.8)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setSelectedNotice(null)}
        >
          <div 
            style={{
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              maxWidth: '650px',
              width: '100%',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
              border: '2px solid var(--ncc-gold)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              background: 'var(--ncc-navy-deep)',
              color: '#FFF',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span className="badge-tag badge-gold" style={{ margin: '0 0 0.35rem 0' }}>{selectedNotice.category}</span>
                <strong style={{ display: 'block', fontSize: '1.05rem', color: '#FFF' }}>{selectedNotice.title}</strong>
              </div>
              <button 
                onClick={() => setSelectedNotice(null)}
                style={{ color: '#FFF', fontSize: '1.25rem', padding: '0.25rem' }}
                aria-label="Close Notice"
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-subtle)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <span><strong>Reference:</strong> {selectedNotice.id}</span>
                <span><strong>Date:</strong> {selectedNotice.date}</span>
                <span><strong>Issuing Authority:</strong> {selectedNotice.issuingAuthority}</span>
              </div>

              <h4 style={{ fontSize: '0.9375rem', color: 'var(--ncc-navy)', marginBottom: '0.5rem' }}>Summary &amp; Context:</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {selectedNotice.summary}
              </p>

              <h4 style={{ fontSize: '0.9375rem', color: 'var(--ncc-navy)', marginBottom: '0.5rem' }}>Operational Instructions:</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', margin: 0 }}>
                {selectedNotice.details}
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => setSelectedNotice(null)}
                  className="btn btn-navy"
                  style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
