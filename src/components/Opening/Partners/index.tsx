import React from 'react';
import PartnersSlider from './Slider';
import {PureImage} from '@/components/Common/Images';

const Partners = () => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '50px 0 0 0'
      }}
    >
      <div className="app-container">
        <div>
          <h2
            style={{
              fontWeight: '700',
              fontSize: '32px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}
          >
            khách hàng - đối tác
          </h2>
          <PartnersSlider />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: -75,
          width: '100%',
          zIndex: -1
        }}
      >
        <PureImage url="/landing/VIDEO-GRID.png" />
      </div>
    </section>
  );
};

export default Partners;
