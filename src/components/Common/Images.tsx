import {ImageMode} from '@/models/types';
import Image from 'next/image';
import React from 'react';

interface ILogoProps {
  url?: string;
  alt?: string;
  mode?: ImageMode;
  className?: string;
  style?: React.CSSProperties;
}

const PureImage: React.FC<ILogoProps> = ({
  url,
  mode,
  className,
  style = {},
  alt
}) => {
  return (
    <Image
      priority
      src={url ?? '/logo/LOGO.svg'}
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        objectFit: mode ?? 'contain',
        ...style
      }}
      alt={alt ? `${alt}` : `${url}`}
      className={className ?? ''}
    />
  );
};

export {PureImage};
