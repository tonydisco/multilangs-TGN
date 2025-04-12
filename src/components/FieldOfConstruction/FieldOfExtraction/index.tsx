import React from 'react';
import './style.css';
import {PureImage} from '@/components/Common/Images';
import Link from 'next/link';

const list = [
  {
    title: 'Lĩnh vực khai thác',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> trực tiếp khai thác và cung ứng nguồn
        nguyên vật liệu chất lượng, đảm bảo chuỗi cung ứng bền vững và tối ưu
        chi phí cho khách hàng.
      </p>
    ),
    image: '',
    linkTo: ''
  },
  {
    title: 'khai thác các loại đất đá',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> hiện đang khai thác các loại đất, đá tại
        hai mỏ Thiện Tân và Tân Cang (Đồng Nai), cung cấp nguồn nguyên liệu thô
        chất lượng cao cho ngành xây dựng.
      </p>
    ),
    image: '/landing/LVHD/LVKT/MODA.png',
    linkTo: '/'
  }
];
const FieldOfExtraction = () => {
  return (
    <div className="field-of-extraction-wrapper">
      <div className="container">
        <div className="mt-10" style={{padding: '200px 0 150px 0'}}>
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

export default FieldOfExtraction;
