import React from 'react';

import '@/styles/sections.css';

interface ISectionProps {
  children: React.ReactNode;
  bgImage?: string;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const SectionBase = ({
  children,
  bgImage,
  style,
  contentStyle
}: ISectionProps) => {
  return (
    <div
      className="section-wrapper"
      style={{
        ...(bgImage ? {backgroundImage: `url(${bgImage})`} : {}),
        ...style
      }}
    >
      <div className="container">
        <div style={{padding: '150px 0', ...contentStyle}}>{children}</div>
      </div>
    </div>
  );
};

export {SectionBase};
