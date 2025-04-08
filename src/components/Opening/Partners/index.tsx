import React from 'react';
import PartnersSlider from './Slider';
import {PureImage} from '@/components/Common/Images';
import './partners.css';

const Partners = () => {
  return (
    <section className="tgn-partners-section">
      <div className="app-container">
        <div>
          <h2 className="tgn-partners-title">
            khách hàng - đối tác
          </h2>
          <PartnersSlider />
        </div>
      </div>
      <div className="tgn-partners-grid-bottom">
        <PureImage url="/landing/VIDEO-GRID.png" />
      </div>
    </section>
  );
};

export default Partners;
