import React from 'react';
import LogoutButton from '../auth/LogoutButton';

const Header: React.FC = () => (
  <header style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    background: '#f5f5f5',
    borderBottom: '1px solid #eee'
  }}>
    <h1 style={{margin: 0}}>Aplikasi Kesehatan</h1>
    <LogoutButton />
  </header>
);

export default Header;
