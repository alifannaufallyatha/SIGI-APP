"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import BackButton from '../../components/layout/BackButton';

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  padding: '1rem',
  backgroundColor: '#ffffff',
  position: 'relative',
};

const topLogoContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem 0 1.5rem 0',
  cursor: 'pointer',
};

const logoStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  transition: 'transform 0.2s ease',
};

const contentContainerStyle: React.CSSProperties = {
  position: 'relative',
  paddingTop: '3.5rem',
};

const backButtonContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 10,
};

const titleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#2d5016',
  textAlign: 'center',
  margin: '0 0 2rem 0',
};

const doctorCardStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '380px',
  margin: '2rem auto',
  padding: '2rem 1.5rem',
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
  border: '1px solid #e6f4ea',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  color: 'inherit',
};

const profileCircleStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#52734d',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
  color: 'white',
  border: '3px solid #b7e4c7',
  flexShrink: 0,
};

const doctorInfoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  textAlign: 'center',
};

const doctorTextStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  width: '100%',
};

const doctorNameStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#2d5016',
  margin: '0',
  textAlign: 'center',
};

const doctorTitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#52734d',
  margin: '0',
  textAlign: 'center',
  fontWeight: '500',
};

const Konsultasi: React.FC = () => {
  const router = useRouter();
  
  const handleCardClick = () => {
    const phoneNumber = '6282284324072';
    const message = 'Halo, saya ingin konsultasi kesehatan mental melalui aplikasi SIGI.';
    
    // Try multiple WhatsApp URL formats for better compatibility
    const whatsappUrls = [
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    ];
    
    // Try wa.me first (most reliable)
    try {
      window.open(whatsappUrls[0], '_blank');
    } catch (error) {
      // Fallback: copy number and show alert
      navigator.clipboard.writeText('+62 822-8432-4072').then(() => {
        alert('Nomor WhatsApp telah disalin: +62 822-8432-4072\nSilakan buka WhatsApp dan tempel nomor tersebut.');
      }).catch(() => {
        alert('Hubungi via WhatsApp: +62 822-8432-4072');
      });
    }
  };

  return (
    <div style={containerStyle}>
      <div 
        style={topLogoContainerStyle}
        onClick={() => router.push('/')}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('svg')!.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('svg')!.style.transform = 'scale(1)';
        }}
      >
        <svg style={logoStyle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="45" r="25" fill="#52734d" opacity="0.1"/>
          <path d="M35 35 Q50 25 65 35 Q60 45 50 50 Q40 45 35 35 Z" fill="#52734d"/>
          <circle cx="42" cy="38" r="2" fill="white"/>
          <circle cx="58" cy="38" r="2" fill="white"/>
          <path d="M45 42 Q50 45 55 42" stroke="white" strokeWidth="1.5" fill="none"/>
          <ellipse cx="50" cy="75" rx="15" ry="20" fill="#52734d" opacity="0.3"/>
          <circle cx="50" cy="68" r="3" fill="#e74c3c"/>
          <path d="M47 68 Q50 65 53 68" stroke="white" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      
      <div style={contentContainerStyle}>
        <div style={backButtonContainerStyle}>
          <BackButton />
        </div>
        <h1 style={titleStyle}>Konsultasi</h1>
      <div 
        style={doctorCardStyle}
        onClick={handleCardClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)';
        }}
      >
        <div style={doctorInfoStyle}>
          <div style={profileCircleStyle}>
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" 
                fill="white"
              />
              <path 
                d="M8 8C8 6.89543 8.89543 6 10 6H14C15.1046 6 16 6.89543 16 8V10C16 10.5523 15.5523 11 15 11H9C8.44772 11 8 10.5523 8 10V8Z" 
                fill="white"
              />
              <path 
                d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12V20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20V12Z" 
                fill="white"
              />
              <circle cx="10" cy="16" r="1" fill="#52734d"/>
              <circle cx="14" cy="16" r="1" fill="#52734d"/>
              <rect x="11" y="18" width="2" height="3" rx="1" fill="#52734d"/>
            </svg>
          </div>
          
          <div style={doctorTextStyle}>
            <h3 style={doctorNameStyle}>Dr. Ahmad Santoso</h3>
            <p style={doctorTitleStyle}>Spesialis Kesehatan Jiwa</p>
            
            <div style={{
              marginTop: '0.8rem',
              padding: '0.7rem 1rem',
              backgroundColor: '#e6f4ea',
              borderRadius: '8px',
              border: '1px solid #b7e4c7',
              width: '100%',
              maxWidth: '280px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.8rem',
                color: '#2d5016'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.1rem' }}>📱</span>
                  <span style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    letterSpacing: '0.3px'
                  }}>
                    +62 822-8432-4072
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText('+62 822-8432-4072').then(() => {
                      alert('Nomor WhatsApp telah disalin!');
                    }).catch(() => {
                      alert('Gagal menyalin nomor');
                    });
                  }}
                  style={{
                    padding: '0.3rem 0.6rem',
                    backgroundColor: '#52734d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    minWidth: '50px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2d5016';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#52734d';
                  }}
                >
                  Salin
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          width: '100%',
          padding: '0.8rem',
          backgroundColor: '#f0f8f0',
          borderRadius: '8px',
          textAlign: 'center',
          border: '1px solid #d4e8d4'
        }}>
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#2d5016', 
            margin: '0',
            fontWeight: '500'
          }}>
            💬 Klik untuk konsultasi via WhatsApp
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Konsultasi;
