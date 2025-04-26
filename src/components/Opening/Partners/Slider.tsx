'use client';
import {PureImage} from '@/components/Common/Images';
import {ISliderItem} from '@/models/interface';
import {useRef} from 'react';
import Slider from 'react-slick';

// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

function PartnersSlider(props: {sliderData: Array<ISliderItem>}) {
  const {sliderData} = props;
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
    speed: 100,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    dot: false,
    arrows: false,
    autoplay: true,
    rtl: true
  };

  const itemsPerSlide = 20;

  const maxSliderPages = Math.ceil(sliderData.length / itemsPerSlide);
  return (
    <div className="tgn-partners-slider-container">
      <div className="tgn-partners-slider-btn tgn-partners-slider-btn-left tgn-pc-only">
        <button onClick={onNext}>
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
      </div>
      <div className="tgn-partners-slider-btn tgn-partners-slider-btn-right tgn-pc-only">
        <button className="tgn-transform-rotate" onClick={onPrev}>
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
      </div>
      <Slider {...settings} ref={setSliderRef}>
        {Array.from({length: maxSliderPages}).map((_, index) => {
          const startIndex = index * itemsPerSlide;

          return (
            <div key={`partner-slide-${index}`}>
              <div className="tgn-partners-grid-container grid-container">
                {sliderData
                  .slice(startIndex, startIndex + itemsPerSlide)
                  .map((item, idx) => {
                    return (
                      <div
                        className="tgn-partners-grid-item grid-item base-card-full-border"
                        key={`partner-${idx}`}
                      >
                        <div className="tgn-partners-logo-container">
                          <PureImage
                            url={item.url}
                            alt={item?.title ?? item?.name}
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
