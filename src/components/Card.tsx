import React from 'react';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(30, 18, 54, 0.95)',
  borderRadius: '18px',
  boxShadow: '0 4px 32px 0 rgba(162, 89, 255, 0.15)',
  padding: '32px 24px',
  color: '#fff',
  maxWidth: '420px',
  margin: '0 auto',
  position: 'relative',
};

export const Card: React.FC<CardProps> = ({ children, style = {}, className }) => {
  return (
    <div style={{ ...cardStyle, ...style }} className={className}>
      {children}
    </div>
  );
}; 