import React, {Fragment} from 'react';
import {PureImage} from '../../Common/Images';
import Link from 'next/link';

const Introduce = () => {
  return (
    <section className="tgn-introduce-section">
      <div className="tgn-introduce-container">
        <div className="container base-card">
          <div className="tgn-introduce-card">
            <div className="tgn-introduce-left">
              <div className="tgn-introduce-content">
                <h2 className="tgn-introduce-title">giới thiệu</h2>
                <p className="tgn-introduce-desc">
                  <strong>Thế Giới Nhà</strong> hệ thống Siêu thị vật liệu xây
                  dựng hàng đầu, cung cấp giải pháp toàn diện cho mọi công
                  trình.
                </p>
                <button className="app-btn-default">
                  <Link href="/about-us">
                    <div className="tgn-introduce-btn">
                      <span className="tgn-introduce-btn-text">
                        Về chúng tôi
                      </span>
                      <PureImage
                        style={{width: 12}}
                        url="/landing/ICON-ARROW.svg"
                      />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
            <div className="tgn-introduce-right">
              <div className="tgn-introduce-statistics">
                {statistics.map((item, index) => (
                  <Fragment key={index}>
                    <div className="tgn-introduce-stat-item">
                      <PureImage
                        url={item.icon}
                        style={{width: 50, height: '50px'}}
                      />
                      <div>
                        <h2 className="tgn-introduce-stat-title">
                          {item.title}
                        </h2>
                        <p className="tgn-introduce-stat-sub">{item.sub}</p>
                      </div>
                    </div>
                    {index !== statistics.length - 1 && (
                      <div className="default-vertical-line" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tgn-introduce-video-section">
        <div className="tgn-introduce-video-overlay">
          <PureImage url="/landing/CONSTRUCTION/OVERLAY.svg" />
        </div>
        <div className="tgn-introduce-video-container">
          <div className="base-video tgn-introduce-video">
            <iframe
              // className="tgn-introduce-iframe"
              src="https://www.youtube.com/embed/AJFkU1bC3C0?si=ZmPXd6J_k3iaOqPa"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: 'absolute',
                height: 600 - 24,
                borderRadius: 24,
                width: 992 - 24,
                zIndex: 1
              }}
              className="tgn-introduce-iframe"
            />
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
