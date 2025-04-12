import React from 'react';
import './style.css';
import Link from 'next/link';
import {PureImage} from '@/components/Common/Images';

const FieldOfBusiness = () => {
  return (
    <div className="field-of-business-wrapper">
      <div className="container">
        <div
          style={{
            padding: '100px 0',
            textAlign: 'center'
          }}
        >
          <h2 className="tgn-page-title ">Lĩnh vực kinh doanh</h2>
          <div
            style={{
              marginTop: 20
            }}
          >
            <strong>Thế Giới Nhà Group</strong> vận hành hệ thống Siêu thị vật
            liệu xây dựng quy mô lớn, cung cấp <br /> giải pháp toàn diện với
            danh mục sản phẩm phong phú từ thô đến hoàn thiện.
          </div>
          <div className="mt-5">
            <div className="row">
              {fieldOfBusinessList.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={`col-12 col-md-6 col-lg-6 ${index > 1 ? 'mt-4' : ''}`}
                  >
                    <div
                      className="base-card-full-border base-card-full-border-fop"
                      style={{
                        padding: 24,
                        position: 'relative',
                        height: 340
                      }}
                    >
                      <div className="d-flex align-items-stretch h-100 gap-3">
                        <div className="field-of-production-item__content h-100 w-100">
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div>
                              <h3
                                className="tgn-box-title text-start"
                                style={{fontSize: 22}}
                              >
                                {item.title}
                              </h3>
                              <div
                                style={{
                                  color: '#616161',
                                  marginTop: 20
                                }}
                                className="text-start fs-12px md:fs-14px"
                              >
                                {item.content}
                              </div>
                            </div>
                            <div className="text-start">
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
    </div>
  );
};

export default FieldOfBusiness;

const fieldOfBusinessList = [
  {
    title: 'Cung ứng bê tông thương phẩm, cấu kiện bê tông',
    content: (
      <p>
        <strong> Thế Giới Nhà Group</strong> cung ứng trực tiếp bê tông thương
        phẩm, cấu kiện bê tông đúc sẵn, đáp ứng tiêu chuẩn chất lượng cao cho
        mọi công trình.
      </p>
    ),
    image: '/landing/LVHD/LVKD/CUBT.png',
    linkTo: ''
  },
  {
    title: 'phân phối vật liệu xây dựng',
    content: (
      <p>
        Bên cạnh sản phẩm tự sản xuất, <strong>Thế Giới Nhà Group</strong> còn
        phân phối đa dạng vật liệu xây dựng từ các thương hiệu uy tín, bao gồm
        xi măng, sắt thép, gạch, sơn, và các vật liệu hoàn thiện khác.
      </p>
    ),
    image: '/landing/LVHD/LVKD/PPVLXD.png',
    linkTo: '/'
  }
];
