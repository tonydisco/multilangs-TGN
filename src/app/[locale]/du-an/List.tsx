'use client';
import {CardBorder} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import React, {useState} from 'react';

const ProjectList = ({locale}: {locale: string}) => {
  console.log('locale', locale);

  const [projectData, setProjectData] = useState({
    data: mockData,
    loading: false,
    total: mockData.length,
    page: 1,
    limit: 6
  });

  const onNext = () => {
    if (projectData.page * projectData.limit < projectData.total) {
      setProjectData({
        ...projectData,
        page: projectData.page + 1
      });
    }
  };

  const onPrev = () => {
    if (projectData.page > 1) {
      setProjectData({
        ...projectData,
        page: projectData.page - 1
      });
    }
  };
  const startIndex = (projectData.page - 1) * projectData.limit;
  const endIndex = startIndex + projectData.limit;
  const data = projectData.data.slice(startIndex, endIndex);

  return (
    <div className="row align-items-center">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="col-4 mx-auto"
            style={{
              marginTop: index >= 3 ? 20 : 0
            }}
          >
            <CardBorder style={{width: '100%', padding: 16}}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                <PureImage
                  url={item.image}
                  mode="cover"
                  style={{borderRadius: 16}}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 30,
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: 700,
                    zIndex: 2
                  }}
                >
                  {item.title}
                </div>
                <div className="overlay-project"></div>
              </div>
            </CardBorder>
          </div>
        );
      })}
      <div
        className="pagination"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 20
        }}
      >
        <div style={{display: 'flex', gap: 20}}>
          <button className="tgn-partners-btn" onClick={onPrev}>
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>

          {[...Array(Math.ceil(projectData.total / projectData.limit))].map(
            (_, index) => {
              const activeItem = projectData.page === index + 1;
              return (
                <div key={index}>
                  <button
                    onClick={() =>
                      setProjectData({...projectData, page: index + 1})
                    }
                    style={{
                      fontSize: 16,
                      width: 30,
                      height: 30,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '100%',
                      color: activeItem ? '#834e3d' : '#616161',
                      fontWeight: 500,
                      border: `1px solid ${activeItem ? '#834e3d' : 'transparent'}`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {index + 1}
                  </button>
                </div>
              );
            }
          )}
          <button
            className="tgn-partners-btn-prev"
            style={{
              transform: 'rotate(180deg)'
            }}
            onClick={onNext}
          >
            <PureImage url="/icon/ARROW-ICON.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

const mockData = [
  {
    id: 1,
    title: 'Cao tốc bến lức - long thành',
    image: '/landing/PROJECTS/PROJECT_1.png',
    description: 'Mô tả dự án 1'
  },
  {
    id: 2,
    title: 'cao tốc biên hòa - vũng tàu',
    image: '/landing/PROJECTS/PROJECT_2.png',
    description: 'Mô tả dự án 2'
  },
  {
    id: 3,
    title: 'bệnh viện mới củ chi',
    image: '/landing/PROJECTS/PROJECT_3.png',
    description: 'Mô tả dự án 3'
  },
  {
    id: 4,
    title: 'cao tốc cần thơ - cà mau',
    image: '/landing/PROJECTS/PROJECT_4.png',
    description: 'Mô tả dự án 4'
  },
  {
    id: 5,
    title: 'cao tốc châu đốc - cần thơ',
    image: '/landing/PROJECTS/PROJECT_5.png',
    description: 'Mô tả dự án 5'
  },
  {
    id: 6,
    title: 'cao tốc dầu dây - phan thiết',
    image: '/landing/PROJECTS/PROJECT_6.png',
    description: 'Mô tả dự án 6'
  },
  {
    id: 7,
    title: 'dự án gem sky world',
    image: '/landing/PROJECTS/PROJECT_7.png',
    description: 'Mô tả dự án 7'
  },
  {
    id: 8,
    title:
      'khu thương mại biệt thự và chung cư cao cấp thái sơn, long an (t&T Milennia city)',
    image: '/landing/PROJECTS/PROJECT_8.png',
    description: 'Mô tả dự án 8'
  },
  {
    id: 9,
    title: 'sân bay quốc tế long thành',
    image: '/landing/PROJECTS/PROJECT_9.png',
    description: 'Mô tả dự án 9'
  },
  {
    id: 10,
    title: 'Cao tốc bến lức - long thành',
    image: '/landing/PROJECTS/PROJECT_10.png',
    description: 'Mô tả dự án 10'
  }
];
