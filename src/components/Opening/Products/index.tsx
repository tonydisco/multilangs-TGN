import React from 'react';
import {PureImage} from '@/components/Common/Images';
import Link from 'next/link';
import ProductList from './ProductList';

const Products = () => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '150px 0 0 0'
      }}
    >
      <div className="app-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div className="part-container">
            <h2
              style={{
                fontWeight: '700',
                fontSize: '32px',
                textTransform: 'uppercase'
              }}
            >
              sản phẩm
            </h2>
            <p
              style={{
                maxWidth: 600,
                margin: '0 auto',
                fontSize: 14,
                padding: '12px 0'
              }}
            >
              <strong>Thế Giới Nhà Group</strong> cung cấp đa dạng sản phẩm vật
              liệu xây dựng, từ bê tông thương phẩm, cấu kiện bê tông đúc sẵn
              đến các vật liệu hoàn thiện, đáp ứng mọi nhu cầu của công trình
              với chất lượng cao và độ bền vượt trội.
            </p>
          </div>
          <div>
            <button className="app-btn-default" style={{textAlign: 'center'}}>
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
                    Xem thêm tất cả sản phẩm
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
        <ProductList />
      </div>
      <div
        style={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          display: 'flex',
          top: '0',
          left: '-52%',
          zIndex: -1
        }}
      >
        <PureImage style={{maxWidth: 600}} url="/icon/CIRCLE-FULL-ICO.svg" />
      </div>
    </section>
  );
};

export default Products;
