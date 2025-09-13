"use client";
import React from 'react';
import Link from 'next/link';
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
  margin: '0 0 1rem 0',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#52734d',
  textAlign: 'center',
  margin: '0 0 2rem 0',
  fontWeight: '400',
};

const cardsContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  maxWidth: '1000px',
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '1.5rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
  border: '1px solid #e6f4ea',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const cardImageStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  borderRadius: '12px',
  backgroundColor: '#52734d',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '0.5rem',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#2d5016',
  margin: '0 0 0.5rem 0',
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#52734d',
  lineHeight: '1.5',
  margin: '0',
};

const cardReadMoreStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: '#2d5016',
  fontWeight: '600',
  marginTop: 'auto',
  alignSelf: 'flex-start',
};

const Edukasi: React.FC = () => {
  const router = useRouter();
  
  const educationCards = [
    {
      id: 'stress',
      title: 'Mengenal dan Mengatasi Stress',
      description: 'Pelajari cara mengenali tanda-tanda stress dan teknik-teknik efektif untuk mengelolanya dalam kehidupan sehari-hari.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
          <path d="M21 9V7L15 8V8.5C15 9.3 14.3 10 13.5 10S12 9.3 12 8.5V8L6 7V9C6 10 5 11 4 11S2 10 2 9V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V9C22 10 21 11 20 11S21 10 21 9Z" fill="white"/>
          <circle cx="8" cy="15" r="2" fill="white"/>
          <circle cx="16" cy="15" r="2" fill="white"/>
          <path d="M8 17V20C8 20.6 8.4 21 9 21H15C15.6 21 16 20.6 16 20V17" stroke="white" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 'depression',
      title: 'Memahami Depresi',
      description: 'Kenali gejala depresi, dampaknya terhadap kehidupan, dan kapan waktu yang tepat untuk mencari bantuan profesional.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="white"/>
          <path d="M8 8.5C8 7.7 8.7 7 9.5 7H14.5C15.3 7 16 7.7 16 8.5V22H8V8.5Z" fill="white"/>
          <circle cx="10" cy="11" r="0.5" fill="#52734d"/>
          <circle cx="14" cy="11" r="0.5" fill="#52734d"/>
          <path d="M10 14C10 14 11 13 12 13C13 13 14 14 14 14" stroke="#52734d" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'suicide-prevention',
      title: 'Pencegahan Bunuh Diri',
      description: 'Pahami tanda-tanda peringatan, cara membantu orang terdekat, dan sumber bantuan darurat yang tersedia.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
          <path d="M7 18C7 17.4 7.4 17 8 17H16C16.6 17 17 17.4 17 18C17 18.6 16.6 19 16 19H8C7.4 19 7 18.6 7 18Z" fill="white"/>
          <path d="M9 21C9 20.4 9.4 20 10 20H14C14.6 20 15 20.4 15 21C15 21.6 14.6 22 14 22H10C9.4 22 9 21.6 9 21Z" fill="white"/>
        </svg>
      )
    },
    {
      id: 'self-care',
      title: 'Kesehatan Mental & Self-Care',
      description: 'Tips praktis untuk menjaga kesehatan mental, membangun ketahanan emosional, dan menciptakan rutinitas self-care.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="white"/>
        </svg>
      )
    }
  ];

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
        <h1 style={titleStyle}>Edukasi Kesehatan Mental</h1>
        <p style={subtitleStyle}>Pelajari tentang kesehatan mental dan cara menjaga kesejahteraan emosional</p>
      
      <div style={cardsContainerStyle}>
        {educationCards.map((card) => (
          <Link 
            key={card.id}
            href={`/edukasi/${card.id}`}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)';
            }}
          >
            <div style={cardImageStyle}>
              {card.icon}
            </div>
            <h3 style={cardTitleStyle}>{card.title}</h3>
            <p style={cardDescriptionStyle}>{card.description}</p>
            <span style={cardReadMoreStyle}>Baca selengkapnya →</span>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Edukasi;
