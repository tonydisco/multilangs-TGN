import React from 'react';

const FontAwIcons = (props: {
  iconName: string;
  color?: string;
  size?: number;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const {iconName, size, className = '', style} = props;
  return (
    <i
      className={`${iconName ?? 'fa-solid fa-circle-chevron-left'}` + className}
      style={{fontSize: size ?? 24, ...style}}
    />
  );
};

export default FontAwIcons;
