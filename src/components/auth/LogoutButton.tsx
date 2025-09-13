"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProfileButton: React.FC = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userInitials, setUserInitials] = useState('U');
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      const initials = user.name
        .split(' ')
        .map((name: string) => name.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
      setUserInitials(initials);
      setUserName(user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    router.push('/login');
  };

  const profileStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const avatarStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#52734d',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: '2px solid #b7e4c7',
    transition: 'all 0.2s',
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '60px',
    right: '0',
    backgroundColor: 'white',
    border: '2px solid #b7e4c7',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(45, 80, 22, 0.15)',
    minWidth: '200px',
    zIndex: 1000,
    display: isDropdownOpen ? 'block' : 'none',
  };

  const dropdownItemStyle: React.CSSProperties = {
    padding: '12px 16px',
    borderBottom: '1px solid #e6f4ea',
    fontSize: '14px',
  };

  const logoutButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '14px',
    textAlign: 'left',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={profileStyle}>
      <div 
        style={avatarStyle}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d5016'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#52734d'}
      >
        {userInitials}
      </div>
      
      <div style={dropdownStyle}>
        <div style={dropdownItemStyle}>
          <strong>{userName}</strong>
        </div>
        <button 
          style={logoutButtonStyle}
          onClick={handleLogout}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileButton;
