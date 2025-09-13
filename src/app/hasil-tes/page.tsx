"use client";
import React, { useState, useEffect } from 'react';
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
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#2d5016',
  textAlign: 'center',
  margin: '0 0 1rem 0',
};

const resultCardStyle: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto 2rem auto',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e6f4ea',
};

const scoreContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const scoreNumberStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: '700',
  color: '#52734d',
  margin: '0',
};

const scoreMaxStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#666',
  margin: '0 0 1rem 0',
};

const statusContainerStyle = (level: string): React.CSSProperties => {
  let backgroundColor = '#e6f4ea';
  let color = '#2d5016';
  
  if (level === 'Normal') {
    backgroundColor = '#e6f4ea';
    color = '#2d5016';
  } else if (level === 'Stress') {
    backgroundColor = '#fff3e0';
    color = '#ef6c00';
  } else if (level === 'Murung') {
    backgroundColor = '#ffebee';
    color = '#c62828';
  } else if (level === 'Putus Asa') {
    backgroundColor = '#ffebee';
    color = '#c62828';
  }

  return {
    backgroundColor,
    color,
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };
};

const statusTitleStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: '700',
  margin: '0 0 0.5rem 0',
};

const statusDescStyle: React.CSSProperties = {
  fontSize: '1rem',
  margin: '0',
  lineHeight: '1.4',
};

const recommendationStyle: React.CSSProperties = {
  backgroundColor: '#f8f9fa',
  borderLeft: '4px solid #52734d',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  borderRadius: '0 8px 8px 0',
};

const recommendationTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '700',
  color: '#2d5016',
  margin: '0 0 1rem 0',
};

const recommendationListStyle: React.CSSProperties = {
  margin: '0',
  paddingLeft: '1.2rem',
  color: '#333',
  lineHeight: '1.6',
};

const emergencyStyle: React.CSSProperties = {
  backgroundColor: '#ffebee',
  border: '2px solid #f44336',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const emergencyTitleStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: '700',
  color: '#c62828',
  margin: '0 0 0.5rem 0',
};

const emergencyTextStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#c62828',
  margin: '0 0 1rem 0',
  lineHeight: '1.4',
};

const emergencyNumberStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#c62828',
  margin: '0',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  marginTop: '2rem',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#52734d',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  minWidth: '200px',
};

const secondaryButtonStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '#52734d',
  border: '2px solid #52734d',
  borderRadius: '10px',
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  minWidth: '200px',
};

interface ScreeningResult {
  totalScore: number;
  answers: Record<number, number>;
  completedAt: string;
  username: string;
}

