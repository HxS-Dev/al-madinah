import React from 'react';

const commonStyle = {
  fontFamily: "'Scheherazade New', serif",
  fontSize: '1.5rem', // adjust as you like
  lineHeight: 1.2,
};

export const RA = () => (
  <span style={commonStyle}>{'\uFD41'}</span>
);

export const SAW = () => (
  <span style={commonStyle}>{'\uFDFA'}</span>
);

export const TAWJ = () => ( // Tabaaraka wa-ta‘aala
  <span style={commonStyle}>{'\uFD4E'}</span>
);

export const SWT = () => ( // subḥānahū wa-taʿālā
  <span style={commonStyle}>ﷺ</span>
);
