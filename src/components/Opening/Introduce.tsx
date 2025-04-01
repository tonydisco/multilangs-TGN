import React, {Fragment} from 'react';
import {PureImage} from '../Common/Images';
import Link from 'next/link';

const Introduce = () => {
  return (
    <section>
      <div
        style={{
          backgroundColor: '#FAFAFA',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="app-container"
          style={{
            padding: '150px 0'
          }}
        >
          <div className="base-card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 40,
                alignItems: 'center',
                padding: '15px 25px'
              }}
            >
              <div style={{flex: 1}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    alignItems: 'flex-start'
                  }}
                >
                  <h2
                    style={{
                      fontWeight: '700',
                      fontSize: '32px',
                      textTransform: 'uppercase'
                    }}
                  >
                    giới thiệu
                  </h2>
                  <p style={{fontSize: 14}}>
                    <strong>Thế Giới Nhà Group</strong> hệ thống Siêu thị vật
                    liệu xây dựng hàng đầu, cung cấp giải pháp toàn diện cho mọi
                    công trình.
                  </p>
                  <button className="app-btn-default">
                    <Link href="/about-us">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 8
                        }}
                      >
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 500
                          }}
                        >
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
              <div style={{flex: 1.5}}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      gap: 30
                    }}
                  >
                    {statistics.map((item, index) => {
                      return (
                        <Fragment key={index}>
                          <div
                            style={{
                              flex: 1,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              textAlign: 'center'
                            }}
                          >
                            <PureImage
                              url={item.icon}
                              style={{width: 50, height: '50px'}}
                            />
                            <div style={{marginTop: 20}}>
                              <h2
                                style={{
                                  fontSize: 32,
                                  fontWeight: 700,
                                  color: '#925846'
                                }}
                              >
                                {item.title}
                              </h2>
                              <p style={{fontSize: 14}}>{item.sub}</p>
                            </div>
                          </div>
                          {index !== statistics.length - 1 && (
                            <div className="default-vertical-line" />
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{position: 'relative', padding: '0 0 150px 0'}}>
          <div
            style={{
              position: 'absolute',
              height: '100%',
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <PureImage url="/landing/CONSTRUCTION/OVERLAY.svg" />
          </div>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              className="base-video"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/AJFkU1bC3C0?si=ZmPXd6J_k3iaOqPa"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: 'absolute',
                  height: 500 - 24,
                  borderRadius: 24,
                  width: 800 - 24,
                  zIndex: 1
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%'
          }}
        >
          <PureImage url="/landing/VIDEO-GRID.png" />
        </div>
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
