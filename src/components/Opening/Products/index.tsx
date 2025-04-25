import {Button} from '@/components/Common/Button';
import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {routes} from '@/utils/config';
import ProductList from './ProductList';
import '@/styles/products.scss';

const Products = () => {
  return (
    <section className="tgn-products-section">
      <div className="container">
        <div className="tgn-products-content">
          <div className="tgn-products-info">
            <SectionTitles title="sản phẩm" />
            <p className="tgn-products-desc">
              <strong>Thế Giới Nhà</strong> cung cấp đa dạng sản phẩm vật liệu
              xây dựng, từ bê tông thương phẩm, cấu kiện bê tông đúc sẵn đến các
              vật liệu hoàn thiện, đáp ứng mọi nhu cầu của công trình với chất
              lượng cao và độ bền vượt trội.
            </p>
          </div>
          <div className="tgn-products-btn-container tgn-btn-wrapper">
            <Button
              btnProps={{
                text: 'Xem thêm tất cả sản phẩm',
                linkTo: routes.product
              }}
            />
          </div>
        </div>
        <ProductList />
        <div className="tgn-products-btn-container tgn-btn-wrapper-mobile">
          <Button
            btnProps={{
              text: 'Xem thêm tất cả sản phẩm',
              linkTo: routes.product
            }}
          />
        </div>
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
