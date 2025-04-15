import React from 'react';

interface ITitlesProps {
  title: string;
  style?: React.CSSProperties;
}

const SectionTitles = ({title, style}: ITitlesProps) => {
  return (
    <h2
      className={`position-relative tgn-text-base-color`}
      style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        ...style
      }}
    >
      {title}
    </h2>
  );
};

export {SectionTitles};
