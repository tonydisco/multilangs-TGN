import {ImageMode, PureImage} from '@/components/Common/Images';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <section
      style={{
        backgroundColor: '#EDDFD8',
        position: 'relative',
        padding: '50px 30px',
        margin: '0 30px',
        borderRadius: 24,
        overflow: 'hidden'
      }}
      className="section-projects"
    >
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          right: 0,
          width: 450
        }}
      >
        <div
          style={{
            maxWidth: 700
          }}
        >
          <PureImage url="/landing/PROJECTS/HAlF-CIRCLE-ICON.png" />
        </div>
      </div>
      <div className="app-container">
        <div style={{textAlign: 'center'}}>
          <h2
            style={{
              fontWeight: '700',
              fontSize: '32px',
              textTransform: 'uppercase'
            }}
          >
            dự án thực hiện
          </h2>
          <p
            style={{
              maxWidth: 600,
              margin: '0 auto',
              fontSize: 14,
              padding: '12px 0'
            }}
          >
            Minh chứng cho chất lượng sản phẩm của{' '}
            <strong>Thế Giới Nhà Group</strong> chính là hàng loạt dự án tiêu
            biểu đã tin tưởng sử dụng sản phẩm và dịch vụ của chúng tôi. Tiêu
            biểu có thể kể đến các công trình lớn như:
          </p>
        </div>
        <div
          style={{
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -100,
              left: -150,
              width: '100%',
              height: '100%'
            }}
          >
            <div
              style={{
                width: 300
              }}
            >
              <PureImage url="/landing/PROJECTS/FULL-CIRCLE-ICON.png" />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 25,
              padding: '50px 0',
              alignItems: 'stretch'
            }}
          >
            <div style={{flex: 1.3}}>
              <div
                style={{
                  display: 'flex',
                  gap: 25,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                {project_1.map((item, index) => {
                  return (
                    <CardProject
                      key={index}
                      title={item.title}
                      img={item.img}
                      style={{
                        height: '100%'
                      }}
                      mode="cover"
                    />
                  );
                })}
              </div>
            </div>
            <div style={{flex: 2}}>
              <div style={{display: 'flex', gap: 25, flexDirection: 'column'}}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  {project_2.map((item, index) => {
                    return (
                      <CardProject
                        key={index}
                        title={item.title}
                        img={item.img}
                      />
                    );
                  })}
                </div>
                <CardProject
                  title="metro line 1"
                  img="/landing/PROJECTS/METRO.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <button className="app-btn-default">
            <Link href="/du-an">
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
                  Xem thêm tất cả dự án
                </span>
                <PureImage style={{width: 12}} url="/landing/ICON-ARROW.svg" />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const CardProject = ({
  title,
  img,
  style,
  mode
}: {
  title: string;
  img: string;
  style?: React.CSSProperties;
  mode?: ImageMode;
}) => {
  return (
    <div
      style={{
        borderRadius: 24,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        ...style
      }}
    >
      <PureImage url={img} mode={mode} />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize: 16,
          color: '#fff',
          left: 0,
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
          width: '100%'
        }}
      >
        <div style={{padding: '15px 20px'}}>{title}</div>
      </div>
    </div>
  );
};

const project_1 = [
  {
    title: 'Đường cao tốc biên hòa - vũng tàu',
    img: '/landing/PROJECTS/HIGH-WAY.png'
  },
  {
    title: 'Đường vành đai 3',
    img: '/landing/PROJECTS/BELT-WAY.png'
  }
];

const project_2 = [
  {
    title: 'sân bay quốc tế long thành',
    img: '/landing/PROJECTS/AIRPORT.png'
  },
  {
    title: 'Vinhome central park',
    img: '/landing/PROJECTS/VINHOME.png'
  }
];
