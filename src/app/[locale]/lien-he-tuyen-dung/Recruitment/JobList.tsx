import {CardBorder} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import Pagination from '@/components/Common/Pagination';
import React, {useState} from 'react';

const JobList = () => {
  const [jobPagin, setJobPagin] = useState({
    data: mockJobData,
    loading: false,
    total: mockJobData.length,
    page: 1,
    limit: 6
  });

  const handleNext = () => {
    if (jobPagin.page * jobPagin.limit < jobPagin.total) {
      setJobPagin({
        ...jobPagin,
        page: jobPagin.page + 1
      });
    }
  };

  const handlePrev = () => {
    if (jobPagin.page > 1) {
      setJobPagin({
        ...jobPagin,
        page: jobPagin.page - 1
      });
    }
  };

  const onPaginationChange = (page: number) => {
    setJobPagin({
      ...jobPagin,
      page
    });
  };
  const startIndex = (jobPagin.page - 1) * jobPagin.limit;
  const endIndex = startIndex + jobPagin.limit;
  const data = jobPagin.data.slice(startIndex, endIndex);

  return (
    <div style={{paddingTop: 100}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: 25,
          flexWrap: 'wrap'
        }}
      >
        {data.map((item, index) => {
          return (
            <div key={index} style={{width: '32%'}}>
              <CardBorder style={{height: '100%'}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                  }}
                >
                  <div>
                    <PureImage
                      url={item.image}
                      style={{
                        width: '180px',
                        marginBottom: 28,
                        height: 'auto'
                      }}
                    />
                    <div className="tgn-title-max-two-lines">
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 700
                        }}
                      >
                        Vị trí:{' '}
                      </span>
                      <span>{item.title}</span>
                    </div>
                    <div
                      style={{marginTop: 10}}
                      className="tgn-title-max-two-lines"
                    >
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 700
                        }}
                      >
                        Yêu cầu:{' '}
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 400
                        }}
                      >
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      className="default-horizone-line"
                      style={{opacity: 0.3, margin: '20px 0'}}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: 10
                        }}
                      >
                        {item.tag.map((tag, index) => {
                          return (
                            <div
                              key={index}
                              style={{
                                backgroundColor: '#F2F2F2',
                                padding: '5px 10px',
                                borderRadius: 36,
                                fontSize: 13
                              }}
                            >
                              {tag.name}
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <div
                          style={{
                            borderBottom: '1px solid #6d3e2f'
                          }}
                        >
                          <span
                            className="tgn-text-brow-color"
                            style={{
                              fontWeight: 600
                            }}
                          >
                            Chi tiết
                          </span>
                          <PureImage
                            style={{width: 20, marginLeft: 10}}
                            url="/icon/ARROW-BROW.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBorder>
            </div>
          );
        })}
      </div>
      <div style={{marginTop: 50, display: 'flex', justifyContent: 'center'}}>
        <Pagination
          page={jobPagin.page}
          total={jobPagin.total}
          limit={jobPagin.limit}
          onPrev={handlePrev}
          onNext={handleNext}
          onPageChange={onPaginationChange}
        />
      </div>
    </div>
  );
};

export default JobList;

const mockJobData = [
  {
    title:
      'Thợ vận hành máy cắt CNC Plasma, Laser, Oxy, Bending, Thủy lực, Hàn, Cắt, Đột, Bào',
    description:
      'Tuổi từ 18 - 35, không yêu cầu bằng cấp, trung thực, năng động, chủ động trong công việc.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '10 - 12 triệu'
      },
      {
        name: 'Đồng Nai'
      }
    ]
  },
  {
    title: 'Kỹ sư cơ khí',
    description:
      'Tốt nghiệp đại học chuyên ngành cơ khí, có kinh nghiệm thiết kế và vận hành máy móc.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '15 - 20 triệu'
      },
      {
        name: 'TP. Hồ Chí Minh'
      }
    ]
  },
  {
    title: 'Nhân viên kinh doanh',
    description:
      'Có kỹ năng giao tiếp tốt, ưu tiên ứng viên có kinh nghiệm trong lĩnh vực kinh doanh, bán hàng.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '8 - 12 triệu'
      },
      {
        name: 'Hà Nội'
      }
    ]
  },
  {
    title: 'Thợ hàn',
    description:
      'Có chứng chỉ nghề, chăm chỉ, chịu khó, ưu tiên ứng viên có kinh nghiệm.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '9 - 11 triệu'
      },
      {
        name: 'Bình Dương'
      }
    ]
  },
  {
    title: 'Nhân viên thiết kế',
    description:
      'Có kinh nghiệm sử dụng phần mềm thiết kế, sáng tạo và có khả năng làm việc nhóm.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '12 - 15 triệu'
      },
      {
        name: 'Đà Nẵng'
      }
    ]
  },
  {
    title: 'Quản lý sản xuất',
    description:
      'Có kinh nghiệm quản lý sản xuất, am hiểu quy trình sản xuất và quản lý nhân sự.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '20 - 25 triệu'
      },
      {
        name: 'TP. Hồ Chí Minh'
      }
    ]
  },
  {
    title: 'Nhân viên kho',
    description:
      'Có kinh nghiệm làm việc trong kho, chăm chỉ, cẩn thận và có khả năng làm việc độc lập.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '7 - 10 triệu'
      },
      {
        name: 'Long An'
      }
    ]
  },
  {
    title: 'Kỹ thuật viên bảo trì',
    description:
      'Có kinh nghiệm bảo trì máy móc, có khả năng làm việc dưới áp lực cao.',
    image: '/landing/RECRUITMENT-LOGO.png',
    tag: [
      {
        name: '12 - 15 triệu'
      },
      {
        name: 'Bắc Ninh'
      }
    ]
  }
];
