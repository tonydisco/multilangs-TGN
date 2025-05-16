'use client';
import {ReactNode, useMemo, useRef} from 'react';
import {PureImage} from './Images';
import Slider from 'react-slick';
import {useWindowDimensions} from '@/hooks/common/useWindowDimension';

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
    return MAX_SLIDES_TO_SHOW;
  }, [width]);

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
    <div className="job-detail-slider-wrapper">
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
                <div className="job-detai-btn-flex">
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
              <div className="job-detai-btn-flex">
                {btnNavLeft}
                {btnNavRight}
              </div>
            </div>
          );
        }
        return (
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
        );
      })()}
      <Slider {...settings} ref={setSliderRef}>
        {renderList}
      </Slider>
    </div>
  );
};

export {BaseSlider};
