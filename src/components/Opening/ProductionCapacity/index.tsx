import Link from 'next/link';
import {Fragment} from 'react';
import {PureImage} from '../../Common/Images';
import ProductionSlider from './Slider';

const ProductionCapacity = () => {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        position: 'relative',
        padding: '150px 0'
      }}
    >
      <div className="app-container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }}
        >
          <div style={{flex: 1}}>
            <div>
              <h2
                style={{
                  fontWeight: '700',
                  fontSize: '32px',
                  textTransform: 'uppercase'
                }}
              >
                năng lực sản xuất
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 30,
                  padding: '32px 0'
                }}
              >
                {statistics.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <div
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}
                      >
                        <div>
                          <h2
                            style={{
                              fontSize: 32,
                              fontWeight: 700,
                              color: '#925846'
                            }}
                          >
                            {item.title}
                          </h2>
                          <p style={{fontSize: 14, whiteSpace: 'pre'}}>
                            {item.sub}
                          </p>
                        </div>
                      </div>
                      {index !== statistics.length - 1 && (
                        <div className="default-vertical-line" />
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <button className="app-btn-default">
              <Link href="/about-us">
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
                    Xem thêm Năng lực sản xuất
                  </span>
                  <PureImage
                    style={{width: 12}}
                    url="/landing/ICON-ARROW.svg"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div style={{flex: 1}}></div>
        </div>
        <div
          style={{
            position: 'absolute',
            right: 100,
            top: 220,
            zIndex: 1
          }}
        >
          <PureImage
            url="/landing/PRODUCTION-CAPACITY/TGN-LOGO-EFFECT.png"
            style={{maxHeight: 220, height: 'auto'}}
          />
        </div>
      </div>
      <div style={{padding: '40px 0'}}>
        <ProductionSlider />
      </div>
    </section>
  );
};

export default ProductionCapacity;

const statistics = [
  {
    title: '26',
    sub: 'Nhà máy\n và trạm trộn'
  },
  {
    title: '01',
    sub: 'Showroom siêu thị \n vật liệu xây dựng'
  },
  {
    title: '01',
    sub: 'Trung tâm \n kiểm định chất lượng'
  },
  {
    title: '600+',
    sub: 'Xe vận chuyển\n và máy móc'
  }
];
