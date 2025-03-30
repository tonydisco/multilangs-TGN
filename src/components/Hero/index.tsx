import React from 'react';
import {PureImage} from '../Common/Images';

const HeroView = ({title}: {title?: React.ReactNode}) => {
  return (
    <section className="hero">
      <div className="relative">
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            width: '100%'
          }}
        >
          <PureImage url="/landing/HERO-GRID.png" />
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              padding: '6rem'
            }}
          >
            {title ?? <TitleView />}
          </div>
          <div>
            <PureImage url="/landing/HERO-BANNER.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TitleView = () => {
  return (
    <div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '36rem'
        }}
      >
        <PureImage url="/logo/LOGO.svg" />
      </div>
      <p
        style={{
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 600,
          textAlign: 'center',
          marginTop: '2rem',
          color: '#6E3E2F'
        }}
      >
        Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của chúng tôi!
      </p>
    </div>
  );
};

export {HeroView, TitleView};
