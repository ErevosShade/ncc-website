import React from 'react';

export default function NoticeTicker() {
  return (
    <div className="notice-strip" aria-label="Official Unit Notice Board">
      <div className="container notice-inner">
        <span className="notice-tag">NOTICE BOARD</span>
        <div className="notice-marquee">
          <div className="notice-content">
            <span>Enrolment Notice 2025–26: Fresh Senior Division (SD) &amp; Senior Wing (SW) cadet enrolment open for eligible 1st-year students of BIT Mesra.</span>
            <span style={{ marginInline: '1rem', color: 'var(--ncc-red)' }}>•</span>
            <span>Annual Training Camp (ATC / CATC) roster announced under NCC Directorate Bihar &amp; Jharkhand.</span>
            <span style={{ marginInline: '1rem', color: 'var(--ncc-red)' }}>•</span>
            <span>'B' &amp; 'C' Certificate Examination forms: Confirm nominal roll submission with Associate NCC Officer (ANO).</span>
            <span style={{ marginInline: '1rem', color: 'var(--ncc-red)' }}>•</span>
            <span>Puneet Sagar Abhiyan &amp; Swachh Bharat cleanliness drives scheduled at Subarnarekha River catchment.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
