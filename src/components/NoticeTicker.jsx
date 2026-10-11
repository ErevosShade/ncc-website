import React from 'react';

export default function NoticeTicker() {
  return (
    <div className="notice-strip" aria-label="Official Unit Notice Board">
      <div className="container notice-inner">
        <span className="notice-tag">NOTICE BOARD</span>
        <div style={{ fontSize: '0.8125rem', color: '#475569', fontWeight: 500, paddingLeft: '0.5rem' }}>
          <span>No notices for today.</span>
        </div>
      </div>
    </div>
  );
}
