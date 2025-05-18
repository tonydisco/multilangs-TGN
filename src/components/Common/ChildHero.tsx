import React from 'react';
import {TitlePageView} from '../Hero';
import {PureImage} from './Images';
import '@/styles/childHeroPage.scss';

const ChildHero = (props: {
  title?: string;
  imageUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const {title, imageUrl} = props;
  return (
    <div
      className="child-page-hero"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className="container h-100">
        <div className="child-page-hero-content h-100">
          <div className="child-hero-title">
            <TitlePageView title={title} />
            <div
              className="child-page-flex-item-default child-page-flex-item-column-default see-more-line"
              style={{
                width: 'max-content',
                alignItems: 'center',
                gap: 10,
                fontSize: 14,
                paddingTop: '2.5rem'
              }}
            >
              <div style={{height: 150, width: 'max-content'}}>
                <PureImage url="https://tgn-cdn.vikiworld.vn/media/see-more_3354485696260734978.svg" />
              </div>
              <span>Xem thêm</span>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default ChildHero;
