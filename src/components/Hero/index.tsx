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

const TitlePageView = ({
  title,
  className
}: {
  title?: React.ReactNode | string;
  className?: string;
}) => {
  return (
    <>
      {typeof title === 'string' ? (
        <h2
          className={`tgn-title-page tgn-text-page-title ${className ?? ''} `}
        >
          {title}
        </h2>
      ) : (
        title
      )}
    </>
  );
};

const SubPageView = ({text}: {text?: React.ReactNode | string}) => {
  return <p className="tgn-header-title-text">{text}</p>;
};

export {HeaderTitleView, HeroView, TitlePageView, SubPageView};
