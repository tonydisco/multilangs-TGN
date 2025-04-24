'use client';
import {CardBase} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {useWindowDimensions} from '@/hooks/common/useWindowDimension';
import {BREAK_POINTS, routes} from '@/utils/config';
import {useMemo, useRef} from 'react';
import Slider from 'react-slick';

import {v4 as uuid} from 'uuid';
// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

function ProductionSlider() {
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
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    dot: false,
    arrows: false
  };
  return (
    <div className="container">
      <div className="tgn-slider-btn-container">
        <div className="tgn-slider-controls">
          <button onClick={onPrev} className="tgn-slider-btn">
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
          <button
            onClick={onNext}
            className="tgn-slider-btn tgn-slider-btn-next"
          >
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={setSliderRef}>
        {sliderMock.map((item) => {
          return (
            <div key={uuid()}>
              <div className="tgn-slider-item-container">
                <CardBase
                  item={{
                    title: item.title,
                    content: item.sub,
                    image: item.img,
                    linkTo: routes.productionCapacity,
                    btnText: 'Xem thêm',
                    cardStyle: {
                      padding: 16,
                      borderRadius: 16,
                      height: isMobile ? '555px' : 300
                    },
                    imageStyle: {
                      borderRadius: 16,
                      overflow: 'hidden'
                    },
                    className: 'card-inner-custom',
                    imgClassName: 'img-inner-custom'
                  }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductionSlider;

const sliderMock = [
  {
    title: 'Hệ thống nhà máy sản xuất bê tông',
    sub: (
      <p>
        <strong>Thế Giới Nhà</strong> sở hữu 19 trạm trộn hiện đại, sẵn sàng
        cung cấp bê tông thương phẩm đạt tiêu chuẩn chất lượng cao.
      </p>
    ),
    img: '/landing/PRODUCTION-CAPACITY/SLIDER-1.png'
  },
  {
    title: 'Hệ thống Sản xuất sản phẩm cầu kiện',
    sub: (
      <p>
        <strong>Thế Giới Nhà</strong> sở hữu 9 nhà máy cấu kiện bê tông đúc sẵn
        với công nghệ tiên tiến, đáp ứng yêu cầu kỹ thuật và tiến độ xây dựng.
      </p>
    ),
    img: '/landing/PRODUCTION-CAPACITY/SLIDER-2.png'
  },
  {
    title: 'phòng kiểm định chất lượng',
    sub: (
      <p>
        <strong>Thế Giới Nhà</strong> sở hữu hệ thống kiểm định đạt chuẩn, kiểm
        soát chặt chẽ chất lượng sản phẩm từ nguyên liệu đầu vào đến thành phẩm,
        đảm bảo độ đánh giá kết quả chính xác và nhanh chóng.
      </p>
    ),
    img: '/landing/PRODUCTION-CAPACITY/SLIDER-3.png'
  },
  {
    title: 'hệ thống\n trang - thiết bị',
    sub: (
      <p>
        <strong>Thế Giới Nhà</strong> sở hữu hệ thống các trang - thiết bị hiện
        đại, đa dạng đảm bảo cho chất lượng và tiến độ của sản phẩm ở trạng thái
        tốt nhất.
      </p>
    ),
    img: '/landing/PRODUCTION-CAPACITY/SLIDER-4.png'
  },
  {
    title: 'giấy chứng nhận',
    sub: (
      <p>
        <strong>Thế Giới Nhà</strong> sở hữu hệ thống kiểm định đạt chuẩn, kiểm
        soát chặt chẽ chất lượng sản phẩm từ nguyên liệu đầu vào đến thành phẩm,
        đảm bảo độ bền và an toàn cao nhất.
      </p>
    ),
    img: '/landing/PRODUCTION-CAPACITY/SLIDER-5.png'
  }
];
