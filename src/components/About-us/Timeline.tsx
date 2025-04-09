import React from 'react';
import Image from 'next/image';
import {PureImage} from '../Common/Images';

interface TimelineItem {
  year: string;
  text: string;
  imageSrc: string;
}

const Timeline = () => {
  // Creating hardcoded timeline items since we don't have translations set up yet
  const timelineItems: TimelineItem[] = [
    {
      year: '2008',
      text: 'Thế Giới Nhà được thành lập với xuất phát điểm là doanh nghiệp nhỏ hoạt động trong lĩnh vực sản xuất và cung ứng bê tông thương phẩm, cống xuất hoạt động 60m3/giờ.',
      imageSrc: '/landing/ABOUT-US/2008.png'
    },
    {
      year: '2014',
      text: 'Số lượng nhà máy sản xuất bê tông tăng lên 18 nhà máy tập trung tại Đồng Nai, TP. Hồ Chí Minh và khu vực Phú Quốc, đồng thời thành lập các trung tâm Phát triển hệ thống các nhà máy cấu kiện - xử dụng bê tông đúc sẵn. Thành lập và mở rộng trụ sở tại Bà Rịa - Vũng Tàu dựa trên LARS XG 300m³/giờ có năng suất tập trung nghiên cứu và phát triển sản phẩm, đảm bảo chất lượng toàn hệ thống.',
      imageSrc: '/landing/ABOUT-US/2014.png'
    },
    {
      year: '2017',
      text: 'Xuất xưởng thành công lô hàng cọc dự ứng lực ĐƯỢC đầu tiên ra thị trường Việt Nam. Công ty đã triển khai thành công dự án sử dụng Thế hiện có để sản xuất trụ đúc sẵn và các sản phẩm bê tông nhẹ khác, tập trung vào phát triển phân phối độc quyền các sản phẩm sản xuất từ hệ thống.',
      imageSrc: '/landing/ABOUT-US/2017.png'
    }
  ];

  return (
    <section
      className="timeline-section py-5"
      style={{backgroundColor: '#f8f9fa', padding: '4rem 0'}}
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2
              className="text-center mb-4 tgn-text-gradient-color"
              style={{fontWeight: 700}}
            >
              &quot;Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của
              chúng tôi!&quot;
            </h2>
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

        <div
          className="position-relative mt-5"
          style={{paddingTop: '30px', paddingBottom: '20px'}}
        >
          <div
            style={{
              position: 'absolute',
              top: '60px',
              left: 0,
              right: 0,
              height: '2px',
              borderTop: '2px dashed #ccc',
              zIndex: 1
            }}
          ></div>

          <div className="row">
            {timelineItems.map((item) => (
              <div key={item.year} className="col-md-4">
                <div style={{height: '30px', position: 'relative'}}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '45px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 2
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#7d6c56',
                        border: '4px solid white'
                      }}
                    ></span>
                  </div>
                </div>

                <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                  <h3
                    style={{
                      fontSize: '2rem',
                      color: '#a57f5c',
                      fontWeight: 700,
                      marginTop: '1rem'
                    }}
                  >
                    {item.year}
                  </h3>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: '1rem',
                      marginBottom: '1.5rem',
                      textAlign: 'center'
                    }}
                  >
                    {item.text}
                  </p>
                  <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                    <PureImage
                      url={item.imageSrc}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
