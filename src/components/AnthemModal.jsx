import React from 'react';

export default function AnthemModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(14, 10, 48, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          maxWidth: '620px',
          width: '100%',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          border: '1.5px solid var(--ncc-gold)'
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
            <strong style={{ color: 'var(--ncc-gold)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
              Song of NCC — हम सब भारतीय हैं
            </strong>
            <small style={{ display: 'block', color: '#CBD5E1', fontSize: '0.75rem', marginTop: '2px' }}>
              Adopted October 1982 · Written by Sudarshan Faakir
            </small>
          </div>
          <button 
            onClick={onClose} 
            style={{ color: '#FFF', fontSize: '1.25rem', lineHeight: 1, padding: '0.25rem' }}
            aria-label="Close Anthem Modal"
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '1.5rem', maxHeight: '70vh', overflowY: 'auto' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <audio 
              src="/audio/song.mpeg" 
              controls 
              style={{ width: '100%', height: '40px', borderRadius: '4px' }}
            />
          </div>

          <p className="hindi" style={{
            fontSize: '1.05rem',
            lineHeight: 2.1,
            color: 'var(--text-main)',
            margin: '0 0 1.25rem 0'
          }}>
            हम सब भारतीय हैं, हम सब भारतीय हैं।<br />
            अपनी मंज़िल एक है, हा-हा-हा एक है, हो-हो-हो एक है।<br />
            हम सब भारतीय हैं।<br /><br />
            कश्मीर की धरती रानी है, सरताज हिमालय है,<br />
            सदियों से हमने इसको अपने खून से सींचा है।<br />
            देश की रक्षा की खातिर हम शमशीर उठा लेंगे,<br />
            हम शमशीर उठा लेंगे।<br /><br />
            बिखरे-बिखरे तारे हैं हम लेकिन झिलमिल एक हैं,<br />
            हा-हा-हा एक है, हो-हो-हो एक है, हम सब भारतीय हैं।<br />
            मंदिर, मस्जिद, गुरुद्वारों में बाँट दिया भगवान को,<br />
            रंग-रूप की भेद न जाने, एक ही अपनी शान हो।<br />
            एक ही अपना नाम है, हम सब भारतीय हैं!
          </p>

          <div style={{
            background: 'var(--bg-subtle)',
            padding: '1rem',
            borderRadius: 'var(--radius-sm)',
            borderLeft: '3px solid var(--ncc-gold)',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)'
          }}>
            <strong>Significance:</strong> The NCC Song celebrates national integration, universal brotherhood, and unwavering readiness to serve and defend the unity of the Indian Republic.
          </div>
        </div>
      </div>
    </div>
  );
}