const HasilTes: React.FC = () => {
  const router = useRouter();
  const [result, setResult] = useState<ScreeningResult | null>(null);

  useEffect(() => {
    // Get current user from localStorage
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      router.push('/login');
      return;
    }

    // Get user-specific screening results
    const resultKey = `screeningResults_${currentUser}`;
    const storedResult = localStorage.getItem(resultKey);
    
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // Redirect to screening if no results found for this user
      router.push('/screening');
    }
  }, [router]);

  if (!result) {
    return (
      <div style={containerStyle}>
        <BackButton />
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Memuat hasil...</p>
        </div>
      </div>
    );
  }

  const getStatusInfo = (score: number) => {
    if (score <= 32) {
      return {
        level: 'Normal',
        title: 'Status Mental: Normal',
        description: 'Kondisi mental Anda dalam keadaan baik. Anda tampaknya memiliki resiliensi yang cukup dalam menghadapi tantangan hidup sehari-hari.',
        recommendations: [
          'Pertahankan gaya hidup sehat dengan olahraga teratur',
          'Jaga hubungan sosial yang positif dengan keluarga dan teman',
          'Lakukan aktivitas yang Anda nikmati secara rutin',
          'Praktikkan teknik relaksasi seperti meditasi atau yoga',
          'Tidur yang cukup dan berkualitas'
        ]
      };
    } else if (score <= 48) {
      return {
        level: 'Stress',
        title: 'Status Mental: Stress',
        description: 'Anda mengalami tingkat stress yang perlu diperhatikan. Kondisi ini dapat dikelola dengan perawatan diri yang tepat.',
        recommendations: [
          'Pertimbangkan untuk berbicara dengan konselor atau psikolog',
          'Tingkatkan aktivitas fisik dan olahraga',
          'Cari dukungan dari keluarga, teman, atau komunitas',
          'Kurangi stres dengan manajemen waktu yang lebih baik',
          'Praktikkan teknik mindfulness dan relaksasi',
          'Jaga pola makan yang sehat dan teratur'
        ]
      };
    } else if (score <= 64) {
      return {
        level: 'Murung',
        title: 'Status Mental: Murung',
        description: 'Anda mengalami perasaan murung yang cukup signifikan. Sangat disarankan untuk mencari dukungan profesional.',
        recommendations: [
          'Segera konsultasi dengan psikolog atau psikiater',
          'Pertimbangkan terapi atau konseling profesional',
          'Jangan ragu untuk meminta bantuan dari orang terdekat',
          'Hindari isolasi sosial, tetap terhubung dengan orang lain',
          'Pertimbangkan bergabung dengan support group',
          'Fokus pada aktivitas yang memberikan makna dan tujuan'
        ]
      };
    } else {
      return {
        level: 'Putus Asa',
        title: 'Status Mental: Putus Asa',
        description: 'Anda mengalami perasaan putus asa yang memerlukan perhatian segera. Bantuan profesional sangat diperlukan.',
        recommendations: [
          'Hubungi profesional kesehatan mental SEGERA',
          'Jangan sendirian - minta dukungan keluarga atau teman',
          'Pertimbangkan hotline kesehatan mental jika memerlukan bantuan segera',
          'Hindari pengambilan keputusan penting saat ini',
          'Fokus pada keamanan dan kesejahteraan diri',
          'Ingat bahwa bantuan tersedia dan kondisi ini dapat membaik'
        ]
      };
    }
  };

  const statusInfo = getStatusInfo(result.totalScore);
  const showEmergency = statusInfo.level === 'Putus Asa';

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
        <h1 style={titleStyle}>Hasil Screening Kesehatan Mental</h1>
      
      <div style={resultCardStyle}>
        <div style={statusContainerStyle(statusInfo.level)}>
          <div style={statusTitleStyle}>{statusInfo.title}</div>
          <div style={statusDescStyle}>{statusInfo.description}</div>
        </div>

        {showEmergency && (
          <div style={emergencyStyle}>
            <div style={emergencyTitleStyle}>🚨 Bantuan Darurat</div>
            <div style={emergencyTextStyle}>
              Jika Anda merasa dalam bahaya atau memiliki pikiran untuk menyakiti diri sendiri,
              hubungi layanan darurat atau hotline kesehatan mental segera:
            </div>
            <div style={emergencyNumberStyle}>
              Hotline: 119 ext 8 <br />
              WhatsApp: 081-111-500-400
            </div>
          </div>
        )}

        <div style={recommendationStyle}>
          <div style={recommendationTitleStyle}>💡 Rekomendasi untuk Anda:</div>
          <ul style={recommendationListStyle}>
            {statusInfo.recommendations.map((rec, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{rec}</li>
            ))}
          </ul>
        </div>

        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => router.push('/konsultasi')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2d5016';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#52734d';
            }}
          >
            Konsultasi dengan Ahli
          </button>
          
          <button
            style={secondaryButtonStyle}
            onClick={() => router.push('/edukasi')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#52734d';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#52734d';
            }}
          >
            Pelajari Lebih Lanjut
          </button>

          <button
            style={{...secondaryButtonStyle, fontSize: '0.9rem', minWidth: '150px'}}
            onClick={() => router.push('/screening')}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#52734d';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#52734d';
            }}
          >
            Tes Ulang
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HasilTes;
