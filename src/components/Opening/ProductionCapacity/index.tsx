import {Button} from '@/components/Common/Button';
import {SectionTitles} from '@/components/Common/Titles';
import {routes} from '@/utils/config';
import {Fragment} from 'react';
import {v4 as uuid} from 'uuid';
import {PureImage} from '../../Common/Images';
import ProductionSlider from './Slider';
import '@/styles/productioncapacity.scss';

const ProductionCapacity = () => {
  return (
    <section className="tgn-production-capacity-section">
      <div className="tgn-production-overlay">
        <PureImage url="/landing/CONSTRUCTION/OVERLAY.svg" />
      </div>
      <div className="container">
        <div className="tgn-production-content">
          <div className="tgn-production-left">
            <div>
              <SectionTitles title="năng lực sản xuất" />
              <div className="tgn-production-stats">
                {statistics.map((item) => {
                  return (
                    <Fragment key={uuid()}>
                      <div className="tgn-production-stat-item">
                        <div>
                          <div className="tgn-production-stat-number">
                            {item.title}
                          </div>
                          <p className="tgn-production-stat-text">{item.sub}</p>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <Button
              btnProps={{
                text: 'Xem thêm Năng lực sản xuất',
                linkTo: routes.productionCapacity
              }}
            />
          </div>
          <div className="tgn-production-right">
            <div className="tgn-production-backdrop">
              <PureImage
                url="/landing/PRODUCTION-CAPACITY/TGN-LOGO-EFFECT.png"
                style={{width: 540, height: 'auto', opacity: 0.12}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tgn-production-slider-section">
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
