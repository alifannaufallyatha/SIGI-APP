import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  { title: 'Screening', description: 'Mulai tes screening.', href: '/screening' },
  { title: 'Hasil Tes', description: 'Lihat hasil tes Anda.', href: '/hasil-tes' },
  { title: 'Edukasi', description: 'Materi edukasi kesehatan.', href: '/edukasi' },
  { title: 'Konsultasi', description: 'Konsultasi dengan ahli.', href: '/konsultasi' },
];

const FeatureGrid: React.FC = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: 16,
    width: '100%',
    maxWidth: 400,
    margin: '0 auto'
  }}>
    {features.map((f, i) => (
      <FeatureCard key={i} {...f} />
    ))}
  </div>
);

export default FeatureGrid;
