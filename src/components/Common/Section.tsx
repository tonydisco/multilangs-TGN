import React from 'react';

import '@/styles/sections.css';

interface ISectionProps {
  children: React.ReactNode;
  bgImage?: string;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  className?: string;
  contentClassName?: string;
}

const SectionBase = ({
  children,
  bgImage,
  style,
  className,
  contentStyle,
  contentClassName
}: ISectionProps) => {
  return (
    <section
      className={`section-wrapper ${className ?? ''}`}
      style={{
        ...(bgImage ? {backgroundImage: `url(${bgImage})`} : {}),
        ...style
      }}
    >
      <div className="container">
        <div
          style={{padding: '100px 0 150px 0', ...contentStyle}}
          className={contentClassName ?? ''}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export {SectionBase};
