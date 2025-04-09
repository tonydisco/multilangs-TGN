import React from 'react';
import {PureImage} from '../Common/Images';
import './hero.css';

const HeroView = ({title}: {title?: React.ReactNode}) => {
  return (
    <section className="tgn-hero">
      <div className="tgn-hero-background">
        <PureImage url="/landing/HERO-GRID.png" />
      </div>
      <div>
        <div className="tgn-hero-content">{title ?? <HeaderTitleView />}</div>
        <div>
          <PureImage url="/landing/HERO-BANNER.png" />
        </div>
      </div>
    </section>
  );
};

const HeaderTitleView = () => {
  return (
    <div>
      <div className="tgn-header-title">
        <PureImage url="/logo/LOGO.svg" />
      </div>
      <p className="tgn-header-title-text">
        Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của chúng tôi!
      </p>
    </div>
  );
};

const TitlePageView = ({title}: {title?: React.ReactNode | string}) => {
  return (
    <div>
      {typeof title === 'string' ? (
        <h2 className="tgn-title-page">{title}</h2>
      ) : (
        title
      )}
    </div>
  );
};

export {HeroView, HeaderTitleView, TitlePageView};
