import React from 'react';
import './style.css';
import {PureImage} from '@/components/Common/Images';
import Link from 'next/link';

const list = [
  {
    title: 'Lĩnh vực sản xuất',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group sở hữu hệ thống nhà máy hiện đại,
        sản xuất đa dạng vật liệu xây dựng đạt tiêu chuẩn chất lượng cao, đáp
        ứng nhu cầu cho mọi công trình.
      </p>
    ),
    image: '',
    linkTo: ''
  },
  {
    title: 'Sản xuất bê tông thương phẩm',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group cung cấp bê tông tươi chất lượng
        cao, đảm bảo độ bền và đáp ứng tiêu chuẩn kỹ thuật.
      </p>
    ),
    image: '/landing/LVHD/LVSX/BTTP.png',
    linkTo: '/'
  },
  {
    title: 'sản xuất gạch tuynel',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group sản xuất gạch Tuynel chất lượng cao
        bằng công nghệ hiện đại, đảm bảo độ bền, khả năng chịu lực tốt.
      </p>
    ),
    image: '/landing/LVHD/LVSX/GACH.png',
    linkTo: '/'
  },
  {
    title: 'Sản xuất cấu kiện Bê Tông',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group sản xuất đa dạng cấu kiện như cọc,
        tấm tường, cống bê tông, gạch bê tông... phù hợp với nhiều hạng mục xây
        dựng.
      </p>
    ),
    image: '/landing/LVHD/LVSX/CKBT.png',
    linkTo: '/'
  }
];
const FieldOfProduction = () => {
  return (
    <div className="field-of-production-wrapper">
      <div className="container">
        <div className="mt-10" style={{padding: '150px 0'}}>
          <div className="row">
            {list.map((item, index) => {
              if (index === 0) {
                return (
                  <div
                    key={item.title}
                    className="col-12 col-md-6 col-lg-6 field-of-production-item"
                  >
                    <h2 className="tgn-page-title text-start">{item.title}</h2>
                    <div
                      style={{
                        marginTop: 20
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={item.title}
                  className={`col-12 col-md-6 col-lg-6 field-of-production-item ${index > 1 ? 'mt-4' : ''}`}
                >
                  <div
                    className="base-card-full-border base-card-full-border-fop"
                    style={{
                      padding: 24,
                      position: 'relative',
                      height: 300
                    }}
                  >
                    <div className="d-flex align-items-stretch h-100 gap-3">
                      <div className="field-of-production-item__content h-100 w-100">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <h3 className="tgn-box-title">{item.title}</h3>
                            <div
                              style={{
                                color: '#616161',
                                marginTop: 20
                              }}
                              className="fs-12px md:fs-14px"
                            >
                              {item.content}
                            </div>
                          </div>
                          <div>
                            <button className="app-btn-default">
                              <Link href={item.linkTo}>
                                <div className="app-btn-default-flex">
                                  <span style={{fontWeight: 500}}>
                                    Xem chi tiết
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
                      </div>
                      <div className="field-of-production-item__image w-100">
                        <div className="w-100 h-100 overflow-hidden rounded-4">
                          <PureImage url={item.image} mode="cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldOfProduction;
