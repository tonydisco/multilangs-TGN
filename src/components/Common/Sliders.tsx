'use client';
import {ReactNode, useMemo, useRef} from 'react';
import {PureImage} from './Images';
import Slider from 'react-slick';
import {useWindowDimensions} from '@/hooks/common/useWindowDimension';
import FontAwIcons from './FontAwIcons';

const MAX_SLIDES_TO_SHOW = 3;

// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

interface IBaseSliderProps {
  renderList: Array<any>;
  total?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  cssEase?: string;
  controllerType?: 'default' | 'custom';
  slideTitle?: string | ReactNode;
}

const BaseSlider = ({
  renderList,
  slidesToShow = MAX_SLIDES_TO_SHOW,
  slidesToScroll = 1,
  speed = 300,
  cssEase = 'linear',
  controllerType,
  slideTitle,
  total
}: IBaseSliderProps) => {
  const sliderRef = useRef<SlickRefType | null>(null);

  const {width} = useWindowDimensions();

  const _slideToShow = useMemo(() => {
    if (width <= 768) {
      return 1;
    }
    return slidesToShow ?? MAX_SLIDES_TO_SHOW;
  }, [width, slidesToShow]);

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
    infinite: !!total && total >= MAX_SLIDES_TO_SHOW,
    slidesToShow: _slideToShow,
    slidesToScroll: slidesToScroll,
    speed: speed,
    cssEase: cssEase,
    dot: false,
    arrows: false,
    vertical: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: MAX_SLIDES_TO_SHOW,
          slidesToScroll: slidesToScroll
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: slidesToScroll
        }
      }
    ]
  };

  const btnNavLeft = (
    <button
      className="tgn-partners-btn"
      onClick={onNext}
      style={{height: 'auto'}}
    >
      <FontAwIcons iconName="fa-solid fa-circle-chevron-left tgn-text-gradient-color" />
    </button>
  );
  const btnNavRight = (
    <button
      className="tgn-partners-btn-prev"
      onClick={onPrev}
      style={{height: 'auto'}}
    >
      <FontAwIcons iconName="fa-solid fa-circle-chevron-right tgn-text-gradient-color" />
    </button>
  );
  return (
    <div className="job-detail-slider-wrapper position-relative">
      {(() => {
        if (controllerType === 'custom') {
          if (_slideToShow === 1) {
            return (
              <div
                className="job-detail-flex-slider"
                style={{textAlign: 'left', padding: '25px 0'}}
              >
                {slideTitle}
              </div>
            );
          }
          return slideTitle ? (
            <>
              <div className="job-detail-flex-slider">
                {slideTitle}
                <div className="job-detail-btn-flex">
                  {btnNavLeft}
                  {btnNavRight}
                </div>
              </div>
            </>
          ) : (
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0
              }}
            >
              <div className="job-detail-btn-flex">
                {btnNavLeft}
                {btnNavRight}
              </div>
            </div>
          );
        }
        return (
          <div className="controller-btns-slider">
            <div className="position-relative job-detail-btn-flex">
              {btnNavLeft}
              {btnNavRight}
            </div>
          </div>
        );
      })()}
      <Slider {...settings} ref={setSliderRef}>
        {renderList}
      </Slider>
    </div>
  );
};

export {BaseSlider};
