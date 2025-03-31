import React, {Fragment} from 'react';
import {PureImage} from '../Common/Images';
// import {PureImage} from '../Common/Images';

const Opening = () => {
  return (
    <div
      style={{
        height: 1500,
        backgroundColor: '#FAFAFA'
      }}
    >
      <div
        className="app-container"
        style={{
          padding: '100px 0'
        }}
      >
        <div
          style={{
            border: '1px solid',
            borderImageSource:
              'linear-gradient(180deg, #FFFFFF 0%, #FFC6B5 100%)',
            backgroundColor: '#fff',
            padding: '15px 25px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 40,
              alignItems: 'center'
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
                  <strong>Thế Giới Nhà Group</strong> hệ thống Siêu thị vật liệu
                  xây dựng hàng đầu, cung cấp giải pháp toàn diện cho mọi công
                  trình.
                </p>
                <button className="app-btn-default">
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
      <div className="base-card">content</div>
    </div>
  );
};

export default Opening;

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
    sub: 'nhà máy',
    icon: '/landing/ICON-INTRO-FACTORY.svg'
  },
  {
    title: '03',
    sub: 'văn phòng',
    icon: '/landing/ICON-INTRO-OFFICE.svg'
  }
];
