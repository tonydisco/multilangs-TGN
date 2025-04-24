import {Button} from '@/components/Common/Button';
import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {ImageMode} from '@/models/types';
import {routes} from '@/utils/config';
import React from 'react';
import './projects.scss';

const Projects = () => {
  return (
    <section className="tgn-projects-section">
      <div className="tgn-projects-circle-right">
        <div className="gn-projects-circle-container">
          <PureImage url="/landing/PROJECTS/HAlF-CIRCLE-ICON.png" />
        </div>
      </div>
      <div className="container">
        <div style={{textAlign: 'center'}}>
          <SectionTitles title="dự án thực hiện" />
          <p className="tgn-projects-desc">
            Minh chứng cho chất lượng sản phẩm của <strong>Thế Giới Nhà</strong>{' '}
            chính là hàng loạt dự án tiêu biểu đã tin tưởng sử dụng sản phẩm và
            dịch vụ của chúng tôi. Tiêu biểu có thể kể đến các công trình lớn
            như:
          </p>
        </div>
        <div className="position-relative">
          <div className="tgn-projects-circle-left">
            <div className="tgn-projects-circle-left-container">
              <PureImage url="/landing/PROJECTS/FULL-CIRCLE-ICON.png" />
            </div>
          </div>
          <div className="tgn-projects-grid ">
            <div className="tgn-projects-col-left">
              <div className="tgn-projects-col-items">
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
                      className="tgn-img-responsive"
                    />
                  );
                })}
              </div>
            </div>
            <div className="tgn-projects-col-right">
              <div className="tgn-projects-col-right-items">
                <div className="tgn-projects-row">
                  {project_2.map((item, index) => {
                    return (
                      <CardProject
                        key={index}
                        title={item.title}
                        img={item.img}
                        className="tgn-img-responsive"
                      />
                    );
                  })}
                </div>
                <CardProject
                  title="metro line 1"
                  img="/landing/PROJECTS/METRO.png"
                  className="tgn-img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tgn-projects-footer">
          <Button
            btnProps={{
              text: 'Xem thêm tất cả dự án',
              linkTo: routes.project
            }}
          />
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
  mode,
  className
}: {
  title: string;
  img: string;
  style?: React.CSSProperties;
  mode?: ImageMode;
  className?: string;
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
      className={className}
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
