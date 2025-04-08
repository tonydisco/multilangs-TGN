import {PureImage} from '@/components/Common/Images';
import Link from 'next/link';
import React from 'react';
import './products.css';

const ProductList = () => {
  return (
    <div className="tgn-product-list-container">
      <div>
        <div className="tgn-product-grid-container grid-container">
          {mockProducts.map((item, idx) => {
            const itemIndex = 1 + idx;
            if (itemIndex > 10) return null; // Stop rendering after 60 items
            return (
              <div
                className="tgn-product-grid-item grid-item base-card-full-border"
                key={`product-${itemIndex}`}
              >
                <div className="tgn-product-item-content">
                  <div className="tgn-product-item-header">
                    <div className="tgn-product-item-title">
                      {item.title}
                    </div>
                    <div>
                      <button className="app-btn-default tgn-product-item-btn">
                        <Link href="/du-an">
                          <div className="tgn-product-item-btn-content">
                            <PureImage
                              className="tgn-product-item-arrow"
                              url="/landing/ICON-ARROW.svg"
                            />
                          </div>
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="tgn-product-item-image-wrapper card-img-wrapper">
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
