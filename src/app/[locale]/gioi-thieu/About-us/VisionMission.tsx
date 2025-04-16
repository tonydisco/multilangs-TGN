import React from 'react';
import {PureImage} from '../../../../components/Common/Images';

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <div
          style={{
            height: '500px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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
            className="d-flex justify-content-center align-items-stretch"
            style={{gap: '1.25rem'}}
          >
            <div
              style={{
                background: 'url(/landing/VISION-MISSION/VISION.png)',
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
                  <PureImage url="/landing/VISION-MISSION/ICON-VISION.svg" />
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
                    tầm nhìn
                  </h2>
                  <div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                    >
                      Trở thành TGN Group vững mạnh, phát triển bền vững trong
                      lĩnh vực sản xuất và cung cấp bê tông thương phẩm, cấu
                      kiện bê tông đúc sẵn và vật liệu xây dựng, khẳng định vị
                      thế tại Việt Nam và vươn tầm khu vực.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: 'url(/landing/VISION-MISSION/MISSION.png)',
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
                  <PureImage url="/landing/VISION-MISSION/ICON-MISSION.svg" />
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
                    sứ mệnh
                  </h2>
                  <div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                    >
                      Sự hài lòng của bạn là thước đo sự tồn tại và phát triển
                      của chúng tôi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
