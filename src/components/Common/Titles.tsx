import React from 'react';

interface ITitlesProps {
  title: string | React.ReactNode;
  style?: React.CSSProperties;
}

const SectionTitles = ({title, style}: ITitlesProps) => {
  return (
    <h2
      className="position-relative tgn-text-base-color tgn-headding-section"
      style={{
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
        textAlign: 'left',
        ...style
      }}
      className="fs-12px md:fs-14px tgn-text-gray-color"
    >
      {text}
    </div>
  );
};

const TitleInCard = ({title}: {title: string}) =>
  title ? <div style={{fontSize: 20, fontWeight: 600}}>{title}</div> : null;

export {SectionTitles, SectionSub, TitleInCard};
