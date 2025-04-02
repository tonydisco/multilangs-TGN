import React from 'react';
import PartnersSlider from './Slider';

const Partners = () => {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        position: 'relative',
        padding: '150px 0'
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
    </section>
  );
};

export default Partners;
