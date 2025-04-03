import {PureImage} from '@/components/Common/Images';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
  return (
    <div style={{padding: '50px 0'}}>
      <div>
        <div
          className="grid-container"
          style={{margin: '0 10px', padding: '0 10px'}}
        >
          {mockProducts.map((item, idx) => {
            const itemIndex = 1 + idx;
            if (itemIndex > 10) return null; // Stop rendering after 60 items
            return (
              <div
                className="grid-item base-card-full-border"
                key={itemIndex}
                style={{
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  height: 'auto'
                }}
              >
                <div
                  style={{
                    padding: 12,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    gap: 30
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 30
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: '#000',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.title}
                    </div>
                    <div>
                      <button
                        className="app-btn-default"
                        style={{
                          textAlign: 'center',
                          padding: 5,
                          width: 30,
                          height: 30,
                          borderRadius: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Link href="/du-an">
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: 8
                            }}
                          >
                            <PureImage
                              style={{width: 12}}
                              url="/landing/ICON-ARROW.svg"
                            />
                          </div>
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#DFDFDF',
                      overflow: 'hidden',
                      borderRadius: 16
                    }}
                    className="card-img-wrapper"
                  >
                    <PureImage url={item.image} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
const mockProducts = [
  {
    title: 'bê tông thương phẩm',
    image: '/landing/PRODUCTS/PROJECT_ICO_1.png'
  },
  {
    title: 'cống btct rung ép',
    image: '/landing/PRODUCTS/PROJECT_ICO_2.png'
  },
  {
    title: 'cọc bê tông ly tâm dự ứng lực',
    image: '/landing/PRODUCTS/PROJECT_ICO_3.png'
  },
  {
    title: 'gạch tuynel',
    image: '/landing/PRODUCTS/PROJECT_ICO_4.png'
  },
  {
    title: 'gạch terrazzo',
    image: '/landing/PRODUCTS/PROJECT_ICO_5.png'
  },
  {
    title: 'gạch không nung',
    image: '/landing/PRODUCTS/PROJECT_ICO_6.png'
  },
  {
    title: 'gạch tự chèn',
    image: '/landing/PRODUCTS/PROJECT_ICO_7.png'
  },
  {
    title: 'các sản phẩm cấu kiện BT KHÁC',
    image: '/landing/PRODUCTS/PROJECT_ICO_8.png'
  },
  {
    title: 'sản phẩm khai thác mỏ',
    image: '/landing/PRODUCTS/PROJECT_ICO_9.png'
  },
  {
    title: 'sản phẩm phân phối khác',
    image: '/landing/PRODUCTS/PROJECT_ICO_10.png'
  }
];
