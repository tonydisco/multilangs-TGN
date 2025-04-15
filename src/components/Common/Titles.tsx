import React from 'react';

interface ITitlesProps {
  title: string | React.ReactNode;
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
const SectionSub = ({
  text,
  style
}: {
  text: string | React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        marginTop: 20,
        color: '#616161',
        textAlign: 'left',
        ...style
      }}
      className="fs-12px md:fs-14px"
    >
      {text}
    </div>
  );
};

export {SectionTitles, SectionSub};
