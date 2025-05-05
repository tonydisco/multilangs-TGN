'use client';
import {Button} from '@/components/Common/Button';
import {PureImage} from '@/components/Common/Images';
import React, {useState} from 'react';

const Slider = (props: {
  mockData: {
    title: string;
    image: string[];
    contents: {
      title: string;
      content: string;
    }[];
  };
}) => {
  const {mockData} = props;

  const [defaultSliderIndex, setDefaultSliderIndex] = useState(0);

  const onPrev = () => {
    console.log('prev');
    if (defaultSliderIndex === 0) {
      setDefaultSliderIndex(mockData.image.length - 1);
    } else {
      setDefaultSliderIndex(defaultSliderIndex - 1);
    }
  };

  const onNext = () => {
    console.log('next');

    if (defaultSliderIndex === mockData.image.length - 1) {
      setDefaultSliderIndex(0);
    } else {
      setDefaultSliderIndex(defaultSliderIndex + 1);
    }
  };

  console.log({defaultSliderIndex});

  return (
    <div className="pd-flex-item-default">
      <div className="pd-slider">
        {mockData.image.map((item, index) => (
          <div
            key={index}
            className={`pd-slider-item ${index === defaultSliderIndex ? 'active' : ''}`}
          >
            <PureImage url={item} mode="cover" />
          </div>
        ))}
        <button
          className="tgn-slider-controller tgn-slider-btn-prev"
          onClick={onPrev}
        >
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
        <button
          className="tgn-slider-controller tgn-slider-btn-next"
          onClick={onNext}
        >
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
      </div>
      <div
        className="pd-flex-item-default pd-flex-item-column-default"
        style={{flex: 1}}
      >
        <div>
          <div className="pd-title pd-title-uppercase">{mockData.title}</div>
          <div className="pd-description">
            <div>
              {mockData.contents.map((item, index) => (
                <div key={index}>
                  <div className="title">{`${index + 1}. ${item.title}`}</div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.content
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Button
            btnProps={{
              text: 'Xem bảng báo giá'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
