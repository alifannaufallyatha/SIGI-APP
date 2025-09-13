import React from 'react';

const Footer: React.FC = () => (
  <footer style={{
    textAlign: 'center',
    padding: '1rem',
    background: '#f5f5f5',
    borderTop: '1px solid #eee',
    fontSize: 12
  }}>
    &copy; {new Date().getFullYear()} Aplikasi Kesehatan
  </footer>
);

export default Footer;
