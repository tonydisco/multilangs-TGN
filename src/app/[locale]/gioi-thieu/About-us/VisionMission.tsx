import {PureImage} from '@/components/Common/Images';
import React from 'react';

const mockData = [
  {
    title: 'Tầm nhìn',
    description:
      'Thế Giới Nhà định hướng phát triển thành hệ thống sản xuất và phân phối vật liệu xây dựng với hệ thống siêu thị có quy mô lớn tại Việt Nam, cung cấp đầy đủ các sản phẩm từ thô, tinh đến hoàn thiện.',
    iconUrl: '/landing/VISION-MISSION/ICON-VISION.svg',
    bgUrl: '/landing/VISION-MISSION/VISION.png'
  },
  {
    title: 'Sứ mệnh',
    description:
      '"Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của chúng tôi."\nThế Giới Nhà cam kết mang đến sản phẩm chất lượng, dịch vụ chuyên nghiệp. Chúng tôi luôn phấn đấu không ngừng để hướng đến mục tiêu chung đó là sự hài lòng của khách hàng, đối tác và cả công, nhân viên công ty hướng đến sự hợp tác lâu dài và bền vững.',
    iconUrl: '/landing/VISION-MISSION/ICON-MISSION.svg',
    bgUrl: '/landing/VISION-MISSION/MISSION.png'
  }
];

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="vision-mission-wrapper">
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: 0,
              zIndex: -1,
              width: '100%'
            }}
          >
            <PureImage url="/landing/VISION-MISSION/GRID-VISION.png" />
          </div>
          <div
            className="d-flex justify-content-center align-items-stretch flex-item-wrapper"
            style={{gap: '1.25rem'}}
          >
            {mockData.map((item, index) => {
              return (
                <VMCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  iconUrl={item.iconUrl}
                  bgUrl={item.bgUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

const VMCard = ({
  title,
  description,
  iconUrl,
  bgUrl
}: {
  title: string;
  description: string;
  iconUrl: string;
  bgUrl: string;
}) => {
  return (
    <div
      style={{
        background: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '24px',
        flex: 1,
        position: 'relative',
        color: 'white',
        padding: '1rem',
        backgroundColor: '#6d3e2f'
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(360deg, #6E3E2F 0%, rgba(146, 88, 70, 0) 97.03%)',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          borderRadius: '24px'
        }}
      />
      <div style={{position: 'relative', zIndex: 2}}>
        <div style={{width: 80, marginBottom: 40}}>
          <PureImage url={iconUrl} />
        </div>
        <div>
          <h2
            style={{
              fontSize: '1.875rem',
              lineHeight: '2.275rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}
          >
            {title}
          </h2>
          <div>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                whiteSpace: 'pre-line'
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
