'use client';

import {PureImage} from '@/components/Common/Images';
import {useRef} from 'react';
import Slider from 'react-slick';
interface TimelineItem {
  year: string;
  text: string;
  imageSrc: string;
}
// Creating hardcoded timeline items since we don't have translations set up yet
const timelineItems: TimelineItem[] = [
  {
    year: '2008',
    text: 'Thế Giới Nhà được thành lập với xuất phát điểm là doanh nghiệp trẻ hoạt động trong lĩnh vực sản xuất và cung ứng bê tông thương phẩm, công suất hoạt động 60m3/giờ.',
    imageSrc: '/landing/ABOUT-US/2008.png'
  },
  {
    year: '2014',
    text: 'Số lượng nhà máy sản xuất bê tông tăng lên 18 nhà máy tập trung chủ yếu ở khu vực Tây Nam Bộ, Đông Nam Bộ, TP. Hồ Chí Minh và khu vực Phú Quốc, đồng thời thành lập các trung tâm sản xuất.Phát triển hệ thống các nhà máy cấu kiện – sử dụng bê tông đúc sẵn.Thành lập trung tâm kỹ thuật và được Bộ Xây Dựng phê duyệt LAS-XD 38.004 với chức năng tập trung nghiên cứu và phát triển sản phẩm, đảm bảo chất lượng toàn hệ thống. ',
    imageSrc: '/landing/ABOUT-US/2014.png'
  },
  {
    year: '2017',
    text: 'Xuất xưởng thành công lô hàng cọc dự ứng lực D600C đầu tiên ra thị trường.Công ty Cổ phần Siêu thị Vật liệu xây dựng Thế Giới Nhà được thành lập mở ra giai đoạn chuyên môn hóa, tập trung vào việc mua bán, phân phối độc quyền các sản phẩm sản xuất từ hệ thống.',
    imageSrc: '/landing/ABOUT-US/2017.png'
  }
];

const Timeline = () => {
  return (
    <section
      className="timeline-section"
      style={{
        backgroundColor: '#f8f9fa',
        padding: '150px 0',
        background: 'url(/landing/ABOUT-US/TIME-LINE-BG.png) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div>
        <div className="mb-4 container">
          <div className="text-center">
            <div
              style={{
                paddingBottom: '100px',
                position: 'relative'
              }}
            >
              <h3 className="tgn-text-gradient-color" style={{fontWeight: 700}}>
                &quot;Sự hài lòng của bạn là thước đo sự tồn tại và phát triển
                của chúng tôi!&quot;
              </h3>
              <div
                style={{
                  maxWidth: 768,
                  position: 'absolute',
                  margin: '0 auto',
                  inset: 0,
                  top: -100
                }}
              >
                <PureImage url="/logo/LOGO-BORDER.svg" />
              </div>
            </div>
            <h2
              className="position-relative tgn-text-base-color"
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              LỊCH SỬ PHÁT TRIỂN
            </h2>
          </div>
        </div>
        <PartnersSlider />
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
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    // cssEase: 'linear',
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
        <div className="position-relative container">
          <div
            className="tgn-partners-slider-btn-left"
            style={{
              position: 'absolute',
              top: -13,
              left: -85
            }}
          >
            <button className="tgn-partners-btn" onClick={onNext}>
              <PureImage url="/icon/ARROW-ICON.svg" />
            </button>
          </div>
          <div
            className="tgn-partners-slider-btn-right"
            style={{
              position: 'absolute',
              top: -13,
              right: -85,
              transform: 'rotate(180deg)'
            }}
          >
            <button className="tgn-partners-btn-prev" onClick={onPrev}>
              <PureImage url="/icon/ARROW-ICON.svg" />
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <Slider {...settings} ref={setSliderRef}>
            {timelineItems.map((item) => (
              <div key={item.year}>
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
                      {item.year}
                    </h3>
                  </div>
                  <div>
                    <div className="position-relative">
                      <PureImage
                        url={item.imageSrc}
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
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
