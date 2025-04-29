import {Button} from '@/components/Common/Button';
import {SectionTitles} from '@/components/Common/Titles';
import {routes} from '@/utils/config';
import {Fragment} from 'react';
import {v4 as uuid} from 'uuid';
import {PureImage} from '../../Common/Images';
import {CardBorder} from '@/components/Common/Card';

const Introduce = () => {
  return (
    <section className="tgn-introduce-section">
      <div className="tgn-introduce-container">
        <div className="container">
          <div className="base-card">
            <div className="tgn-introduce-card">
              <div className="tgn-introduce-left">
                <div>
                  <SectionTitles title="giới thiệu" />
                  <p className="tgn-introduce-desc">
                    <strong>Thế Giới Nhà</strong> hệ thống Siêu thị vật liệu xây
                    dựng hàng đầu, cung cấp giải pháp toàn diện cho mọi công
                    trình.
                  </p>
                  <Button
                    btnProps={{
                      text: 'Về chúng tôi',
                      linkTo: routes.about
                    }}
                  />
                </div>
              </div>
              <div className="tgn-introduce-right">
                <div className="tgn-flex-wrapper-width-pseudo">
                  {statistics.map((item) => (
                    <Fragment key={uuid()}>
                      <div className="tgn-flex-item-width-pseudo">
                        <div className="tgn-stat-item-content">
                          <PureImage
                            url={item.icon}
                            style={{width: 50, height: 'auto', flex: 1}}
                          />
                          <div style={{flex: 2}}>
                            <h2 className="tgn-introduce-stat-title">
                              {item.title}
                            </h2>
                            <p className="tgn-introduce-stat-sub">{item.sub}</p>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tgn-introduce-video-section">
        <div className="tgn-introduce-video-overlay">
          <PureImage url="/landing/CONSTRUCTION/OVERLAY.svg" />
        </div>
        <div className="container">
          <div className="tgn-introduce-video-container">
            <CardBorder
              style={{height: 600, maxWidth: 992, position: 'relative'}}
            >
              <iframe
                src="https://www.youtube.com/embed/AJFkU1bC3C0?si=ZmPXd6J_k3iaOqPa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  height: '100%',
                  borderRadius: 24,
                  width: '100%'
                }}
                className="tgn-introduce-iframe"
              />
            </CardBorder>
          </div>
        </div>
      </div>
      <div className="tgn-introduce-video-grid">
        <PureImage url="/landing/VIDEO-GRID.png" />
      </div>
    </section>
  );
};

export default Introduce;

const statistics = [
  {
    title: '16+',
    sub: 'Năm đồng hành và phát triển',
    icon: '/landing/ICON-INTRO-BUILDING.svg'
  },
  {
    title: '1500+',
    sub: 'Nhân sự',
    icon: '/landing/ICON-INTRO-PEOPLE.svg'
  },
  {
    title: '26',
    sub: 'Nhà máy',
    icon: '/landing/ICON-INTRO-FACTORY.svg'
  },
  {
    title: '03',
    sub: 'Văn phòng',
    icon: '/landing/ICON-INTRO-OFFICE.svg'
  }
];
