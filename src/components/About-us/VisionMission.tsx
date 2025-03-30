import React from 'react';
import {PureImage} from '../Common/Images';

const VisionMission = () => {
  return (
    <section className="vision-mission">
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
        <div className="flex justify-center  mx-auto p-10 max-w-6xl gap-5 item-stretch">
          <div
            className="rounded-[24px] bg-browMain p-4 text-white flex-1 relative"
            style={{
              background: 'url(/landing/VISION-MISSION/VISION.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
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
                <h2 className="text-3xl font-bold uppercase mb-3">sứ mệnh</h2>
                <div>
                  <p className="text-[14px] font-semibold">
                    Trở thành TGN Group vững mạnh, phát triển bền vững trong
                    lĩnh vực sản xuất và cung cấp bê tông thương phẩm, cấu kiện
                    bê tông đúc sẵn và vật liệu xây dựng, khẳng định vị thế tại
                    Việt Nam và vươn tầm khu vực.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-[24px] bg-browMain p-4 text-white flex-1 relative"
            style={{
              background: 'url(/landing/VISION-MISSION/MISSION.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
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
                <h2 className="text-3xl font-bold uppercase mb-3">sứ mệnh</h2>
                <div>
                  <p className="text-[14px] font-semibold">
                    Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của
                    chúng tôi
                  </p>
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
