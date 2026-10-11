import React from 'react';

export default function LegacyHistory() {
  return (
    <main>
      <section className="page-header-banner">
        <div className="container">
          <span className="page-eyebrow">CHRONICLES &amp; HERITAGE SINCE 1956</span>
          <h1 className="page-title">Legacy &amp; History</h1>
          <p className="page-subtitle">
            The historic lineage of 3 Jharkhand Composite Technical Company NCC — tracing over 68 years of military leadership, technical training, and institutional discipline at Birla Institute of Technology, Mesra.
          </p>
        </div>
      </section>

      {/* Historical Chronology Table Section */}
      <section className="page-section">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">CHRONOLOGICAL EVOLUTION</span>
            <h2 className="section-main-title">Six Chapters of Transformation</h2>
            <p className="section-desc">
              Compiled from official establishment orders and archival “Brief History” records preserved at BIT Mesra and NCC Directorate Bihar &amp; Jharkhand.
            </p>
          </div>

          <div className="data-table-wrapper" style={{ marginBottom: '3rem' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '130px' }}>Era / Date</th>
                  <th style={{ width: '250px' }}>Official Designation</th>
                  <th style={{ width: '120px' }}>Cadet Strength</th>
                  <th>Formation Narrative &amp; Reorganisation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>05 Jan 1956</strong></td>
                  <td>6 Bihar EME Section NCC</td>
                  <td>60 Cadets</td>
                  <td>Raised at Sindri, Bihar, to provide technical NCC training to the engineering students of Bihar Institute of Technology, Sindri.</td>
                </tr>
                <tr>
                  <td><strong>01 Jan 1957</strong></td>
                  <td>6 Bihar EME Section NCC (Relocated)</td>
                  <td>60 Cadets</td>
                  <td>Relocated from Sindri to Mesra, Ranchi, establishing its permanent military depot on the campus of the Birla Institute of Technology.</td>
                </tr>
                <tr>
                  <td><strong>July 1964</strong></td>
                  <td>1 Bihar EME Unit, Mesra</td>
                  <td>120 Cadets</td>
                  <td>Expanded and reorganized to accommodate growing student strength, receiving the title of 1 Bihar EME Unit, Mesra (Ranchi).</td>
                </tr>
                <tr>
                  <td><strong>Nov 1967</strong></td>
                  <td>3 Bihar Mixed Regiment NCC</td>
                  <td>600 Cadets</td>
                  <td>Amalgamation of Engineers, Signals, and EME technical companies into a full Mixed Regiment commanded by a Lt Colonel.</td>
                </tr>
                <tr>
                  <td><strong>1977</strong></td>
                  <td>3 Bihar Composite Technical Company</td>
                  <td>200 Cadets</td>
                  <td>Rationalized under national policy for NCC technical units; companies reorganized into platoons with an authorized cadre of 200 cadets.</td>
                </tr>
                <tr>
                  <td><strong>2000+</strong></td>
                  <td>3 Jharkhand Composite Technical Company</td>
                  <td>200 Cadets</td>
                  <td>Redesignated following the creation of the State of Jharkhand. Affiliated to NCC Directorate Bihar &amp; Jharkhand, Patna.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Heraldic Crest & Tri-Service Symbolism */}
      <section className="page-section page-section-alt">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">HERALDRY &amp; IDENTITY</span>
            <h2 className="section-main-title">The National Cadet Corps Crest</h2>
            <p className="section-desc">
              Introduced nationally in 1954, the NCC Crest carries specific heraldic symbols representing joint-service commitment and nationhood.
            </p>
          </div>

          <div className="grid-2">
            <div className="inst-card">
              <span className="badge-tag badge-gold">TRI-SERVICE EMBLEM</span>
              <h3>The Tri-Colour Shield</h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                <li><strong style={{ color: 'var(--ncc-red)' }}>Red Vertical Band:</strong> Represents the Indian Army — supreme land combat readiness and discipline.</li>
                <li><strong style={{ color: 'var(--ncc-navy)' }}>Dark Blue Vertical Band:</strong> Represents the Indian Navy — maritime heritage, ocean navigation, and coastal vigil.</li>
                <li><strong style={{ color: 'var(--ncc-sky-dark)' }}>Light Blue Vertical Band:</strong> Represents the Indian Air Force — aerospace sovereignty, airmanship, and flight mastery.</li>
              </ul>
              <p style={{ marginTop: '1rem', fontSize: '0.8125rem' }}>
                The three equal bands reflect the jointness and seamless camaraderie expected among India’s military leadership.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-gold">SACRED SYMBOLS</span>
              <h3>The 17-Lotus Wreath &amp; Motto</h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                <li><strong>17 Lotus Flowers:</strong> Encircle the shield, representing the 17 State Directorates governing NCC units across all states and Union Territories.</li>
                <li><strong>Two Golden Dots:</strong> Flank the central letters, commemorating the two Officers Training Academies (OTA) at Kamptee and Gwalior.</li>
                <li><strong>Motto Scroll:</strong> Inscribed with <em>"एकता और अनुशासन"</em> (Unity and Discipline), adopted officially on 23 December 1957.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Composite Technical Arms */}
      <section className="page-section">
        <div className="container">
          <div className="section-heading-block">
            <span className="section-kicker">TECHNICAL SPECIALIZATION</span>
            <h2 className="section-main-title">The Three Technical Platoons</h2>
            <p className="section-desc">
              The composite technical character of 3 Jharkhand CTC provides engineering scholars with practical training aligned with military technical arms.
            </p>
          </div>

          <div className="grid-3">
            <div className="inst-card">
              <span className="badge-tag badge-red">CORPS OF ENGINEERS</span>
              <h3>Combat Engineers Platoon</h3>
              <p>
                Specialises in field defenses, trench systems, combat obstacle laying and clearing, mine awareness, water obstacle crossing, and hasty military bridging.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-navy">CORPS OF SIGNALS</span>
              <h3>Military Signals Platoon</h3>
              <p>
                Specialises in tactical wireless communications, VHF/UHF radio sets, line communication laying, voice procedures, code-word protocols, and cyber communication fundamentals.
              </p>
            </div>

            <div className="inst-card">
              <span className="badge-tag badge-sky">CORPS OF EME</span>
              <h3>Electrical &amp; Mechanical Platoon</h3>
              <p>
                Specialises in vehicle recovery procedures, small-arms maintenance and inspection, electrical instrument servicing, and equipment preservation under field conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
