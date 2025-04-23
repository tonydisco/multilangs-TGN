'use client';
import {CardBase} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {useRef} from 'react';
import Slider from 'react-slick';
// Add this type definition
type SlickRefType = {
  slickPrev: () => void;
  slickNext: () => void;
};

function ProductionSlider() {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    dot: false,
    arrows: false
  };
  return (
    <div className="container">
      <div style={{padding: '24px 0'}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 20,
            zIndex: 20
          }}
        >
          <button
            style={{
              right: 0,
              bottom: 0,
              height: '25px',
              width: '25px'
            }}
            onClick={onPrev}
          >
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
          <button
            style={{
              right: 0,
              bottom: 0,
              height: '25px',
              width: '25px',
              transform: 'rotate(180deg)'
            }}
            onClick={onNext}
          >
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={setSliderRef}>
        {sliderMock.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="2"
                style={{
                  margin: 10
                }}
              >
                <CardBase
                  item={{
                    title: item.title,
                    content: item.sub,
                    image: item.img,
                    linkTo: '/nang-luc-san-xuat',
                    btnText: 'Xem thêm',
                    cardStyle: {
                      padding: 16,
                      borderRadius: 16,
                      height: 300
                    },
                    imageStyle: {
                      flex: 1,
                      borderRadius: 16,
                      overflow: 'hidden'
                    }
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
