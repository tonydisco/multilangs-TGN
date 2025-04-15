import React from 'react';

import '@/styles/sections.css';

interface ISectionProps {
  children: React.ReactNode;
  bgImage?: string;
  style?: React.CSSProperties;
}

const SectionBase = ({children, bgImage, style}: ISectionProps) => {
  return (
    <div
      className="section-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        ...style
      }}
    >
      <div className="container">
        <div style={{padding: '150px 0'}}>{children}</div>
      </div>
    </div>
  );
};

export {SectionBase};
