import React from 'react';
import {PureImage} from '../Common/Images';
// import {PureImage} from '../Common/Images';

const Opening = () => {
  return (
    <div
      style={{
        height: 500
      }}
    >
      <div className="app-container">
        <div className="gradient-border">
          <div style={{width: 200, height: 150}}>
            <PureImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
