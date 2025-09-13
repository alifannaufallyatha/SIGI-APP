"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import BackButton from '../../../components/layout/BackButton';

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

const articleStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#2d5016',
  textAlign: 'center',
  margin: '0 0 1rem 0',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#52734d',
  textAlign: 'center',
  margin: '0 0 2rem 0',
  fontStyle: 'italic',
};

const sectionStyle: React.CSSProperties = {
  margin: '2rem 0',
  padding: '1.5rem',
  backgroundColor: '#f8fffe',
  borderRadius: '12px',
  border: '1px solid #e6f4ea',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#2d5016',
  margin: '0 0 1rem 0',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
  margin: '0 0 1rem 0',
  lineHeight: '1.6',
};

const listStyle: React.CSSProperties = {
  paddingLeft: '1.5rem',
  margin: '1rem 0',
};

const listItemStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
  margin: '0.5rem 0',
  lineHeight: '1.5',
};

const emergencyBoxStyle: React.CSSProperties = {
  backgroundColor: '#f8d7da',
  border: '2px solid #dc3545',
  borderRadius: '10px',
  padding: '1.5rem',
  margin: '2rem 0',
  textAlign: 'center',
};

const emergencyTitleStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#721c24',
  margin: '0 0 1rem 0',
};

const SuicidePreventionArticle: React.FC = () => {
  const router = useRouter();

  return (
    <div style={containerStyle}>
      <div 
        style={topLogoContainerStyle}
        onClick={() => router.push('/')}
        onMouseEnter={(e) => {
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          const svg = e.currentTarget.querySelector('svg');
          if (svg) svg.style.transform = 'scale(1)';
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

        <div style={articleStyle}>
          <h1 style={titleStyle}>Pencegahan Bunuh Diri</h1>
          <p style={subtitleStyle}>Panduan untuk mengenali tanda bahaya dan mencegah bunuh diri</p>

          <div style={emergencyBoxStyle}>
            <h2 style={emergencyTitleStyle}>🚨 JIKA INI ADALAH KEADAAN DARURAT</h2>
            <p style={{fontSize: '1rem', color: '#721c24', margin: '0.5rem 0', fontWeight: '600'}}>
              Jika Anda atau seseorang yang Anda kenal dalam bahaya langsung, segera hubungi:
            </p>
            <div style={{fontSize: '1.2rem', fontWeight: '700', color: '#721c24', margin: '1rem 0'}}>
              Hotline: 119 ext 8<br />
              WhatsApp: 081-111-500-400
            </div>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🚨 Tanda-Tanda Peringatan</h2>
            <p style={paragraphStyle}>
              Mengenali tanda-tanda peringatan dapat membantu mencegah tragedi:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Berbicara tentang ingin mati atau menyakiti diri sendiri</li>
              <li style={listItemStyle}>Mencari cara untuk bunuh diri</li>
              <li style={listItemStyle}>Berbicara tentang merasa putus asa atau tidak memiliki tujuan</li>
              <li style={listItemStyle}>Menarik diri dari keluarga dan teman</li>
              <li style={listItemStyle}>Perubahan drastis dalam pola tidur atau makan</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🤝 Cara Membantu</h2>
            <ul style={listStyle}>
              <li style={listItemStyle}>Dengarkan tanpa menghakimi</li>
              <li style={listItemStyle}>Tetap tenang dan berikan dukungan</li>
              <li style={listItemStyle}>Jangan tinggalkan mereka sendirian</li>
              <li style={listItemStyle}>Hubungi bantuan profesional segera</li>
              <li style={listItemStyle}>Singkirkan benda-benda berbahaya</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🏥 Sumber Bantuan</h2>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Hotline Kesehatan Mental:</strong> 119 ext 8</li>
              <li style={listItemStyle}><strong>WhatsApp Crisis Center:</strong> 081-111-500-400</li>
              <li style={listItemStyle}><strong>Nomor Darurat:</strong> 112 atau 119</li>
              <li style={listItemStyle}><strong>Yayasan Pulih:</strong> (021) 788-42580</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🌈 Pesan Akhir</h2>
            <p style={{ ...paragraphStyle, fontStyle: 'italic', textAlign: 'center', color: '#52734d' }}>
              Ingatlah: Anda tidak sendirian. Bantuan tersedia, dan ada harapan. 
              Satu langkah kecil untuk mencari bantuan dapat mengubah segalanya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuicidePreventionArticle;
