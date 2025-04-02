'use client';
import {PureImage} from '@/components/Common/Images';
import {useRef} from 'react';
import Slider from 'react-slick';
// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

function PartnersSlider() {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    dot: false,
    arrows: false
  };
  return (
    <div style={{padding: '50px 0', position: 'relative'}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 20,
          zIndex: 20,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: -50
        }}
      >
        <button
          style={{
            right: 0,
            bottom: 0,
            height: '20px',
            width: '20px'
          }}
          onClick={onNext}
        >
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 20,
          zIndex: 20,
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: -50
        }}
      >
        <button
          style={{
            right: 0,
            bottom: 0,
            height: '25px',
            width: '25px',
            transform: 'rotate(180deg)'
          }}
          onClick={onPrev}
        >
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
      </div>
      <Slider {...settings} ref={setSliderRef}>
        {Array.from({length: 3}).map((_, index) => {
          const itemsPerSlide = 20;
          const startIndex = index * itemsPerSlide;
          // const endIndex = startIndex + itemsPerSlide;

          return (
            <div key={index}>
              <div className="grid-container">
                {Array.from({length: itemsPerSlide}).map((_, idx) => {
                  const itemIndex = startIndex + idx;
                  if (itemIndex >= 59) return null; // Stop rendering after 60 items
                  return (
                    <div
                      className="grid-item base-card-full-border"
                      key={itemIndex}
                    >
                      <div style={{padding: 24, width: '100%', height: '100%'}}>
                        <PureImage
                          url={`/landing/PARTNER/PARTNER_LOGO_${itemIndex + 1}.png`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PartnersSlider;
