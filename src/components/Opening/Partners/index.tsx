import React from 'react';
import PartnersSlider from './Slider';
import {PureImage} from '@/components/Common/Images';
import './partners.scss';
import {SectionTitles} from '@/components/Common/Titles';

const Partners = () => {
  return (
    <section className="tgn-partners-section">
      <div className="container">
        <div>
          <SectionTitles title="khách hàng - đối tác" />
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
