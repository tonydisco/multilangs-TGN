'use client';

import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {useWindowDimensions} from '@/hooks/common/useWindowDimension';
import {ITimelineProps} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {BREAK_POINTS} from '@/utils/config';
import {useMemo, useRef} from 'react';
import Slider from 'react-slick';

const Timeline = (props: ITimelineProps) => {
  const {roadMap} = props;

  if (!roadMap.posts) {
    return null;
  }
  return (
    <section
      className="timeline-section"
      style={{
        background: 'url(/landing/ABOUT-US/TIME-LINE-BG.png) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div>
        <div className="mb-4 container">
          <div className="text-center">
            <SectionTitles title="lịch sử phát triển" />
          </div>
        </div>
        <PartnersSlider roadMap={roadMap} />
      </div>
    </section>
  );
};

export default Timeline;

// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

function PartnersSlider(props: ITimelineProps) {
  const {roadMap} = props;
  const {locale} = useAppContext();

  const sliderRef = useRef<SlickRefType | null>(null);

  const {width} = useWindowDimensions();

  const isMobile = useMemo(() => width < BREAK_POINTS.MOBILE, [width]);

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
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    speed: 300,
    cssEase: 'linear',
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
          top: '105px',
          left: 0,
          right: 0,
          height: '2px'
        }}
        className="tgn-dashed"
      >
        <div className="position-relative container tgn-pc-only">
          <button
            className="tgn-partners-btn"
            onClick={onPrev}
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
            onClick={onNext}
          >
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
        </div>
      </div>

      <div className="container">
        <div>
          <Slider {...settings} ref={setSliderRef}>
            {roadMap.posts.map((item) => {
              const findContentsByLocale = item.contents.find(
                (content) => content.language === locale
              );
              return (
                <div key={item.id}>
                  <div
                    className="position-relative"
                    style={{
                      margin: 30
                    }}
                  >
                    <div style={{marginBottom: '1.5rem'}}>
                      <h3
                        style={{
                          fontSize: '2rem',
                          fontWeight: 700,
                          marginTop: '1rem'
                        }}
                        className="tgn-text-gradient-color"
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div>
                      <div className="position-relative">
                        <PureImage
                          url={item.featuredImageUrl}
                          className="img-fluid"
                          style={{borderRadius: 16}}
                        />
                        <div
                          style={{
                            zIndex: 2,
                            top: -75,
                            left: -30,
                            position: 'absolute',
                            height: '200px'
                          }}
                        >
                          <div className="line-w-dot"></div>
                        </div>
                        <p
                          style={{
                            fontSize: '1rem',
                            marginTop: '1.5rem'
                          }}
                        >
                          {findContentsByLocale?.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
