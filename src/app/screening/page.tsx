"use client";
import React, { useState } from 'react';
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
  margin: '0 0 0.5rem 0',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#52734d',
  textAlign: 'center',
  margin: '0 0 2rem 0',
  fontStyle: 'italic',
};

const progressContainerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto 2rem auto',
  backgroundColor: '#e6f4ea',
  borderRadius: '10px',
  padding: '4px',
};

const progressBarStyle = (progress: number): React.CSSProperties => ({
  width: `${progress}%`,
  height: '8px',
  backgroundColor: '#52734d',
  borderRadius: '6px',
  transition: 'width 0.3s ease',
});

const progressTextStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '0.9rem',
  color: '#52734d',
  margin: '0.5rem 0 1rem 0',
  fontWeight: '600',
};

const formContainerStyle: React.CSSProperties = {
  maxWidth: '700px',
  margin: '0 auto',
};

const questionContainerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  border: '1px solid #e6f4ea',
};

const questionTextStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#2d5016',
  marginBottom: '1rem',
  lineHeight: '1.4',
};

const optionsContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  marginTop: '1rem',
  width: '100%',
};

const optionStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1rem',
  borderRadius: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e6f4ea',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: '#fff',
  justifyContent: 'space-between',
};

const optionSelectedStyle: React.CSSProperties = {
  ...optionStyle,
  backgroundColor: '#f0f8f2',
  borderColor: '#52734d',
};

const radioStyle: React.CSSProperties = {
  width: '18px',
  height: '18px',
  accentColor: '#52734d',
};

const optionLabelStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
  cursor: 'pointer',
  flex: 1,
  textAlign: 'center',
  fontWeight: '500',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
  padding: '1rem',
};

const submitButtonStyle: React.CSSProperties = {
  backgroundColor: '#52734d',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  minWidth: '150px',
};

