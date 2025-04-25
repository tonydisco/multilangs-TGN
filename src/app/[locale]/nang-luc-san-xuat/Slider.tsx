'use client';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';
import {useWindowDimensions} from '@/hooks/common/useWindowDimension';
import {BREAK_POINTS} from '@/utils/config';
import {useMemo, useRef} from 'react';
import Slider from 'react-slick';
// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

const NLSXSlider = () => {
  const {width} = useWindowDimensions();

  const isMobile = useMemo(() => width < BREAK_POINTS.MOBILE, [width]);

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
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
    speed: 300,
    cssEase: 'linear',
    dot: false,
    arrows: false
  };

  return (
    <SectionBase>
      <SectionTitles title="giấy chứng nhận" style={{textAlign: 'center'}} />
      <div
        className="position-relative"
        style={{paddingTop: '50px', paddingBottom: '20px'}}
      >
        <button className="tgn-slider-btn tgn-slider-btn-prev" onClick={onPrev}>
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
        <button className="tgn-slider-btn tgn-slider-btn-next" onClick={onNext}>
          <PureImage url="/icon/ARROW-ICON.svg" />
        </button>
        <div className="container container-mobile">
          <div>
            <Slider {...settings} ref={setSliderRef}>
              {Array.from({length: 4}).map((_, i) => {
                return (
                  <div key={i}>
                    <div
                      style={{
                        margin: 10
                      }}
                    >
                      <PureImage
                        url={`/landing/NLSX/${i + 1}.png`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxWidth: 300,
                          borderRadius: 8
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </SectionBase>
  );
};

export default NLSXSlider;
