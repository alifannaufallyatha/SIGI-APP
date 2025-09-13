"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  const backButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    backgroundColor: '#52734d',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '20px',
    boxShadow: '0 2px 8px rgba(82, 115, 77, 0.3)',
    transition: 'all 0.2s ease',
    zIndex: 1000,
  };

  return (
    <button 
      style={backButtonStyle}
      onClick={() => router.back()}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#2d5016';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(45, 80, 22, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#52734d';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(82, 115, 77, 0.3)';
      }}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translateX(-1px)' }}
      >
        <path 
          d="M15 18L9 12L15 6" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackButton;
