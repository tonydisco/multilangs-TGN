import React from 'react';

const Nodata = () => {
  return (
    <div style={{padding: '2rem', display: 'flex', justifyContent: 'center'}}>
      <div
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          color: '#555'
        }}
      >
        <p>No data available</p>
      </div>
    </div>
  );
};

export default Nodata;
