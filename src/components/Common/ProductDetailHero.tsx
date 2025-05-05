import React from 'react';
import {TitlePageView} from '../Hero';
import {PureImage} from './Images';

const ProductDetailHero = (props: {
  title?: string;
  imageUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const {title, imageUrl} = props;
  return (
    <div
      className="pd-hero"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className="container">
        <div className="pd-hero-content">
          <div style={{paddingTop: 10}}>
            <TitlePageView title={title} />
            <div
              className="pd-flex-item-default pd-flex-item-column-default"
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

export default ProductDetailHero;
