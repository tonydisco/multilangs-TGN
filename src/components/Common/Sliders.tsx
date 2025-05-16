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
  renderList: Array<any>;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  cssEase?: string;
  controllerType?: 'default' | 'custom';
}

const BaseSlider = ({
  renderList,
  slidesToShow = 3,
  slidesToScroll = 1,
  speed = 300,
  cssEase = 'linear',
  controllerType
}: IBaseSliderProps) => {
  const sliderRef = useRef<SlickRefType | null>(null);

  const onPrev = () => {
    sliderRef.current?.slickNext();
  };

  const onNext = () => {
    sliderRef.current?.slickPrev();
  };
  // Update the ref callback to use const instead of reassignment
  const setSliderRef = (slider: SlickRefType | null) => {
    sliderRef.current = slider;
  };

  const settings = {
    focusOnSelect: true,
    infinite: slidesToShow > 3,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    speed: speed,
    cssEase: cssEase,
    dot: false,
    arrows: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const btnNavLeft = (
    <button
      className="tgn-partners-btn"
      onClick={onNext}
      style={{width: 25, height: 25}}
    >
      <PureImage url="/icon/ARROW-ICON.svg" />
    </button>
  );
  const btnNavRight = (
    <button
      className="tgn-partners-btn-prev"
      style={{
        transform: 'rotate(180deg)',
        width: 25,
        height: 25
      }}
      onClick={onPrev}
    >
      <PureImage url="/icon/ARROW-ICON.svg" />
    </button>
  );
  return (
    <div
      className="position-relative mt-5"
      style={{paddingTop: '30px', paddingBottom: '20px'}}
    >
      {controllerType === 'default' ? (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0
          }}
        >
          <div className="position-relative container">
            {btnNavLeft}
            {btnNavRight}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
        >
          <div style={{display: 'flex', gap: 30, alignItems: 'center'}}>
            {btnNavLeft}
            {btnNavRight}
          </div>
        </div>
      )}

      <div className="container">
        <Slider {...settings} ref={setSliderRef}>
          {renderList}
        </Slider>
      </div>
    </div>
  );
};

export {BaseSlider};
