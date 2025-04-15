'use client';
import {useRef} from 'react';
import {PureImage} from './Images';
import Slider from 'react-slick';

// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

interface IBaseSliderProps {
  rederList: any;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  cssEase?: string;
}

const BaseSlider = ({
  rederList,
  slidesToShow = 3,
  slidesToScroll = 1,
  speed = 300,
  cssEase = 'linear'
}: Readonly<IBaseSliderProps>) => {
  const sliderRef = useRef<SlickRefType | null>(null);

  const onPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const onNext = () => {
    sliderRef.current?.slickNext();
  };
  // Update the ref callback to use const instead of reassignment
  const setSliderRef = (slider: SlickRefType | null) => {
    sliderRef.current = slider;
  };

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    speed: speed,
    cssEase: cssEase,
    dot: false,
    arrows: false
  };
  return (
    <div
      className="position-relative mt-5"
      style={{paddingTop: '30px', paddingBottom: '20px'}}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0
        }}
      >
        <div className="position-relative container">
          <button
            className="tgn-partners-btn"
            onClick={onNext}
            style={{
              position: 'absolute',
              top: -13,
              left: -50
            }}
          >
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
          <button
            className="tgn-partners-btn-prev"
            style={{
              top: -13,
              right: -50,
              position: 'absolute',
              transform: 'rotate(180deg)'
            }}
            onClick={onPrev}
          >
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
        </div>
      </div>

      <div className="container">
        <div>
          <Slider {...settings} ref={setSliderRef}>
            {rederList}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export {BaseSlider};