const Screening: React.FC = () => {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showModal, setShowModal] = useState(false);
  const [hasReadGuidelines, setHasReadGuidelines] = useState(false);

  // Check if user is logged in
  React.useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      router.push('/login');
    }
  }, [router]);

  const questions = [
    "Saya merasa orang-orang dalam hidup saya akan lebih bahagia jika hidup tanpa saya",
    "Saya pikir saya adalah beban bagi teman, keluarga, dan masyarakat",
    "Saya pikir kematian saya akan membuat orang-orang dalam hidup saya merasa lega",
    "Saya merasa orang-orang di sekitar saya ingin menyingkirkan saya",
    "Saya pikir segala sesuatu yang saya lakukan selalu dinilai memperburuk situasi atau kondisi yang ada",
    "Saya merasa orang lain peduli kepada saya",
    "Saya merasa saya adalah bagian dari sesuatu hal yang berguna",
    "Saya beruntung bisa memiliki banyak teman yang peduli dan mendukung saya",
    "Saya merasa ditinggalkan",
    "Saya merasa tidak dimengerti oleh orang-orang disekitar saya",
    "Saya merasa terkucilkan",
    "Saya merasa kesepian walaupun ada banyak orang di sekitar saya",
    "Saya merasa hal-hal buruk akan terjadi pada saya",
    "Saya merasa percuma berusaha karena saya tidak akan berhasil",
    "Saya merasa lebih baik saya menyerah karena saya tidak bisa membuat kondisi saya menjadi lebih baik",
    "Saya merasa hidup saya sial terus"
  ];

  // Questions 6, 7, 8 are reverse scored (positive questions)
  const reverseScored = [5, 6, 7];

  const handleAnswerChange = (questionIndex: number, value: number) => {
    if (!hasReadGuidelines) {
      alert('Silakan baca panduan terlebih dahulu sebelum mengisi screening!');
      setShowModal(true);
      return;
    }
    
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const getScaleLabels = (questionIndex: number) => {
    if (reverseScored.includes(questionIndex)) {
      return {
        left: "SANGAT SETUJU",
        right: "SANGAT TIDAK SETUJU"
      };
    }
    return {
      left: "SANGAT TIDAK SETUJU",
      right: "SANGAT SETUJU"
    };
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;
  const isComplete = Object.keys(answers).length === questions.length;

  const handleSubmit = () => {
    if (isComplete) {
      // Calculate total score
      let totalScore = 0;
      for (let i = 0; i < questions.length; i++) {
        let score = answers[i];
        // Reverse score for positive questions
        if (reverseScored.includes(i)) {
          score = 6 - score; // Convert 1->5, 2->4, 3->3, 4->2, 5->1
        }
        totalScore += score;
      }

      // Get current user from localStorage
      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) {
        alert('Silakan login terlebih dahulu');
        router.push('/login');
        return;
      }

      // Store results with user-specific key
      const resultKey = `screeningResults_${currentUser}`;
      localStorage.setItem(resultKey, JSON.stringify({
        answers,
        totalScore,
        completedAt: new Date().toISOString(),
        username: currentUser
      }));

      // Navigate to results page
      router.push('/hasil-tes');
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
        <h1 style={titleStyle}>Screening Kesehatan Mental</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <button
            style={{
              backgroundColor: '#52734d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.6rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            }}
            onClick={() => setShowModal(true)}
            type="button"
          >
            Panduan
          </button>
        </div>
        
        {/* Status Panduan */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 1.5rem auto',
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: hasReadGuidelines ? '#d4edda' : '#fff3cd',
          border: `1px solid ${hasReadGuidelines ? '#c3e6cb' : '#ffeaa7'}`,
          textAlign: 'center'
        }}>
          {hasReadGuidelines ? (
            <p style={{ 
              color: '#155724', 
              margin: '0', 
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              ✅ Panduan sudah dibaca - Anda dapat mengisi screening
            </p>
          ) : (
            <p style={{ 
              color: '#856404', 
              margin: '0', 
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              ⚠️ Silakan baca panduan terlebih dahulu sebelum mengisi screening
            </p>
          )}
        </div>
        
        {showModal && (
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.25)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setShowModal(false)}
          >
            <div
              style={{
          background: '#fff',
          borderRadius: '12px',
          maxWidth: '420px',
          width: '90%',
          maxHeight: '85vh',
          padding: '2rem 1.5rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
          onClick={() => setShowModal(false)}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            color: '#52734d',
            cursor: 'pointer',
            fontWeight: 700,
            zIndex: 1,
          }}
          aria-label="Tutup"
          type="button"
              >
          ×
              </button>
              
              <div style={{
                overflowY: 'auto',
                paddingRight: '0.5rem',
                marginRight: '-0.5rem',
              }}>
                <h2 style={{ color: '#2d5016', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>
            Panduan Pengisian
                </h2>
                <p style={{ color: '#333', fontSize: '1rem', marginBottom: '1rem' }}>
            Formulir ini menggunakan kuesioner deteksi dini faktor risiko bunuh diri untuk membantu mengenali kondisi psikologis Anda secara lebih baik.
                </p>
                <p style={{ color: '#333', fontSize: '1rem', marginBottom: '1rem' }}>
            Harap diingat, hasil dari screening ini <b>bukan diagnosis medis</b>, melainkan alat bantu awal untuk mengetahui kondisi risiko yang mungkin perlu mendapat perhatian lebih lanjut.
                </p>
                <div style={{ background: '#e6f4ea', borderRadius: 8, padding: '0.8rem', marginBottom: '1rem', color: '#52734d', fontWeight: 600 }}>
            ✨ Mohon baca instruksi sebelum mengisi:
                </div>
                <ul style={{ color: '#333', fontSize: '0.98rem', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
            <li>1. Berikut ini terdapat tabel dengan beberapa pernyataan yang perlu Anda jawab.</li>
            <li>2. Tidak ada batas waktu dalam mengisi seluruh pernyataan. Diperkirakan dapat diselesaikan dalam 15–20 menit.</li>
            <li>3. Tidak ada jawaban benar/salah atau baik/buruk. Jawablah sesuai dengan keadaan Anda dalam dua minggu terakhir.</li>
            <li>4. Berilah tanda silang (✔) pada kolom yang sesuai dengan pilihan Anda.</li>
                </ul>
                
                <div style={{
                  borderTop: '1px solid #e6f4ea',
                  paddingTop: '1rem',
                  textAlign: 'center'
                }}>
                  <button
                    onClick={() => {
                      setHasReadGuidelines(true);
                      setShowModal(false);
                    }}
                    style={{
                      backgroundColor: '#52734d',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.8rem 1.5rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2d5016';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#52734d';
                    }}
                  >
                    ✓ Saya Sudah Memahami Panduan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      
      <div style={progressContainerStyle}>
        <div style={progressBarStyle(progress)}></div>
      </div>
      <p style={progressTextStyle}>
        Progress: {Object.keys(answers).length} dari {questions.length} pertanyaan
      </p>

      <div style={formContainerStyle}>
        {questions.map((question, index) => {
          const labels = getScaleLabels(index);
          return (
            <div key={index} style={{
              ...questionContainerStyle,
              opacity: hasReadGuidelines ? 1 : 0.6,
              pointerEvents: hasReadGuidelines ? 'auto' : 'none',
              border: hasReadGuidelines ? '1px solid #e6f4ea' : '1px solid #ffcccc',
              backgroundColor: hasReadGuidelines ? '#fff' : '#f9f9f9'
            }}>
              <div style={questionTextStyle}>
                {index + 1}. {question}
                {!hasReadGuidelines && (
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#dc3545',
                    fontWeight: '500',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    🔒 Baca panduan terlebih dahulu
                  </div>
                )}
              </div>
              <div style={optionsContainerStyle}>
                {[1, 2, 3, 4, 5].map(value => {
                  const getScaleLabel = (val: number) => {
                    if (val === 1) return 'SANGAT TIDAK SETUJU';
                    if (val === 2) return 'TIDAK SETUJU';
                    if (val === 3) return 'NETRAL';
                    if (val === 4) return 'SETUJU';
                    if (val === 5) return 'SANGAT SETUJU';
                    return '';
                  };
                  
                  return (
                    <label
                      key={value}
                      style={answers[index] === value ? optionSelectedStyle : optionStyle}
                      onClick={() => handleAnswerChange(index, value)}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={value}
                        checked={answers[index] === value}
                        onChange={() => handleAnswerChange(index, value)}
                        style={radioStyle}
                      />
                      <span style={optionLabelStyle}>{getScaleLabel(value)}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div style={buttonContainerStyle}>
          <button
            style={{
              ...submitButtonStyle,
              backgroundColor: (isComplete && hasReadGuidelines) ? '#52734d' : '#cccccc',
              cursor: (isComplete && hasReadGuidelines) ? 'pointer' : 'not-allowed',
            }}
            onClick={handleSubmit}
            disabled={!isComplete || !hasReadGuidelines}
            onMouseEnter={(e) => {
              if (isComplete && hasReadGuidelines) {
                e.currentTarget.style.backgroundColor = '#2d5016';
              }
            }}
            onMouseLeave={(e) => {
              if (isComplete && hasReadGuidelines) {
                e.currentTarget.style.backgroundColor = '#52734d';
              }
            }}
          >
            {!hasReadGuidelines 
              ? 'Baca Panduan Terlebih Dahulu' 
              : isComplete 
                ? 'Lihat Hasil' 
                : `Jawab ${questions.length - Object.keys(answers).length} Pertanyaan Lagi`
            }
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Screening;
