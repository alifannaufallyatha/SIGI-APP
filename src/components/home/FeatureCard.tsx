import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, href }) => (
  <a href={href} style={{
    display: 'block',
    border: '1px solid #eee',
    borderRadius: 12,
    padding: 16,
    textAlign: 'center',
    background: '#fff',
    textDecoration: 'none',
    color: '#222',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </a>
);

export default FeatureCard;
