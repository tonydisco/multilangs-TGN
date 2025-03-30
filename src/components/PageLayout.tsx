import {ReactNode} from 'react';
import {PureImage} from './Common/Images';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Readonly<Props>) {
  console.log('====================================');
  console.log({title}, {children});
  console.log('====================================');
  return (
    <div>
      <section className="hero">
        <div className="relative">
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
              width: '100%'
            }}
          >
            <PureImage url="/landing/HERO-GRID.png" />
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                padding: '6rem'
              }}
            >
              <div>
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: '36rem'
                  }}
                >
                  <PureImage url="/logo/LOGO.svg" />
                </div>
                <p
                  style={{
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    marginTop: '2rem',
                    color: '#6E3E2F'
                  }}
                >
                  Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của
                  chúng tôi!
                </p>
              </div>
            </div>
            <div>
              <PureImage url="/landing/HERO-BANNER.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div
          style={{
            background: 'url(/landing/ABOUT-US/ABOUT-US-BD.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '680px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="flex justify-center items-center mx-auto p-24 max-w-6xl">
            <div
              className="rounded-[24px]  p-8 text-white"
              style={{
                backgroundColor: 'rgba(110, 62, 47, 0.8)',
                backdropFilter: 'blur(3px)'
              }}
            >
              <h2 className="text-center text-5xl font-bold mb-6">
                Về chúng tôi
              </h2>
              <div>
                <p className="mb-5">
                  <strong>Thế Giới Nhà Group</strong> - hoạt động trong lĩnh vực
                  sản xuất và cung cấp vật liệu xây dựng tại Việt Nam.
                </p>
                <p className="mb-5">
                  Khởi đầu từ một doanh nghiệp nhỏ vào năm 2008, trong suốt hơn
                  15 năm qua, TGN group đã không ngừng phát triển và khẳng định
                  thương hiệu, uy tín trong ngành xây dựng.
                </p>
                <p className="mb-5">
                  Thế Giới Nhà Group hoạt động chủ yếu trong các lĩnh vực:
                  <br />- Sản xuất bê tông tươi và cấu kiện bê tông <br /> -
                  Phân phối đa dạng các loại vật liệu xây dựng từ thô đến hoàn
                  thiện.
                </p>
                <p>
                  {`Với sứ mệnh "Sự hài lòng của bạn là thước đo sự tồn tại và
                phát triển của chúng tôi”, TGN group luôn phấn đấu không ngừng
                để hướng đến mục tiêu chung là sự hài lòng của Quý Khách hàng.
                TGN group đã xây dựng một hệ thống gồm 3 trụ sở văn phòng, 26
                nhà máy sản xuất trải dài khắp các vùng kinh tế trọng điểm
                phía Nam, cùng đội ngũ hơn 1.500 cán bộ - nhân viên không
                ngừng làm việc và cống hiến, chúng tôi tự tin vào chất lượng
                sản phẩm và dịch vụ của mình.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      lĩnh vực sản xuất và cung cấp bê tông thương phẩm, cấu
                      kiện bê tông đúc sẵn và vật liệu xây dựng, khẳng định vị
                      thế tại Việt Nam và vươn tầm khu vực.
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
                      Sự hài lòng của bạn là thước đo sự tồn tại và phát triển
                      của chúng tôi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
