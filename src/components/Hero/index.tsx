'use client';
import {useTranslations} from 'next-intl';
import React from 'react';
import {PureImage} from '../Common/Images';
import '@/styles/hero.scss';

const HeroView = ({title}: {title?: React.ReactNode}) => {
  const t = useTranslations();

  return (
    <section id="tgn-hero-banner">
      <div className="tgn-hero-background">
        <PureImage url="/landing/HERO-GRID.png" />
      </div>
      <div>
        <div className="tgn-hero-content">
          {title ?? <HeaderTitleView text={t('Slogan')} />}
        </div>
        <div>
          <PureImage url="/landing/HERO-BANNER.png" />
        </div>
      </div>
    </section>
  );
};

const HeaderTitleView = (props: {text?: string}) => {
  const {text} = props;
  return (
    <div>
      <div className="tgn-header-title">
        <PureImage url="/logo/LOGO.svg" />
      </div>
      <p className="tgn-header-title-text">
        {text}
        {/* Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của chúng tôi! */}
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

export {HeaderTitleView, HeroView, TitlePageView};
