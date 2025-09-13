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

const tipBoxStyle: React.CSSProperties = {
  backgroundColor: '#e6f4ea',
  padding: '1.5rem',
  borderRadius: '10px',
  margin: '1.5rem 0',
  borderLeft: '4px solid #52734d',
};

const tipTitleStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#2d5016',
  margin: '0 0 0.5rem 0',
};

const emergencyBoxStyle: React.CSSProperties = {
  backgroundColor: '#ffebee',
  padding: '1.5rem',
  borderRadius: '10px',
  margin: '2rem 0',
  border: '2px solid #f44336',
  textAlign: 'center',
};

const emergencyTitleStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#c62828',
  margin: '0 0 0.5rem 0',
};

const SelfCare: React.FC = () => {
  const router = useRouter();

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

        <div style={articleStyle}>
          <h1 style={titleStyle}>Kesehatan Mental & Self-Care</h1>
          <p style={subtitleStyle}>Panduan praktis untuk menjaga kesehatan mental dan membangun rutinitas perawatan diri yang efektif</p>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🌟 Apa itu Self-Care?</h2>
            <p style={paragraphStyle}>
              Self-care adalah praktik merawat diri sendiri secara sengaja dan teratur untuk menjaga kesehatan fisik, mental, dan emosional. 
              Ini bukan tentang kemewahan, tetapi kebutuhan dasar untuk kesejahteraan hidup.
            </p>
            <p style={paragraphStyle}>
              Self-care yang baik membantu kita mengelola stres, meningkatkan mood, mengurangi kecemasan, 
              dan membangun ketahanan mental untuk menghadapi tantangan hidup.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>💝 Dimensi Self-Care</h2>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Fisik:</strong> Olahraga, tidur cukup, nutrisi seimbang, hygiene</li>
              <li style={listItemStyle}><strong>Mental:</strong> Belajar hal baru, membaca, puzzle, meditation</li>
              <li style={listItemStyle}><strong>Emosional:</strong> Journaling, berbagi perasaan, self-compassion</li>
              <li style={listItemStyle}><strong>Sosial:</strong> Menghabiskan waktu dengan orang terkasih, membangun hubungan positif</li>
              <li style={listItemStyle}><strong>Spiritual:</strong> Meditasi, doa, refleksi, koneksi dengan alam</li>
            </ul>
          </div>

          <div style={tipBoxStyle}>
            <h3 style={tipTitleStyle}>💡 Tips Self-Care Harian</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Mulai hari dengan 5 menit meditasi atau pernapasan dalam</li>
              <li style={listItemStyle}>Tulis 3 hal yang Anda syukuri setiap hari</li>
              <li style={listItemStyle}>Luangkan waktu 15-30 menit untuk aktivitas yang Anda nikmati</li>
              <li style={listItemStyle}>Batasi paparan media sosial dan berita negatif</li>
              <li style={listItemStyle}>Jaga hidrasi dan konsumsi makanan bergizi</li>
              <li style={listItemStyle}>Tidur 7-8 jam setiap malam</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🧘‍♀️ Teknik Manajemen Stres</h2>
            
            <h3 style={{...sectionTitleStyle, fontSize: '1.2rem', margin: '1.5rem 0 0.5rem 0'}}>Pernapasan 4-7-8</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Tarik napas melalui hidung selama 4 hitungan</li>
              <li style={listItemStyle}>Tahan napas selama 7 hitungan</li>
              <li style={listItemStyle}>Buang napas melalui mulut selama 8 hitungan</li>
              <li style={listItemStyle}>Ulangi 4-6 kali</li>
            </ul>

            <h3 style={{...sectionTitleStyle, fontSize: '1.2rem', margin: '1.5rem 0 0.5rem 0'}}>Grounding 5-4-3-2-1</h3>
            <p style={paragraphStyle}>Saat merasa cemas atau overwhelmed, identifikasi:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>5 hal yang bisa Anda lihat</li>
              <li style={listItemStyle}>4 hal yang bisa Anda sentuh</li>
              <li style={listItemStyle}>3 hal yang bisa Anda dengar</li>
              <li style={listItemStyle}>2 hal yang bisa Anda cium</li>
              <li style={listItemStyle}>1 hal yang bisa Anda rasakan</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🌱 Membangun Rutinitas Self-Care</h2>
            
            <h3 style={{...sectionTitleStyle, fontSize: '1.2rem', margin: '1.5rem 0 0.5rem 0'}}>Rutinitas Pagi</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Bangun pada waktu yang konsisten</li>
              <li style={listItemStyle}>Hindari langsung mengecek ponsel</li>
              <li style={listItemStyle}>Minum air putih</li>
              <li style={listItemStyle}>Stretching atau olahraga ringan</li>
              <li style={listItemStyle}>Sarapan bergizi</li>
              <li style={listItemStyle}>Set intentions untuk hari itu</li>
            </ul>

            <h3 style={{...sectionTitleStyle, fontSize: '1.2rem', margin: '1.5rem 0 0.5rem 0'}}>Rutinitas Malam</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Matikan gadget 1 jam sebelum tidur</li>
              <li style={listItemStyle}>Refleksi hari: apa yang berjalan baik?</li>
              <li style={listItemStyle}>Mandi air hangat atau skincare routine</li>
              <li style={listItemStyle}>Baca buku atau journaling</li>
              <li style={listItemStyle}>Praktik gratitude</li>
              <li style={listItemStyle}>Tidur pada waktu yang konsisten</li>
            </ul>
          </div>

          <div style={tipBoxStyle}>
            <h3 style={tipTitleStyle}>🎯 Self-Care Mingguan</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Minggu 1:</strong> Fokus pada sleep hygiene</li>
              <li style={listItemStyle}><strong>Minggu 2:</strong> Tambahkan aktivitas fisik</li>
              <li style={listItemStyle}><strong>Minggu 3:</strong> Praktik mindfulness/meditasi</li>
              <li style={listItemStyle}><strong>Minggu 4:</strong> Nurture hubungan sosial</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>⚠️ Warning Signs untuk Mencari Bantuan</h2>
            <p style={paragraphStyle}>Segera hubungi profesional kesehatan mental jika mengalami:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Perasaan sedih atau hopeless yang berkelanjutan</li>
              <li style={listItemStyle}>Kehilangan minat pada aktivitas yang biasa disukai</li>
              <li style={listItemStyle}>Perubahan drastis pola tidur atau makan</li>
              <li style={listItemStyle}>Kesulitan konsentrasi atau membuat keputusan</li>
              <li style={listItemStyle}>Pikiran untuk menyakiti diri sendiri</li>
              <li style={listItemStyle}>Penggunaan alkohol atau zat berlebihan</li>
            </ul>
          </div>

          <div style={emergencyBoxStyle}>
            <h3 style={emergencyTitleStyle}>🚨 Bantuan Darurat</h3>
            <p style={{fontSize: '1rem', color: '#c62828', margin: '0.5rem 0'}}>
              Jika Anda atau seseorang yang Anda kenal memiliki pikiran untuk bunuh diri:
            </p>
            <div style={{fontSize: '1.2rem', fontWeight: '700', color: '#c62828', margin: '1rem 0'}}>
              Hotline: 119 ext 8<br />
              WhatsApp: 081-111-500-400
            </div>
            <p style={{fontSize: '0.9rem', color: '#c62828', margin: '0'}}>
              Layanan 24/7 - Jangan ragu untuk mencari bantuan
            </p>
          </div>

          <div style={tipBoxStyle}>
            <h3 style={tipTitleStyle}>📱 Apps Rekomendasi</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><strong>Headspace:</strong> Meditasi dan mindfulness</li>
              <li style={listItemStyle}><strong>Calm:</strong> Sleep stories dan relaksasi</li>
              <li style={listItemStyle}><strong>Mood Meter:</strong> Tracking mood harian</li>
              <li style={listItemStyle}><strong>Forest:</strong> Focus dan produktivitas</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>🌈 Kesimpulan</h2>
            <p style={paragraphStyle}>
              Self-care bukan tentang perfection, tetapi tentang progress. Mulai dengan langkah kecil yang konsisten, 
              dan ingat bahwa merawat diri sendiri bukanlah tindakan egois - ini adalah investasi untuk bisa memberikan yang terbaik 
              bagi diri sendiri dan orang-orang di sekitar kita.
            </p>
            <p style={paragraphStyle}>
              <strong>Ingat:</strong> Kesehatan mental sama pentingnya dengan kesehatan fisik. 
              Jangan ragu untuk mencari bantuan profesional ketika diperlukan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCare;
