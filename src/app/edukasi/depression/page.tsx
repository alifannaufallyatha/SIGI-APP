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

const emergencyBoxStyle: React.CSSProperties = {
  backgroundColor: '#f8d7da',
  border: '1px solid #f5c6cb',
  borderRadius: '8px',
  padding: '1rem',
  margin: '1.5rem 0',
};

const emergencyTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#721c24',
  margin: '0 0 0.5rem 0',
};

const emergencyTextStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#721c24',
  margin: '0',
};

const infoBoxStyle: React.CSSProperties = {
  backgroundColor: '#d1ecf1',
  border: '1px solid #bee5eb',
  borderRadius: '8px',
  padding: '1rem',
  margin: '1.5rem 0',
};

const infoTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#0c5460',
  margin: '0 0 0.5rem 0',
};

const infoTextStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#0c5460',
  margin: '0',
};

const DepressionArticle: React.FC = () => {
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
          <h1 style={titleStyle}>Memahami Depresi</h1>
          <p style={subtitleStyle}>Panduan untuk mengenali, memahami, dan mengatasi depresi</p>
        </div>

        <div style={contentStyle}>
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Apa itu Depresi?</h2>
        <p style={paragraphStyle}>
          Depresi adalah gangguan suasana hati yang menyebabkan perasaan sedih yang berkepanjangan 
          dan kehilangan minat terhadap aktivitas yang biasanya dinikmati. Depresi bukan hanya 
          kesedihan biasa yang dapat hilang dengan sendirinya, tetapi kondisi medis yang memerlukan 
          perhatian dan penanganan yang tepat.
        </p>
        <p style={paragraphStyle}>
          Depresi dapat mempengaruhi cara berpikir, merasa, dan berperilaku seseorang, serta dapat 
          menyebabkan berbagai masalah emosional dan fisik. Penting untuk memahami bahwa depresi 
          adalah kondisi yang dapat diobati, bukan kelemahan karakter atau sesuatu yang dapat 
          'diatasi' hanya dengan kemauan keras.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Gejala Depresi</h2>
        <p style={paragraphStyle}>
          Gejala depresi dapat bervariasi dari ringan hingga berat. Gejala harus berlangsung 
          setidaknya dua minggu untuk diagnosis depresi:
        </p>
        
        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Gejala Emosional:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Perasaan sedih, kosong, atau putus asa yang berkepanjangan</li>
          <li style={listItemStyle}>Kehilangan minat atau kesenangan dalam aktivitas yang biasa dinikmati</li>
          <li style={listItemStyle}>Merasa tidak berharga atau bersalah berlebihan</li>
          <li style={listItemStyle}>Merasa mudah tersinggung atau marah</li>
          <li style={listItemStyle}>Kecemasan yang berlebihan</li>
          <li style={listItemStyle}>Perasaan mati rasa atau kehampaan emosional</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Gejala Fisik:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Perubahan nafsu makan (berkurang atau berlebihan)</li>
          <li style={listItemStyle}>Gangguan tidur (insomnia atau tidur berlebihan)</li>
          <li style={listItemStyle}>Kelelahan atau kehilangan energi</li>
          <li style={listItemStyle}>Gerakan atau bicara yang melambat</li>
          <li style={listItemStyle}>Sakit kepala, nyeri punggung, atau masalah pencernaan</li>
          <li style={listItemStyle}>Perubahan berat badan yang signifikan</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Gejala Kognitif:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Kesulitan berkonsentrasi atau membuat keputusan</li>
          <li style={listItemStyle}>Masalah memori</li>
          <li style={listItemStyle}>Pikiran berulang tentang kematian atau bunuh diri</li>
          <li style={listItemStyle}>Pessimisme atau berpikir negatif</li>
          <li style={listItemStyle}>Kesulitan berpikir jernih</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Gejala Perilaku:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Menarik diri dari keluarga dan teman</li>
          <li style={listItemStyle}>Menurunnya kinerja di sekolah atau pekerjaan</li>
          <li style={listItemStyle}>Mengabaikan aktivitas atau tanggung jawab</li>
          <li style={listItemStyle}>Menghindari aktivitas sosial</li>
          <li style={listItemStyle}>Penggunaan alkohol atau obat-obatan</li>
        </ul>
      </div>

      <div style={emergencyBoxStyle}>
        <h3 style={emergencyTitleStyle}>🚨 Tanda Bahaya yang Memerlukan Bantuan Segera</h3>
        <p style={emergencyTextStyle}>
          Segera cari bantuan profesional atau hubungi layanan darurat jika Anda atau orang terdekat mengalami:
        </p>
        <ul style={{ ...listStyle, color: '#721c24' }}>
          <li>Pikiran atau rencana untuk menyakiti diri sendiri atau bunuh diri</li>
          <li>Pikiran untuk menyakiti orang lain</li>
          <li>Halusinasi atau delusi</li>
          <li>Ketidakmampuan untuk merawat diri sendiri</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Penyebab Depresi</h2>
        <p style={paragraphStyle}>
          Depresi tidak memiliki penyebab tunggal. Beberapa faktor yang dapat berkontribusi:
        </p>
        
        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Faktor Biologis:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Ketidakseimbangan kimia di otak</li>
          <li style={listItemStyle}>Genetik atau riwayat keluarga</li>
          <li style={listItemStyle}>Perubahan hormon</li>
          <li style={listItemStyle}>Kondisi medis tertentu</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Faktor Psikologis:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Trauma masa lalu</li>
          <li style={listItemStyle}>Pola pikir negatif</li>
          <li style={listItemStyle}>Harga diri yang rendah</li>
          <li style={listItemStyle}>Kepribadian yang cenderung pessimis</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>Faktor Lingkungan:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Stress kronis</li>
          <li style={listItemStyle}>Kehilangan orang tercinta</li>
          <li style={listItemStyle}>Masalah hubungan</li>
          <li style={listItemStyle}>Masalah keuangan</li>
          <li style={listItemStyle}>Isolasi sosial</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Cara Mengatasi Depresi</h2>
        
        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>1. Pengobatan Profesional</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}><strong>Terapi Psikologi:</strong> Terapi kognitif-perilaku, terapi interpersonal</li>
          <li style={listItemStyle}><strong>Konseling:</strong> Individual, kelompok, atau keluarga</li>
          <li style={listItemStyle}><strong>Pengobatan:</strong> Antidepresan (jika diresepkan dokter)</li>
          <li style={listItemStyle}><strong>Kombinasi terapi:</strong> Terapi + pengobatan untuk hasil optimal</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>2. Perawatan Mandiri</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Rutinitas harian yang teratur</li>
          <li style={listItemStyle}>Olahraga ringan secara teratur</li>
          <li style={listItemStyle}>Pola makan yang sehat</li>
          <li style={listItemStyle}>Tidur yang cukup (7-9 jam)</li>
          <li style={listItemStyle}>Teknik relaksasi dan mindfulness</li>
          <li style={listItemStyle}>Menghindari alkohol dan obat-obatan</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', color: '#52734d', margin: '1rem 0 0.5rem 0' }}>3. Dukungan Sosial</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Berbicara dengan keluarga dan teman terpercaya</li>
          <li style={listItemStyle}>Bergabung dengan grup dukungan</li>
          <li style={listItemStyle}>Tetap terhubung secara sosial</li>
          <li style={listItemStyle}>Menerima bantuan dari orang lain</li>
        </ul>
      </div>

      <div style={infoBoxStyle}>
        <h3 style={infoTitleStyle}>💡 Tips untuk Keluarga dan Teman</h3>
        <p style={infoTextStyle}>
          <strong>Yang harus dilakukan:</strong> Dengarkan tanpa menghakimi, tunjukkan dukungan, 
          bantu mencari bantuan profesional, bersabar dalam proses pemulihan.
        </p>
        <p style={infoTextStyle}>
          <strong>Yang tidak boleh dilakukan:</strong> Menyuruh "lupakan saja" atau "berpikir positif", 
          menyalahkan, membandingkan dengan orang lain, atau mengabaikan ancaman bunuh diri.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Proses Pemulihan</h2>
        <p style={paragraphStyle}>
          Pemulihan dari depresi adalah proses yang membutuhkan waktu. Setiap orang memiliki 
          perjalanan yang berbeda. Hal-hal penting dalam proses pemulihan:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Pemulihan membutuhkan waktu - bersabarlah dengan diri sendiri</li>
          <li style={listItemStyle}>Progress mungkin tidak selalu linear</li>
          <li style={listItemStyle}>Rayakan kemajuan kecil</li>
          <li style={listItemStyle}>Tetap konsisten dengan pengobatan</li>
          <li style={listItemStyle}>Komunikasi terbuka dengan terapis atau dokter</li>
          <li style={listItemStyle}>Bangun sistem dukungan yang kuat</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <p style={{ ...paragraphStyle, fontStyle: 'italic', textAlign: 'center', color: '#52734d' }}>
          Depresi adalah kondisi yang dapat diobati. Dengan bantuan yang tepat dan dukungan yang memadai, 
          pemulihan adalah mungkin. Jangan ragu untuk mencari bantuan - itu adalah langkah pertama 
          menuju kesembuhan.
        </p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default DepressionArticle;
