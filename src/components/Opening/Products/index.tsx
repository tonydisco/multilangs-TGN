import React from 'react';
import {PureImage} from '@/components/Common/Images';
import Link from 'next/link';
import ProductList from './ProductList';
import './products.css';

const Products = () => {
  return (
    <section className="tgn-products-section">
      <div className="container">
        <div className="tgn-products-content">
          <div className="tgn-products-info">
            <h2 className="tgn-products-title">sản phẩm</h2>
            <p className="tgn-products-desc">
              <strong>Thế Giới Nhà</strong> cung cấp đa dạng sản phẩm vật liệu
              xây dựng, từ bê tông thương phẩm, cấu kiện bê tông đúc sẵn đến các
              vật liệu hoàn thiện, đáp ứng mọi nhu cầu của công trình với chất
              lượng cao và độ bền vượt trội.
            </p>
          </div>
          <div className="tgn-products-btn-container">
            <button className="app-btn-default">
              <Link href="/du-an">
                <div className="tgn-products-btn-content">
                  <span className="tgn-products-btn-text">
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
