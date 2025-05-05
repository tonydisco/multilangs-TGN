import {CardBorder} from '@/components/Common/Card';
import {ArrowBorder} from '@/components/Common/IconScripts';
import React from 'react';

const Other = (props: {
  mockData3: {
    title: string;
    contents: string[];
  };
}) => {
  const {mockData3} = props;
  return (
    <CardBorder style={{height: 'auto'}}>
      <div
        className="pd-title"
        style={{
          whiteSpace: 'nowrap'
        }}
      >
        {mockData3.title}
      </div>
      <div>
        {mockData3.contents.map((item, index) => (
          <div key={index} className="pd-item-w-under-line">
            <div className="pd-flex-item-default align-items-center">
              <div
                style={{
                  whiteSpace: 'nowrap'
                }}
              >
                {item}
              </div>
              <ArrowBorder />
            </div>
          </div>
        ))}
      </div>
    </CardBorder>
  );
};

export default Other;
