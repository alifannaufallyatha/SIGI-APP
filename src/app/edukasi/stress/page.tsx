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

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#2d5016',
  margin: '0 0 1rem 0',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#52734d',
  margin: '0',
  fontStyle: 'italic',
};

const contentStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6',
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '2rem',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#2d5016',
  margin: '0 0 1rem 0',
  borderLeft: '4px solid #52734d',
  paddingLeft: '1rem',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#444',
  marginBottom: '1rem',
  textAlign: 'justify',
};

const listStyle: React.CSSProperties = {
  paddingLeft: '1.5rem',
  marginBottom: '1rem',
};

const listItemStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#444',
  marginBottom: '0.5rem',
};

const warningBoxStyle: React.CSSProperties = {
  backgroundColor: '#fff3cd',
  border: '1px solid #ffeaa7',
  borderRadius: '8px',
  padding: '1rem',
  margin: '1.5rem 0',
};

const warningTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#856404',
  margin: '0 0 0.5rem 0',
};

const warningTextStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#856404',
  margin: '0',
};

const StressArticle: React.FC = () => {
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

        <div style={headerStyle}>
          <h1 style={titleStyle}>Mengenal dan Mengatasi Stress</h1>
      <p style={subtitleStyle}>Panduan lengkap untuk memahami dan mengelola stress dalam kehidupan sehari-hari</p>
    </div>

    <div style={contentStyle}>
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Apa itu Stress?</h2>
        <p style={paragraphStyle}>
          Stress adalah respons alami tubuh terhadap tekanan, tantangan, atau ancaman yang kita hadapi. 
          Meskipun stress dalam kadar normal dapat memotivasi kita, namun stress berlebihan dapat 
          berdampak negatif pada kesehatan fisik dan mental.
        </p>
        <p style={paragraphStyle}>
          Penting untuk memahami bahwa stress adalah bagian normal dari kehidupan, namun cara kita 
          mengelolanya yang menentukan dampaknya terhadap kesejahteraan kita.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Tanda-tanda Stress</h2>
        <p style={paragraphStyle}>Stress dapat muncul dalam berbagai bentuk. Kenali tanda-tandanya:</p>
        
        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Gejala Fisik:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Sakit kepala yang sering</li>
          <li style={listItemStyle}>Kelelahan yang berlebihan</li>
          <li style={listItemStyle}>Gangguan tidur (insomnia atau tidur berlebihan)</li>
          <li style={listItemStyle}>Masalah pencernaan</li>
          <li style={listItemStyle}>Ketegangan otot</li>
          <li style={listItemStyle}>Perubahan nafsu makan</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Gejala Emosional:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Mudah marah atau irritable</li>
          <li style={listItemStyle}>Merasa cemas atau khawatir berlebihan</li>
          <li style={listItemStyle}>Mood yang tidak stabil</li>
          <li style={listItemStyle}>Merasa kewalahan</li>
          <li style={listItemStyle}>Kehilangan motivasi</li>
          <li style={listItemStyle}>Merasa sedih atau depresi</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Gejala Perilaku:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Menghindari tanggung jawab</li>
          <li style={listItemStyle}>Isolasi dari orang lain</li>
          <li style={listItemStyle}>Penggunaan alkohol atau zat untuk 'pelarian'</li>
          <li style={listItemStyle}>Kebiasaan nervous (gigit kuku, gelisah)</li>
          <li style={listItemStyle}>Prokrastinasi yang berlebihan</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Teknik Mengatasi Stress</h2>
        
        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>1. Teknik Pernapasan</h3>
        <p style={paragraphStyle}>
          Latihan pernapasan dalam dapat membantu menenangkan sistem saraf dan mengurangi stress secara instan.
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Tarik napas dalam selama 4 hitungan</li>
          <li style={listItemStyle}>Tahan napas selama 4 hitungan</li>
          <li style={listItemStyle}>Hembuskan napas perlahan selama 6 hitungan</li>
          <li style={listItemStyle}>Ulangi 5-10 kali</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>2. Manajemen Waktu</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Buat prioritas tugas berdasarkan kepentingan</li>
          <li style={listItemStyle}>Pecah tugas besar menjadi langkah-langkah kecil</li>
          <li style={listItemStyle}>Tetapkan batas waktu yang realistis</li>
          <li style={listItemStyle}>Belajar mengatakan "tidak" untuk komitmen berlebihan</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>3. Aktivitas Fisik</h3>
        <p style={paragraphStyle}>
          Olahraga teratur dapat mengurangi hormon stress dan meningkatkan endorfin (hormon bahagia).
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Jalan kaki 30 menit setiap hari</li>
          <li style={listItemStyle}>Yoga atau stretching</li>
          <li style={listItemStyle}>Olahraga ringan seperti berenang atau bersepeda</li>
          <li style={listItemStyle}>Aktivitas yang Anda nikmati</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>4. Dukungan Sosial</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Berbicara dengan keluarga atau teman terpercaya</li>
          <li style={listItemStyle}>Bergabung dengan komunitas atau grup dukungan</li>
          <li style={listItemStyle}>Jangan ragu meminta bantuan ketika dibutuhkan</li>
          <li style={listItemStyle}>Jaga hubungan yang positif dan sehat</li>
        </ul>
      </div>

      <div style={warningBoxStyle}>
        <h3 style={warningTitleStyle}>⚠️ Kapan Harus Mencari Bantuan Profesional?</h3>
        <p style={warningTextStyle}>
          Jika stress yang Anda alami berlangsung lebih dari 2 minggu dan mengganggu aktivitas sehari-hari, 
          hubungi kesehatan mental seperti psikolog atau psikiater. Tanda-tanda yang memerlukan perhatian 
          khusus meliputi: pikiran untuk menyakiti diri sendiri, penggunaan alkohol/obat-obatan berlebihan, 
          atau isolasi sosial yang ekstrem.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Tips Pencegahan Stress</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Tidur yang cukup (7-9 jam per malam)</li>
          <li style={listItemStyle}>Makan makanan bergizi seimbang</li>
          <li style={listItemStyle}>Batasi konsumsi kafein dan alkohol</li>
          <li style={listItemStyle}>Luangkan waktu untuk hobi dan aktivitas yang menyenangkan</li>
          <li style={listItemStyle}>Praktikkan mindfulness atau meditasi</li>
          <li style={listItemStyle}>Jaga rutinitas harian yang sehat</li>
          <li style={listItemStyle}>Belajar teknik relaksasi</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <p style={{ ...paragraphStyle, fontStyle: 'italic', textAlign: 'center', color: '#52734d' }}>
          Ingat, mengelola stress adalah proses yang berkelanjutan. Bersabarlah dengan diri sendiri 
          dan rayakan setiap kemajuan kecil yang Anda buat.
        </p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default StressArticle;
